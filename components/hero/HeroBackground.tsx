'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Animated hero backdrop — a slow aurora of accent light behind a fine grid,
 * built purely from gradients + geometry. No images.
 */
export function HeroBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base radial wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% -10%, rgba(0,215,255,0.16), transparent 55%), radial-gradient(80% 60% at 80% 110%, rgba(8,27,51,0.9), transparent 60%)',
        }}
      />

      {/* fine grid */}
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_30%,black,transparent)]" />

      {/* drifting aurora blobs */}
      {!reduce && (
        <>
          <motion.div
            className="absolute left-1/2 top-[18%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-[120px]"
            style={{
              background:
                'radial-gradient(circle, rgba(0,215,255,0.22), transparent 65%)',
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-[20%] top-[40%] h-[24rem] w-[24rem] rounded-full blur-[110px]"
            style={{
              background:
                'radial-gradient(circle, rgba(0,215,255,0.12), transparent 70%)',
            }}
            animate={{ x: [0, 40, 0], y: [0, -24, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-[16%] top-[30%] h-[20rem] w-[20rem] rounded-full blur-[110px]"
            style={{
              background:
                'radial-gradient(circle, rgba(99,102,241,0.14), transparent 70%)',
            }}
            animate={{ x: [0, -36, 0], y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* the portal — concentric rings drawing the eye into the space */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
            style={{ width: 220 + i * 170, height: 220 + i * 170 }}
            animate={
              reduce
                ? undefined
                : { opacity: [0.05, 0.35, 0.05], scale: [0.98, 1.02, 0.98] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-base" />
    </div>
  );
}
