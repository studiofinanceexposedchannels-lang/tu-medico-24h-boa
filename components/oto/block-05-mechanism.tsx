'use client'

import { Sun, Flame, Moon, ChevronDown } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Heading } from './shared'

const PHASES = [
  {
    icon: Sun,
    n: '☀️ FASE 1',
    title: 'Activar',
    quote: 'Despierta tu control corporal',
    desc: 'Prácticas suaves para reconectar con la posición de tu cuerpo, el apoyo de tus pies y la distribución de tu peso.',
  },
  {
    icon: Flame,
    n: '🔥 FASE 2',
    title: 'Estabilizar',
    quote: 'Controla antes de avanzar',
    desc: 'Movimientos progresivos diseñados para entrenar estabilidad, equilibrio y control corporal real.',
  },
  {
    icon: Moon,
    n: '🌙 FASE 3',
    title: 'Proteger',
    quote: 'Haz que cada movimiento sea más seguro',
    desc: 'Estrategias para identificar situaciones de riesgo y moverte con más atención en tu día a día.',
  },
]

export function Block05Mechanism() {
  return (
    <Section>
      <Reveal className="text-center">
        <p className="mx-auto max-w-xl rounded-2xl border border-primary/30 bg-primary/10 px-4 py-4 text-pretty text-base font-bold leading-relaxed text-foreground shadow-sm">
          <span className="mr-1 text-primary">🔥</span> Tu equilibrio tiene 3 "Puntos de Control Corporal" — momentos donde tu cuerpo responde hasta 3 veces mejor a un entrenamiento de estabilidad bien aplicado.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
          ¿Qué es exactamente el Protocolo de la Gimnasta de 5 Días?
        </p>
        <p className="mx-auto mt-3 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
          Un sistema práctico para trabajar tu equilibrio de forma progresiva, sin necesidad de gimnasio ni máquinas.
        </p>
      </Reveal>

      {/* phases */}
      <div className="mt-6 space-y-2">
        {PHASES.map((p, i) => (
          <Reveal key={p.title} delay={80 + i * 100}>
            <div className="rounded-2xl border border-border bg-card p-3.5">
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <p.icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[10px] font-bold uppercase tracking-widest text-primary">
                    {p.n}
                  </p>
                  <h3 className="font-display text-base font-extrabold uppercase leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-0.5 text-xs italic leading-snug text-muted-foreground">“{p.quote}”</p>
                  <p className="mt-1 text-pretty text-xs leading-snug text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
            {i < PHASES.length - 1 && (
              <div className="flex justify-center py-0.5 text-primary">
                <ChevronDown className="size-4" />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
