"use client";

import { usePage } from "@/lib/page-context";

export function HeroSection() {
  const { navigate } = usePage();

  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">
      <h1
        className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.9] tracking-[-2.46px] max-w-7xl font-normal animate-fade-rise"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        <em className="not-italic text-muted-foreground">Kiyarash</em>{" "}
        Farahani
      </h1>

      <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-3xl mt-10 leading-relaxed animate-fade-rise-delay">
        Mobile Application & Website Developer
      </p>

      <button
        onClick={() => navigate("projects")}
        className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] transition-transform cursor-pointer animate-fade-rise-delay-2"
      >
        View Projects
      </button>
    </section>
  );
}
