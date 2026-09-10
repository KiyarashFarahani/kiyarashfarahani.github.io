"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";
import { usePage, type Page } from "@/lib/page-context";
import { useLocale } from "@/lib/locale-context";
import { LANGUAGES } from "@/lib/locale-context";

export function Navigation() {
  const { page, navigate } = usePage();
  const { locale, dict, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const links: { label: string; page: Page }[] = [
    { label: dict.nav.home, page: "home" },
    { label: dict.nav.projects, page: "projects" },
    { label: dict.nav.about, page: "about" },
    { label: dict.nav.reach, page: "reach" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none"
      style={{ paddingTop: "calc(1.25rem + env(safe-area-inset-top))" }}
    >
      <nav
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full px-2 sm:px-3 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            : "bg-black/40 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
        }`}
      >
        {links.map((link) => (
          <button
            key={link.page}
            onClick={() => navigate(link.page)}
            className={`relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
              page === link.page ? "text-white" : "text-white/60 hover:text-white/90"
            }`}
          >
            {page === link.page && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 bg-white/15 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </button>
        ))}
        <div className="w-px h-5 bg-white/15 mx-1" />
        <div ref={menuRef} className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={open}
            aria-label="Choose language"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <Globe size={13} className="opacity-80" />
            <span>{current.short}</span>
            <ChevronDown size={12} className={`opacity-60 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                role="menu"
                className="absolute top-full mt-2 right-0 min-w-[180px] rounded-2xl bg-black/75 backdrop-blur-xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.45)] overflow-hidden p-1.5"
              >
                {LANGUAGES.map((lang) => {
                  const active = locale === lang.code;
                  return (
                    <button
                      key={lang.code}
                      role="menuitem"
                      onClick={() => {
                        setLocale(lang.code);
                        setOpen(false);
                      }}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors cursor-pointer ${
                        active ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className={`text-xs font-bold w-7 text-center rounded-md py-0.5 ${active ? "bg-white text-black" : "bg-white/10 text-white/80"}`}>
                          {lang.short}
                        </span>
                        <span className="font-medium">{lang.native}</span>
                      </span>
                      {active && <Check size={14} className="text-white shrink-0" />}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
}
