import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Loader2, X, ChevronRight, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  topics: string[];
}

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'libstack',
    title: 'Libstack.java',
    subtitle: 'High-Performance Java Data Structures',
    problem: 'Standard Java collections often introduce significant memory overhead and performance bottlenecks in high-frequency data processing applications.',
    solution: 'Engineered a lightweight library utilizing primitive arrays and memory-efficient algorithms to minimize object allocation and GC pressure.',
    result: 'Achieved a 30% reduction in memory footprint and a 15% increase in throughput during large-scale benchmark tests.',
    tech: ['Java 21', 'JUnit 5', 'Maven', 'Algorithms'],
    github: 'https://github.com/imrajeevnayan/libstack.java',
    image: '/libstack_java_mockup_1777307510295.png'
  },
  {
    id: 'microservices',
    title: 'Cloud Systems',
    subtitle: 'Distributed Microservices Architecture',
    problem: 'A legacy monolithic architecture restricted scalability and slowed deployment cycles, creating a significant single point of failure.',
    solution: 'Re-architected the ecosystem into independent microservices using Spring Cloud, implementing Netflix Eureka for discovery and an API Gateway for unified routing.',
    result: 'Streamlined deployment cycles from hours to minutes and optimized resource utilization across the distributed cluster by 40%.',
    tech: ['Spring Boot', 'Spring Cloud', 'Docker', 'Redis'],
    github: 'https://github.com/imrajeevnayan/springboot-microservices',
    image: '/microservices_architecture_mockup_1777307531501.png'
  },
  {
    id: 'portfolio',
    title: 'Modern Portfolio',
    subtitle: 'Interactive Engineering Showcase',
    problem: 'Static resumes fail to demonstrate the intersection of high-fidelity frontend execution and sophisticated backend integration.',
    solution: 'Developed an interactive, glassmorphic portfolio utilizing React and Framer Motion, integrated with real-time GitHub data for live performance tracking.',
    result: 'Established a premium brand identity that effectively showcases both architectural depth and design craftsmanship.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/imrajeevnayan/rajeevnayan',
    demo: 'https://rajeevnayan.in',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  }
];

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/imrajeevnayan/repos?sort=pushed&per_page=6');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        const filteredRepos = data.filter((repo: any) => !repo.fork);
        setRepos(filteredRepos);
      } catch (err) {
        console.error('Error fetching repos:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="bg-[var(--bg-main)] py-24 md:py-32 overflow-hidden relative">
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 mb-20"
        >
          <div className="text-[var(--brand-accent)] font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[var(--brand-accent)]" />
            Selected Works
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--text-primary)]">Case <span className="text-gradient">Studies</span></h2>
        </motion.div>

        {/* Featured Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          {caseStudies.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] bg-[var(--surface-main)] border border-white/5 mb-6">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 2).map(t => (
                        <span key={t} className="px-2 py-0.5 bg-white/10 backdrop-blur-md rounded-md text-[9px] font-black text-white/90 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-black text-white">{project.title}</h3>
                    <p className="text-white/70 text-xs font-medium line-clamp-2">{project.subtitle}</p>
                    <div className="pt-4 flex items-center gap-2 text-[var(--brand-accent)] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View Analysis <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repositories Grid */}
        <div className="space-y-12">
          <div className="flex items-center justify-between">
             <h3 className="text-2xl font-black text-[var(--text-primary)] flex items-center gap-3">
               <Github className="text-[var(--brand-accent)]" size={24} /> Technical Archives
             </h3>
             <a href="https://github.com/imrajeevnayan" target="_blank" className="text-[10px] font-black text-[var(--brand-accent)] hover:underline flex items-center gap-2 uppercase tracking-widest">
               Explore GitHub <ExternalLink size={14} />
             </a>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-[var(--brand-accent)]" size={32} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {repos.map((repo, i) => (
                <motion.a 
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="p-8 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-2xl hover:border-[var(--brand-accent)]/50 transition-all group flex flex-col justify-between min-h-[200px]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Code2 size={20} className="text-[var(--brand-accent)]" />
                      <span className="text-[9px] font-black text-[var(--text-dim)] uppercase tracking-widest">{repo.language || 'Software'}</span>
                    </div>
                    <h4 className="font-black text-lg text-[var(--text-primary)] group-hover:text-[var(--brand-accent)] transition-colors line-clamp-1">{repo.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)] font-medium line-clamp-2 leading-relaxed">{repo.description || "Experimental engineering project focused on technical exploration."}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex gap-4">
                      <span className="text-[10px] font-black flex items-center gap-1.5 text-[var(--text-dim)]">⭐ {repo.stargazers_count}</span>
                    </div>
                    <ExternalLink size={14} className="text-[var(--text-dim)] opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-[var(--bg-main)] rounded-[40px] overflow-hidden shadow-2xl border border-white/10 max-h-[90vh] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-2.5 bg-black/50 text-white rounded-full hover:bg-black transition-all"
              >
                <X size={20} />
              </button>

              <div className="md:w-1/2 h-[250px] md:h-auto relative overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:hidden" />
              </div>

              <div className="md:w-1/2 p-8 md:p-14 overflow-y-auto custom-scrollbar space-y-10 bg-[var(--surface-main)]">
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-5xl font-black text-gradient tracking-tighter leading-none">{selectedProject.title}</h3>
                  <p className="text-[var(--text-secondary)] font-bold text-lg">{selectedProject.subtitle}</p>
                </div>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[var(--brand-accent)] font-black uppercase tracking-[0.2em] text-[10px]">
                      <Target size={14} /> The Problem
                    </div>
                    <p className="text-[var(--text-primary)] font-light text-lg leading-relaxed">{selectedProject.problem}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px]">
                      <Lightbulb size={14} /> The Solution
                    </div>
                    <p className="text-[var(--text-primary)] font-light text-lg leading-relaxed">{selectedProject.solution}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-emerald-400 font-black uppercase tracking-[0.2em] text-[10px]">
                      <TrendingUp size={14} /> The Result
                    </div>
                    <p className="text-[var(--text-primary)] font-light text-lg leading-relaxed">{selectedProject.result}</p>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-wrap gap-8 items-center">
                  <div className="flex gap-4">
                    <a href={selectedProject.github} target="_blank" className="px-8 py-4 bg-[var(--brand-accent)] text-white rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 shadow-md">
                      <Github size={18} /> Source
                    </a>
                    {selectedProject.demo && (
                      <a href={selectedProject.demo} target="_blank" className="p-4 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-xl hover:bg-white/5 transition-all text-[var(--text-primary)]">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-lg text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;