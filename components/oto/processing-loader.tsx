'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle, Check, Loader2, ShieldCheck, Flame, Footprints, Activity, Zap, Bone } from 'lucide-react'
import { cn } from '@/lib/utils'

const DEFAULT_STEPS = [
  'Confirmando tu compra del Método de La Dieta Japonesa',
  'Asegurando tu conexión de pago',
  'Preparando tu acceso especial',
]

const RISKS = [
  { icon: Footprints, label: 'Pasos inseguros' },
  { icon: Activity, label: 'Pérdida de equilibrio' },
  { icon: Zap, label: 'Tropiezos y caídas' },
  { icon: Bone, label: 'Riesgo de lesiones' },
]

interface ProcessingLoaderProps {
  onDone: () => void
  badge?: string
  title?: string
  subtitle?: string
  steps?: string[]
  duration?: number
}

export function ProcessingLoader({
  onDone,
  badge = 'Paso 1 de 3',
  title = 'Preparando tu pedido',
  subtitle = 'No cierres esta página mientras confirmamos tu compra.',
  steps = DEFAULT_STEPS,
  duration = 5200,
}: ProcessingLoaderProps) {
  const isPaso2 = badge.toLowerCase().includes('paso 2')
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(6)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const timers: number[] = []
    steps.forEach((_, i) => {
      const stepTime = Math.round(((i + 1) / steps.length) * Math.max(duration - 400, 400))
      timers.push(window.setTimeout(() => setStep(i + 1), stepTime))
    })
    timers.push(window.setTimeout(() => setProgress(100), Math.max(duration - 220, 0)))
    timers.push(window.setTimeout(() => setClosing(true), duration - 650))
    timers.push(window.setTimeout(() => onDone(), duration))
    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [duration, onDone, steps])

  useEffect(() => {
    const tick = 100 / Math.max(duration / 100, 1)
    const id = window.setInterval(() => {
      setProgress((p) => Math.min(100, p + tick))
    }, 100)
    return () => window.clearInterval(id)
  }, [duration])

  if (isPaso2) {
    return (
      <div className={cn('fixed inset-0 z-50 flex justify-center overflow-y-auto bg-[#0F482F] px-2 py-4 text-[#EBE2D9] transition-opacity duration-500', closing && 'pointer-events-none opacity-0')} role="status" aria-live="polite">
        <div className="h-fit w-full max-w-[300px]">
          <div className="flex items-center justify-center rounded-full border border-[#E5AB7E]/60 bg-[#E5AB7E]/15 px-2 py-1.5 text-center font-display text-[8px] font-bold uppercase tracking-wide text-[#E5AB7E]">
            <AlertTriangle className="mr-1 size-2.5 animate-blink" /> Paso 2 de 3: ¡No cierres esta página!
          </div>
          <div className="mt-5 text-center">
            <span className="inline-flex items-center gap-1 rounded-full border border-background/20 px-3 py-1 font-display text-[8px] font-bold uppercase tracking-[0.18em] text-background/70"><Flame className="size-2.5 text-[#E5AB7E]" /> Atención</span>
            <h1 className="mt-3 text-balance font-display text-[1.45rem] font-extrabold uppercase leading-[0.98] tracking-tight">
              Tu pedido del <span className="text-[#779E39]">Método de La Dieta Japonesa</span> está casi completo…
            </h1>
            <p className="mt-3 text-[11px] leading-relaxed text-background/70">⚠️ Pero hay algo <strong className="text-background">muy importante</strong> que todavía necesitas saber.</p>
          </div>
          <div className="relative mt-4 overflow-hidden rounded-xl">
            <img
              src="/images/paso2-banner.png"
              alt="Persona mayor cayendo por pérdida de equilibrio"
              className="w-full object-cover"
            />
            <div className="absolute inset-x-0 top-0 bg-[#0F482F] px-2 py-1.5 text-center font-display text-[8px] font-bold uppercase leading-tight text-[#EBE2D9]">El Método de La Dieta Japonesa necesita un siguiente paso</div>
          </div>
          <div className="mt-5 space-y-2 text-[10px] leading-[1.45] text-[#EBE2D9]">
            <p>Hasta ahora ya has dado dos pasos muy importantes:</p>
            <p>🤸 Trabajar tu equilibrio, movilidad y seguridad al caminar.</p>
            <p>🌸 Organizar tu alimentación, hábitos y rutina de autocuidado.</p>
            <p className="pt-1 font-display font-bold uppercase text-[#E5AB7E]">Pero hay una pregunta que ninguno de esos materiales puede responder por sí solo...</p>
            <p className="font-display font-bold uppercase text-[#EBE2D9]">¿Quién estará a tu lado cuando estés en casa y te surja una duda urgente sobre tu neuropatía?</p>
            <p>Porque es muy diferente tener un protocolo guardado en el teléfono... <em>que contar con una herramienta de última generación, disponible 24 horas al día, que analiza tu duda y te ofrece una orientación adaptada a la situación que estás viviendo en ese momento.</em></p>
            <p className="pt-1">“¿Cómo puedo saber si una herida se está infectando?”</p>
            <p>“¿Cómo sé si mi neuropatía está empeorando?”</p>
            <p>“¿Qué debo hacer si aparece una ampolla en mi pie?”</p>
            <p>“¿Debería consultar a un médico de verdad por lo que estoy sintiendo?”</p>
          </div>
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-background/15"><div className="h-full rounded-full bg-[#E5AB7E] transition-[width] duration-300" style={{ width: `${Math.min(progress, 100)}%` }} /></div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('fixed inset-0 z-50 flex items-center justify-center bg-[#0F482F] px-5 text-[#EBE2D9] transition-opacity duration-500', closing && 'pointer-events-none opacity-0')} role="status" aria-live="polite">
      <div className="w-full max-w-md"><div className="mb-6 flex items-center justify-center"><span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-background/80"><ShieldCheck className="size-4" />{badge}</span></div><div className="flex items-center justify-center gap-3 text-center"><Loader2 className="size-6 shrink-0 animate-spin text-[#E5AB7E]" /><h1 className="font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">{title}<span className="animate-blink">...</span></h1></div><p className="mt-3 text-center text-sm text-background/60">{subtitle}</p><div className="mt-8 h-2.5 w-full overflow-hidden rounded-full bg-background/15"><div className="h-full rounded-full bg-[#E5AB7E] transition-[width] duration-200" style={{ width: `${Math.min(progress, 100)}%` }} /></div><ul className="mt-6 space-y-3">{steps.map((label, i) => { const done = step > i; const active = step === i; return <li key={label} className={cn('flex items-center gap-3 rounded-xl border border-[#EBE2D9]/25 bg-[#EBE2D9]/10 px-4 py-3 text-sm', done && 'border-[#E5AB7E]/40 bg-[#E5AB7E]/15')}><span className={cn('flex size-6 shrink-0 items-center justify-center rounded-full border', done ? 'border-[#E5AB7E] bg-[#E5AB7E] text-[#0F482F]' : 'border-background/30 text-background/50')}>{done ? <Check className="size-4" /> : active ? <Loader2 className="size-3.5 animate-spin" /> : <span className="size-2 rounded-full bg-background/30" />}</span><span className={cn(done ? 'text-background' : 'text-background/60')}>{label}</span></li> })}</ul></div>
    </div>
  )
}

