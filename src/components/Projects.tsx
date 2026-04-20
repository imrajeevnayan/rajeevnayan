import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal as TerminalIcon } from 'lucide-react';
import TerminalWindow from './common/Window';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  stats: { stars: number; forks: number };
  links: {
    github: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    title: 'hms-secure.backend',
    description: 'Enterprise-grade Hospital Management System architected with Spring Boot 3.x.\n• Engineered secure role-based access control (RBAC) and OAuth2 integration.\n• Optimized database schema for complex healthcare data using PostgreSQL.\n• Automated deployment pipelines with Docker and GitHub Actions.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    tech: ['Spring Boot 3', 'PostgreSQL', 'Docker', 'Spring Security'],
    stats: { stars: 0, forks: 0 },
    links: { github: 'https://github.com/imrajeevnayan/Hospital-Management-System' },
  },
  {
    title: 'movie-nexus.react',
    description: 'High-performance Movie Ticket Booking System featuring a modern dark-mode UI.\n• Integrated interactive seat selection with real-time state management in React.\n• Developed robust REST API endpoints with Spring Boot for seamless booking flows.\n• Implemented responsive glassmorphism design for a premium user experience.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
    stats: { stars: 0, forks: 0 },
    links: { github: 'https://github.com/imrajeevnayan/BookMyShow' },
  },
  {
    title: 'hms-modern.fullstack',
    description: 'Modern healthcare solution built with Java 25 and Spring Boot 3.\n• Developed patient and doctor portals with an intuitive Tailwind CSS interface.\n• Leveraged Hibernate and Spring Data JPA for efficient data persistence.\n• Designed a modular architecture for easy scalability and maintenance.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&w=1200&q=80',
    tech: ['Java 25', 'Spring Boot 3', 'PostgreSQL', 'Tailwind CSS'],
    stats: { stars: 1, forks: 0 },
    links: { github: 'https://github.com/imrajeevnayan/hospital-management-springboot' },
  },
  {
    title: 'food-fiesta.spring',
    description: 'Full-stack online food ordering application emphasizing performance and UX.\n• Managed complex cart operations and order processing with Spring MVC.\n• Built an administrative dashboard for real-time menu and order management.\n• Integrated Thymeleaf templates with custom CSS for a cohesive visual style.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL'],
    stats: { stars: 9, forks: 4 },
    links: { github: 'https://github.com/imrajeevnayan/Food-Fiesta' },
  },
  {
    title: 'finance-dashboard.glass',
    description: 'Enterprise Financial Dashboard utilizing React 19 and Glassmorphism design.\n• Secured financial data with JWT-based authentication and secure cookie handling.\n• Optimized dashboard performance using Redis for high-speed data caching.\n• Implemented real-time analytics with interactive charts and visualizations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tech: ['React 19', 'Spring Boot 3', 'Redis', 'PostgreSQL'],
    stats: { stars: 0, forks: 0 },
    links: { github: 'https://github.com/imrajeevnayan/Enterprise-Expense-Tracker' },
  },
  {
    title: 'dsa-laboratory.java',
    description: 'Comprehensive repository of optimized solutions to LeetCode and GFG problems.\n• Organized solutions by data structures and algorithmic complexity.\n• Documented architectural patterns used in solving high-level DSA challenges.\n• Maintained code quality and performance benchmarks for each solution.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80',
    tech: ['Java', 'DSA', 'Algorithms', 'Practice'],
    stats: { stars: 0, forks: 0 },
    links: { github: 'https://github.com/imrajeevnayan/leetcode-practice', live: 'https://leetcode.com/u/imrajeevnayan/' },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container border-t border-[var(--glass-border)]">

      <div className="mb-20 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded flex items-center justify-center text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <TerminalIcon size={20} />
          </div>
          <div>
            <div className="text-orange-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Execution_Log.log</div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9] text-[var(--text-main)] font-outfit">
              Featured <span className="text-shimmer">Architectures</span>
            </h2>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Terminal List View */}
        <div className="lg:col-span-5 h-fit lg:sticky lg:top-32">
          <TerminalWindow title="~/repositories" className="h-full">
            <div className="space-y-6 font-mono text-xs">
              <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-white/5">
                <span>Name</span>
                <div className="flex gap-8">
                  <span>Stack</span>
                  <span>Stats</span>
                </div>
              </div>
              
              {projects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500">&gt;</span>
                    <span className="text-zinc-300 group-hover:text-white transition-colors">{project.title}</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="text-zinc-500 text-[10px] hidden sm:block">{project.tech[0]}</span>
                    <div className="flex gap-3 text-zinc-500 group-hover:text-orange-500 transition-colors">
                      <div className="px-2 py-0.5 bg-zinc-800 rounded text-[8px]">{project.stats.stars} ★</div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <div className="pt-4 text-zinc-600 italic">
                // Total repositories found: {projects.length + 12}
                <br />
                // Fetching more from GitHub API...
              </div>
            </div>
          </TerminalWindow>
        </div>

        {/* Visual Cards View */}
        <div className="lg:col-span-7 space-y-12">
          {projects.map((project, idx) => (
            <TerminalWindow key={idx} title={`Project_Detail: ${project.title}`} delay={idx * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative aspect-video rounded-lg overflow-hidden group">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">{project.title}</h3>
                    <p className="text-zinc-400 font-mono text-xs leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                       {project.tech.map(t => (
                         <span key={t} className="px-2 py-0.5 bg-zinc-900 border border-white/5 rounded text-[8px] font-mono text-zinc-500 uppercase tracking-widest">{t}</span>
                       ))}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[var(--text-main)] text-[var(--bg-main)] text-[10px] font-mono font-bold uppercase tracking-widest rounded hover:bg-orange-500 transition-colors flex items-center gap-2"
                    >
                      <Github size={12} /> Source
                    </a>
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-main)] text-[10px] font-mono font-bold uppercase tracking-widest rounded hover:border-orange-500 transition-all flex items-center gap-2"
                      >
                        <ExternalLink size={12} /> Live
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;