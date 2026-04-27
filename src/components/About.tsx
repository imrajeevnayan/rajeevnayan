import { motion } from 'framer-motion';
import { User, Code, Database, Globe, Layers, ArrowRight } from 'lucide-react';

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
      icon: Globe,
      title: "Frontend Execution",
      desc: "Developing high-fidelity, responsive user interfaces with a focus on performance and accessibility."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-32 md:py-40 bg-[var(--bg-main)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-4">
               <div className="text-[var(--brand-accent)] font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3">
                 <div className="w-8 h-[1px] bg-[var(--brand-accent)]" />
                 Identity
               </div>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--text-primary)]">
                 The <span className="text-gradient">Engineer</span>
               </h2>
            </div>

            <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed font-light">
               <p>
                  I am a Systems Architect and Full-Stack Engineer dedicated to building high-performance, scalable software. My expertise lies in designing resilient microservices and engineering distributed systems that prioritize low latency and security.
               </p>
               <p>
                  With a deep focus on backend architecture and performance optimization, I transform complex requirements into maintainable, production-ready codebases that drive meaningful business value.
               </p>
            </div>
            
            <div className="pt-4">
               <a href="#experience" className="text-[var(--brand-accent)] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all flex items-center gap-2 group">
                 Professional Journey <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
               </a>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
             {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="p-8 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-2xl group relative overflow-hidden transition-all duration-300 hover:border-[var(--brand-accent)]/50"
                >
                   
                   <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/5 flex items-center justify-center text-[var(--brand-accent)] group-hover:bg-[var(--brand-accent)] group-hover:text-white transition-colors duration-300 relative z-10">
                      <item.icon size={24} />
                   </div>
                   <div className="mt-6 space-y-3 relative z-10">
                      <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--brand-accent)] transition-colors">{item.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">{item.desc}</p>
                   </div>
                </motion.div>
             ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;