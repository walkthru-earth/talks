<script setup lang="ts">
import { computed } from 'vue'
import type { HNCRow } from './types'

const props = defineProps<{ row: HNCRow | null }>()

function formatTimestamp(ts: HNCRow['captured_at']): string {
  if (ts == null) return '—'
  const ms = ts instanceof Date ? ts.getTime() : Number(ts)
  if (!Number.isFinite(ms) || ms === 0) return String(ts)
  const d = new Date(ms)
  if (Number.isNaN(d.getTime())) return String(ts)
  return d.toISOString().replace('T', ' ').slice(0, 16)
}

const meta = computed(() => {
  const r = props.row
  if (!r) return 'Pick an image'
  const heading = r.compass_angle != null ? `${Math.round(r.compass_angle)}°` : 'no heading'
  return `${formatTimestamp(r.captured_at)} · ${r.camera_type ?? 'unknown'} · ${heading}`
})
</script>

<template>
  <div>
    <h3 class="text-sm font-semibold tracking-tight sm:text-base" style="color: var(--hnc-fg)">
      Frame
    </h3>
    <p class="font-mono text-[11px] sm:text-xs" style="color: var(--hnc-muted-fg)">
      {{ meta }}
    </p>
  </div>
</template>
