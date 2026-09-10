"use client";

import { usePage } from "@/lib/page-context";
import { useLocale } from "@/lib/locale-context";
import BlurText from "./BlurText";

export function HeroSection() {
  const { navigate } = usePage();
  const { dict, locale } = useLocale();

  return (
    <section className="relative z-10 flex flex-1 items-center justify-center px-6 py-10 text-center">
      <div className="flex flex-col items-center">
        <BlurText
          key={`${locale}-hero-title`}
          text={locale === "ja" ? `${dict.hero.firstName}・${dict.hero.lastName}` : `${dict.hero.firstName} ${dict.hero.lastName}`}
          delay={90}
          animateBy="words"
          direction="top"
          className={`blur-heading leading-[0.9] max-w-7xl font-normal justify-center ${locale === "ja" ? "text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] tracking-[-0.02em]" : locale === "fa" ? "text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] tracking-[-2.46px]" : "text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-[-2.46px]"}`}
        />
        <BlurText
          key={`${locale}-hero-sub`}
          text={dict.hero.subtitle}
          delay={45}
          animateBy="words"
          direction="top"
          className={`text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed justify-center ${locale === "fa" ? "mt-14 sm:mt-16" : "mt-10"}`}
        />
        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-rise-delay-2 mt-12">
          <button
            onClick={() => navigate("projects")}
            className="frosted-glass rounded-full px-7 py-3 text-sm font-medium text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
          >
            {dict.hero.cta}
          </button>
          <button
            onClick={() => navigate("reach")}
            className="rounded-full bg-white text-black px-7 py-3 text-sm font-medium hover:scale-[1.03] transition-transform cursor-pointer"
          >
            {dict.hero.ctaContact}
          </button>
        </div>
      </div>
    </section>
  );
}
