import { motion } from 'framer-motion';
import { Cpu, Globe, Database } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      icon: Cpu,
      title: "Backend & Systems",
      desc: "Architecting secure, high-performance backends and robust microservice APIs.",
      skills: ["Java 17/21", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate/JPA", "Microservices", "JWT/OAuth2", "REST APIs"]
    },
    {
      icon: Globe,
      title: "AI, Frontend & Fundamentals",
      desc: "Engineering intelligent RAG workflows, responsive interfaces, and clean CS logic.",
      skills: ["RAG Pipeline", "Vector Embeddings", "Qdrant", "OpenRouter API", "React.js", "JavaScript (ES6+)", "Tailwind CSS", "DSA", "OOP", "DBMS/OS/CN"]
    },
    {
      icon: Database,
      title: "Data, Cloud & DevOps",
      desc: "Optimizing persistence layers and managing automated pipelines.",
      skills: ["MySQL", "PostgreSQL", "Redis", "Oracle", "AWS (EC2/S3/RDS)", "Docker", "Jenkins", "GitHub Actions", "Git/Maven", "JUnit 5/Mockito/SonarQube"]
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
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-3 mb-8 md:mb-12"
        >
          <span className="badge-premium">Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-appleHeading">Tech <span className="text-gradient">Ecosystem</span></h2>
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
              className="premium-card p-8 md:p-10 flex flex-col h-full bg-[var(--surface-card)]"
            >
              <div className="w-10 h-10 flex items-center justify-center text-[var(--color-button-blue)] mb-6">
                <group.icon size={22} strokeWidth={1.5} />
              </div>

              <div className="mb-8 space-y-2">
                <h3 className="text-xl font-bold tracking-appleHeading text-[var(--text-primary)]">{group.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">{group.desc}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="px-3 py-1 bg-[var(--bg-main)] border border-[var(--border-main)] rounded-full text-xs font-normal text-[var(--text-secondary)] transition-all cursor-default hover:border-[var(--brand-accent)] hover:text-[var(--color-deep-link-blue)]"
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
