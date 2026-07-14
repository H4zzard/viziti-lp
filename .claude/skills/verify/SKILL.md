# Verify: viziti-lp (landing Next.js + tour virtual 360)

## Build/launch

```bash
npm run dev            # porta 3000, pronto em ~2s
```

Superfícies:
- `http://localhost:3000/tour/demo` — tour 360 fullscreen (o `[id]` da rota é ignorado; payload congelado em `lib/tour/tour-data.ts`).
- `http://localhost:3000/#demo` — seção LiveDemo da landing; o viewer só monta após clicar no botão de play (`#demo button`).

## Drive (tour 360 = WebGL, precisa de browser)

Playwright funciona headless; os browsers já estão em `~/Library/Caches/ms-playwright` (instalar só o pacote npm `playwright` no scratchpad). O canvas WebGL não expõe DOM para os hotspots — eles são meshes three.js:

- Pronto quando `.tour-viewer__hint` aparece (preload de 42 panoramas).
- Discos de navegação: clicar via `page.mouse.click(x, y)` nas coordenadas do disco (tirar screenshot e olhar). Hover seta `cursor: pointer` inline no canvas e mostra label `.mp-spot__label`.
- Transição em andamento: `document.body.classList.contains('is-transitioning')` (push de hotspot adiciona também `is-walking`; jump do menu não).
- Menu lateral: `.tour-viewer__nav-toggle` abre, botões dentro de `.tour-viewer__nav` fazem jump (fade); ativo = `.is-active`.
- Erros: escutar `pageerror` — o viewer não loga nada em operação normal.

## Flows que valem checar

1. Cena inicial mostra vários discos no chão, perto = maior.
2. Clique num disco → dolly na direção do destino + crossfade, sem escurecer (luminância do frame do meio ≈ média entre início/fim) e sem zoom de FOV.
3. Swap invisível: último frame em transição vs primeiro após ≈ idênticos.
4. Clique duplo rápido não inicia duas transições (guard `transitioning`).
5. Drag gira a câmera e não navega.
6. Sair da página não gera erros (dispose).

## Gotchas

- Deletar/renomear arquivo com o dev server rodando corrompe o cache do Next (`__webpack_modules__[moduleId] is not a function`, 404/500 intermitente nas rotas) — matar o server, `rm -rf .next`, subir de novo.
- Se a porta 3000 estiver ocupada (dev server do usuário), o Next sobe na 3001 — conferir o `dev.log` antes de apontar o browser.

- Dados do tour vêm do maper 3k (`/Users/igor/Desktop/development/maper 3k/server/tours.db`); para regenerar conexões: `node server/scripts/rebuild-connections.js <tour_id>` lá, depois re-exportar `lib/tour/tour-data.ts` (fotos ficam em `public/tour/`, não mudam).
