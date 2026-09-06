'use client'

import { Flame } from 'lucide-react'
import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

export function Block00SalesHero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-14 pt-0 text-foreground sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_22%,transparent),transparent_70%)]"
      />
      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-b-[2rem] border border-primary/20 bg-card shadow-[0_30px_80px_-30px_color-mix(in_oklch,var(--primary)_55%,transparent)]">
        <div className="relative bg-[linear-gradient(120deg,var(--destructive),color-mix(in_oklch,var(--destructive),black_15%))] px-3 py-2 text-center sm:px-6 sm:py-3">
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.12em] text-primary-foreground sm:text-sm">
            Si cierras esta página ahora, perderás el acceso a:
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 px-4 py-6 sm:gap-8 sm:px-10 sm:py-10">
          <div className="max-w-[19rem] text-center sm:max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-display text-[9px] font-extrabold uppercase tracking-[0.14em] text-primary shadow-[0_0_16px_-4px_var(--primary)] sm:text-xs">
              <Flame className="size-3 animate-pulse" /> Protocolo de 5 Días
            </span>
            <h1 className="mt-3 text-balance font-display text-[1.38rem] font-extrabold uppercase leading-[1.06] tracking-tight sm:text-3xl">
              Protocolo de la Gimnasta de 5 Días para acabar con tu{' '}
              <span className="text-primary">pérdida de equilibrio al caminar</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-pretty text-[0.8rem] leading-6 text-muted-foreground sm:text-base">
              Un sistema práctico diseñado para trabajar progresivamente el equilibrio eliminando por completo el riesgo de lesiones relacionadas con la pérdida de sensibilidad causada por la neuropatía.
            </p>
          </div>

          <div className="relative flex w-full items-center justify-center">
            <div aria-hidden className="absolute inset-0 bg-primary/15 blur-3xl" />
            <img
              src="/images/ebook-mockup.png"
              alt="Mockup del Protocolo de la Gimnasta de 5 Días en libro y tablet"
              className="relative w-full max-w-[220px] drop-shadow-2xl sm:max-w-md"
            />
          </div>

          <p className="text-center text-xs font-semibold leading-relaxed text-primary sm:text-sm">
            Esta oferta especial no volverá a aparecer después de salir de esta página.
          </p>
          <CtaButton scrollTo="oferta" subtle className="w-full max-w-[18rem] px-4 py-3 text-sm sm:max-w-md sm:px-6 sm:py-5 sm:text-lg">Sí, quiero proteger mi equilibrio</CtaButton>
        </div>
      </div>
    </section>
  )
}
