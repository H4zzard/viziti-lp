'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const oldWay = [
  { label: 'Fotos', desc: 'Recortes estáticos de um instante.' },
  { label: 'Vídeos', desc: 'Um caminho único, definido por outra pessoa.' },
  { label: 'Tours virtuais', desc: 'Pulos entre pontos, sem continuidade.' },
];

const newWay = [
  { label: 'Explore', desc: 'Mova-se livremente por cada ambiente.' },
  { label: 'Navegue', desc: 'Decida para onde olhar e por onde ir.' },
  { label: 'Vivencie', desc: 'Sinta a escala, a luz e a profundidade do espaço.' },
];

export function Problem() {
  return (
    <section id="problema" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionLabel>O problema</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="mt-7 max-w-3xl text-balance text-3xl font-light leading-[1.05] tracking-tightest text-white sm:text-4xl md:text-6xl">
            A forma como mostramos espaços{' '}
            <span className="text-white/40">parou no tempo.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 md:mt-20 lg:grid-cols-[1fr_auto_1fr]">
          {/* OLD */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={viewportOnce}
            className="rounded-3xl border border-white/[0.06] bg-white/[0.015] p-6 md:p-8"
          >
            <p className="mb-8 text-sm uppercase tracking-[0.2em] text-white/40">
              Hoje
            </p>
            <div className="flex flex-col gap-3">
              {oldWay.map((it) => (
                <motion.div
                  key={it.label}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/[0.06] bg-base/40 px-5 py-4"
                >
                  <p className="text-lg font-light text-white/85">{it.label}</p>
                  <p className="mt-1 text-sm text-white/45">{it.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-sm font-light leading-relaxed text-white/40">
              Desconectado. Estático. Limitado.
            </p>
          </motion.div>

          {/* TRANSITION ARROW */}
          <div className="flex items-center justify-center py-4 lg:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.06]"
            >
              <motion.svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className="rotate-90 text-accent lg:rotate-0"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M4 11h13M12 6l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.div>
          </div>

          {/* NEW */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-b from-accent/[0.08] to-transparent p-6 md:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl"
            />
            <p className="mb-8 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-accent">
              VIZITI
            </p>
            <div className="flex flex-col gap-3">
              {newWay.map((it) => (
                <motion.div
                  key={it.label}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <p className="text-lg font-light text-white">{it.label}</p>
                  <p className="mt-1 text-sm text-white/55">{it.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-sm font-light leading-relaxed text-white/70">
              Conectado. Vivo. Sem limites.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
