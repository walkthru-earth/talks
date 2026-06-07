---
layout: full
transition: view-transition
class: persona-detail
---

<Morph name="vt-families" class="morph-panel bg-green-50 border-solid border-4 border-green-500 !px-14 !py-10">

<Reveal class="flex items-center gap-3">
  <div class="rounded-full w-12 h-12 flex items-center justify-center bg-green-100 border-2 border-green-400 shrink-0">
    <div i-carbon:home class="text-2xl text-green-600"/>
  </div>
  <div>
    <div class="text-2xl font-bold text-green-700 leading-tight">Families</div>
    <div class="text-sm text-gray-500 leading-tight">Healthy neighborhoods</div>
  </div>
</Reveal>

<Reveal :delay="80" class="mt-3 text-xl font-semibold text-gray-800">
Where can my family find green space nearby
</Reveal>

<div class="mt-3 grid grid-cols-2 gap-6 items-stretch">

<Reveal :delay="160">

```sql
-- biophilic index, nature features per person
SELECT ba.h3_index,
       ba.n_lu_park + ba.n_lu_recreation
         + ba.n_lu_protected + ba.water_count AS nature,
       p.pop_2025 AS people,
       nature::FLOAT / NULLIF(p.pop_2025, 0) AS nature_per_capita
FROM 'walkthru-earth/base-index/h3=5' ba
JOIN 'walkthru-earth/population/h3=5' p USING (h3_index)
WHERE p.pop_2025 > 0
ORDER BY nature_per_capita
```

</Reveal>

<Reveal :delay="240" class="flex flex-col min-h-0">
  <iframe
    src="https://walkthru.earth/indices?section=biophilic&x=31.24&y=30.05&z=5&h3=5"
    class="w-full rounded-xl border-2 border-solid border-green-300 bg-black flex-grow"
    loading="lazy"
    title="Biophilic index over Cairo"
  />
  <div class="mt-2 text-sm text-gray-600">
    Green per person, the streets a family can breathe on.
  </div>
</Reveal>

</div>

</Morph>

<!--
Families, a parent choosing a neighborhood.
- The question, where is there green space for the kids.
- The real biophilic query runs on our open data, no login.
- The live globe shows the answer over Cairo, then back out.
-->
