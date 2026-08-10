import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { useLanguage } from '../context/LanguageContext'

export function NotFound() {
  const { t } = useLanguage()
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you are looking for could not be found."
      />
      <section className="bg-cream py-28 text-center dark:bg-primary-900">
        <div className="container-page">
          <p className="font-display text-7xl font-bold text-accent">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-primary dark:text-white">
            {t('notFound', 'title')}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-primary-400 dark:text-cream-200/70">
            {t('notFound', 'description')}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              {t('notFound', 'backHome')}
            </Link>
            <Link to="/martyrs" className="btn-secondary">
              {t('notFound', 'exploreMartyrs')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
