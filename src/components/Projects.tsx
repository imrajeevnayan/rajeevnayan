import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, Target, Lightbulb, Cpu } from 'lucide-react';
import { useState } from 'react';
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
  }
];

const Projects = () => {
  // Use independent tab states for each project card to avoid simultaneous tab switches
  const [activeTabs, setActiveTabs] = useState<Record<string, 'features' | 'architecture' | 'challenges'>>(
    caseStudies.reduce((acc, p) => ({ ...acc, [p.id]: 'features' }), {})
  );

  const handleTabChange = (projectId: string, tab: 'features' | 'architecture' | 'challenges') => {
    setActiveTabs(prev => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-10 md:py-14 bg-[var(--surface-card)] border-y border-[var(--border-main)]">
      <div className="section-container">
        <div className="max-w-2xl mb-8 md:mb-12">
          <span className="badge-premium mb-4">Case Studies</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-appleHeading mb-4">
            Engineering <span className="text-gradient">Solutions</span> at Scale
          </h2>
          <p className="text-[var(--text-secondary)] text-base font-light leading-[1.47]">
            Detailed breakdowns of how I solve complex architectural problems through performance-first engineering and modern design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:gap-20">
          {caseStudies.map((project, idx) => {
            const activeTab = activeTabs[project.id] || 'features';
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-start`}
              >
                {/* Project Image & UI Preview */}
                <div className="w-full lg:w-1/2 group">
                  <div className="premium-card aspect-video relative overflow-hidden bg-[var(--bg-main)]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-graphite)]/5 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-2.5 py-0.5 bg-[var(--bg-main)] border border-[var(--border-main)] text-[var(--text-secondary)] text-[10px] font-medium rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-appleHeading text-[var(--text-primary)]">{project.title}</h3>
                    <p className="text-[var(--color-deep-link-blue)] font-medium text-xs tracking-wide uppercase">{project.subtitle}</p>
                  </div>

                  {/* Case Study Segmented Controls (Apple-style) */}
                  <div className="inline-flex gap-0.5 bg-[var(--bg-main)] p-0.5 rounded-full border border-[var(--border-main)]">
                    {(['features', 'architecture', 'challenges'] as const).map(tab => (
                      <button
                        key={tab}
                        onClick={() => handleTabChange(project.id, tab)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 capitalize border ${
                          activeTab === tab 
                            ? 'bg-white dark:bg-[var(--surface-card)] text-[var(--color-button-blue)] border-[var(--border-main)]' 
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-transparent'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[100px] py-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        {activeTab === 'features' && (
                          <div className="flex gap-3 items-start">
                            <Target className="text-[var(--color-button-blue)] shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">{project.features}</p>
                          </div>
                        )}
                        {activeTab === 'architecture' && (
                          <div className="flex gap-3 items-start">
                            <Cpu className="text-[var(--color-button-blue)] shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">{project.architecture}</p>
                          </div>
                        )}
                        {activeTab === 'challenges' && (
                          <div className="flex gap-3 items-start">
                            <Lightbulb className="text-[var(--color-button-blue)] shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">{project.challenges}</p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-6 pt-2 border-t border-[var(--border-main)]">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-sm font-semibold text-[var(--color-button-blue)] hover:text-[var(--color-deep-link-blue)] transition-colors group"
                    >
                      Source Code <ChevronRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-sm font-semibold text-[var(--color-button-blue)] hover:text-[var(--color-deep-link-blue)] transition-colors group"
                      >
                        Live Demo <ChevronRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;