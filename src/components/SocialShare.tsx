import { useEffect, useState } from 'react'
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from './icons'
import { cn } from '../lib/cn'

interface SocialShareProps {
  title: string
  url?: string
  tone?: 'on-dark' | 'on-light'
  className?: string
}

interface ShareTarget {
  id: 'facebook' | 'twitter' | 'whatsapp'
  label: string
  href: string
  Icon: typeof FacebookIcon
}

export function SocialShare({
  title,
  url,
  tone = 'on-dark',
  className,
}: SocialShareProps) {
  const [currentUrl, setCurrentUrl] = useState(url ?? '')

  useEffect(() => {
    if (!url) setCurrentUrl(window.location.href)
  }, [url])

  const encodedUrl = encodeURIComponent(currentUrl)
  const encodedTitle = encodeURIComponent(title)

  const targets: ShareTarget[] = [
    {
      id: 'facebook',
      label: 'Share on Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      Icon: FacebookIcon,
    },
    {
      id: 'twitter',
      label: 'Share on Twitter / X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      Icon: TwitterIcon,
    },
    {
      id: 'whatsapp',
      label: 'Share on WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      Icon: WhatsappIcon,
    },
  ]

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span
        className={cn(
          'text-xs font-semibold uppercase tracking-widest',
          tone === 'on-dark' ? 'text-cream-200/80' : 'text-primary-400',
        )}
      >
        Share
      </span>
      <ul className="flex items-center gap-2" role="list" aria-label="Share this page">
        {targets.map(({ id, label, href, Icon }) => (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2',
                tone === 'on-dark'
                  ? 'bg-white/10 text-cream-100 ring-1 ring-white/20 hover:bg-accent hover:text-white hover:ring-accent'
                  : 'bg-accent text-white ring-1 ring-accent/30 hover:bg-accent-400',
              )}
            >
              <Icon className="h-4 w-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
