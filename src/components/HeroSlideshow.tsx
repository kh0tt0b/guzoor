import { useEffect, useState } from 'react'
import { cn } from '../lib/cn'

interface HeroSlideshowProps {
  photos: { src: string; alt: string }[]
  intervalMs?: number
}

export function HeroSlideshow({ photos, intervalMs = 6000 }: HeroSlideshowProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % photos.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [photos.length, intervalMs])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {photos.map((photo, i) => (
        <img
          key={photo.src}
          src={photo.src}
          alt=""
          className={cn(
            'animate-kenburns absolute inset-0 h-full w-full object-cover object-top grayscale-[55%] transition-opacity duration-[1500ms] ease-in-out',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/72 to-primary-900/93" />
      <div className="absolute inset-0 bg-primary-900/25" />
    </div>
  )
}
