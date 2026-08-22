const groups = [
  {
    title: 'Producto',
    links: [
      { label: 'Acceso por perfiles', href: '#plataforma' },
      { label: 'Roles admin y entrenadores', href: '#plataforma' },
      { label: 'Rutinas digitales', href: '#caracteristicas' },
      { label: 'Planes y membresías', href: '#modelos' },
    ],
  },
  {
    title: 'Gimnasio',
    links: [
      { label: 'Para gimnasios', href: '#modelos' },
      { label: 'Para estudios Pilates', href: '#modelos' },
      { label: 'Control de clientes', href: '#caracteristicas' },
      { label: 'Preguntas frecuentes', href: '#faq' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Contacto', href: '#contacto' },
      { label: 'Sobre nosotros', href: '/about' },
      { label: 'WhatsApp', href: 'https://wa.me/543775439981' },
      { label: 'Instagram', href: 'https://www.instagram.com/gymple.app/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gonzzaramirez/?skipRedirect=true' },
      { label: 'Privacidad', href: '/privacy' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="px-4 pb-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-secondary px-6 py-12 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-heading text-lg font-extrabold text-foreground">
              <img
                src="/logo.png"
                alt="Gymple"
                width={32}
                height={32}
                className="size-8 rounded-lg"
              />
              Gymple
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              El software que automatiza tu gimnasio. Sistema de gestión para centros de entrenamiento en la nube.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-bold text-foreground">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Gymple. Todos los derechos reservados.</p>
          <p>Hecho con foco en gimnasios.</p>
        </div>
      </div>
    </footer>
  )
}
