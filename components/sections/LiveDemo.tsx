'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { TourViewerClient } from '@/components/tour/TourViewerClient';

export function LiveDemo() {
  const [active, setActive] = useState(false);

  return (
    <section id="demo" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[100px]"
      />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-accent/70">
            Experiência ao vivo
          </p>
          <h2 className="mx-auto max-w-4xl text-balance text-3xl font-extralight leading-[1.08] tracking-tightest text-white sm:text-5xl md:text-6xl">
            Caminhe por um ambiente real,
            <br />
            <span className="text-gradient-accent font-light">agora.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-white/60 md:text-base">
            Este tour foi gerado automaticamente a partir de um único vídeo
            360°: a trajetória da câmera vira pontos de navegação e você anda
            pelo espaço clicando no chão — como numa visita presencial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="hairline relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl bg-surface shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]"
        >
          {active && <TourViewerClient />}

          {!active && (
            <button
              type="button"
              onClick={() => setActive(true)}
              className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-base/40 backdrop-blur-[2px] transition-colors duration-300 hover:bg-base/25"
              aria-label="Ativar o tour interativo"
            >
              <span className="relative flex h-16 w-16 items-center justify-center">
                <span className="absolute inset-0 animate-pulse-ring rounded-full border border-accent/60" />
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-base shadow-[0_0_40px_rgba(0,215,255,0.35)] transition-transform duration-300 group-hover:scale-105">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 3l14 9-14 9V3z" fill="currentColor" stroke="none" />
                  </svg>
                </span>
              </span>
              <span className="text-sm font-medium text-white">
                Clique para explorar
              </span>
              <span className="text-xs text-white/50">
                Arraste para olhar · clique no chão para caminhar
              </span>
            </button>
          )}

          {active && (
            <a
              href="/tour/demo"
              target="_blank"
              rel="noreferrer"
              className="glass hairline absolute bottom-3 right-3 rounded-full px-4 py-2 text-xs font-medium text-white/80 transition-colors duration-300 hover:text-accent"
            >
              Abrir em tela cheia ↗
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
