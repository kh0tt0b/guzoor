export interface Hero {
  id: string
  name: string
  title: string
  region: string
  year: number
  era: string
  shortBio: string
  biography: string[]
  avatar: string
  virtues: string[]
  quote: string
  caption?: string
  featured?: boolean
}

export interface Article {
  id: string
  title: string
  excerpt: string
  content: string[]
  category: string
  author: string
  date: string
  readTime: string
  image?: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface Sermon {
  id: string
  title: string
  speaker: string
  duration: string
  type: 'video' | 'audio'
  src: string
  poster?: string
  description: string
}

export type FilterCategory = 'all' | string
