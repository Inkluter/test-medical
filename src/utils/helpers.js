export const m = (d, e) => d + (d * e / 10)
export const p = (d, e, f) => d + (d * (e - f) / 25.5)
export const t = (d, e, f) => d - (d * f / 30)
export const custom1P = (d, e) => 2 * d + (d * e / 100)
export const custom2M = (d, e, f) => f + d + (d * e / 100)
export const round = (number) => Math.trunc(number * 100) / 100