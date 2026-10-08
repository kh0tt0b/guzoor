import type { Forum } from '../types'
import forumsData from '../content/forums.json'

export const forums = forumsData as Forum[]

/** Forums dated today or later, soonest first. */
export function getUpcomingForums(now: Date = new Date()): Forum[] {
  const today = now.toISOString().slice(0, 10)
  return forums
    .filter((f) => f.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
}
