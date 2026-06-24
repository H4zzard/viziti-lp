'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { viewportOnce } from '@/lib/motion';

const steps = [
  {
    n: '01',
    title: 'Capturar',
    desc: 'Modelos 3D, vídeos 3D e imagens 360 do espaço real.',
  },
  {
    n: '02',
    title: 'Processar',
    desc: 'Nossa engine reconstrói geometria, profundidade e luz.',
  },
  {
    n: '03',
    title: 'Transformar',
    desc: 'O espaço vira uma experiência navegável em tempo real.',
  },
  {
    n: '04',
    title: 'Explorar',
    desc: 'Qualquer pessoa percorre o ambiente de forma natural.',
  },
  {
    n: '05',
    title: 'Analisar',
    desc: 'Cada movimento revela intenção, interesse e comportamento.',
  },
  {
    n: '06',
    title: 'Converter',
    desc: 'A exploração se transforma em decisão, visita e negócio.',
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.7', 'end 0.4'],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="como-funciona" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Como funciona</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="mt-7 max-w-3xl text-balance text-3xl font-light leading-[1.05] tracking-tightest text-white sm:text-4xl md:text-6xl">
            Do espaço físico à experiência viva,{' '}
            <span className="text-white/40">em seis etapas.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-12 pl-2 md:mt-20">
          {/* track */}
          <div className="absolute left-[1.05rem] top-2 bottom-2 w-px bg-white/10 md:left-[1.55rem]" />
          {/* progress */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[1.05rem] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent to-accent/0 md:left-[1.55rem]"
          />

          <div className="flex flex-col gap-8 md:gap-14">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                className="relative flex items-start gap-6 pl-12 md:pl-20"
              >
                {/* node */}
                <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-base md:h-12 md:w-12">
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(0,215,255,0.6)]" />
                </span>

                <div className="flex flex-1 flex-col gap-1 border-b border-white/[0.06] pb-8 md:flex-row md:items-baseline md:justify-between md:gap-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-medium tabular-nums text-accent/60">
                      {s.n}
                    </span>
                    <h3 className="text-2xl font-light text-white md:text-3xl">
                      {s.title}
                    </h3>
                  </div>
                  <p className="max-w-md text-base font-light leading-relaxed text-white/50 md:text-right">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
