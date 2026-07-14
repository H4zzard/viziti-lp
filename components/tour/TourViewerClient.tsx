'use client';

import dynamic from 'next/dynamic';

// TourViewer usa WebGL/document/window dentro de useEffect (só roda no
// cliente), mas o carregamento dinâmico com ssr:false evita qualquer risco
// de o Next tentar montar/hidratar essa árvore no servidor.
export const TourViewerClient = dynamic(
  () => import('./TourViewer').then((mod) => mod.TourViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-black text-sm text-white/60">
        Carregando tour...
      </div>
    ),
  },
);
