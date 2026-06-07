<script setup>
// Hand-drawn rough marker around its slotted text. We draw with rough-notation
// directly instead of the v-mark directive because v-mark measures the word at
// slide enter, before a centered layout has settled, and ends up drawing in the
// wrong place. Here we wait for the slide to settle, then annotate the real,
// laid out element, and redraw on resize so it always tracks the word.
import { ref, watch, nextTick } from 'vue'
import { annotate } from '@slidev/rough-notation'
import { useIsSlideActive } from '@slidev/client'

const props = defineProps({
  type: { type: String, default: 'underline' },
  color: { type: String, default: '#f43f5e' },
  delay: { type: Number, default: 250 },
  strokeWidth: { type: Number, default: 2 },
})

const el = ref(null)
const isActive = useIsSlideActive()
let annotation = null
let timer = null

function draw() {
  if (!el.value || !el.value.offsetWidth) return
  if (annotation) {
    annotation.remove()
    annotation = null
  }
  annotation = annotate(el.value, {
    type: props.type,
    color: props.color,
    strokeWidth: props.strokeWidth,
    padding: props.type === 'circle' ? [4, 10] : 2,
    animationDuration: 700,
    iterations: 2,
  })
  annotation.show()
}

function onResize() {
  if (isActive.value) draw()
}

watch(isActive, async (active) => {
  clearTimeout(timer)
  if (active) {
    await nextTick()
    timer = setTimeout(draw, props.delay)
    window.addEventListener('resize', onResize)
  } else {
    window.removeEventListener('resize', onResize)
    annotation?.hide()
  }
}, { immediate: true })
</script>

<template>
  <span ref="el"><slot /></span>
</template>
