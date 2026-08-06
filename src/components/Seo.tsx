import { useEffect } from 'react'
import { assetUrl } from '../lib/assetUrl'

interface SeoProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article' | 'profile'
}

const SITE_NAME = import.meta.env.VITE_SITE_NAME ?? 'Guzoor'
const BASE_URL = import.meta.env.VITE_SITE_URL ?? 'https://guzoor.example.com'
const DEFAULT_IMAGE = assetUrl('og-image.svg')

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  )
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`
    const url = `${BASE_URL}${path}`
    const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`

    document.title = fullTitle
    setMeta('name', 'description', description)

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', fullImage)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:site_name', SITE_NAME)

    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', fullImage)
    setMeta('name', 'twitter:card', 'summary_large_image')
  }, [title, description, path, image, type])

  return null
}
