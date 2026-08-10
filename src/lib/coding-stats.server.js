const USERNAME = "imrajeevnayan";
let globalCache = null;
let lastManualRefresh = 0;
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes for auto-refresh logic
const REFRESH_COOLDOWN = 1000 * 60 * 5; // 5 minutes cooldown for manual refresh
async function fetchPlatformStatsFromSVG(platform) {
    const username = USERNAME;
    const svgUrl = `https://raw.githubusercontent.com/${username}/${username}/main/dsa-stats/${platform}.svg`;
    const defaultStats = {
        platform: platform === "leetcode" ? "LeetCode" : platform === "gfg" ? "GeeksforGeeks" : "Codolio",
        username,
        totalSolved: 0,
        easy: 0,
        medium: 0,
        hard: 0,
        rating: null,
        ranking: null,
        score: null,
        badges: 0,
        profileUrl: platform === "leetcode"
            ? `https://leetcode.com/u/${username}/`
            : platform === "gfg"
                ? `https://www.geeksforgeeks.org/profile/${username}?tab=activity`
                : `https://codolio.com/profile/${username}`,
    };
    try {
        const res = await fetch(svgUrl, { cache: 'no-store' });
        if (!res.ok)
            throw new Error(`Failed to fetch ${platform} SVG`);
        const svg = await res.text();
        if (platform === "leetcode") {
            const solvedMatch = svg.match(/>(\d+)\s*<tspan[^>]*>Solved/);
            const easyMatch = svg.match(/Easy:\s*(\d+)/);
            const mediumMatch = svg.match(/Medium:\s*(\d+)/);
            const hardMatch = svg.match(/Hard:\s*(\d+)/);
            return {
                ...defaultStats,
                totalSolved: solvedMatch && solvedMatch[1] ? parseInt(solvedMatch[1]) : 0,
                easy: easyMatch && easyMatch[1] ? parseInt(easyMatch[1]) : 0,
                medium: mediumMatch && mediumMatch[1] ? parseInt(mediumMatch[1]) : 0,
                hard: hardMatch && hardMatch[1] ? parseInt(hardMatch[1]) : 0,
            };
        }
        else if (platform === "gfg") {
            const solvedMatch = svg.match(/>(\d+)\s*<tspan[^>]*>Solved/);
            const easyMatch = svg.match(/Easy:\s*(\d+)/);
            const mediumMatch = svg.match(/Medium:\s*(\d+)/);
            const hardMatch = svg.match(/Hard:\s*(\d+)/);
            const basicMatch = svg.match(/Basic:\s*(\d+)/);
            const scoreMatch = svg.match(/Score:\s*(\d+)/);
            const rankMatch = svg.match(/Rank:\s*(\d+)/);
            return {
                ...defaultStats,
                totalSolved: solvedMatch && solvedMatch[1] ? parseInt(solvedMatch[1]) : 0,
                easy: (easyMatch && easyMatch[1] ? parseInt(easyMatch[1]) : 0) + (basicMatch && basicMatch[1] ? parseInt(basicMatch[1]) : 0),
                medium: mediumMatch && mediumMatch[1] ? parseInt(mediumMatch[1]) : 0,
                hard: hardMatch && hardMatch[1] ? parseInt(hardMatch[1]) : 0,
                score: scoreMatch && scoreMatch[1] ? parseInt(scoreMatch[1]) : null,
                ranking: rankMatch && rankMatch[1] ? parseInt(rankMatch[1]) : null,
            };
        }
        else if (platform === "codolio") {
            const solvedMatch = svg.match(/>(\d+)\s*<tspan[^>]*>Questions/);
            const activeDaysMatch = svg.match(/>(\d+)\s*<tspan[^>]*>Active Days/);
            const submissionsMatch = svg.match(/Submissions\s*(\d+)/);
            const maxStreakMatch = svg.match(/Max\.Streak\s*(\d+)/);
            const currentStreakMatch = svg.match(/Current\.Streak\s*(\d+)/);
            return {
                ...defaultStats,
                totalSolved: solvedMatch && solvedMatch[1] ? parseInt(solvedMatch[1]) : 0,
                activeDays: activeDaysMatch && activeDaysMatch[1] ? parseInt(activeDaysMatch[1]) : 0,
                totalSubmissions: submissionsMatch && submissionsMatch[1] ? parseInt(submissionsMatch[1]) : 0,
                maxStreak: maxStreakMatch && maxStreakMatch[1] ? parseInt(maxStreakMatch[1]) : 0,
                currentStreak: currentStreakMatch && currentStreakMatch[1] ? parseInt(currentStreakMatch[1]) : 0,
            };
        }
    }
    catch (e) {
        console.error(`Error parsing ${platform} stats:`, e);
    }
    return defaultStats;
}
export async function fetchAllStats() {
    const [lc, gfg, codolio] = await Promise.all([
        fetchPlatformStatsFromSVG("leetcode"),
        fetchPlatformStatsFromSVG("gfg"),
        fetchPlatformStatsFromSVG("codolio"),
    ]);
    const totalSolved = lc.totalSolved + gfg.totalSolved;
    return {
        leetcode: lc,
        gfg,
        codolio,
        summary: {
            totalSolved: totalSolved || 0,
            platformCount: 3,
            activeStatus: "Active",
            lastUpdated: Date.now(),
            isFromCache: false,
        },
    };
}
export async function getCachedCodingStats() {
    const now = Date.now();
    if (globalCache) {
        const age = now - globalCache.timestamp;
        // If cache is still very fresh (under 1 min), return immediately
        if (age < 1000 * 60) {
            return {
                ...globalCache.stats,
                summary: { ...globalCache.stats.summary, isFromCache: true }
            };
        }
        // If cache is starting to get old (over 30 mins), trigger a background refresh
        if (age > CACHE_DURATION) {
            console.log(`[Server] Cache expired (${age / 1000}s). Triggering background refresh...`);
            // Fire and forget
            refreshCacheInBackground();
        }
        // Return current cache while background refresh happens
        console.log(`[Server] Serving coding stats from cache. Age: ${age / 1000}s`);
        return {
            ...globalCache.stats,
            summary: {
                ...globalCache.stats.summary,
                isFromCache: true
            }
        };
    }
    // Initial fetch if cache is empty
    const stats = await fetchAllStats();
    globalCache = {
        stats,
        timestamp: now
    };
    return stats;
}
export async function refreshCacheNow() {
    const now = Date.now();
    if (now - lastManualRefresh < REFRESH_COOLDOWN) {
        const remaining = Math.ceil((REFRESH_COOLDOWN - (now - lastManualRefresh)) / 1000 / 60);
        throw new Error(`Rate limit reached. Please wait ${remaining} minute(s) before refreshing again.`);
    }
    const stats = await fetchAllStats();
    globalCache = {
        stats,
        timestamp: now
    };
    lastManualRefresh = now;
    return stats;
}
let isRefreshing = false;
async function refreshCacheInBackground() {
    if (isRefreshing)
        return;
    isRefreshing = true;
    try {
        const stats = await fetchAllStats();
        globalCache = {
            stats,
            timestamp: Date.now()
        };
    }
    catch (e) {
        console.error("Failed to background refresh coding stats", e);
    }
    finally {
        isRefreshing = false;
    }
}
