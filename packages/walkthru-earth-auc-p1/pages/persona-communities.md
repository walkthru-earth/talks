---
layout: full
transition: view-transition
class: persona-detail
---

<Morph name="vt-communities" class="morph-panel bg-teal-50 border-solid border-4 border-teal-500 !px-14 !py-10">

<Reveal class="flex items-center gap-3">
  <div class="rounded-full w-12 h-12 flex items-center justify-center bg-teal-100 border-2 border-teal-400 shrink-0">
    <div i-carbon:events class="text-2xl text-teal-600"/>
  </div>
  <div>
    <div class="text-2xl font-bold text-teal-700 leading-tight">Communities</div>
    <div class="text-sm text-gray-500 leading-tight">Advocate for change</div>
  </div>
</Reveal>

<Reveal :delay="80" class="mt-3 text-xl font-semibold text-gray-800">
Is our neighborhood water secure
</Reveal>

<div class="mt-3 grid grid-cols-2 gap-6 items-stretch">

<Reveal :delay="160">

```sql
-- water security, six signals across five open indices
SELECT p.h3_index, p.pop_2025,
       ba.water_count, ba.n_river, ba.n_reservoir,
       w.precipitation_mm_6hr,
       b.coverage_ratio
FROM 'walkthru-earth/population/h3=4' p
LEFT JOIN 'walkthru-earth/base-index/h3=4' ba USING (h3_index)
LEFT JOIN 'walkthru-earth/weather/h3=4' w USING (h3_index)
LEFT JOIN 'walkthru-earth/building/h3=4' b USING (h3_index)
WHERE p.pop_2025 > 100
```

</Reveal>

<Reveal :delay="240" class="flex flex-col min-h-0">
  <iframe
    src="https://walkthru.earth/indices?section=water-security&x=31.24&y=30.05&z=4.5&h3=4"
    class="w-full rounded-xl border-2 border-solid border-teal-300 bg-black flex-grow"
    loading="lazy"
    title="Water security index over Cairo"
  />
  <div class="mt-2 text-sm text-gray-600">
    A score we can take to the council, hard to wave away.
  </div>
</Reveal>

</div>

</Morph>

<!--
Communities, making the case for change.
- The question, are we water secure.
- The real water security composite runs on open data.
- The live globe shows the gap, then back out.
-->
