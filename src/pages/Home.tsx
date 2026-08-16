import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'
import { MartyrCard } from '../components/MartyrCard'
import { ArticleCard } from '../components/ArticleCard'
import { Reveal } from '../components/Reveal'
import { SocialShare } from '../components/SocialShare'
import { HeroSlideshow } from '../components/HeroSlideshow'
import { assetUrl } from '../lib/assetUrl'
import { useLanguage } from '../context/LanguageContext'
import { pick } from '../lib/i18n'
import {
  ArrowRightIcon,
  BookOpenIcon,
  HeartIcon,
  PenIcon,
  PlayIcon,
  QuoteIcon,
  TelegramIcon,
  UsersIcon,
} from '../components/icons'
import { martyrs } from '../data/martyrs'
import { courses } from '../data/courses'
import { articles } from '../data/articles'
import { sermons } from '../data/sermons'

function HeroOrnament() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="star-grid"
          width="140"
          height="140"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M70 18 79 61 122 70 79 79 70 122 61 79 18 70 61 61Z"
            fill="#EFECE3"
            fillOpacity="0.06"
          />
          <circle cx="70" cy="140" r="2" fill="#B57E54" fillOpacity="0.25" />
          <circle cx="140" cy="70" r="2" fill="#B57E54" fillOpacity="0.25" />
        </pattern>
        <radialGradient id="hero-glow" cx="50%" cy="38%" r="75%">
          <stop offset="0%" stopColor="#683A1D" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2C1C11" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#star-grid)" />
      <rect width="100%" height="100%" fill="url(#hero-glow)" />
      <path
        d="M0 460 C 320 380, 520 520, 900 420 S 1400 380, 1440 460 V 720 H 0 Z"
        fill="#1E130C"
        fillOpacity="0.55"
      />
    </svg>
  )
}

const programIcons = {
  book: BookOpenIcon,
  heart: HeartIcon,
  pen: PenIcon,
  users: UsersIcon,
}

const pillarKeys = [
  { step: '01', titleKey: 'recoverTitle', bodyKey: 'recoverBody' },
  { step: '02', titleKey: 'rootTitle', bodyKey: 'rootBody' },
  { step: '03', titleKey: 'connectTitle', bodyKey: 'connectBody' },
] as const

export function Home() {
  const { t, language } = useLanguage()
  const featured = martyrs.filter((m) => m.featured).slice(0, 3)
  const latestArticles = articles.slice(0, 3)
  const eraCount = new Set(martyrs.map((m) => m.era)).size
  const heroPhotos = martyrs.map((m) => ({
    src: assetUrl(m.avatar),
    alt: m.name,
  }))

  const stats = [
    { value: String(martyrs.length), label: t('home', 'statMartyrs') },
    { value: String(eraCount), label: t('home', 'statCampaigns') },
    { value: String(courses.length), label: t('home', 'statPrograms') },
    { value: String(articles.length), label: t('home', 'statArticles') },
  ]

  return (
    <>
      <Seo
        title="Guzoor — Roots for Intellectual Building & Deep-Rooting"
        description="Guzoor (جذور للبناء الفكري والتأصيل) is a continuous attempt to recover the Sudanese self from beneath the rubble of distortion, reconnecting the conscience with itself and with its Islamic world. Explore the programs, the martyrs, and the articles."
        path="/"
      />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-primary-900 text-white">
        <HeroSlideshow photos={heroPhotos} />
        <HeroOrnament />
        <div className="container-page relative flex min-h-[88svh] flex-col items-center justify-center py-24 text-center">
          <Reveal>
            <p className="eyebrow mb-6 text-cream-300">
              {t('home', 'heroEyebrow')}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              {t('home', 'heroTitlePre')}
              <span className="text-accent-300">{t('home', 'heroTitleHighlight')}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
              {t('home', 'heroParagraph')}
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/martyrs" className="btn-primary">
              {t('home', 'ctaMartyrs')}
              <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <a
              href="https://t.me/rootsplatform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t('home', 'ctaJoinChannel')}
              <TelegramIcon className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={400}>
            <SocialShare
              title="جذور للبناء الفكري والتأصيل — Guzoor: Recovering the Sudanese self"
              className="mt-10"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="relative overflow-hidden bg-primary-900 py-20 text-white sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 85% 20%, rgba(181,126,84,0.4) 0, transparent 45%), radial-gradient(circle at 10% 85%, rgba(104,58,29,0.7) 0, transparent 50%)',
          }}
        />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-6 text-accent-300">{t('home', 'missionEyebrow')}</p>
            <blockquote>
              <p className="font-display text-2xl font-semibold leading-snug text-cream-100 sm:text-3xl">
                &ldquo;جذور هي محاولة مستمرة لاسترداد الذات من تحت ركام
                التشويه، ونفّاج معرفي يصل الوجدان السوداني ببعضه وبعالمه
                الإسلامي&rdquo;
              </p>
              <p className="mt-6 text-base leading-relaxed text-cream-200/80">
                {t('home', 'missionParagraph')}
              </p>
              <footer className="mt-4 text-sm text-cream-300/70">
                — مركز جذور للبناء الفكري والتأصيل
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="bg-cream py-16 dark:bg-primary-900">
        <div className="container-page">
          <dl className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div>
                  <dt className="order-2 mt-2 text-sm text-primary-400 dark:text-cream-200/70">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-display text-4xl font-bold text-accent sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ FEATURED MARTYRS ============ */}
      <section className="bg-primary-900 py-20 text-white sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow={t('home', 'martyrsEyebrow')}
              title={t('home', 'martyrsTitle')}
              description={t('home', 'martyrsDescription')}
              tone="on-dark"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((m, i) => (
              <Reveal key={m.id} delay={i * 80}>
                <MartyrCard martyr={m} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/martyrs" className="btn-secondary">
              {t('home', 'allMartyrs')}
              <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ LATEST ARTICLES ============ */}
      <section className="bg-cream py-20 dark:bg-primary-900">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow={t('home', 'articlesEyebrow')}
              title={t('home', 'articlesTitle')}
              description={t('home', 'articlesDescription')}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latestArticles.map((a, i) => (
              <Reveal key={a.id} delay={i * 80}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/religion" className="btn-primary">
              {t('home', 'readArchive')}
              <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ PROGRAMS ============ */}
      <section className="bg-cream pb-20 dark:bg-primary-900">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow={t('home', 'programsEyebrow')}
              title={t('home', 'programsTitle')}
              description={t('home', 'programsDescription')}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c, i) => {
              const Icon =
                programIcons[(c.icon ?? 'book') as keyof typeof programIcons] ??
                BookOpenIcon
              return (
                <Reveal key={c.id} delay={(i % 3) * 80}>
                  <article className="card card-hover flex h-full flex-col p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-accent">
                      {c.arabicTitle}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-400 dark:text-cream-200/75">
                      {pick(language, c.description, c.descriptionAr)}
                    </p>
                    <p className="mt-4 border-t border-accent/10 pt-4 text-xs text-primary-400 dark:border-primary-500/40 dark:text-cream-200/60">
                      {c.schedule}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ PILLARS ============ */}
      <section className="bg-primary-900 py-20 text-white sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow={t('home', 'pillarsEyebrow')}
              title={t('home', 'pillarsTitle')}
              tone="on-dark"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillarKeys.map((item) => (
              <Reveal key={item.step}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-display text-3xl font-bold text-accent/50">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {t('pillars', item.titleKey)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-200/75">
                    {t('pillars', item.bodyKey)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LISTEN ============ */}
      <section className="bg-primary-900 pb-20 text-white sm:pb-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow={t('home', 'listenEyebrow')}
                title={t('home', 'listenTitle')}
                description={t('home', 'listenDescription')}
                tone="on-dark"
              />
            </Reveal>
            <Reveal delay={100}>
              <Link to="/religion" className="btn-secondary shrink-0">
                {t('home', 'allMedia')}
                <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sermons.slice(0, 2).map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <Link
                  to={`/religion#sermon-${s.id}`}
                  className="card card-hover flex items-center gap-5 p-5"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <PlayIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-semibold leading-snug text-primary-700 dark:text-cream-100">
                      {pick(language, s.title, s.titleAr)}
                    </span>
                    <span className="mt-1 block text-sm text-primary-400 dark:text-cream-200/70">
                      {s.speaker} · {s.duration}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ JOIN CTA ============ */}
      <section className="relative overflow-hidden bg-accent py-16 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(38,19,12,0.9) 0, transparent 50%), radial-gradient(circle at 85% 80%, rgba(38,19,12,0.9) 0, transparent 45%)',
          }}
        />
        <div className="container-page relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-start">
          <div className="max-w-xl">
            <Reveal>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                {t('home', 'joinTitle')}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 text-white/90">
                {t('home', 'joinParagraph')}
              </p>
            </Reveal>
          </div>
          <Reveal delay={200} className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/rootsplatform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cream"
            >
              {t('home', 'ctaJoinChannel')}
              <TelegramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://linktr.ee/GUZOOR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t('home', 'allLinks')}
              <QuoteIcon className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
