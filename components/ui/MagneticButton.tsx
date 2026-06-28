import type { ReactNode } from 'react';

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
  ariaLabel?: string;
};

/**
 * Botão/link de destaque. Estático e leve — sem efeitos que seguem o cursor.
 */
export function MagneticButton({
  children,
  href = '#',
  onClick,
  variant = 'primary',
  className = '',
  ariaLabel,
}: MagneticButtonProps) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-medium tracking-tight transition-colors duration-300';

  const styles =
    variant === 'primary'
      ? 'bg-accent text-base hover:bg-white'
      : 'text-white/80 hover:text-white border border-white/15 hover:border-white/30 bg-white/[0.02]';

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}
