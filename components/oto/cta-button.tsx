'use client'

import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const CHECKOUT_URL = 'https://pay.hotmart.com/S107363103J?checkoutMode=10'

interface CtaButtonProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'lg'
  subtle?: boolean
  /** If set, the button smooth-scrolls to this element id instead of opening the checkout. */
  scrollTo?: string
  /** Destination URL. Defaults to the Hotmart checkout. Ignored when scrollTo is set. */
  href?: string
}

export function CtaButton({
  children,
  className,
  size = 'default',
  subtle = false,
  scrollTo,
  href = CHECKOUT_URL,
}: CtaButtonProps) {
  function handleClick() {
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    // Open checkout in a new tab when embedded in an iframe (e.g. preview), else navigate.
    if (typeof window !== 'undefined' && window.self !== window.top) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = href
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full font-display font-extrabold uppercase tracking-tight text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 cta-glow',
        'bg-[linear-gradient(100deg,var(--primary),color-mix(in_oklch,var(--primary),black_20%))]',
        size === 'lg' ? 'px-6 py-5 text-lg sm:text-xl' : 'px-5 py-4 text-base sm:text-lg',
        !subtle && 'animate-pulse-ring',
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.35),transparent)] transition-transform duration-700 group-hover:translate-x-full"
      />
      <span className="relative flex items-center gap-2 text-balance text-center leading-tight">
        {children}
        <ArrowRight className="size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </button>
  )
}
