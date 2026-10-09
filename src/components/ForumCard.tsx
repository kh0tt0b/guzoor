import type { Forum } from '../types'
import { useLanguage } from '../context/LanguageContext'
import { pick } from '../lib/i18n'
import { assetUrl } from '../lib/assetUrl'
import { cn } from '../lib/cn'
import { CalendarIcon, MapPinIcon } from './icons'

export function ForumCard({ forum }: { forum: Forum }) {
  const { t, language } = useLanguage()
  const title = pick(language, forum.title, forum.titleAr)
  const time = pick(language, forum.time ?? '', forum.timeAr)
  const location = pick(language, forum.location ?? '', forum.locationAr)
  const description = pick(language, forum.description ?? '', forum.descriptionAr)
  const date = new Date(forum.date).toLocaleDateString(language === 'ar' ? 'ar' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article
      className={cn('card overflow-hidden', forum.image && 'sm:grid sm:grid-cols-[180px_1fr]')}
    >
      {forum.image && (
        <a
          href={assetUrl(forum.image)}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-primary-900/5 dark:bg-black/20"
        >
          <img
            src={assetUrl(forum.image)}
            alt={title}
            loading="lazy"
            className="h-full max-h-80 w-full object-contain sm:max-h-none sm:object-cover"
          />
        </a>
      )}
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-primary-400 dark:text-cream-200/60">
          <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
            <CalendarIcon className="h-3.5 w-3.5" />
            {date}
            {time ? ` · ${time}` : ''}
          </span>
          {location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="h-3.5 w-3.5" />
              {location}
            </span>
          )}
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold text-primary dark:text-white">
          {title}
        </h3>
        {description && (
          <p className="mt-3 leading-relaxed text-primary-400 dark:text-cream-200/75">
            {description}
          </p>
        )}
        {(forum.speaker || forum.link) && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-accent/10 pt-3 dark:border-primary-500/40">
            {forum.speaker && (
              <p className="text-sm font-semibold text-primary-500 dark:text-cream-200/70">
                {forum.speaker}
              </p>
            )}
            {forum.link && (
              <a
                href={forum.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {t('forums', 'joinForum')}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
