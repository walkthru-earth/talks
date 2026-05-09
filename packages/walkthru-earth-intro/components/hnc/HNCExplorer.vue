<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'
import type { AsyncBuffer } from 'hyparquet'
import HNCMapPanel from './HNCMapPanel.vue'
import HNCBrainPanel from './HNCBrainPanel.vue'
import FrameMeta from './FrameMeta.vue'
import FrameImage from './FrameImage.vue'
import FrameWalker from './FrameWalker.vue'
import FrameScrub from './FrameScrub.vue'
import CorticalRegions from './CorticalRegions.vue'
import RegionRadar from './RegionRadar.vue'
import { regionInfo } from './regions'
import { HNC_LEGEND_GRADIENT } from './colormap'
import { HNC_WALK_INTERVAL_MS, type ScoreScale, type SurfaceMode, type ThemeMode } from './config'
import { loadParquetHeavy, loadParquetLight } from './parquet'
import { loadRegionBaselines, type RegionBaseline } from './baselines'
import type { HNCHeavy, HNCRow } from './types'
import './hnc.css'

const themeMode = ref<ThemeMode>('light')

const rows = shallowRef<HNCRow[]>([])
let parquetFile: AsyncBuffer | null = null
const heavyCache = shallowRef<Map<string, HNCHeavy>>(new Map())
const heavyLoading = ref(false)
const selectedId = ref<string | null>(null)
const selectedAlias = ref<string | null>(null)
const atlasAvailable = ref<boolean | undefined>(undefined)
const baselines = shallowRef<Record<string, RegionBaseline> | null>(null)
const scoreScale = ref<ScoreScale>('aoi')
const surface = ref<SurfaceMode>('inflated')
const isPlaying = ref(true)
const playSpeed = ref(30)
const status = ref<{ msg: string, isError: boolean }>({ msg: 'Fetching parquet…', isError: false })

function setStatus(msg: string, isError = false) {
  if (status.value.msg === msg && status.value.isError === isError) return
  status.value = { msg, isError }
}

const indexById = computed(() => {
  const map = new Map<string, number>()
  rows.value.forEach((r, i) => map.set(r.image_id, i))
  return map
})

const selectedIndex = computed(() => (selectedId.value ? (indexById.value.get(selectedId.value) ?? -1) : -1))
const selectedRow = computed(() => (selectedIndex.value >= 0 ? rows.value[selectedIndex.value] : null))
const selectedHeavy = computed(() => (selectedId.value ? heavyCache.value.get(selectedId.value) : undefined))
const topRegion = computed(() => selectedRow.value?.top_regions?.[0] ?? null)

function step(delta: number) {
  if (rows.value.length <= 1) return
  const cur = selectedIndex.value >= 0 ? selectedIndex.value : 0
  const next = (cur + delta + rows.value.length) % rows.value.length
  if (next === cur) return
  selectedId.value = rows.value[next].image_id
}

function seekTo(i: number) {
  if (!rows.value.length) return
  const clamped = Math.max(0, Math.min(rows.value.length - 1, i))
  selectedId.value = rows.value[clamped].image_id
}

let walkTimer: number | null = null
const tabVisible = ref(true)

function clearWalkTimer() {
  if (walkTimer != null) {
    window.clearInterval(walkTimer)
    walkTimer = null
  }
}
function startWalkTimer() {
  clearWalkTimer()
  if (!isPlaying.value || !tabVisible.value || rows.value.length <= 1) return
  const interval = Math.max(40, HNC_WALK_INTERVAL_MS / playSpeed.value)
  walkTimer = window.setInterval(() => step(1), interval)
}

watch([isPlaying, playSpeed, tabVisible, rows], () => startWalkTimer(), { flush: 'post' })

function onVisibility() { tabVisible.value = !document.hidden }

function onKey(e: KeyboardEvent) {
  if (e.repeat) return
  const target = e.target as HTMLElement | null
  if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return
  if (e.key === 'ArrowLeft') { isPlaying.value = false; step(-1) }
  else if (e.key === 'ArrowRight') { isPlaying.value = false; step(1) }
  else if (e.key === ' ') { e.preventDefault(); isPlaying.value = !isPlaying.value }
  else if (e.key === 'Escape') { selectedAlias.value = null }
}

onMounted(async () => {
  tabVisible.value = !document.hidden
  document.addEventListener('visibilitychange', onVisibility)
  window.addEventListener('keydown', onKey)

  loadRegionBaselines().then((b) => { baselines.value = b })

  try {
    const result = await loadParquetLight()
    rows.value = result.rows
    parquetFile = result.file
    setStatus(`Loaded ${result.rows.length} images`)
    if (result.rows[0]) selectedId.value = result.rows[0].image_id

    heavyLoading.value = true
    setStatus('Decoding image blobs and cortical maps…')
    try {
      const cache = await loadParquetHeavy(parquetFile)
      heavyCache.value = cache
      setStatus(`Cache ready · ${cache.size} frames`)
    }
    catch (err) {
      console.error('[hnc] heavy load failed', err)
      setStatus(`Heavy decode error: ${(err as Error).message}`, true)
    }
    finally { heavyLoading.value = false }
  }
  catch (err) {
    console.error('[hnc] parquet load failed', err)
    setStatus(`Parquet error: ${(err as Error).message}`, true)
  }
})

onBeforeUnmount(() => {
  clearWalkTimer()
  document.removeEventListener('visibilitychange', onVisibility)
  window.removeEventListener('keydown', onKey)
  for (const heavy of heavyCache.value.values()) {
    if (heavy.blobUrl) URL.revokeObjectURL(heavy.blobUrl)
  }
})

const SPEEDS = [
  { label: '0.5×', value: 0.5 },
  { label: '1×', value: 1 },
  { label: '2×', value: 2 },
  { label: '4×', value: 4 },
  { label: '8×', value: 8 },
  { label: '30×', value: 30 },
]
const SURFACES = [
  { label: 'Inflated', value: 'inflated' as const },
  { label: 'Pial', value: 'pial' as const },
]
</script>

<template>
  <div class="hnc-shell">
    <!-- Title strip -->
    <header class="hnc-titlebar">
      <div class="hnc-titlebar-left">
        <span class="hnc-titlebar-eyebrow">Hormones &amp; Cities, Live Experiment</span>
        <span class="hnc-titlebar-title">From a London street, to predicted brain activity</span>
      </div>
      <div class="hnc-titlebar-chips">
        <span class="hnc-chip">TRIBE v2</span>
        <span class="hnc-chip">V-JEPA2 ViT-G</span>
        <span class="hnc-chip">fsaverage5, 20 484 vertices</span>
      </div>
    </header>

    <!-- Compact control row -->
    <div class="hnc-controlbar">
      <div class="hnc-stat">
        <span class="hnc-stat-label">Frames</span>
        <span class="hnc-stat-value">{{ rows.length ? rows.length.toLocaleString() : '—' }}</span>
      </div>
      <div class="hnc-stat hnc-stat-wide">
        <span class="hnc-stat-label">Strongest signal</span>
        <span class="hnc-stat-value">{{ topRegion ? `${regionInfo(topRegion.name).feeling} · ${Number(topRegion.score) >= 0 ? 'above' : 'below'} baseline` : '—' }}</span>
      </div>
      <div class="hnc-controlbar-spacer" />
      <FrameWalker
        :is-playing="isPlaying"
        @prev="() => { isPlaying = false; step(-1) }"
        @next="() => { isPlaying = false; step(1) }"
        @toggle-play="() => { isPlaying = !isPlaying }"
      />
      <div class="hnc-seg" role="group" aria-label="Auto-walk speed">
        <button v-for="opt in SPEEDS" :key="opt.value" type="button" class="hnc-seg-opt" :data-active="opt.value === playSpeed" @click="playSpeed = opt.value">
          {{ opt.label }}
        </button>
      </div>
      <div class="hnc-seg" role="group" aria-label="Surface mode">
        <button v-for="opt in SURFACES" :key="opt.value" type="button" class="hnc-seg-opt" :data-active="opt.value === surface" @click="surface = opt.value">
          {{ opt.label }}
        </button>
      </div>
    </div>

    <!-- Three-column body -->
    <div class="hnc-grid">
      <!-- Left: frame + scrub + map -->
      <section class="hnc-panel hnc-col-frame">
        <header class="hnc-col-header">
          <span class="hnc-eyebrow">Source · Mapillary</span>
          <FrameMeta :row="selectedRow" />
        </header>
        <div class="hnc-col-frame-image">
          <FrameImage
            :row="selectedRow"
            :heavy="selectedHeavy"
            :index="selectedIndex >= 0 ? selectedIndex : 0"
            :total="rows.length"
            fill
          />
        </div>
        <div class="hnc-col-frame-scrub">
          <FrameScrub
            :index="selectedIndex >= 0 ? selectedIndex : 0"
            :total="rows.length"
            @seek="(i) => { isPlaying = false; seekTo(i) }"
          />
        </div>
        <div class="hnc-divider" aria-hidden="true" />
        <header class="hnc-col-header hnc-col-header-tight">
          <span class="hnc-eyebrow">Sample area</span>
          <h3 class="hnc-col-title">London · Borough Market AOI</h3>
        </header>
        <div class="hnc-col-frame-map">
          <div class="hnc-map-canvas">
            <HNCMapPanel
              :rows="rows"
              :selected-id="selectedId"
              :theme-mode="themeMode"
              @select="(id) => { isPlaying = false; selectedId = id }"
            />
          </div>
        </div>
      </section>

      <!-- Middle: brain -->
      <section class="hnc-panel hnc-col-brain">
        <header class="hnc-col-header">
          <span class="hnc-eyebrow">Model · TRIBE v2</span>
          <div class="hnc-col-headline">
            <h3 class="hnc-col-title">Predicted cortex · fsaverage5</h3>
            <button
              v-if="selectedAlias"
              type="button"
              class="hnc-spot-chip"
              title="Clear spotlight (Esc)"
              @click="selectedAlias = null"
            >
              <span class="hnc-spot-dot" />
              <span class="truncate">{{ regionInfo(selectedAlias).feeling }}</span>
              <span class="hnc-mono-tiny">{{ regionInfo(selectedAlias).tech }}</span>
              <span aria-hidden="true">✕</span>
            </button>
          </div>
        </header>
        <div class="hnc-col-brain-canvas">
          <div class="hnc-brain-canvas">
            <HNCBrainPanel
              :surface="surface"
              :brain-activity="selectedHeavy?.brainActivity ?? null"
              :spotlight-alias="selectedAlias"
              @atlas-ready="(v) => atlasAvailable = v"
              @status="(m) => setStatus(m)"
            />
          </div>
        </div>
        <div class="hnc-legend">
          <span>Below</span>
          <span class="hnc-legend-bar" :style="{ background: HNC_LEGEND_GRADIENT }">
            <span class="hnc-legend-zero" />
          </span>
          <span>Above</span>
        </div>
      </section>

      <!-- Right: radar + regions -->
      <section class="hnc-panel hnc-col-right">
        <div class="hnc-col-radar">
          <RegionRadar
            v-if="selectedRow"
            :row="selectedRow"
            :baselines="baselines"
            :selected-alias="selectedAlias"
            @select-alias="(a) => selectedAlias = a"
          />
        </div>
        <div class="hnc-divider" aria-hidden="true" />
        <div class="hnc-col-regions">
          <CorticalRegions
            :row="selectedRow"
            :selected-alias="selectedAlias"
            :atlas-available="atlasAvailable"
            :baselines="baselines"
            :scale="scoreScale"
            compact
            @select-alias="(a) => selectedAlias = a"
            @scale-change="(s) => scoreScale = s"
          />
        </div>
      </section>
    </div>

    <!-- Footer status -->
    <footer class="hnc-footerbar">
      <div class="hnc-footerbar-left">
        <span class="hnc-footer-icon" style="color: var(--hnc-secondary)">●</span>
        Mapillary, Borough Market AOI
        <span class="hnc-footer-sep">·</span>
        Predicted cortex per frame
        <span class="hnc-footer-sep">·</span>
        8 functional regions
      </div>
      <span
        class="hnc-status-pill"
        :class="{ 'is-error': status.isError }"
        role="status"
        aria-live="polite"
      >{{ status.msg }}</span>
    </footer>
  </div>
</template>
