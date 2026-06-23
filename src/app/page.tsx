"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProjectsPage } from "@/components/projects-page";
import { AboutPage } from "@/components/about-page";
import { ReachPage } from "@/components/reach-page";
import { PageProvider, usePage } from "@/lib/page-context";
import PixelBlast from "@/components/PixelBlast";

function PageContent() {
  const { page } = usePage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {page === "home" && <HomePage />}
        {page === "projects" && <ProjectsPage />}
        {page === "about" && <AboutPage />}
        {page === "reach" && <ReachPage />}
      </motion.div>
    </AnimatePresence>
  );
}

function HomePage() {
  return <HeroSection />;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <PageProvider>
      <div className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 z-0 transition-opacity duration-1500"
          style={{ opacity: mounted ? 1 : 0, transitionDuration: "1.5s" }}
        >
          <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
            <PixelBlast
              variant="square"
              pixelSize={3}
              color="#9797cf"
              patternScale={3}
              patternDensity={1}
              enableRipples
              rippleSpeed={0.3}
              rippleThickness={0.1}
              rippleIntensityScale={1}
              speed={0.5}
              transparent
              edgeFade={0.5}
            />
          </div>
        </div>
        <Navigation />
        <PageContent />
      </div>
    </PageProvider>
  );
}
