---
layout: full
transition: view-transition
class: persona-detail
---

<Morph name="vt-planners" class="morph-panel bg-blue-50 border-solid border-4 border-blue-500 !px-14 !py-10">

<Reveal class="flex items-center gap-3">
  <div class="rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 border-2 border-blue-400 shrink-0">
    <div i-carbon:map class="text-2xl text-blue-600"/>
  </div>
  <div>
    <div class="text-2xl font-bold text-blue-700 leading-tight">Planners</div>
    <div class="text-sm text-gray-500 leading-tight">Evidence for parks</div>
  </div>
</Reveal>

<Reveal :delay="80" class="mt-3 text-xl font-semibold text-gray-800">
Which streets are built for people, not just cars
</Reveal>

<div class="mt-3 grid grid-cols-2 gap-6 items-stretch">

<Reveal :delay="160">

```sql
-- walkability, five open layers from roads to destinations
SELECT tr.h3_index, tr.segment_count,
       tr.n_footway, tr.n_cycleway, tr.n_motorway,
       te.avg_slope_deg,
       pl.place_count
FROM 'walkthru-earth/transport/h3=5' tr
LEFT JOIN 'walkthru-earth/base-index/h3=5' ba USING (h3_index)
LEFT JOIN 'walkthru-earth/terrain/h3=5' te USING (h3_index)
LEFT JOIN 'walkthru-earth/places/h3=5' pl USING (h3_index)
WHERE tr.segment_count > 0
```

</Reveal>

<Reveal :delay="240" class="flex flex-col min-h-0">
  <iframe
    src="https://walkthru.earth/indices?section=walkability&x=31.24&y=30.05&z=5.5&h3=5"
    class="w-full rounded-xl border-2 border-solid border-blue-300 bg-black flex-grow"
    loading="lazy"
    title="Walkability index over Cairo"
  />
  <div class="mt-2 text-sm text-gray-600">
    The car-dominated reds are where a crossing or park pays off most.
  </div>
</Reveal>

</div>

</Morph>

<!--
Planners, deciding where to invest.
- The question, which streets work for people on foot.
- The real walkability composite runs on open data.
- The live globe ranks Cairo, evidence not opinion, then back out.
-->
