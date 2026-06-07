---
layout: full
transition: view-transition
class: persona-detail
---

<Morph name="vt-investors" class="morph-panel bg-amber-50 border-solid border-4 border-amber-500 !px-14 !py-10">

<Reveal class="flex items-center gap-3">
  <div class="rounded-full w-12 h-12 flex items-center justify-center bg-amber-100 border-2 border-amber-400 shrink-0">
    <div i-carbon:growth class="text-2xl text-amber-600"/>
  </div>
  <div>
    <div class="text-2xl font-bold text-amber-700 leading-tight">Investors</div>
    <div class="text-sm text-gray-500 leading-tight">ESG reporting</div>
  </div>
</Reveal>

<Reveal :delay="80" class="mt-3 text-xl font-semibold text-gray-800">
Which of our assets carry the most heat risk
</Reveal>

<div class="mt-3 grid grid-cols-2 gap-6 items-stretch">

<Reveal :delay="160">

```sql
-- urban heat vulnerability, a six signal composite
SELECT b.h3_index, b.building_count, b.total_volume_m3,
       b.coverage_ratio, b.building_density,
       tr.n_paved,
       w.temperature_2m_C, w.wind_speed_10m_ms
FROM 'walkthru-earth/building/h3=5' b
LEFT JOIN 'walkthru-earth/transport/h3=5' tr USING (h3_index)
LEFT JOIN 'walkthru-earth/weather/h3=5' w USING (h3_index)
WHERE b.building_density > 0
ORDER BY w.temperature_2m_C DESC
```

</Reveal>

<Reveal :delay="240" class="flex flex-col min-h-0">
  <iframe
    src="https://walkthru.earth/indices?section=heat-vulnerability&x=31.24&y=30.05&z=5&h3=5"
    class="w-full rounded-xl border-2 border-solid border-amber-300 bg-black flex-grow"
    loading="lazy"
    title="Heat vulnerability index over Cairo"
  />
  <div class="mt-2 text-sm text-gray-600">
    Concrete mass, sealed ground, and heat, an ESG score per asset.
  </div>
</Reveal>

</div>

</Morph>

<!--
Investors, reporting climate risk.
- The question, how exposed is the portfolio to heat.
- The real heat vulnerability composite runs on open data.
- The live globe flags the red cells, then back out.
-->
