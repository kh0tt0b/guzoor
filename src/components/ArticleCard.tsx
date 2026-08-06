import { Link } from 'react-router-dom'
import type { Article } from '../types'
import { ArrowRightIcon } from './icons'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="card card-hover group flex h-full flex-col p-6">
      <span className="inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
        {article.category}
      </span>
      <h3 className="mt-4 text-lg font-semibold leading-snug">
        <Link
          to={`/religion#article-${article.id}`}
          className="transition-colors hover:text-accent"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-primary-400 dark:text-cream-200/75">
        {article.excerpt}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-accent/10 pt-4 text-xs text-primary-400 dark:border-primary-500/40 dark:text-cream-200/60">
        <span>
          {article.author} · {article.readTime}
        </span>
        <Link
          to={`/religion#article-${article.id}`}
          className="inline-flex items-center gap-1.5 font-semibold text-accent transition-colors hover:text-accent-400"
        >
          Read
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  )
}
