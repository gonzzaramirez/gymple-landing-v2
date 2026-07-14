'use client'

import { motion } from 'motion/react'

const phrases = [
  'Sin Excel',
  'Clientes siempre al día',
  'Rutinas desde el celu',
  'Control total del negocio',
  'Membresías flexibles',
]

export function Marquee() {
  const items = [...phrases, ...phrases]
  return (
    <section aria-hidden className="overflow-hidden py-10">
      <motion.div
        className="flex w-max gap-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {items.map((p, i) => (
          <span
            key={i}
            className="flex items-center gap-6 whitespace-nowrap font-heading text-5xl font-extrabold tracking-tight text-foreground/15 md:text-7xl"
          >
            {p}
            <span className="text-accent">/</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}
