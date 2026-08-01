import { Cpu, ShieldCheck, Database, Layers, Network, Zap, Settings, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const backendCore = [
  {
    title: 'Spring Boot & Microservices',
    desc: 'Designing modular, independent microservices with distributed communication protocols, robust service discovery, and resilient configuration management.',
    icon: Cpu
  },
  {
    title: 'REST APIs & Integration',
    desc: 'Crafting clean, predictable REST APIs with standard HTTP protocols, payload validation, unified error responses, and automated OpenAPI/Swagger specs.',
    icon: RefreshCw
  },
  {
    title: 'Database Architecture',
    desc: 'Designing normalized schemas, indexing strategies, JPA/Hibernate mapping optimizations, and transactions management for MySQL, PostgreSQL, and Oracle.',
    icon: Database
  },
  {
    title: 'Auth & API Security',
    desc: 'Securing gateways and endpoints using Spring Security, state-of-the-art JWT authentication, OAuth2 flows, and fine-grained role-based access control (RBAC).',
    icon: ShieldCheck
  }
];

const systemDesign = [
  {
    title: 'API Gateway & Routing',
    desc: 'Implementing routing, load balancing, rate limiting, and centralized security checks using Spring Cloud Gateway and security filters.',
    icon: Layers
  },
  {
    title: 'Distributed Caching',
    desc: 'Boosting read speeds and reducing persistence layer stress using Redis for key-value storage and cache eviction policies.',
    icon: Zap
  },
  {
    title: 'Distributed Transactions',
    desc: 'Managing data consistency across services with microservice patterns (e.g. Saga, CQRS) and event-driven architectures.',
    icon: Network
  },
  {
    title: 'Performance & Scalability',
    desc: 'Profiling bottlenecks with actuator tools, optimizing JPA query sizes, configuring custom thread pools, and leveraging connection pools.',
    icon: Settings
  }
];

const Architecture = () => {
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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="architecture" className="py-16 md:py-24 bg-[var(--bg-main)] border-y border-[var(--border-main)]">
      <div className="section-container">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="badge-premium mb-4">Core Focus</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Backend Expertise & <span className="text-gradient">System Design</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base font-light leading-relaxed">
            Architecting robust backend services, secure communication pathways, and distributed systems optimized for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Column 1: Backend Architecture */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] border-b border-[var(--border-main)] pb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-accent)]"></span>
              Backend Architecture
            </h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {backendCore.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="glow-card p-6 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-xl flex gap-5 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] flex items-center justify-center shrink-0">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-base tracking-tight mb-1">{item.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Column 2: System Design */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] border-b border-[var(--border-main)] pb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              System Design & Scaling
            </h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {systemDesign.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="glow-card p-6 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-xl flex gap-5 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-base tracking-tight mb-1">{item.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
