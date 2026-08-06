import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  wrapperClassName?: string
}

export function LazyImage({
  src,
  alt,
  wrapperClassName,
  className,
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-primary-100/40 dark:bg-primary-900/50',
        wrapperClassName,
      )}
    >
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-cream-100 to-cream-300 dark:from-primary-700 dark:to-primary-800"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-700',
          loaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
        {...rest}
      />
    </div>
  )
}
