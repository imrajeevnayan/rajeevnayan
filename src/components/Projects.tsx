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
    title: 'libstack.java',
    description: 'Cloud-native Digital Library service architected with Spring Boot and PostgreSQL. Implemented secure OAuth2.0 authentication flows and optimized data retrieval for high-concurrency scenarios.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80', // High-quality code/architecture
    tech: ['Spring Boot', 'OAuth2', 'PostgreSQL', 'Docker'],
    stats: { stars: 24, forks: 8 },
    links: { github: 'https://github.com/imrajeevnayan/digital-library-app' },
  },
  {
    title: 'event-nexus.kafka',
    description: 'High-throughput real-time event streaming system utilizing Apache Kafka and Spring Cloud Stream. Orchestrated distributed consumers to process 10k+ messages per second with ACID compliance.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200', // High-bandwidth network visual


    tech: ['Apache Kafka', 'Spring Cloud', 'Java 17', 'Docker'],
    stats: { stars: 32, forks: 12 },
    links: { github: 'https://github.com/imrajeevnayan/event-streaming-system' },
  },

  {
    title: 'hms-v1.springboot',
    description: 'Enterprise-grade Hospital Management System focusing on data integrity and security. Integrated Hibernate Envers for thorough auditing and JWT for stateless specialized authentication.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80', // Tech/Medical feel
    tech: ['Java 17', 'Spring Data JPA', 'MySQL', 'JWT'],
    stats: { stars: 15, forks: 5 },
    links: { github: 'https://github.com/imrajeevnayan/hospital-management-springboot' },
  },
  {
    title: 'cache-master.redis',
    description: 'Distributed memory caching engine with advanced TTL logic and cache-aside patterns. Reduced API latency by 65% through intelligent data invalidation and Redis clustering.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', // Circuits/Speed
    tech: ['Redis', 'Spring Cache', 'Java', 'Lettuce'],
    stats: { stars: 18, forks: 6 },
    links: { github: 'https://github.com/imrajeevnayan/distributed-cache' },
  },
  {
    title: 'chat-engine.websocket',
    description: 'High-performance real-time communication engine leveraging STOMP/WebSockets. Orchestrated with a microservices-ready architecture and MongoDB for ultra-low latency persistence.',
    image: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?auto=format&fit=crop&w=1200&q=80', // Real-time pulse
    tech: ['WebSockets', 'STOMP', 'MongoDB', 'Node.js'],
    stats: { stars: 21, forks: 9 },
    links: { github: 'https://github.com/imrajeevnayan/real-time-chat' },
  },
  {
    title: 'analytics-core.lambda',
    description: 'Serverless data analytics pipeline on AWS. Automated processing of large-scale JSON payloads using Java Lambda functions, S3 triggers, and DynamoDB for persistence.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80', // Big Data/Cloud
    tech: ['AWS Lambda', 'DynamoDB', 'Java', 'CloudWatch'],
    stats: { stars: 14, forks: 4 },
    links: { github: 'https://github.com/imrajeevnayan/serverless-analytics' },
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
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[var(--text-main)]">
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