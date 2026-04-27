import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Full-Stack Engineer",
    company: "Freelance / Independent",
    location: "Remote",
    period: "2022 - Present",
    desc: "Architecting enterprise-grade full-stack solutions with a focus on high-performance Spring Boot backends and modern React architectures.",
    points: [
      "Engineered 10+ scalable microservices, ensuring 99.9% system uptime for international clients.",
      "Optimized PostgreSQL query performance, achieving a 40% reduction in average API latency.",
      "Implemented secure OAuth2/JWT authentication flows across distributed system clusters."
    ]
  },
  {
    role: "Backend Engineering Intern",
    company: "Tech Solutions Inc.",
    location: "Bengaluru, India",
    period: "2021 - 2022",
    desc: "Contributed to the core development of an internal CRM ecosystem using Java and the Spring Framework.",
    points: [
      "Automated data synchronization by integrating complex third-party RESTful APIs.",
      "Refactored legacy modules to improve code maintainability and system execution speed.",
      "Active participant in Agile sprints, driving iterative improvements through code reviews."
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
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 mb-20"
        >
          <div className="text-[var(--brand-accent)] font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[var(--brand-accent)]" />
            Professional Path
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--text-primary)]">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="p-6 md:p-10 bg-[var(--surface-main)] rounded-2xl border border-[var(--border-main)] hover:border-[var(--brand-accent)]/30 transition-colors duration-300 relative overflow-hidden"
            >

              <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[var(--brand-accent)]">
                    <div className="p-3 bg-[var(--brand-accent)]/5 rounded-xl transition-colors duration-300">
                      <Briefcase size={24} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{exp.role}</h3>
                  </div>
                  <div className="text-[var(--text-secondary)] font-bold text-sm ml-[60px]">{exp.company}</div>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.15em]">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[var(--brand-accent)]" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[var(--brand-accent)]" />
                    {exp.period}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 relative z-10">
                <p className="text-lg text-[var(--text-secondary)] font-light leading-relaxed max-w-4xl border-l-2 border-[var(--brand-accent)]/20 pl-8">
                  {exp.desc}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-4 text-[15px] font-medium text-[var(--text-secondary)] leading-relaxed group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] mt-2 shrink-0 group-hover/item:scale-150 transition-transform" />
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
