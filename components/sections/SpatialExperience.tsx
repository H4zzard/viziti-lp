'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function SpatialExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.2, 1, 1, 0.2],
  );

  return (
    <section
      id="experiencia-espacial"
      ref={ref}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-20 md:min-h-[80vh] md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[140px]"
      />

      <motion.div style={{ y, opacity }} className="container-x text-center">
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.3em] text-accent/70">
          Experiência espacial
        </p>
        <h2 className="mx-auto max-w-5xl text-balance text-3xl font-extralight leading-[1.08] tracking-tightest text-white sm:text-5xl md:text-7xl lg:text-[5rem]">
          Nós não mostramos lugares.
          <br />
          <span className="text-gradient-accent font-light">
            Deixamos as pessoas vivê-los.
          </span>
        </h2>
      </motion.div>
    </section>
  );
}
