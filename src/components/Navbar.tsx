'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PillButton } from '@/components/ui/pill-button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Modelos', href: '#modelos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Preguntas', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          'flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2 transition-all duration-300',
          scrolled
            ? 'bg-card/80 shadow-lg shadow-black/5 ring-1 ring-border backdrop-blur-md'
            : 'bg-transparent',
        )}
      >
        <a href="#top" className="flex items-center gap-2 pl-2 font-heading text-lg font-extrabold text-foreground">
          <img
            src="/logo.png"
            alt="Gymple"
            width={32}
            height={32}
            className="size-8 rounded-lg"
          />
          Gymple
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#contacto"
            className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Ingresar
          </a>
          <PillButton href="#contacto">Probar gratis</PillButton>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="absolute left-4 right-4 top-20 rounded-3xl bg-card p-4 shadow-xl ring-1 ring-border md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <PillButton href="#contacto" className="mt-3 w-full justify-center">
            Probar gratis
          </PillButton>
        </div>
      )}
    </header>
  )
}
