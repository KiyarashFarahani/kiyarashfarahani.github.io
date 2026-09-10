"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import BlurText from "./BlurText";

export function AboutPage() {
  const { dict, locale } = useLocale();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    queueMicrotask(() => setPhase(0));
  }, [locale]);

  return (
    <section className="relative z-10 min-h-screen px-6 pt-32 pb-20 max-w-5xl mx-auto">
      <BlurText
        key={`${locale}-about-title`}
        text={dict.about.title}
        delay={90}
        animateBy="words"
        direction="top"
        active={phase >= 0}
        onAnimationComplete={() => setPhase((p) => (p === 0 ? 1 : p))}
        className={`blur-heading text-5xl sm:text-7xl md:text-8xl ${locale === "fa" ? "mb-16 sm:mb-20" : "mb-14"}`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <BlurText
            key={`${locale}-p1`}
            text={dict.about.p1}
            delay={28}
            animateBy="words"
            direction="top"
            active={phase >= 1}
            onAnimationComplete={() => setPhase((p) => (p === 1 ? 2 : p))}
            className="text-lg leading-relaxed text-muted-foreground"
          />
          <BlurText
            key={`${locale}-p2`}
            text={dict.about.p2}
            delay={28}
            animateBy="words"
            direction="top"
            active={phase >= 2}
            onAnimationComplete={() => setPhase((p) => (p === 2 ? 3 : p))}
            className="text-lg leading-relaxed text-muted-foreground"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="space-y-8"
        >
          <div>
            <BlurText
              key={`${locale}-tech`}
              text={dict.about.technologies}
              delay={55}
              animateBy="words"
              direction="top"
              active={phase >= 3}
              className="blur-heading text-2xl mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {["Kotlin", "Dart", "Flutter", "TypeScript", "React", "Next.js", "C++", "Solidity", "Python", "Tailwind CSS", "Three.js", "Firebase"].map((tech, i) => (
                <motion.span
                  key={tech}
                  dir="ltr"
                  initial={{ opacity: 0, y: 8 }}
                  animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.30, delay: phase >= 3 ? i * 0.028 : 0, ease: "easeOut" }}
                  className="about-pill rounded-full px-4 py-2 text-sm text-muted-foreground"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          <div>
            <BlurText
              key={`${locale}-focus`}
              text={dict.about.focusAreas}
              delay={55}
              animateBy="words"
              direction="top"
              active={phase >= 3}
              className="blur-heading text-2xl mb-4"
            />
            <div className="space-y-3">
              {dict.about.areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 8 }}
                  animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.30, delay: phase >= 3 ? i * 0.05 : 0, ease: "easeOut" }}
                  className="about-card rounded-xl px-5 py-3 text-sm text-muted-foreground"
                >
                  {area}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
