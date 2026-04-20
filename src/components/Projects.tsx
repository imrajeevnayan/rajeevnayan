import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BookMyShow Clone",
      category: "Java / Spring Boot / React",
      description: "A premium movie ticket booking system featuring a modern dark-mode UI, interactive seat selection, and a robust REST API for managing screenings and reservations.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200",
      tags: ["Spring Boot", "React", "PostgreSQL", "Tailwind CSS"],
      links: { github: "https://github.com/imrajeevnayan/BookMyShow", demo: "#" }
    },
    {
      title: "Hospital Management System",
      category: "Spring Boot 3.x / Security",
      description: "A comprehensive backend solution for modern healthcare operations. Implemeted role-based access control (RBAC) and secure medical record management using Spring Security.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
      tags: ["Java", "Spring Security", "Docker", "PostgreSQL"],
      links: { github: "https://github.com/imrajeevnayan/Hospital-Management-System", demo: "#" }
    },
    {
      title: "Enterprise Expense Tracker",
      category: "Full Stack / React 19",
      description: "Advanced financial dashboard built with the latest React 19 and Spring Boot 3. Features category-based analytics, data visualization, and secure transaction tracking.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
      tags: ["React 19", "Spring Boot 3", "Chart.js", "PostgreSQL"],
      links: { github: "https://github.com/imrajeevnayan/Enterprise-Expense-Tracker", demo: "#" }
    },
    {
      title: "Food Fiesta",
      category: "Spring Boot / Thymeleaf",
      description: "An end-to-end food ordering platform featuring a complete workflow from menu discovery to order management and an admin control center.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200",
      tags: ["Spring Data JPA", "Thymeleaf", "MySQL", "Java"],
      links: { github: "https://github.com/imrajeevnayan/Food-Fiesta", demo: "#" }
    },
    {
      title: "Digital Library App",
      category: "Spring Boot / React",
      description: "Automated library operations including cataloging, member management, and borrowing workflows. Built with a focus on data consistency and intuitive UI.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200",
      tags: ["React", "Spring Boot", "PostgreSQL", "REST API"],
      links: { github: "https://github.com/imrajeevnayan/digital-library-app", demo: "#" }
    },
    {
      title: "TaskFlow Manager",
      category: "Spring Boot / Tailwind",
      description: "Modern task management productivity tool featuring session-based authentication, color-coded priorities, and real-time task status updates.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200",
      tags: ["Spring Boot", "Thymeleaf", "Tailwind CSS", "PostgreSQL"],
      links: { github: "https://github.com/imrajeevnayan/Task-Management", demo: "#" }
    }
  ];

  return (
    <section id="projects" className="bg-[var(--surface-main)] py-24 md:py-32">
      <div className="section-container">
        <div className="space-y-4 mb-20 text-center md:text-left">
          <div className="text-indigo-600 font-bold text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
            <Code2 size={16} /> Selected Work
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase">Featured Projects</h2>
          <p className="text-[var(--text-dim)] font-medium max-w-2xl text-lg leading-relaxed mx-auto md:mx-0">
            A deep dive into the systems and architectures I've built, ranging from enterprise backends to immersive frontend experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-base flex flex-col group overflow-hidden bg-[var(--bg-main)] hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8 flex flex-col flex-1 space-y-5">
                 <div className="space-y-2">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">{project.category}</span>
                    <h3 className="text-xl font-bold font-outfit uppercase tracking-tight group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                 </div>
                 
                 <p className="text-sm text-[var(--text-dim)] leading-relaxed line-clamp-3 font-medium">
                   {project.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-2 pt-2 items-start flex-1">
                   {project.tags.map((tag, j) => (
                     <span key={j} className="px-3 py-1 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-lg text-[9px] font-bold text-[var(--text-dim)] uppercase tracking-widest">
                       {tag}
                     </span>
                   ))}
                 </div>

                 <div className="flex gap-6 pt-6 border-t border-[var(--border-main)]">
                    <a 
                      href={project.links.github} 
                      target="_blank"
                      className="flex items-center gap-2 text-[10px] font-bold text-[var(--text-main)] uppercase tracking-widest hover:text-indigo-600 transition-all group/link"
                    >
                       <Github size={14} className="group-hover/link:scale-110 transition-transform" /> GitHub Code
                    </a>
                    {project.links.demo !== "#" && (
                       <a 
                        href={project.links.demo} 
                        target="_blank"
                        className="flex items-center gap-2 text-[10px] font-bold text-[var(--text-main)] uppercase tracking-widest hover:text-indigo-600 transition-all group/link"
                       >
                          <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform" /> Live Demo
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