import { useMemo, useState } from 'react'
import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { MartyrCard } from '../components/MartyrCard'
import { SearchIcon } from '../components/icons'
import { martyrs, regions, eras, years } from '../data/martyrs'
import { useLanguage } from '../context/LanguageContext'

export function Martyrs() {
  const { t } = useLanguage()
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('all')
  const [era, setEra] = useState('all')
  const [year, setYear] = useState('all')

  const filtered = useMemo(() => {
    return martyrs.filter((h) => {
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        h.name.toLowerCase().includes(q) ||
        h.title.toLowerCase().includes(q) ||
        h.nameAr?.includes(q) ||
        h.titleAr?.includes(q)
      const matchesRegion = region === 'all' || h.region === region
      const matchesEra = era === 'all' || h.era === era
      const matchesYear = year === 'all' || String(h.year) === year
      return matchesQuery && matchesRegion && matchesEra && matchesYear
    })
  }, [query, region, era, year])

  const isFiltering = Boolean(query) || region !== 'all' || era !== 'all' || year !== 'all'

  return (
    <>
      <Seo
        title="The Martyrs — Defenders of Religion & Homeland"
        description="The martyrs of the lines whose stories the Guzoor channel keeps: scholars, fighters, students, and the young knights of the war. Search by name, or filter by region, era, and year."
        path="/martyrs"
      />

      <section className="bg-primary-900 py-14 text-white">
        <div className="container-page text-center">
          <p className="eyebrow mb-3 text-cream-300">{t('martyrsPage', 'eyebrow')}</p>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            {t('martyrsPage', 'title')}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream-100/80">
            {t('martyrsPage', 'description')}
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
                {t('martyrsPage', 'searchLabel')}
              </label>
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-300 dark:text-cream-200/50" />
              <input
                id="martyr-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('martyrsPage', 'searchPlaceholder')}
                className="input pl-12"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="region-filter" className="sr-only">
                {t('martyrsPage', 'regionLabel')}
              </label>
              <select
                id="region-filter"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="input"
              >
                <option value="all">{t('martyrsPage', 'allRegions')}</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {t('regions', r)}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="era-filter" className="sr-only">
                {t('martyrsPage', 'eraLabel')}
              </label>
              <select
                id="era-filter"
                value={era}
                onChange={(e) => setEra(e.target.value)}
                className="input"
              >
                <option value="all">{t('martyrsPage', 'allCampaigns')}</option>
                {eras.map((e) => (
                  <option key={e} value={e}>
                    {t('eras', e)}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="year-filter" className="sr-only">
                {t('martyrsPage', 'yearLabel')}
              </label>
              <select
                id="year-filter"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="input"
              >
                <option value="all">{t('martyrsPage', 'allYears')}</option>
                {years.map((y) => (
                  <option key={y} value={String(y)}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </form>

          <p className="mt-4 text-sm text-primary-400 dark:text-cream-200/60">
            {filtered.length}{' '}
            {filtered.length === 1
              ? t('martyrsPage', 'martyrSingular')
              : t('martyrsPage', 'martyrPlural')}{' '}
            {isFiltering ? t('martyrsPage', 'matchSearch') : t('martyrsPage', 'remembered')}
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
                {t('martyrsPage', 'noMatch')}
              </p>
              <p className="mt-2 text-sm text-primary-400 dark:text-cream-200/60">
                {t('martyrsPage', 'noMatchHint')}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
