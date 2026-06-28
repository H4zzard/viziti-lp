'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const lines = [
  { text: 'O mundo foi feito para ser explorado.', dim: false },
  { text: 'Os mapas mudaram como navegamos.', dim: true },
  { text: 'A internet mudou como descobrimos.', dim: true },
  { text: 'A VIZITI muda como experimentamos espaços.', dim: false },
  { text: 'Nós não criamos tours virtuais.', dim: true },
  { text: 'Criamos o futuro da exploração.', dim: false },
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.04, 0.12, 0.04]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-36">
      <motion.div
        aria-hidden
        style={{ opacity: glow }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[90px]"
      />
      <div className="container-x relative">
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.3em] text-accent/70 md:mb-14">
          Manifesto
        </p>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          {lines.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`text-balance text-3xl font-extralight leading-[1.15] tracking-tightest sm:text-4xl md:text-5xl ${
                l.dim ? 'text-white/40' : 'text-white'
              }`}
            >
              {l.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
