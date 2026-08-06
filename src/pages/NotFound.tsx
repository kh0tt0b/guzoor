import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function NotFound() {
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
            This page has wandered off the trail
          </h1>
          <p className="mx-auto mt-3 max-w-md text-primary-400 dark:text-cream-200/70">
            The story you were looking for isn't here. But the archive is full
            of others worth finding.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              Back to home
            </Link>
            <Link to="/heroes" className="btn-secondary">
              Explore the heroes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
