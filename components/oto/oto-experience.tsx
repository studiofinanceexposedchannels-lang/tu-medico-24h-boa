'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle, Check, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react'
import { ProcessingLoader } from './processing-loader'
import { CtaButton } from './cta-button'

const PASO2_STEPS = [
  'Analizando tu perfil de equilibrio',
  'Seleccionando tu oferta personalizada',
  'Reservando tu acceso exclusivo',
]

const pillars = [
  ['01', 'Evaluación inicial inteligente', 'La IA mapea dónde sientes los síntomas, cuándo comenzaron, su intensidad y cómo afectan tu marcha para crear un perfil único de tu neuropatía.'],
  ['02', 'Mapa + checklist diario de tus pies', 'Registra dolor, ardor, hormigueo, entumecimiento, sueño y equilibrio en una sola pantalla. Convierte sensaciones en datos reales de tu evolución.'],
  ['03', 'NeuroAssist 24h', 'A las 3 de la mañana, un botón te orienta sobre qué hacer ahora, sin pánico, sin búsquedas interminables y sin esperar al día siguiente.'],
  ['04', 'Detector de señales de alerta', 'Si detecta una herida, enrojecimiento, hinchazón, pérdida repentina de sensibilidad o debilidad nueva, te indica cuándo buscar evaluación médica.'],
  ['05', 'Análisis visual de tus pies con IA', 'Envía una foto para reconocer alteraciones visibles. No diagnostica: te ayuda a identificar cuándo algo merece atención profesional.'],
]

const bonuses = [
  'Guía Familiar: Cómo Hablar de tu Neuropatía sin Perder tu Independencia',
  'Guía de Intimidad y Conexión Sexual',
  'Plan Financiero de tu Cuidado',
  'Guía Anti-Constreñimiento: El Cuidado Estético de tus Pies',
  'El Miedo Silencioso a la Demencia: Guía para Reconocer las Señales y Cómo Prevenirla',
  '7 Medicamentos que Pueden Afectar Mucho tus Nervios',
]

const faqs = [
  ['¿Puedo comprarlo después?', 'Esta condición especial está disponible inmediatamente después de tu compra. Si cierras esta página, esta oferta no volverá a aparecer.'],
  ['¿Por qué necesito esto si ya tengo los dos protocolos?', 'Porque cumplen funciones diferentes. Tus protocolos trabajan molestias, movilidad, equilibrio, hábitos y alimentación. El Médico Virtual añade un punto de apoyo digital para organizar dudas y acompañar tu recorrido.'],
  ['¿Necesito saber usar tecnología?', 'No. Solo necesitas acceder desde tu dispositivo y seguir indicaciones claras, sin conocimientos técnicos avanzados.'],
  ['¿Es difícil utilizarlo?', 'No. Todo está organizado de forma práctica para consultar información, resolver dudas y utilizar las herramientas cuando las necesites.'],
  ['¿Y si no es adecuado para mí?', 'Tienes una garantía de satisfacción de 7 días. Puedes revisar el material y solicitar el reembolso si no es adecuado para ti.'],
]

function Section({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`mx-auto w-full max-w-2xl px-5 py-14 sm:py-20 ${className}`}>{children}</section>
}

export function OtoExperience() {
  const [ready, setReady] = useState(false)
  const [ready2, setReady2] = useState(false)
  const revealed = ready && ready2

  useEffect(() => {
    if (revealed) window.scrollTo({ top: 0, behavior: 'auto' })
  }, [revealed])

  return (
    <>
      {!ready && <ProcessingLoader onDone={() => setReady(true)} />}
      {ready && !ready2 && <ProcessingLoader onDone={() => setReady2(true)} badge="Paso 2 de 3" title="Preparando tu oferta" subtitle="No cierres esta página mientras personalizamos tu oferta." steps={PASO2_STEPS} duration={15000} />}
      <main className={`bg-background text-foreground transition-opacity duration-700 ${revealed ? 'opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden={!revealed}>
        <div id="pagina">
          <section className="relative overflow-hidden border-b border-primary/20 px-5 pb-14 pt-10 text-center sm:pt-16">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_24%,transparent),transparent_64%)]" />
            <div className="mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary"><Stethoscope className="size-3.5" /> Tu nuevo punto de apoyo</span>
              <h1 className="mt-5 text-balance font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-5xl">Tu Médico Virtual <span className="text-primary">24H</span>: resuelve tu duda urgente de neuropatía al instante</h1>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base">Herramienta de última generación que te conecta al instante con tu Médico Virtual de IA especializado en neuropatía, disponible 24h — para cuando tienes una duda urgente y no puedes esperar días por una cita.</p>
              <img src="/images/medical-ai-mockup.png" alt="Tu Médico Virtual 24H en un teléfono móvil" className="mx-auto mt-8 w-full max-w-[440px] rounded-2xl border border-primary/25 shadow-[0_0_70px_-20px_var(--primary)]" />
              <CtaButton scrollTo="oferta" subtle className="mt-8 w-full max-w-md">Sí, quiero mi Médico Virtual 24H</CtaButton>
            </div>
          </section>

          <Section className="text-center"><Sparkles className="mx-auto size-7 text-primary" /><p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-primary">¡Felicidades!</p><h2 className="mt-3 text-balance font-display text-2xl font-extrabold uppercase sm:text-4xl">Acabas de garantizar tu acceso al Método de la Dieta Japonesa de 14 Días</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-foreground">Ya tienes una base para trabajar alimentación, hábitos diarios, una rutina completa y la observación consciente de tus pies.</p><div className="mx-auto mt-8 max-w-xl rounded-2xl border border-primary/20 bg-card p-5 text-left"><p className="font-display text-sm font-extrabold uppercase text-primary">Pero tener información no es lo mismo que tener una herramienta especializada.</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Google, vídeos, foros y varios materiales no pueden responder a la duda específica que es solo tuya: una herida, un medicamento, un alimento o un síntoma que aparece de madrugada.</p></div></Section>

          <Section className="border-y border-border/60"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-primary">La diferencia</p><h2 className="mt-3 text-balance text-center font-display text-2xl font-extrabold uppercase sm:text-4xl">Información vs. un punto de apoyo</h2><div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-border bg-card p-5"><h3 className="font-display font-extrabold uppercase text-muted-foreground">Tener varios protocolos</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">Lees, buscas, recuerdas, abres PDFs y terminas perdiendo tiempo para encontrar una respuesta genérica.</p></div><div className="rounded-2xl border border-primary/50 bg-primary/10 p-5 shadow-[0_0_35px_-18px_var(--primary)]"><h3 className="font-display font-extrabold uppercase text-primary">Tener un Médico Virtual 24H</h3><p className="mt-4 text-sm leading-6 text-foreground/80">Orientación clara y profesional durante tu recorrido, sin esperar días y sin depender de tu memoria.</p></div></div></Section>

          <Section><h2 className="text-balance text-center font-display text-2xl font-extrabold uppercase sm:text-4xl">El sistema médico virtual inteligente</h2><p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-muted-foreground">No es una IA genérica. Es un sistema organizado en cinco herramientas para que siempre tengas un centro de orientación.</p><div className="mt-8 space-y-3">{pillars.map(([number, title, description]) => <article key={number} className="rounded-2xl border border-border bg-card p-5"><div className="flex items-start gap-4"><span className="font-mono text-sm font-bold text-primary">{number}</span><div><h3 className="font-display text-sm font-extrabold uppercase">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></div></div></article>)}</div></Section>

          <Section className="border-y border-border/60"><h2 className="text-balance text-center font-display text-2xl font-extrabold uppercase sm:text-4xl">La pieza que faltaba en tu proceso</h2><div className="mt-8 space-y-4 text-sm leading-6 text-muted-foreground"><p>¿Quién está contigo a las 3 de la mañana cuando aparece una duda? ¿Quién te dice si estás en el camino correcto o si algo es grave?</p><p className="font-display font-extrabold uppercase text-primary">Tu Médico Virtual 24H es la pieza que faltaba.</p><p>No reemplaza lo que ya tienes. Es tener un punto de apoyo observando tu evolución específica todos los días. La diferencia entre esperar mejorar y saber que estás mejorando.</p></div></Section>

          <Section><h2 className="text-center font-display text-2xl font-extrabold uppercase sm:text-4xl">6 bonos exclusivos incluidos</h2><div className="mt-7 grid gap-3">{bonuses.map((bonus, index) => <div key={bonus} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-5"><span className="text-primary">🎁</span><span><strong className="text-foreground">Bono #{index + 1}.</strong> {bonus}</span></div>)}</div><p className="mt-6 text-center font-display text-lg font-extrabold text-primary">Valor total de los bonos: US$142</p></Section>

          <Section className="border-y border-primary/20 bg-card/40"><h2 className="text-center font-display text-2xl font-extrabold uppercase sm:text-4xl">¿Cuánto vale tener un Médico Virtual que te entiende?</h2><div className="mx-auto mt-8 max-w-md text-center"><p className="text-sm text-muted-foreground line-through">Valor total estimado: US$1.497</p><p className="mt-2 text-sm text-muted-foreground line-through">Precio normal: US$997</p><p className="mt-2 text-sm text-muted-foreground line-through">Precio de incorporación: US$697</p><p className="mt-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Hoy después de tu compra</p><p className="mt-1 font-display text-6xl font-extrabold text-foreground">US$97</p><p className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Pago único · Acceso de por vida</p><CtaButton scrollTo="oferta" className="mt-7 w-full">Sí, quiero mi Médico Virtual de por vida — US$97</CtaButton></div></Section>

          <Section><div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center"><ShieldCheck className="mx-auto size-9 text-primary" /><h2 className="mt-4 font-display text-2xl font-extrabold uppercase">Garantía de satisfacción de 7 días</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">Revisa el material. Si no es adecuado para ti, solicita el reembolso inmediato. El riesgo es 100% nuestro.</p></div></Section>

          <Section className="border-y border-border/60"><h2 className="text-balance text-center font-display text-2xl font-extrabold uppercase sm:text-4xl">Recuerda por qué comenzaste</h2><div className="mt-7 space-y-4 text-sm leading-6 text-muted-foreground"><p>Fue porque querías aliviar las molestias de tus pies, volver a caminar sin miedo y cuidar tu salud con una alimentación adecuada.</p><p>Ya diste pasos importantes. Ahora puedes añadir algo diferente: no otro protocolo, no otro ebook, sino un punto de apoyo digital para nunca quedarte sin saber qué hacer ante una duda.</p><p className="font-display font-extrabold uppercase text-primary">La duda aparece. Tú tienes dónde acudir.</p></div><CtaButton scrollTo="oferta" className="mt-8 w-full">Sí, quiero mi Médico Virtual 24H — US$97</CtaButton></Section>

          <Section><h2 className="text-center font-display text-2xl font-extrabold uppercase sm:text-4xl">Preguntas frecuentes</h2><div className="mt-7 space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-border bg-card p-4"><summary className="cursor-pointer list-none pr-5 font-display text-sm font-bold">{question}</summary><p className="mt-3 text-sm leading-6 text-muted-foreground">{answer}</p></details>)}</div></Section>

          <Section id="oferta" className="relative overflow-hidden bg-primary px-5 text-center text-primary-foreground"><AlertTriangle className="mx-auto size-8" /><h2 className="mt-4 text-balance font-display text-2xl font-extrabold uppercase sm:text-4xl">Ahora tienes dos opciones</h2><p className="mx-auto mt-5 max-w-lg text-sm leading-6 opacity-90">Cerrar esta página y buscar respuestas por tu cuenta, o recibir tu Médico Virtual 24H para resolver tu duda urgente de neuropatía al instante.</p><div className="mx-auto mt-7 max-w-md rounded-2xl bg-background p-6 text-left text-foreground"><p className="font-display text-xl font-extrabold uppercase">Tu Médico Virtual 24H</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Un punto de apoyo digital para consultar síntomas, registrar cambios, organizar preguntas y descubrir cuándo necesitas acudir a un profesional.</p><div className="mt-5 flex items-end justify-between border-t border-border pt-5"><span className="text-xs font-bold uppercase text-muted-foreground">Pago único</span><span className="font-display text-4xl font-extrabold text-primary">US$97</span></div><CtaButton scrollTo="pagina" className="mt-5 w-full">Añadir ahora — US$97</CtaButton></div><p className="mx-auto mt-8 max-w-lg text-xs leading-5 opacity-80">Aviso importante: programa educativo y organizativo. El Médico Virtual no sustituye evaluación, diagnóstico, tratamiento ni seguimiento médico. Ante síntomas graves, busca atención médica inmediata.</p></Section>
        </div>
        <footer className="bg-background px-5 py-10 text-center text-xs text-muted-foreground"><p>Pago seguro · Pago único · Garantía de satisfacción</p><p className="mt-3">© 2026 — Todos los derechos reservados.</p><p className="mx-auto mt-4 max-w-xl leading-5">Política de Privacidad · Términos y Condiciones · Política de Reembolso</p></footer>
      </main>
    </>
  )
}
