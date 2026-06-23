"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProjectsPage } from "@/components/projects-page";
import { AboutPage } from "@/components/about-page";
import { ReachPage } from "@/components/reach-page";
import { PageProvider, usePage } from "@/lib/page-context";
import Beams from "@/components/Beams";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div
        className="absolute inset-0 z-0 transition-opacity duration-1500"
        style={{ opacity: mounted ? 1 : 0, transitionDuration: "1.5s" }}
      >
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      <HeroSection />
    </>
  );
}

export default function Home() {
  return (
    <PageProvider>
      <div className="relative min-h-screen overflow-hidden">
        <Navigation />
        <PageContent />
      </div>
    </PageProvider>
  );
}
