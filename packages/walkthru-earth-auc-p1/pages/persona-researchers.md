---
layout: full
transition: view-transition
class: persona-detail
---

<Morph name="vt-researchers" class="morph-panel bg-purple-50 border-solid border-4 border-purple-500 !px-14 !py-10">

<Reveal class="flex items-center gap-3">
  <div class="rounded-full w-12 h-12 flex items-center justify-center bg-purple-100 border-2 border-purple-400 shrink-0">
    <div i-carbon:education class="text-2xl text-purple-600"/>
  </div>
  <div>
    <div class="text-2xl font-bold text-purple-700 leading-tight">Researchers</div>
    <div class="text-sm text-gray-500 leading-tight">Open datasets, free to build on</div>
  </div>
</Reveal>

<Reveal :delay="80" class="mt-3 text-xl font-semibold text-gray-800">
How will Cairo's population shift out to 2100
</Reveal>

<div class="mt-3 grid grid-cols-2 gap-6 items-stretch">

<Reveal :delay="160">

````md magic-move
```sql
-- open population projections, one row per H3 cell
SELECT h3_index, pop_2025, pop_2050, pop_2100
FROM 'walkthru-earth/population/h3=4'
WHERE pop_2025 >= 10
```
```sql
-- add the growth ratio, ready to join to a health cohort
SELECT h3_index, pop_2025, pop_2100,
       pop_2100 / NULLIF(pop_2025, 0) AS growth_ratio
FROM 'walkthru-earth/population/h3=4'
WHERE pop_2025 >= 10
ORDER BY growth_ratio DESC
```
````

</Reveal>

<Reveal :delay="240" class="flex flex-col min-h-0">
  <iframe
    src="https://walkthru.earth/indices?section=population-growth&x=31.24&y=30.05&z=4.5&h3=4"
    class="w-full rounded-xl border-2 border-solid border-purple-300 bg-black flex-grow"
    loading="lazy"
    title="Population growth index over Cairo"
  />
  <div class="mt-2 text-sm text-gray-600">
    Open data, free to join to any study, no license.
  </div>
</Reveal>

</div>

</Morph>

<!--
Researchers, the worked example.
- A real question, where will Cairo grow.
- Start simple, then add the growth ratio in one move.
- The live globe shows it, all open, free to build on, then back out.
-->
