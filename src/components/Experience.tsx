import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack Java Developer Intern",
    company: "Role – Full Stack Java Developer",
    location: "Bengaluru, India",
    period: "February 2025 – August 2025",
    desc: "Worked as a core backend intern building high-throughput REST APIs, implementing microservice integration filters, and tuning database latency.",
    points: [
      "Reduced API response latency by 30% via Redis caching and Hibernate N+1 query optimization across 4 production-grade Spring Boot microservices containerized via Docker Compose.",
      "Secured 15+ RESTful API endpoints using Spring Security, JWT authentication, and OAuth2 authorization; sustained 5,000+ daily requests at 99.9% uptime across AWS staging and production environments.",
      "Accelerated release cycles by 25% and eliminated post-deployment defects by automating CI/CD pipelines using Jenkins and GitHub Actions with SonarQube quality gates.",
      "Achieved 80%+ unit and integration test coverage using JUnit and Mockito; collaborated as core developer and reviewer in a 6-member Agile Scrum team."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-[var(--bg-main)] border-b border-[var(--border-main)]">
      <div className="section-container">
        
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase block mb-3">// WORK EXPERIENCE</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Professional History
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-6 md:p-8 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-xl hover:-translate-y-1 hover:border-[#10b981]/30 transition-all duration-300 flex flex-col gap-6 text-left"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 pb-4 border-b border-[var(--border-main)]">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0">
                    <Briefcase size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-mono">{exp.role}</h3>
                    <div className="text-xs text-[var(--text-secondary)] font-mono">{exp.company}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)] font-mono">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} className="text-[#10b981]" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} className="text-[#10b981]" />
                    {exp.period}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-xs md:text-sm text-[var(--text-secondary)] font-light leading-relaxed font-sans border-l-2 border-[var(--border-main)] pl-4">
                  {exp.desc}
                </p>
                <ul className="space-y-2.5 font-mono text-[11px] text-[var(--text-secondary)]">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#10b981] select-none font-bold">➔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
