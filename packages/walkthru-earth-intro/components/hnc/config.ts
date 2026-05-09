// Assets are hosted on walkthru.earth GitHub Pages with CORS open. We fetch
// them directly so the slide deck stays small and stays in sync with the live
// site whenever those assets are republished.
export const HNC_BASE = 'https://walkthru.earth/hnc'

export const HNC_PARQUET_URL = `${HNC_BASE}/hnc_borough.parquet`

export const HNC_GLB = {
  high: {
    inflated: {
      left: `${HNC_BASE}/glb/brain-left-hemishpere-high-inflated.glb`,
      right: `${HNC_BASE}/glb/brain-right-hemisphere-high-inflated.glb`,
    },
    pial: {
      left: `${HNC_BASE}/glb/brain-left-hemishpere-high.glb`,
      right: `${HNC_BASE}/glb/brain-right-hemisphere-high.glb`,
    },
  },
  low: {
    inflated: {
      left: `${HNC_BASE}/glb/brain-left-hemisphere-inflated.glb`,
      right: `${HNC_BASE}/glb/brain-right-hemisphere-inflated.glb`,
    },
    pial: {
      left: `${HNC_BASE}/glb/brain-left-hemisphere.glb`,
      right: `${HNC_BASE}/glb/brain-right-hemisphere.glb`,
    },
  },
} as const

export const HNC_MAP_STYLE = {
  light: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
  dark: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
} as const

export const HNC_INITIAL_VIEW = {
  center: [-0.0913, 51.5054] as [number, number],
  zoom: 15.5,
  pitch: 35,
  bearing: -10,
} as const

export const HNC_CMAP_RANGE: [number, number] = [-0.25, 0.1]

export const FSAVERAGE5_HEMI_VERTS = 10242

export const HNC_WALK_INTERVAL_MS = 2400

export const HNC_FLY = {
  zoom: 18,
  pitch: 60,
  durationMs: 1600,
  curve: 1.2,
} as const

export const HNC_PARCEL_ATLAS_URL = `${HNC_BASE}/parcel_aliases.json`
export const HNC_REGION_BASELINES_URL = `${HNC_BASE}/region_baselines.json`

export type SurfaceMode = 'inflated' | 'pial'
export type ThemeMode = 'light' | 'dark'
export type ScoreScale = 'raw' | 'aoi'
