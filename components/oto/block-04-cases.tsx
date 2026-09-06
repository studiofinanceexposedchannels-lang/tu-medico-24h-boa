'use client'

import { Check, User } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Kicker, Heading } from './shared'

const CASE_A = [
  '¿Y si pierdo el equilibrio?',
  '¿Y si tropiezo?',
  '¿Y si no puedo reaccionar a tiempo?',
]

const CASE_B = [
  'conciencia corporal',
  'distribución del peso',
  'estabilidad',
  'movilidad',
  'control de los movimientos',
  'seguridad durante actividades cotidianas',
]

export function Block04Cases() {
  return (
    <Section tone="muted">
      <Reveal className="text-center">
        <Kicker>📊 Dos caminos diferentes</Kicker>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Reveal delay={80}>
          <article className="flex h-full flex-col rounded-3xl border border-dashed border-border bg-secondary/30 p-6 opacity-90">
            <header className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <User className="size-5" />
              </span>
              <div>
                <p className="font-display text-lg font-extrabold uppercase tracking-tight">Caso A</p>
                <p className="text-xs text-muted-foreground">Solo El Truco de la Pimienta</p>
              </div>
            </header>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Puede ayudarte a centrar tu atención en las molestias y sensaciones de tus pies.
            </p>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              Pero el equilibrio al caminar requiere otro tipo de práctica.
            </p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              Puedes continuar preguntándote:
            </p>
            <ul className="mt-3 space-y-2 text-sm italic text-destructive">
              {CASE_A.map((item) => (
                <li key={item}>“{item}”</li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={160}>
          <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-primary bg-[linear-gradient(160deg,color-mix(in_oklch,var(--primary)_12%,var(--card)),var(--card)_65%)] p-6 pt-12 shadow-[0_20px_45px_-22px_color-mix(in_oklch,var(--primary)_55%,transparent)]">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-14 -top-14 size-36 rounded-full bg-primary/20 blur-2xl"
            />
            <span className="absolute left-1/2 top-3 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 font-display text-[0.62rem] font-bold uppercase tracking-[0.08em] text-primary-foreground shadow-[0_6px_16px_-4px_var(--primary)]">
              El método completo
            </span>
            <header className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                <User className="size-5" />
              </span>
              <div>
                <p className="font-display text-lg font-extrabold uppercase tracking-tight">Caso B</p>
                <p className="text-xs text-muted-foreground">El Truco + Protocolo de 5 Días</p>
              </div>
            </header>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground">
              Ahora tienes una estructura adicional para trabajar progresivamente:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground">
              {CASE_B.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-10 text-center">
        <p className="text-pretty text-base leading-relaxed text-muted-foreground">
          La diferencia no está solamente en{' '}
          <strong className="text-foreground">lo que utilizas</strong>.
        </p>
        <p className="mt-2 text-pretty text-base font-semibold leading-relaxed text-primary">
          Está en qué haces adicionalmente para trabajar aquello que todavía necesita atención.
        </p>
      </Reveal>
    </Section>
  )
}
