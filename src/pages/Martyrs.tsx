import { useMemo, useState } from 'react'
import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { MartyrCard } from '../components/MartyrCard'
import { SearchIcon } from '../components/icons'
import { martyrs, regions, eras, years } from '../data/martyrs'

export function Martyrs() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('all')
  const [era, setEra] = useState('all')
  const [year, setYear] = useState('all')

  const filtered = useMemo(() => {
    return martyrs.filter((h) => {
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q || h.name.toLowerCase().includes(q) || h.title.toLowerCase().includes(q)
      const matchesRegion = region === 'all' || h.region === region
      const matchesEra = era === 'all' || h.era === era
      const matchesYear = year === 'all' || String(h.year) === year
      return matchesQuery && matchesRegion && matchesEra && matchesYear
    })
  }, [query, region, era, year])

  return (
    <>
      <Seo
        title="The Martyrs — Defenders of Religion & Homeland"
        description="The martyrs of the lines whose stories the Guzoor channel keeps: scholars, fighters, students, and the young knights of the war. Search by name, or filter by region, era, and year."
        path="/martyrs"
      />

      <section className="bg-primary-900 py-14 text-white">
        <div className="container-page text-center">
          <p className="eyebrow mb-3 text-cream-300">The Martyrs</p>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            The defenders of religion &amp; homeland
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream-100/80">
            The martyrs whose stories Guzoor keeps — search by name, or narrow by
            region, campaign, and year.
          </p>
        </div>
      </section>

      <section className="bg-cream py-10 dark:bg-primary-900">
        <div className="container-page">
          <form
            role="search"
            aria-label="Search martyrs"
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-4 md:grid-cols-12"
          >
            <div className="relative md:col-span-6">
              <label htmlFor="martyr-search" className="sr-only">
                Search martyrs by name or title
              </label>
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-300 dark:text-cream-200/50" />
              <input
                id="martyr-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or title…"
                className="input pl-12"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="region-filter" className="sr-only">
                Filter by region
              </label>
              <select
                id="region-filter"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="input"
              >
                <option value="all">All regions</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="era-filter" className="sr-only">
                Filter by campaign
              </label>
              <select
                id="era-filter"
                value={era}
                onChange={(e) => setEra(e.target.value)}
                className="input"
              >
                <option value="all">All campaigns</option>
                {eras.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="year-filter" className="sr-only">
                Filter by year
              </label>
              <select
                id="year-filter"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="input"
              >
                <option value="all">All years</option>
                {years.map((y) => (
                  <option key={y} value={String(y)}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </form>

          <p className="mt-4 text-sm text-primary-400 dark:text-cream-200/60">
            {filtered.length} {filtered.length === 1 ? 'martyr' : 'martyrs'}
            {query || region !== 'all' || era !== 'all' || year !== 'all'
              ? ' match your search'
              : ' remembered'}
          </p>
        </div>
      </section>

      <section className="bg-cream pb-20 dark:bg-primary-900">
        <div className="container-page">
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((h, i) => (
                <Reveal key={h.id} delay={(i % 3) * 80}>
                  <MartyrCard martyr={h} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg font-semibold text-primary-600 dark:text-cream-100">
                No martyrs match your search
              </p>
              <p className="mt-2 text-sm text-primary-400 dark:text-cream-200/60">
                Try clearing a filter or searching by a different name.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
