"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { dictionaries, type Locale, type Dictionary } from "./dictionaries";

const STORAGE_KEY = "velorah-locale";

export const LANGUAGES: { code: Locale; short: string; native: string }[] = [
  { code: "en", short: "EN", native: "English" },
  { code: "fa", short: "فا", native: "فارسی" },
  { code: "ja", short: "JA", native: "日本語" },
];

function detectLocale(): Locale {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === "Asia/Tehran") return "fa";
  } catch {}
  return "en";
}

interface LocaleContextType {
  locale: Locale;
  dict: Dictionary;
  dir: "ltr" | "rtl";
  setLocale: (l: Locale) => void;
  toggle: () => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  dict: dictionaries.en,
  dir: "ltr",
  setLocale: () => {},
  toggle: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "fa" || stored === "ja") {
      setLocaleState(stored);
    } else {
      setLocaleState(detectLocale());
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
    try { localStorage.setItem(STORAGE_KEY, locale); } catch {}
    document.cookie = `${STORAGE_KEY}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  }, [locale, hydrated]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggle = useCallback(() => setLocaleState((p) => (p === "en" ? "fa" : "en")), []);

  const dir = locale === "fa" ? "rtl" : "ltr";
  return (
    <LocaleContext.Provider value={{ locale, dict: dictionaries[locale], dir, setLocale, toggle }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
