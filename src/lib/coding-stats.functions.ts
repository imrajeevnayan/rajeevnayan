import { createServerFn } from "@tanstack/react-start";

export interface PlatformStats {
  platform: string;
  username: string;
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  rating: number | null;
  ranking: number | null;
  score: number | null;
  badges: number;
  profileUrl: string;
  activity?: { date: string; count: number }[];
  activeDays?: number;
  maxStreak?: number;
  currentStreak?: number;
  totalSubmissions?: number;
  languages?: { name: string; count: number }[];
}

export interface CodingStats {
  leetcode: PlatformStats;
  gfg: PlatformStats;
  codolio: PlatformStats;
  summary: {
    totalSolved: number;
    platformCount: number;
    activeStatus: string;
    lastUpdated: number;
    isFromCache: boolean;
  };
}

export const getCodingStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<CodingStats> => {
    const { getCachedCodingStats } = await import("./coding-stats.server");
    return getCachedCodingStats();
  }
);

export const refreshCodingStats = createServerFn({ method: "POST" }).handler(
  async (): Promise<CodingStats> => {
    const { refreshCacheNow } = await import("./coding-stats.server");
    const stats = await refreshCacheNow();
    return {
      ...stats,
      summary: {
        ...stats.summary,
        isFromCache: false // Explicitly set to false for the immediate return
      }
    };
  }
);
