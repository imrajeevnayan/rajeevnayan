import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Database, Cloud } from 'lucide-react';

const skillTiers = [
  {
    id: 'core',
    label: 'Core Backend',
    icon: Cpu,
    skills: [
      { name: 'Java 17/21', desc: 'Garbage collection tuning, streams API, multi-threading, concurrency utilities' },
      { name: 'Spring Boot', desc: 'Bean configuration, dynamic profiles, autowiring, lifecycle hooks' },
      { name: 'RESTful API Design', desc: 'Payload constraint validations, status structures, routing endpoints' },
      { name: 'Spring MVC', desc: 'Request filter mapping, dispatching logic, custom controller routes' }
    ]
  },
  {
    id: 'databases',
    label: 'Databases & Caching',
    icon: Database,
    skills: [
      { name: 'SQL Query Tuning', desc: 'Index optimization patterns, EXPLAIN execution trace parsing, join normalization' },
      { name: 'MySQL & PostgreSQL', desc: 'Relational entity design, transaction isolation levels, constraints' },
      { name: 'Redis Cache Layer', desc: 'Distributed caching strategies, TTL controls, query result cache' },
      { name: 'Hibernate & JPA', desc: 'N+1 query solutions, batch fetching limits, entity mappings' }
    ]
  },
  {
    id: 'security',
    label: 'Security & Microservices',
    icon: ShieldCheck,
    skills: [
      { name: 'Spring Security', desc: 'Interception filters, token-based authentication, path locks' },
      { name: 'JWT & OAuth2', desc: 'Claims parsing, role authorizations, stateless token sessions' },
      { name: 'Microservices Flow', desc: 'Decoupled communication setups, API Gateway routing logic' }
    ]
  },
  {
    id: 'devops',
    label: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'Docker Containers', desc: 'Writing minimal Dockerfiles, Docker Compose container stack wiring' },
      { name: 'CI/CD Pipelines', desc: 'Jenkins stages, GitHub Actions runner setups, build triggers' },
      { name: 'AWS Cloud Hosting', desc: 'Virtual machine computing (EC2), database hosting (RDS), file storage (S3)' }
    ]
  }
];

const Skills = () => {
  const [activeTier, setActiveTier] = useState('core');

  const activeCategory = skillTiers.find(tier => tier.id === activeTier) || skillTiers[0];

  return (
    <section id="skills" className="py-16 md:py-24 bg-[var(--bg-main)] border-b border-[var(--border-main)]">
      <div className="section-container">
        
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase block mb-3">// TECHNICAL STACK</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Technical Ecosystem
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base font-light leading-relaxed font-mono">
            Tiered engineering capabilities verified through actual project builds and database query normalization.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 border-b border-[var(--border-main)] pb-4 mb-8">
          {skillTiers.map((tier) => {
            const isActive = tier.id === activeTier;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-semibold transition-all border cursor-pointer ${
                  isActive 
                    ? 'bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30' 
                    : 'bg-[var(--surface-main)] text-[var(--text-secondary)] border-[var(--border-main)] hover:border-white/10'
                }`}
              >
                <tier.icon size={12} />
                <span>{tier.label}</span>
              </button>
            );
          })}
        </div>

        {/* Display Tiers List */}
        <div className="bg-[var(--surface-card)] border border-[var(--border-main)] rounded-xl p-6 md:p-8 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTier}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
            >
              {activeCategory.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-[var(--surface-main)] border border-[var(--border-main)] hover:border-[#10b981]/30 rounded-lg transition-all flex gap-3 items-start group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0 mt-1.5 animate-pulse" />
                  <div className="space-y-1">
                    <h4 className="font-mono text-sm font-bold text-[var(--text-primary)] group-hover:text-[#10b981] transition-colors">
                      {skill.name}
                    </h4>
                    <p className="font-sans text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
