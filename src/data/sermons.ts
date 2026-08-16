import type { Sermon } from '../types'
import sermonsData from '../content/sermons.json'

export const sermons = sermonsData as Sermon[]

export function getSermonById(id: string): Sermon | undefined {
  return sermons.find((s) => s.id === id)
}
