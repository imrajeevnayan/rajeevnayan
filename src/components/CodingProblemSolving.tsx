import * as React from "react";
import { motion } from "motion/react";
import { ExternalLink, Trophy, Code2, Layers, ArrowUpRight, CheckCircle2, AlertCircle, RefreshCcw, Database } from "lucide-react";

import { useSuspenseQuery } from "@tanstack/react-query";
import { codingStatsQueryOptions } from "@/lib/coding-stats-query";
import { Section } from "./Section";

export function CodingProblemSolving() {
  const { data: stats, refetch } = useSuspenseQuery(codingStatsQueryOptions);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [cooldownMessage, setCooldownMessage] = React.useState<string | null>(null);
  
  const lastUpdated = new Date(stats.summary.lastUpdated).toLocaleTimeString();

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    setCooldownMessage(null);
    try {
      const { refreshCodingStats } = await import("@/lib/coding-stats.functions");
      await refreshCodingStats();
      await refetch();
      const { toast } = await import("sonner");
      toast.success("Coding stats refreshed successfully!");
    } catch (error: any) {
      console.error("Failed to refresh stats:", error);
      const message = error.message || "Failed to refresh stats";
      setCooldownMessage(message);
      const { toast } = await import("sonner");
      toast.error(message);
    } finally {
      setIsRefreshing(false);
    }
  };

  const snapshot = [
    { label: "Problems Solved", value: stats.summary.totalSolved > 0 ? `${stats.summary.totalSolved}+` : "0" },
    { label: "Coding Platforms", value: stats.summary.platformCount },
    { label: "Problem Solving", value: stats.summary.activeStatus },
  ];


  return (
    <Section
      id="coding"
      eyebrow="Coding & Problem Solving"
      title="Consistent practice in Data Structures, Algorithms and problem solving."
    >
      <div className="mb-6 flex flex-wrap items-center justify-center sm:justify-end gap-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest text-center sm:text-right">
        <div className="flex items-center gap-2">
          <Database className={`size-3 ${stats.summary.isFromCache ? 'text-amber-500/70' : 'text-emerald-500/70'}`} />
          <span>Source: {stats.summary.isFromCache ? 'Cache' : 'Fresh'}</span>
        </div>
        <span>Last synced: {lastUpdated}</span>
        <button 
          onClick={handleManualRefresh}
          disabled={isRefreshing}
          aria-label="Refresh coding stats"
          aria-busy={isRefreshing}
          className="flex items-center gap-2 rounded-md bg-surface-2/80 px-2 py-1 transition-colors hover:bg-secondary hover:text-aurora disabled:opacity-50"
          title="Force refresh coding statistics"
        >
          <RefreshCcw className={`size-3 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>{isRefreshing ? 'Syncing...' : 'Refresh'}</span>
        </button>
        {cooldownMessage && (
          <span className="text-amber-500 animate-pulse">{cooldownMessage}</span>
        )}
      </div>


      {/* Coding Snapshot */}

      <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {snapshot.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
            className="glass-card flex flex-col items-center justify-center p-6 text-center"
          >
            <span className="text-3xl font-bold tracking-tight text-aurora">{item.value}</span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* LeetCode Card */}
        <PlatformCard
          name="LeetCode"
          stats={stats.leetcode}
          icon={<Code2 className="size-5 text-[#FFA116]" />}
          accentColor="#FFA116"
        >
          {stats.leetcode.totalSolved > 0 ? (
            <div className="space-y-4">
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold">{stats.leetcode.totalSolved}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Solved</span>
              </div>
              <div className="space-y-2">
                <DifficultyBar label="Easy" count={stats.leetcode.easy} total={stats.leetcode.totalSolved} color="#00B8A3" />
                <DifficultyBar label="Medium" count={stats.leetcode.medium} total={stats.leetcode.totalSolved} color="#FFC01E" />
                <DifficultyBar label="Hard" count={stats.leetcode.hard} total={stats.leetcode.totalSolved} color="#FF375F" />
              </div>
              {stats.leetcode.ranking && (
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-[11px] text-muted-foreground">
                  <span>Ranking</span>
                  <span className="font-mono">{stats.leetcode.ranking.toLocaleString()}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
              <AlertCircle className="size-8 mb-2 opacity-50" />
              <p className="text-sm">Live statistics unavailable.</p>
            </div>
          )}
        </PlatformCard>

        {/* GeeksforGeeks Card */}
        <PlatformCard
          name="GeeksforGeeks"
          stats={stats.gfg}
          icon={<Trophy className="size-5 text-[#2F8D46]" />}
          accentColor="#2F8D46"
        >
          {stats.gfg.totalSolved > 0 ? (
            <div className="space-y-4">
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold">{stats.gfg.totalSolved}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Solved</span>
              </div>
              <div className="space-y-2">
                <DifficultyBar label="Easy/Basic" count={stats.gfg.easy} total={stats.gfg.totalSolved} color="#00B8A3" />
                <DifficultyBar label="Medium" count={stats.gfg.medium} total={stats.gfg.totalSolved} color="#FFC01E" />
                <DifficultyBar label="Hard" count={stats.gfg.hard} total={stats.gfg.totalSolved} color="#FF375F" />
              </div>
              {stats.gfg.score && (
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-[11px] text-muted-foreground">
                  <span>Coding Score</span>
                  <span className="font-mono">{stats.gfg.score}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
              <AlertCircle className="size-8 mb-2 opacity-50" />
              <p className="text-sm">Live statistics unavailable.</p>
            </div>
          )}
        </PlatformCard>

        {/* Codolio Card */}
        <PlatformCard
          name="Codolio"
          stats={stats.codolio}
          icon={<Layers className="size-5 text-aurora-2" />}
          accentColor="var(--aurora-2)"
        >
          {stats.codolio.totalSolved > 0 ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card bg-surface-2/40 p-4 text-center">
                   <div className="text-2xl font-bold">{stats.codolio.totalSolved}</div>
                   <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Solved</div>
                </div>
                <div className="glass-card bg-surface-2/40 p-4 text-center">
                   <div className="text-2xl font-bold">{stats.codolio.activeDays || 0}</div>
                   <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Active Days</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="text-sm font-bold text-aurora-1">{stats.codolio.totalSubmissions || 0}</div>
                  <div className="text-[8px] uppercase text-muted-foreground">Subs</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-aurora-2">{stats.codolio.maxStreak || 0}</div>
                  <div className="text-[8px] uppercase text-muted-foreground">Max Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-emerald-500">{stats.codolio.currentStreak || 0}</div>
                  <div className="text-[8px] uppercase text-muted-foreground">Current</div>
                </div>
              </div>
              
              <div className="mt-4 flex flex-col items-center justify-center py-2 text-center">
                <img 
                  src={`https://raw.githubusercontent.com/imrajeevnayan/imrajeevnayan/main/dsa-stats/codolio.svg?t=${Date.now()}`} 
                  alt="Codolio Contribution Heatmap"
                  className="w-full rounded-lg bg-white/5 p-1 invert dark:invert-0 opacity-80"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
              <AlertCircle className="size-8 mb-2 opacity-50" />
              <p className="text-sm">Live statistics unavailable.</p>
            </div>
          )}
        </PlatformCard>
      </div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 overflow-hidden rounded-xl border border-border glass"
      >
        <div className="bg-surface-2/50 px-6 py-3 border-b border-border">
           <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Platform Comparison</h4>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="text-[10px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-6 py-4 font-medium">Platform</th>
              <th className="px-6 py-4 font-medium">Username</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Profile</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { ...stats.leetcode, type: 'coding' },
              { ...stats.gfg, type: 'coding' },
              { ...stats.codolio, type: 'coding' }
            ].map((p: any) => (
              <tr key={p.platform} className="group hover:bg-surface-2/30 transition-colors">
                <td className="px-6 py-4 font-medium text-foreground">{p.platform}</td>
                <td className="px-6 py-4 text-muted-foreground font-mono text-xs">{p.username}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-medium ${p.totalSolved > 0 ? 'text-emerald-500' : 'text-amber-500'}`}>
                    <span className={`size-1 rounded-full ${p.totalSolved > 0 ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                    {p.totalSolved > 0 ? 'Live' : 'Unavailable'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={p.profileUrl}
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

function PlatformCard({
  name,
  icon,
  stats,
  children,
  accentColor,
}: {
  name: string;
  icon: React.ReactNode;
  stats: any;
  children: React.ReactNode;
  accentColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      className="glass-card relative flex flex-col rounded-2xl p-6 transition-all hover:border-aurora-1/40 sm:hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-surface-2/80 ring-1 ring-border shadow-inner">
            {icon}
          </div>
          <h3 className="text-lg font-bold">{name}</h3>
        </div>
        <div className="size-2 rounded-full" style={{ backgroundColor: accentColor }} />
      </div>

      <div className="mb-4 flex items-center gap-1.5 text-[10px] font-medium">
         {stats.totalSolved > 0 ? (
           <span className="flex items-center gap-1.5 text-emerald-500">
             <CheckCircle2 className="size-3" />
             <span>Live Stats</span>
           </span>
         ) : (
           <span className="flex items-center gap-1.5 text-amber-500">
             <AlertCircle className="size-3" />
             <span>Unavailable</span>
           </span>
         )}
      </div>

      <div className="flex-1">{children}</div>

      <a
        href={stats.profileUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 group inline-flex w-full items-center justify-between rounded-xl bg-surface-2/80 border border-border px-5 py-3 text-[13px] font-semibold transition-all hover:bg-secondary hover:border-aurora-1/30"
      >
        <span>View Profile</span>
        <ExternalLink className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-aurora-1" />
      </a>
    </motion.div>
  );
}

function DifficultyBar({
  label,
  count,
  total,
  color,
}: {
  label: string;
  count: number;
  total: number;
  color: string;
}) {
  const percentage = total > 0 ? (count / total) * 100 : 0;

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] uppercase font-bold tracking-tighter text-muted-foreground">
        <span>{label}</span>
        <span className="text-foreground">{count}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2/50 border border-border/50">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
