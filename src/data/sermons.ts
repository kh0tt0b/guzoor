import type { Sermon } from '../types'
import sermonsData from '../content/sermons.json'

// Recordings without a media link stay hidden until one is added in the admin.
export const sermons = (sermonsData as { sermons: Sermon[] }).sermons.filter((s) => s.src)

export function getSermonById(id: string): Sermon | undefined {
  return sermons.find((s) => s.id === id)
}
