---
zoom: 1.2
transition: view-transition
---

# What we really do :)

<Reveal class="text-2xl text-gray-600 mb-2 text-center px-10">
Think of a fitness tracker. A person tracks heart rate and sleep. A city only tracks its money. We give a city a health tracker, street by street.
</Reveal>

<div class="mt-2 px-4">

<div class="grid grid-cols-3 gap-4">

<Reveal :delay="80" class="h-full">
<Morph name="vt-globe" class="rounded-xl border-2 border-solid p-5 border-blue-500 bg-blue-50 h-full flex flex-col">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon:earth class="text-4xl text-blue-600"/>
    <div class="font-bold text-blue-700 text-2xl">Globe Explorer</div>
  </div>
  <div class="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-2">The map</div>
  <div class="text-base text-gray-700 leading-relaxed flex-grow">
    Open global data on heat, people, buildings, and weather. You can ask it questions right in the browser, with no server and no cost.
  </div>
  <div class="mt-3 text-base font-medium text-blue-700 flex items-center gap-1">
    <div i-carbon:checkmark-filled class="text-blue-500"/> Public preview
  </div>
</Morph>
</Reveal>

<Reveal :delay="160" class="h-full">
<Morph name="vt-sensor" class="rounded-xl border-2 border-solid p-5 border-green-500 bg-green-50 h-full flex flex-col">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon:iot-platform class="text-4xl text-green-600"/>
    <div class="font-bold text-green-700 text-2xl">OpenSensor.space</div>
  </div>
  <div class="text-sm uppercase tracking-wide text-green-600 font-semibold mb-2">The sensors</div>
  <div class="text-base text-gray-700 leading-relaxed flex-grow">
    Low cost sensors that measure air quality at street level. Cheap to build, easy to join, and they run almost anywhere.
  </div>
  <div class="mt-3 text-base font-medium text-green-700 flex items-center gap-1">
    <div i-carbon:checkmark-filled class="text-green-500"/> Live in Cairo, 1+ year of data
  </div>
</Morph>
</Reveal>

<Reveal :delay="240" class="h-full">
<Morph name="vt-brain" class="rounded-xl border-2 border-solid p-5 border-rose-500 bg-rose-50 h-full flex flex-col">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon:face-satisfied class="text-4xl text-rose-600"/>
    <div class="font-bold text-rose-700 text-2xl">Hormones & Cities</div>
  </div>
  <div class="text-sm uppercase tracking-wide text-rose-600 font-semibold mb-2">The brain and body</div>
  <div class="text-base text-gray-700 leading-relaxed flex-grow">
    We estimate how a street makes the brain and body respond. Private by design, your raw data never leaves your phone.
  </div>
  <div class="mt-3 text-base font-medium text-rose-700 flex items-center gap-1">
    <div i-carbon:checkmark-filled class="text-rose-500"/> Working prototype
  </div>
</Morph>
</Reveal>

</div>

</div>

<!--
What we build, three simple parts.
- Globe Explorer, the open map, heat, people, buildings, weather.
- OpenSensor, our own low cost air sensors, already live in Cairo.
- Hormones and Cities, the brain and body layer, our newest and most relevant piece.
- All three feed one open dataset, free for your students and researchers.
- Next, zoom into each part, then back out to this map.
-->
