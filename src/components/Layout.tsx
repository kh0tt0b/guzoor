import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'

function PageLoader() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="flex min-h-[40svh] items-center justify-center"
    >
      <span
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-4 border-accent/20 border-t-accent"
      />
    </div>
  )
}

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main-content"
        className="sr-only z-50 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
