import type { Lecture } from '../types'
import lecturesData from '../content/lectures.json'

export const lectures = (lecturesData as { lectures: Lecture[] }).lectures

export function getLectureById(id: string): Lecture | undefined {
  return lectures.find((l) => l.id === id)
}
