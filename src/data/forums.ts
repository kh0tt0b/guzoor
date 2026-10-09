import type { Forum } from '../types'
import forumsData from '../content/forums.json'

// Like every file in src/content, the list sits under a top-level key: the admin editor (Decap CMS) cannot read a bare array.
export const forums = (forumsData as { forums?: Forum[] }).forums ?? []

/** Forums dated today or later, soonest first. */
export function getUpcomingForums(now: Date = new Date()): Forum[] {
  const today = now.toISOString().slice(0, 10)
  return forums
    .filter((f) => f.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
}

/** Forums already held, newest first. */
export function getPastForums(now: Date = new Date()): Forum[] {
  const today = now.toISOString().slice(0, 10)
  return forums
    .filter((f) => f.date < today)
    .sort((a, b) => b.date.localeCompare(a.date))
}
