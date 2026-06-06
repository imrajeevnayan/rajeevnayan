import { motion } from 'framer-motion';
import { Layers, Code, Database, ArrowRight, ShieldCheck } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Layers,
      title: "System Architecture",
      desc: "Architecting resilient distributed systems and scalable microservice patterns for enterprise workloads."
    },
    {
      icon: Code,
      title: "Backend Engineering",
      desc: "Designing high-throughput APIs and robust server-side logic using modern Java and Spring ecosystems."
    },
    {
      icon: Database,
      title: "Data Optimization",
      desc: "Engineering efficient data flows and high-performance storage solutions using PostgreSQL and Redis."
    },
    {
      icon: ShieldCheck,
      title: "Security & Scale",
      desc: "Implementing secure-by-design principles and fault-tolerant patterns for mission-critical apps."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[var(--surface-card)] border-y border-[var(--border-main)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
               <span className="badge-premium">Backend Specialist</span>
               <h2 className="text-3xl md:text-5xl font-bold tracking-appleHeading text-[var(--text-primary)]">
                 Java <span className="text-gradient">Engineer</span>
               </h2>
            </div>

            <div className="space-y-5 text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.47] font-light max-w-xl">
               <p>
                  I am an MCA graduate and Java Backend Developer specializing in the Java & Spring Boot ecosystem. I focus on building production-grade microservices, secure REST APIs, and AI-powered RAG systems. My engineering approach is built on three pillars: <span className="text-[var(--text-primary)] font-medium">Clean Code, Reliability, and Performance.</span>
               </p>
               <p>
                  With a strong DSA foundation of 700+ solved problems, I design clean APIs, optimize database operations using Hibernate and Redis, and automate CI/CD pipelines to build scalable, robust software solutions.
               </p>
            </div>
            
            <div className="pt-4">
               <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                 Explore Case Studies <ArrowRight size={16} />
               </a>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
             {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="premium-card p-6 md:p-8 bg-[var(--bg-main)] hover:bg-[var(--surface-card)]"
                >
                   <div className="w-10 h-10 flex items-center justify-center text-[var(--color-button-blue)] mb-6">
                      <item.icon size={22} strokeWidth={1.5} />
                   </div>
                   <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                   <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                      {item.desc}
                   </p>
                </motion.div>
             ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;