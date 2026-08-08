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
    <section id="experience" className="py-20 md:py-32 bg-[var(--bg-alternate)] blueprint-grid border-b border-[var(--border-main)]">
      <div className="section-container">
        
        <div className="max-w-2xl mb-16">
          <span className="text-[12px] font-semibold text-[var(--color-ember)] uppercase block mb-3">Trayectoria</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4 font-display">
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
              className="p-8 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-[28px] hover:bg-[var(--color-cool-wash)]/40 transition-all duration-300 flex flex-col gap-6 text-left"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 pb-4 border-b border-[var(--border-main)]">
                <div className="flex gap-3 items-center">
                  <div className="w-9 h-9 rounded-[10px] bg-[var(--color-cool-wash)] flex items-center justify-center text-[var(--color-electric-blue)] shrink-0">
                    <Briefcase size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] font-display">{exp.role}</h3>
                    <div className="text-xs text-[var(--text-secondary)] font-sans">{exp.company}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-[12px] text-[var(--text-secondary)] font-sans">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} className="text-[var(--color-electric-blue)]" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} className="text-[var(--color-electric-blue)]" />
                    {exp.period}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed font-sans border-l-2 border-[var(--border-main)] pl-4">
                  {exp.desc}
                </p>
                <ul className="space-y-3 font-sans text-xs text-[var(--text-secondary)]">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[var(--color-electric-blue)] select-none font-bold">•</span>
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
