import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { HeroCard } from '../components/HeroCard'
import { SocialShare } from '../components/SocialShare'
import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  QuoteIcon,
  StarIcon,
} from '../components/icons'
import { getHeroById, heroes } from '../data/heroes'
import { assetUrl } from '../lib/assetUrl'

export function HeroDetail() {
  const { heroId } = useParams<{ heroId: string }>()
  const hero = heroId ? getHeroById(heroId) : undefined

  if (!hero) {
    return (
      <>
        <Seo
          title="Hero not found"
          description="The hero you are looking for could not be found in the Guzoor archive."
        />
        <section className="bg-cream py-28 text-center dark:bg-primary-900">
          <div className="container-page">
            <h1 className="font-display text-3xl font-bold">Hero not found</h1>
            <p className="mt-3 text-primary-400 dark:text-cream-200/70">
              This story may have been moved, or it may not exist yet.
            </p>
            <Link to="/heroes" className="btn-primary mt-8">
              Back to the archive
            </Link>
          </div>
        </section>
      </>
    )
  }

  const related = heroes
    .filter(
      (h) =>
        h.id !== hero.id &&
        (h.region === hero.region || h.era === hero.era),
    )
    .slice(0, 3)

  return (
    <>
      <Seo
        title={`${hero.name} — ${hero.title}`}
        description={hero.shortBio}
        path={`/heroes/${hero.id}`}
        image={hero.avatar}
        type="profile"
      />

      <section className="relative overflow-hidden bg-primary-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(181,126,84,0.5) 0, transparent 45%), radial-gradient(circle at 85% 80%, rgba(104,58,29,0.8) 0, transparent 50%)',
          }}
        />
        <div className="container-page relative py-16">
          <Link
            to="/heroes"
            className="inline-flex items-center gap-2 text-sm text-cream-200/80 transition-colors hover:text-white"
          >
            <span aria-hidden="true">←</span> Back to the archive
          </Link>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-[220px_1fr]">
            <Reveal>
              <img
                src={assetUrl(hero.avatar)}
                alt={`Portrait of ${hero.name}`}
                width={220}
                height={220}
                loading="eager"
                className="mx-auto h-44 w-44 rounded-2xl object-cover ring-2 ring-accent-300/50 shadow-glow-accent sm:h-52 sm:w-52 md:mx-0"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow text-cream-300">{hero.era}</p>
              <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                {hero.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-accent-300">
                {hero.title}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream-200/85">
                <span className="inline-flex items-center gap-1.5">
                  <MapPinIcon className="h-4 w-4 text-accent-300" />
                  {hero.region}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarIcon className="h-4 w-4 text-accent-300" />
                  {hero.year}
                </span>
              </div>
              <ul
                className="mt-4 flex flex-wrap gap-2"
                role="list"
                aria-label="Virtues"
              >
                {hero.virtues.map((virtue) => (
                  <li
                    key={virtue}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cream-100 ring-1 ring-white/20"
                  >
                    <StarIcon className="h-3 w-3 text-accent-300" />
                    {virtue}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-10">
            <blockquote className="max-w-3xl rounded-2xl border-l-4 border-accent-300 bg-white/[0.05] p-6">
              <QuoteIcon className="h-6 w-6 text-accent-300" />
              <p className="mt-3 font-display text-xl italic text-cream-100">
                “{hero.quote}”
              </p>
              <footer className="mt-3 text-sm text-cream-200/70">
                — {hero.name}
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={280} className="mt-8">
            <SocialShare title={`${hero.name} — ${hero.title} | Guzoor`} />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 dark:bg-primary-900">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_300px]">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-primary dark:text-white">
              Their story
            </h2>
            <div className="mt-5 space-y-5">
              {hero.biography.map((paragraph, i) => (
                <p
                  key={i}
                  className="leading-relaxed text-primary-400 dark:text-cream-200/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="card p-6" aria-label="About this hero">
              <h3 className="eyebrow text-accent">At a glance</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-primary-400 dark:text-cream-200/60">Full title</dt>
                  <dd className="mt-0.5 font-semibold text-primary dark:text-white">
                    {hero.title}
                  </dd>
                </div>
                <div>
                  <dt className="text-primary-400 dark:text-cream-200/60">Region</dt>
                  <dd className="mt-0.5 font-semibold text-primary dark:text-white">
                    {hero.region}
                  </dd>
                </div>
                <div>
                  <dt className="text-primary-400 dark:text-cream-200/60">Year</dt>
                  <dd className="mt-0.5 font-semibold text-primary dark:text-white">
                    {hero.year}
                  </dd>
                </div>
                <div>
                  <dt className="text-primary-400 dark:text-cream-200/60">Era</dt>
                  <dd className="mt-0.5 font-semibold text-primary dark:text-white">
                    {hero.era}
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-accent/10 bg-cream pb-20 pt-14 dark:border-primary-500/40 dark:bg-primary-900">
          <div className="container-page">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-primary dark:text-white">
                Related heroes
              </h2>
              <Link
                to="/heroes"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-400"
              >
                View all
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((h) => (
                <HeroCard key={h.id} hero={h} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
