import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Target, Cpu, HelpCircle, Key, Server, Globe, Play, Check } from 'lucide-react';
import ScrollingPreview from './scrolling-preview';

import hospitalImage from '../assets/hospital_mockup.png';
import aiChatImage from '../assets/ai_chat.png';
import urlShortenerImage from '../assets/url_shortener.png';
import bookmyshowImage from '../assets/movie_booking.png';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  features: string;
  architecture: string;
  workflow: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
  endpoint: string;
  mockResponse: object;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'rag-system',
    title: 'RAG Document Q&A System',
    subtitle: 'AI-Powered Document Intelligence',
    problem: 'Traditional document search systems suffer from keyword mismatches and lack contextual reasoning, while generative AI models frequently hallucinate facts when answering questions from external private files.',
    solution: 'Built an end-to-end Retrieval-Augmented Generation (RAG) backend utilizing document semantic ingestion, vector database searches, and grounded prompt boundaries to restrict responses to retrieved context.',
    features: 'Multi-format PDF ingestion, semantic chunking pipelines, automatic index generation, and context-restricted response synthesis.',
    architecture: 'Spring Boot REST backend communicating with Qdrant Vector DB for vector similarity matching and OpenRouter API for LLM reasoning.',
    workflow: 'Document upload -> text parsing -> vector embedding mapping -> search indexing. Query -> vector lookup -> prompt generation -> LLM response.',
    tech: ['Java 21', 'Spring Boot', 'Qdrant', 'OpenRouter API', 'Docker', 'REST APIs'],
    github: 'https://github.com/imrajeevnayan/rag-document-qa',
    image: urlShortenerImage,
    endpoint: 'POST /api/v1/rag/ask',
    mockResponse: {
      status: "SUCCESS",
      query: "What are the core microservices in our stack?",
      answer: "Based on the uploaded architecture spec (PDF), the core microservices are API Gateway, Auth Service, and Employee Catalog Service.",
      confidence: 0.98,
      sourceChunks: [
        { file: "arch-spec.pdf", page: 2, chunk: "Primary stack utilizes Spring Cloud API Gateway routing traffic to Auth and Catalog services." }
      ]
    }
  },
  {
    id: 'ai-chat',
    title: 'AI Chat Gateway',
    subtitle: 'High-Performance LLM Proxy',
    problem: 'Direct frontend integration with multiple LLM endpoints leads to key exposures, lack of central rate-limiting, and complex client-side configuration switches.',
    solution: 'Designed and implemented a high-performance Spring Boot gateway proxy managing request routing, caching, error retry logic, and sub-200ms API routing latency.',
    features: 'Resilient request routing, custom API rate-limiting, circuit breakers, and zero-downtime microservice configuration switching.',
    architecture: 'Stateless Spring Boot gateway communicating with external LLM proxies via OpenRouter API with automated Swagger schema specifications.',
    workflow: 'Client request -> API key authentication -> rate limit evaluation -> payload forwarding -> LLM stream mapping -> response.',
    tech: ['Java 17', 'Spring Boot', 'OpenRouter API', 'REST APIs', 'Docker', 'Swagger'],
    github: 'https://github.com/imrajeevnayan/springboot-ai-chat-backend',
    image: aiChatImage,
    endpoint: 'POST /api/v1/chat/completions',
    mockResponse: {
      id: "chat-578129",
      object: "chat.completion",
      created: 1722543120,
      choices: [
        { message: { role: "assistant", content: "Greetings! I am Rajeev's AI assistant proxy routing through Spring Boot." } }
      ],
      usage: { total_tokens: 35 }
    }
  },
  {
    id: 'hospital-system',
    title: 'Hospital Management System',
    subtitle: 'Secure Enterprise Backend Operations',
    problem: 'Healthcare portals require ironclad role isolation (doctors, staff, patients), fast record lookups, and standardized interfaces to manage sensitive patient files securely.',
    solution: 'Developed an enterprise management portal securing 20+ routes with JWT-based Spring Security and caching database query results to cut response lag.',
    features: 'Multi-role JWT auth controllers, CRUD pathways for records, and Redis caching layers for optimized queries.',
    architecture: 'Spring Boot, Spring Security JWT, JPA/Hibernate persistence, Redis cache store, and normalized MySQL relational schema.',
    workflow: 'User login -> JWT token validation -> role-based routing check -> query cache interception -> database persistence return.',
    tech: ['Spring Boot', 'MySQL', 'Spring Security', 'Redis', 'Docker', 'Swagger'],
    github: 'https://github.com/imrajeevnayan/Hospital-Management-System',
    image: hospitalImage,
    endpoint: 'GET /api/v1/hospital/doctors?specialty=cardiology',
    mockResponse: {
      specialty: "cardiology",
      activeDoctors: [
        { id: 102, name: "Dr. John Watson", status: "AVAILABLE", room: "302-B" }
      ],
      cacheHit: true,
      executionTimeMs: 4
    }
  },
  {
    id: 'employee-system',
    title: 'Company & Employee Manager',
    subtitle: 'Enterprise Operations Hub',
    problem: 'Legacy employee tracking structures fail to handle complex department hierarchies dynamically, leading to data drift and slow report calculations.',
    solution: 'Developed a staff operations tracker enforcing hierarchical constraint rules and caching organization statistics for rapid UI renders.',
    features: 'Hierarchical node tracking, bulk records update, dynamic department filters, and automated statistics generation.',
    architecture: 'React user dashboard matching Spring Boot REST service. Persistent entity mappings handled via JPA Hibernate.',
    workflow: 'Admin action -> payload validation -> relational constraint verification -> JPA mapping cache update -> persistent storage write.',
    tech: ['Java 17', 'Spring Boot', 'React.js', 'TypeScript', 'MySQL', 'Hibernate'],
    github: 'https://github.com/imrajeevnayan/Company-Employee-Management-System',
    image: hospitalImage,
    endpoint: 'GET /api/v1/departments/stats',
    mockResponse: {
      departmentsCount: 5,
      totalEmployees: 140,
      averageTenureYears: 3.4,
      updatedTimestamp: "2026-08-01T23:12:00Z"
    }
  },
  {
    id: 'url-shortener-sb',
    title: 'VeloLink URL Shortener',
    subtitle: 'High-Throughput Link Redirection',
    problem: 'Generating and storing shortened URL links at scale causes hash collisions and slows database read/write processes under heavy click redirection loads.',
    solution: 'Built a high-performance link redirection engine with collision resolution algorithms and Redis-based cache lookup to route links in sub-5ms.',
    features: 'Link shortener algorithm, link expiration, dashboard click trackers, and custom alias support.',
    architecture: 'Spring Boot REST backend, persistent PostgreSQL schema, and fast-read caching store powered by Redis.',
    workflow: 'Alias generation -> unique database write -> Redis cache population. Short Link click -> Redis cache match -> 302 redirect.',
    tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Redis', 'REST APIs', 'Docker'],
    github: 'https://github.com/imrajeevnayan/url-shortener-springboot',
    image: urlShortenerImage,
    endpoint: 'GET /api/v1/links/redirect/vl-3902',
    mockResponse: {
      originalUrl: "https://github.com/imrajeevnayan/url-shortener-springboot",
      alias: "vl-3902",
      active: true,
      clicks: 840,
      cacheHit: true
    }
  },
  {
    id: 'food-fiesta',
    title: 'Food Fiesta Delivery',
    subtitle: 'E-Commerce Ordering Portal',
    problem: 'Food ordering platforms face transaction concurrency issues, cart synchronization errors, and poor catalog indexing, lowering checkout conversion speeds.',
    solution: 'Engineered a transactional delivery catalog using normalized MySQL queries, isolated Spring JDBC transaction states, and modular React state controllers.',
    features: 'Category item mapping, shopping cart tracking, atomic checkout validation, and user profile profiles.',
    architecture: 'Spring Boot server framework, client Bootstrap view components, and MySQL persistence mapping storage.',
    workflow: 'Catalog filter lookup -> cart assembly state -> checkout call -> inventory transaction check -> complete order generation.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React.js', 'Bootstrap'],
    github: 'https://github.com/imrajeevnayan/Food-Fiesta',
    image: bookmyshowImage,
    endpoint: 'POST /api/v1/orders/checkout',
    mockResponse: {
      orderId: "ord-88392",
      status: "CONFIRMED",
      itemsCount: 3,
      totalAmount: 42.50,
      transactionStatus: "SUCCESS"
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'problem' | 'workflow' | 'playground'>('overview');
  
  // Swagger simulator states
  const [isSending, setIsSending] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSendRequest = () => {
    setIsSending(true);
    setShowResponse(false);
    setTimeout(() => {
      setIsSending(false);
      setShowResponse(true);
    }, 600);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-[var(--surface-card)]/40 border-y border-[var(--border-main)] backdrop-blur-sm">
      <div className="section-container">
        <div className="max-w-2xl mb-8 md:mb-14">
          <span className="badge-premium mb-4">Case Studies</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Engineering <span className="text-gradient">Solutions</span> at Scale
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base font-light leading-relaxed">
            Detailed breakdowns of how I solve complex architectural problems through performance-first engineering and modern design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                setSelectedProject(project);
                setActiveTab('overview');
                setShowResponse(false);
              }}
              className="group relative rounded-xl overflow-hidden border border-[var(--border-main)] bg-[var(--surface-card)] cursor-pointer hover:border-[var(--brand-accent)] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col h-[280px]"
            >
              <div className="relative w-full h-full overflow-hidden flex-1">
                <ScrollingPreview
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="absolute w-full h-24 bottom-0 left-0 bg-gradient-to-t from-[var(--surface-card)] via-[var(--surface-card)]/90 to-transparent pointer-events-none z-10 flex flex-col justify-end p-5">
                <span className="text-[10px] text-[var(--color-button-blue)] uppercase tracking-wider font-semibold mb-0.5">
                  {project.subtitle}
                </span>
                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-accent)] transition-colors line-clamp-1">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[var(--surface-card)] border border-[var(--border-main)] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 p-2 rounded-full bg-[var(--surface-main)] hover:bg-[var(--border-main)] text-[var(--text-secondary)] transition-all z-20"
                >
                  <X size={18} />
                </button>

                <div className="relative w-full h-44 md:h-56 overflow-hidden border-b border-[var(--border-main)] bg-[var(--bg-main)]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-card)] via-transparent to-black/20" />
                </div>

                <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
                  <div className="space-y-1">
                    <span className="text-xs text-[var(--color-button-blue)] font-semibold tracking-wider uppercase">
                      {selectedProject.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Tab Controls */}
                  <div className="inline-flex gap-1 bg-[var(--surface-main)] p-1 rounded-full border border-[var(--border-main)]">
                    {(['overview', 'problem', 'workflow', 'playground'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          setActiveTab(tab);
                          setShowResponse(false);
                        }}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                          activeTab === tab
                            ? 'bg-white dark:bg-[var(--surface-card)] text-[var(--color-button-blue)] shadow-sm'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {tab === 'overview' 
                          ? 'Overview' 
                          : tab === 'problem' 
                            ? 'Problem & Solution' 
                            : tab === 'workflow' 
                              ? 'Architecture' 
                              : 'API Swagger Playground'}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[100px] text-sm text-[var(--text-secondary)] leading-relaxed font-light font-sans">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        {activeTab === 'overview' && (
                          <div className="space-y-3">
                            <div className="flex gap-3 items-start">
                              <Target className="text-[var(--color-button-blue)] shrink-0 mt-0.5" size={18} />
                              <p><strong className="text-[var(--text-primary)] font-semibold">Key Features:</strong> {selectedProject.features}</p>
                            </div>
                            <div className="flex gap-3 items-start">
                              <Cpu className="text-[var(--color-button-blue)] shrink-0 mt-0.5" size={18} />
                              <p><strong className="text-[var(--text-primary)] font-semibold">Architecture Setup:</strong> {selectedProject.architecture}</p>
                            </div>
                          </div>
                        )}
                        
                        {activeTab === 'problem' && (
                          <div className="space-y-3">
                            <div className="flex gap-3 items-start">
                              <HelpCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
                              <p><strong className="text-[var(--text-primary)] font-semibold">The Problem:</strong> {selectedProject.problem}</p>
                            </div>
                            <div className="flex gap-3 items-start">
                              <Key className="text-green-400 shrink-0 mt-0.5" size={18} />
                              <p><strong className="text-[var(--text-primary)] font-semibold">The Solution:</strong> {selectedProject.solution}</p>
                            </div>
                          </div>
                        )}
                        
                        {activeTab === 'workflow' && (
                          <div className="space-y-6 font-sans">
                            <div className="flex gap-3 items-start">
                              <Cpu className="text-[var(--color-button-blue)] shrink-0 mt-0.5" size={18} />
                              <p><strong className="text-[var(--text-primary)] font-semibold">Execution Workflow:</strong> {selectedProject.workflow}</p>
                            </div>
                            
                            <div className="p-5 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-2xl space-y-4">
                              <span className="text-[9px] uppercase tracking-widest font-bold text-[var(--brand-accent)] block mb-1">Architecture Diagram Blueprint</span>
                              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] font-mono text-center">
                                <div className="px-2.5 py-1.5 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-lg w-full sm:w-20 flex flex-col items-center gap-1">
                                  <Globe size={12} className="text-gray-400" />
                                  <span>Client</span>
                                </div>
                                <div className="text-gray-500 sm:rotate-0 rotate-90">➔</div>
                                <div className="px-2.5 py-1.5 bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] border border-[var(--brand-accent)]/20 rounded-lg w-full sm:w-24 flex flex-col items-center gap-1">
                                  <Server size={12} />
                                  <span>API Gateway</span>
                                </div>
                                <div className="text-gray-500 sm:rotate-0 rotate-90">➔</div>
                                <div className="px-2.5 py-1.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-lg w-full sm:w-24 flex flex-col items-center gap-1">
                                  <Cpu size={12} />
                                  <span>Services</span>
                                </div>
                                <div className="text-gray-500 sm:rotate-0 rotate-90">➔</div>
                                <div className="px-2.5 py-1.5 bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded-lg w-full sm:w-20 flex flex-col items-center gap-1">
                                  <Cpu size={12} />
                                  <span>Redis Cache</span>
                                </div>
                                <div className="text-gray-500 sm:rotate-0 rotate-90">➔</div>
                                <div className="px-2.5 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg w-full sm:w-24 flex flex-col items-center gap-1">
                                  <Cpu size={12} />
                                  <span>Database</span>
                                </div>
                                <div className="text-gray-500 sm:rotate-0 rotate-90">➔</div>
                                <div className="px-2.5 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg w-full sm:w-20 flex flex-col items-center gap-1">
                                  <Globe size={12} />
                                  <span>Cloud</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeTab === 'playground' && (
                          <div className="space-y-4 font-mono text-xs">
                            <div className="flex items-center justify-between p-3 bg-black/40 border border-white/10 rounded-xl">
                              <span className="text-[var(--brand-accent)] font-semibold select-all">{selectedProject.endpoint}</span>
                              <button 
                                onClick={handleSendRequest}
                                disabled={isSending}
                                className="flex items-center gap-1 px-3 py-1 bg-[var(--color-button-blue)] text-white font-sans font-semibold rounded-lg hover:bg-[var(--color-deep-link-blue)] cursor-pointer disabled:opacity-50 transition-colors"
                              >
                                {isSending ? 'Sending...' : 'Send Request'}
                              </button>
                            </div>

                            {/* Simulated response logs */}
                            {isSending && (
                              <div className="p-4 bg-black/20 border border-white/5 rounded-xl text-center flex flex-col items-center justify-center gap-2 text-gray-400 font-sans h-32">
                                <div className="w-5 h-5 border-2 border-[var(--brand-accent)] border-t-transparent rounded-full animate-spin"></div>
                                <span>Awaiting Server Response...</span>
                              </div>
                            )}

                            {showResponse && (
                              <div className="p-4 bg-black/60 border border-white/10 rounded-xl overflow-x-auto text-[#a9b7c6] leading-relaxed max-h-48">
                                <pre>{JSON.stringify(selectedProject.mockResponse, null, 2)}</pre>
                              </div>
                            )}
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2 border-t border-[var(--border-main)] pt-4">
                    <span className="text-xs font-semibold text-[var(--text-primary)] block">Technologies Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 bg-[var(--surface-main)] border border-[var(--border-main)] text-[var(--text-secondary)] text-[10px] font-medium rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 md:px-8 bg-[var(--surface-main)] border-t border-[var(--border-main)] flex gap-4 justify-end">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-[var(--border-main)] text-[var(--text-primary)] text-xs font-semibold rounded-full hover:bg-[var(--surface-card)] transition-all"
                  >
                    <Github size={14} /> Source Code
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-button-blue)] text-white text-xs font-semibold rounded-full hover:bg-[var(--color-deep-link-blue)] transition-all"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;