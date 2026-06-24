'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { viewportOnce } from '@/lib/motion';

const insights = [
  { label: 'Mapas de calor', desc: 'Onde a atenção se concentra em cada ambiente.' },
  { label: 'Rotas de navegação', desc: 'O caminho real que cada visitante percorre.' },
  { label: 'Comportamento', desc: 'Tempo, hesitação e interesse por espaço.' },
  { label: 'Conversão', desc: 'Da exploração à decisão, em um só painel.' },
];

// deterministic bars
const bars = [38, 56, 72, 48, 88, 64, 80, 52, 70];

export function Analytics() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          {/* dashboard */}
          <Reveal>
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-accent/[0.05] blur-3xl"
              />
              <div className="glass hairline relative overflow-hidden rounded-[1.75rem] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/45">Engajamento espacial</p>
                    <p className="mt-1 text-2xl font-light text-white">
                      Painel ao vivo
                    </p>
                  </div>
                  <span className="flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1.5 text-xs text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Tempo real
                  </span>
                </div>

                {/* heatmap floorplan */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {heat.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.5, delay: i * 0.04 }}
                      className="relative h-16 rounded-lg border border-white/[0.06]"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, rgba(0,215,255,${h}), transparent 75%)`,
                      }}
                    />
                  ))}
                </div>

                {/* bar chart */}
                <div className="mt-6 flex h-28 items-end gap-2">
                  {bars.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${b}%` }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-accent/20 to-accent"
                    />
                  ))}
                </div>

                {/* navigation path line */}
                <svg viewBox="0 0 300 60" className="mt-5 w-full">
                  <motion.path
                    d="M5 50 C 60 10, 90 55, 140 30 S 230 5, 295 35"
                    fill="none"
                    stroke="#00D7FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 1.6, ease: 'easeInOut' }}
                  />
                  {!reduce && (
                    <motion.circle r="3" fill="#fff">
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path="M5 50 C 60 10, 90 55, 140 30 S 230 5, 295 35"
                      />
                    </motion.circle>
                  )}
                </svg>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div className="lg:pl-6">
            <Reveal>
              <SectionLabel>Analytics</SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="mt-7 text-balance text-4xl font-light leading-[1.05] tracking-tightest text-white md:text-6xl">
                Cada exploração{' '}
                <span className="text-white/40">conta uma história.</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/55">
                Transformamos movimento em inteligência. Sem gráficos genéricos —
                apenas a leitura precisa de como as pessoas vivem cada espaço.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] sm:grid-cols-2">
              {insights.map((it, i) => (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white/[0.015] p-5"
                >
                  <p className="text-base font-normal text-white">{it.label}</p>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-white/50">
                    {it.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// deterministic heat intensities for the 3x3 floorplan
const heat = [0.1, 0.28, 0.16, 0.34, 0.62, 0.4, 0.18, 0.46, 0.22];
