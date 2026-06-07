---
layout: full
transition: view-transition
---

<Morph name="vt-sensor" class="morph-panel bg-green-50 border-solid border-4 border-green-500">
  <Reveal class="text-sm uppercase tracking-widest text-green-600 font-semibold">The sensors</Reveal>
  <Reveal :delay="80" class="flex items-center gap-3 mt-2">
    <div i-carbon:iot-platform class="text-6xl text-green-600"/>
    <div class="text-5xl font-bold text-green-700">OpenSensor.space</div>
  </Reveal>
  <div class="mt-6 space-y-3 text-2xl text-gray-700 leading-relaxed">
    <Reveal :delay="160">Low cost sensors that measure air quality at street level.</Reveal>
    <Reveal :delay="220">Cheap to build, easy to join.</Reveal>
    <Reveal :delay="280">They run almost anywhere.</Reveal>
  </div>
  <Reveal :delay="360" class="mt-6 inline-flex items-center gap-2 text-base font-medium text-green-700">
    <div i-carbon:checkmark-filled class="text-green-500"/> Live in Cairo, over a year of data
  </Reveal>
</Morph>

<!--
OpenSensor.space, the sensors.
Low cost, cheap to build, easy to join, already live in Cairo.
Then back out to the three parts.
-->
