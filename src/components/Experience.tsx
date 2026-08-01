import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack Java Developer Intern",
    company: "Role – Full Stack Java Developer",
    location: "Bengaluru, India",
    period: "February 2025 – August 2025",
    desc: "Developed and deployed production-ready Spring Boot microservices, secured RESTful APIs, and integrated dynamic React frontends.",
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
    <section id="experience" className="py-10 md:py-14 bg-[var(--bg-main)]">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-3 mb-8 md:mb-12"
        >
          <span className="badge-premium">Professional Path</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-appleHeading">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card p-8 md:p-10 bg-[var(--surface-card)] hover:-translate-y-1 hover:border-[#10b981]/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center text-[var(--color-button-blue)] shrink-0">
                    <Briefcase size={22} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-bold tracking-appleHeading text-[var(--text-primary)]">{exp.role}</h3>
                    <div className="text-sm font-medium text-[var(--text-secondary)]">{exp.company}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-secondary)] lg:pt-2 lg:pl-14">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[var(--color-button-blue)]" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[var(--color-button-blue)]" />
                    {exp.period}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 lg:ml-14">
                <p className="text-sm md:text-[15px] text-[var(--text-secondary)] font-light leading-[1.47] max-w-4xl border-l border-[var(--border-main)] pl-6">
                  {exp.desc}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 lg:pl-6">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[13px] text-[var(--text-secondary)] leading-relaxed font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-button-blue)] mt-2 shrink-0" />
                      {point}
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
