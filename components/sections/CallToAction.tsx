'use client';

import { Reveal } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function CallToAction() {
  return (
    <section id="contato" className="relative px-4 pb-10">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:rounded-[2.5rem] md:px-12 md:py-24">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  'radial-gradient(100% 120% at 50% 0%, rgba(0,215,255,0.16), transparent 60%), #081B33',
              }}
            />
            <div className="grid-bg absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent/80">
              Comece agora
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-light leading-[1.05] tracking-tightest text-white sm:text-4xl md:text-6xl">
              Pronto para deixar as pessoas explorarem antes de visitar?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/55">
              Transforme seus espaços em experiências imersivas e descubra o que
              acontece quando a exploração começa antes da realidade.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton href="mailto:contato@viziti.com" variant="primary">
                Explorar plataforma
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MagneticButton>
              <MagneticButton href="#topo" variant="ghost">
                Falar com a equipe
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
