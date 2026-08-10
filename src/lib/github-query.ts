import { queryOptions } from "@tanstack/react-query";
import { getGithubStats } from "./github.functions";

export const githubQueryOptions = queryOptions({
  queryKey: ["github", "imrajeevnayan"],
  queryFn: () => getGithubStats(),
  staleTime: 10 * 60 * 1000,
});
