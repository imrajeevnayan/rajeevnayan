import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { profile, featuredProjects, caseStudies } from "@/data/portfolio";
import { getCodingStats } from "./coding-stats.functions";
import { getGithubStats } from "./github.functions";

export const chat = createServerFn({ method: "POST" })
  .validator((data: unknown) => z.object({ message: z.string() }).parse(data))
  .handler(async ({ data: input }) => {
    const msg = input.message.toLowerCase();
    
    // Technical Keyword check for RAG simulation
    if (msg.includes("java") || msg.includes("spring") || msg.includes("boot")) {
      return `Rajeev is a specialist in the Java ecosystem. He uses Java 21/25 features, Spring Boot 3, Spring Security for stateless JWT auth, and Spring Data JPA. One of his core projects, "Enterprise Expense Tracker", leverages these for role-scoped financial tracking.`;
    }

    if (msg.includes("architecture") || msg.includes("system design") || msg.includes("distributed")) {
      return `For distributed systems, Rajeev implements microservices patterns including API Gateways, Service Discovery, and transactional consistency. He uses Redis for aggregate caching and pgvector for semantic search in AI pipelines.`;
    }

    if (msg.includes("rag") || msg.includes("ai") || msg.includes("embedding") || msg.includes("vector")) {
      return `Rajeev has engineered RAG (Retrieval-Augmented Generation) systems using Spring AI. He built "pdf-rag-spring-ai" which uses pgvector for semantic search over chunked document embeddings, grounding LLM responses in private data.`;
    }

    if (msg.includes("about") || msg.includes("who is")) {
      return `Rajeev Nayan is a ${profile.role} based in ${profile.location}. ${profile.summary} He focuses on building production-grade microservices and secure REST APIs.`;
    }

    if (msg.includes("skill")) {
      return `Core Expertise: Java (21+), Spring Boot 3, Microservices, PostgreSQL (pgvector), Redis, Docker, and AI/RAG architectures. He prioritizes Clean Code and high-performance backend logic.`;
    }

    if (msg.includes("project")) {
      const titles = featuredProjects.map(p => p.title).join(", ");
      return `Rajeev has delivered several enterprise systems including: ${titles}. Most projects feature comprehensive case studies covering problem, solution, and architectural choices.`;
    }

    if (msg.includes("coding") || msg.includes("leetcode") || msg.includes("problem") || msg.includes("solved") || msg.includes("gfg")) {
      try {
        const stats = await getCodingStats();
        if (stats && stats.summary.totalSolved > 0) {
          let response = `Rajeev has solved over ${stats.summary.totalSolved} problems across ${stats.summary.platformCount} platforms. `;
          response += `On LeetCode, he has solved ${stats.leetcode.totalSolved} problems. `;
          response += `His current activity status is "${stats.summary.activeStatus}".`;
          return response;
        }
      } catch (e) {}
      return "Rajeev is highly active in competitive programming, solving hundreds of complex DSA problems in Java and SQL on LeetCode and GeeksforGeeks.";
    }

    if (msg.includes("github") || msg.includes("repo") || msg.includes("stars")) {
      try {
        const stats = await getGithubStats();
        if (!stats.stale) {
          return `Rajeev maintains ${stats.publicRepos} public repositories with ${stats.totalStars} total stars. His most active languages are ${stats.languages.map(l => l.name).join(", ")}.`;
        }
      } catch (e) {}
    }

    if (msg.includes("contact") || msg.includes("email")) {
      return `You can connect with Rajeev via email at ${profile.email} or through his LinkedIn profile. He is currently open to Senior Java Backend opportunities.`;
    }

    return "I'm Rajeev's AI assistant, grounded in his engineering portfolio. I can explain his Java/Spring Boot expertise, RAG implementations, system design choices, or provide live coding statistics. What technical aspect would you like to explore?";
  });
