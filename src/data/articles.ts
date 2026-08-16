import type { Article } from '../types'
import articlesData from '../content/articles.json'

export const articles = articlesData as Article[]

export const articleCategories = [...new Set(articles.map((a) => a.category))].sort()

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id)
}
