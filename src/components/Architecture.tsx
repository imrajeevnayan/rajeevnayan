import { Database, Zap, Cpu, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const layers = [
  { 
    id: 'gateway', 
    title: 'API Gateway', 
    icon: ShieldCheck, 
    desc: 'Unified entry point managing authentication, rate limiting, and request routing across the microservices ecosystem.',
    color: 'var(--brand-accent)'
  },
  { 
    id: 'services', 
    title: 'Microservices', 
    icon: Cpu, 
    desc: 'Decoupled, high-performance service instances engineered for horizontal scalability and independent deployment.',
    color: '#818cf8' 
  },
  { 
    id: 'cache', 
    title: 'Cache Layer', 
    icon: Zap, 
    desc: 'Low-latency distributed caching utilizing Redis to optimize read performance and reduce backend overhead.',
    color: '#f472b6' 
  },
  { 
    id: 'database', 
    title: 'Persistence', 
    icon: Database, 
    desc: 'Reliable, ACID-compliant data storage using PostgreSQL with optimized schemas for relational integrity.',
    color: '#34d399' 
  }
];

const Architecture = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="architecture" className="py-24 md:py-32 bg-[var(--surface-main)] relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 mb-20 text-center"
        >
          <div className="text-[var(--brand-accent)] font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[var(--brand-accent)]" />
            System Blueprint
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--text-primary)]">
            Technical <span className="text-gradient">Architecture</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {layers.map((layer, i) => (
            <motion.div
              key={layer.id}
              variants={nodeVariants}
              className="relative group"
            >
              {/* Connector Line (Horizontal) */}
              {i < layers.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 left-full w-full h-[2px] bg-gradient-to-r from-[var(--brand-accent)]/20 to-transparent -translate-y-1/2 z-0" />
              )}

              <div className="p-8 glass-premium card-airbnb border border-white/5 bg-[var(--bg-main)] rounded-[32px] relative z-10 h-full flex flex-col items-center text-center transition-all duration-500 group-hover:border-[var(--brand-accent)]/30 group-hover:translate-y-[-8px]">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${layer.color}10`, color: layer.color }}
                >
                  <layer.icon size={28} />
                </div>
                
                <h3 className="text-xl font-black text-[var(--text-primary)] mb-4 tracking-tight group-hover:text-[var(--brand-accent)] transition-colors">
                  {layer.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
                  {layer.desc}
                </p>

                {/* Progress Indicator */}
                <div className="mt-8 w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                   <div 
                     className="h-full transition-all duration-1000 group-hover:w-full w-0"
                     style={{ backgroundColor: layer.color }}
                   />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
           className="mt-20 p-8 glass-premium border border-white/5 rounded-3xl text-center max-w-3xl mx-auto"
        >
           <p className="text-[var(--text-dim)] font-black text-[10px] uppercase tracking-[0.2em] mb-4">Architecture Principle</p>
           <p className="text-[var(--text-secondary)] text-lg font-light leading-relaxed">
             "I build systems that prioritize <span className="text-[var(--text-primary)] font-bold italic">resilience</span> over complexity, ensuring each component serves a distinct purpose within a high-performance ecosystem."
           </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
