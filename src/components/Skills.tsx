import { motion } from 'framer-motion';

const Skills = () => {
  const skillGroups = [
    {
      title: "Core Stack",
      desc: "Architecting robust server-side logic and high-performance system backbones.",
      skills: ["Java 21", "Spring Boot", "Microservices", "REST APIs", "Spring Security", "JUnit 5"]
    },
    {
      title: "Frontend & UI",
      desc: "Engineering high-fidelity, responsive interfaces with precise state management.",
      skills: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Next.js"]
    },
    {
      title: "Data & Infra",
      desc: "Optimizing persistence layers and managing scalable cloud infrastructure.",
      skills: ["PostgreSQL", "Redis", "Docker", "AWS", "Git / GitHub", "Maven / Gradle"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-32 md:py-40 bg-[var(--bg-main)]">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 mb-20"
        >
          <div className="text-[var(--brand-accent)] font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[var(--brand-accent)]" />
            Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--text-primary)]">Tech <span className="text-gradient">Ecosystem</span></h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {skillGroups.map((group, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="p-10 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-3xl flex flex-col h-full hover:border-[var(--brand-accent)]/50 transition-all duration-300 group"
            >
              <div className="mb-10 space-y-4">
                <h3 className="text-2xl font-black text-[var(--text-primary)] tracking-tight group-hover:text-[var(--brand-accent)] transition-colors">{group.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed">{group.desc}</p>
              </div>
              
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {group.skills.map((skill, j) => (
                  <motion.span 
                    key={j}
                    whileHover={{ y: -2 }}
                    className="px-4 py-2 bg-[var(--bg-main)] border border-[var(--border-main)] rounded-lg text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider transition-all cursor-default hover:bg-[var(--brand-accent)] hover:text-white hover:border-transparent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
