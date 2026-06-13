<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  condition: string
  conditionClass: string
  headerIcon: string
  headerCircleClass: string
  headerIconClass: string
  ask: string
  answerName: string
  answerWalk: string
  answerTags: { icon: string, label: string }[]
  pins: { top: string, left: string, cls: string }[]
  recoTop: string
  recoLeft: string
  recoLabel: string
  recoIcon: string
  legendGood: string
  legendMid: string
  legendBad: string
}>()

const gridStyle = 'background-image: repeating-linear-gradient(0deg, transparent 0 43px, rgba(100,116,139,0.10) 43px 45px), repeating-linear-gradient(90deg, transparent 0 43px, rgba(100,116,139,0.10) 43px 45px);'
</script>

<template>
  <div class="h-full w-full px-12 py-7 flex flex-col bg-gradient-to-br from-slate-50 via-white to-green-50">
    <div class="shrink-0 flex items-center gap-3">
      <div class="rounded-full w-11 h-11 flex items-center justify-center border-2 shrink-0" :class="headerCircleClass">
        <div class="text-xl" :class="[headerIcon, headerIconClass]"/>
      </div>
      <div>
        <div class="text-2xl font-bold text-gray-800 leading-tight">{{ title }}</div>
        <div class="text-sm text-gray-500 leading-tight">{{ subtitle }}</div>
      </div>
    </div>

    <div class="flex-grow flex items-center gap-3 mt-2">

      <!-- Beat 1, the ask -->
      <div class="w-[24%] shrink-0">
        <div class="section-label">You ask</div>
        <div class="rounded-2xl border-2 border-solid border-slate-200 bg-white p-3 shadow-sm">
          <div class="mb-2">
            <span class="rounded-full px-2 py-0.5 text-[0.62rem] font-semibold border border-solid" :class="conditionClass">{{ condition }}</span>
          </div>
          <div class="flex justify-end mb-2">
            <div class="max-w-[92%] rounded-2xl rounded-br-sm bg-green-500 text-white text-sm px-3 py-2 leading-snug shadow-sm">{{ ask }}</div>
          </div>
          <div v-click="3" class="flex justify-start">
            <div class="max-w-[96%] rounded-2xl rounded-bl-sm bg-slate-100 text-gray-700 text-[0.78rem] px-3 py-2 leading-snug">
              <div class="flex items-center gap-1.5 font-semibold text-gray-800 mb-1"><div class="i-carbon:location-filled text-base text-green-600"/> {{ answerName }}, {{ answerWalk }}</div>
              <div class="flex flex-wrap gap-x-2.5 gap-y-1 text-[0.66rem] text-green-700">
                <span v-for="t in answerTags" :key="t.label" class="flex items-center gap-1"><div class="text-sm" :class="t.icon"/> {{ t.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Arrow 1 -->
      <div v-click="1" class="w-9 shrink-0 flex items-center justify-center">
        <div class="i-carbon:arrow-right text-3xl text-amber-500"/>
      </div>

      <!-- Beat 2, combine every layer -->
      <div v-click="1" class="w-[27%] shrink-0">
        <div class="section-label">We combine every layer</div>
        <div class="rounded-2xl border-2 border-solid border-slate-200 bg-white p-3 shadow-sm flex flex-col gap-2">
          <div class="rounded-lg border border-solid border-blue-200 bg-blue-50 px-2.5 py-1.5 flex items-center gap-2">
            <div class="i-carbon:earth text-xl text-blue-600 shrink-0"/>
            <div class="leading-tight"><div class="text-[0.8rem] font-semibold text-blue-700">Open data</div><div class="text-[0.64rem] text-gray-500">Globe Explorer</div></div>
          </div>
          <div class="rounded-lg border border-solid border-green-200 bg-green-50 px-2.5 py-1.5 flex items-center gap-2">
            <div class="i-carbon:iot-platform text-xl text-green-600 shrink-0"/>
            <div class="leading-tight"><div class="text-[0.8rem] font-semibold text-green-700">Air quality</div><div class="text-[0.64rem] text-gray-500">OpenSensor.space</div></div>
          </div>
          <div class="rounded-lg border border-solid border-rose-200 bg-rose-50 px-2.5 py-1.5 flex items-center gap-2">
            <div class="i-carbon:face-satisfied text-xl text-rose-600 shrink-0"/>
            <div class="leading-tight"><div class="text-[0.8rem] font-semibold text-rose-700">Brain response</div><div class="text-[0.64rem] text-gray-500">Hormones and Cities</div></div>
          </div>
          <div class="flex justify-center"><div class="i-carbon:arrow-down text-2xl text-amber-500"/></div>
          <div class="rounded-xl bg-gradient-to-r from-green-500 to-amber-500 text-white text-center py-2 px-2 shadow-sm">
            <div class="text-[0.62rem] uppercase tracking-wider opacity-90 leading-none mb-0.5">One score per place</div>
            <div class="font-bold text-base leading-tight">Sensory fit index</div>
          </div>
        </div>
      </div>

      <!-- Arrow 2 -->
      <div v-click="2" class="w-9 shrink-0 flex items-center justify-center">
        <div class="i-carbon:arrow-right text-3xl text-amber-500"/>
      </div>

      <!-- Beat 3, best places on the map -->
      <div v-click="2" class="flex-grow h-full flex flex-col min-w-0">
        <div class="section-label">Best places for you</div>
        <div class="flex-grow relative rounded-2xl border-2 border-solid border-slate-200 overflow-hidden shadow-sm bg-green-50" :style="gridStyle">
          <div v-for="(p, i) in pins" :key="i" class="absolute" :style="{ top: p.top, left: p.left }"><div class="i-carbon:location-filled text-2xl" :class="p.cls"/></div>
          <div v-click="3" class="absolute" :style="{ top: recoTop, left: recoLeft }">
            <div v-motion :initial="{ scale: 0.6, opacity: 0.55 }" :enter="{ scale: 2.4, opacity: 0, transition: { duration: 1800, repeat: Infinity, ease: 'easeOut' } }" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-green-400"></div>
            <div class="absolute left-1/2 -top-8 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white border-2 border-solid border-green-500 px-2 py-0.5 shadow text-[0.66rem] font-semibold text-green-700 flex items-center gap-1"><div class="text-sm" :class="recoIcon"/> {{ recoLabel }}</div>
            <div class="i-carbon:location-filled relative text-4xl text-green-600 drop-shadow"/>
          </div>
          <div class="absolute flex items-center gap-1" style="top: 84%; left: 12%;">
            <div class="w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-solid border-white shadow"></div>
            <div class="text-[0.62rem] font-semibold text-blue-700">You</div>
          </div>
          <div class="absolute bottom-2 right-2 rounded-lg bg-white border border-solid border-slate-200 px-2.5 py-1.5 flex gap-3 text-[0.62rem]">
            <span class="flex items-center gap-1 text-green-700"><div class="w-2.5 h-2.5 rounded-full bg-green-500"/> {{ legendGood }}</span>
            <span class="flex items-center gap-1 text-amber-700"><div class="w-2.5 h-2.5 rounded-full bg-amber-400"/> {{ legendMid }}</span>
            <span class="flex items-center gap-1 text-rose-600"><div class="w-2.5 h-2.5 rounded-full bg-rose-400"/> {{ legendBad }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
