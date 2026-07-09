"use client";

import { motion } from "framer-motion";

export function AboutPage() {
  return (
    <section className="relative z-10 min-h-screen px-6 pt-32 pb-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-5xl sm:text-7xl md:text-8xl mb-14"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          About Me
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m a developer from Iran with a passion for building clean,
            performant applications across platforms. From native Android apps
            to cross-platform Flutter projects and modern web experiences, I
            enjoy working across the full stack.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            My work spans mobile development (Kotlin, Flutter), systems
            programming (C++), web technologies (TypeScript, React, Next.js),
            and smart contract development (Solidity). I&apos;m driven by
            curiosity and a desire to ship things that people actually use.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h2
              className="text-2xl mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Kotlin",
                "Dart",
                "Flutter",
                "TypeScript",
                "React",
                "Next.js",
                "C++",
                "Solidity",
                "Python",
                "Tailwind CSS",
                "Three.js",
                "Firebase",
              ].map((tech) => (
                <span
                  key={tech}
                  className="frosted-glass rounded-full px-4 py-2 text-sm text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2
              className="text-2xl mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Focus Areas
            </h2>
            <div className="space-y-3">
              {[
                "Mobile Application Development",
                "Full-Stack Web Applications",
                "Cross-Platform Solutions",
                "UI/UX Design",
              ].map((area) => (
                <div
                  key={area}
                  className="frosted-glass rounded-xl px-5 py-3 text-sm text-muted-foreground"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
