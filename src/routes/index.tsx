import { useState, useEffect } from "react";
import posthog from "posthog-js";
import { createFileRoute } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingNav } from "@/components/FloatingNav";
import { CommandPalette } from "@/components/CommandPalette";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { GithubDashboard } from "@/components/GithubDashboard";
import { Expertise } from "@/components/Expertise";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { CodingProblemSolving } from "@/components/CodingProblemSolving";
import { AiDemo } from "@/components/AiDemo";
import { InteractiveSystemVisualizer } from "@/components/InteractiveSystemVisualizer";

import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { AiChat } from "@/components/AiChat";
import { Terminal } from "@/components/Terminal";

import { githubQueryOptions } from "@/lib/github-query";
import { codingStatsQueryOptions } from "@/lib/coding-stats-query";
import { profile, featuredProjects } from "@/data/portfolio";

const title = "Rajeev Nayan | Java Backend Engineer & System Architect";
const description =
  "Senior software engineering portfolio of Rajeev Nayan. Expertise in Java 21, Spring Boot 3, Microservices, Distributed Systems, and AI/RAG architectures. Demonstrating high-performance backend systems through live GitHub metrics and technical case studies.";





export const Route = createFileRoute("/")({
  loader: async ({ context }) => {
    await Promise.all([
      context.queryClient.ensureQueryData(githubQueryOptions),
      context.queryClient.ensureQueryData(codingStatsQueryOptions),
    ]);
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "google-site-verification", content: "VITE_GOOGLE_VERIFICATION_TOKEN" },
      { name: "author", content: profile.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://rajeevnayan.in" },
      { property: "og:image", content: profile.avatar },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: profile.avatar },
      { name: "twitter:site", content: "@imrajeevnayan" },
    ],
    links: [
      { rel: "canonical", href: "https://rajeevnayan.in" },
      { rel: "alternate", href: "https://rajeevnayan.in", hreflang: "en" },
      { rel: "alternate", href: "https://rajeevnayan.in/hi", hreflang: "hi" },
      { rel: "alternate", href: "https://rajeevnayan.in/de", hreflang: "de" },
      { rel: "alternate", href: "https://rajeevnayan.in", hreflang: "x-default" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": profile.name,
            "jobTitle": profile.role,
            "url": "https://rajeevnayan.in",
            "image": "https://avatars.githubusercontent.com/u/95278277?v=4",
            "description": profile.summary,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "India"
            },
            "sameAs": [
              profile.links.github,
              profile.links.linkedin,
              profile.links.leetcode,
              profile.links.gfg,
              profile.links.instagram,
              profile.links.twitter
            ],
            "knowsAbout": ["Java", "Spring Boot", "Microservices", "System Architecture", "PostgreSQL", "Docker", "AI", "RAG"]
          },
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": `${profile.name} - Software Engineering`,
            "image": "https://avatars.githubusercontent.com/u/95278277?v=4",
            "url": "https://rajeevnayan.in",
            "telephone": profile.phone,
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "India"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Featured Engineering Projects",
            "itemListElement": featuredProjects.map((p, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "SoftwareSourceCode",
                "name": p.title,
                "description": p.description,
                "programmingLanguage": "Java",
                "codeRepository": `https://github.com/imrajeevnayan/${p.repo}`,
                "author": {
                  "@type": "Person",
                  "name": profile.name
                }
              }
            }))
          }
        ]),
      },
    ],
  }),
  component: Index,
  errorComponent: ({ error }) => (
    <div role="alert" className="flex min-h-screen items-center justify-center p-8 text-sm text-muted-foreground">
      {error.message}
    </div>
  ),
  notFoundComponent: () => <div className="p-8">Not found.</div>,
});

function Index() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "`" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    
    // Track page view
    if (typeof window !== "undefined") {
      posthog.capture('$pageview');
    }

    return () => window.removeEventListener("keydown", handleKey);

  }, []);

  return (
    <div className="relative min-h-screen">
      <AuroraBackground />
      <CustomCursor />
      <ScrollProgress />

      <FloatingNav onOpenPalette={() => setPaletteOpen(true)} onOpenTerminal={() => setTerminalOpen(true)} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} onOpenTerminal={() => setTerminalOpen(true)} />
      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />

      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <About />
        <TechStack />
        <Experience />
        <CodingProblemSolving />
        <Projects />
        <Expertise />
        <InteractiveSystemVisualizer />
        <AiDemo />
        <GithubDashboard />
        
        <Certifications />
        <Contact />

      </main>

      <AiChat />

      <Footer />
    </div>
  );
}
