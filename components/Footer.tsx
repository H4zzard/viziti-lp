import { VizitiLogo } from '@/components/ui/VizitiLogo';

const nav = [
  { label: 'Problema', href: '#problema' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Futuro', href: '#futuro' },
  { label: 'Inteligência', href: '#inteligencia' },
];

const social = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'X', href: 'https://x.com' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] py-16">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-xs">
            <VizitiLogo />
            <p className="mt-5 text-sm font-light leading-relaxed text-white/45">
              Explore antes de visitar. A plataforma de experiências espaciais
              que transforma lugares em experiências navegáveis.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                Navegação
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {nav.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm font-light text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                Social
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {social.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="mailto:contato@viziti.com"
                    className="text-sm font-light text-accent/80 transition-colors hover:text-accent"
                  >
                    contato@viziti.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} VIZITI. Todos os direitos reservados.
          </p>
          <p className="text-xs tracking-wide text-white/30">
            Explore antes de visitar.
          </p>
        </div>
      </div>
    </footer>
  );
}
