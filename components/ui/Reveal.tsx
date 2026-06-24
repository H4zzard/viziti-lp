'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { blurUp, viewportOnce } from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'span' | 'li' | 'h2' | 'p';
};

export function Reveal({
  children,
  variants = blurUp,
  className,
  delay = 0,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
