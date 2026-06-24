'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { viewportOnce } from '@/lib/motion';

type Solution = {
  title: string;
  short: string;
  detail: string;
  icon: React.ReactNode;
};

const I = {
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
};

const solutions: Solution[] = [
  {
    title: 'Imobiliário',
    short: 'Venda imóveis antes da primeira visita.',
    detail:
      'Compradores percorrem cada cômodo no seu tempo, de qualquer lugar. Menos visitas vazias, decisões mais rápidas e alcance global para cada lançamento.',
    icon: (
      <svg viewBox="0 0 24 24" {...I}><path d="M3 10.5 12 4l9 6.5M5 9v11h14V9" /><path d="M10 20v-6h4v6" /></svg>
    ),
  },
  {
    title: 'Construção',
    short: 'Mostre o pronto antes de existir.',
    detail:
      'Transforme projetos e maquetes em ambientes navegáveis. Investidores e clientes experimentam o resultado final ainda na planta.',
    icon: (
      <svg viewBox="0 0 24 24" {...I}><path d="M4 21V8l8-5 8 5v13" /><path d="M9 21v-6h6v6" /><path d="M4 12h16" /></svg>
    ),
  },
  {
    title: 'Arquitetura',
    short: 'Caminhe pelo conceito, não pela prancha.',
    detail:
      'Apresente intenção espacial com profundidade real. Escala, luz e fluxo comunicam o que uma render nunca conseguiu.',
    icon: (
      <svg viewBox="0 0 24 24" {...I}><path d="M12 3v18" /><path d="m5 21 7-18 7 18" /><path d="M8 13h8" /></svg>
    ),
  },
  {
    title: 'Hotéis',
    short: 'O hóspede chega antes da reserva.',
    detail:
      'Suítes, áreas comuns e vistas explorados livremente. A expectativa vira desejo — e o desejo vira reserva confirmada.',
    icon: (
      <svg viewBox="0 0 24 24" {...I}><path d="M3 18V7h13a4 4 0 0 1 4 4v7" /><path d="M3 14h17" /><path d="M7 11h.01" /></svg>
    ),
  },
  {
    title: 'Investimento',
    short: 'Decida com presença, não com promessa.',
    detail:
      'Avalie ativos e projetos remotamente com fidelidade espacial. Diligência mais rápida, mais confiança, menos deslocamento.',
    icon: (
      <svg viewBox="0 0 24 24" {...I}><path d="M3 17l6-6 4 4 7-7" /><path d="M21 8v5h-5" /></svg>
    ),
  },
  {
    title: 'Turismo',
    short: 'Visite o destino antes de viajar.',
    detail:
      'Experiências que despertam o desejo de ir. Resorts, roteiros e atrações explorados em imersão total, em qualquer idioma.',
    icon: (
      <svg viewBox="0 0 24 24" {...I}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" /></svg>
    ),
  },
  {
    title: 'Educação',
    short: 'Aprenda dentro do espaço.',
    detail:
      'Laboratórios, museus e patrimônios acessíveis a qualquer aluno. Conhecimento que se vive, não apenas se lê.',
    icon: (
      <svg viewBox="0 0 24 24" {...I}><path d="M3 8l9-4 9 4-9 4-9-4Z" /><path d="M7 10v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5" /></svg>
    ),
  },
  {
    title: 'Cidades inteligentes',
    short: 'Planeje o território de forma imersiva.',
    detail:
      'Bairros, equipamentos urbanos e projetos públicos explorados pela população. Participação e transparência em escala espacial.',
    icon: (
      <svg viewBox="0 0 24 24" {...I}><path d="M4 21V9l5-3v15" /><path d="M9 21V5l6-2v18" /><path d="M15 21V8l5 3v10" /><path d="M2 21h20" /></svg>
    ),
  },
];

export function Solutions() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="solucoes" className="relative py-32 md:py-44">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Soluções</SectionLabel>
        </Reveal>
        <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <h2 className="max-w-2xl text-balance text-4xl font-light leading-[1.05] tracking-tightest text-white md:text-6xl">
              Um espaço.{' '}
              <span className="text-white/40">Infinitas indústrias.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-sm text-base font-light leading-relaxed text-white/50">
              A mesma tecnologia espacial, moldada para cada setor que vive de
              mostrar lugares.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={s.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(isActive ? null : i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border p-6 text-left transition-colors duration-500 ${
                  isActive
                    ? 'border-accent/30 bg-accent/[0.05]'
                    : 'border-white/[0.07] bg-white/[0.015] hover:border-white/15'
                }`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/20 blur-2xl transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-500 ${
                    isActive
                      ? 'border-accent/40 text-accent'
                      : 'border-white/10 text-white/60'
                  }`}
                >
                  <span className="h-5 w-5">{s.icon}</span>
                </span>

                <h3 className="mt-5 text-xl font-normal text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-white/55">
                  {s.short}
                </p>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.p
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden text-sm font-light leading-relaxed text-white/70"
                    >
                      {s.detail}
                    </motion.p>
                  )}
                </AnimatePresence>

                <span
                  className={`mt-5 inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300 ${
                    isActive ? 'text-accent' : 'text-white/35'
                  }`}
                >
                  {isActive ? 'Explorando' : 'Explorar'}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
