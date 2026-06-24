'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { viewportOnce } from '@/lib/motion';

const actions = ['Buscar', 'Explorar', 'Comparar', 'Visitar', 'Investir'];

// deterministic node positions (percent) — a constellation of connected spaces
const nodes = [
  { x: 50, y: 50, r: 4, main: true },
  { x: 22, y: 30, r: 2.5 },
  { x: 78, y: 28, r: 3 },
  { x: 30, y: 72, r: 2.5 },
  { x: 70, y: 74, r: 3 },
  { x: 14, y: 55, r: 2 },
  { x: 88, y: 56, r: 2 },
  { x: 50, y: 16, r: 2.5 },
  { x: 50, y: 86, r: 2.5 },
  { x: 38, y: 44, r: 1.8 },
  { x: 64, y: 58, r: 1.8 },
];

export function Marketplace() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionLabel>Visão de marketplace</SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="mt-7 text-balance text-3xl font-light leading-[1.05] tracking-tightest text-white sm:text-4xl md:text-6xl">
                Imagine milhões de espaços{' '}
                <span className="text-gradient-accent font-normal">conectados.</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/55">
                Um único ecossistema onde cada ambiente do mundo pode ser
                encontrado, explorado e comparado — antes de qualquer visita.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-3">
              {actions.map((a, i) => (
                <motion.span
                  key={a}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-light text-white/75"
                >
                  {a}
                </motion.span>
              ))}
            </div>
          </div>

          {/* constellation visualization */}
          <Reveal variants={undefined} className="">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div
                aria-hidden
                className="absolute inset-[12%] rounded-full bg-accent/[0.06] blur-3xl"
              />
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                {/* connections to the core */}
                {nodes.slice(1).map((n, i) => (
                  <motion.line
                    key={`l-${i}`}
                    x1={50}
                    y1={50}
                    x2={n.x}
                    y2={n.y}
                    stroke="rgba(0,215,255,0.22)"
                    strokeWidth={0.3}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 1, delay: 0.2 + i * 0.07 }}
                  />
                ))}
                {nodes.map((n, i) => (
                  <motion.circle
                    key={`n-${i}`}
                    cx={n.x}
                    cy={n.y}
                    r={n.r}
                    fill={n.main ? '#00D7FF' : 'rgba(255,255,255,0.85)'}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  >
                    {n.main && !reduce && (
                      <animate
                        attributeName="opacity"
                        values="1;0.5;1"
                        dur="2.4s"
                        repeatCount="indefinite"
                      />
                    )}
                  </motion.circle>
                ))}
              </svg>

              {/* rotating ring */}
              <motion.div
                aria-hidden
                className="absolute inset-[6%] rounded-full border border-dashed border-white/10"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
