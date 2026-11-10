'use client'

import { cn } from '@/lib/utils'

type BrowserFrameProps = {
  src: string
  alt: string
  width?: number
  height?: number
  url?: string
  className?: string
  imgClassName?: string
  eager?: boolean
}

/**
 * Marco browser premium estilo Cult UI para que las capturas del demo
 * no se vean crudas: chrome macOS, pill de URL, glow y anillo.
 */
export function BrowserFrame({
  src,
  alt,
  width = 1366,
  height = 900,
  url = 'demo.gymple.online',
  className,
  imgClassName,
  eager = false,
}: BrowserFrameProps) {
  return (
    <div className={cn('relative', className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-accent/25 via-accent/10 to-transparent blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-2xl shadow-black/20 ring-1 ring-border">
        <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden>
            <i className="size-2.5 rounded-full bg-[#FF5F57]" />
            <i className="size-2.5 rounded-full bg-[#FEBC2E]" />
            <i className="size-2.5 rounded-full bg-[#28C840]" />
          </span>
          <span className="mx-auto flex max-w-full items-center gap-2 truncate rounded-full bg-background px-4 py-1 text-xs text-muted-foreground ring-1 ring-border">
            <svg viewBox="0 0 24 24" className="size-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
              <rect x="4" y="10" width="16" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            <span className="truncate">{url}</span>
          </span>
          <span className="hidden items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 sm:inline-flex dark:text-emerald-400">
            <i className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
            En vivo
          </span>
        </div>
        <div className="relative overflow-hidden bg-background">
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className={cn('h-auto w-full object-cover object-top', imgClassName)}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/40 to-transparent"
          />
        </div>
      </div>
    </div>
  )
}
