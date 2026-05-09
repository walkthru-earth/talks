---
layout: cover
highlighter: shiki
css: unocss
colorSchema: light
transition: fade-out
title: Walkthru.earth, Urban Intelligence Infrastructure
favicon: /favicon.png
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
routerMode: hash
canvasWidth: 1280
aspectRatio: 16/9
---

<div class="text-center">

<img src="/icon.svg" class="h-32 mx-auto mb-8" />

# Walkthru.earth

<div class="text-2xl mt-4 text-gray-600">
Urban Intelligence Infrastructure
</div>

<div class="mt-8 text-lg italic" style="color: hsl(158 64% 42%)">
"What is the city doing to the people inside it?"
</div>

<div class="mt-12 flex justify-center gap-4">
  <a href="https://walkthru.earth" target="_blank" class="btn btn-primary btn-pill btn-sm">
    walkthru.earth
  </a>
  <a href="https://opensensor.space" target="_blank" class="btn btn-outline btn-pill btn-sm">
    opensensor.space
  </a>
</div>

<div class="mt-10 text-sm text-gray-500">
Open source, starting in Cairo, designed to work anywhere
</div>

<div class="mt-8 flex flex-col items-center gap-1 swipe-hint">
  <div class="text-xs uppercase tracking-widest" style="color: hsl(158 30% 45%)">Swipe to begin</div>
  <div class="flex items-center gap-1 text-2xl">
    <div i-carbon:chevron-right class="chev chev-1"/>
    <div i-carbon:chevron-right class="chev chev-2"/>
    <div i-carbon:chevron-right class="chev chev-3"/>
  </div>
</div>

</div>

<style scoped>
.chev {
  color: hsl(158 64% 42%);
  opacity: 0.2;
  animation: chev-pulse 1.6s ease-in-out infinite;
}
.chev-2 { animation-delay: 0.2s; }
.chev-3 { animation-delay: 0.4s; }
@keyframes chev-pulse {
  0%, 100% { opacity: 0.2; transform: translateX(-4px); }
  50%      { opacity: 1;   transform: translateX(4px); }
}
.swipe-hint {
  pointer-events: none;
}
</style>

---
zoom: 1.2
---

# We are unaware of what cities do to us

<div class="grid grid-cols-2 gap-10 mt-6 px-10">

<div>

<div class="text-lg text-gray-700 leading-relaxed">

Cities are measured obsessively. GDP, property values, traffic congestion, satellite imagery, mobility patterns.

None of those numbers tell you whether the air your child breathes is safe, whether the noise on your street is keeping your cortisol elevated, or whether your neighbourhood is actually liveable.

</div>

<div class="mt-6 text-base font-medium" style="color: hsl(158 64% 42%)">
We optimise for economic output, then wonder why people feel worse.
</div>

</div>

<div class="space-y-3">

<div class="rounded-xl border-2 p-4 border-red-300 bg-red-50">
  <div class="flex items-center gap-3 mb-1">
    <div i-carbon:wind-stream class="text-2xl text-red-400"/>
    <div class="font-bold text-sm text-red-700">Air your child breathes</div>
  </div>
  <div class="text-xs text-gray-600">No neighbourhood scale visibility into PM2.5, ozone, or particulates.</div>
</div>

<div class="rounded-xl border-2 p-4 border-amber-300 bg-amber-50">
  <div class="flex items-center gap-3 mb-1">
    <div i-carbon:volume-up class="text-2xl text-amber-500"/>
    <div class="font-bold text-sm text-amber-700">Noise that raises cortisol</div>
  </div>
  <div class="text-xs text-gray-600">Chronic stress signals are invisible to GDP and traffic counts.</div>
</div>

<div class="rounded-xl border-2 p-4 border-purple-300 bg-purple-50">
  <div class="flex items-center gap-3 mb-1">
    <div i-carbon:home class="text-2xl text-purple-500"/>
    <div class="font-bold text-sm text-purple-700">Neighbourhoods quietly wearing people down</div>
  </div>
  <div class="text-xs text-gray-600">Heat, density, infrastructure strain interact, no one is measuring it.</div>
</div>

<div class="text-center text-sm text-gray-500 pt-2">
When the signal is invisible, cities make billion dollar decisions with incomplete information.
</div>

</div>

</div>

---
layout: center
---

<div class="max-w-3xl mx-auto">

<div class="text-center mb-6">
  <div i-carbon:activity class="text-6xl text-amber-500" />
</div>

# A Fitness Tracker for Cities

<div class="mt-6 rounded-xl border-2 p-8 backdrop-blur bg-opacity-10 border-green-500 bg-green-50">

<div class="text-lg text-gray-700 leading-relaxed text-center">
Today, cities only check their <strong>bank balance</strong>, GDP, to see if they are doing well.
</div>

<div class="mt-6 flex items-center justify-center gap-6">
  <div class="text-center">
    <div i-carbon:currency-dollar class="text-5xl text-gray-400" />
    <div class="text-xs mt-1 text-gray-500">GDP only</div>
  </div>
  <div i-carbon:arrow-right class="text-3xl text-green-500" />
  <div class="text-center">
    <div i-carbon:favorite class="text-5xl text-rose-500" />
    <div class="text-xs mt-1 text-gray-600">Heart rate</div>
  </div>
  <div class="text-center">
    <div i-carbon:meter class="text-5xl text-amber-500" />
    <div class="text-xs mt-1 text-gray-600">Stress</div>
  </div>
  <div class="text-center">
    <div i-carbon:health-cross class="text-5xl text-green-500" />
    <div class="text-xs mt-1 text-gray-600">Recovery</div>
  </div>
</div>

<div class="mt-6 text-xl text-center font-semibold" style="color: hsl(158 64% 42%)">
Walkthru.earth gives a whole city continuous health observability, at neighbourhood resolution, in real time.
</div>

</div>

</div>

---
zoom: 1.2
---

# Three Open Layers, One Platform

<div class="mt-2 px-4">

<div class="grid grid-cols-3 gap-4">

<div class="rounded-xl border-2 border-solid p-5 border-blue-500 bg-blue-50 h-full flex flex-col">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon:earth class="text-4xl text-blue-600"/>
    <div class="font-bold text-blue-700 text-lg">Globe Explorer</div>
  </div>
  <div class="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-2">Spatial intelligence</div>
  <div class="text-sm text-gray-700 leading-relaxed flex-grow">
    23 planetary indices. 300GB of terrain, population, buildings, and weather, joinable in a single SQL query, running directly in your browser.
  </div>
  <div class="mt-3 text-xs font-medium text-blue-700 flex items-center gap-1">
    <div i-carbon:checkmark-filled class="text-blue-500"/> Public preview
  </div>
</div>

<div class="rounded-xl border-2 border-solid p-5 border-green-500 bg-green-50 h-full flex flex-col">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon:iot-platform class="text-4xl text-green-600"/>
    <div class="font-bold text-green-700 text-lg">OpenSensor.space</div>
  </div>
  <div class="text-xs uppercase tracking-wide text-green-600 font-semibold mb-2">Environmental sensing</div>
  <div class="text-sm text-gray-700 leading-relaxed flex-grow">
    A distributed network of low cost IoT sensors streaming real time air quality directly from street level. Hardware agnostic, serverless, anyone can join.
  </div>
  <div class="mt-3 text-xs font-medium text-green-700 flex items-center gap-1">
    <div i-carbon:checkmark-filled class="text-green-500"/> Live in Cairo, 1+ year of data
  </div>
</div>

<div class="rounded-xl border-2 border-solid p-5 border-rose-500 bg-rose-50 h-full flex flex-col">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon:face-satisfied class="text-4xl text-rose-600"/>
    <div class="font-bold text-rose-700 text-lg">Hormones & Cities</div>
  </div>
  <div class="text-xs uppercase tracking-wide text-rose-600 font-semibold mb-2">Lived experience</div>
  <div class="text-sm text-gray-700 leading-relaxed flex-grow">
    A privacy first mobile app. Raw data never leaves the phone. What gets shared is an anonymous neighbourhood signal that sharpens as more people contribute.
  </div>
  <div class="mt-3 text-xs font-medium text-rose-700 flex items-center gap-1">
    <div i-carbon:checkmark-filled class="text-rose-500"/> App ready
  </div>
</div>

</div>

<div class="mt-5 flex justify-center">

```mermaid {scale: 0.575}
flowchart LR
    A[fa:fa-globe Globe Explorer<br/>23 indices] --> P[fa:fa-cube Walkthru.earth<br/>Urban Health Layer]
    B[fa:fa-microchip OpenSensor.space<br/>Real-time air] --> P
    C[fa:fa-mobile Hormones and Cities<br/>Wellbeing] --> P
    P --> D[fa:fa-cloud Source Cooperative<br/>Public infrastructure]
    style A fill:#dbeafe,stroke:#3b82f6
    style B fill:#d1fae5,stroke:#059669
    style C fill:#ffe4e6,stroke:#f43f5e
    style P fill:#fef3c7,stroke:#d97706
    style D fill:#e0e7ff,stroke:#6366f1
```

</div>

</div>

---

# Globe Explorer

<div class="mt-2 px-6">

<div class="text-base text-gray-600 mb-4">
A browser based spatial intelligence engine. Everything runs client side. No servers, no login, no cost to access.
</div>

<div class="grid grid-cols-2 gap-6">

<div class="space-y-3">

<div class="rounded-xl border-2 p-4 border-blue-400 bg-blue-50">
  <div class="flex items-center gap-3 mb-1">
    <div i-carbon:chart-radial class="text-2xl text-blue-500"/>
    <div class="font-bold text-blue-700">23 Planetary Indices</div>
  </div>
  <div class="text-sm text-gray-700">Climate, hazard, vulnerability, accessibility, joined on a unified spatial grid.</div>
</div>

<div class="rounded-xl border-2 p-4 border-purple-400 bg-purple-50">
  <div class="flex items-center gap-3 mb-1">
    <div i-carbon:data-base class="text-2xl text-purple-500"/>
    <div class="font-bold text-purple-700">300GB of Open Data</div>
  </div>
  <div class="text-sm text-gray-700">Terrain, population projections through 2100, building density, weather.</div>
</div>

<div class="rounded-xl border-2 p-4 border-amber-400 bg-amber-50">
  <div class="flex items-center gap-3 mb-1">
    <div i-carbon:terminal class="text-2xl text-amber-500"/>
    <div class="font-bold text-amber-700">One SQL Query</div>
  </div>
  <div class="text-sm text-gray-700">DuckDB, GeoParquet, Iceberg, anything joinable in the browser.</div>
</div>

<div class="rounded-xl border-2 p-4 border-green-400 bg-green-50">
  <div class="flex items-center gap-3 mb-1">
    <div i-carbon:globe class="text-2xl text-green-500"/>
    <div class="font-bold text-green-700">Global Equity</div>
  </div>
  <div class="text-sm text-gray-700">A researcher in Nairobi and a planner in Amsterdam have exactly the same tools.</div>
</div>

</div>

<div class="flex flex-col items-center justify-center">
  <div class="rounded-2xl border-2 border-blue-400 bg-white p-8 shadow-lg w-full">
    <div class="flex items-center justify-center mb-4">
      <div i-carbon:earth-filled class="text-8xl text-blue-500"/>
    </div>
    <div class="text-center text-sm text-gray-600 leading-relaxed">
      <div class="font-semibold text-gray-800 mb-2">Why this matters</div>
      Existing GIS stacks lock data in proprietary formats and behind paid licences. Globe Explorer treats public datasets as public infrastructure.
    </div>
  </div>
  <div class="mt-3 text-xs text-gray-500 text-center">
    Open formats, Parquet, GeoParquet, Iceberg. Analysis ready out of the box.
  </div>
</div>

</div>

</div>

---
zoom: 1.2
---

# OpenSensor.space, Live in Cairo

<div class="mt-2 px-6">

<div class="text-base text-gray-600 mb-3">
Our environmental sensing layer is <strong>already deployed</strong>. Real time air quality, streaming continuously for over a year.
</div>

<div class="grid grid-cols-3 gap-4">

<div class="col-span-2 rounded-xl overflow-hidden border-2 border-green-400" style="height: 340px;">
  <iframe
    src="https://opensensor.space/"
    class="w-full h-full"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
  ></iframe>
</div>

<div class="space-y-2">

<div class="rounded-lg border-2 p-3 border-green-400 bg-green-50">
  <div class="text-xs uppercase tracking-wide text-green-600 font-semibold mb-1">Real time signals</div>
  <div class="text-sm text-gray-700">PM2.5, PM10, temperature, humidity, noise, light.</div>
</div>

<div class="rounded-lg border-2 p-3 border-blue-400 bg-blue-50">
  <div class="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">Hardware agnostic</div>
  <div class="text-sm text-gray-700">Raspberry Pi, Jetson, anything Python capable.</div>
</div>

<div class="rounded-lg border-2 p-3 border-amber-400 bg-amber-50">
  <div class="text-xs uppercase tracking-wide text-amber-600 font-semibold mb-1">Serverless architecture</div>
  <div class="text-sm text-gray-700">Edge to Parquet to S3. No MQTT, no broker, no vendor lock in.</div>
</div>

<div class="rounded-lg border-2 p-3 border-purple-400 bg-purple-50">
  <div class="text-xs uppercase tracking-wide text-purple-600 font-semibold mb-1">60 to 90 percent less energy</div>
  <div class="text-sm text-gray-700">Than traditional always on IoT stacks.</div>
</div>

</div>

</div>

<div class="mt-3 flex justify-between items-center">
  <div class="flex gap-4 text-sm">
    <div class="flex items-center gap-1.5 text-green-600">
      <div i-carbon:checkmark-filled />
      <span>2 stations live in Cairo</span>
    </div>
    <div class="flex items-center gap-1.5 text-green-600">
      <div i-carbon:checkmark-filled />
      <span>Same code deploys anywhere</span>
    </div>
  </div>
  <a href="https://opensensor.space" target="_blank" class="btn btn-link text-sm">
    Open in new tab <span i-carbon:launch class="inline-block ml-1" />
  </a>
</div>

</div>

---
zoom: 1.2
---

# Hormones & Cities

<div class="text-base text-gray-600 mb-2 text-center">
Capturing what sensors cannot, the lived experience of a city, completely anonymously.
</div>

<div class="grid grid-cols-3 gap-6 px-16">

<div class="text-center">
  <div class="relative mx-auto w-32 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-800 bg-gray-800">
    <div class="absolute inset-0 overflow-hidden">
      <img
        v-motion
        :initial="{ y: 0 }"
        :enter="{ y: -60, transition: { duration: 6000, repeat: Infinity, repeatType: 'mirror', repeatDelay: 2000 } }"
        src="/hormones-cities-survey.png"
        class="w-full"
      />
    </div>
    <div class="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-800 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-800 to-transparent"></div>
    <div class="absolute bottom-1.5 left-0 right-0 flex justify-center">
      <div class="w-14 h-1 bg-white rounded-full opacity-60"></div>
    </div>
  </div>
  <div class="mt-2 font-semibold text-sm">Wellbeing Survey</div>
  <div class="text-xs text-gray-500">Mood, stress, housing, community</div>
</div>

<div class="text-center">
  <div class="relative mx-auto w-32 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-800 bg-gray-800">
    <div class="absolute inset-0 overflow-hidden">
      <img
        v-motion
        :initial="{ y: 0 }"
        :enter="{ y: -40, transition: { duration: 5000, repeat: Infinity, repeatType: 'mirror', repeatDelay: 2500 } }"
        src="/hormones-cities-ai.png"
        class="w-full"
      />
    </div>
    <div class="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-800 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-800 to-transparent"></div>
    <div class="absolute bottom-1.5 left-0 right-0 flex justify-center">
      <div class="w-14 h-1 bg-white rounded-full opacity-60"></div>
    </div>
  </div>
  <div class="mt-2 font-semibold text-sm">AI Reflection</div>
  <div class="text-xs text-gray-500">Guided conversations</div>
</div>

<div class="text-center">
  <div class="relative mx-auto w-32 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-800 bg-gray-800">
    <div class="absolute inset-0 overflow-hidden">
      <img
        v-motion
        :initial="{ y: 0 }"
        :enter="{ y: -50, transition: { duration: 5500, repeat: Infinity, repeatType: 'mirror', repeatDelay: 1500 } }"
        src="/hormones-cities-dashboard.png"
        class="w-full"
      />
    </div>
    <div class="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-800 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-800 to-transparent"></div>
    <div class="absolute bottom-1.5 left-0 right-0 flex justify-center">
      <div class="w-14 h-1 bg-white rounded-full opacity-60"></div>
    </div>
  </div>
  <div class="mt-2 font-semibold text-sm">City Pulse Dashboard</div>
  <div class="text-xs text-gray-500">Neighbourhood trends</div>
</div>

</div>

<div class="mt-3 grid grid-cols-4 gap-2 px-12">
  <div class="rounded-lg border border-amber-400 bg-amber-50 p-2 text-center">
    <div i-carbon:edge-node class="text-xl text-amber-500 mx-auto"/>
    <div class="text-xs font-semibold mt-1">On device</div>
    <div class="text-xs text-gray-500">Raw data never uploaded</div>
  </div>
  <div class="rounded-lg border border-blue-400 bg-blue-50 p-2 text-center">
    <div i-carbon:user-avatar class="text-xl text-blue-500 mx-auto"/>
    <div class="text-xs font-semibold mt-1">Anonymous</div>
    <div class="text-xs text-gray-500">No account, no email</div>
  </div>
  <div class="rounded-lg border border-purple-400 bg-purple-50 p-2 text-center">
    <div i-carbon:location class="text-xl text-purple-500 mx-auto"/>
    <div class="text-xs font-semibold mt-1">H3 aggregated</div>
    <div class="text-xs text-gray-500">~500m hex cells</div>
  </div>
  <div class="rounded-lg border border-green-400 bg-green-50 p-2 text-center">
    <div i-carbon:group class="text-xl text-green-500 mx-auto"/>
    <div class="text-xs font-semibold mt-1">Sharper with scale</div>
    <div class="text-xs text-gray-500">Community signal</div>
  </div>
</div>

---
layout: full
---

<script setup>
import HNCExplorer from './components/hnc/HNCExplorer.vue'
</script>

<div class="slide-fit">
  <HNCExplorer />
</div>

<!--
The HNC Explorer is rendered natively in this slide as a Vue component. Parquet, GLB hemispheres, parcel atlas, and AOI baselines are fetched from walkthru.earth at runtime. Fully interactive. Use the play/pause and 0.5x to 30x speed controls to walk frames. Click a marker on the map or a region in the radar to spotlight it. Caveat, static-clip means motion areas like MT/V5 under-fire, ventral-stream regions are honest. Code at github.com/walkthru-earth/hnc.
-->

---
zoom: 1.2
---

# Open by Design

<div class="mt-3 px-6">

<div class="rounded-2xl p-6 text-center border-2 border-green-500 bg-gradient-to-br from-green-50 via-white to-amber-50 shadow-sm">
  <div class="flex items-center justify-center gap-3 mb-2">
    <div i-carbon:unlocked class="text-4xl text-green-600"/>
    <div class="text-2xl font-bold tracking-tight" style="color: hsl(158 64% 30%)">Public Infrastructure</div>
  </div>
  <div class="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
    We treat urban health data the same way we treat roads. <strong class="text-gray-800">Built once, used by everyone.</strong>
  </div>
</div>

<div class="mt-5 grid grid-cols-3 gap-3">

<div class="flex items-center gap-3 rounded-full border border-green-300 bg-green-50 px-4 py-2">
  <div i-carbon:logo-github class="text-xl text-green-600 flex-shrink-0"/>
  <div>
    <div class="text-sm font-semibold text-green-700 leading-tight">All Code on GitHub</div>
    <div class="text-xs text-gray-500 leading-tight">Pipelines, models, methods.</div>
  </div>
</div>

<div class="flex items-center gap-3 rounded-full border border-purple-300 bg-purple-50 px-4 py-2">
  <img src="https://walkthru.earth/source-coop-logo.png" class="h-5 w-5 flex-shrink-0" alt="Source Cooperative" />
  <div>
    <div class="text-sm font-semibold text-purple-700 leading-tight">Source Coop</div>
    <div class="text-xs text-gray-500 leading-tight">Open formats, non-profit.</div>
  </div>
</div>

<div class="flex items-center gap-3 rounded-full border border-amber-300 bg-amber-50 px-4 py-2">
  <div i-carbon:globe class="text-xl text-amber-600 flex-shrink-0"/>
  <div>
    <div class="text-sm font-semibold text-amber-700 leading-tight">Same Tools, Anywhere</div>
    <div class="text-xs text-gray-500 leading-tight">Dhaka, Amsterdam, the same.</div>
  </div>
</div>

<div class="flex items-center gap-3 rounded-full border border-blue-300 bg-blue-50 px-4 py-2">
  <div i-carbon:repeat class="text-xl text-blue-600 flex-shrink-0"/>
  <div>
    <div class="text-sm font-semibold text-blue-700 leading-tight">Reproducible</div>
    <div class="text-xs text-gray-500 leading-tight">Same data, same result.</div>
  </div>
</div>

<div class="flex items-center gap-3 rounded-full border border-rose-300 bg-rose-50 px-4 py-2">
  <div i-carbon:group class="text-xl text-rose-600 flex-shrink-0"/>
  <div>
    <div class="text-sm font-semibold text-rose-700 leading-tight">Community-driven</div>
    <div class="text-xs text-gray-500 leading-tight">Anyone can contribute.</div>
  </div>
</div>

<div class="flex items-center gap-3 rounded-full border border-teal-300 bg-teal-50 px-4 py-2">
  <div i-carbon:security class="text-xl text-teal-600 flex-shrink-0"/>
  <div>
    <div class="text-sm font-semibold text-teal-700 leading-tight">Accountable</div>
    <div class="text-xs text-gray-500 leading-tight">Open methods, open critique.</div>
  </div>
</div>

</div>

<div class="mt-5 text-center text-sm italic" style="color: hsl(158 64% 35%)">
  Closed data creates closed cities. We are building the opposite.
</div>

</div>

---
zoom: 1.2
---

# Who This Serves

<div class="px-4">

<!-- Audience labels row, aligned to the building silhouettes below -->
<div class="grid grid-cols-6 gap-1">

<div class="text-center">
  <div i-carbon:location-filled class="text-base text-teal-600 mx-auto"/>
  <div class="text-sm font-bold text-teal-700 leading-tight mt-0.5">NGOs &amp; Funders</div>
  <div class="text-xs text-gray-500 leading-snug mt-1">Programme targeting and impact measurement grounded in observable urban conditions, so funding decisions reflect what is actually happening on the ground rather than what reports claim.</div>
</div>

<div class="text-center">
  <div i-carbon:location-filled class="text-base text-rose-600 mx-auto"/>
  <div class="text-sm font-bold text-rose-700 leading-tight mt-0.5">Communities</div>
  <div class="text-xs text-gray-500 leading-snug mt-1">Visibility into what their environment is doing to their air, sleep, and stress, plus a structured voice in the data so the people most affected help shape it.</div>
</div>

<div class="text-center">
  <div i-carbon:location-filled class="text-base text-blue-600 mx-auto"/>
  <div class="text-sm font-bold text-blue-700 leading-tight mt-0.5">Cities &amp; Public Health</div>
  <div class="text-xs text-gray-500 leading-snug mt-1">Continuous neighbourhood-scale signals for policy, infrastructure, and climate adaptation, replacing one-off surveys with a live picture of how the city performs for residents.</div>
</div>

<div class="text-center">
  <div i-carbon:location-filled class="text-base text-green-600 mx-auto"/>
  <div class="text-sm font-bold text-green-700 leading-tight mt-0.5">Planners &amp; Architects</div>
  <div class="text-xs text-gray-500 leading-snug mt-1">Evidence for parks, walkability, density, and where intervention will move the needle, so design decisions are anchored in the lived conditions of each block, not citywide averages.</div>
</div>

<div class="text-center">
  <div i-carbon:location-filled class="text-base text-purple-600 mx-auto"/>
  <div class="text-sm font-bold text-purple-700 leading-tight mt-0.5">Researchers</div>
  <div class="text-xs text-gray-500 leading-snug mt-1">Open datasets and reproducible pipelines, free to query in the browser, free to extend, engineered so independent groups can replicate or challenge any finding end to end.</div>
</div>

<div class="text-center">
  <div i-carbon:location-filled class="text-base text-amber-600 mx-auto"/>
  <div class="text-sm font-bold text-amber-700 leading-tight mt-0.5">Investors &amp; ESG</div>
  <div class="text-xs text-gray-500 leading-snug mt-1">Independent, auditable signals on environmental and social outcomes at neighbourhood resolution, giving capital allocators real urban data instead of self-reported corporate disclosures.</div>
</div>

</div>

<!-- City silhouette: each building sits under its corresponding audience label.
     Soft sky gradient backdrop, ground horizon line, brand-tinted building tops. -->
<svg viewBox="0 0 1200 220" class="w-full mt-2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYEnd meet">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.0"/>
      <stop offset="100%" stop-color="#a7f3d0" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#94a3b8" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#94a3b8" stop-opacity="0.0"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="1200" height="220" fill="url(#sky)"/>

  <!-- 1. NGO/community office (teal): low pitched-roof building with flag -->
  <g>
    <line x1="100" y1="20" x2="100" y2="115" stroke="#0d9488" stroke-width="1" stroke-dasharray="2 3" opacity="0.5"/>
    <rect x="50" y="120" width="100" height="80" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
    <polygon points="50,120 100,90 150,120" fill="#5eead4" stroke="#0d9488" stroke-width="2"/>
    <line x1="100" y1="90" x2="100" y2="60" stroke="#0d9488" stroke-width="2"/>
    <polygon points="100,60 130,68 100,76" fill="#0d9488"/>
    <rect x="65" y="140" width="20" height="30" fill="#0d9488" opacity="0.2"/>
    <rect x="115" y="140" width="20" height="30" fill="#0d9488" opacity="0.2"/>
    <rect x="90" y="170" width="20" height="30" fill="#0d9488" opacity="0.5"/>
  </g>

  <!-- 2. Apartment block (rose): grid of windows, residential -->
  <g>
    <line x1="300" y1="20" x2="300" y2="75" stroke="#e11d48" stroke-width="1" stroke-dasharray="2 3" opacity="0.5"/>
    <rect x="240" y="80" width="120" height="120" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
    <g fill="#e11d48" opacity="0.35">
      <rect x="252" y="92" width="14" height="18"/>
      <rect x="276" y="92" width="14" height="18"/>
      <rect x="300" y="92" width="14" height="18"/>
      <rect x="324" y="92" width="14" height="18"/>
      <rect x="252" y="120" width="14" height="18"/>
      <rect x="276" y="120" width="14" height="18"/>
      <rect x="300" y="120" width="14" height="18"/>
      <rect x="324" y="120" width="14" height="18"/>
      <rect x="252" y="148" width="14" height="18"/>
      <rect x="276" y="148" width="14" height="18"/>
      <rect x="300" y="148" width="14" height="18"/>
      <rect x="324" y="148" width="14" height="18"/>
    </g>
    <rect x="290" y="176" width="20" height="24" fill="#e11d48" opacity="0.5"/>
  </g>

  <!-- 3. City Hall with dome (blue): government / civic building -->
  <g>
    <line x1="500" y1="20" x2="500" y2="55" stroke="#2563eb" stroke-width="1" stroke-dasharray="2 3" opacity="0.5"/>
    <rect x="430" y="120" width="140" height="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="450" y="100" width="100" height="20" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
    <path d="M450 100 Q500 50 550 100 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
    <line x1="500" y1="50" x2="500" y2="35" stroke="#2563eb" stroke-width="2"/>
    <circle cx="500" cy="32" r="3" fill="#2563eb"/>
    <g fill="#2563eb" opacity="0.4">
      <rect x="445" y="140" width="10" height="50"/>
      <rect x="465" y="140" width="10" height="50"/>
      <rect x="485" y="140" width="10" height="50"/>
      <rect x="505" y="140" width="10" height="50"/>
      <rect x="525" y="140" width="10" height="50"/>
      <rect x="545" y="140" width="10" height="50"/>
    </g>
    <rect x="490" y="180" width="20" height="20" fill="#2563eb" opacity="0.6"/>
  </g>

  <!-- 4. Planners site: half-built tower with construction crane -->
  <g>
    <line x1="700" y1="20" x2="700" y2="65" stroke="#16a34a" stroke-width="1" stroke-dasharray="2 3" opacity="0.5"/>
    <rect x="650" y="110" width="100" height="90" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <g stroke="#16a34a" stroke-width="1" opacity="0.4">
      <line x1="660" y1="120" x2="740" y2="120"/>
      <line x1="660" y1="140" x2="740" y2="140"/>
      <line x1="660" y1="160" x2="740" y2="160"/>
      <line x1="660" y1="180" x2="740" y2="180"/>
    </g>
    <line x1="710" y1="110" x2="710" y2="60" stroke="#16a34a" stroke-width="2"/>
    <line x1="710" y1="60" x2="775" y2="60" stroke="#16a34a" stroke-width="2"/>
    <line x1="710" y1="60" x2="685" y2="60" stroke="#16a34a" stroke-width="2"/>
    <line x1="775" y1="60" x2="775" y2="80" stroke="#16a34a" stroke-width="1.5"/>
    <rect x="770" y="80" width="10" height="8" fill="#16a34a" opacity="0.5"/>
    <line x1="685" y1="60" x2="710" y2="50" stroke="#16a34a" stroke-width="1.5"/>
    <line x1="685" y1="60" x2="710" y2="70" stroke="#16a34a" stroke-width="1.5"/>
  </g>

  <!-- 5. University / classical building (purple): pediment + columns -->
  <g>
    <line x1="900" y1="20" x2="900" y2="80" stroke="#9333ea" stroke-width="1" stroke-dasharray="2 3" opacity="0.5"/>
    <polygon points="830,100 900,70 970,100" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
    <rect x="830" y="100" width="140" height="100" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
    <g fill="#9333ea" opacity="0.4">
      <rect x="845" y="115" width="8" height="75"/>
      <rect x="865" y="115" width="8" height="75"/>
      <rect x="885" y="115" width="8" height="75"/>
      <rect x="905" y="115" width="8" height="75"/>
      <rect x="925" y="115" width="8" height="75"/>
      <rect x="945" y="115" width="8" height="75"/>
    </g>
    <rect x="890" y="170" width="20" height="30" fill="#9333ea" opacity="0.6"/>
  </g>

  <!-- 6. Glass tower (amber): financial / investor district -->
  <g>
    <line x1="1100" y1="20" x2="1100" y2="50" stroke="#d97706" stroke-width="1" stroke-dasharray="2 3" opacity="0.5"/>
    <rect x="1050" y="55" width="100" height="145" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <g stroke="#d97706" stroke-width="1" opacity="0.5">
      <line x1="1075" y1="55" x2="1075" y2="200"/>
      <line x1="1100" y1="55" x2="1100" y2="200"/>
      <line x1="1125" y1="55" x2="1125" y2="200"/>
      <line x1="1050" y1="80" x2="1150" y2="80"/>
      <line x1="1050" y1="105" x2="1150" y2="105"/>
      <line x1="1050" y1="130" x2="1150" y2="130"/>
      <line x1="1050" y1="155" x2="1150" y2="155"/>
      <line x1="1050" y1="180" x2="1150" y2="180"/>
    </g>
    <polygon points="1050,55 1100,40 1150,55" fill="#fcd34d" stroke="#d97706" stroke-width="2"/>
    <rect x="1090" y="180" width="20" height="20" fill="#d97706" opacity="0.6"/>
  </g>

  <!-- Ground horizon -->
  <rect x="0" y="200" width="1200" height="20" fill="url(#ground)"/>
  <line x1="0" y1="200" x2="1200" y2="200" stroke="#64748b" stroke-width="1" opacity="0.5"/>
</svg>

</div>

<div class="text-center text-base mt-3" style="color: hsl(158 64% 30%)">
Urban health data is most useful when <strong>everyone</strong> can act on it. One platform, one map, every actor.
</div>

---
layout: center
---

<div class="flex items-center justify-center gap-16">

<!-- Left: Content -->
<div class="text-center">

<img src="/icon.svg" class="h-20 mx-auto mb-4" />

# Join Us

<div class="mt-6 grid grid-cols-3 gap-4 max-w-xl">

<div class="rounded-lg border-2 border-solid p-3 backdrop-blur bg-opacity-10 border-green-500 bg-green-50">
  <a href="https://opensensor.space/join-network/" target="_blank" class="no-underline text-inherit block">
    <div i-carbon:iot-connect class="text-2xl text-green-500 mx-auto" />
    <div class="mt-1 text-xs font-medium">Deploy a Sensor</div>
  </a>
</div>

<div class="rounded-lg border-2 border-solid p-3 backdrop-blur bg-opacity-10 border-amber-500 bg-amber-50">
  <a href="https://source.coop/walkthru-earth" target="_blank" class="no-underline text-inherit block">
    <img src="https://walkthru.earth/source-coop-logo.png" class="h-6 w-6 mx-auto" alt="Source Cooperative" />
    <div class="mt-1 text-xs font-medium">Access Our Data</div>
  </a>
</div>

<div class="rounded-lg border-2 border-solid p-3 backdrop-blur bg-opacity-10 border-blue-500 bg-blue-50">
  <a href="https://github.com/walkthru-earth" target="_blank" class="no-underline text-inherit block">
    <div i-carbon:logo-github class="text-2xl text-blue-500 mx-auto" />
    <div class="mt-1 text-xs font-medium">Contribute on GitHub</div>
  </a>
</div>

</div>

<div class="mt-6 space-y-1">
  <a href="https://walkthru.earth" target="_blank" class="text-xl font-bold no-underline" style="color: hsl(158 64% 52%)">walkthru.earth</a>
  <div class="text-gray-500 text-sm">
    <a href="mailto:hi@walkthru.earth" class="text-gray-500 no-underline hover:underline">hi@walkthru.earth</a>
  </div>
</div>

<div class="mt-4 flex flex-wrap justify-center items-center gap-2">
  <a href="https://www.linkedin.com/company/walkthru-earth/" target="_blank" class="text-gray-400 hover:text-blue-600 transition-colors" title="LinkedIn">
    <div i-carbon:logo-linkedin class="text-xl" />
  </a>
  <a href="https://www.youtube.com/@walkthru-earth/" target="_blank" class="text-gray-400 hover:text-red-500 transition-colors" title="YouTube">
    <div i-carbon:logo-youtube class="text-xl" />
  </a>
  <a href="https://www.instagram.com/walkthru.earth" target="_blank" class="text-gray-400 hover:text-pink-500 transition-colors" title="Instagram">
    <div i-carbon:logo-instagram class="text-xl" />
  </a>
  <a href="https://www.tiktok.com/@walkthru.earth" target="_blank" class="text-gray-400 hover:text-gray-800 transition-colors" title="TikTok">
    <div i-simple-icons:tiktok class="text-lg" />
  </a>
  <a href="https://www.facebook.com/walkthru.earth" target="_blank" class="text-gray-400 hover:text-blue-500 transition-colors" title="Facebook">
    <div i-carbon:logo-facebook class="text-xl" />
  </a>
  <a href="https://x.com/walkthru_earth" target="_blank" class="text-gray-400 hover:text-gray-800 transition-colors" title="X">
    <div i-carbon:logo-x class="text-xl" />
  </a>
  <a href="https://bsky.app/profile/walkthru.earth" target="_blank" class="text-gray-400 hover:text-blue-400 transition-colors" title="Bluesky">
    <div i-simple-icons:bluesky class="text-lg" />
  </a>
  <a href="https://source.coop/walkthru-earth" target="_blank" class="opacity-60 hover:opacity-100 transition-opacity" title="Source Cooperative">
    <img src="https://walkthru.earth/source-coop-logo.png" class="h-5 w-5" alt="Source Cooperative" />
  </a>
</div>

</div>

<!-- Right: Large QR Code -->
<div class="flex flex-col items-center">
  <div class="rounded-2xl border-4 border-green-400 bg-white p-4 shadow-xl">
    <img src="/qr-links.svg" class="w-64 h-64" alt="Scan to connect" />
  </div>
  <div class="mt-4 text-center">
    <div class="text-lg font-semibold" style="color: hsl(158 64% 42%)">Scan to Connect</div>
    <div class="text-sm text-gray-500">All links and these slides</div>
  </div>
</div>

</div>
