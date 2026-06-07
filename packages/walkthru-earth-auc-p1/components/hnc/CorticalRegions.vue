<script setup lang="ts">
import { computed } from 'vue'
import type { HNCRow } from './types'
import { regionInfo } from './regions'
import { aoiSigma, type RegionBaseline } from './baselines'
import type { ScoreScale } from './config'

const props = defineProps<{
  row: HNCRow | null
  selectedAlias?: string | null
  atlasAvailable?: boolean
  baselines?: Record<string, RegionBaseline> | null
  scale?: ScoreScale
  compact?: boolean
}>()

const emit = defineEmits<{
  (e: 'selectAlias', alias: string | null): void
  (e: 'scaleChange', scale: ScoreScale): void
}>()

const effectiveScale = computed<ScoreScale>(() =>
  props.baselines && (props.scale ?? 'aoi') === 'aoi' ? 'aoi' : 'raw',
)

const ranked = computed(() => {
  const regions = props.row?.top_regions ?? []
  const scored = regions.map((r) => {
    const raw = Number(r.score)
    const value = effectiveScale.value === 'aoi'
      ? aoiSigma(raw, props.baselines?.[r.name])
      : raw
    return { name: r.name, raw, value }
  })
  scored.sort((a, b) => Math.abs(b.value) - Math.abs(a.value))
  return scored
})

const max = computed(() => ranked.value.reduce((m, r) => Math.max(m, Math.abs(r.value)), 0))

function display(value: number) {
  const unit = effectiveScale.value === 'aoi' ? 'σ' : 'z'
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}${unit}`
}

function pct(value: number) {
  return max.value > 0 ? (Math.abs(value) / max.value) * 50 : 0
}

function toggle(name: string) {
  emit('selectAlias', props.selectedAlias === name ? null : name)
}
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col py-3 sm:py-4">
    <div class="mb-2 flex items-start justify-between gap-3 sm:mb-3">
      <div class="min-w-0">
        <p class="hnc-eyebrow">
          What this image triggers
        </p>
        <p
          v-if="!compact"
          class="mt-1 max-w-prose text-[11px] leading-relaxed sm:text-xs"
          style="color: var(--hnc-muted-fg)"
        >
          {{ effectiveScale === 'aoi'
            ? 'σ units relative to this AOI baseline. +2σ = unusually high for that region.'
            : 'Raw model output. Switch to AOI σ for frame-relative readings.' }}
        </p>
      </div>
      <div
        v-if="baselines"
        class="hnc-seg shrink-0"
        role="group"
        aria-label="Score scale"
      >
        <button
          type="button"
          class="hnc-seg-opt"
          :data-active="effectiveScale === 'aoi'"
          @click="emit('scaleChange', 'aoi')"
        >
          AOI σ
        </button>
        <button
          type="button"
          class="hnc-seg-opt"
          :data-active="effectiveScale === 'raw'"
          @click="emit('scaleChange', 'raw')"
        >
          Raw z
        </button>
      </div>
    </div>

    <ol class="flex flex-1 flex-col gap-2 overflow-y-auto pr-1">
      <li v-if="ranked.length === 0" class="font-mono text-xs italic" style="color: var(--hnc-muted-fg)">
        No regional summary
      </li>
      <li v-for="(region, i) in ranked" :key="`${region.name}-${i}`">
        <button
          type="button"
          class="hnc-region-row"
          :aria-pressed="selectedAlias === region.name"
          :title="`${regionInfo(region.name).full} · ${regionInfo(region.name).blurb}`"
          @click="toggle(region.name)"
        >
          <div class="min-w-0">
            <p class="truncate text-[12px] font-semibold sm:text-sm" style="color: var(--hnc-fg)">
              {{ regionInfo(region.name).feeling }}
            </p>
            <p class="truncate font-mono text-[10px] sm:text-[11px]" style="color: var(--hnc-muted-fg)">
              {{ regionInfo(region.name).tech }}
            </p>
          </div>
          <div class="hnc-region-bar" :aria-label="`${regionInfo(region.name).feeling} ${region.value < 0 ? 'below' : 'above'} baseline`">
            <span class="hnc-region-bar-axis" aria-hidden="true" />
            <span
              class="hnc-region-bar-fill"
              :class="region.value < 0 ? 'is-negative' : 'is-positive'"
              :style="{ width: `${pct(region.value).toFixed(1)}%` }"
              aria-hidden="true"
            />
          </div>
          <span class="font-mono text-[10px] tabular-nums sm:text-[11px]" style="color: var(--hnc-muted-fg)">
            {{ display(region.value) }}
          </span>
        </button>
      </li>
    </ol>

    <div
      v-if="ranked.length > 0"
      class="mt-3 flex items-center justify-between font-mono text-[10px] tracking-wide uppercase sm:text-[11px]"
      style="color: var(--hnc-muted-fg)"
    >
      <span>Below baseline</span>
      <span aria-hidden="true">|</span>
      <span>Above baseline</span>
    </div>

    <p
      v-if="atlasAvailable === false && ranked.length > 0"
      class="mt-3 text-[10px] leading-snug sm:text-[11px]"
      style="color: var(--hnc-muted-fg)"
    >
      Region highlighting on the 3D cortex needs the HCP MMP1 parcel atlas. Without it, this list is read-only.
    </p>
  </div>
</template>
