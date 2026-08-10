import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'
import { MartyrCard } from '../components/MartyrCard'
import { ArticleCard } from '../components/ArticleCard'
import { Reveal } from '../components/Reveal'
import { SocialShare } from '../components/SocialShare'
import { HeroSlideshow } from '../components/HeroSlideshow'
import { assetUrl } from '../lib/assetUrl'
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

const pillars = [
  {
    step: '01',
    title: 'Recover · استرداد',
    body: 'We recover the self from beneath the rubble of distortion — restoring what has been misnamed, misremembered, or erased from the record.',
  },
  {
    step: '02',
    title: 'Root · تأصيل',
    body: 'We build on deep roots: the sources of the religion, the scholars of the Nile Valley, and the martyrs who defended religion and homeland.',
  },
  {
    step: '03',
    title: 'Connect · وصل',
    body: 'We reconnect the Sudanese conscience with itself and with its Islamic world — through the circles, the courses, and the kept memory.',
  },
]

export function Home() {
  const featured = martyrs.filter((m) => m.featured).slice(0, 3)
  const latestArticles = articles.slice(0, 3)
  const eraCount = new Set(martyrs.map((m) => m.era)).size
  const heroPhotos = martyrs.map((m) => ({
    src: assetUrl(m.avatar),
    alt: m.name,
  }))

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
              مركز جذور للبناء الفكري والتأصيل · Guzoor, roots for intellectual
              building
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Recovering the Sudanese self, from beneath the{' '}
              <span className="text-accent-300">rubble of distortion</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
              Guzoor is an intellectual bellows — a نفّاج معرفي — that keeps the
              flame of identity alive, reconnecting the Sudanese conscience to
              itself and to its Islamic world. Study the programs, read the
              martyrs&apos; stories, join the circles.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/martyrs" className="btn-primary">
              The Martyrs
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a
              href="https://t.me/rootsplatform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Join the Channel
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
            <p className="eyebrow mb-6 text-accent-300">The Mission</p>
            <blockquote>
              <p className="font-display text-2xl font-semibold leading-snug text-cream-100 sm:text-3xl">
                &ldquo;جذور هي محاولة مستمرة لاسترداد الذات من تحت ركام
                التشويه، ونفّاج معرفي يصل الوجدان السوداني ببعضه وبعالمه
                الإسلامي&rdquo;
              </p>
              <p className="mt-6 text-base leading-relaxed text-cream-200/80">
                Guzoor is a continuous attempt to recover the self from beneath
                the rubble of distortion — an intellectual bellows that
                reconnects the Sudanese conscience with itself and with its
                Islamic world.
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
            {[
              { value: String(martyrs.length), label: 'Martyrs remembered' },
              { value: String(eraCount), label: 'Campaigns kept alive' },
              { value: String(courses.length), label: 'Programs & circles' },
              { value: String(articles.length), label: 'Articles & reflections' },
            ].map((stat, i) => (
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
              eyebrow="The Martyrs"
              title="The kept names"
              description="The defenders of religion and homeland whose stories Guzoor publishes and keeps — scholars, fighters, students, and the young knights of the war."
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
              All the martyrs
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ LATEST ARTICLES ============ */}
      <section className="bg-cream py-20 dark:bg-primary-900">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="From the archive"
              title="Latest reflections"
              description="Intellectual building, deep-rooting, and the war of narratives — articles written from the channel's own analyses and teachings."
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
              Read the archive
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ PROGRAMS ============ */}
      <section className="bg-cream pb-20 dark:bg-primary-900">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Programs & Circles"
              title="The working roots"
              description="The forums, circles, and courses through which Guzoor builds — the tauhidic exegesis, the circles of thought and remembrance, the knowledge club, and the courses rooted in the Sudanese reality."
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
                      {c.description}
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
              eyebrow="How Guzoor works"
              title="Three movements of the bellows"
              tone="on-dark"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <Reveal key={item.step}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-display text-3xl font-bold text-accent/50">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-200/75">
                    {item.body}
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
                eyebrow="Listen & Watch"
                title="From the circles"
                description="A selection of the center's media — the tauhidic readings, the circles of remembrance, and the poetry of the martyrs."
                tone="on-dark"
              />
            </Reveal>
            <Reveal delay={100}>
              <Link to="/religion" className="btn-secondary shrink-0">
                All media
                <ArrowRightIcon className="h-4 w-4" />
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
                      {s.title}
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
        <div className="container-page relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="max-w-xl">
            <Reveal>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                The empty chair in Guzoor is waiting for you.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 text-white/90">
                Join the channel, sit in the circles, and carry the word that
                becomes an idea — the idea that fruits into consciousness, and
                the consciousness that rises into building.
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
              Join the Channel
              <TelegramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://linktr.ee/GUZOOR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              All Guzoor links
              <QuoteIcon className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
