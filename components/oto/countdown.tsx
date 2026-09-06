'use client'

import { useEffect, useState } from 'react'

/** Countdown that starts at 10:00 and counts down to zero, persisting per session. */
export function Countdown({ startSeconds = 600 }: { startSeconds?: number }) {
  const [remaining, setRemaining] = useState(startSeconds)

  useEffect(() => {
    const key = 'oto-countdown-deadline'
    let deadline = Number(sessionStorage.getItem(key))
    if (!deadline || Number.isNaN(deadline) || deadline < Date.now()) {
      deadline = Date.now() + startSeconds * 1000
      sessionStorage.setItem(key, String(deadline))
    }
    const tick = () => {
      const secs = Math.max(0, Math.round((deadline - Date.now()) / 1000))
      setRemaining(secs)
    }
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [startSeconds])

  const minutes = Math.floor(remaining / 60)
  const seconds = remaining % 60
  const expired = remaining <= 0

  const Cell = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="flex min-w-[4.5rem] items-center justify-center rounded-2xl bg-foreground px-4 py-3 font-display text-4xl font-extrabold tabular-nums text-background shadow-lg sm:min-w-[5.5rem] sm:text-5xl">
        {value}
      </div>
      <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  )

  return (
    <div>
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <Cell value={String(minutes).padStart(2, '0')} label="Minutos" />
        <span className="pb-6 font-display text-4xl font-extrabold text-primary sm:text-5xl">:</span>
        <Cell value={String(seconds).padStart(2, '0')} label="Segundos" />
      </div>
      {expired ? (
        <p className="mt-4 text-center text-sm font-bold uppercase tracking-wide text-destructive">
          Oferta expirando — actúa ahora
        </p>
      ) : null}
    </div>
  )
}
