import { useMemo, useState } from 'react'
import { Seo } from '../components/Seo'
import { HeroCard } from '../components/HeroCard'
import { SearchIcon } from '../components/icons'
import { heroes, regions, eras, years } from '../data/heroes'

const selectClass =
  'w-full appearance-none rounded-lg border border-accent/20 bg-cream px-4 py-2.5 pr-9 text-sm text-primary shadow-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 dark:border-primary-500/50 dark:bg-primary-700 dark:text-white'

export function Heroes() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('all')
  const [era, setEra] = useState('all')
  const [year, setYear] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return heroes.filter((hero) => {
      const matchesQuery =
        q === '' || hero.name.toLowerCase().includes(q) || hero.title.toLowerCase().includes(q)
      const matchesRegion = region === 'all' || hero.region === region
      const matchesEra = era === 'all' || hero.era === era
      const matchesYear = year === 'all' || String(hero.year) === year
      return matchesQuery && matchesRegion && matchesEra && matchesYear
    })
  }, [query, region, era, year])

  const hasActiveFilters = query !== '' || region !== 'all' || era !== 'all' || year !== 'all'

  const clearFilters = () => {
    setQuery('')
    setRegion('all')
    setEra('all')
    setYear('all')
  }

  return (
    <>
      <Seo
        title="Heroes of Faith & Heritage"
        description="Search and explore the archive of heroes — filter by name, region, era, and year. Every profile holds a biography, virtues, and a guiding quote."
        path="/heroes"
      />

      <section className="bg-primary-900 py-14 text-white">
        <div className="container-page text-center">
          <p className="eyebrow mb-3 text-cream-300">The Archive</p>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Meet the heroes
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream-100/80">
            Scholars, healers, peacemakers, and keepers of tradition — search by
            name, or narrow by region, era, and year.
          </p>
        </div>
      </section>

      <section className="bg-cream py-10 dark:bg-primary-900">
        <div className="container-page">
          <form
            role="search"
            aria-label="Search heroes"
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-4 md:grid-cols-12"
          >
            <div className="relative md:col-span-6">
              <label htmlFor="hero-search" className="sr-only">
                Search heroes by name or title
              </label>
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-400" />
              <input
                id="hero-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or title…"
                className="w-full rounded-lg border border-accent/20 bg-cream py-2.5 pl-10 pr-4 text-sm text-primary shadow-sm transition-colors placeholder:text-primary-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 dark:border-primary-500/50 dark:bg-primary-700 dark:text-white dark:placeholder:text-primary-200/40"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="region-filter" className="sr-only">
                Filter by region
              </label>
              <div className="relative">
                <select
                  id="region-filter"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className={selectClass}
                >
                  <option value="all">All regions</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary-400" aria-hidden="true">
                  ▾
                </span>
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="era-filter" className="sr-only">
                Filter by era
              </label>
              <div className="relative">
                <select
                  id="era-filter"
                  value={era}
                  onChange={(e) => setEra(e.target.value)}
                  className={selectClass}
                >
                  <option value="all">All eras</option>
                  {eras.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary-400" aria-hidden="true">
                  ▾
                </span>
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="year-filter" className="sr-only">
                Filter by year
              </label>
              <div className="relative">
                <select
                  id="year-filter"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className={selectClass}
                >
                  <option value="all">All years</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary-400" aria-hidden="true">
                  ▾
                </span>
              </div>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p
              className="text-sm text-primary-400 dark:text-cream-200/70"
              role="status"
              aria-live="polite"
            >
              Showing <strong className="text-primary dark:text-white">{filtered.length}</strong>{' '}
              of {heroes.length} heroes
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-semibold text-accent underline-offset-4 transition-colors hover:text-accent-400 hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((hero) => (
                <HeroCard key={hero.id} hero={hero} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-accent/30 bg-cream-100 p-14 text-center dark:border-primary-500/50 dark:bg-primary-800">
              <p className="text-lg font-semibold text-primary dark:text-white">
                No heroes match your search
              </p>
              <p className="mt-2 text-sm text-primary-400 dark:text-cream-200/70">
                Try a different name, or clear the filters to see the full archive.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="btn-primary mt-6"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
