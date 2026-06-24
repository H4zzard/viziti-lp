'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { viewportOnce } from '@/lib/motion';

export function ArtificialIntelligence() {
  return (
    <section id="inteligencia" className="relative py-32 md:py-44">
      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <SectionLabel>Inteligência artificial</SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="mt-7 text-balance text-4xl font-light leading-[1.05] tracking-tightest text-white md:text-6xl">
                Um guia que vive{' '}
                <span className="text-white/40">dentro da experiência.</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/55">
                A IA da VIZITI entende o espaço e a intenção de quem explora.
                Ela conversa, sugere caminhos e responde — como um anfitrião que
                conhece cada detalhe do ambiente.
              </p>
            </Reveal>
          </div>

          {/* chat mockup */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-md">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-accent/[0.06] blur-3xl"
              />
              <div className="glass hairline relative overflow-hidden rounded-[1.75rem] p-5">
                {/* header */}
                <div className="flex items-center gap-3 border-b border-white/[0.07] pb-4">
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent/15">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(0,215,255,0.7)]" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">Guia VIZITI</p>
                    <p className="text-xs text-white/40">Acompanhando a exploração</p>
                  </div>
                </div>

                {/* messages */}
                <div className="flex flex-col gap-3 py-5">
                  <ChatBubble from="ai" delay={0.1}>
                    Olá, Alexandre. Você gostaria de explorar o rooftop ou a
                    suíte master primeiro?
                  </ChatBubble>
                  <ChatBubble from="user" delay={0.35}>
                    Vamos começar pelo rooftop.
                  </ChatBubble>
                  <ChatBubble from="ai" delay={0.6}>
                    Perfeito. Estou te levando até lá — repare na vista ao
                    entardecer e no espaço para receber convidados.
                  </ChatBubble>
                  <Typing delay={0.95} />
                </div>

                {/* input */}
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-base/40 px-4 py-3">
                  <span className="text-sm text-white/35">
                    Pergunte sobre este espaço…
                  </span>
                  <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-accent">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M7 11V3M3.5 6.5 7 3l3.5 3.5" stroke="#020617" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({
  from,
  children,
  delay,
}: {
  from: 'ai' | 'user';
  children: React.ReactNode;
  delay: number;
}) {
  const isAI = from === 'ai';
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm font-light leading-relaxed ${
        isAI
          ? 'self-start rounded-tl-md border border-white/10 bg-white/[0.04] text-white/85'
          : 'self-end rounded-tr-md bg-accent text-base'
      }`}
    >
      {children}
    </motion.div>
  );
}

function Typing({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-1.5 self-start rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] px-4 py-3.5"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-accent/80"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </motion.div>
  );
}
