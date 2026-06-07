---
layout: full
transition: view-transition
---

<Morph name="vt-globe" class="morph-panel bg-blue-50 border-solid border-4 border-blue-500 !justify-start !px-10 !py-6">

<Reveal class="flex items-center justify-between">
  <div class="flex items-center gap-3">
    <div class="rounded-full w-11 h-11 flex items-center justify-center bg-blue-100 border-2 border-blue-400 shrink-0">
      <div i-carbon:earth class="text-xl text-blue-600"/>
    </div>
    <div>
      <div class="text-2xl font-bold text-blue-700 leading-tight">Globe Explorer</div>
      <div class="text-sm text-gray-500 leading-tight">Open global data on heat, people, buildings, and weather, asked right in the browser</div>
    </div>
  </div>
  <a href="https://walkthru.earth/indices?section=weather-temperature&z=1.5&y=20.0&x=30.0&h3=1" target="_blank" class="btn btn-link text-sm">
    Open the live map <span i-carbon:launch class="inline-block ml-1" />
  </a>
</Reveal>

<Reveal :delay="320" class="mt-4 flex-grow rounded-xl overflow-hidden border-2 border-solid border-blue-400 bg-black w-full">
  <iframe
    src="https://walkthru.earth/indices?section=weather-temperature&z=1.5&y=20.0&x=30.0&h3=1"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen"
    style="width: 100%; height: 100%; border: 0;"
  ></iframe>
</Reveal>

</Morph>

<!--
Globe Explorer, the open map. The globe card opens into the live tool.
- Open data on heat, people, buildings, and weather, here showing temperature.
- It runs in the browser, no server and no cost.
- Pan and zoom, change the layer, ask it questions right here.
- Then back out to the three parts.
-->
