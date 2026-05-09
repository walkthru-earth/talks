import { HNC_CMAP_RANGE } from './config'

const STOPS: ReadonlyArray<readonly [number, readonly [number, number, number]]> = [
  [0.0, [0.12, 0.23, 0.54]],
  [0.18, [0.23, 0.51, 0.96]],
  [0.36, [0.58, 0.77, 0.99]],
  [0.5, [0.95, 0.96, 0.97]],
  [0.64, [0.99, 0.65, 0.65]],
  [0.82, [0.94, 0.27, 0.27]],
  [1.0, [0.5, 0.11, 0.11]],
]

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x)

export function dynamicRange(activity: Float32Array): readonly [number, number] {
  if (!activity.length) return HNC_CMAP_RANGE
  const abs = new Float32Array(activity.length)
  for (let i = 0; i < activity.length; i++) abs[i] = Math.abs(activity[i])
  abs.sort()
  const p99 = abs[Math.min(abs.length - 1, Math.floor(abs.length * 0.99))]
  if (!Number.isFinite(p99) || p99 === 0) return HNC_CMAP_RANGE
  return [-p99, p99]
}

export function colormap(v: number, range: readonly [number, number] = HNC_CMAP_RANGE): [number, number, number] {
  const [lo, hi] = range
  const t = clamp01((v - lo) / (hi - lo))
  for (let i = 0; i < STOPS.length - 1; i++) {
    const [t0, c0] = STOPS[i]
    const [t1, c1] = STOPS[i + 1]
    if (t <= t1) {
      const k = (t - t0) / (t1 - t0)
      return [
        c0[0] + (c1[0] - c0[0]) * k,
        c0[1] + (c1[1] - c0[1]) * k,
        c0[2] + (c1[2] - c0[2]) * k,
      ]
    }
  }
  const last = STOPS[STOPS.length - 1][1]
  return [last[0], last[1], last[2]]
}

export const SIGN_TONE = {
  negative: { dot: '#0ea5e9', barFrom: '#38bdf8', barTo: '#0369a1' },
  positive: { dot: '#f43f5e', barFrom: '#fb7185', barTo: '#be123c' },
} as const

export const signTone = (value: number) => (value < 0 ? SIGN_TONE.negative : SIGN_TONE.positive)

export const HNC_LEGEND_GRADIENT
  = 'linear-gradient(90deg, '
    + STOPS.map(([t, c]) => {
      const r = Math.round(c[0] * 255)
      const g = Math.round(c[1] * 255)
      const b = Math.round(c[2] * 255)
      return `rgb(${r}, ${g}, ${b}) ${(t * 100).toFixed(0)}%`
    }).join(', ')
    + ')'
