<script setup lang="ts">
import { computed } from 'vue'
import { regionInfo } from './regions'
import { aoiSigma, type RegionBaseline } from './baselines'
import type { HNCRow } from './types'

const props = defineProps<{
  row: HNCRow | null
  baselines: Record<string, RegionBaseline> | null
  selectedAlias?: string | null
}>()

const emit = defineEmits<{ (e: 'selectAlias', alias: string | null): void }>()

const RING_SIGMAS = [-3, -1.5, 0, 1.5, 3]
const RING_LABELS: Record<number, string> = { [-3]: '−3σ', [0]: 'baseline', [3]: '+3σ' }

const radius = 58
const cx = 100
const cy = 92
const maxSigma = 3

// Fixed axis order so the regions stay in the same place every frame and only
// the polygon (the values) animates. Grouped by category, vision, language,
// social, clockwise from the top. top_regions is otherwise sorted by score,
// which would make the labels jump around frame to frame.
const RADAR_REGIONS = ['FFA', 'PPA', 'EBA', 'V1', 'VWFA', 'Broca45', 'A5', 'STSdp', 'STSva', 'TPJ']

const data = computed(() => {
  const byName = new Map((props.row?.top_regions ?? []).map(r => [r.name, Number(r.score)]))
  return RADAR_REGIONS.map((name) => {
    const raw = byName.get(name)
    if (raw == null) return { alias: name, sigma: 0 }
    return {
      alias: name,
      sigma: props.baselines ? aoiSigma(raw, props.baselines[name]) : raw,
    }
  })
})

const hasBaselines = computed(() => !!props.baselines)

function angleFor(i: number) {
  return (i / data.value.length) * Math.PI * 2 - Math.PI / 2
}
function radiusFor(sigma: number) {
  return (Math.max(-maxSigma, Math.min(maxSigma, sigma)) / maxSigma) * radius
}

const polygon = computed(() => data.value
  .map((d, i) => {
    const a = angleFor(i)
    const r = radius / 2 + radiusFor(d.sigma) / 2
    return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`
  })
  .join(' '))

// Place the ring scale labels along the empty wedge between the first two
// spokes so they never collide with the top region label on the vertical axis.
const ringLabelAngle = computed(() => -Math.PI / 2 + Math.PI / Math.max(data.value.length, 3))

function ringLabelEntries() {
  const a = ringLabelAngle.value
  return RING_SIGMAS.filter(s => s in RING_LABELS).map((s) => {
    const r = radius / 2 + radiusFor(s) / 2
    return {
      s,
      label: RING_LABELS[s],
      x: cx + Math.cos(a) * r,
      y: cy + Math.sin(a) * r,
    }
  })
}

function vertex(d: { alias: string, sigma: number }, i: number) {
  const a = angleFor(i)
  const r = radius / 2 + radiusFor(d.sigma) / 2
  return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r }
}

function spoke(i: number) {
  const a = angleFor(i)
  return { ex: cx + Math.cos(a) * radius, ey: cy + Math.sin(a) * radius }
}

function label(d: { alias: string }, i: number) {
  const a = angleFor(i)
  const lr = radius + 8
  const x = cx + Math.cos(a) * lr
  const y = cy + Math.sin(a) * lr
  const anchor = Math.abs(Math.cos(a)) < 0.2 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end'
  return { x, y: y + 3, anchor }
}

function toggleAlias(alias: string) {
  emit('selectAlias', props.selectedAlias === alias ? null : alias)
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-baseline justify-between">
      <p class="hnc-eyebrow">
        Cognitive fingerprint
      </p>
      <p class="text-[10px] font-mono" style="color: var(--hnc-muted-fg)">
        {{ hasBaselines ? 'AOI σ' : 'raw z' }}
      </p>
    </div>

    <svg
      viewBox="-8 0 216 184"
      class="w-full"
      role="img"
      aria-label="Region fingerprint radar"
    >
      <circle
        v-for="s in RING_SIGMAS"
        :key="`ring-${s}`"
        :cx="cx"
        :cy="cy"
        :r="radius / 2 + radiusFor(s) / 2"
        fill="none"
        :stroke="s === 0 ? 'rgba(31,41,55,0.4)' : 'rgba(31,41,55,0.1)'"
        :stroke-dasharray="s === 0 ? undefined : '2 3'"
        :stroke-width="s === 0 ? 1 : 0.6"
      />

      <line
        v-for="(d, i) in data"
        :key="`spoke-${d.alias}`"
        :x1="cx"
        :y1="cy"
        :x2="spoke(i).ex"
        :y2="spoke(i).ey"
        stroke="rgba(31,41,55,0.1)"
        stroke-width="0.5"
      />

      <polygon
        v-if="data.length >= 3"
        :points="polygon"
        fill="rgba(61,217,167,0.15)"
        stroke="rgba(61,217,167,0.7)"
        stroke-width="1.2"
        stroke-linejoin="round"
      />

      <g v-for="(d, i) in data" :key="`v-${d.alias}`">
        <circle
          :cx="vertex(d, i).x"
          :cy="vertex(d, i).y"
          :r="selectedAlias === d.alias ? 3.4 : 2.4"
          :fill="d.sigma < 0 ? '#0ea5e9' : '#f43f5e'"
          :stroke="selectedAlias === d.alias ? '#ffffff' : 'none'"
          :stroke-width="selectedAlias === d.alias ? 1.4 : 0"
          :style="{ cursor: 'pointer' }"
          @click="toggleAlias(d.alias)"
        >
          <title>{{ regionInfo(d.alias).feeling }} ({{ regionInfo(d.alias).tech }}), {{ d.sigma < 0 ? 'below' : 'above' }} baseline {{ Math.abs(d.sigma).toFixed(2) }}{{ hasBaselines ? 'σ' : ' z' }}</title>
        </circle>
      </g>

      <text
        v-for="(d, i) in data"
        :key="`l-${d.alias}`"
        :x="label(d, i).x"
        :y="label(d, i).y"
        :text-anchor="label(d, i).anchor"
        :fill="selectedAlias === d.alias ? 'var(--hnc-fg)' : 'var(--hnc-muted-fg)'"
        :style="{ cursor: 'pointer', fontSize: '7px', fontWeight: selectedAlias === d.alias ? 700 : 600 }"
        @click="toggleAlias(d.alias)"
      >
        {{ d.alias }}
      </text>

      <text
        v-for="entry in ringLabelEntries()"
        :key="`rl-${entry.s}`"
        :x="entry.x"
        :y="entry.y + 1"
        text-anchor="middle"
        font-family="ui-monospace, SF Mono, Menlo, Consolas, monospace"
        fill="rgba(107,114,128,0.7)"
        style="font-size: 5px; font-weight: 600"
      >
        {{ entry.label }}
      </text>
    </svg>

    <p
      v-if="!hasBaselines"
      class="text-[10px] leading-snug"
      style="color: var(--hnc-muted-fg)"
    >
      Showing raw z. AOI baselines unavailable.
    </p>
  </div>
</template>
