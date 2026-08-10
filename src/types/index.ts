export interface Martyr {
  id: string
  name: string
  nameAr?: string
  title: string
  titleAr?: string
  region: string
  year: number
  era: string
  shortBio: string
  shortBioAr?: string
  biography: string[]
  biographyAr?: string[]
  avatar: string
  virtues: string[]
  virtuesAr?: string[]
  quote: string
  quoteAr?: string
  caption?: string
  source?: string
  featured?: boolean
}

export interface Article {
  id: string
  title: string
  titleAr?: string
  excerpt: string
  excerptAr?: string
  content: string[]
  contentAr?: string[]
  category: string
  author: string
  authorAr?: string
  date: string
  readTime: string
  readTimeAr?: string
  image?: string
}

export interface FaqItem {
  id: string
  question: string
  questionAr?: string
  answer: string
  answerAr?: string
}

export interface Lecture {
  id: string
  title: string
  arabicTitle: string
  speaker: string
  series?: string
  date: string
  description: string
  descriptionAr?: string
}

export interface Sermon {
  id: string
  title: string
  titleAr?: string
  speaker: string
  duration: string
  type: 'video' | 'audio'
  src: string
  poster?: string
  description: string
  descriptionAr?: string
}

export interface Course {
  id: string
  title: string
  arabicTitle: string
  schedule: string
  presenter?: string
  description: string
  descriptionAr?: string
  icon?: string
}

export type FilterCategory = 'all' | string
