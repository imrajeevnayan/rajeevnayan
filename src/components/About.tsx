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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-[var(--bg-main)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <div className="space-y-4">
               <span className="badge-premium">Backend Specialist</span>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                 Java <span className="text-gradient">Engineer</span>
               </h2>
            </div>

            <div className="space-y-6 text-[15px] text-[var(--text-secondary)] leading-relaxed font-medium max-w-2xl">
               <p>
                  I am a Backend Software Engineer specializing in the Java & Spring ecosystem. I focus on building robust RESTful APIs, optimizing database performance, and designing clean microservice architectures. My engineering approach is built on three pillars: <span className="text-[var(--text-primary)] font-bold italic">Clean Code, Reliability, and Performance.</span>
               </p>
               <p>
                  Whether I'm configuring Spring Security, managing data with PostgreSQL, or containerizing applications with Docker, my goal is to write testable, maintainable code that solves real business problems and scales predictably.
               </p>
            </div>
            
            <div className="pt-8">
               <a href="#projects" className="btn-primary inline-flex items-center gap-3">
                 Explore Case Studies <ArrowRight size={18} />
               </a>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
             {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="premium-card p-8 group relative"
                >
                   <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/5 flex items-center justify-center text-[var(--brand-accent)] mb-6 transition-all group-hover:bg-[var(--brand-accent)] group-hover:text-white">
                      <item.icon size={20} />
                   </div>
                   <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                   <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                      {item.desc}
                   </p>
                   
                   {/* Hover Subtle Glow */}
                   <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)]/0 to-[var(--brand-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
             ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;