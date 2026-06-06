import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Java Developer Intern",
    company: "Jspider Private Limited",
    location: "Bengaluru, India",
    period: "Feb 2025 - Aug 2025",
    desc: "Developed production-grade Spring Boot microservices, secure REST APIs, and automated deployment pipelines.",
    points: [
      "Launched and deployed 4 Spring Boot microservices with Docker Compose; reduced API latency by 30% through Redis caching and Hibernate query optimization.",
      "Engineered 15+ secure REST endpoints using Spring Security, JWT, and OAuth2; sustained 5,000+ daily requests at 99.9% uptime across staging and production environments.",
      "Automated CI/CD pipeline with Jenkins and GitHub Actions, integrating SonarQube quality gates, cutting release cycle time by 25% and reducing post-deployment defects.",
      "Maintained 80%+ unit test coverage using JUnit 5 and Mockito in a 6-member Agile Scrum team following 2-week sprints."
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
              className="premium-card p-8 md:p-10 bg-[var(--surface-card)]"
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
