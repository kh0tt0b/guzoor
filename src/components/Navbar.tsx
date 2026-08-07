import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { cn } from '../lib/cn'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/martyrs', label: 'Martyrs', end: false },
  { to: '/religion', label: 'Religion', end: false },
]

function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5"
      aria-label="Guzoor — home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-cream ring-1 ring-accent-400/40 transition-transform duration-300 group-hover:rotate-45 dark:bg-accent">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M12 2 13.6 10.4 22 12 13.6 13.6 12 22 10.4 13.6 2 12 10.4 10.4Z" />
        </svg>
      </span>
      <span className="font-display text-xl font-semibold tracking-tight text-primary dark:text-white">
        Guzoor
      </span>
    </Link>
  )
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-accent/15 bg-cream/90 shadow-sm backdrop-blur-lg dark:bg-primary-800/90 dark:border-primary-500/40'
          : 'border-b border-transparent bg-cream/70 backdrop-blur dark:bg-primary-900/70',
      )}
    >
      <nav
        className="container-page flex h-16 items-center justify-between gap-4"
        aria-label="Primary"
      >
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'text-accent dark:text-cream-200'
                    : 'text-primary-400 hover:text-primary dark:text-cream-200/75 dark:hover:text-white',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary-500 transition-colors hover:bg-accent/10 dark:text-cream-200 dark:hover:bg-white/10"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>

          <Link to="/martyrs" className="btn-primary hidden md:inline-flex">
            The Martyrs
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary-500 transition-colors hover:bg-accent/10 md:hidden dark:text-cream-200 dark:hover:bg-white/10"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className={cn(
          'border-t border-accent/10 bg-cream md:hidden dark:border-primary-500/40 dark:bg-primary-800',
        )}
      >
        <ul className="container-page flex flex-col gap-1 py-4" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  cn(
                    'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-accent/10 text-accent dark:bg-white/10 dark:text-cream-200'
                      : 'text-primary-400 hover:bg-accent/5 dark:text-cream-200/75 dark:hover:bg-white/5',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
