import { motion } from 'framer-motion';
import { Cpu, Globe, Database } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      icon: Cpu,
      title: "Core Stack",
      desc: "Architecting robust server-side logic and high-performance system backbones.",
      skills: ["Java 21", "Spring Boot", "Microservices", "REST APIs", "Spring Security", "JUnit 5"]
    },
    {
      icon: Globe,
      title: "Frontend & UI",
      desc: "Engineering high-fidelity, responsive interfaces with precise state management.",
      skills: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Next.js"]
    },
    {
      icon: Database,
      title: "Data & Infra",
      desc: "Optimizing persistence layers and managing scalable cloud infrastructure.",
      skills: ["PostgreSQL", "Redis", "Docker", "AWS", "Git / GitHub", "Maven / Gradle"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="skills" className="py-16 md:py-24 bg-[var(--surface-main)]">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 mb-24"
        >
          <span className="badge-premium">Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Tech <span className="text-gradient">Ecosystem</span></h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillGroups.map((group, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="premium-card p-10 flex flex-col h-full group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/5 flex items-center justify-center text-[var(--brand-accent)] mb-8 transition-all group-hover:bg-[var(--brand-accent)] group-hover:text-white">
                <group.icon size={22} />
              </div>

              <div className="mb-10 space-y-4">
                <h3 className="text-2xl font-black tracking-tight">{group.title}</h3>
                <p className="text-[13px] text-[var(--text-secondary)] font-medium leading-relaxed">{group.desc}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="px-3 py-1.5 bg-[var(--bg-main)] border border-[var(--border-main)] rounded-lg text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-wider transition-all cursor-default hover:border-[var(--brand-accent)]/50 hover:text-[var(--brand-accent)]"
                  >
                    {skill}
                  </span>
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
