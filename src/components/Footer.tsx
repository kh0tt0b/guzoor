import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import {
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
  TelegramIcon,
  TikTokIcon,
} from './icons'

const quickLinks = [
  { to: '/', key: 'home' },
  { to: '/martyrs', key: 'martyrs' },
  { to: '/religion', key: 'religion' },
] as const

const socialLinks = [
  {
    id: 'telegram',
    label: 'Guzoor on Telegram',
    href: 'https://t.me/rootsplatform',
    Icon: TelegramIcon,
  },
  {
    id: 'instagram',
    label: 'Guzoor on Instagram',
    href: 'https://www.instagram.com/guzoor.sd',
    Icon: InstagramIcon,
  },
  {
    id: 'tiktok',
    label: 'Guzoor on TikTok',
    href: 'https://www.tiktok.com/@guzoor.sd56',
    Icon: TikTokIcon,
  },
  {
    id: 'facebook',
    label: 'Guzoor on Facebook',
    href: 'https://www.facebook.com/rootscenter.sd',
    Icon: FacebookIcon,
  },
  {
    id: 'links',
    label: 'All Guzoor links',
    href: 'https://linktr.ee/GUZOOR',
    Icon: LinkIcon,
  },
]

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-primary-900 text-cream-100" role="contentinfo">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold text-white">
              Guzoor
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-200/70">
              {t('footer', 'tagline')}
            </p>
            <ul className="mt-5 flex items-center gap-3" role="list" aria-label="Social media">
              {socialLinks.map(({ id, label, href, Icon }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-cream-300">{t('footer', 'explore')}</h2>
            <ul className="mt-4 space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-200/75 transition-colors hover:text-white"
                  >
                    {t('nav', link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-cream-300">{t('footer', 'contact')}</h2>
            <ul className="mt-4 space-y-3 text-sm text-cream-200/75" role="list">
              <li className="flex items-start gap-3">
                <TelegramIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                <a
                  href="https://t.me/rootsplatform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  t.me/rootsplatform
                </a>
              </li>
              <li className="flex items-start gap-3">
                <LinkIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                <a
                  href="https://linktr.ee/GUZOOR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {t('footer', 'allLinks')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                <a href="mailto:guzoor.center@gmail.com" className="transition-colors hover:text-white">
                  guzoor.center@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                <address className="not-italic">
                  مركز جذور للبناء الفكري والتأصيل
                  <br />
                  {t('footer', 'address')}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream-200/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Guzoor — جذور للبناء الفكري والتأصيل.
          </p>
          <p>{t('footer', 'copyrightTagline')}</p>
        </div>
      </div>
    </footer>
  )
}
