'use client'

import { useState } from 'react'
import { Plus, Minus, HelpCircle, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { Section, Kicker, Heading } from './shared'

const FAQS = [
  {
    q: '¿Puedo comprar el Protocolo más adelante?',
    a: 'Esta oferta está presentada como un complemento especial después de adquirir El Truco de la Pimienta. Si cierras esta página, no podrás volver a encontrar esta oferta.',
  },
  {
    q: '¿Por qué cuesta solo $17?',
    a: 'Porque se ofrece como un complemento de bajo coste para quienes ya adquirieron El Truco de la Pimienta, permitiendo añadir una segunda herramienta sin tener que comprar un programa independiente a precio completo.',
  },
  {
    q: '¿Necesito tener experiencia haciendo ejercicios?',
    a: 'No. El protocolo está organizado de forma progresiva y sencilla, empezando por prácticas simples pensadas para quien nunca ha hecho este tipo de ejercicios.',
  },
  {
    q: '¿Cuánto tiempo necesito al día?',
    a: 'Solo necesitas dedicar aproximadamente 10 minutos al día. Las prácticas son cortas y están organizadas para que puedas incorporarlas fácilmente a tu rutina, sin tener que pasar largos periodos haciendo ejercicios.',
  },
  {
    q: '¿Y si no es para mí?',
    a: 'Tienes 7 días de garantía de satisfacción. Puedes conocer el contenido y, si consideras que no es adecuado para ti, solicitar el reembolso dentro del plazo correspondiente.',
  },
]

function FaqItem({
  q,
  a,
  index,
  icon: Icon,
}: {
  q: string
  a: string
  index: number
  icon?: LucideIcon
}) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-tight text-foreground sm:text-base">
          {Icon && (
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="size-3.5" />
            </span>
          )}
          {q}
        </span>
        <span
          className={cn(
            'flex size-7 shrink-0 items-center justify-center rounded-full transition-colors',
            open ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground',
          )}
        >
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-pretty text-sm leading-relaxed text-muted-foreground">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Block12Faq() {
  return (
    <Section>
      <Reveal className="text-center">
        <Kicker>
          <HelpCircle className="size-4" />
          Preguntas frecuentes
        </Kicker>
        <Heading className="mt-6">Resolvemos tus dudas</Heading>
      </Reveal>

      <div className="mt-8 space-y-3">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={60 + i * 60}>
            <FaqItem q={f.q} a={f.a} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
