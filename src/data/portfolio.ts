/**
 * Real data extracted from:
 *  - https://github.com/imrajeevnayan (profile + public repositories)
 *  - https://rajeevnayan.in (existing portfolio source of truth)
 * No placeholder content.
 */

export const profile = {
  name: "Rajeev Nayan",
  handle: "imrajeevnayan",
  role: "Java Backend Engineer & System Architect",
  location: "India",
  email: "imrajeevnayan@gmail.com",
  phone: "+91 91550 28525",
  avatar: "https://avatars.githubusercontent.com/u/95278277?v=4",
  summary:
    "Build scalable, secure, high-performance backend systems using Java, Spring Boot, Microservices, REST APIs, SQL, Docker, and Cloud technologies.",
  bio: [
    "I am an MCA graduate and Java Backend Developer specializing in the Java & Spring Boot ecosystem. I focus on building production-grade microservices, secure REST APIs, and AI-powered RAG systems. My engineering approach is built on three pillars: Clean Code, Reliability, and Performance.",
    "My work spans enterprise domains — hospital management, fintech expense tracking, ticket booking and distributed order systems — where correctness, authentication and query performance matter more than surface polish. I ship with Docker, PostgreSQL, Redis and CI pipelines wired in from day one.",
  ],
  links: {
    github: "https://github.com/imrajeevnayan",
    linkedin: "https://linkedin.com/in/imrajeevnayan",
    leetcode: "https://leetcode.com/u/imrajeevnayan/",
    gfg: "https://www.geeksforgeeks.org/profile/imrajeevnayan",
    instagram: "https://www.instagram.com/imrajeevnayan",
    twitter: "https://x.com/imrajeevnayan",
    portfolio: "https://rajeevnayan.in",
    resume: "/resume.pdf",
  },
} as const;

export const rotatingTitles = [
  "Java Backend Engineer",
  "Spring Boot Developer",
  "Microservices Developer",
  "REST API Specialist",
  "Software Engineer",
  "Open Source Contributor",
];

export const pillars = [
  {
    title: "Distributed Systems",
    body: "Architecting resilient distributed systems and scalable microservice patterns for enterprise workloads.",
  },
  {
    title: "API Engineering",
    body: "Designing high-throughput APIs and robust server-side logic using modern Java and Spring ecosystems.",
  },
  {
    title: "Data Engineering",
    body: "Engineering efficient data flows and high-performance storage solutions using PostgreSQL and Redis.",
  },
  {
    title: "Security by Design",
    body: "Implementing secure-by-design principles and fault-tolerant patterns for mission-critical apps.",
  },
];

export const experience = [
  {
    role: "Open Source Backend Projects",
    company: "Independent / GitHub",
    location: "Remote",
    period: "2024 — Present",
    desc: "Shipping 69 public repositories, focused on Spring Boot services, Spring AI RAG pipelines and DSA practice in Java.",
    points: [
      "Authored Food Fiesta — a Spring Boot ordering platform with Spring MVC, Thymeleaf, multithreading and RESTful APIs (19 stars, 12 forks).",
      "Built Spring AI RAG systems (pdf-rag-spring-ai, rag-chatbot-springboot) using pgvector, embeddings and semantic search over uploaded documents.",
      "Delivered full-stack enterprise systems with Spring Boot 3 + React 19, JWT security, PostgreSQL and Redis.",
      "Maintains Java + SQL DSA solution sets across LeetCode, GeeksforGeeks and NeetCode.",
    ],
  },
];

export const education = {
  degree: "Master of Computer Applications (MCA)",
  school: "Dr. A.P.J. Abdul Kalam Technical University",
  period: "2022 — 2024",
  location: "Uttar Pradesh, India",
};

export const certifications = [
  { title: "SQL (Intermediate)", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/cf9c90c9bd72" },
  { title: "Problem Solving (Basic)", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/474087e59c25" },
  { title: "JavaScript (Basic)", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/60e7b99c750e" },
];

export const techStack = [
  { group: "Languages", items: ["Java", "SQL", "JavaScript", "TypeScript"] },
  {
    group: "Backend",
    items: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "JWT", "OAuth2"],
  },
  {
    group: "Architecture",
    items: ["Microservices", "MVC", "Clean Architecture", "Layered Architecture", "Repository Pattern", "SOLID Principles"],
  },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "Redis"] },
  { group: "DevOps", items: ["Docker", "Git", "GitHub Actions", "Maven", "Gradle"] },
  { group: "Cloud", items: ["AWS", "Render", "Railway", "Vercel"] },
  { group: "Tools", items: ["IntelliJ IDEA", "VS Code", "Postman", "Swagger/OpenAPI", "Bruno"] },
];

export const expertise = [
  {
    id: "rest",
    title: "REST API Development",
    blurb: "Contract-first endpoints that stay predictable under load.",
    items: ["CRUD APIs", "Pagination", "Filtering", "Validation", "Exception Handling", "API Versioning"],
  },
  {
    id: "security",
    title: "Authentication & Security",
    blurb: "Stateless auth wired through the Spring Security filter chain.",
    items: ["JWT", "Spring Security", "OAuth2", "Password Encryption", "Role-Based Access Control"],
  },
  {
    id: "data",
    title: "Database Engineering",
    blurb: "Schema design and query plans tuned before they become incidents.",
    items: ["JPA", "Hibernate", "Query Optimization", "Relationships", "Transactions", "Indexing"],
  },
  {
    id: "micro",
    title: "Microservices",
    blurb: "Services that fail independently and recover on their own.",
    items: ["Service Communication", "API Gateway", "Config Server", "Service Discovery", "Distributed Systems"],
  },
  {
    id: "perf",
    title: "Performance",
    blurb: "Latency work grounded in measurement, not guesswork.",
    items: ["Caching", "Redis", "Async Processing", "Thread Pools", "Connection Pooling"],
  },
];

export type ProjectDifficulty = "Intermediate" | "Advanced" | "Expert";
export type ProjectCategory = "Web Platform" | "Enterprise Systems" | "Distributed Systems" | "AI / RAG" | "Microservices";

export type FeaturedProject = {
  repo: string;
  title: string;
  description: string;
  architecture: string;
  stack: string[];
  features: string[];
  demo?: string;
  accent: string;
  difficulty: ProjectDifficulty;
  category: ProjectCategory;
};

/** Curated from the real repositories, ordered by backend depth. */
export const featuredProjects: FeaturedProject[] = [
  {
    repo: "Food-Fiesta",
    title: "Food Fiesta",
    description:
      "Spring Boot web application for online food ordering — browse menus, manage a cart and place orders, with an admin surface for menu and order management.",
    architecture:
      "Layered Spring MVC monolith: Thymeleaf view layer → REST controllers → service layer → Spring Data JPA repositories, with multithreaded order processing behind the service boundary.",
    stack: ["Java 8+", "Spring Boot", "Spring MVC", "Thymeleaf", "Spring Data JPA", "REST APIs", "Multithreading"],
    features: [
      "Menu browsing, cart and order placement flows",
      "Admin management for menu items and incoming orders",
      "RESTful API layer with design-pattern driven services",
      "Multithreaded processing for concurrent order handling",
    ],
    accent: "var(--java)",
    difficulty: "Intermediate",
    category: "Web Platform",
  },
  {
    repo: "Enterprise-Expense-Tracker",
    title: "Enterprise Expense Tracker",
    description:
      "Full-stack enterprise financial dashboard built on Spring Boot 3 and React 19, with JWT security, PostgreSQL persistence and Redis caching.",
    architecture:
      "Spring Boot 3 REST backend with a stateless JWT filter chain, PostgreSQL as system of record and Redis as a read-through cache; React 19 SPA consumes the API over versioned endpoints.",
    stack: ["Java 21/25", "Spring Boot 3", "Spring Security", "JWT", "PostgreSQL", "Redis", "Docker", "React 19"],
    features: [
      "JWT authentication with role-scoped access",
      "Redis-backed caching for dashboard aggregates",
      "PostgreSQL schema with indexed reporting queries",
      "Containerised deployment via Docker",
    ],
    accent: "var(--aurora-1)",
    difficulty: "Expert",
    category: "Enterprise Systems",
  },
  {
    repo: "Hospital-Management-System",
    title: "Hospital Management System",
    description:
      "Comprehensive, secure backend for hospital operations built with Spring Boot 3.x — users (patients, doctors, nurses, admins), appointments and medical records.",
    architecture:
      "Role-partitioned domain model behind Spring Security; appointment and records modules isolated as services, containerised with Docker Compose for reproducible environments.",
    stack: ["Java 25", "Spring Boot 3", "Spring Security", "PostgreSQL", "Docker", "Docker Compose"],
    features: [
      "Multi-role identity model across four user types",
      "Appointment scheduling and medical record management",
      "Spring Security authorisation on every endpoint",
      "Docker Compose environment parity",
    ],
    accent: "var(--aurora-2)",
    difficulty: "Advanced",
    category: "Enterprise Systems",
  },
  {
    repo: "BookMyShow",
    title: "BookMyShow Clone",
    description:
      "High-performance movie ticket booking system built with Java, Spring Boot and React — premium dark-mode UI over a transactional seat-booking core.",
    architecture:
      "REST API backend with transactional seat-locking to prevent double booking; PostgreSQL holds shows, seats and bookings, React client renders real-time seat state.",
    stack: ["Java", "Spring Boot", "REST API", "PostgreSQL", "React"],
    features: [
      "Transactional seat reservation and booking",
      "Show, theatre and seat-inventory modelling",
      "REST endpoints consumed by a React front end",
      "Interactive seat-selection experience",
    ],
    accent: "var(--aurora-3)",
    difficulty: "Expert",
    category: "Distributed Systems",
  },
  {
    repo: "pdf-rag-spring-ai",
    title: "PDF RAG with Spring AI",
    description:
      "Retrieval-Augmented Generation application built with Spring AI — document ingestion, vector search and AI-powered question answering over PDFs.",
    architecture:
      "Ingestion pipeline chunks and embeds PDFs into pgvector; a Spring AI retriever performs semantic search and grounds the LLM response through a REST query endpoint.",
    stack: ["Java", "Spring Boot", "Spring AI", "pgvector", "Embeddings", "Vector Search", "LLM"],
    features: [
      "PDF ingestion and chunked embedding pipeline",
      "pgvector-backed semantic retrieval",
      "Grounded question answering over a knowledge base",
      "REST interface for ingest and query",
    ],
    accent: "var(--chart-5)",
    difficulty: "Expert",
    category: "AI / RAG",
  },
  {
    repo: "url-shortener-springboot",
    title: "URL Shortener Service",
    description:
      "Spring Boot service that generates unique short links for long URLs, exposing REST APIs for creation, retrieval and redirection.",
    architecture:
      "Stateless REST service with a collision-safe short-code generator, persistence through Spring Data JPA and a redirect controller on the hot read path.",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "REST APIs", "SQL"],
    features: [
      "Unique short-code generation",
      "REST endpoints for create, resolve and redirect",
      "Persistent link store with JPA",
      "Lightweight, horizontally scalable service",
    ],
    accent: "var(--java)",
    difficulty: "Intermediate",
    category: "Microservices",
  },
];

export const codingProfiles = [
  { label: "LeetCode", href: profile.links.leetcode, note: "Java & SQL solutions by topic" },
  { label: "GeeksforGeeks", href: profile.links.gfg, note: "A2Z DSA sheet progress" },
  { label: "GitHub", href: profile.links.github, note: "69 public repositories" },
];

export type CaseStudy = {
  problem: string;
  solution: string;
  workflow: string[];
  choices: { tech: string; why: string }[];
};

/** Case-study framing for each featured repository. */
export const caseStudies: Record<string, CaseStudy> = {
  "Food-Fiesta": {
    problem:
      "Restaurant ordering flows break under concurrent traffic — carts drift out of sync and admins lose visibility of incoming orders.",
    solution:
      "A layered Spring MVC application where ordering, menu and admin concerns are isolated behind services, with multithreaded order processing so concurrent placements never block each other.",
    workflow: ["Thymeleaf / REST client", "Controller", "Order service (threaded)", "Spring Data JPA", "SQL database"],
    choices: [
      { tech: "Spring MVC + Thymeleaf", why: "Server-rendered flows keep cart state authoritative on the server." },
      { tech: "Multithreading", why: "Concurrent order handling without serialising the checkout path." },
      { tech: "Spring Data JPA", why: "Repository abstraction over the order and menu aggregates." },
    ],
  },
  "Enterprise-Expense-Tracker": {
    problem:
      "Finance dashboards aggregate the same expensive queries on every page load, and expense data must stay scoped per role.",
    solution:
      "A stateless Spring Boot 3 API secured by a JWT filter chain, with PostgreSQL as system of record and Redis caching the dashboard aggregates.",
    workflow: ["React 19 SPA", "JWT filter", "REST controller", "Service layer", "Redis cache", "PostgreSQL"],
    choices: [
      { tech: "JWT + Spring Security", why: "Stateless auth that scales horizontally with no session store." },
      { tech: "Redis", why: "Read-through cache removes repeated aggregate scans on the dashboard." },
      { tech: "PostgreSQL", why: "Indexed reporting queries over transactional expense data." },
    ],
  },
  "Hospital-Management-System": {
    problem:
      "Hospital data is inherently multi-tenant by role — patients, doctors, nurses and admins must never see each other's records.",
    solution:
      "A role-partitioned domain model where every endpoint is authorised through Spring Security, with appointments and medical records isolated as independent service modules.",
    workflow: ["Client", "Security filter", "Role-scoped controller", "Domain service", "JPA repository", "PostgreSQL"],
    choices: [
      { tech: "Spring Security", why: "Authorisation enforced at the endpoint, not in UI code." },
      { tech: "Docker Compose", why: "Reproducible environment parity across dev and staging." },
      { tech: "PostgreSQL", why: "Relational integrity for appointments and clinical records." },
    ],
  },
  BookMyShow: {
    problem: "Seat inventory is a classic race condition — two users must never book the same seat.",
    solution:
      "Transactional seat locking inside the booking service, so reservation and payment confirmation happen inside one atomic boundary.",
    workflow: ["React client", "Booking controller", "Transactional seat lock", "Booking service", "PostgreSQL"],
    choices: [
      { tech: "Transactional locking", why: "Prevents double booking under concurrent seat selection." },
      { tech: "PostgreSQL", why: "ACID guarantees on the shows, seats and bookings tables." },
      { tech: "REST + React", why: "Real-time seat state rendered from a single API contract." },
    ],
  },
  "pdf-rag-spring-ai": {
    problem: "LLM answers over private documents hallucinate without grounded retrieval.",
    solution:
      "An ingestion pipeline that chunks and embeds PDFs into pgvector, plus a retriever that grounds every model response in the retrieved passages.",
    workflow: ["PDF upload", "Chunk + embed", "pgvector store", "Semantic retrieval", "Spring AI + LLM", "Answer"],
    choices: [
      { tech: "Spring AI", why: "First-class embedding and retrieval abstractions inside the Spring stack." },
      { tech: "pgvector", why: "Vector search next to relational data — one database to operate." },
      { tech: "Chunked embeddings", why: "Keeps retrieval precise on long documents." },
    ],
  },
  "url-shortener-springboot": {
    problem: "Redirects are a hot read path — code generation must be collision-safe while resolution stays sub-millisecond.",
    solution:
      "A stateless REST service with a collision-safe short-code generator and a dedicated redirect controller kept off the write path.",
    workflow: ["Client", "Create endpoint", "Code generator", "JPA persistence", "Redirect controller"],
    choices: [
      { tech: "Stateless service", why: "Horizontally scalable behind any load balancer." },
      { tech: "Spring Data JPA", why: "Simple, indexed lookups on the short-code column." },
      { tech: "Dedicated redirect path", why: "Read path isolated from creation logic." },
    ],
  },
};

export const systemDesign = [
  { title: "Scalable Architecture", body: "Stateless services, horizontal scaling and clear bounded contexts per domain." },
  { title: "API Gateway", body: "Single entry point for routing, auth propagation and cross-cutting concerns." },
  { title: "Caching", body: "Read-through Redis layers on aggregate-heavy endpoints, with explicit invalidation." },
  { title: "Database Optimization", body: "Index design, query plans and connection pooling over premature sharding." },
  { title: "Distributed Systems", body: "Idempotency, retries and failure isolation between service boundaries." },
];
