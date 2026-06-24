"use client";

import { useRef, useEffect, useState } from "react";
import { usePage, type Page } from "@/lib/page-context";

const links: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Projects", page: "projects" },
  { label: "About Me", page: "about" },
  { label: "Reach Me", page: "reach" },
];

export function Navigation() {
  const { page, navigate } = usePage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, top: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const buttons = container.querySelectorAll<HTMLButtonElement>("button");
    const activeIndex = links.findIndex((l) => l.page === page);
    if (activeIndex === -1 || !buttons[activeIndex]) return;

    const btn = buttons[activeIndex];
    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();

    setIndicator({
      left: bRect.left - cRect.left,
      top: bRect.top - cRect.top,
      width: bRect.width,
      height: bRect.height,
    });
  }, [page]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        ref={containerRef}
        className="flex items-center gap-2 liquid-glass rounded-full px-2 py-2 whitespace-nowrap relative"
      >
        <div
          className="absolute bg-white/10 rounded-full transition-[left,width,top,height] duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{
            left: indicator.left,
            top: indicator.top,
            width: indicator.width,
            height: indicator.height,
          }}
        />
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => navigate(link.page)}
            className={`relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-2 transition-colors cursor-pointer z-10 ${
              page === link.page
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="relative z-10">{link.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
