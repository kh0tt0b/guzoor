import type { Martyr } from '../types'
import martyrsData from '../content/martyrs.json'

export const martyrs = martyrsData as Martyr[]

export const regions = [...new Set(martyrs.map((h) => h.region))].sort()
export const eras = [...new Set(martyrs.map((h) => h.era))].sort()
export const years = [...new Set(martyrs.map((h) => h.year))].sort((a, b) => a - b)

export function getMartyrById(id: string): Martyr | undefined {
  return martyrs.find((h) => h.id === id)
}
