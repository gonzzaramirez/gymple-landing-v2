'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

/**
 * Placeholder mockup reutilizable.
 * Se usa la MISMA imagen en todas las secciones — reemplazá `/mockup.png`
 * por la captura real de cada sección cuando quieras.
 */
export function Mockup({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative overflow-hidden rounded-3xl bg-primary p-3 shadow-2xl shadow-primary/20',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.55_0.12_150/0.6),transparent_60%)]" />
      <div className="relative overflow-hidden rounded-2xl bg-card ring-1 ring-black/5">
        <img
          src="/mockup.png"
          alt="Vista del panel de Gymple"
          width={1200}
          height={820}
          className="h-auto w-full object-cover"
        />
      </div>
    </motion.div>
  )
}
