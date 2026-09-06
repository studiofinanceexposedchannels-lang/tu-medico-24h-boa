'use client'

import { Heart, HeartCrack, Footprints, Dumbbell, MoonStar } from 'lucide-react'
import { Reveal } from './reveal'
import { Section } from './shared'

const WANTS = [
  { icon: HeartCrack, text: 'Fue por dejar de sentir esa molestia constante en tus pies día tras día' },
  { icon: Footprints, text: 'Fue por volver a sentir tus pies como antes, sin ardor ni hormigueo interrumpiendo tu día' },
  { icon: MoonStar, text: 'Fue por dormir tranquila, sin que esa sensación te despierte a mitad de la noche' },
  { icon: Dumbbell, text: 'Fue por recuperar el control sobre tu propio cuerpo — y no dejar que la neuropatía decida por ti' },
]

export function Block11Emotional() {
  return (
    <Section tone="dark">
      <Reveal className="text-center">
        <span className="flex justify-center">
          <Heart className="size-8 text-primary" />
        </span>
        <p className="mt-4 font-display text-lg font-extrabold uppercase tracking-[0.1em] text-background sm:text-xl">
          Recuerda por qué compraste El Truco de la Pimienta
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-6 space-y-3 text-pretty text-center text-sm leading-snug text-background/85">
        <p>No fue solo por probar otro método más...</p>
      </Reveal>

      <Reveal delay={160} className="mt-6">
        <ul className="mx-auto max-w-lg space-y-2.5">
          {WANTS.map((w) => (
            <li
              key={w.text}
              className="flex items-center gap-3 rounded-2xl border border-background/15 bg-background/5 px-4 py-3 text-left text-background/85"
            >
              <w.icon className="size-5 shrink-0 text-primary" />
              <span className="text-sm sm:text-base">{w.text}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={140} className="mt-8 space-y-3 text-pretty text-center text-base leading-relaxed text-background/75">
        <p>El Truco de la Pimienta puede formar parte de ese proceso.</p>
        <p>Pero el Protocolo de la Gimnasta de 5 Días añade algo diferente:</p>
        <p className="font-semibold text-background">
          una estructura específica para trabajar tu equilibrio, estabilidad y movilidad.
        </p>
      </Reveal>

      <Reveal delay={160} className="mt-10">
        <div className="mx-auto max-w-lg rounded-3xl border border-background/15 bg-background/5 p-6 text-center">
          <p className="text-pretty text-base leading-relaxed text-background/75">
            No se trata de hacer promesas mágicas.
          </p>
          <p className="mt-2 text-pretty text-base leading-relaxed text-background/75">
            Se trata de tener un plan claro para empezar.
          </p>
          <p className="mt-4 text-pretty text-base font-semibold leading-relaxed text-background">
            La pregunta no es si necesitas hacer más. La pregunta es:
          </p>
          <p className="mt-3 text-pretty text-lg font-bold leading-relaxed text-primary">
            ¿Vas a dejar tu equilibrio para después o vas a empezar a trabajarlo ahora?
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
