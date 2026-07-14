'use client'

import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type PillButtonProps = {
  variant?: 'dark' | 'light' | 'accent'
  withArrow?: boolean
  magnetic?: boolean
} & ComponentProps<'a'>

export function PillButton({
  variant = 'dark',
  withArrow = true,
  magnetic = true,
  className,
  children,
  ...props
}: PillButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el || !magnetic) return
      // Skip magnetic pull on touch / coarse pointers
      if (window.matchMedia('(pointer: coarse)').matches) return

      const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const relX = e.clientX - (rect.left + rect.width / 2)
        const relY = e.clientY - (rect.top + rect.height / 2)
        xTo(relX * 0.35)
        yTo(relY * 0.35)
      }
      const onLeave = () => {
        xTo(0)
        yTo(0)
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      return () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      }
    },
    { scope: ref, dependencies: [magnetic] },
  )

  const styles = {
    dark: 'bg-primary text-primary-foreground',
    light: 'bg-card text-foreground ring-1 ring-border',
    accent: 'bg-accent text-accent-foreground',
  }[variant]

  const arrowStyles = {
    dark: 'bg-primary-foreground text-primary',
    light: 'bg-foreground text-card',
    accent: 'bg-accent-foreground text-accent',
  }[variant]

  return (
    <a
      ref={ref}
      className={cn(
        'group inline-flex items-center gap-2 rounded-full py-1.5 pl-5 pr-1.5 text-sm font-semibold transition-colors will-change-transform',
        styles,
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <span
          className={cn(
            'flex size-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45',
            arrowStyles,
          )}
        >
          <ArrowUpRight className="size-4" strokeWidth={2.5} />
        </span>
      )}
    </a>
  )
}
