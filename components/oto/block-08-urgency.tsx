'use client'

import { Clock, X, AlertTriangle } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Heading } from './shared'
import { Countdown } from './countdown'

const REASONS = [
  'No vas a encontrar esta misma oferta en ningún otro lugar.',
  'No necesitas esperar para empezar a organizar tu rutina.',
  'Esta oportunidad de añadir el protocolo como complemento de tu compra no va a volver a aparecer de esta forma.',
]

export function Block08Urgency() {
  return (
    <Section tone="dark">
      <Reveal className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-warning/40 bg-warning/15 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-warning">
          <Clock className="size-4" />
          Solo por esta página
        </span>
        <Heading className="mt-6 text-background">
          ¿Por qué esta oferta solo aparece ahora?
        </Heading>
      </Reveal>

      <Reveal delay={100} className="mt-6 space-y-4 text-pretty text-center text-base leading-relaxed text-background/70">
        <p>
          Porque el Protocolo de la Gimnasta de 5 Días se está presentando como un complemento
          especial para quienes acaban de adquirir El Truco de la Pimienta.
        </p>
        <p>Esta condición especial está vinculada a esta página de compra.</p>
        <p className="font-semibold text-background">Cuando salgas de esta página:</p>
      </Reveal>

      <Reveal delay={140} className="mt-4">
        <ul className="space-y-2">
          {REASONS.map((r) => (
            <li
              key={r}
              className="flex items-start gap-3 rounded-2xl border border-destructive/25 bg-[linear-gradient(120deg,color-mix(in_oklch,var(--destructive)_10%,transparent),transparent)] p-4 text-left text-sm leading-relaxed text-background/80"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                <X className="size-3.5" />
              </span>
              {r}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120} className="mt-10">
        <div className="relative overflow-hidden rounded-3xl border border-background/10 bg-[linear-gradient(160deg,color-mix(in_oklch,var(--background)_6%,transparent),transparent)] p-6 text-center shadow-[0_25px_55px_-30px_color-mix(in_oklch,var(--warning)_50%,transparent)]">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,var(--warning),transparent)]"
          />
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-background/60">
            Tiempo restante
          </p>
          <div className="mt-4">
            <Countdown />
          </div>
        </div>
      </Reveal>

      <Reveal delay={160} className="mt-8">
        <div className="flex items-start gap-3 rounded-2xl border border-warning/25 bg-warning/10 p-5">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-warning" />
          <p className="text-pretty text-sm leading-relaxed text-background/75">
            Cuando el contador llegue a cero, esta página se considerará expirada y la oferta
            volverá a su precio habitual.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
