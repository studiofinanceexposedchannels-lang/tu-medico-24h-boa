'use client'

import { Star, Quote } from 'lucide-react'
import { Reveal } from './reveal'
import { Section, Kicker, Heading } from './shared'

const TESTIMONIALS = [
  {
    name: 'Carmen R.',
    age: '68 años',
    photo: '/images/testimonial-4.jpeg',
    text: 'El Truco de la Pimienta me ayudó con las molestias de mis pies, pero seguía sintiéndome insegura al caminar. Un día me giré rápido y me caí — resultado: una fractura óssea de cadera que tardó casi un año en sanar. Cuando por fin volví a caminar, empecé el Protocolo. Debí trabajar mi equilibrio desde el principio, no después de una caída.',
  },
  {
    name: 'José Luis M.',
    age: '72 años',
    photo: '/images/testimonial-2.jpeg',
    text: 'Pensé que al mejorar las molestias de mis pies volvería a sentirme segura al caminar, pero no fue así. Antes ni siquiera confiaba en ir sola de la sala a la cocina. Con el Protocolo trabajé mi equilibrio y mi estabilidad de verdad, y hoy camino por mi casa sin ese miedo constante.',
  },
  {
    name: 'Antonia G.',
    age: '65 años',
    photo: '/images/testimonial-5.jpeg',
    text: 'El Truco fue mi primer paso, pero me di cuenta de que necesitaba algo más. Un simple tropiezo terminó en una fractura de muñeca que me dejó casi un año y medio sin poder valerme bien por mí misma. Al combinar El Truco con el Protocolo, por fin empecé a trabajar mi equilibrio y mi estabilidad de una manera organizada.',
  },
]

export function Block07Testimonials() {
  return (
    <Section>
      <Reveal className="text-center">
        <Kicker>
          <Star className="size-4 fill-current" />
          Testimonios
        </Kicker>
        <Heading className="mt-6">Personas que están trabajando su equilibrio</Heading>
      </Reveal>

      <div className="mt-8 space-y-4">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={80 + i * 90}>
            <figure className="rounded-3xl border border-border bg-card p-6">
              <Quote className="size-7 text-primary/40" />
              <blockquote className="mt-3 text-pretty text-sm leading-snug text-foreground">
                {t.text}
              </blockquote>
              <div className="mt-4 flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-3 flex items-center gap-3">
                <img
                  src={t.photo || "/placeholder.svg"}
                  alt={`Foto de ${t.name}`}
                  className="size-11 shrink-0 rounded-full object-cover ring-2 ring-primary/20"
                />
                <span>
                  <span className="block font-display text-sm font-bold uppercase tracking-tight">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">{t.age}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100} className="mt-6">
        <p className="text-center text-xs text-muted-foreground">
          Recuerda: las experiencias individuales pueden variar. El protocolo tiene carácter
          educativo y no sustituye la evaluación, diagnóstico o tratamiento de un profesional
          de la salud.
        </p>
      </Reveal>
    </Section>
  )
}
