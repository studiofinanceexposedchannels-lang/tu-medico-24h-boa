'use client'

import { AlertTriangle, Footprints, Activity, Zap, Bone, Flame } from 'lucide-react'
import { Reveal } from './reveal'

const RISKS = [
  { icon: Footprints, label: 'Pasos inseguros' },
  { icon: Activity, label: 'Pérdida de equilibrio' },
  { icon: Zap, label: 'Tropiezos y caídas' },
  { icon: Bone, label: 'Riesgo de lesiones' },
]

export function Block01Retention() {
  return (
    <section className="relative overflow-hidden bg-foreground px-4 pb-16 pt-8 text-background">
      {/* top alert strip */}
      <div className="mx-auto mb-10 w-full max-w-2xl">
        <div className="flex items-center justify-center gap-2 rounded-full border border-warning/40 bg-warning/15 px-4 py-2.5 text-center font-display text-xs font-bold uppercase tracking-wide text-warning sm:text-sm">
          <AlertTriangle className="size-4 shrink-0 animate-blink" />
          Paso 2 de 3: ¡No cierres esta página!
        </div>
      </div>

      <div className="mx-auto w-full max-w-2xl">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-background/70">
            <Flame className="size-4 text-primary" />
            Atención
          </span>

          <h1 className="mt-6 text-balance font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-[2.75rem]">
            Tu pedido de{' '}
            <span className="text-primary">El Truco de la Pimienta</span> está casi
            completo…
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-background/70">
            Pero hay algo <strong className="text-background">muy importante</strong> que
            todavía necesitas saber.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 space-y-4 text-pretty text-base leading-relaxed text-background/80">
          <p>
            Reducir el ardor, los pinchazos y el hormigueo puede ser un gran alivio. Pero
            cuando la sensibilidad de tus pies está alterada, también puede ser más difícil
            percibir correctamente el suelo, la presión y la posición de tus pies.
          </p>
          <p className="font-display font-bold uppercase tracking-tight text-background">
            Y ahí puede aparecer otro problema:
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {RISKS.map((r) => (
            <div
              key={r.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-warning/25 bg-[linear-gradient(160deg,color-mix(in_oklch,var(--warning)_14%,transparent),transparent)] px-3 py-5 text-center shadow-[0_12px_30px_-16px_color-mix(in_oklch,var(--warning)_60%,transparent)]"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-warning/15 text-warning">
                <r.icon className="size-6" />
              </span>
              <span className="text-sm font-semibold leading-tight text-background/85">
                {r.label}
              </span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <p className="text-pretty text-center text-base leading-relaxed text-background/80">
            Trabajar sobre las molestias es solo el{' '}
            <strong className="text-background">primer paso</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
