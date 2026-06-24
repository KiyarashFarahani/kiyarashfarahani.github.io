"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PageProvider, usePage } from "@/lib/page-context";

const ProjectsPage = lazy(() => import("@/components/projects-page").then(m => ({ default: m.ProjectsPage })));
const AboutPage = lazy(() => import("@/components/about-page").then(m => ({ default: m.AboutPage })));
const ReachPage = lazy(() => import("@/components/reach-page").then(m => ({ default: m.ReachPage })));
const PixelBlast = lazy(() => import("@/components/PixelBlast"));

function PageContent() {
  const { page } = usePage();

  return (
    <div key={page} className="page-enter">
      <Suspense fallback={null}>
        {page === "home" && <HeroSection />}
        {page === "projects" && <ProjectsPage />}
        {page === "about" && <AboutPage />}
        {page === "reach" && <ReachPage />}
      </Suspense>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestIdleCallback(() => setMounted(true), { timeout: 200 });
    return () => cancelIdleCallback(t);
  }, []);

  return (
    <PageProvider>
      <div className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 z-0 transition-opacity duration-1500"
          style={{ opacity: mounted ? 1 : 0, transitionDuration: "1.5s" }}
        >
          <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
            <Suspense fallback={null}>
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
            </Suspense>
          </div>
        </div>
        <Navigation />
        <PageContent />
      </div>
    </PageProvider>
  );
}
