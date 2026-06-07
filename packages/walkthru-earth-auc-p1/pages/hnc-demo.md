---
layout: full
transition: view-transition
---

<script setup>
import HNCExplorer from '../components/hnc/HNCExplorer.vue'
</script>

<Morph name="vt-brain" class="morph-panel bg-rose-50 border-solid border-4 border-rose-500 !p-0 !justify-start overflow-hidden">
  <Reveal :delay="120" class="slide-fit">
    <HNCExplorer />
  </Reveal>
</Morph>

<!--
Live demo, the brain side of Hormones and Cities. The brain card opens into the explorer.
- Left, a real street walk plus a map of the study area.
- Middle, a model guess of how the visual brain responds to that street.
- Right, which brain regions react, shown as a simple chart.
- Press play, change the speed, click a point on the map or a region to focus it.
- Honest caveat, we use still images, so motion areas under-react, the vision regions are the reliable part.
- This is exactly where brain encoding experts here could test and improve our model.
- All code is open at github.com/walkthru-earth/hnc.
- Then back out to the three parts.
-->
