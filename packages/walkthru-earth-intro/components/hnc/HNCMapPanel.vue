<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import maplibregl, { type Map as MlMap, type Marker } from 'maplibre-gl'
import { HNC_FLY, HNC_INITIAL_VIEW, HNC_MAP_STYLE, type ThemeMode } from './config'
import type { HNCRow } from './types'

const props = defineProps<{
  rows: HNCRow[]
  selectedId: string | null
  themeMode: ThemeMode
}>()

const emit = defineEmits<{ (e: 'select', id: string): void }>()

const containerRef = ref<HTMLDivElement | null>(null)
let map: MlMap | null = null
const markers = new Map<string, { marker: Marker, arrowEl: HTMLElement }>()

const ARROW_PATH = 'M12 5 L16.5 14 L12 11.5 L7.5 14 Z'
const ACCENT = 'hsl(158 64% 42%)'
const WARM = 'hsl(37 91% 55%)'

function buildArrowSvg(accent: string): SVGElement {
  const NS = 'http://www.w3.org/2000/svg'
  const svg = document.createElementNS(NS, 'svg')
  svg.setAttribute('viewBox', '0 0 24 24')
  const defs = document.createElementNS(NS, 'defs')
  const grad = document.createElementNS(NS, 'radialGradient')
  const gid = `g_${Math.random().toString(36).slice(2, 8)}`
  grad.setAttribute('id', gid)
  grad.setAttribute('cx', '50%')
  grad.setAttribute('cy', '35%')
  grad.setAttribute('r', '60%')
  const s0 = document.createElementNS(NS, 'stop')
  s0.setAttribute('offset', '0%')
  s0.setAttribute('stop-color', accent)
  s0.setAttribute('stop-opacity', '1')
  const s1 = document.createElementNS(NS, 'stop')
  s1.setAttribute('offset', '100%')
  s1.setAttribute('stop-color', accent)
  s1.setAttribute('stop-opacity', '0.2')
  grad.appendChild(s0)
  grad.appendChild(s1)
  defs.appendChild(grad)
  svg.appendChild(defs)

  const halo = document.createElementNS(NS, 'circle')
  halo.setAttribute('cx', '12')
  halo.setAttribute('cy', '12')
  halo.setAttribute('r', '10.5')
  halo.setAttribute('fill', 'white')
  halo.setAttribute('opacity', '0.85')

  const circle = document.createElementNS(NS, 'circle')
  circle.setAttribute('cx', '12')
  circle.setAttribute('cy', '12')
  circle.setAttribute('r', '9')
  circle.setAttribute('fill', `url(#${gid})`)
  circle.setAttribute('stroke', accent)
  circle.setAttribute('stroke-width', '2')

  const path = document.createElementNS(NS, 'path')
  path.setAttribute('d', ARROW_PATH)
  path.setAttribute('fill', 'currentColor')
  path.setAttribute('stroke', accent)
  path.setAttribute('stroke-width', '1')
  path.setAttribute('stroke-linejoin', 'round')

  svg.appendChild(halo)
  svg.appendChild(circle)
  svg.appendChild(path)
  return svg
}

function fitToData(m: MlMap, rows: HNCRow[]) {
  if (!rows.length) return
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity
  for (const r of rows) {
    if (r.lon < minLon) minLon = r.lon
    if (r.lon > maxLon) maxLon = r.lon
    if (r.lat < minLat) minLat = r.lat
    if (r.lat > maxLat) maxLat = r.lat
  }
  m.fitBounds([[minLon, minLat], [maxLon, maxLat]], { padding: 60, duration: 800, maxZoom: 17 })
}

function syncMarkers() {
  if (!map) return
  for (const m of markers.values()) m.marker.remove()
  markers.clear()
  for (const r of props.rows) {
    const el = document.createElement('div')
    el.className = 'hnc-marker'
    const arrow = document.createElement('div')
    arrow.className = 'hnc-marker-arrow'
    arrow.style.color = '#ffffff'
    arrow.appendChild(buildArrowSvg(ACCENT))
    el.appendChild(arrow)
    el.addEventListener('click', () => emit('select', r.image_id))
    const marker = new maplibregl.Marker({
      element: el,
      anchor: 'center',
      rotation: r.compass_angle ?? 0,
      rotationAlignment: 'map',
      pitchAlignment: 'map',
    })
      .setLngLat([r.lon, r.lat])
      .addTo(map)
    markers.set(r.image_id, { marker, arrowEl: arrow })
  }
  fitToData(map, props.rows)
}

function syncSelection() {
  if (!map) return
  for (const [id, ref] of markers) {
    const isSel = id === props.selectedId
    ref.arrowEl.classList.toggle('is-selected', isSel)
    ref.arrowEl.replaceChildren(buildArrowSvg(isSel ? WARM : ACCENT))
  }
  if (props.selectedId) {
    const row = props.rows.find(r => r.image_id === props.selectedId)
    if (row && map.loaded()) {
      const bearing = row.compass_angle ?? map.getBearing()
      map.flyTo({
        center: [row.lon, row.lat],
        zoom: Math.max(map.getZoom(), HNC_FLY.zoom),
        bearing,
        pitch: HNC_FLY.pitch,
        duration: HNC_FLY.durationMs,
        curve: HNC_FLY.curve,
        essential: true,
      })
    }
  }
}

onMounted(() => {
  if (!containerRef.value) return
  map = new maplibregl.Map({
    container: containerRef.value,
    style: HNC_MAP_STYLE[props.themeMode],
    center: HNC_INITIAL_VIEW.center,
    zoom: HNC_INITIAL_VIEW.zoom,
    pitch: HNC_INITIAL_VIEW.pitch,
    bearing: HNC_INITIAL_VIEW.bearing,
    attributionControl: { compact: true },
    cooperativeGestures: true,
  })
  map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'top-right')
  const apply = () => {
    syncMarkers()
    syncSelection()
  }
  if (map.loaded()) apply()
  else map.once('load', apply)
})

onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
  markers.clear()
})

watch(() => props.themeMode, (mode) => {
  if (map) map.setStyle(HNC_MAP_STYLE[mode])
})

watch(() => props.rows, () => {
  if (!map) return
  if (map.loaded()) syncMarkers()
  else map.once('load', syncMarkers)
}, { deep: false })

watch(() => props.selectedId, () => {
  syncSelection()
})
</script>

<template>
  <div
    ref="containerRef"
    class="hnc-map relative h-full w-full"
    role="region"
    aria-label="London Borough Market street-level capture map"
  />
</template>
