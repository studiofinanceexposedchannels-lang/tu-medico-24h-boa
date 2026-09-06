'use client'

import { Flame, Sparkles, AlertTriangle, Armchair, Footprints, ArrowUpDown, MoonStar } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Kicker, Heading } from './shared'

const MOMENTS = [
  { icon: Armchair, text: 'levantarte de una silla' },
  { icon: Footprints, text: 'caminar por determinados lugares' },
  { icon: ArrowUpDown, text: 'subir o bajar un escalón' },
  { icon: MoonStar, text: 'moverte cuando hay poca iluminación' },
]

export function Block02Confirmation() {
  return (
    <Section tone="muted">
      <Reveal className="text-center">
        <Kicker>
          <Sparkles className="size-4" />
          ¡Felicidades!
        </Kicker>
        <Heading className="mt-6">
          Acabas de garantizar tu acceso a
        </Heading>

        <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-2xl border border-primary/25 bg-card px-6 py-4 shadow-sm">
          <Flame className="size-8 text-primary" />
          <span className="font-display text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
            El Truco de la Pimienta
          </span>
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-8">
        <p className="text-pretty text-center text-base leading-relaxed text-muted-foreground">
          Con él aprenderás un método destinado a trabajar sobre las molestias que pueden
          afectar la sensibilidad de tus pies.
        </p>
      </Reveal>

      <Reveal delay={160} className="mt-10">
        <div className="rounded-3xl border border-border bg-card p-5 sm:p-7">
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">
            Acabas de dar un primer paso para trabajar las molestias y sensaciones que pueden
            acompañar a la <strong className="text-foreground">neuropatía periférica</strong>.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Con El Truco de la Pimienta, tendrás acceso a un método práctico pensado para
            incorporar nuevas rutinas de cuidado a tu día a día.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-success/15 px-4 py-1.5 font-display text-sm font-bold text-success">
            Eso ya es importante.
          </p>
        </div>
      </Reveal>

      <Reveal delay={180} className="mt-6 text-center">
        <p className="text-pretty text-lg font-semibold leading-relaxed text-foreground">
          Pero hay una segunda parte que muchas personas pasan por alto…
        </p>
      </Reveal>

      <Reveal delay={200} className="mt-8">
        <p className="text-pretty text-center text-base leading-relaxed text-muted-foreground">
          Puedes estar trabajando las molestias de tus pies y, aun así,{' '}
          <strong className="text-foreground">sentir inseguridad</strong> al:
        </p>
        <ul className="mt-4 space-y-2">
          {MOMENTS.map((m) => (
            <li
              key={m.text}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <m.icon className="size-4" />
              </span>
              {m.text}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={160} className="mt-10">
        <div className="relative overflow-hidden rounded-3xl border border-destructive/30 bg-destructive/10 p-6 text-center sm:p-8">
          <span className="absolute inset-x-0 top-0 h-1.5 bg-destructive/60" />
          <AlertTriangle className="mx-auto size-9 text-destructive" />
          <p className="mt-4 text-pretty text-base leading-relaxed text-foreground">
            Y lo que muchas personas no entienden es que los efectos de la neuropatía generan{' '}
            <strong className="text-destructive">falta de equilibrio y firmeza al caminar</strong>, y esto puede hacer que un simple tropiezo termine en{' '}
            <strong className="text-destructive">una lesión grave o una fractura ósea</strong>.
          </p>
          <p className="mt-3 text-pretty text-base leading-relaxed text-foreground">
            Y con la edad avanzada, una fractura puede traer complicaciones serias y requerir
            una recuperación mucho más lenta y delicada, obligándote a reducir todavía más tu
            movilidad, volviéndote más sedentario y pudiendo contribuir a empeorar las
            dificultades asociadas a la neuropatía.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-8 space-y-3 text-center">
        <p className="text-pretty text-base leading-relaxed text-muted-foreground">
          Porque sentir menos molestias y caminar con mayor seguridad no son exactamente el
          mismo objetivo.
        </p>
        <p className="text-pretty text-base font-semibold leading-relaxed text-foreground">
          Y es precisamente ahí donde entra el siguiente paso.
        </p>
      </Reveal>
    </Section>
  )
}
