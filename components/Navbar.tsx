'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { VizitiLogo } from '@/components/ui/VizitiLogo';

const links = [
  { label: 'Problema', href: '#problema' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Futuro', href: '#futuro' },
  { label: 'Inteligência', href: '#inteligencia' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-container items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-5 ${
          scrolled
            ? 'glass hairline shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]'
            : 'border border-transparent'
        }`}
      >
        <a href="#topo" aria-label="VIZITI — início" className="pl-1">
          <VizitiLogo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-white/65 transition-colors duration-300 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-base transition-colors duration-300 hover:bg-white md:inline-block"
          >
            Explorar plataforma
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full hairline md:hidden"
          >
            <div className="flex flex-col gap-1">
              <span
                className={`h-px w-5 bg-white transition-all duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
              />
              <span
                className={`h-px w-5 bg-white transition-all duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="glass hairline absolute left-4 right-4 top-[4.5rem] rounded-3xl p-4 md:hidden"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-accent px-4 py-3 text-center font-medium text-base"
              >
                Explorar plataforma
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
