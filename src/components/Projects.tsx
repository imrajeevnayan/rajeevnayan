import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, ArrowRight, Target, Lightbulb, Cpu, TrendingUp, X } from 'lucide-react';
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
    id: 'hospital-system',
    title: 'Hospital Management',
    subtitle: 'Secure Backend Operations',
    features: 'Comprehensive backend system with granular Role-Based Access Control (RBAC), secure patient record storage, and automated appointment scheduling APIs.',
    architecture: 'Built on Spring Boot 3.x and Spring Security. Uses PostgreSQL for relational data integrity and Docker for containerized deployment.',
    challenges: 'Solved complex entity relationship mapping issues in JPA to prevent N+1 query problems when fetching patient histories and their associated records.',
    tech: ['Java 21', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/imrajeevnayan/Hospital-Management-System',
    image: hospitalImage
  },
  {
    id: 'bookmyshow',
    title: 'BookMyShow Clone',
    subtitle: 'Movie Ticketing System',
    features: 'A full-stack movie booking application featuring real-time seat selection, theatre management, and a responsive React-based user interface.',
    architecture: 'RESTful API developed with Spring Boot, consuming data from PostgreSQL. The frontend is built with React and styled using Tailwind CSS.',
    challenges: 'Implemented database-level locking and transaction management to prevent race conditions during concurrent seat bookings.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/imrajeevnayan/BookMyShow',
    image: bookmyshowImage
  },
  {
    id: 'ai-chat',
    title: 'AI Chat Backend',
    subtitle: 'LLM Orchestration Layer',
    features: 'A unified AI orchestration backend that manages multi-model interactions, prompt templates, and persistent conversation history.',
    architecture: 'Leverages Spring AI for seamless integration with the OpenRouter API. Uses Maven for dependency management and structured logging.',
    challenges: 'Designed a reliable state management system to maintain chat coherence and context across stateless HTTP requests.',
    tech: ['Java', 'Spring Boot', 'Spring AI', 'OpenRouter', 'Maven'],
    github: 'https://github.com/imrajeevnayan/springboot-ai-chat-backend',
    image: aiChatImage
  },
  {
    id: 'url-shortener',
    title: 'Scalable URL Shortener',
    subtitle: 'High-Speed Redirection',
    features: 'A fast and reliable URL shortening service that converts long URLs into manageable links and handles efficient redirection.',
    architecture: 'Clean MVC architecture using JPA/Hibernate for persistence. The application is containerized with Docker for easy environment setup.',
    challenges: 'Developed a custom Base62 encoding algorithm to generate unique, collision-free short URLs efficiently.',
    tech: ['Java', 'Spring Boot', 'React', 'JPA', 'Docker'],
    github: 'https://github.com/imrajeevnayan/url-shortener-springboot',
    image: urlShortenerImage
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'features' | 'architecture' | 'challenges'>('features');

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
              <div className="w-[90%] sm:w-5/6 lg:w-1/2 mx-auto group">
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
                  {(['features', 'architecture', 'challenges'] as const).map(tab => (
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
                      {activeTab === 'features' && (
                        <div className="flex gap-4">
                          <Target className="text-[var(--brand-accent)] shrink-0" size={20} />
                          <p className="text-[var(--text-secondary)] leading-relaxed">{project.features}</p>
                        </div>
                      )}
                      {activeTab === 'architecture' && (
                        <div className="space-y-4">
                          <div className="flex gap-4">
                            <Cpu className="text-[var(--brand-accent)] shrink-0" size={20} />
                            <p className="text-[var(--text-secondary)] leading-relaxed">{project.architecture}</p>
                          </div>
                        </div>
                      )}
                      {activeTab === 'challenges' && (
                        <div className="flex gap-4">
                          <Lightbulb className="text-[var(--brand-accent)] shrink-0" size={20} />
                          <p className="text-[var(--text-secondary)] leading-relaxed">{project.challenges}</p>
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