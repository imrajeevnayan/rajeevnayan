import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Software Engineer",
    company: "Freelance / Independent",
    location: "Remote",
    period: "2022 - Present",
    desc: "Architecting and implementing full-stack solutions for international clients, specializing in Spring Boot backends and React frontends.",
    points: [
      "Designed and deployed 10+ scalable microservices handling secure data processing.",
      "Optimized database queries in PostgreSQL, reducing load times by 40%.",
      "Collaborated with cross-functional teams to deliver enterprise-grade software products."
    ]
  },
  {
    role: "Backend Intern",
    company: "Tech Solutions Inc.",
    location: "Bengaluru, India",
    period: "2021 - 2022",
    desc: "Contributed to the development of a internal CRM system using Java and Spring ecosystem.",
    points: [
      "Integrated third-party APIs for automated data synchronization.",
      "Refactored legacy code to improve system performance and maintainability.",
      "Participated in agile ceremonies and code review processes."
    ]
  }
];

const Experience = () => {
    return (
    <section id="experience" className="py-24 md:py-32 bg-[var(--surface-main)] overflow-hidden relative">
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 mb-20"
        >
          <div className="text-[var(--brand-accent)] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
            <Briefcase size={16} /> Professional Path
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-medium max-w-2xl text-lg leading-relaxed">
            My professional journey in software engineering, focused on technical excellence and business impact.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="p-6 md:p-10 card-airbnb card-premium-hover bg-[var(--bg-main)] border border-[var(--border-main)] group relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[var(--brand-accent)]">
                    <div className="p-3 bg-[var(--brand-accent)]/10 rounded-xl group-hover:bg-[var(--brand-accent)] group-hover:text-white transition-all duration-300 shadow-inner">
                      <Briefcase size={24} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-[var(--brand-accent)] transition-colors">{exp.role}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-[var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--text-primary)] italic underline decoration-[var(--brand-accent)]/20 decoration-2 underline-offset-4">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[var(--brand-accent)]" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[var(--brand-accent)]" />
                      {exp.period}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <p className="text-base text-[var(--text-secondary)] font-medium leading-relaxed italic border-l-4 border-[var(--brand-accent)]/20 pl-6 py-1">
                  "{exp.desc}"
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-[15px] font-medium text-[var(--text-secondary)] leading-relaxed group/item">
                      <div className="w-2 h-2 rounded-full bg-[var(--brand-accent)] mt-1.5 shrink-0 group-hover/item:scale-150 group-hover/item:shadow-[0_0_8px_var(--brand-accent)] transition-all duration-300" />
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
