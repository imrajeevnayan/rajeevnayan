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
    <section id="skills" className="py-20 md:py-32 bg-[var(--bg-main)]">
      <div className="section-container">
        
        <div className="max-w-2xl mb-16">
          <span className="text-[12px] font-semibold text-[var(--color-ember)] uppercase block mb-3">Tecnología</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4 font-display">
            Technical Ecosystem
          </h2>
          <p className="text-[var(--text-secondary)] text-[17px] font-normal leading-relaxed">
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
                className={`flex items-center gap-2 px-5 py-2.5 rounded-[980px] text-xs font-mono font-semibold transition-all border cursor-pointer ${
                  isActive 
                    ? 'bg-[var(--color-cool-wash)] text-[var(--color-electric-blue)] border-[var(--color-electric-blue)]/30 shadow-none' 
                    : 'bg-[var(--bg-main)] text-[var(--text-secondary)] border-[var(--border-main)] hover:border-[var(--text-primary)]'
                }`}
              >
                <tier.icon size={12} />
                <span>{tier.label}</span>
              </button>
            );
          })}
        </div>

        {/* Display Tiers List */}
        <div className="bg-[var(--bg-alternate)] border border-[var(--border-main)] rounded-[28px] p-6 md:p-8 min-h-[220px]">
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
                  className="p-5 bg-[var(--surface-card)] border border-[var(--border-main)] hover:border-[var(--color-electric-blue)]/30 rounded-[20px] transition-all flex gap-3 items-start group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-electric-blue)] shrink-0 mt-2 animate-pulse" />
                  <div className="space-y-1">
                    <h4 className="font-display text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-electric-blue)] transition-colors">
                      {skill.name}
                    </h4>
                    <p className="font-sans text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
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
