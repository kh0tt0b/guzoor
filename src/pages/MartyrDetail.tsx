import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { MartyrCard } from '../components/MartyrCard'
import { SocialShare } from '../components/SocialShare'
import { LazyImage } from '../components/LazyImage'
import { useLanguage } from '../context/LanguageContext'
import { pick } from '../lib/i18n'
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  CopyIcon,
  InstagramIcon,
  MapPinIcon,
  QuoteIcon,
  StarIcon,
  TelegramIcon,
} from '../components/icons'
import { getMartyrById, martyrs } from '../data/martyrs'
import { assetUrl } from '../lib/assetUrl'

export function MartyrDetail() {
  const { martyrId } = useParams<{ martyrId: string }>()
  const martyr = martyrId ? getMartyrById(martyrId) : undefined
  const [copied, setCopied] = useState(false)
  const { t, language } = useLanguage()

  if (!martyr) {
    return (
      <div className="container-page py-28 text-center">
        <Seo title="Martyr not found" description="This martyr is not in the archive." path="/martyrs" />
        <h1 className="font-display text-3xl font-bold text-primary-700 dark:text-cream-100">
          {t('martyrDetail', 'notFoundTitle')}
        </h1>
        <p className="mt-3 text-primary-400 dark:text-cream-200/70">
          {t('martyrDetail', 'notFoundDescription')}
        </p>
        <Link to="/martyrs" className="btn-primary mt-8">
          {t('martyrDetail', 'backToMartyrs')}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  const related = martyrs
    .filter(
      (m) =>
        m.id !== martyr.id &&
        (m.era === martyr.era || m.region === martyr.region),
    )
    .slice(0, 3)

  const name = pick(language, martyr.name, martyr.nameAr)
  const title = pick(language, martyr.title, martyr.titleAr)
  const shortBio = pick(language, martyr.shortBio, martyr.shortBioAr)
  const quote = pick(language, martyr.quote, martyr.quoteAr)
  const biography = language === 'ar' && martyr.biographyAr ? martyr.biographyAr : martyr.biography
  const virtues = language === 'ar' && martyr.virtuesAr ? martyr.virtuesAr : martyr.virtues

  return (
    <>
      <Seo
        title={`${martyr.name} — ${martyr.title}`}
        description={martyr.shortBio}
        path={`/martyrs/${martyr.id}`}
      />

      <section className="bg-primary-900 py-14 text-white">
        <div className="container-page">
          <Reveal>
            <nav className="mb-8 text-sm text-cream-200/60" aria-label="Breadcrumb">
              <Link to="/martyrs" className="transition-colors hover:text-accent-300">
                {t('martyrsPage', 'eyebrow')}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-cream-100">{name}</span>
            </nav>
          </Reveal>

          <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:text-left">
            <Reveal className="shrink-0">
              <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full ring-4 ring-accent/40 lg:mx-0 lg:h-52 lg:w-52">
                <LazyImage
                  src={assetUrl(martyr.avatar)}
                  alt={`Portrait of ${name}`}
                  wrapperClassName="h-full w-full"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <div className="max-w-2xl">
              <Reveal delay={80}>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-300">
                  {t('eras', martyr.era)}
                </span>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                  {name}
                </h1>
                <p className="mt-1 text-lg font-medium text-accent-300">
                  {title}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-cream-200/70 lg:justify-start">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPinIcon className="h-4 w-4" />
                    {t('regions', martyr.region)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarIcon className="h-4 w-4" />
                    {martyr.year}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-5 text-base leading-relaxed text-cream-100/85">
                  {shortBio}
                </p>
              </Reveal>

              {martyr.caption && (
                <Reveal delay={280} className="mt-6">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="eyebrow text-accent-300">{t('martyrDetail', 'readyToShare')}</p>
                      <button
                        type="button"
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(
                              martyr.caption as string,
                            )
                          } catch {
                            /* clipboard unavailable */
                          }
                          setCopied(true)
                          window.setTimeout(() => setCopied(false), 2000)
                        }}
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-400"
                      >
                        {copied ? (
                          <>
                            <CheckIcon className="h-3.5 w-3.5" />
                            {t('martyrDetail', 'copied')}
                          </>
                        ) : (
                          <>
                            <CopyIcon className="h-3.5 w-3.5" />
                            {t('martyrDetail', 'copyCaption')}
                          </>
                        )}
                      </button>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-cream-100/90" aria-live="polite">
                      {martyr.caption}
                    </p>
                  </div>
                </Reveal>
              )}

              <Reveal delay={320} className="mt-6">
                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  {virtues.map((v) => (
                    <span
                      key={v}
                      className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 px-3 py-1 text-xs font-medium text-accent-300"
                    >
                      <StarIcon className="h-3 w-3" />
                      {v}
                    </span>
                  ))}
                </div>
              </Reveal>

              {martyr.source && (
                <Reveal delay={340} className="mt-6">
                  {martyr.source.includes('instagram.com') ? (
                    <a
                      href={martyr.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-cream-100 transition-colors hover:border-accent hover:text-accent-300"
                    >
                      <InstagramIcon className="h-4 w-4" />
                      {t('martyrDetail', 'viewOnInstagram')}
                    </a>
                  ) : (
                    <a
                      href={martyr.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-cream-100 transition-colors hover:border-accent hover:text-accent-300"
                    >
                      <TelegramIcon className="h-4 w-4" />
                      {t('martyrDetail', 'viewOnTelegram')}
                    </a>
                  )}
                </Reveal>
              )}

              <Reveal delay={360} className="mt-8">
                <SocialShare title={`${name} — ${title} | Guzoor`} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 dark:bg-primary-900">
        <div className="container-page max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-primary-700 dark:text-cream-100">
              {t('martyrDetail', 'theStory')}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {biography.map((para, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-base leading-relaxed text-primary-600 dark:text-cream-200/80">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <blockquote className="mt-10 rounded-2xl border-l-4 border-accent bg-accent/10 p-6 dark:bg-accent/15">
              <QuoteIcon className="h-6 w-6 text-accent" />
              <p className="mt-3 font-display text-xl font-semibold leading-relaxed text-primary-700 dark:text-cream-100">
                &ldquo;{quote}&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream pb-20 dark:bg-primary-900">
          <div className="container-page">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-primary-700 dark:text-cream-100">
                {t('martyrDetail', 'inSameLines')}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((m, i) => (
                <Reveal key={m.id} delay={i * 80}>
                  <MartyrCard martyr={m} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
