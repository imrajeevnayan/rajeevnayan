import { queryOptions } from "@tanstack/react-query";
import { getCodingStats } from "./coding-stats.functions";

export const codingStatsQueryOptions = queryOptions({
  queryKey: ["coding-stats", "imrajeevnayan"],
  queryFn: () => getCodingStats(),
  staleTime: 5000, // Reduced staleTime so refetch() actually triggers a network call
});
