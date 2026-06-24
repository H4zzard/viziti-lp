type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function VizitiMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 11 L20 31 L32 11"
        stroke="url(#vz-grad)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="15.5" r="2.4" fill="#00D7FF" />
      <defs>
        <linearGradient id="vz-grad" x1="8" y1="11" x2="32" y2="31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#00D7FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function VizitiLogo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <VizitiMark className="h-7 w-7" />
      {showWordmark && (
        <span className="text-[1.15rem] font-semibold tracking-[0.18em] text-white">
          VIZITI
        </span>
      )}
    </span>
  );
}
