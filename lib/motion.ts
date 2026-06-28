import type { Variants } from 'framer-motion';

// Premium easing curve used across the site
export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.83, 0, 0.17, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, ease: easeOut } },
};

// Reveal leve — apenas opacity + deslocamento (sem filter: blur, que trava em mobile)
export const blurUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: easeOut },
  },
};

export const viewportOnce = { once: true, amount: 0.2, margin: '0px 0px -10% 0px' } as const;
