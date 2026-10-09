import type { Course } from '../types'
import coursesData from '../content/courses.json'

export const courses = (coursesData as { courses: Course[] }).courses
