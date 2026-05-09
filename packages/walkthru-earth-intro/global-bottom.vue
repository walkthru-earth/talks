<script setup lang="ts">
import { useNav } from "@slidev/client";
import { computed } from "vue";

const { currentSlideRoute } = useNav();
const slideNo = computed(() => currentSlideRoute.value.no);

// Helper to generate deterministic positions based on slide number
function getStyle(index: number) {
  const seed = slideNo.value + index * 123.45;

  // Position varies nicely between 10% and 90%
  const x = 50 + 35 * Math.sin(seed);
  const y = 50 + 35 * Math.cos(seed * 0.8);

  // Scale breathes between 0.9 and 1.3
  const scale = 1 + 0.3 * Math.sin(seed * 1.2);

  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: `translate(-50%, -50%) scale(${scale})`,
  };
}
</script>

<template>
  <div class="bg-container">
    <div class="blobs-wrapper" aria-hidden="true">
      <!-- 
        Updated Colors per user request:
        Background: #f7f6f3
        Accent: #2f7f7a (Teal)
      -->

      <!-- Blob 1: Teal Accent #2f7f7a (Primary Brand) -->
      <div
        class="blob"
        style="background: #2f7f7a; width: 45vw; height: 45vw; opacity: 0.4"
        :style="getStyle(1)"
      />

      <!-- Blob 2: Warm Amber (Secondary Brand) -->
      <div
        class="blob"
        style="background: #fbbf24; width: 35vw; height: 35vw; opacity: 0.3"
        :style="getStyle(2)"
      />

      <!-- Blob 3: Warmer Beige/White for softness -->
      <div
        class="blob"
        style="background: #ffffff; width: 40vw; height: 40vw; opacity: 0.5"
        :style="getStyle(3)"
      />

      <!-- Blob 4: Light Teal Tint -->
      <div
        class="blob"
        style="background: #e0f2f1; width: 30vw; height: 30vw; opacity: 0.3"
        :style="getStyle(4)"
      />
    </div>
  </div>
</template>

<style scoped>
.bg-container {
  position: absolute;
  inset: 0;
  z-index: -10;
  pointer-events: none;
  overflow: hidden;
  background-color: #f7f6f3; /* Exact background from user */
}

.blobs-wrapper {
  position: absolute;
  inset: 0;
  filter: blur(80px);
}

.blob {
  position: absolute;
  border-radius: 50%;
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
