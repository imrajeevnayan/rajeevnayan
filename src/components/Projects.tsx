import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, Play } from 'lucide-react';
import ScrollingPreview from './scrolling-preview';

import urlShortenerImage from '../assets/url_shortener.png';
import aiChatImage from '../assets/ai_chat.png';
import hospitalImage from '../assets/hospital_mockup.png';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  constraint: string;
  decision: string;
  result: string;
  tech: string[];
  github: string;
  image: string;
  endpoint: string;
  mockResponse: object;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'rag-system',
    title: 'RAG Document Q&A System',
    subtitle: 'AI-Powered Document Intelligence',
    problem: 'PDF parsing caused high latency (1,200ms) and LLM hallucinations on corporate document searches.',
    solution: 'Implemented semantic layout-aware chunking pipeline and indexed vectors to Qdrant Vector DB with strict grounding prompt boundaries.',
    constraint: 'Limit system memory footprint under 500MB on single-node containers.',
    decision: 'Chunk dynamically based on PDF headers and leverage sparse vector indexing.',
    result: 'p95 retrieval latency dropped from 1,200ms to 180ms with 0 validated hallucinations.',
    tech: ['Java 21', 'Spring Boot', 'Qdrant Vector DB', 'OpenRouter API', 'Docker'],
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
    problem: 'Direct frontend integration with multiple LLM endpoints led to key exposures, lack of rate-limiting, and 850ms routing overhead.',
    solution: 'Designed stateless Spring Boot gateway proxy managing request routing, caching, error retry logic, and sub-200ms API routing latency.',
    constraint: 'Support 1,000 concurrent LLM streams.',
    decision: 'Built custom Token Bucket rate limiter filters and stateless routing.',
    result: 'Secured all key exposures, and average routing overhead dropped to under 12ms.',
    tech: ['Java 17', 'Spring Boot', 'OpenRouter API', 'REST APIs', 'Docker'],
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
    id: 'url-shortener-sb',
    title: 'VeloLink URL Shortener',
    subtitle: 'High-Throughput Link Redirection',
    problem: 'Generating and redirection lookup DB calls caused N+1 database queries under load, spiking redirection latency to 800ms.',
    solution: 'Built high-performance link redirection engine with collision resolution algorithms and Redis-based cache lookup to route links in sub-5ms.',
    constraint: 'DB write capacity capped at 100 write operations/sec.',
    decision: 'Cache redirect mappings in Redis memory layer.',
    result: 'Redirection latency reduced from 800ms to sub-5ms (99.3% latency reduction).',
    tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com/imrajeevnayan/url-shortener-springboot',
    image: hospitalImage,
    endpoint: 'GET /api/v1/links/redirect/vl-3902',
    mockResponse: {
      originalUrl: "https://github.com/imrajeevnayan/url-shortener-springboot",
      alias: "vl-3902",
      active: true,
      clicks: 840,
      cacheHit: true
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'audit' | 'sandbox'>('overview');
  const [isSending, setIsSending] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleSendRequest = () => {
    setIsSending(true);
    setShowResponse(false);
    setTimeout(() => {
      setIsSending(false);
      setShowResponse(true);
    }, 600);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-[var(--bg-main)] border-b border-[var(--border-main)]">
      <div className="section-container">
        
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase block mb-3">// PRODUCTION CASE STUDIES</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Engineering Solutions at Scale
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base font-light leading-relaxed font-mono">
            Detailed breakdowns of backend performance tuning, resource optimization, and clean systems architecture decisions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => {
                setSelectedProject(project);
                setActiveTab('overview');
                setShowResponse(false);
              }}
              className="group relative rounded-xl overflow-hidden border border-[var(--border-main)] bg-[var(--surface-card)] cursor-pointer hover:border-[#10b981]/50 transition-all duration-300 flex flex-col h-[280px]"
            >
              <div className="relative w-full h-full overflow-hidden flex-1 group-hover:scale-[1.03] transition-transform duration-500">
                <ScrollingPreview
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="absolute w-full h-24 bottom-0 left-0 bg-gradient-to-t from-[var(--surface-card)] via-[var(--surface-card)]/90 to-transparent pointer-events-none z-10 flex flex-col justify-end p-5">
                <span className="text-[9px] text-[#10b981] font-mono uppercase tracking-widest mb-0.5">
                  {project.subtitle}
                </span>
                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[#10b981] transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[var(--surface-card)] border border-[var(--border-main)] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 p-2 rounded-full bg-[var(--surface-main)] hover:bg-[var(--border-main)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all z-20 cursor-pointer"
                >
                  <X size={16} />
                </button>

                <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-left">
                  <div className="space-y-1">
                    <span className="text-xs text-[#10b981] font-mono uppercase tracking-wider">
                      {selectedProject.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] font-mono">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Minimal Tab Selectors */}
                  <div className="flex gap-2 border-b border-[var(--border-main)] pb-2">
                    {(['overview', 'audit', 'sandbox'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          setActiveTab(tab);
                          setShowResponse(false);
                        }}
                        className={`px-3 py-1.5 rounded text-xs font-mono font-semibold transition-all cursor-pointer ${
                          activeTab === tab
                            ? 'bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/25'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {tab === 'overview' ? 'Overview' : tab === 'audit' ? 'System Audit' : 'API Sandbox'}
                      </button>
                    ))}
                  </div>

                  {/* Tab Display Panel */}
                  <div className="min-h-[150px] font-mono text-xs text-[var(--text-secondary)] leading-relaxed space-y-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-4"
                      >
                        {activeTab === 'overview' && (
                          <div className="space-y-3">
                            <div className="p-4 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-lg">
                              <span className="text-[#10b981] block mb-1 font-bold uppercase tracking-wider">// System Description</span>
                              <p className="font-sans text-[var(--text-secondary)] font-light">{selectedProject.solution}</p>
                            </div>
                            <div className="p-4 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-lg space-y-2">
                              <span className="text-[var(--text-primary)] block font-bold uppercase tracking-wider">// Technology Stack</span>
                              <div className="flex flex-wrap gap-2 pt-1">
                                {selectedProject.tech.map(t => (
                                  <span key={t} className="px-2 py-0.5 bg-[var(--surface-main)] border border-[var(--border-main)] rounded text-[var(--text-secondary)] text-[10px]">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {activeTab === 'audit' && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-lg space-y-1">
                              <span className="text-red-400 block font-bold uppercase tracking-wider">// Problem</span>
                              <p className="text-[var(--text-secondary)] font-sans font-light">{selectedProject.problem}</p>
                            </div>
                            <div className="p-4 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-lg space-y-1">
                              <span className="text-yellow-500 block font-bold uppercase tracking-wider">// Constraint</span>
                              <p className="text-[var(--text-secondary)] font-sans font-light">{selectedProject.constraint}</p>
                            </div>
                            <div className="p-4 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-lg space-y-1">
                              <span className="text-indigo-400 block font-bold uppercase tracking-wider">// Decision</span>
                              <p className="text-[var(--text-secondary)] font-sans font-light">{selectedProject.decision}</p>
                            </div>
                            <div className="p-4 bg-[#10b981]/5 border border-[#10b981]/10 rounded-lg space-y-1">
                              <span className="text-[#10b981] block font-bold uppercase tracking-wider">// Result</span>
                              <p className="text-[var(--text-primary)] font-sans font-semibold">{selectedProject.result}</p>
                            </div>
                          </div>
                        )}

                        {activeTab === 'sandbox' && (
                          <div className="space-y-4">
                            <div className="p-4 bg-[var(--bg-main)] border border-[var(--border-main)] rounded-lg flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-[#10b981] font-bold">POST</span>
                                <span className="text-[var(--text-secondary)] text-[11px]">{selectedProject.endpoint}</span>
                              </div>
                              <button 
                                onClick={handleSendRequest}
                                disabled={isSending}
                                className="px-3 py-1 bg-[#10b981] text-black font-bold rounded hover:bg-[#059669] transition-all flex items-center gap-1.5 cursor-pointer text-[10px]"
                              >
                                <Play size={10} /> Send Request
                              </button>
                            </div>

                            {isSending && (
                              <div className="text-center py-4 text-emerald-400 animate-pulse uppercase font-bold tracking-widest">
                                // EXECUTION TRANSACTION PATHWAY ACTIVE...
                              </div>
                            )}

                            {showResponse && (
                              <div className="p-4 bg-[var(--bg-main)] border border-[var(--border-main)] rounded-lg overflow-x-auto text-[10px]">
                                <span className="text-[var(--text-muted)] block mb-2">// Response payload status code: 200 OK</span>
                                <pre className="text-green-400 leading-normal">
                                  {JSON.stringify(selectedProject.mockResponse, null, 2)}
                                </pre>
                              </div>
                            )}
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-[var(--border-main)] font-mono">
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-[#10b981] hover:underline flex items-center gap-1"
                    >
                      <Github size={12} /> View Codebase
                    </a>
                  </div>
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