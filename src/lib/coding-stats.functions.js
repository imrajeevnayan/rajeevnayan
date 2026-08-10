import { createServerFn } from "@tanstack/react-start";
export const getCodingStats = createServerFn({ method: "GET" }).handler(async () => {
    const { getCachedCodingStats } = await import("./coding-stats.server");
    return getCachedCodingStats();
});
export const refreshCodingStats = createServerFn({ method: "POST" }).handler(async () => {
    const { refreshCacheNow } = await import("./coding-stats.server");
    const stats = await refreshCacheNow();
    return {
        ...stats,
        summary: {
            ...stats.summary,
            isFromCache: false // Explicitly set to false for the immediate return
        }
    };
});
