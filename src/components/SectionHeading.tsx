import { cn } from '../lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'on-dark' | 'on-light'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'on-light',
}: SectionHeadingProps) {
  const onDark = tone === 'on-dark'
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-start',
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'eyebrow mb-3',
            onDark ? 'text-cream-300' : 'text-accent dark:text-cream-300',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl font-bold sm:text-4xl',
          onDark ? 'text-white' : 'text-primary dark:text-white',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            onDark ? 'text-cream-100/85' : 'text-primary-400 dark:text-cream-200/80',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
