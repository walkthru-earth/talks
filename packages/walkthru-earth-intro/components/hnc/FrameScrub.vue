<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  index: number
  total: number
}>()

const emit = defineEmits<{ (e: 'seek', i: number): void }>()

const trackRef = ref<HTMLDivElement | null>(null)

const tickCount = computed(() => Math.min(props.total, 64))
const ticks = computed(() => {
  if (props.total <= 1) return [] as number[]
  return Array.from({ length: tickCount.value }, (_, i) =>
    Math.round((i / (tickCount.value - 1)) * (props.total - 1)))
})
const pct = computed(() => (props.total > 1 ? (props.index / (props.total - 1)) * 100 : 0))

function seekFromEvent(clientX: number) {
  const el = trackRef.value
  if (!el || props.total <= 1) return
  const rect = el.getBoundingClientRect()
  const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
  const ratio = rect.width > 0 ? x / rect.width : 0
  emit('seek', Math.round(ratio * (props.total - 1)))
}

function onPointerDown(e: PointerEvent) {
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  seekFromEvent(e.clientX)
}
function onPointerMove(e: PointerEvent) {
  if (e.buttons === 1) seekFromEvent(e.clientX)
}
function onKey(e: KeyboardEvent) {
  if (props.total <= 1) return
  if (e.key === 'ArrowLeft') {
    e.preventDefault()
    emit('seek', Math.max(0, props.index - 1))
  }
  else if (e.key === 'ArrowRight') {
    e.preventDefault()
    emit('seek', Math.min(props.total - 1, props.index + 1))
  }
}
</script>

<template>
  <div class="flex items-center gap-3 font-mono text-[10px] tabular-nums">
    <span class="w-10 text-right" style="color: var(--hnc-muted-fg)">{{ String(index + 1).padStart(2, '0') }}</span>
    <div
      ref="trackRef"
      class="hnc-scrub flex-1"
      role="slider"
      aria-label="Frame scrubber"
      :aria-valuemin="1"
      :aria-valuemax="Math.max(1, total)"
      :aria-valuenow="index + 1"
      tabindex="0"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @keydown="onKey"
    >
      <span class="hnc-scrub-rail" aria-hidden="true" />
      <span class="hnc-scrub-fill" :style="{ width: `${pct}%` }" aria-hidden="true" />
      <span
        v-for="(t, i) in ticks"
        :key="i"
        class="hnc-scrub-tick"
        :style="{ left: `${(t / Math.max(1, total - 1)) * 100}%` }"
        aria-hidden="true"
      />
      <span class="hnc-scrub-thumb" :style="{ left: `${pct}%` }" aria-hidden="true" />
    </div>
    <span class="w-10" style="color: var(--hnc-muted-fg)">{{ String(total).padStart(2, '0') }}</span>
  </div>
</template>
