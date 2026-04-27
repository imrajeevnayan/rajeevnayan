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
    <section id="experience" className="py-16 md:py-24 bg-[var(--surface-main)]">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 mb-24"
        >
          <span className="badge-premium">Professional Path</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="premium-card p-10 group"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[var(--brand-accent)]">
                    <div className="p-3 bg-[var(--brand-accent)]/5 rounded-xl group-hover:bg-[var(--brand-accent)] group-hover:text-white transition-all">
                      <Briefcase size={22} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight">{exp.role}</h3>
                  </div>
                  <div className="text-sm font-bold ml-14 text-[var(--text-primary)] opacity-80">{exp.company}</div>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-widest lg:pt-4">
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
              
              <div className="space-y-8 ml-0 lg:ml-14">
                <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed max-w-4xl border-l-2 border-[var(--brand-accent)]/20 pl-6">
                  {exp.desc}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium">
                      <div className="w-1 h-1 rounded-full bg-[var(--brand-accent)] mt-2 shrink-0" />
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
