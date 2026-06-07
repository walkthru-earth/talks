<script setup>
// Reusable zoom morph, the PowerPoint "zoom into a card" effect.
// Put a Morph on an overview card and another Morph with the SAME `name`
// on the full screen detail panel of the next slide. With the slide set to
// transition: view-transition, the browser grows the card into the panel on
// enter and shrinks it back on leave. Classes fall through, so a Morph can BE
// the card or the panel:
//   overview: <Morph name="vt-globe" class="rounded-xl border-2 p-5 ..."> ... </Morph>
//   detail:   <Morph name="vt-globe" class="morph-panel border-4 ..."> ... </Morph>
// Rules
//   The name must be UNIQUE among everything on screen at one moment, so give
//   every card its own name. Two visible elements sharing a name cancel the morph.
//   View transitions run in Chromium, Chrome and Edge. Other browsers fall back
//   to a plain cut, no error.
defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <div :style="{ viewTransitionName: name }">
    <slot />
  </div>
</template>
