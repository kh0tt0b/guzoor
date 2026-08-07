import { Link } from 'react-router-dom'
import type { Martyr } from '../types'
import { LazyImage } from './LazyImage'
import { assetUrl } from '../lib/assetUrl'
import { ArrowRightIcon, CalendarIcon, MapPinIcon, QuoteIcon } from './icons'

export function MartyrCard({ martyr }: { martyr: Martyr }) {
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <Link
        to={`/martyrs/${martyr.id}`}
        className="relative block aspect-[4/3] overflow-hidden"
        aria-label={`Read the story of ${martyr.name}`}
      >
        <LazyImage
          src={assetUrl(martyr.avatar)}
          alt={`Portrait of ${martyr.name}`}
          wrapperClassName="h-full w-full"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary-700/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {martyr.era}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug">
          <Link
            to={`/martyrs/${martyr.id}`}
            className="transition-colors hover:text-accent"
          >
            {martyr.name}
          </Link>
        </h3>
        <p className="mt-0.5 text-sm font-medium text-accent">{martyr.title}</p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-primary-400 dark:text-cream-200/70">
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5" />
            {martyr.region}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarIcon className="h-3.5 w-3.5" />
            {martyr.year}
          </span>
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-primary-400 dark:text-cream-200/75">
          {martyr.shortBio}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-accent/10 pt-4 dark:border-primary-500/40">
          <div className="flex items-center gap-1.5 text-xs text-accent-400">
            <QuoteIcon className="h-3.5 w-3.5" />
            <span className="line-clamp-1 italic">{martyr.quote}</span>
          </div>
          <Link
            to={`/martyrs/${martyr.id}`}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-400"
          >
            Read story
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
