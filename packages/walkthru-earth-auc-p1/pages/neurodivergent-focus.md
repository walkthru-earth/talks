---
layout: full
---

<div class="h-full w-full px-12 py-7 flex flex-col bg-gradient-to-br from-slate-50 via-white to-green-50">

<Reveal class="shrink-0 flex items-center gap-3">
  <div class="rounded-full w-11 h-11 flex items-center justify-center bg-rose-100 border-2 border-rose-400 shrink-0">
    <div i-carbon:face-satisfied class="text-xl text-rose-600"/>
  </div>
  <div>
    <div class="text-2xl font-bold text-gray-800 leading-tight">Places that fit your senses</div>
    <div class="text-sm text-gray-500 leading-tight">Ask in plain words, our layers find the calm spots</div>
  </div>
</Reveal>

<div class="flex-grow flex items-center gap-3 mt-2">

<!-- Beat 1, the ask -->
<Reveal :delay="120" class="w-[24%] shrink-0">
  <div class="section-label">You ask</div>
  <div class="rounded-2xl border-2 border-solid border-slate-200 bg-white p-3 shadow-sm">
    <div class="mb-2">
      <span class="rounded-full px-2 py-0.5 text-[0.62rem] font-semibold bg-rose-50 text-rose-600 border border-solid border-rose-200">Autism and ADHD</span>
    </div>
    <div class="flex justify-end mb-2">
      <div class="max-w-[88%] rounded-2xl rounded-br-sm bg-green-500 text-white text-sm px-3 py-2 leading-snug shadow-sm">A calm spot for coffee nearby</div>
    </div>
    <div class="flex justify-start">
      <div class="max-w-[92%] rounded-2xl rounded-bl-sm bg-slate-100 text-gray-700 text-[0.78rem] px-3 py-2 leading-snug">
        <div class="flex items-center gap-1.5 font-semibold text-gray-800 mb-1"><div i-carbon:cafe class="text-base text-green-600"/> Quiet Bean, 4 min away</div>
        <div class="flex gap-2.5 text-[0.66rem] text-green-700">
          <span class="flex items-center gap-1"><div i-carbon:volume-down class="text-sm"/> low noise</span>
          <span class="flex items-center gap-1"><div i-carbon:sun class="text-sm"/> soft light</span>
          <span class="flex items-center gap-1"><div i-carbon:group class="text-sm"/> few people</span>
        </div>
      </div>
    </div>
  </div>
</Reveal>

<!-- Arrow -->
<Reveal :delay="200" class="w-9 shrink-0 flex items-center justify-center">
  <div i-carbon:arrow-right class="text-3xl text-amber-500"/>
</Reveal>

<!-- Beat 2, combine every layer -->
<Reveal :delay="260" class="w-[27%] shrink-0">
  <div class="section-label">We combine every layer</div>
  <div class="rounded-2xl border-2 border-solid border-slate-200 bg-white p-3 shadow-sm flex flex-col gap-2">
    <div class="rounded-lg border border-solid border-blue-200 bg-blue-50 px-2.5 py-1.5 flex items-center gap-2">
      <div i-carbon:earth class="text-xl text-blue-600 shrink-0"/>
      <div class="leading-tight"><div class="text-[0.8rem] font-semibold text-blue-700">Open data</div><div class="text-[0.64rem] text-gray-500">Globe Explorer</div></div>
    </div>
    <div class="rounded-lg border border-solid border-green-200 bg-green-50 px-2.5 py-1.5 flex items-center gap-2">
      <div i-carbon:iot-platform class="text-xl text-green-600 shrink-0"/>
      <div class="leading-tight"><div class="text-[0.8rem] font-semibold text-green-700">Air quality</div><div class="text-[0.64rem] text-gray-500">OpenSensor.space</div></div>
    </div>
    <div class="rounded-lg border border-solid border-rose-200 bg-rose-50 px-2.5 py-1.5 flex items-center gap-2">
      <div i-carbon:face-satisfied class="text-xl text-rose-600 shrink-0"/>
      <div class="leading-tight"><div class="text-[0.8rem] font-semibold text-rose-700">Brain response</div><div class="text-[0.64rem] text-gray-500">Hormones and Cities</div></div>
    </div>
    <div class="flex justify-center"><div i-carbon:arrow-down class="text-2xl text-amber-500"/></div>
    <div class="rounded-xl bg-gradient-to-r from-green-500 to-amber-500 text-white text-center py-2 px-2 shadow-sm">
      <div class="text-[0.62rem] uppercase tracking-wider opacity-90 leading-none mb-0.5">One score per place</div>
      <div class="font-bold text-base leading-tight">Sensory fit index</div>
    </div>
  </div>
</Reveal>

<!-- Arrow -->
<Reveal :delay="340" class="w-9 shrink-0 flex items-center justify-center">
  <div i-carbon:arrow-right class="text-3xl text-amber-500"/>
</Reveal>

<!-- Beat 3, the best places on the map -->
<Reveal :delay="400" class="flex-grow h-full flex flex-col min-w-0">
  <div class="section-label">Best places for you</div>
  <div class="flex-grow relative rounded-2xl border-2 border-solid border-slate-200 overflow-hidden shadow-sm bg-green-50" style="background-image: repeating-linear-gradient(0deg, transparent 0 43px, rgba(100,116,139,0.10) 43px 45px), repeating-linear-gradient(90deg, transparent 0 43px, rgba(100,116,139,0.10) 43px 45px);">
    <div class="absolute" style="top: 20%; left: 24%;"><div i-carbon:location-filled class="text-2xl text-rose-400 opacity-70"/></div>
    <div class="absolute" style="top: 64%; left: 18%;"><div i-carbon:location-filled class="text-2xl text-rose-400 opacity-70"/></div>
    <div class="absolute" style="top: 30%; left: 74%;"><div i-carbon:location-filled class="text-2xl text-amber-400 opacity-80"/></div>
    <div class="absolute" style="top: 72%; left: 66%;"><div i-carbon:location-filled class="text-2xl text-amber-400 opacity-80"/></div>
    <div class="absolute" style="top: 30%; left: 50%;"><div i-carbon:location-filled class="text-2xl text-green-500"/></div>
    <div class="absolute" style="top: 70%; left: 44%;"><div i-carbon:location-filled class="text-2xl text-green-500"/></div>
    <div class="absolute" style="top: 46%; left: 60%;">
      <div v-motion :initial="{ scale: 0.6, opacity: 0.55 }" :enter="{ scale: 2.4, opacity: 0, transition: { duration: 1800, repeat: Infinity, ease: 'easeOut' } }" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-green-400"></div>
      <div class="absolute left-1/2 -top-8 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white border-2 border-solid border-green-500 px-2 py-0.5 shadow text-[0.66rem] font-semibold text-green-700 flex items-center gap-1"><div i-carbon:cafe class="text-sm"/> Quiet Bean</div>
      <div i-carbon:location-filled class="relative text-4xl text-green-600 drop-shadow"/>
    </div>
    <div class="absolute flex items-center gap-1" style="top: 84%; left: 38%;">
      <div class="w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-solid border-white shadow"></div>
      <div class="text-[0.62rem] font-semibold text-blue-700">You</div>
    </div>
    <div class="absolute bottom-2 right-2 rounded-lg bg-white border border-solid border-slate-200 px-2.5 py-1.5 flex gap-3 text-[0.62rem]">
      <span class="flex items-center gap-1 text-green-700"><div class="w-2.5 h-2.5 rounded-full bg-green-500"/> Calm</span>
      <span class="flex items-center gap-1 text-amber-700"><div class="w-2.5 h-2.5 rounded-full bg-amber-400"/> Okay</span>
      <span class="flex items-center gap-1 text-rose-600"><div class="w-2.5 h-2.5 rounded-full bg-rose-400"/> Busy</span>
    </div>
  </div>
</Reveal>

</div>

</div>

<!--
A real moment, told as a scenario.
- Someone with autism or ADHD just wants a calm coffee, the city can feel loud, bright, and crowded.
- They ask in plain words, the app answers with a place that fits, Quiet Bean, low noise, soft light, few people.
- Behind that answer, all of our initiatives combine, the open data layers from the Globe Explorer, street level air quality from OpenSensor, and predicted brain response from Hormones and Cities.
- Together they make one sensory fit score for every place, and the map shows the calm spots in green, the busy ones in red.
- That is the point of joining everything, the best answer comes from the layers working as one.
-->
