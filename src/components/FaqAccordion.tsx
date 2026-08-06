import { useState } from 'react'
import type { FaqItem } from '../types'
import { ChevronDownIcon } from './icons'
import { cn } from '../lib/cn'

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-accent/20 bg-cream transition-colors dark:border-primary-500/50 dark:bg-primary-800"
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-trigger-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={cn(
                  'flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors',
                  isOpen
                    ? 'bg-accent/10 dark:bg-accent/20'
                    : 'hover:bg-accent/5 dark:hover:bg-white/5',
                )}
              >
                <span className="text-sm font-semibold text-primary sm:text-base dark:text-white">
                  {item.question}
                </span>
                <span
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300',
                    isOpen && 'rotate-180',
                  )}
                  aria-hidden="true"
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.id}`}
              hidden={!isOpen}
              className="px-5 pb-5"
            >
              <p className="text-sm leading-relaxed text-primary-400 dark:text-cream-200/80">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
