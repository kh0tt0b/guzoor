import type { Forum } from '../types'
import forumsData from '../content/forums.json'

// The admin editor (Decap CMS) needs a top-level object, so the list lives under "forums".
export const forums = (forumsData as { forums?: Forum[] }).forums ?? []

/** Forums dated today or later, soonest first. */
export function getUpcomingForums(now: Date = new Date()): Forum[] {
  const today = now.toISOString().slice(0, 10)
  return forums
    .filter((f) => f.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
}
