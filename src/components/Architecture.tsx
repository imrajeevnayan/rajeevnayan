import { Database, Shield, Server, Layout, Share2, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Architecture = () => {
  const components = [
    { icon: Layout, label: 'Frontend Layer', desc: 'React / TypeScript' },
    { icon: Share2, label: 'API Gateway', desc: 'Spring Cloud' },
    { icon: Shield, label: 'Auth & Security', desc: 'OAuth2 / JWT' },
    { icon: Server, label: 'Application Cluster', desc: 'Spring Boot (JVM)' },
    { icon: Database, label: 'Data Store', desc: 'PostgreSQL / Redis' },
  ];

  return (
    <section id="architecture" className="py-24 md:py-32 bg-[var(--surface-main)] overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
              <div className="text-[var(--brand-accent)] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Code2 size={16} /> Technical Blueprint
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                System <span className="text-gradient">Design</span>
              </h2>
              <p className="text-[var(--text-secondary)] font-medium text-lg leading-relaxed">
                  I architect systems with a focus on high availability, security, and scalability. This is a high-level representation of my standard microservices approach.
              </p>
              <ul className="space-y-4 pt-4">
                  {[
                    'Stateless Security Implementation',
                    'Distributed System Integration',
                    'Cloud-Native Deployment Flow'
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-sm font-bold text-[var(--text-primary)]"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />
                        {item}
                    </motion.li>
                  ))}
              </ul>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {components.map((node, i) => (
                  <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                      className="p-6 card-airbnb bg-[var(--bg-main)] border border-[var(--border-main)] flex flex-col items-center gap-4 text-center hover:border-[var(--brand-accent)]/30 transition-all shadow-sm group"
                  >
                      <div className="w-14 h-14 rounded-2xl bg-[var(--brand-accent)]/5 flex items-center justify-center text-[var(--brand-accent)] group-hover:bg-[var(--brand-accent)] group-hover:text-white transition-all duration-300 shadow-inner">
                          <node.icon size={28} />
                      </div>
                      <div className="space-y-1">
                          <div className="text-[13px] font-bold text-[var(--text-primary)] uppercase tracking-wider">{node.label}</div>
                          <div className="text-[11px] text-[var(--text-secondary)] font-semibold">{node.desc}</div>
                      </div>
                  </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
