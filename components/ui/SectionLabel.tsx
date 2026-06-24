import type { ReactNode } from 'react';

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.28em] text-accent/80">
      <span className="h-px w-7 bg-accent/50" />
      {children}
    </span>
  );
}
