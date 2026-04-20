import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      category: "Java / Spring Boot / React",
      description: "A comprehensive health-tech solution featuring a decoupled React frontend and Headless Spring Boot REST API. Focuses on real-time patient management and high data integrity.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
      tags: ["Spring Boot", "React", "PostgreSQL", "Docker"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Digital Banking Protocol",
      category: "Microservices / Kafka",
      description: "Secure banking infrastructure with distributed transactions and event-driven architecture. Handles high-throughput operations with sub-second latency.",
      image: "https://images.unsplash.com/photo-1550565118-3d1428df7301?auto=format&fit=crop&q=80&w=1200",
      tags: ["Java", "Kafka", "Redis", "Cloud"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Real-Time Analytics Engine",
      category: "Data Streaming / Analysis",
      description: "Scalable data processing pipeline capable of handling 50k+ events per second. Integrated with real-time visualization dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      tags: ["Python", "ElasticSearch", "React", "AWS"],
      links: { github: "#", demo: "#" }
    }
  ];

  return (
    <section id="projects" className="bg-[var(--surface-main)] py-24 md:py-32">
      <div className="section-container">
        <div className="space-y-4 mb-20">
          <h2 className="text-3xl md:text-5xl">Featured Projects</h2>
          <p className="text-[var(--text-dim)] font-medium max-w-2xl text-lg">
            A selection of technical architectures and full-stack systems built for scalability and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-base flex flex-col group overflow-hidden bg-[var(--bg-main)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex flex-col flex-1 space-y-4">
                 <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{project.category}</span>
                 <h3 className="text-xl font-bold">{project.title}</h3>
                 <p className="text-sm text-[var(--text-dim)] leading-relaxed line-clamp-3">
                   {project.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-2 pt-2 items-start flex-1">
                   {project.tags.map((tag, j) => (
                     <span key={j} className="px-3 py-1 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-lg text-[10px] font-semibold text-[var(--text-dim)]">
                       {tag}
                     </span>
                   ))}
                 </div>

                 <div className="flex gap-6 pt-6 border-t border-[var(--border-main)]">
                    <a href={project.links.github} className="flex items-center gap-2 text-sm font-bold text-[var(--text-main)] hover:text-indigo-600 transition-colors">
                       <Github size={16} /> Source
                    </a>
                    <a href={project.links.demo} className="flex items-center gap-2 text-sm font-bold text-[var(--text-main)] hover:text-indigo-600 transition-colors">
                       <ExternalLink size={16} /> Live Demo
                    </a>
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