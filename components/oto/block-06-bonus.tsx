'use client'

import { Gift, ListChecks, ShieldAlert, Dumbbell } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Kicker, Heading } from './shared'

const BONUSES = [
  { icon: Dumbbell, n: 'Bono #1', title: 'Generador Inteligente de Ejercicios para el Fortalecimiento de Tobillos y Piernas (5 min al día)', desc: 'Ejercicios simples y suaves enfocados en dar más firmeza y respuesta muscular a las piernas, el punto de apoyo más importante contra las caídas.', value: '$17' },
  { icon: ListChecks, n: 'Bono #2', title: 'Checklist "Casa Sin Riesgos"', desc: 'Una lista práctica para preparar el entorno y eliminar los puntos de la casa donde más ocurren caídas: alfombras, escalones, iluminación y baño.', value: '$17' },
  { icon: ShieldAlert, n: 'Bono #3', title: 'Guía de Calzado Seguro para Pies con Neuropatía', desc: 'Cómo elegir el calzado correcto para reducir el riesgo de tropiezos, rozaduras y pérdida de sensibilidad al caminar.', value: '$17' },
  { icon: ShieldAlert, n: 'Bono #4', title: 'Rutina de 3 Pasos contra la Ansiedad antes de Caminar', desc: 'Una secuencia rápida para hacer antes de salir a caminar, diseñada para reducir la ansiedad e inseguridad — porque el miedo a caer también afecta el equilibrio real.', value: '$17' },
  { icon: ShieldAlert, n: 'Bono #5', title: 'Guía de Primeros Auxilios para Golpes y Pequeñas Heridas en los Pies', desc: 'Qué hacer (y qué NO hacer) ante una caída, ampolla o pequeño corte, antes de buscar atención profesional.', value: '$17' },
  { icon: ListChecks, n: 'Bono #6', title: 'Tabla de Progreso Semanal de Equilibrio', desc: 'Para registrar visualmente la evolución día a día, motivando a continuar el protocolo.', value: '$17' },
]

export function Block06Bonus() {
  return (
    <Section tone="muted">
      <Reveal className="text-center">
        <Kicker>
          <Gift className="size-4" />
          Bonos exclusivos
        </Kicker>
        <Heading className="mt-6">🎁 Y además recibirás estos bonos exclusivos</Heading>
      </Reveal>

      <div className="mt-8 space-y-4">
        {BONUSES.map((b, i) => (
          <Reveal key={b.title} delay={80 + i * 90}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-4 py-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <b.icon className="size-5" />
                </span>
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                  🎁 {b.n}
                </p>
                <span className="ml-auto shrink-0 rounded-full bg-secondary px-2.5 py-1 font-display text-[11px] font-bold text-muted-foreground">
                  Valor: <span className="line-through">{b.value}</span>
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-balance font-display text-[15px] font-extrabold leading-tight tracking-tight text-foreground">
                  {b.title}
                </h3>
                <p className="mt-2 max-w-prose text-pretty text-[13px] leading-[1.55] text-muted-foreground">
                  {b.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-8">
        <div className="flex flex-col items-center gap-1 rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 py-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Valor de los bonos
          </span>
          <span className="font-display text-4xl font-extrabold text-foreground line-through decoration-primary/60 decoration-2">
            $102
          </span>
          <span className="mt-1 text-sm font-bold uppercase tracking-wide text-primary">
            Pero hoy no necesitas pagar $102 por ellos
          </span>
        </div>
      </Reveal>
    </Section>
  )
}
