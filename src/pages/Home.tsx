import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'
import { HeroCard } from '../components/HeroCard'
import { ArticleCard } from '../components/ArticleCard'
import { Reveal } from '../components/Reveal'
import { SocialShare } from '../components/SocialShare'
import { ArrowRightIcon } from '../components/icons'
import { heroes } from '../data/heroes'
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

export function Home() {
  const featured = heroes.filter((h) => h.featured).slice(0, 3)
  const latestArticles = articles.slice(0, 3)
  const regionCount = new Set(heroes.map((h) => h.region)).size

  return (
    <>
      <Seo
        title="Guzoor — Roots for Intellectual Building & Deep-Rooting"
        description="Guzoor (جذور للبناء الفكري والتأصيل) recovers the Sudanese self from beneath the rubble of distortion, reconnecting the conscience to itself and to its Islamic world. Search the roots, read the history, listen to the sermons."
        path="/"
      />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-primary-900 text-white">
        <HeroOrnament />
        <div className="container-page relative flex min-h-[88svh] flex-col items-center justify-center py-24 text-center">
          <Reveal>
            <p className="eyebrow mb-6 text-cream-300">
              جذور للبناء الفكري والتأصيل · Roots for intellectual building
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
              itself and to its Islamic world. Search the roots, read the
              history, listen to the sermons.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/heroes" className="btn-primary">
              Explore the Roots
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link to="/religion" className="btn-secondary">
              Listen to Sermons
            </Link>
          </Reveal>
          <Reveal delay={400}>
            <SocialShare
              title="Guzoor — جذور للبناء الفكري والتأصيل: Recovering the Sudanese self"
              className="mt-10"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-b border-accent/10 bg-cream dark:border-primary-500/40 dark:bg-primary-800" aria-label="Archive statistics">
        <dl className="container-page grid grid-cols-2 gap-8 py-10 text-center sm:grid-cols-4">
          {[
            { value: heroes.length, label: 'Heroes remembered' },
            { value: articles.length, label: 'Articles & teachings' },
            { value: sermons.length, label: 'Sermons & meditations' },
            { value: regionCount, label: 'Regions of Sudan' },
          ].map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-4xl font-bold text-accent dark:text-cream-200">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm text-primary-400 dark:text-cream-200/70">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
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
                — The Guzoor project (جذور للبناء الفكري والتأصيل)
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ FEATURED HEROES ============ */}
      <section className="bg-cream py-20 sm:py-24 dark:bg-primary-900">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Remember"
              title="Roots we build upon"
              description="The scholars and the defenders of religion and homeland whose lives anchor the Sudanese self — each with a story, a set of virtues, and a guiding quote."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((hero, i) => (
              <Reveal key={hero.id} delay={i * 120}>
                <HeroCard hero={hero} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/heroes" className="btn-primary">
              View all heroes
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
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
            {[
              {
                step: '01',
                title: 'Recover · استرداد',
                body: 'We recover the self from beneath the rubble of distortion — restoring what has been misnamed, misremembered, or erased from the record.',
              },
              {
                step: '02',
                title: 'Root · تأصيل',
                body: 'We build on deep roots: the scholars of the khalwa, the Sufi paths, and the defenders of religion and homeland who shaped Sudan.',
              },
              {
                step: '03',
                title: 'Connect · وصل',
                body: 'We reconnect the Sudanese conscience with itself and with its Islamic world — through stories, sermons, and shared memory.',
              },
            ].map((item) => (
              <Reveal
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
              >
                <span className="font-display text-4xl font-semibold text-accent-300">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/80">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LATEST ARTICLES ============ */}
      <section className="bg-cream py-20 sm:py-24 dark:bg-primary-900">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Learn"
              title="From the archive"
              description="Intellectual building, deep-rooting, and the long war of narratives — articles on Sudan's religious history and the recovery of its self."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latestArticles.map((article, i) => (
              <Reveal key={article.id} delay={i * 120}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/religion" className="btn-primary">
              Explore religion &amp; teachings
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="relative overflow-hidden bg-accent py-16 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(239,236,227,0.4) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(239,236,227,0.3) 0, transparent 40%)',
          }}
        />
        <div className="container-page relative flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              The narrative is a battle — and memory is the ground.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xl text-cream-100/85">
              Modern wars are waged through manufactured stories. Guzoor answers
              with history — a root at a time. Contribute a memory from
              Sudan&apos;s religious history.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <a href="mailto:hello@guzoor.example.com" className="btn-cream">
              Contribute a memory
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
