<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
  type BrainAssembly,
  loadHemispheres,
  loadParcelAtlas,
  type ParcelAtlas,
  paintBrainActivity,
} from './brain-mesh'
import type { SurfaceMode } from './config'

const props = defineProps<{
  surface: SurfaceMode
  brainActivity: Float32Array | null
  spotlightAlias?: string | null
}>()

const emit = defineEmits<{
  (e: 'atlasReady', available: boolean): void
  (e: 'status', msg: string): void
}>()

const containerRef = ref<HTMLDivElement | null>(null)

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let controls: OrbitControls | null = null
let rafId = 0
let resizeObs: ResizeObserver | null = null
let assembly: BrainAssembly | null = null
let atlas: ParcelAtlas | null = null

function repaint() {
  paintBrainActivity(assembly, props.brainActivity, {
    spotlight: props.spotlightAlias ?? null,
    atlas,
  })
}

async function loadSurface(surface: SurfaceMode) {
  if (!scene || !camera || !controls) return
  emit('status', 'Loading cortex…')
  try {
    const next = await loadHemispheres(surface)
    if (!scene) return
    if (assembly) {
      scene.remove(assembly.group)
      assembly.group.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose()
          const mat = obj.material as THREE.Material | THREE.Material[]
          if (Array.isArray(mat)) mat.forEach(m => m.dispose())
          else mat?.dispose()
        }
      })
    }
    assembly = next
    scene.add(next.group)
    controls.target.set(0, 0, 0)
    camera.position.set(0, 0.15, 2.4)
    camera.lookAt(0, 0, 0)
    repaint()
    emit('status', 'Cortex ready')
  }
  catch (err) {
    console.error('[hnc] hemisphere load failed', err)
    emit('status', `Cortex load error: ${(err as Error).message}`)
  }
}

onMounted(async () => {
  const container = containerRef.value
  if (!container) return

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.5))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const initialW = container.clientWidth || 1
  const initialH = container.clientHeight || 1
  renderer.setSize(initialW, initialH)
  container.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(40, initialW / initialH, 0.01, 100)
  camera.position.set(0, 0, 2.6)

  scene.add(new THREE.AmbientLight(0xFFFFFF, 0.55))
  const key = new THREE.DirectionalLight(0xFFFFFF, 0.85)
  key.position.set(2, 2, 3)
  scene.add(key)
  const rim = new THREE.DirectionalLight(0xB388FF, 0.4)
  rim.position.set(-2, 1, -2)
  scene.add(rim)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.rotateSpeed = 0.6
  controls.minDistance = 1.2
  controls.maxDistance = 6
  controls.enablePan = false

  resizeObs = new ResizeObserver(() => {
    const w = container.clientWidth
    const h = container.clientHeight
    if (!w || !h || !renderer || !camera) return
    renderer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  })
  resizeObs.observe(container)

  const tick = () => {
    if (controls) controls.update()
    if (renderer && scene && camera) renderer.render(scene, camera)
    rafId = requestAnimationFrame(tick)
  }
  tick()

  loadParcelAtlas().then((a) => {
    atlas = a
    emit('atlasReady', !!a)
    repaint()
  })

  loadSurface(props.surface)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  resizeObs?.disconnect()
  controls?.dispose()
  renderer?.dispose()
  if (renderer && containerRef.value && renderer.domElement.parentNode === containerRef.value) {
    containerRef.value.removeChild(renderer.domElement)
  }
  renderer = null
  scene = null
  camera = null
  controls = null
  assembly = null
})

watch(() => props.surface, (s) => {
  loadSurface(s)
})

watch(() => props.brainActivity, () => repaint())
watch(() => props.spotlightAlias, () => repaint())
</script>

<template>
  <div
    ref="containerRef"
    class="hnc-brain relative h-full w-full"
    role="region"
    aria-label="Predicted cortical activity, fsaverage5 surface"
  />
</template>
