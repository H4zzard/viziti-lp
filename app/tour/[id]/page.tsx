import type { Metadata } from 'next';
import Link from 'next/link';

import { TourViewerClient } from '@/components/tour/TourViewerClient';

export const metadata: Metadata = {
  title: 'Tour Virtual 360°',
  description:
    'Navegue pelo ambiente em 360° — clique nos pontos no chão para caminhar entre os cômodos, como numa visita presencial.',
  robots: { index: false },
};

export default function TourPage() {
  return (
    <div className="fixed inset-0 flex flex-col bg-base">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-base/90 px-4 backdrop-blur sm:px-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-tightest text-ink transition-colors hover:text-accent"
        >
          VIZITI
        </Link>
        <p className="hidden text-xs text-white/50 sm:block">
          Clique nos pontos no chão para caminhar · arraste para olhar ao redor
        </p>
        <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-accent">
          Tour 360°
        </span>
      </header>
      <div className="relative flex-1">
        <TourViewerClient />
      </div>
    </div>
  );
}
