import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ExternalLink, GitFork, Github, Star, ChevronRight } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { Section } from "./Section";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { caseStudies, featuredProjects, profile } from "@/data/portfolio";
import { githubQueryOptions } from "@/lib/github-query";


const filters = ["All", "Spring Boot", "Security", "Database", "AI / RAG"] as const;

const filterMatch: Record<string, (stack: string[]) => boolean> = {
  All: () => true,
  "Spring Boot": (s) => s.some((x) => x.toLowerCase().includes("spring")),
  Security: (s) => s.some((x) => /jwt|security|oauth/i.test(x)),
  Database: (s) => s.some((x) => /postgres|sql|redis|jpa|pgvector/i.test(x)),
  "AI / RAG": (s) => s.some((x) => /ai|vector|embedding|llm/i.test(x)),
};

type SortKey = "stars" | "updated" | "difficulty" | "category";

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "stars", label: "Top Stars" },
  { key: "updated", label: "Recently Updated" },
  { key: "difficulty", label: "Difficulty" },
  { key: "category", label: "Category" },
];

const difficultyRank: Record<string, number> = {
  Intermediate: 1,
  Advanced: 2,
  Expert: 3,
};

function nodesFor(stack: string[]) {
  const base = ["Client"];
  if (stack.some((s) => /jwt|security|oauth/i.test(s))) base.push("Security Filter");
  base.push("REST Controller", "Service Layer");
  if (stack.some((s) => /redis/i.test(s))) base.push("Redis Cache");
  if (stack.some((s) => /jpa|hibernate/i.test(s))) base.push("JPA Repository");
  const db = stack.find((s) => /postgres|mysql|pgvector|sql/i.test(s));
  base.push(db ?? "Database");
  return base;
}

export function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const { data } = useSuspenseQuery(githubQueryOptions);
  const [filter, setFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortKey>("stars");

  const repoMap = useMemo(() => new Map(data.repos.map((r) => [r.name, r])), [data.repos]);

  const visible = useMemo(() => {
    const filtered = featuredProjects.filter((p) => filterMatch[filter]?.(p.stack) ?? true);

    return [...filtered].sort((a, b) => {
      const repoA = repoMap.get(a.repo);
      const repoB = repoMap.get(b.repo);

      switch (sortBy) {
        case "stars":
          return (repoB?.stargazers_count ?? 0) - (repoA?.stargazers_count ?? 0);
        case "difficulty":
          return (difficultyRank[b.difficulty] ?? 0) - (difficultyRank[a.difficulty] ?? 0);
        case "category":
          return a.category.localeCompare(b.category) || a.title.localeCompare(b.title);
        case "updated":
        default: {
          const dateA = repoA?.updated_at ? new Date(repoA.updated_at).getTime() : 0;
          const dateB = repoB?.updated_at ? new Date(repoB.updated_at).getTime() : 0;
          return dateB - dateA;
        }
      }
    });
  }, [filter, sortBy, repoMap]);

  // Mouse tracking for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const cards = document.querySelectorAll(".group");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  };


  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Architectural Deep Dives"
      lead="Live metrics pulled from GitHub on every render — stars, forks, languages and last activity are real."
    >
      <div onMouseMove={handleMouseMove}>
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                aria-label={`Filter by ${f}`}
                className={`min-h-11 rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                  filter === f
                    ? "border-aurora-1/50 bg-surface-2 text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-border bg-surface-1/50 p-1.5">
            <span className="px-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/70">Sort</span>
            {sortOptions.map((o) => (
              <button
                key={o.key}
                onClick={() => setSortBy(o.key)}
                aria-pressed={sortBy === o.key}
                className={`rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all ${
                  sortBy === o.key ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto lg:max-w-none">

        {visible.map((p, i) => {
          const repo = repoMap.get(p.repo);
          const demo = p.demo ?? repo?.homepage ?? undefined;
          const study = caseStudies[p.repo];
          return (
            <motion.article
              key={p.repo}
              layout
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative flex flex-col rounded-3xl border border-border bg-surface-1/20 p-6 backdrop-blur-xl transition-all duration-500 hover:border-aurora-1/40 hover:bg-surface-1/40 sm:p-8"
              aria-label={`Project: ${p.title}`}
            >
              {/* Card Glow Effect */}
              <div
                className="absolute -inset-px -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in oklab, ${p.accent} 8%, transparent), transparent 40%)`,
                }}
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: p.accent }}
                    />
                    <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                      {p.category}
                    </p>
                    <span className="rounded-full border border-border/60 bg-surface-2/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      {p.difficulty}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground group-hover:text-aurora-1 transition-colors">
                    {p.title}
                  </h3>
                </div>
                <div className="flex shrink-0 items-center gap-2 xs:gap-4 font-mono text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-1.5 rounded-full border border-border bg-surface-2/50 px-2.5 py-1">
                    <Star className="size-3.5 text-aurora-1" />
                    <span className="font-medium text-foreground">{repo?.stargazers_count ?? 0}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-border bg-surface-2/50 px-2.5 py-1">
                    <GitFork className="size-3.5 text-aurora-2" />
                    <span className="font-medium text-foreground">{repo?.forks_count ?? 0}</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground/90">
                {p.description}
              </p>

              {study ? (
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-border/50 bg-background/30 p-5 ring-1 ring-white/5 transition-colors group-hover:border-border/80">
                    <h4 className="font-mono text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase">
                      The Challenge
                    </h4>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                      {study.problem}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/50 bg-background/30 p-5 ring-1 ring-white/5 transition-colors group-hover:border-border/80">
                    <h4 className="font-mono text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase">
                      Engineering Fix
                    </h4>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                      {study.solution}
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-mono text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase">
                    System Design
                  </h4>
                  <div className="h-px flex-1 mx-4 bg-gradient-to-r from-border/50 to-transparent" />
                </div>
                <ArchitectureDiagram nodes={nodesFor(p.stack)} accent={p.accent} />
              </div>

              {study ? (
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="mb-3 font-mono text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase">
                      Service Execution Path
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {study.workflow.map((step, n) => (
                        <div key={step} className="flex items-center gap-2">
                          <span className="rounded-lg border border-border bg-surface-2/30 px-3 py-1.5 font-mono text-[11px] text-foreground/80 group-hover:border-aurora-1/20 transition-colors">
                            {step}
                          </span>
                          {n < study.workflow.length - 1 && (
                            <ChevronRight className="size-3 text-muted-foreground/40" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 font-mono text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase">
                      Technical Trade-offs
                    </h4>
                    <div className="grid gap-3">
                      {study.choices.map((c) => (
                        <div key={c.tech} className="group/choice flex items-start gap-3 rounded-xl border border-transparent p-1 transition-colors hover:border-border/30 hover:bg-surface-2/20">
                          <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-aurora-1/60 group-hover/choice:bg-aurora-1 transition-colors" />
                          <p className="text-[13.5px] leading-snug text-muted-foreground">
                            <span className="font-semibold text-foreground">{c.tech}</span>
                            <span className="mx-2 text-muted-foreground/30">•</span>
                            {c.why}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border/60 bg-surface-2/40 px-3 py-1 font-mono text-[10px] font-medium text-muted-foreground transition-colors group-hover:border-aurora-1/20 group-hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 border-t border-border/50 pt-6">
                  <div className="flex items-center gap-4 text-[11px] font-mono text-muted-foreground">
                    {repo?.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-aurora-2/60" />
                        {repo.language}
                      </span>
                    )}
                    {repo?.updated_at && (
                      <span>
                        Sync: {new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Magnetic strength={0.2}>
                      <a
                        href={repo?.html_url ?? `${profile.links.github}/${p.repo}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-xs font-bold text-background transition-all hover:scale-105 hover:bg-aurora-1 hover:text-white"
                      >
                        <Github className="size-3.5" />
                        Code
                      </a>
                    </Magnetic>
                    {demo && (
                      <Magnetic strength={0.2}>
                        <a
                          href={demo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex items-center gap-2 rounded-xl border border-border bg-surface-2/50 px-4 py-2 text-xs font-bold text-foreground transition-all hover:border-aurora-1/40 hover:bg-surface-2"
                        >
                          <ExternalLink className="size-3.5" />
                          Live
                        </a>
                      </Magnetic>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
      </div>
    </Section>
  );
}
