---
layout: center
transition: view-transition
---

<div class="text-center">

<div class="text-6xl font-bold text-gray-800">Who benefits?</div>

<Reveal class="text-2xl text-gray-600 mt-4 mb-10">
We turn open data into <strong>actionable insights</strong> for everyone
</Reveal>

</div>

<div class="flex justify-center items-center gap-16">

<!-- Left column -->
<div class="space-y-5 w-72">

<Reveal :delay="60">
<Morph name="vt-families" class="rounded-xl border-2 border-solid border-green-400 bg-green-50 px-5 py-4 flex items-center gap-4">
  <div class="rounded-full w-16 h-16 flex items-center justify-center bg-green-100 border-2 border-green-400 shrink-0">
    <div i-carbon:home class="text-3xl text-green-600"/>
  </div>
  <div class="text-left">
    <div class="font-bold text-xl leading-tight">Families</div>
    <div class="text-base text-gray-500 leading-tight">Healthy neighborhoods</div>
  </div>
</Morph>
</Reveal>

<Reveal :delay="120">
<Morph name="vt-planners" class="rounded-xl border-2 border-solid border-blue-400 bg-blue-50 px-5 py-4 flex items-center gap-4">
  <div class="rounded-full w-16 h-16 flex items-center justify-center bg-blue-100 border-2 border-blue-400 shrink-0">
    <div i-carbon:map class="text-3xl text-blue-600"/>
  </div>
  <div class="text-left">
    <div class="font-bold text-xl leading-tight">Planners</div>
    <div class="text-base text-gray-500 leading-tight">Evidence for parks</div>
  </div>
</Morph>
</Reveal>

<Reveal :delay="180">
<Morph name="vt-investors" class="rounded-xl border-2 border-solid border-amber-400 bg-amber-50 px-5 py-4 flex items-center gap-4">
  <div class="rounded-full w-16 h-16 flex items-center justify-center bg-amber-100 border-2 border-amber-400 shrink-0">
    <div i-carbon:growth class="text-3xl text-amber-600"/>
  </div>
  <div class="text-left">
    <div class="font-bold text-xl leading-tight">Investors</div>
    <div class="text-base text-gray-500 leading-tight">ESG reporting</div>
  </div>
</Morph>
</Reveal>

</div>

<!-- Center, the individual -->
<Reveal :delay="240" class="text-center shrink-0">
  <Morph name="vt-you">
    <div class="rounded-full w-44 h-44 mx-auto flex items-center justify-center bg-gradient-to-br from-green-100 to-amber-100 border-4 border-green-500 shadow-lg">
      <div i-carbon:user class="text-8xl text-green-600"/>
    </div>
  </Morph>
  <div class="mt-3 font-bold text-3xl" style="color: hsl(158 64% 42%)">You</div>
  <div class="text-lg text-gray-600 max-w-56 mx-auto leading-tight">
    Know what your city is doing to <strong>your health</strong>
  </div>
</Reveal>

<!-- Right column -->
<div class="space-y-5 w-72">

<Reveal :delay="300">
<Morph name="vt-researchers" class="rounded-xl border-2 border-solid border-purple-400 bg-purple-50 px-5 py-4 flex items-center gap-4">
  <div class="rounded-full w-16 h-16 flex items-center justify-center bg-purple-100 border-2 border-purple-400 shrink-0">
    <div i-carbon:education class="text-3xl text-purple-600"/>
  </div>
  <div class="text-left">
    <div class="font-bold text-xl leading-tight">Researchers</div>
    <div class="text-base text-gray-500 leading-tight">Open datasets</div>
  </div>
</Morph>
</Reveal>

<Reveal :delay="360">
<Morph name="vt-policymakers" class="rounded-xl border-2 border-solid border-rose-400 bg-rose-50 px-5 py-4 flex items-center gap-4">
  <div class="rounded-full w-16 h-16 flex items-center justify-center bg-rose-100 border-2 border-rose-400 shrink-0">
    <div i-carbon:building-insights-1 class="text-3xl text-rose-600"/>
  </div>
  <div class="text-left">
    <div class="font-bold text-xl leading-tight">Policymakers</div>
    <div class="text-base text-gray-500 leading-tight">Health regulations</div>
  </div>
</Morph>
</Reveal>

<Reveal :delay="420">
<Morph name="vt-communities" class="rounded-xl border-2 border-solid border-teal-400 bg-teal-50 px-5 py-4 flex items-center gap-4">
  <div class="rounded-full w-16 h-16 flex items-center justify-center bg-teal-100 border-2 border-teal-400 shrink-0">
    <div i-carbon:events class="text-3xl text-teal-600"/>
  </div>
  <div class="text-left">
    <div class="font-bold text-xl leading-tight">Communities</div>
    <div class="text-base text-gray-500 leading-tight">Advocate for change</div>
  </div>
</Morph>
</Reveal>

</div>

</div>

<Reveal :delay="480" class="mt-10 text-center text-lg text-gray-500">
<strong>Everyone</strong> deserves to know what their environment is doing to them
</Reveal>

<!--
Who benefits, everyone in the city.
- You are in the middle, you deserve to know what your street is doing to your health.
- Around you, six people who can act on the same data, families, planners, investors, researchers, policymakers, communities.
- Next, zoom into each one, the question they ask and the open data answer, then back out to this map.
-->
