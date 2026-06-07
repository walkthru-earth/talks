---
layout: full
transition: view-transition
class: persona-detail
---

<Morph name="vt-policymakers" class="morph-panel bg-rose-50 border-solid border-4 border-rose-500 !px-14 !py-10">

<Reveal class="flex items-center gap-3">
  <div class="rounded-full w-12 h-12 flex items-center justify-center bg-rose-100 border-2 border-rose-400 shrink-0">
    <div i-carbon:building-insights-1 class="text-2xl text-rose-600"/>
  </div>
  <div>
    <div class="text-2xl font-bold text-rose-700 leading-tight">Policymakers</div>
    <div class="text-sm text-gray-500 leading-tight">Health regulations</div>
  </div>
</Reveal>

<Reveal :delay="80" class="mt-3 text-xl font-semibold text-gray-800">
Where does today's heat cross the action line
</Reveal>

<div class="mt-3 grid grid-cols-2 gap-6 items-stretch">

<Reveal :delay="160">

````md magic-move
```sql
-- latest AI weather forecast, every H3 cell
SELECT h3_index, temperature_2m_C,
       wind_speed_10m_ms, pressure_msl_hPa
FROM 'walkthru-earth/weather/h3=4'
```
```sql
-- keep only the cells above the 40 C action line
SELECT h3_index, temperature_2m_C AS heat
FROM 'walkthru-earth/weather/h3=4'
WHERE timestamp = (SELECT MAX(timestamp) FROM weather)
  AND temperature_2m_C > 40
ORDER BY heat DESC
```
````

</Reveal>

<Reveal :delay="240" class="flex flex-col min-h-0">
  <iframe
    src="https://walkthru.earth/indices?section=weather-temperature&x=31.24&y=30.05&z=4&h3=4"
    class="w-full rounded-xl border-2 border-solid border-rose-300 bg-black flex-grow"
    loading="lazy"
    title="Temperature index over Cairo"
  />
  <div class="mt-2 text-sm text-gray-600">
    The cells over the line become today's alert list.
  </div>
</Reveal>

</div>

</Morph>

<!--
Policymakers, acting on a heatwave.
- The question, where do we breach the action line.
- Start with the raw forecast, then filter to the breaches.
- The live globe names the hot zones, then back out.
-->
