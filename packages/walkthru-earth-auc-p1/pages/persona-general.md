---
layout: full
transition: view-transition
class: persona-detail
---

<div class="h-full w-full px-12 py-9 flex flex-col">

<Reveal class="text-center shrink-0">
  <div class="text-3xl font-bold text-gray-800">The same open data helps many more</div>
  <div class="text-base text-gray-500 mt-1">Everyday questions, answered from one open dataset</div>
</Reveal>

<div class="mt-7 flex-grow grid grid-cols-3 gap-6">

<Morph name="vt-families" class="rounded-2xl border-2 border-solid border-green-400 bg-green-50 p-6 flex flex-col">
  <div class="flex items-center gap-3">
    <div class="rounded-full w-12 h-12 flex items-center justify-center bg-green-100 border-2 border-green-400 shrink-0">
      <div i-carbon:home class="text-2xl text-green-600"/>
    </div>
    <div>
      <div class="text-xl font-bold text-green-700 leading-tight">Families</div>
      <div class="text-sm text-gray-500 leading-tight">Healthy neighborhoods</div>
    </div>
  </div>
  <div class="mt-4 flex flex-col gap-2.5">
  <Reveal :delay="80" class="flex items-start gap-2 text-sm font-medium text-gray-700 leading-snug">
    <div i-carbon:help class="text-base text-green-500 shrink-0 mt-0.5"/>
    Where can my family find green space nearby
  </Reveal>
  <Reveal :delay="120" class="flex items-start gap-2 text-sm font-medium text-gray-700 leading-snug">
    <div i-carbon:help class="text-base text-green-500 shrink-0 mt-0.5"/>
    Which area near work has the cleanest air
  </Reveal>
  <Reveal :delay="160" class="flex items-start gap-2 text-sm font-medium text-gray-700 leading-snug">
    <div i-carbon:help class="text-base text-green-500 shrink-0 mt-0.5"/>
    Where are the quietest streets to live on
  </Reveal>
  </div>
  <Reveal :delay="220" class="mt-auto pt-4 flex items-center gap-2 text-sm text-green-700">
    <div i-carbon:tree class="text-lg shrink-0"/>
    Biophilic index, green space per person
  </Reveal>
</Morph>

<Morph name="vt-planners" class="rounded-2xl border-2 border-solid border-blue-400 bg-blue-50 p-6 flex flex-col">
  <div class="flex items-center gap-3">
    <div class="rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 border-2 border-blue-400 shrink-0">
      <div i-carbon:map class="text-2xl text-blue-600"/>
    </div>
    <div>
      <div class="text-xl font-bold text-blue-700 leading-tight">Planners</div>
      <div class="text-sm text-gray-500 leading-tight">Evidence for parks</div>
    </div>
  </div>
  <div class="mt-4 flex flex-col gap-2.5">
  <Reveal :delay="140" class="flex items-start gap-2 text-sm font-medium text-gray-700 leading-snug">
    <div i-carbon:help class="text-base text-blue-500 shrink-0 mt-0.5"/>
    Which streets are built for people, not just cars
  </Reveal>
  <Reveal :delay="180" class="flex items-start gap-2 text-sm font-medium text-gray-700 leading-snug">
    <div i-carbon:help class="text-base text-blue-500 shrink-0 mt-0.5"/>
    Where are the gaps in our park network
  </Reveal>
  <Reveal :delay="220" class="flex items-start gap-2 text-sm font-medium text-gray-700 leading-snug">
    <div i-carbon:help class="text-base text-blue-500 shrink-0 mt-0.5"/>
    Which blocks need shade and trees the most
  </Reveal>
  </div>
  <Reveal :delay="280" class="mt-auto pt-4 flex items-center gap-2 text-sm text-blue-700">
    <div i-carbon:road class="text-lg shrink-0"/>
    Walkability index, streets for people
  </Reveal>
</Morph>

<Morph name="vt-investors" class="rounded-2xl border-2 border-solid border-amber-400 bg-amber-50 p-6 flex flex-col">
  <div class="flex items-center gap-3">
    <div class="rounded-full w-12 h-12 flex items-center justify-center bg-amber-100 border-2 border-amber-400 shrink-0">
      <div i-carbon:growth class="text-2xl text-amber-600"/>
    </div>
    <div>
      <div class="text-xl font-bold text-amber-700 leading-tight">Investors</div>
      <div class="text-sm text-gray-500 leading-tight">ESG reporting</div>
    </div>
  </div>
  <div class="mt-4 flex flex-col gap-2.5">
  <Reveal :delay="200" class="flex items-start gap-2 text-sm font-medium text-gray-700 leading-snug">
    <div i-carbon:help class="text-base text-amber-500 shrink-0 mt-0.5"/>
    Which assets lose value as heat rises
  </Reveal>
  <Reveal :delay="240" class="flex items-start gap-2 text-sm font-medium text-gray-700 leading-snug">
    <div i-carbon:help class="text-base text-amber-500 shrink-0 mt-0.5"/>
    Do greener, walkable streets lift property value
  </Reveal>
  <Reveal :delay="280" class="flex items-start gap-2 text-sm font-medium text-gray-700 leading-snug">
    <div i-carbon:help class="text-base text-amber-500 shrink-0 mt-0.5"/>
    Where does climate risk threaten our returns
  </Reveal>
  </div>
  <Reveal :delay="340" class="mt-auto pt-4 flex items-center gap-2 text-sm text-amber-700">
    <div i-carbon:building class="text-lg shrink-0"/>
    Heat vulnerability index, risk to asset value
  </Reveal>
</Morph>

</div>

<Reveal :delay="420" class="mt-7 text-center text-sm text-gray-500 shrink-0">
Families, planners, and investors all read the same open layers, no login.
</Reveal>

</div>

<!--
The general group, three audiences on one slide.
- Families look for green space, the biophilic index answers it.
- Planners look for streets built for people, the walkability index ranks them.
- Investors look for heat risk across assets, the heat vulnerability index flags it.
- All three read the same open data, no login, then we go deeper on the four that matter most here.
- The cards zoom back out to the map.
-->
