import { HNC_REGION_BASELINES_URL } from './config'

export interface RegionBaseline {
  alias: string
  mean_z: number
  sd_z: number
  n: number
}

let baselinePromise: Promise<Record<string, RegionBaseline> | null> | null = null

export function loadRegionBaselines(url = HNC_REGION_BASELINES_URL): Promise<Record<string, RegionBaseline> | null> {
  if (baselinePromise) return baselinePromise
  baselinePromise = fetch(url, { cache: 'force-cache' })
    .then(r => (r.ok ? (r.json() as Promise<RegionBaseline[]>) : null))
    .then((arr) => {
      if (!arr) return null
      const out: Record<string, RegionBaseline> = {}
      for (const row of arr) out[row.alias] = row
      return out
    })
    .catch(() => null)
  return baselinePromise
}

export function aoiSigma(rawZ: number, baseline: RegionBaseline | undefined): number {
  if (!baseline || !Number.isFinite(baseline.sd_z) || baseline.sd_z === 0) return rawZ
  return (rawZ - baseline.mean_z) / baseline.sd_z
}
