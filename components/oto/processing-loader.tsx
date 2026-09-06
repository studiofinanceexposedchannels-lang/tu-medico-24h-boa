'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle, Check, Loader2, ShieldCheck, Flame, Footprints, Activity, Zap, Bone } from 'lucide-react'
import { cn } from '@/lib/utils'

const DEFAULT_STEPS = [
  'Confirmando tu compra de El Truco de la Pimienta',
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
      <div className={cn('fixed inset-0 z-50 flex justify-center overflow-y-auto bg-foreground px-2 py-4 text-background transition-opacity duration-500', closing && 'pointer-events-none opacity-0')} role="status" aria-live="polite">
        <div className="h-fit w-full max-w-[300px]">
          <div className="flex items-center justify-center rounded-full border border-red-600/50 bg-red-600/10 px-2 py-1.5 text-center font-display text-[8px] font-bold uppercase tracking-wide text-red-600">
            <AlertTriangle className="mr-1 size-2.5 animate-blink" /> Paso 2 de 3: ¡No cierres esta página!
          </div>
          <div className="mt-5 text-center">
            <span className="inline-flex items-center gap-1 rounded-full border border-background/20 px-3 py-1 font-display text-[8px] font-bold uppercase tracking-[0.18em] text-background/70"><Flame className="size-2.5 text-red-600" /> Atención</span>
            <h1 className="mt-3 text-balance font-display text-[1.45rem] font-extrabold uppercase leading-[0.98] tracking-tight">
              Tu pedido de <span className="text-red-600">El Truco de la Pimienta</span> está casi completo…
            </h1>
            <p className="mt-3 text-[11px] leading-relaxed text-background/70">⚠️ Pero hay algo <strong className="text-background">muy importante</strong> que todavía necesitas saber.</p>
          </div>
          <img
            src="/images/paso2-banner.png"
            alt="Persona mayor cayendo por pérdida de equilibrio"
            className="mt-4 w-full rounded-xl object-cover"
          />
          <div className="mt-5 space-y-2 text-[9px] leading-[1.45] text-background/80">
            <p>Reducir el ardor, los pinchazos y el hormigueo puede ser un gran alivio. Pero cuando la sensibilidad de tus pies está alterada, también puede ser más difícil percibir correctamente el suelo, la presión y la posición de tus pies.</p>
            <p className="font-display font-bold uppercase text-background">Y ahí puede aparecer otro problema:</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {RISKS.map(({ icon: Icon, label }) => <div key={label} className="flex min-h-[49px] flex-col items-center justify-center gap-1 rounded-xl border border-background/10 bg-background/5 px-1 text-center"><Icon className="size-4 text-red-600" /><span className="text-[8px] font-semibold leading-tight text-background/85">{label}</span></div>)}
          </div>
          <p className="mt-5 text-center text-[9px] leading-relaxed text-background/80">Trabajar sobre las molestias es solo el <strong className="text-background">primer paso</strong>.</p>
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-background/15"><div className="h-full rounded-full bg-red-600 transition-[width] duration-300" style={{ width: `${Math.min(progress, 100)}%` }} /></div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('fixed inset-0 z-50 flex items-center justify-center bg-foreground px-5 text-background transition-opacity duration-500', closing && 'pointer-events-none opacity-0')} role="status" aria-live="polite">
      <div className="w-full max-w-md"><div className="mb-6 flex items-center justify-center"><span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-background/80"><ShieldCheck className="size-4" />{badge}</span></div><div className="flex items-center justify-center gap-3 text-center"><Loader2 className="size-6 shrink-0 animate-spin text-red-600" /><h1 className="font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">{title}<span className="animate-blink">...</span></h1></div><p className="mt-3 text-center text-sm text-background/60">{subtitle}</p><div className="mt-8 h-2.5 w-full overflow-hidden rounded-full bg-background/15"><div className="h-full rounded-full bg-red-600 transition-[width] duration-200" style={{ width: `${Math.min(progress, 100)}%` }} /></div><ul className="mt-6 space-y-3">{steps.map((label, i) => { const done = step > i; const active = step === i; return <li key={label} className={cn('flex items-center gap-3 rounded-xl border border-background/10 bg-background/5 px-4 py-3 text-sm', done && 'border-red-600/30 bg-red-600/10')}><span className={cn('flex size-6 shrink-0 items-center justify-center rounded-full border', done ? 'border-red-600 bg-red-600 text-white' : 'border-background/30 text-background/50')}>{done ? <Check className="size-4" /> : active ? <Loader2 className="size-3.5 animate-spin" /> : <span className="size-2 rounded-full bg-background/30" />}</span><span className={cn(done ? 'text-background' : 'text-background/60')}>{label}</span></li> })}</ul></div>
    </div>
  )
}

