import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, ArrowRight, Target, Lightbulb, Cpu, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  architecture: string;
  outcome: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'libstack',
    title: 'Libstack.java',
    subtitle: 'Low-Latency Data Structures',
    problem: 'Standard Java collections introduce significant object allocation overhead and GC pauses in high-frequency trading and data processing pipelines.',
    solution: 'Designed a lightweight primitive-first collection library that bypasses standard object wrappers to minimize memory pressure.',
    architecture: 'Built on Java 21 primitive arrays and bit-manipulation algorithms. Uses custom memory-pooling patterns to ensure deterministic execution times.',
    outcome: '30% reduction in memory footprint and 15% increase in throughput in large-scale stress tests.',
    tech: ['Java 21', 'JUnit 5', 'Maven', 'Algorithms'],
    github: 'https://github.com/imrajeevnayan/libstack.java',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'microservices',
    title: 'Cloud Core',
    subtitle: 'Distributed Systems Orchestration',
    problem: 'Legacy monolithic architecture created scaling bottlenecks and deployment risks, leading to system-wide failures during high traffic.',
    solution: 'Engineered a resilient microservices ecosystem using the Spring Cloud stack, implementing circuit breakers and centralized discovery.',
    architecture: 'Spring Boot 3.x, Spring Cloud Gateway, Eureka Service Discovery, and Redis for distributed caching. Docker-orchestrated deployment.',
    outcome: 'Deployment cycles reduced from 4 hours to 10 minutes; 99.9% system availability achieved through fault-tolerant patterns.',
    tech: ['Spring Boot', 'Spring Cloud', 'Docker', 'Redis', 'RabbitMQ'],
    github: 'https://github.com/imrajeevnayan/springboot-microservices',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'portfolio',
    title: 'Portfolio 2026',
    subtitle: 'Premium Identity Platform',
    problem: 'Traditional resumes fail to showcase the intersection of backend architectural depth and high-fidelity frontend execution.',
    solution: 'Developed a high-performance, SEO-optimized interactive platform with advanced motion design and glassmorphic UI.',
    architecture: 'React 18 + Vite + Framer Motion. Implemented a sophisticated theme system and real-time GitHub API integration for live performance metrics.',
    outcome: '2x increase in recruiter engagement and established a premium engineering brand identity.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/imrajeevnayan/rajeevnayan',
    demo: 'https://rajeevnayan.in',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution' | 'outcome'>('problem');

  return (
    <section id="projects" className="py-16 md:py-24 bg-[var(--bg-main)]">
      <div className="section-container">
        <div className="max-w-3xl mb-24">
          <span className="badge-premium mb-4">Case Studies</span>
          <h2 className="text-4xl md:text-6xl mb-6">Engineering <span className="text-gradient">Solutions</span> at Scale</h2>
          <p className="text-[var(--text-secondary)] text-lg font-medium leading-relaxed">
            Detailed breakdowns of how I solve complex architectural problems through performance-first engineering and modern design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {caseStudies.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              {/* Project Image & UI Preview */}
              <div className="w-full lg:w-1/2 group">
                <div className="premium-card aspect-video relative overflow-hidden bg-[var(--surface-main)]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)]/80 to-transparent" />
                  
                  {/* Floating Tech Stack */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Study Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-black">{project.title}</h3>
                  <p className="text-[var(--brand-accent)] font-bold uppercase tracking-widest text-xs">{project.subtitle}</p>
                </div>

                {/* Case Study Tabs */}
                <div className="flex gap-4 border-b border-[var(--border-main)] pb-2">
                  {(['problem', 'solution', 'outcome'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-xs uppercase tracking-widest font-black pb-2 transition-all relative ${
                        activeTab === tab ? 'text-[var(--brand-accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[var(--brand-accent)]" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[140px] py-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {activeTab === 'problem' && (
                        <div className="flex gap-4">
                          <Target className="text-[var(--brand-accent)] shrink-0" size={20} />
                          <p className="text-[var(--text-secondary)] leading-relaxed">{project.problem}</p>
                        </div>
                      )}
                      {activeTab === 'solution' && (
                        <div className="space-y-4">
                          <div className="flex gap-4">
                            <Lightbulb className="text-[var(--brand-accent)] shrink-0" size={20} />
                            <p className="text-[var(--text-secondary)] leading-relaxed">{project.solution}</p>
                          </div>
                          <div className="flex gap-4 pt-2 border-t border-[var(--border-main)]/50">
                            <Cpu className="text-[var(--brand-accent)] shrink-0" size={20} />
                            <div className="text-[11px] font-medium text-[var(--text-secondary)] uppercase tracking-wide italic">
                              Architectural Core: <span className="text-[var(--text-primary)]">{project.architecture}</span>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === 'outcome' && (
                        <div className="flex gap-4">
                          <TrendingUp className="text-[var(--brand-accent)] shrink-0" size={20} />
                          <p className="text-[var(--text-secondary)] leading-relaxed font-bold">{project.outcome}</p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Action Links */}
                <div className="flex gap-6 pt-4">
                  <a href={project.github} target="_blank" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-[var(--brand-accent)] transition-colors">
                    Source Code <Github size={14} />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-[var(--brand-accent)] transition-colors">
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;