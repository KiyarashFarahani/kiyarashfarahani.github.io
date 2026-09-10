"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import BlurText from "./BlurText";

export function AboutPage() {
  const { dict, locale } = useLocale();
  const isFa = locale === "fa";
  return (
    <section className="relative z-10 min-h-screen px-6 pt-32 pb-20 max-w-5xl mx-auto">
      <BlurText
        key={`${locale}-about-title`}
        text={dict.about.title}
        delay={90}
        animateBy="words"
        direction="top"
        className={`blur-heading text-5xl sm:text-7xl md:text-8xl ${locale === "fa" ? "mb-16 sm:mb-20" : "mb-14"}`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <BlurText key={`${locale}-p1`} text={dict.about.p1} delay={30} animateBy="words" direction="top" className="text-lg leading-relaxed text-muted-foreground" />
          <BlurText key={`${locale}-p2`} text={dict.about.p2} delay={30} animateBy="words" direction="top" className="text-lg leading-relaxed text-muted-foreground" />
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-8">
          <div>
            <BlurText key={`${locale}-tech`} text={dict.about.technologies} delay={70} animateBy="words" direction="top" className="blur-heading text-2xl mb-4" />
            <div className="flex flex-wrap gap-2">
              {["Kotlin","Dart","Flutter","TypeScript","React","Next.js","C++","Solidity","Python","Tailwind CSS","Three.js","Firebase"].map((tech) => (
                <span key={tech} dir="ltr" className="frosted-glass rounded-full px-4 py-2 text-sm text-muted-foreground">{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <BlurText key={`${locale}-focus`} text={dict.about.focusAreas} delay={70} animateBy="words" direction="top" className="blur-heading text-2xl mb-4" />
            <div className="space-y-3">
              {dict.about.areas.map((area) => (
                <div key={area} className="frosted-glass rounded-xl px-5 py-3 text-sm text-muted-foreground" dir={isFa ? undefined : undefined}>{area}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
