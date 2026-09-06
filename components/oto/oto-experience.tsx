'use client'

import { useEffect, useState } from 'react'
import { ProcessingLoader } from './processing-loader'
import { Block00SalesHero } from './block-00-sales-hero'
import { Block02Confirmation } from './block-02-confirmation'
import { Block03Dichotomy } from './block-03-dichotomy'
import { Block04Cases } from './block-04-cases'
import { Block05Mechanism } from './block-05-mechanism'
import { Block06Bonus } from './block-06-bonus'
import { Block07Testimonials } from './block-07-testimonials'
import { Block08Urgency } from './block-08-urgency'
import { Block09Offer } from './block-09-offer'
import { Block10Guarantee } from './block-10-guarantee'
import { Block11Emotional } from './block-11-emotional'
import { Block12Faq } from './block-12-faq'
import { Block13Close } from './block-13-close'
import { cn } from '@/lib/utils'

const PASO2_STEPS = [
  'Analizando tu perfil de equilibrio',
  'Seleccionando tu oferta personalizada',
  'Reservando tu acceso exclusivo',
]

export function OtoExperience() {
  // Paso 1 → Paso 2 → contenido
  const [ready, setReady] = useState(false)
  const [ready2, setReady2] = useState(false)

  const revealed = ready && ready2

  useEffect(() => {
    if (revealed) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [revealed])

  return (
    <>
      {!ready && <ProcessingLoader onDone={() => setReady(true)} />}
      {ready && !ready2 && (
        <ProcessingLoader
          onDone={() => setReady2(true)}
          badge="Paso 2 de 3"
          title="Preparando tu oferta"
          subtitle="⚠️ No cierres esta página mientras personalizamos tu oferta."
          steps={PASO2_STEPS}
          duration={15000}
        />
      )}
      <main
        className={cn(
          'transition-opacity duration-700',
          revealed ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!revealed}
      >
        {/* Página final começa diretamente no mockup da oferta */}
        <div id="pagina">
          <Block00SalesHero />
          <Block02Confirmation />
          <Block03Dichotomy />
          <Block04Cases />
          <Block05Mechanism />
          <Block06Bonus />
          <Block07Testimonials />
          <Block08Urgency />
          <Block09Offer />
          <Block10Guarantee />
          <Block11Emotional />
          <Block12Faq />
          <Block13Close />
        </div>

        <footer className="bg-foreground px-4 py-10 text-center text-background/50">
          <p className="text-xs font-semibold uppercase tracking-wide">
            🔒 SSL seguro · 💳 Pago único · ♾️ Acceso de por vida
          </p>
          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} El Truco de la Pimienta · Todos los derechos reservados.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-xs leading-relaxed">
            Este producto es de carácter educativo e informativo y no sustituye el
            diagnóstico, tratamiento ni la orientación de un profesional de la salud.
            Consulta con un profesional antes de iniciar cualquier práctica física,
            especialmente si tienes alguna condición que pueda afectar tu equilibrio o
            movilidad.
          </p>
        </footer>
      </main>
    </>
  )
}
