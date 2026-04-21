import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    // ... projects data ...
    {
      title: "BookMyShow Clone",
      category: "Java / Spring Boot / React",
      description: "A premium movie ticket booking system featuring a modern UI, interactive seat selection, and a robust REST API for managing screenings and reservations.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200",
      tags: ["Spring Boot", "React", "PostgreSQL", "Tailwind CSS"],
      links: { github: "https://github.com/imrajeevnayan/BookMyShow", demo: "#" }
    },
    {
      title: "Hospital Management System",
      category: "Spring Boot 3.x / Security",
      description: "A comprehensive backend solution for modern healthcare operations. Implemented role-based access control (RBAC) and secure medical record management using Spring Security.",
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
    <section id="projects" className="bg-[var(--bg-main)] py-24 md:py-32">
      <div className="section-container">
        <div className="space-y-4 mb-16 text-center md:text-left">
          <div className="text-[var(--brand-accent)] font-bold text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
            <Code2 size={16} /> Selected Work
          </div>
          <h2 className="text-3xl md:text-[32px] font-bold tracking-[-0.44px]">Featured Projects</h2>
          <p className="text-[var(--text-secondary)] font-medium max-w-2xl text-lg leading-relaxed mx-auto md:mx-0">
            A deep dive into the systems and architectures I've built, ranging from enterprise backends to immersive frontend experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-airbnb flex flex-col group overflow-hidden bg-[var(--surface-main)] border border-[var(--border-main)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 space-y-4">
                 <div className="space-y-1">
                    <span className="text-[12px] font-bold text-[var(--brand-accent)] uppercase tracking-tight">{project.category}</span>
                    <h3 className="text-[18px] font-bold tracking-tight text-[var(--text-primary)]">{project.title}</h3>
                 </div>
                 
                 <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2 font-medium">
                   {project.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-2 pt-2 items-start flex-1">
                   {project.tags.map((tag, j) => (
                     <span key={j} className="px-3 py-1 bg-[var(--palette-light-surface)] rounded-[14px] text-[10px] font-bold text-[var(--text-secondary)] uppercase">
                       {tag}
                     </span>
                   ))}
                 </div>

                 <div className="flex gap-6 pt-4 border-t border-[var(--border-main)]">
                    <a 
                      href={project.links.github} 
                      target="_blank"
                      className="flex items-center gap-2 text-[12px] font-bold text-[var(--text-primary)] hover:underline transition-all"
                    >
                       <Github size={14} /> Code
                    </a>
                    {project.links.demo !== "#" && (
                       <a 
                        href={project.links.demo} 
                        target="_blank"
                        className="flex items-center gap-2 text-[12px] font-bold text-[var(--text-primary)] hover:underline transition-all"
                       >
                          <ExternalLink size={14} /> Demo
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