import { Mail, MessageCircle, AtSign } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { PillButton } from '@/components/ui/pill-button'

export function Cta() {
  return (
    <section id="contacto" className="px-4 py-10 md:py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground md:px-14 md:py-16">
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-accent/25 blur-3xl" />
        <div className="bg-grain pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-balance text-3xl font-extrabold leading-tight md:text-5xl">
              Empezá a recuperar tu tiempo
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-pretty text-primary-foreground/70 md:text-lg">
              En 15 minutos te mostramos cómo Gymple automatiza tu cobranza y ordena tu gestión. Sin compromiso.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PillButton href="#" variant="accent">
                Probar gratis 14 días
              </PillButton>
              <a
                href="https://wa.me/543775439981"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-5 py-2.5 text-sm font-semibold ring-1 ring-primary-foreground/15 transition-colors hover:bg-primary-foreground/20"
              >
                <MessageCircle className="size-4" />
                Hablar por WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
              <a href="mailto:gonza37754@gmail.com" className="inline-flex items-center gap-2 hover:text-primary-foreground">
                <Mail className="size-4" /> gonza37754@gmail.com
              </a>
              <a href="https://www.instagram.com/gymple.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary-foreground">
                <AtSign className="size-4" /> @gymple.app
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
