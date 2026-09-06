'use client'

import { Flame, ArrowDown, XCircle, CheckCircle2, Check, Sparkles } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Heading } from './shared'
import { CtaButton } from './cta-button'
import { Countdown } from './countdown'

const INCLUDES = [
  'Protocolo completo de 5 días',
  'Sistema progresivo de 3 fases',
  'Generador Inteligente de Ejercicios para Tobillos y Piernas',
  'Checklist Casa Sin Riesgos',
  'Guía de Calzado Seguro para Pies con Neuropatía',
  'Rutina contra la Ansiedad antes de Caminar',
  'Guía de Primeros Auxilios para Golpes y Heridas',
  'Tabla de Progreso Semanal de Equilibrio',
  'Acceso inmediato',
  'Garantía de 7 días',
]

export function Block13Close() {
  return (
    <Section id="cierre" className="relative overflow-hidden pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_70%)]"
      />

      <Reveal className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-[0_0_20px_-4px_var(--primary)]">
          <Flame className="size-4 animate-pulse" />
          Última decisión
        </span>
        <Heading className="mt-6">Tienes dos caminos ahora mismo</Heading>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Reveal delay={80}>
          <div className="flex h-full flex-col rounded-3xl border border-dashed border-border bg-secondary/40 p-6 opacity-75">
            <XCircle className="size-8 text-muted-foreground" />
            <p className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight text-muted-foreground">
              Cerrar esta página
            </p>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              Te quedas únicamente con El Truco de la Pimienta y tendrás que organizar por tu
              cuenta cómo trabajar específicamente tu equilibrio, estabilidad y movilidad.
              Además, no podrás volver a encontrar esta oferta.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-primary bg-[linear-gradient(160deg,color-mix(in_oklch,var(--primary)_12%,var(--card)),var(--card)_60%)] p-6 shadow-[0_20px_45px_-20px_color-mix(in_oklch,var(--primary)_60%,transparent)]">
            <span className="absolute -right-11 top-5 w-40 rotate-45 bg-primary py-1 text-center font-display text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
              Recomendado
            </span>
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_8px_20px_-6px_var(--primary)]">
              <CheckCircle2 className="size-6" />
            </span>
            <p className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight text-foreground">
              Añadir el Protocolo
            </p>
            <p className="mt-3 text-pretty text-sm font-semibold text-foreground">Añades ahora:</p>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-success/20 text-success">
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 border-t border-primary/20 pt-4">
              <Sparkles className="size-4 text-primary" />
              <p className="font-display text-base font-extrabold uppercase tracking-tight text-primary">
                Todo por solo $17
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-10">
        <div className="relative overflow-hidden rounded-3xl border border-background/10 bg-[linear-gradient(160deg,var(--foreground),color-mix(in_oklch,var(--foreground),var(--primary)_25%))] p-6 text-center text-background shadow-[0_25px_60px_-25px_color-mix(in_oklch,var(--primary)_70%,transparent)] sm:p-8">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,var(--primary),transparent)]"
          />
          <p className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-primary">
            <Flame className="size-4" />
            La oferta expira en
          </p>
          <div className="mt-4">
            <Countdown />
          </div>
          <div className="mx-auto mt-8 flex items-center justify-center gap-2 text-background/60">
            <ArrowDown className="size-5 animate-bounce" />
          </div>
          <div className="mt-4">
            <CtaButton size="default" subtle className="px-4 py-3 text-[13px] leading-tight sm:px-6 sm:py-5 sm:text-lg"><span className="max-w-[15rem] text-balance">Sí, quiero añadir el Protocolo por $17</span></CtaButton>
          </div>
          <p className="mt-4 text-xs text-background/50">
            Pago único · Garantía de 7 días · Acceso inmediato
          </p>
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-12 text-center">
        <div className="mx-auto flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-primary/40" />
          <Sparkles className="size-4 text-primary" />
          <span className="h-px w-8 bg-primary/40" />
        </div>
        <p className="mt-4 text-pretty font-display text-lg font-extrabold uppercase leading-snug tracking-tight text-foreground sm:text-xl">
          Cuida tus pies.
          <br />
          Trabaja tu equilibrio.
          <br />
          <span className="text-primary">Protege tu libertad de movimiento.</span>
        </p>
      </Reveal>

      <Reveal delay={140} className="mt-10">
        <div className="relative overflow-hidden rounded-3xl border-2 border-primary bg-[linear-gradient(160deg,color-mix(in_oklch,var(--primary)_14%,var(--card)),var(--card)_65%)] p-6 text-center shadow-[0_25px_55px_-25px_color-mix(in_oklch,var(--primary)_55%,transparent)] sm:p-8">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/20 blur-2xl"
          />
          <p className="text-pretty font-display text-lg font-extrabold uppercase tracking-tight text-primary sm:text-xl">
            Sí, quiero el Protocolo de la Gimnasta de 5 Días por $17
          </p>
          <div className="mt-6">
            <CtaButton size="default" className="px-4 py-3 text-[13px] leading-tight sm:px-6 sm:py-5 sm:text-lg">
              <span className="max-w-[15rem] text-balance">Añadir a mi pedido ahora</span>
            </CtaButton>
          </div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground">
            <CheckCircle2 className="size-3.5 text-success" />
            Pago seguro · Garantía de 7 días · Acceso inmediato
          </p>
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-10 space-y-3 rounded-2xl border border-border bg-secondary/40 p-5 text-pretty text-sm leading-relaxed text-muted-foreground">
        <p>
          <strong className="text-foreground">P.D.:</strong> Si llegaste hasta aquí,
          probablemente sabes que el equilibrio merece tanta atención como las molestias de
          tus pies. No necesitas esperar para empezar a trabajar esta parte de tu rutina.
        </p>
        <p>
          <strong className="text-foreground">P.P.D.:</strong> Recuerda: esta oferta especial
          está disponible en esta página y desaparecerá cuando salgas.
        </p>
      </Reveal>
    </Section>
  )
}
