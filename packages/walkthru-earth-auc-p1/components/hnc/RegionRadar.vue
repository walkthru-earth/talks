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

const radius = 78
const cx = 100
const cy = 92
const maxSigma = 3

const data = computed(() => {
  const regions = props.row?.top_regions ?? []
  return regions.map(r => ({
    alias: r.name,
    sigma: props.baselines ? aoiSigma(Number(r.score), props.baselines[r.name]) : Number(r.score),
  }))
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

function ringLabelEntries() {
  return RING_SIGMAS.filter(s => s in RING_LABELS).map(s => ({
    s,
    label: RING_LABELS[s],
    r: radius / 2 + radiusFor(s) / 2,
  }))
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
  const lr = radius + 9
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
      viewBox="0 0 200 184"
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
        :font-size="3.15"
        :font-weight="selectedAlias === d.alias ? 600 : 400"
        :fill="selectedAlias === d.alias ? 'var(--hnc-fg)' : 'var(--hnc-muted-fg)'"
        :style="{ cursor: 'pointer' }"
        @click="toggleAlias(d.alias)"
      >
        {{ d.alias }}
      </text>

      <text
        v-for="entry in ringLabelEntries()"
        :key="`rl-${entry.s}`"
        :x="cx + 2"
        :y="cy - entry.r - 1.5"
        font-size="2.7"
        font-family="ui-monospace, SF Mono, Menlo, Consolas, monospace"
        fill="rgba(107,114,128,0.7)"
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
