'use client'

import { Calendar, RotateCcw, ShieldCheck, Check } from 'lucide-react'
import { Reveal } from './reveal'
import { Section } from './shared'

const NUMBERED = [
  {
    icon: Calendar,
    title: 'Garantía de 7 días',
    desc: 'Tienes 7 días completos para acceder al contenido, conocer el método y ponerlo en práctica.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía de satisfacción',
    desc: 'Si después de conocer el contenido consideras que no es adecuado para ti, puedes solicitar el reembolso dentro del plazo establecido.',
  },
  {
    icon: RotateCcw,
    title: 'Sin riesgo de compra',
    desc: 'Si decides que el protocolo no es para ti, podrás solicitar el 100% de tu dinero conforme a las condiciones de la garantía.',
  },
]

const RECAP = [
  'Tienes 7 días para probarlo.',
  'Puedes solicitar un reembolso si no quedas satisfecho.',
  'No tienes que tomar una decisión a largo plazo.',
]

export function Block10Guarantee() {
  return (
    <Section tone="muted">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border-2 border-success/40 bg-card p-6 shadow-[0_30px_70px_-30px_color-mix(in_oklch,var(--success)_55%,transparent)] sm:p-10">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-success/15 blur-3xl"
          />
          <div className="relative flex flex-col items-center text-center">
            <div className="relative">
              <span
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-success/20 blur-2xl"
              />
              <img
                src="/images/garantia-7-dias.png"
                alt="Sello de garantía de 7 días"
                className="size-36 object-contain drop-shadow-xl sm:size-44"
              />
            </div>
            <p className="mt-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-success">
              Garantía
            </p>
            <h2 className="mt-2 text-balance font-display text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
              Garantía de satisfacción de 7 días
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
              Queremos que puedas conocer el protocolo antes de decidir si realmente es para
              ti.
            </p>
          </div>

          <div className="mt-6 space-y-2">
            {NUMBERED.map((n, i) => (
              <div
                key={n.title}
                className="flex items-start gap-2.5 rounded-2xl border border-border bg-secondary px-3.5 py-2.5"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-success/15 font-display text-xs font-bold text-success">
                  {i + 1}
                </span>
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-tight text-foreground">
                    {n.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl border border-success/30 bg-success/10 p-5 shadow-[0_16px_35px_-20px_color-mix(in_oklch,var(--success)_55%,transparent)]">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(90deg,transparent,var(--success),transparent)]"
            />
            <p className="text-center text-sm font-semibold uppercase tracking-wide text-success">
              En otras palabras:
            </p>
            <ul className="mt-3 space-y-2">
              {RECAP.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
