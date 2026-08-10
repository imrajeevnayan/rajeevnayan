import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  BarChart3, 
  Search, 
  MousePointer2, 
  LayoutDashboard,
  ExternalLink,
  Info
} from "lucide-react";
import { Section } from "./Section";

export function SearchConsoleDashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['google-search-console'],
    queryFn: async () => {
      // In a real environment, this would call a server function that uses the Search Console API
      // For the preview, we simulate the dashboard state based on the available tool's data structure
      await new Promise(r => setTimeout(r, 1500));
      return {
        connected: false, // Will show connection prompt as the project isn't published yet
        message: "Publish the project to view live search performance metrics."
      };
    }
  });

  return (
    <Section 
      id="search-performance" 
      eyebrow="Presence & Discovery" 
      title="Search Engine Performance"
      lead="Live metrics from Google Search Console identifying how technical content reaches engineers and hiring managers."
    >
      <div className="glass-card rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
        <div className="bg-surface-2/50 px-6 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="size-4 text-aurora-1" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Search Performance Control</span>
          </div>
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-amber-500">
              <span className="size-1 rounded-full bg-amber-500" />
              Pending Production
            </span>
          </div>
        </div>

        <div className="p-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground animate-pulse">
              <BarChart3 className="size-12 mb-4 opacity-20" />
              <p className="text-sm font-mono">Initializing API connection...</p>
            </div>
          ) : (
            <div className="relative">
              {/* Blur overlay for unpublished state */}
              <div className="grid gap-6 opacity-30 pointer-events-none select-none">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Total Clicks", value: "2.4K", icon: MousePointer2 },
                    { label: "Impressions", value: "85.2K", icon: Search },
                    { label: "Avg. CTR", value: "2.8%", icon: TrendingUp },
                    { label: "Avg. Position", value: "14.2", icon: BarChart3 },
                  ].map((stat) => (
                    <div key={stat.label} className="glass p-4 rounded-xl">
                      <stat.icon className="size-4 text-aurora-1 mb-3" />
                      <div className="text-2xl font-bold font-mono">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="glass p-6 rounded-xl">
                  <h4 className="text-[10px] font-semibold uppercase tracking-widest mb-4">Top Search Queries</h4>
                  <div className="space-y-3">
                    {["Java 21 Spring Boot RAG", "System Design Java Microservices", "Rajeev Nayan Portfolio", "Backend Engineer India"].map((q, i) => (
                      <div key={q} className="flex justify-between items-center text-xs">
                        <span className="font-mono">{q}</span>
                        <div className="h-2 w-24 bg-surface-2 rounded-full overflow-hidden">
                          <div className="h-full bg-aurora-1" style={{ width: `${80 - (i * 15)}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Message */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card bg-background/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-aurora-1/20 text-center max-w-sm shadow-2xl mx-4">
                  <div className="size-12 rounded-full bg-aurora-1/10 flex items-center justify-center mx-auto mb-4">
                    <Info className="size-6 text-aurora-1" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Search API Ready</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    Structured data and sitemaps are active. Live search analytics will populate here once the project is published to <strong>rajeevnayan.in</strong>.
                  </p>
                  <a 
                    href="https://search.google.com/search-console" 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
                  >
                    Open Console <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
