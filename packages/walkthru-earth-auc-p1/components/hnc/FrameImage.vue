<script setup lang="ts">
import type { HNCHeavy, HNCRow } from './types'

const props = defineProps<{
  row: HNCRow | null
  heavy: HNCHeavy | undefined
  index: number
  total: number
  fill?: boolean
}>()
</script>

<template>
  <div
    class="relative overflow-hidden rounded-lg border"
    :class="props.fill ? 'h-full w-full flex-1' : 'aspect-[4/3] w-full'"
    style="background: rgba(229, 231, 235, 0.4); border-color: var(--hnc-border)"
  >
    <img
      v-if="props.heavy?.blobUrl"
      :src="props.heavy.blobUrl"
      :alt="props.row ? `Mapillary frame ${props.row.image_id}` : 'Selected frame'"
      class="absolute inset-0 h-full w-full object-cover"
    >
    <div
      v-else
      class="absolute inset-0 flex items-center justify-center font-mono text-xs"
      style="color: var(--hnc-muted-fg)"
    >
      {{ props.row ? 'Decoding…' : 'No image selected' }}
    </div>
    <div
      v-if="props.total > 0"
      class="absolute right-2 bottom-2 rounded-full px-2 py-0.5 font-mono text-[10px] backdrop-blur-sm"
      style="background: rgba(255, 255, 255, 0.7); color: var(--hnc-fg)"
    >
      {{ props.index + 1 }} / {{ props.total }}
    </div>
  </div>
</template>
