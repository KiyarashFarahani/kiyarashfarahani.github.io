"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, ExternalLink, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import BlurText from "./BlurText";

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function ReachPage() {
  const { dict, locale } = useLocale();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    queueMicrotask(() => setPhase(0));
  }, [locale]);

  return (
    <section className="relative z-10 min-h-screen px-6 pt-32 pb-20 max-w-4xl mx-auto">
      <BlurText key={`${locale}-reach-title`} text={dict.reach.title} delay={90} animateBy="words" direction="top" active={phase >= 0} onAnimationComplete={() => setPhase((p) => (p === 0 ? 1 : p))} className={`blur-heading text-5xl sm:text-7xl md:text-8xl ${locale === "fa" ? "mb-8 sm:mb-10" : "mb-4"}`} />
      <BlurText key={`${locale}-reach-sub`} text={dict.reach.subtitle} delay={30} animateBy="words" direction="top" active={phase >= 1} onAnimationComplete={() => setPhase((p) => (p === 1 ? 2 : p))} className="text-muted-foreground text-lg max-w-2xl mb-14" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.a dir="ltr" href="https://github.com/KiyarashFarahani" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 24 }} animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.45, delay: phase >= 2 ? 0 * 0.08 : 0, ease: "easeOut" }} className="group frosted-glass rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 flex items-center gap-5">
          <div className="frosted-glass rounded-full p-4"><GithubIcon size={24} /></div>
          <div className="flex-1 min-w-0">
            <BlurText text="GitHub" delay={60} animateBy="words" direction="top" className="blur-heading text-xl mb-1" threshold={0.1} stepDuration={0.3} />
            <BlurText text="KiyarashFarahani" delay={35} animateBy="letters" direction="top" className="text-muted-foreground text-sm" threshold={0.1} stepDuration={0.2} />
          </div>
          <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </motion.a>
        <motion.a dir="ltr" href="mailto:farahanikiyarash@gmail.com" initial={{ opacity: 0, y: 24 }} animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.45, delay: phase >= 2 ? 1 * 0.08 : 0, ease: "easeOut" }} className="group frosted-glass rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 flex items-center gap-5">
          <div className="frosted-glass rounded-full p-4"><Mail size={24} /></div>
          <div className="flex-1 min-w-0">
            <BlurText text="Email" delay={60} animateBy="words" direction="top" className="blur-heading text-xl mb-1" threshold={0.1} stepDuration={0.3} />
            <BlurText text="farahanikiyarash@gmail.com" delay={22} animateBy="letters" direction="top" className="text-muted-foreground text-sm break-all" threshold={0.1} stepDuration={0.2} />
          </div>
          <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </motion.a>
        <motion.a dir="ltr" href="https://www.linkedin.com/in/kiyarash-farahani" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 24 }} animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.45, delay: phase >= 2 ? 2 * 0.08 : 0, ease: "easeOut" }} className="group frosted-glass rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 flex items-center gap-5">
          <div className="frosted-glass rounded-full p-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></div>
          <div className="flex-1 min-w-0">
            <BlurText text="LinkedIn" delay={60} animateBy="words" direction="top" className="blur-heading text-xl mb-1" threshold={0.1} stepDuration={0.3} />
            <BlurText text="Kiyarash Farahani" delay={45} animateBy="words" direction="top" className="text-muted-foreground text-sm" threshold={0.1} stepDuration={0.3} />
          </div>
          <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </motion.a>
        <motion.a dir="ltr" href="https://t.me/KiyarashNF" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 24 }} animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.45, delay: phase >= 2 ? 3 * 0.08 : 0, ease: "easeOut" }} className="group frosted-glass rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 flex items-center gap-5">
          <div className="frosted-glass rounded-full p-4"><MessageCircle size={24} /></div>
          <div className="flex-1 min-w-0">
            <BlurText text="Telegram" delay={60} animateBy="words" direction="top" className="blur-heading text-xl mb-1" threshold={0.1} stepDuration={0.3} />
            <BlurText text="@KiyarashNF" delay={35} animateBy="letters" direction="top" className="text-muted-foreground text-sm" threshold={0.1} stepDuration={0.2} />
          </div>
          <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </motion.a>
      </div>
    </section>
  );
}
