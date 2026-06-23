"use client";

import { usePage, type Page } from "@/lib/page-context";
import { motion } from "framer-motion";

const links: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Projects", page: "projects" },
  { label: "About Me", page: "about" },
  { label: "Reach Me", page: "reach" },
];

export function Navigation() {
  const { page, navigate } = usePage();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 liquid-glass rounded-full px-2 py-2 whitespace-nowrap">
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => navigate(link.page)}
            className={`relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-2 transition-colors cursor-pointer ${
              page === link.page
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {page === link.page && (
              <motion.div
                layoutId="nav-active"
                className="absolute inset-0 bg-white/10 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
