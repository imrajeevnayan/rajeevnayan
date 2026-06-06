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
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="architecture" className="py-10 md:py-14 bg-[var(--surface-card)] border-y border-[var(--border-main)] relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-3 mb-8 md:mb-12 text-center"
        >
          <span className="badge-premium inline-block">System Blueprint</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-appleHeading text-[var(--text-primary)]">
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
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-[1px] bg-gradient-to-r from-[var(--border-main)] to-transparent z-0" />
              )}

              <div className="p-8 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-lg relative z-10 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:border-[var(--brand-accent)]">
                <div 
                  className="w-12 h-12 rounded-md flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${layer.color}15`, color: layer.color }}
                >
                  <layer.icon size={22} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 tracking-appleHeading group-hover:text-[var(--color-button-blue)] transition-colors">
                  {layer.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] font-light leading-[1.47]">
                  {layer.desc}
                </p>

                {/* Progress Indicator */}
                <div className="mt-6 w-12 h-0.5 bg-[var(--border-main)] rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-[var(--color-button-blue)] transition-all duration-1000 group-hover:w-full w-0"
                   />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.8 }}
           className="mt-16 p-6 md:p-8 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-lg text-center max-w-3xl mx-auto"
        >
           <p className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2">Architecture Principle</p>
           <p className="text-[var(--text-secondary)] text-base md:text-lg font-light leading-relaxed">
             "I build systems that prioritize <span className="text-[var(--text-primary)] font-semibold italic">resilience</span> over complexity, ensuring each component serves a distinct purpose within a high-performance ecosystem."
           </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
