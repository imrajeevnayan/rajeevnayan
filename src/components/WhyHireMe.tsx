import { CheckCircle2, Award, Zap, Code, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Strong Java & OOP Fundamentals',
    desc: 'Solid understanding of core Java, collections, exception handling, streams API, multi-threading, and object-oriented design patterns.',
    icon: Code
  },
  {
    title: 'Spring Boot & Microservices',
    desc: 'Experienced in developing distributed services with Spring Boot, JPA, Hibernate, service discovery, config servers, and resilient message routing.',
    icon: Zap
  },
  {
    title: 'Performant SQL & Persistence',
    desc: 'Skillful in modeling efficient relational schemas, writing optimized SQL query joins, custom indexing, and managing caching tools (Redis).',
    icon: Award
  },
  {
    title: 'Secured API Development',
    desc: 'Implementing secure-by-design patterns using Spring Security, JWT authentication controls, OAuth2 authorization, and input validation filters.',
    icon: ShieldCheck
  },
  {
    title: 'Recruiter-Ready Mindset',
    desc: 'Proven problem-solving capabilities (700+ solved coding problems) coupled with containerized, cloud-deployable production workflows.',
    icon: Heart
  }
];

const WhyHireMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-hire-me" className="py-16 md:py-24 bg-[var(--surface-card)]/40 border-y border-[var(--border-main)] relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-5 space-y-6">
            <span className="badge-premium">Recruiter Zone</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              Why <span className="text-gradient">Hire Me</span>
            </h2>
            <p className="text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              I focus exclusively on backend software engineering. I design systems with scalability, reliability, and security as top priorities, producing clean code that compiles and scales.
            </p>
            <div className="pt-4 border-t border-[var(--border-main)] flex flex-col gap-3 text-xs text-[var(--text-secondary)]">
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={16} className="text-green-500" /> Clean & documented code layers
              </span>
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={16} className="text-green-500" /> Production-ready containerized packaging
              </span>
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={16} className="text-green-500" /> Professional timeline commits and API specs
              </span>
            </div>
          </div>

          {/* Right Column: Values grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-4"
          >
            {values.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glow-card p-6 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-2xl flex gap-5 items-start hover:border-[var(--brand-accent)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] flex items-center justify-center shrink-0">
                  <item.icon size={18} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-[var(--text-primary)] tracking-tight">{item.title}</h4>
                  <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
