import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['200', '300', '400', '500', '600'],
});

const siteUrl = 'https://viziti.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'VIZITI — Explore antes de visitar',
    template: '%s · VIZITI',
  },
  description:
    'VIZITI é a plataforma de experiências espaciais. Transformamos modelos 3D, vídeos 3D e imagens 360 em experiências totalmente navegáveis. Explore antes de visitar.',
  keywords: [
    'VIZITI',
    'experiência espacial',
    'tour virtual',
    'imersão 3D',
    'exploração de espaços',
    'imobiliário',
    'arquitetura',
    'plataforma espacial',
  ],
  authors: [{ name: 'VIZITI' }],
  creator: 'VIZITI',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'VIZITI',
    title: 'VIZITI — Explore antes de visitar',
    description:
      'A plataforma de próxima geração para experiências espaciais imersivas. Nós não mostramos lugares — deixamos as pessoas vivê-los.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIZITI — Explore antes de visitar',
    description:
      'A plataforma de experiências espaciais. Explore, navegue e viva os espaços antes da realidade começar.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-base text-ink antialiased font-sans">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-base"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
