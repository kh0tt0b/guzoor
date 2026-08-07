import { useMemo, useState } from 'react'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { MediaPlayer } from '../components/MediaPlayer'
import { FaqAccordion } from '../components/FaqAccordion'
import { ChevronDownIcon, PlayIcon } from '../components/icons'
import { cn } from '../lib/cn'
import { sermons } from '../data/sermons'
import { articles, articleCategories } from '../data/articles'
import { faqs } from '../data/faqs'

export function Religion() {
  const [selectedSermonId, setSelectedSermonId] = useState(sermons[0].id)
  const [category, setCategory] = useState('all')

  const selectedSermon = sermons.find((s) => s.id === selectedSermonId) ?? sermons[0]

  const visibleArticles = useMemo(
    () =>
      category === 'all'
        ? articles
        : articles.filter((a) => a.category === category),
    [category],
  )

  return (
    <>
      <Seo
        title="Religion & Teachings of Sudan"
        description="Sermons, meditations, and articles on Sudan's religious heritage — the khalwas, the Sufi paths, the Mahdiyya, and the memory of the martyrs."
        path="/religion"
      />

      <section className="bg-primary-900 py-14 text-white">
        <div className="container-page text-center">
          <p className="eyebrow mb-3 text-cream-300">Religion &amp; Teachings</p>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            The Word, remembered aloud
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream-100/80">
            Sermons and meditations, articles and reflections — the teachings of
            the archive, offered freely for study and devotion.
          </p>
        </div>
      </section>

      {/* ============ SERMONS ============ */}
      <section className="bg-cream py-20 dark:bg-primary-900">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Listen &amp; Watch"
              title="Sermons & meditations"
              description="Select a sermon from the playlist. Every piece is shared freely for personal reflection and community study."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
            <Reveal>
              <MediaPlayer
                key={selectedSermon.id}
                sermon={selectedSermon}
                autoPlay
              />
              <h3 className="mt-5 text-xl font-semibold text-primary dark:text-white">
                {selectedSermon.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {selectedSermon.speaker} · {selectedSermon.duration}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-primary-400 dark:text-cream-200/75">
                {selectedSermon.description}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div
                className="card p-4"
                role="tablist"
                aria-label="Sermon playlist"
                aria-orientation="vertical"
              >
                <h3 className="eyebrow px-2 pb-3 pt-1 text-accent">Playlist</h3>
                <ul className="space-y-2" role="list">
                  {sermons.map((sermon) => {
                    const isActive = sermon.id === selectedSermon.id
                    return (
                      <li key={sermon.id}>
                        <button
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-controls={`sermon-${sermon.id}`}
                          id={`sermon-tab-${sermon.id}`}
                          onClick={() => setSelectedSermonId(sermon.id)}
                          className={cn(
                            'flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors',
                            isActive
                              ? 'bg-accent text-white shadow-sm'
                              : 'text-primary hover:bg-accent/10 dark:text-cream-200 dark:hover:bg-white/5',
                          )}
                        >
                          <span
                            className={cn(
                              'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-accent/15 text-accent',
                            )}
                          >
                            <PlayIcon className="ml-0.5 h-3.5 w-3.5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold leading-snug">
                              {sermon.title}
                            </span>
                            <span
                              className={cn(
                                'mt-0.5 block text-xs',
                                isActive ? 'text-cream-100/80' : 'text-primary-400 dark:text-cream-200/60',
                              )}
                            >
                              {sermon.speaker} · {sermon.duration} ·{' '}
                              {sermon.type === 'video' ? 'Video' : 'Audio'}
                            </span>
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ ARTICLES ============ */}
      <section className="border-t border-accent/10 bg-cream-100 py-20 dark:border-primary-500/40 dark:bg-primary-800">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Read"
              title="Articles & reflections"
              description="Deeper study of the history, wisdom, and practices that the archive preserves."
            />
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap justify-center gap-2">
            {['all', ...articleCategories].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition-all',
                  category === cat
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-cream text-primary-400 ring-1 ring-accent/20 hover:bg-accent/10 dark:bg-primary-700 dark:text-cream-200/80 dark:ring-primary-500/50',
                )}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {visibleArticles.map((article, i) => (
              <Reveal key={article.id} delay={i * 60}>
                <details
                  id={`article-${article.id}`}
                  className="group overflow-hidden rounded-2xl border border-accent/20 bg-cream shadow-card transition-shadow open:shadow-card-hover dark:border-primary-500/50 dark:bg-primary-800"
                >
                  <summary className="flex cursor-pointer list-none flex-col gap-2 p-6 transition-colors [&::-webkit-details-marker]:hidden">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                        {article.category}
                      </span>
                      <ChevronDownIcon className="h-5 w-5 text-accent transition-transform duration-300 group-open:rotate-180" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary transition-colors group-hover:text-accent dark:text-white">
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-primary-400 dark:text-cream-200/70">
                      {article.excerpt}
                    </p>
                    <p className="mt-1 text-xs text-primary-400/80 dark:text-cream-200/50">
                      {article.author} · {article.readTime} ·{' '}
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </summary>
                  <div className="space-y-4 border-t border-accent/10 px-6 pb-7 pt-5 dark:border-primary-500/40">
                    {article.content.map((paragraph, j) => (
                      <p
                        key={j}
                        className="leading-relaxed text-primary-400 dark:text-cream-200/80"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-cream py-20 dark:bg-primary-900">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title="Frequently asked questions"
              description="Answers about the archive, its heroes, its sermons, and how you can contribute."
            />
          </Reveal>
          <Reveal className="mt-10">
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
