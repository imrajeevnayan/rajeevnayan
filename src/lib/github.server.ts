const GH = "https://api.github.com";
const USER = "imrajeevnayan";

export type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
};

export type GithubStats = {
  followers: number;
  following: number;
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  languages: { name: string; count: number; percent: number }[];
  repos: GithubRepo[];
  contributions: { total: number; lastYear: number; currentStreak: number; bestDay: number };
  recent: { name: string; url: string; updated_at: string; language: string | null }[];
  stale: boolean;
};

export const emptyStats: GithubStats = {
  followers: 0,
  following: 0,
  publicRepos: 0,
  totalStars: 0,
  totalForks: 0,
  languages: [],
  repos: [],
  contributions: { total: 0, lastYear: 0, currentStreak: 0, bestDay: 0 },
  recent: [],
  stale: true,
};

async function gh(path: string) {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  const token = process.env["GITHUB_TOKEN"];
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(`${GH}${path}`, { headers });
  if (!res.ok) throw new Error(`GitHub request failed [${res.status}]`);
  return res.json();
}

type ContribDay = { date: string; count: number };

async function fetchContributions() {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`);
    if (!res.ok) throw new Error(`contributions request failed [${res.status}]`);
    const json = (await res.json()) as { total: Record<string, number>; contributions: ContribDay[] };
    const days = (json.contributions ?? []).filter((d) => new Date(d.date) <= new Date());
    const lastYear = Object.values(json.total ?? {}).reduce((a, b) => a + b, 0);
    let currentStreak = 0;
    for (let i = days.length - 1; i >= 0; i--) {
      const day = days[i];
      if (!day) break;
      if (day.count > 0) currentStreak++;
      else if (i !== days.length - 1) break;
    }
    const bestDay = days.reduce((m, d) => Math.max(m, d.count), 0);
    return { total: lastYear, lastYear, currentStreak, bestDay };
  } catch (err) {
    console.error("[github] contributions unavailable:", err);
    return { total: 0, lastYear: 0, currentStreak: 0, bestDay: 0 };
  }
}

export async function fetchGithubStats(): Promise<GithubStats> {
  try {
    const [user, repos, contributions] = await Promise.all([
      gh(`/users/${USER}`),
      gh(`/users/${USER}/repos?per_page=100&sort=updated`),
      fetchContributions(),
    ]);

    const list: GithubRepo[] = (repos as GithubRepo[]).map((r) => ({
      name: r.name,
      description: r.description,
      html_url: r.html_url,
      homepage: r.homepage,
      stargazers_count: r.stargazers_count,
      forks_count: r.forks_count,
      language: r.language,
      topics: r.topics ?? [],
      updated_at: r.updated_at,
    }));

    const counts = new Map<string, number>();
    for (const r of list) if (r.language) counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
    const total = [...counts.values()].reduce((a, b) => a + b, 0) || 1;
    const languages = [...counts.entries()]
      .map(([name, count]) => ({ name, count, percent: Math.round((count / total) * 100) }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    return {
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      totalStars: list.reduce((a, r) => a + r.stargazers_count, 0),
      totalForks: list.reduce((a, r) => a + r.forks_count, 0),
      languages,
      contributions,
      repos: list.sort((a, b) => b.stargazers_count - a.stargazers_count),
      recent: [...list]
        .sort((a, b) => +new Date(b.updated_at) - +new Date(a.updated_at))
        .slice(0, 6)
        .map((r) => ({ name: r.name, url: r.html_url, updated_at: r.updated_at, language: r.language })),
      stale: false,
    };
  } catch (err) {
    console.error("[github] falling back to empty stats:", err);
    return emptyStats;
  }
}
