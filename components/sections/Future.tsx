'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { viewportOnce } from '@/lib/motion';

const milestones = [
  {
    tag: 'Hoje',
    title: 'Experiências imersivas',
    desc: 'Espaços reais transformados em ambientes navegáveis.',
    active: true,
  },
  {
    tag: 'Em breve',
    title: 'Guia com IA',
    desc: 'Um anfitrião inteligente que conduz cada exploração.',
  },
  {
    tag: 'Próximo',
    title: 'Marketplace',
    desc: 'Milhões de espaços conectados em um único ecossistema.',
  },
  {
    tag: 'Adiante',
    title: 'Inteligência espacial',
    desc: 'Dados de comportamento que antecipam intenção e decisão.',
  },
  {
    tag: 'Visão',
    title: 'Plataforma global de exploração',
    desc: 'A camada de exploração do mundo físico inteiro.',
  },
];

export function Future() {
  return (
    <section id="futuro" className="relative overflow-hidden py-32 md:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-accent/[0.05] blur-[150px]"
      />
      <div className="container-x">
        <Reveal>
          <SectionLabel>Roadmap</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="mt-7 max-w-3xl text-balance text-4xl font-light leading-[1.05] tracking-tightest text-white md:text-6xl">
            Estamos construindo o futuro{' '}
            <span className="text-white/40">da exploração espacial.</span>
          </h2>
        </Reveal>

        <div className="relative mt-20">
          {/* horizontal track on desktop */}
          <div className="absolute left-0 right-0 top-[1.35rem] hidden h-px bg-white/10 lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full origin-left bg-gradient-to-r from-accent via-accent/40 to-transparent"
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative pl-8 lg:pl-0 lg:pt-12"
              >
                {/* node */}
                <span
                  className={`absolute left-0 top-1 lg:left-0 lg:top-[0.85rem] flex h-3.5 w-3.5 items-center justify-center rounded-full ${
                    m.active
                      ? 'bg-accent shadow-[0_0_14px_3px_rgba(0,215,255,0.6)]'
                      : 'border border-white/25 bg-base'
                  }`}
                />
                {/* vertical track on mobile */}
                {i < milestones.length - 1 && (
                  <span className="absolute left-[0.4rem] top-5 h-[calc(100%+2.5rem)] w-px bg-white/10 lg:hidden" />
                )}

                <span
                  className={`text-xs font-medium uppercase tracking-[0.2em] ${
                    m.active ? 'text-accent' : 'text-white/40'
                  }`}
                >
                  {m.tag}
                </span>
                <h3 className="mt-3 text-xl font-normal leading-snug text-white">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/50">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
