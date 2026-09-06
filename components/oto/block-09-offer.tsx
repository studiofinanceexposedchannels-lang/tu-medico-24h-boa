'use client'

import { CreditCard, Infinity, Ban } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Heading } from './shared'
import { CtaButton } from './cta-button'

export function Block09Offer() {
  return (
    <Section id="oferta">
      <Reveal className="text-center">
        <Heading className="text-balance text-[1.4rem] leading-[1.1] sm:text-3xl">
          Entonces… ¿cuánto cuesta?
        </Heading>
      </Reveal>

      <Reveal delay={100} className="mt-8">
        <div className="relative overflow-hidden rounded-3xl border-2 border-primary bg-card shadow-[0_35px_80px_-30px_color-mix(in_oklch,var(--primary)_60%,transparent)]">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-16 size-48 rounded-full bg-primary/25 blur-3xl"
          />
          <div className="relative bg-[linear-gradient(120deg,var(--primary),color-mix(in_oklch,var(--primary),black_18%))] px-6 py-4 text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground">
              Oferta exclusiva de esta página
            </p>
          </div>

          <div className="relative p-6 sm:p-8">
            <div className="space-y-1.5 text-center text-sm text-muted-foreground">
              <p>
                Valor de los bonos:{' '}
                <span className="font-semibold text-foreground line-through">$102</span>
              </p>
              <p>
                Valor del protocolo + bonos:{' '}
                <span className="font-semibold text-foreground line-through">$163</span>
              </p>
              <p>
                Precio normal:{' '}
                <span className="font-semibold text-foreground line-through">$61</span>
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center rounded-2xl border border-primary/25 bg-primary/5 px-4 py-5 text-center">
              <p className="max-w-[15rem] text-xs font-semibold uppercase leading-snug tracking-[0.16em] text-primary sm:text-sm">
                Hoy, como complemento de tu compra
              </p>
              <div className="mt-1 flex items-end gap-2">
                <span className="font-display text-7xl font-extrabold leading-none text-primary drop-shadow-[0_4px_24px_color-mix(in_oklch,var(--primary)_50%,transparent)]">
                  $17
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CreditCard className="size-4 text-success" /> Pago único
              </span>
              <span className="flex items-center gap-1.5">
                <Infinity className="size-4 text-success" /> Acceso de por vida
              </span>
              <span className="flex items-center gap-1.5">
                <Ban className="size-4 text-success" /> Sin suscripciones
              </span>
            </div>

            <p className="mt-6 text-pretty text-center text-sm leading-relaxed text-muted-foreground">
              Por menos de lo que muchas personas gastan en una comida rápida o en un par de
              cafés, puedes añadir un sistema completo para trabajar durante 5 días.
            </p>

            <div className="mt-8">
              <CtaButton size="default" className="px-4 py-3 text-[13px] leading-tight sm:px-6 sm:py-5 sm:text-lg"><span className="max-w-[15rem] text-balance">Sí, quiero añadir el Protocolo por $17</span></CtaButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
