<script setup>
// Reusable entrance animation. Wraps content in a v-motion element that
// rises and fades in on slide enter. Stagger siblings with the `delay` prop.
// Attributes (class, etc.) fall through to the root, so a Reveal can BE a card:
//   <Reveal class="rounded-2xl border-2 p-6" :delay="150"> ... </Reveal>
defineProps({
  delay: { type: Number, default: 0 },
  y: { type: Number, default: 24 },
  x: { type: Number, default: 0 },
  duration: { type: Number, default: 500 },
})
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y, x }"
    :enter="{ opacity: 1, y: 0, x: 0, transition: { delay, duration, ease: 'easeOut' } }"
  >
    <slot />
  </div>
</template>
