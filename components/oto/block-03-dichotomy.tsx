'use client'

import { X, Check, Flame, Plus } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Kicker, Heading } from './shared'

export function Block03Dichotomy() {
  return (
    <Section>
      <Reveal className="text-center">
        <Kicker>El problema que casi nadie te explica</Kicker>
        <Heading className="mt-6">Existe una enorme diferencia entre…</Heading>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Reveal delay={80}>
          <div className="flex h-full flex-col rounded-3xl border border-dashed border-destructive/30 bg-destructive/5 p-6 opacity-90">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                <X className="size-5" />
              </span>
              <span className="font-display text-sm font-bold uppercase tracking-wide text-destructive">
                Solo utilizar El Truco de la Pimienta
              </span>
            </div>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Trabajar las molestias de tus pies sin incorporar prácticas específicas para mejorar el
              equilibrio, la estabilidad y el control corporal, con alto riesgo de sufrir lesiones.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-success bg-[linear-gradient(160deg,color-mix(in_oklch,var(--success)_14%,var(--card)),var(--card)_65%)] p-6 pt-12 shadow-[0_20px_45px_-22px_color-mix(in_oklch,var(--success)_55%,transparent)]">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-14 -top-14 size-36 rounded-full bg-success/20 blur-2xl"
            />
            <span className="absolute left-1/2 top-3 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-success px-4 py-1.5 font-display text-[0.62rem] font-bold uppercase tracking-[0.08em] text-success-foreground shadow-[0_6px_16px_-4px_var(--success)]">
              Recomendado
            </span>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-success/20 text-success">
                <Check className="size-5" />
              </span>
              <span className="font-display text-sm font-bold uppercase tracking-wide text-success">
                El Truco de la Pimienta + Protocolo de la Gimnasta
              </span>
            </div>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              El Truco cuida las molestias de tus pies.
            </p>
            <div className="my-2 flex items-center gap-2 text-muted-foreground">
              <Plus className="size-4" />
            </div>
            <div className="flex items-start gap-2">
              <Flame className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-pretty text-sm font-semibold leading-relaxed text-foreground">
                El Protocolo te ayuda a mejorar el equilibrio, la estabilidad y la seguridad al caminar.
                Juntos: menos molestias + un cuerpo que vuelve a responder mejor — pasos más firmes y mayor seguridad al caminar.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-8 text-center">
        <p className="text-pretty text-base leading-relaxed text-muted-foreground">
          No necesitas hacer más cosas al azar.
        </p>
        <p className="mt-2 text-pretty text-base font-semibold leading-relaxed text-foreground">
          Necesitas saber qué practicar, en qué orden y cómo progresar.
        </p>
      </Reveal>
    </Section>
  )
}
