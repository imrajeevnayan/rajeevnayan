import { createServerFn } from "@tanstack/react-start";
import { fetchGithubStats } from "./github.server";
import type { GithubStats } from "./github.server";

export type { GithubRepo, GithubStats } from "./github.server";

export const getGithubStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<GithubStats> => fetchGithubStats(),
);
