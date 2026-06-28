'use client';

import { motion } from 'framer-motion';
import { HeroBackground } from '@/components/hero/HeroBackground';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { easeOut } from '@/lib/motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOut },
  },
};

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-x relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-white/70"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Plataforma de Experiências Espaciais
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-5xl text-balance text-5xl font-light leading-[0.98] tracking-tightest text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Explore espaços antes
          <br className="hidden sm:block" /> da{' '}
          <span className="text-gradient-accent font-normal">realidade</span> começar.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-balance text-lg font-light leading-relaxed text-white/60 md:text-xl"
        >
          A plataforma de próxima geração para experiências espaciais imersivas.
          Nós não mostramos lugares — deixamos as pessoas vivê-los.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#contato" variant="primary">
            Explorar plataforma
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MagneticButton>
          <MagneticButton href="#experiencia-espacial" variant="ghost">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 2.5v9l8-4.5-8-4.5Z" fill="currentColor" />
            </svg>
            Ver experiência
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* portal entry hint */}
      <motion.a
        href="#problema"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            className="h-1.5 w-1 rounded-full bg-accent"
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.a>
    </section>
  );
}
