import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Layers, Database, Cloud } from 'lucide-react';

const skillTiers = [
  {
    id: 'core',
    label: 'Core Engineering',
    icon: Cpu,
    skills: [
      { name: 'Java 17/21', desc: 'Object-oriented programming, Collections, Multi-threading, Streams API' },
      { name: 'Spring Boot', desc: 'Dependency injection, custom configurations, component scanning' },
      { name: 'RESTful API Design', desc: 'Standardized route structures, request filtering, JSON payload validation' },
      { name: 'Spring MVC', desc: 'Controller endpoints, request mappings, response entities' }
    ]
  },
  {
    id: 'databases',
    label: 'Database & Caching',
    icon: Database,
    skills: [
      { name: 'SQL Optimization', desc: 'Explain plans, custom index definitions, normalization patterns' },
      { name: 'MySQL & PostgreSQL', desc: 'Relational mapping schemas, transactional integrity checks' },
      { name: 'Redis Cache Store', desc: 'Distributed caching logic, key-value lookup, query caching layer' },
      { name: 'Hibernate & JPA', desc: 'JPA entity mapping, criteria queries, transaction handling' }
    ]
  },
  {
    id: 'architecture',
    label: 'Security & Architecture',
    icon: ShieldCheck,
    skills: [
      { name: 'Spring Security', desc: 'Secure interceptors, CORS configurations, security filter chains' },
      { name: 'JWT & OAuth2 Authentication', desc: 'Token generation, claims parsing, role authorization validation' },
      { name: 'Microservices Design', desc: 'Decoupled communication, API Gateway mapping, system design patterns' },
      { name: 'SOLID Principles & clean code', desc: 'Clean architecture implementation, design pattern templates' }
    ]
  },
  {
    id: 'devops',
    label: 'DevOps & Tooling',
    icon: Cloud,
    skills: [
      { name: 'Docker Containers', desc: 'Packaging images, multi-container stacks via Docker Compose' },
      { name: 'GitHub Actions & Jenkins', desc: 'Setting up testing stages and automatic build deployments' },
      { name: 'AWS Cloud Services', desc: 'Provisioning EC2 computing, RDS storage databases, and S3 assets' },
      { name: 'IntelliJ IDEA & Git', desc: 'Professional source controls, unit test setups, profiling debuggers' }
    ]
  }
];

const Skills = () => {
  const [activeTier, setActiveTier] = useState('core');

  const activeCategory = skillTiers.find(tier => tier.id === activeTier) || skillTiers[0];

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#030014] border-t border-white/5">
      <div className="section-container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase block mb-3">
            // METRIC-BASED SKILLS TIERS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Technical <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-[#86868b] text-sm md:text-base font-light leading-relaxed">
            Tiered engineering capabilities verified through production-grade projects and solved system architectures.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4 mb-8">
          {skillTiers.map((tier) => {
            const isActive = tier.id === activeTier;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all border ${
                  isActive 
                    ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30 shadow-md shadow-emerald-500/5' 
                    : 'bg-white/5 text-[#86868b] border-white/5 hover:border-[#10b981]/30 cursor-pointer'
                }`}
              >
                <tier.icon size={12} />
                <span>{tier.label}</span>
              </button>
            );
          })}
        </div>

        {/* Display Tiers */}
        <div className="bg-black/60 border border-white/10 rounded-2xl p-6 md:p-8 min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTier}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {activeCategory.skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-5 bg-white/5 border border-white/5 hover:border-[#10b981]/30 rounded-xl transition-all flex gap-4 items-start group"
                >
                  <div className="w-2 h-2 rounded-full bg-[#10b981] shrink-0 mt-1.5 animate-pulse" />
                  <div className="space-y-1">
                    <h4 className="font-mono text-sm font-bold text-white group-hover:text-[#10b981] transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-[#86868b] font-light leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
