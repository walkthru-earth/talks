---
layout: full
transition: view-transition
class: persona-detail
---

<Morph name="vt-you" class="morph-panel bg-gradient-to-br from-green-50 to-amber-50 border-solid border-4 border-green-500 !px-14 !py-8">

<Reveal class="flex items-center gap-3">
  <div class="rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-100 to-amber-100 border-2 border-green-400 shrink-0">
    <div i-carbon:user class="text-2xl text-green-600"/>
  </div>
  <div>
    <div class="text-2xl font-bold text-green-700 leading-tight">You</div>
    <div class="text-sm text-gray-500 leading-tight">Know what your city is doing to your health</div>
  </div>
</Reveal>

<Reveal :delay="80" class="mt-2 text-xl font-semibold text-gray-800">
How does my street actually make me feel
</Reveal>

<div class="mt-4 grid grid-cols-3 gap-10 px-10">

<Reveal :delay="160" class="text-center">
  <div class="relative mx-auto w-36 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-800 bg-gray-800">
    <div class="absolute inset-0 overflow-hidden">
      <img
        v-motion
        :initial="{ y: 0 }"
        :enter="{ y: -150, transition: { duration: 7000, repeat: Infinity, repeatType: 'mirror', repeatDelay: 1500 } }"
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
  <div class="mt-3 font-semibold text-base text-gray-800">Survey categories</div>
  <div class="text-sm text-gray-500">Housing, wellbeing, community</div>
</Reveal>

<Reveal :delay="240" class="text-center">
  <div class="relative mx-auto w-36 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-800 bg-gray-800">
    <div class="absolute inset-0 overflow-hidden">
      <img
        v-motion
        :initial="{ y: 0 }"
        :enter="{ y: -36, transition: { duration: 4000, repeat: Infinity, repeatType: 'mirror', repeatDelay: 2500 } }"
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
  <div class="mt-3 font-semibold text-base text-gray-800">AI reflection</div>
  <div class="text-sm text-gray-500">Guided, private conversations</div>
</Reveal>

<Reveal :delay="320" class="text-center">
  <div class="relative mx-auto w-36 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-800 bg-gray-800">
    <div class="absolute inset-0 overflow-hidden">
      <img
        v-motion
        :initial="{ y: 0 }"
        :enter="{ y: -300, transition: { duration: 9000, repeat: Infinity, repeatType: 'mirror', repeatDelay: 1500 } }"
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
  <div class="mt-3 font-semibold text-base text-gray-800">City pulse dashboard</div>
  <div class="text-sm text-gray-500">Community trends over time</div>
</Reveal>

</div>

<Reveal :delay="400" class="mt-5 flex justify-center gap-8 text-sm">
  <div class="flex items-center gap-1.5 text-green-600"><div i-carbon:checkmark-filled /><span>No account required</span></div>
  <div class="flex items-center gap-1.5 text-green-600"><div i-carbon:checkmark-filled /><span>No personal data stored</span></div>
  <div class="flex items-center gap-1.5 text-green-600"><div i-carbon:checkmark-filled /><span>Location aggregated</span></div>
</Reveal>

</Morph>

<!--
You, the person in the middle of it all.
- The question, how does my street actually make me feel.
- The Hormones and Cities app captures the human experience of your city, completely anonymously.
- Survey categories, housing, wellbeing, community. AI reflection, a guided and private conversation. City pulse dashboard, community trends over time.
- No account, no personal data stored, location aggregated, your raw data never leaves your phone.
- Your experience becomes open city health that everyone can act on, then back out to the map.
-->
