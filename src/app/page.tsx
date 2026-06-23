"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import Beams from "@/components/Beams";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 animate-fade-in">
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

      <Navigation />
      <HeroSection />
    </div>
  );
}
