import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Section({
  children,
  className,
  id,
  tone = 'default',
}: {
  children: ReactNode
  className?: string
  id?: string
  tone?: 'default' | 'muted' | 'dark'
}) {
  return (
    <section
      id={id}
      className={cn(
        'px-4 py-14 sm:py-20',
        tone === 'muted' && 'bg-secondary',
        tone === 'dark' && 'bg-foreground text-background',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-2xl">{children}</div>
    </section>
  )
}

export function Kicker({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-primary',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Heading({
  children,
  className,
  as: Tag = 'h2',
}: {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}) {
  return (
    <Tag
      className={cn(
        'text-balance font-display font-extrabold uppercase leading-[1.05] tracking-tight',
        Tag === 'h1' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn('mx-auto my-8 flex items-center justify-center', className)}>
      <span className="h-px w-10 bg-border" />
      <span className="mx-2 size-1.5 rounded-full bg-primary" />
      <span className="h-px w-10 bg-border" />
    </div>
  )
}
