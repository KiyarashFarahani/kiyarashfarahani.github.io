"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Page = "home" | "projects" | "about" | "reach";

interface PageContextType {
  page: Page;
  navigate: (page: Page) => void;
}

const PageContext = createContext<PageContextType>({
  page: "home",
  navigate: () => {},
});

export function PageProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>("home");

  const navigate = useCallback((p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <PageContext.Provider value={{ page, navigate }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  return useContext(PageContext);
}
