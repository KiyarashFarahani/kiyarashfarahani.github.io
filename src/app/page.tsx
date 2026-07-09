"use client";

import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PageProvider, usePage } from "@/lib/page-context";
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false });

const ProjectsPage = lazy(() => import("@/components/projects-page").then(m => ({ default: m.ProjectsPage })));
const AboutPage = lazy(() => import("@/components/about-page").then(m => ({ default: m.AboutPage })));
const ReachPage = lazy(() => import("@/components/reach-page").then(m => ({ default: m.ReachPage })));

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
        <Suspense fallback={null}>
          {page === "home" && <HeroSection />}
          {page === "projects" && <ProjectsPage />}
          {page === "about" && <AboutPage />}
          {page === "reach" && <ReachPage />}
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <PageProvider>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 h-screen z-0">
          <Aurora colorStops={["#051ba3", "#678cff", "#5227FF"]} amplitude={0.8} blend={0.3} />
        </div>
        <Navigation />
        <PageContent />
      </div>
    </PageProvider>
  );
}
