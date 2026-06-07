<script setup lang="ts">
defineProps<{ isPlaying: boolean }>()
const emit = defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
  (e: 'togglePlay'): void
}>()
</script>

<template>
  <div class="hnc-walker" role="group" aria-label="Frame walker">
    <button
      type="button"
      class="hnc-walker-btn"
      aria-label="Previous frame"
      @click="emit('prev')"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
    <button
      type="button"
      class="hnc-walker-play"
      :aria-label="isPlaying ? 'Pause auto-walk' : 'Auto-walk frames'"
      :aria-pressed="isPlaying"
      @click="emit('togglePlay')"
    >
      <svg v-if="isPlaying" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <rect x="6" y="5" width="4" height="14" rx="1" />
        <rect x="14" y="5" width="4" height="14" rx="1" />
      </svg>
      <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-left: 2px">
        <polygon points="6 4 20 12 6 20 6 4" />
      </svg>
    </button>
    <button
      type="button"
      class="hnc-walker-btn"
      aria-label="Next frame"
      @click="emit('next')"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  </div>
</template>
