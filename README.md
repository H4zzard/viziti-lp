# VIZITI — Plataforma de Experiências Espaciais

Site oficial da VIZITI. _Explore antes de visitar._

Construído como uma experiência de produto premium — escuro por padrão, tipografia
ampla, movimento como comunicação. Sem imagens de stock, sem mockups: toda a
identidade nasce de gradientes, geometria, tipografia e animação.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS** 3.4
- **Framer Motion** 11
- 100% estático (SSG), SEO + acessibilidade AA, `prefers-reduced-motion` respeitado

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de produção:

```bash
npm run build
npm run start
```

## Estrutura

```
app/
  layout.tsx          # fonte Inter, metadata/SEO, viewport
  page.tsx            # composição das seções
  globals.css         # tema, utilitários (glass, grid, noise, gradientes)
  robots.ts | sitemap.ts
components/
  Navbar.tsx  Footer.tsx
  ui/                 # MagneticButton, Reveal, PointerGlow, VizitiLogo, SectionLabel
  hero/HeroBackground.tsx
  sections/           # Hero, Problem, SpatialExperience, HowItWorks, Solutions,
                      # Future, Marketplace, ArtificialIntelligence, Analytics,
                      # Manifesto, CallToAction
lib/motion.ts         # variantes e easings compartilhados
```

## Identidade visual

| Token        | Valor      |
| ------------ | ---------- |
| Fundo        | `#020617`  |
| Secundário   | `#081B33`  |
| Destaque     | `#00D7FF`  |
| Branco       | `#FFFFFF`  |

Tipografia: **Inter** (pesos 200–700), títulos muito grandes e leves, com bastante
espaçamento (`tracking-tightest`).
