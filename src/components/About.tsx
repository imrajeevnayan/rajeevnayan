import { motion } from 'framer-motion';
import { User, Code, Database, Globe, Layers } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Architecture",
      desc: "Strong focus on maintainability, scalability, and performance in every line of code."
    },
    {
      icon: Layers,
      title: "System Design",
      desc: "Designing resilient distributed systems and efficient microservice patterns."
    },
    {
      icon: Database,
      title: "Data Engineering",
      desc: "Optimizing data flow and storage with advanced SQL and NoSQL techniques."
    },
    {
      icon: Globe,
      title: "Web Solutions",
      desc: "Building high-performance user experiences with React and modern web stacks."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg-main)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
               <div className="text-[var(--brand-accent)] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                 <User size={16} /> Identity
               </div>
               <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                 About <span className="text-gradient">Me</span>
               </h2>
               <div className="w-20 h-1.5 bg-[var(--brand-accent)] rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
               <p>
                  I am a passionate Software Engineer with a focus on building distributed systems and modern web applications. With a strong foundation in Java and the Spring ecosystem, I enjoy tackling complex backend challenges while ensuring a seamless user experience.
               </p>
               <p>
                  My approach combines technical rigor with product intuition. I believe that good software isn't just about code—it's about solving real-world problems through elegant architecture and scalable solutions.
               </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="p-10 card-airbnb card-premium-hover space-y-5 border border-[var(--border-main)] group relative overflow-hidden"
                >
                   {/* Background Glow */}
                   <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <div className="w-14 h-14 rounded-2xl bg-[var(--brand-accent)]/10 flex items-center justify-center text-[var(--brand-accent)] group-hover:bg-[var(--brand-accent)] group-hover:text-white transition-all duration-300 relative z-10 shadow-inner">
                      <item.icon size={28} />
                   </div>
                   <div className="space-y-3 relative z-10">
                      <h3 className="text-2xl font-bold tracking-tight group-hover:text-[var(--brand-accent)] transition-colors">{item.title}</h3>
                      <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed font-medium">{item.desc}</p>
                   </div>
                </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;