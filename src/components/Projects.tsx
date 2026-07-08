import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Target, Cpu, Lightbulb } from 'lucide-react';
import ScrollingPreview from './scrolling-preview';

import hospitalImage from '../assets/hospital_mockup.png';
import bookmyshowImage from '../assets/movie_booking.png';
import aiChatImage from '../assets/ai_chat.png';
import urlShortenerImage from '../assets/url_shortener.png';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  features: string;
  architecture: string;
  challenges: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'rag-system',
    title: 'RAG Document Q&A System',
    subtitle: 'AI-Powered Document Intelligence',
    features: 'Architected an end-to-end RAG workflow: PDF ingestion to LLM-grounded answers via semantic search in Qdrant, eliminating hallucinations by restricting responses to retrieved document context only.',
    architecture: 'Designed the complete ingestion pipeline: PDF text extraction, sliding-window chunking, vector embedding generation, and similarity search in Qdrant. Enabled interchangeable LLM support (GPT-4o, Claude 3.5 Sonnet, Mistral Large) with zero code changes.',
    challenges: 'Delivered versioned REST endpoints with Swagger and OpenAPI documentation, robust exception handling, and graceful fallback responses; containerized with Docker Compose for reproducible deployments.',
    tech: ['Java 21', 'Spring Boot', 'Qdrant', 'OpenRouter API', 'Docker'],
    github: 'https://github.com/imrajeevnayan/rag-document-qa',
    image: urlShortenerImage
  },
  {
    id: 'ai-chat',
    title: 'AI Chat Backend',
    subtitle: 'High-Performance LLM Gateway',
    features: 'Built a production-ready AI chat backend integrated with an LLM via OpenRouter API; achieved under 200 ms response time.',
    architecture: 'Stateless REST design and efficient request routing, integrated with LLM via OpenRouter API. Containerized with Docker.',
    challenges: 'Implemented a resilient architecture with retry logic and circuit breaker patterns; recorded zero unhandled exceptions during simulated 10x load tests in staging.',
    tech: ['Java 17', 'Spring Boot', 'OpenRouter API', 'REST APIs', 'Docker'],
    github: 'https://github.com/imrajeevnayan/springboot-ai-chat-backend',
    image: aiChatImage
  },
  {
    id: 'hospital-system',
    title: 'Hospital Management System',
    subtitle: 'Secure Backend Operations',
    features: 'Designed multi-role access control (Doctor, Admin, Patient) across 20+ API routes; enforced JWT-based authentication with Spring Security.',
    architecture: 'Created a normalized MySQL schema with optimized JPA mappings, integrating Redis for query caching.',
    challenges: 'Improved query performance by 40% via Hibernate refactoring and Redis query caching; documented APIs via Swagger and OpenAPI, reducing onboarding time by 50%.',
    tech: ['Spring Boot', 'MySQL', 'Spring Security', 'Redis', 'Docker', 'Swagger'],
    github: 'https://github.com/imrajeevnayan/Hospital-Management-System',
    image: hospitalImage
  },
  {
    id: 'employee-system',
    title: 'Company & Employee Manager',
    subtitle: 'Enterprise Staff & Operations Portal',
    features: 'Streamlines internal employee administration, department management, and operational workflows with reactive dashboards, real-time data sync, and dynamic data filtering.',
    architecture: 'React frontend paired with a Spring Boot REST API backend. Enforces clean CRUD interfaces, structured request-response models, and atomic transactions via Hibernate.',
    challenges: 'Designed a secure and highly responsive UI while minimizing API roundtrips; optimized relational database schemas to handle hierarchical department operations gracefully.',
    tech: ['Java 17', 'Spring Boot', 'React.js', 'TypeScript', 'MySQL', 'Hibernate'],
    github: 'https://github.com/imrajeevnayan/Company-Employee-Management-System',
    image: hospitalImage
  },
  {
    id: 'url-shortener-sb',
    title: 'VeloLink URL Shortener',
    subtitle: 'High-Throughput Link Redirection',
    features: 'Enables users to shorten long URLs with custom aliases and tracks detailed click analytics (timestamps, user agents, referrers) in real time.',
    architecture: 'Spring Boot backend serving REST APIs, utilizing Redis in-memory cache for instant redirect execution (sub-5ms) and a PostgreSQL database for persistent storage.',
    challenges: 'Designed a high-throughput hash-generation service with collision detection, and scaled URL redirection requests using atomic key lookups in memory.',
    tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Redis', 'REST APIs', 'Docker'],
    github: 'https://github.com/imrajeevnayan/url-shortener-springboot',
    image: urlShortenerImage
  },
  {
    id: 'food-fiesta',
    title: 'Food Fiesta Delivery',
    subtitle: 'E-Commerce Culinary Experience',
    features: 'Online food ordering platform featuring cart operations, real-time checkout flows, and catalog browsing with multi-category filters.',
    architecture: 'Built using clean MVC architecture with a robust database schema managing restaurant inventory, orders, and customer accounts.',
    challenges: 'Implemented transaction isolation levels to prevent double-booking of food items during peak hours and designed a responsive client dashboard.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React.js', 'Bootstrap'],
    github: 'https://github.com/imrajeevnayan/Food-Fiesta',
    image: bookmyshowImage
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<'features' | 'architecture' | 'challenges'>('features');

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-12 md:py-20 bg-[var(--surface-card)]/40 border-y border-[var(--border-main)] backdrop-blur-sm">
      <div className="section-container">
        <div className="max-w-2xl mb-8 md:mb-14">
          <span className="badge-premium mb-4">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-appleHeading mb-4">
            Engineering <span className="text-gradient">Solutions</span> at Scale
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base font-light leading-relaxed">
            A showcase of my recent systems, architectures, and full stack applications, detailed with interactive scrolling previews.
          </p>
        </div>

        {/* 3-Column Project Grid */}
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
                setActiveTab('features');
              }}
              className="group relative rounded-xl overflow-hidden border border-[var(--border-main)] bg-[var(--surface-card)] cursor-pointer hover:border-[var(--brand-accent)] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col h-[280px]"
            >
              {/* Scrolling Screen Preview Wrapper */}
              <div className="relative w-full h-full overflow-hidden flex-1">
                <ScrollingPreview
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* Title Overlay at bottom */}
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

        {/* Apple-style Details Modal Dialog */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[var(--surface-card)] border border-[var(--border-main)] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 p-2 rounded-full bg-[var(--surface-main)] hover:bg-[var(--border-main)] text-[var(--text-secondary)] transition-all z-20"
                >
                  <X size={18} />
                </button>

                {/* Cover Image */}
                <div className="relative w-full h-48 md:h-64 overflow-hidden border-b border-[var(--border-main)] bg-[var(--bg-main)]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-card)] via-transparent to-black/20" />
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
                  <div className="space-y-2">
                    <span className="text-xs text-[var(--color-button-blue)] font-semibold tracking-wider uppercase">
                      {selectedProject.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-appleHeading text-[var(--text-primary)]">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Tab Controls */}
                  <div className="inline-flex gap-1 bg-[var(--surface-main)] p-1 rounded-full border border-[var(--border-main)]">
                    {(['features', 'architecture', 'challenges'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                          activeTab === tab
                            ? 'bg-white dark:bg-[var(--surface-card)] text-[var(--color-button-blue)] shadow-sm'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Contents */}
                  <div className="min-h-[80px] text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-3 items-start"
                      >
                        {activeTab === 'features' && (
                          <>
                            <Target className="text-[var(--color-button-blue)] shrink-0 mt-0.5" size={18} />
                            <p>{selectedProject.features}</p>
                          </>
                        )}
                        {activeTab === 'architecture' && (
                          <>
                            <Cpu className="text-[var(--color-button-blue)] shrink-0 mt-0.5" size={18} />
                            <p>{selectedProject.architecture}</p>
                          </>
                        )}
                        {activeTab === 'challenges' && (
                          <>
                            <Lightbulb className="text-[var(--color-button-blue)] shrink-0 mt-0.5" size={18} />
                            <p>{selectedProject.challenges}</p>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Tech Tags */}
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

                {/* Footer Actions */}
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