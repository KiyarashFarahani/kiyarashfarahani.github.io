"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, GitBranch } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import BlurText from "./BlurText";
import socialPreviewsRaw from "@/data/social-previews.json";

const socialPreviews: Record<string, string> = socialPreviewsRaw;

interface Repo {
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  homepage: string | null;
  html_url: string;
  forks_count: number;
  archived: boolean;
}

const REPOS_TO_SHOW = ["WeatherApp","AP-Flutter-Project","sudoku","MasterMind","OmegaRay-legacy","Notes50"];
const TITLE_OVERRIDES: Record<string, string> = { "OmegaRay-legacy": "OmegaRay", "AP-Flutter-Project": "Mono Music Player" };

export function ProjectsPage() {
  const { dict, locale } = useLocale();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/KiyarashFarahani/repos?per_page=100&sort=updated", { cache: "force-cache" })
      .then((res) => res.json())
      .then((data: Repo[]) => {
        const filtered = data.filter((r) => REPOS_TO_SHOW.includes(r.name));
        filtered.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="relative z-10 min-h-screen px-6 pt-32 pb-20 max-w-7xl mx-auto">
      <BlurText key={`${locale}-proj-title`} text={dict.projects.title} delay={90} animateBy="words" direction="top" className={`blur-heading text-5xl sm:text-7xl md:text-8xl ${locale === "fa" ? "mb-8 sm:mb-10" : "mb-4"}`} />
      <BlurText key={`${locale}-proj-sub`} text={dict.projects.subtitle} delay={30} animateBy="words" direction="top" className="text-muted-foreground text-lg max-w-2xl mb-14" />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="frosted-glass rounded-2xl h-72 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.homepage || repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group frosted-glass rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative h-44 overflow-hidden bg-muted">
                <img
                  src={socialPreviews[repo.name] || `https://opengraph.githubassets.com/1/KiyarashFarahani/${repo.name}`}
                  alt={repo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
                <div className="shimmer-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {repo.homepage && (
                  <div className="absolute top-3 right-3 frosted-glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} />
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div dir="ltr">
                  <BlurText text={TITLE_OVERRIDES[repo.name] || repo.name} delay={60} animateBy="words" direction="top" className="blur-heading text-xl mb-2" threshold={0.1} stepDuration={0.3} />
                </div>
                <div dir="ltr" className="flex-1 mb-4">
                  <BlurText text={repo.description || dict.projects.noDescription} delay={22} animateBy="words" direction="top" className="text-muted-foreground text-sm leading-relaxed" threshold={0.1} stepDuration={0.3} />
                </div>
                <div dir="ltr" className="flex items-center gap-4 text-xs text-muted-foreground">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-foreground/70" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><Star size={12} />{repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitBranch size={12} />{repo.forks_count}</span>
                  {repo.archived && <span className="text-yellow-500/80 font-medium">{dict.projects.archived}</span>}
                </div>
                {repo.topics.length > 0 && (
                  <div dir="ltr" className="flex flex-wrap gap-1.5 mt-3">
                    {repo.topics.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
