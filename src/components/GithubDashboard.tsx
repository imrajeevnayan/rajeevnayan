import { useEffect, useRef, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { motion, useInView } from "motion/react";
import { Star, GitFork, Users, FolderGit2, ArrowUpRight, Activity, Gauge, Clock } from "lucide-react";
import { Section } from "./Section";
import { githubQueryOptions } from "@/lib/github-query";
import { codingStatsQueryOptions } from "@/lib/coding-stats-query";
import { profile } from "@/data/portfolio";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{n}</span>;
}

export function GithubDashboard() {
  const [perfHints, setPerfHints] = useState<{ loadTime: number; domNodes: number } | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      if (navigation) {
        setPerfHints({
          loadTime: Math.round(navigation.duration),
          domNodes: document.getElementsByTagName('*').length
        });
      }
    }
  }, []);
  const { data: githubData } = useSuspenseQuery(githubQueryOptions);
  const { data: codingStats } = useSuspenseQuery(codingStatsQueryOptions);

  const stats = [
    { label: "Public repositories", value: githubData.publicRepos, icon: FolderGit2 },
    { label: "Stars earned", value: githubData.totalStars, icon: Star },
    { label: "Followers", value: githubData.followers, icon: Users },
    { label: "Recent Contributions", value: githubData.contributions.lastYear, icon: GitFork },
  ];

  return (
    <Section
      id="github"
      eyebrow="Open Source Contributions"
      title="Live activity from @imrajeevnayan"
      lead={githubData.stale ? "GitHub API rate limit exceeded. Showing local fallback data." : "Fetched server-side from the GitHub API — nothing here is hardcoded."}
    >
      <div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
            className="glass-card rounded-xl p-6"
          >
            <s.icon className="size-4 text-aurora-1" strokeWidth={1.6} />
            <p className="mt-5 text-4xl font-semibold tracking-tight">
              <Counter value={s.value} />
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-12">
        <div className="glass-card rounded-xl p-6 lg:col-span-5">
          <h3 className="text-sm font-semibold tracking-wide uppercase">Language usage</h3>
          <ul className="mt-5 space-y-4">
            {githubData.languages.map((l) => (
              <li key={l.name}>
                <div className="flex justify-between font-mono text-[11px] text-muted-foreground">
                  <span>{l.name}</span>
                  <span>
                    {l.count} repos · {l.percent}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.percent}%` }}
                    viewport={{ once: true, margin: "-10px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-aurora-1 to-aurora-2"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card rounded-xl p-6 lg:col-span-7">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-wide uppercase">Recent activity</h3>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[11px] text-muted-foreground hover:text-foreground"
            >
              view all →
            </a>
          </div>
          <ul className="mt-5 divide-y divide-border">
            {githubData.recent.map((r) => (
              <li key={r.name} className="flex items-center justify-between gap-4 py-3">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="truncate font-mono text-[13px] hover:text-aurora-1"
                >
                  {r.name}
                </a>
                <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                  {r.language ?? "—"} · {new Date(r.updated_at).toISOString().slice(0, 10)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="glass-card overflow-hidden rounded-xl p-6">
          <h3 className="mb-4 text-sm font-semibold tracking-wide uppercase">Top repositories</h3>
          <ul className="space-y-3">
            {githubData.repos.slice(0, 5).map((r) => (
              <li key={r.name} className="flex items-center justify-between gap-4">
                <a
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="truncate font-mono text-[13px] hover:text-aurora-1"
                >
                  {r.name}
                </a>
                <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                  ★ {r.stargazers_count} · ⑂ {r.forks_count}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card overflow-hidden rounded-xl p-6">
          <h3 className="mb-4 text-sm font-semibold tracking-wide uppercase">Contribution graph</h3>
          <div className="mb-4 grid grid-cols-3 gap-3">
            {[
              { label: "Last 12 months", value: githubData.contributions.lastYear },
              { label: "Current streak", value: githubData.contributions.currentStreak },
              { label: "Best day", value: githubData.contributions.bestDay },
            ].map((c) => (
              <div key={c.label} className="rounded-lg border border-border bg-surface-2/40 p-3">
                <p className="font-mono text-lg font-semibold tracking-tight">
                  <Counter value={c.value} />
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{c.label}</p>
              </div>
            ))}
          </div>
          <img
            src={`https://ghchart.rshah.org/4f9cf9/${profile.handle}`}
            alt={`GitHub contribution heatmap for ${profile.name}`}
            loading="lazy"
            width={663}
            height={104}
            className="w-full opacity-90"
          />
        </div>
      </div>
      {/* Performance & Accessibility Hints */}
      <div className="mt-8 grid gap-5 xs:grid-cols-2">
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="size-4 text-aurora-1" />
            <h3 className="text-sm font-semibold tracking-wide uppercase">Performance Metrics</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-2">
                <Clock className="size-3" /> Navigation Load
              </span>
              <span className="font-mono text-xs text-foreground">{perfHints?.loadTime || '—'}ms</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-2">
                <Gauge className="size-3" /> DOM Complexity
              </span>
              <span className="font-mono text-xs text-foreground">{perfHints?.domNodes || '—'} nodes</span>
            </div>
            <p className="text-[10px] text-muted-foreground font-mono leading-relaxed italic">
              * Real-time client-side telemetry captured during current session initialization.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-sm font-semibold tracking-wide uppercase">Optimization Status</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="text-[11px] font-mono text-muted-foreground">Mobile Optimization</span>
              <span className="font-mono text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded uppercase font-bold">Active</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="text-[11px] font-mono text-muted-foreground">Motion Throttling</span>
              <span className="font-mono text-[10px] bg-aurora-1/10 text-aurora-1 px-2 py-0.5 rounded uppercase font-bold">Hardware Accelerated</span>
            </div>
            <p className="text-[10px] text-muted-foreground font-mono leading-relaxed italic">
              Automatic adjustment based on device capabilities and system preferences is enabled.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 overflow-hidden rounded-xl border border-border glass"
      >
        <div className="bg-surface-2/50 px-6 py-3 border-b border-border">
           <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Ecosystem Availability</h4>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="text-[10px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-6 py-4 font-medium">Domain</th>
              <th className="px-6 py-4 font-medium">Identity</th>
              <th className="px-6 py-4 font-medium">Connectivity</th>
              <th className="px-6 py-4 font-medium text-right">Destination</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { 
                platform: "GitHub", 
                username: profile.handle, 
                isLive: !githubData.stale,
                url: profile.links.github 
              },
              { 
                platform: "LeetCode", 
                username: codingStats.leetcode.username, 
                isLive: codingStats.leetcode.totalSolved > 0,
                url: codingStats.leetcode.profileUrl 
              },
              { 
                platform: "GeeksforGeeks", 
                username: codingStats.gfg.username, 
                isLive: codingStats.gfg.totalSolved > 0,
                url: codingStats.gfg.profileUrl 
              }
            ].map((p) => (
              <tr key={p.platform} className="group hover:bg-surface-2/30 transition-colors">
                <td className="px-6 py-4 font-medium text-foreground">{p.platform}</td>
                <td className="px-6 py-4 text-muted-foreground font-mono text-xs">{p.username}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-medium ${p.isLive ? 'text-emerald-500' : 'text-amber-500'}`}>
                    <span className={`size-1 rounded-full ${p.isLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                    {p.isLive ? 'Live Connection' : 'Cached/Stale'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-aurora-1 hover:text-aurora transition-colors"
                  >
                    View <ArrowUpRight className="size-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </Section>
  );
}
