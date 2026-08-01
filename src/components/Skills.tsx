import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Layers, Database, Cloud } from 'lucide-react';

const skillTabs = [
  {
    id: 'backend',
    label: 'Backend Development',
    icon: Cpu,
    skills: [
      { name: 'Java 17/21', level: '90%' },
      { name: 'Spring Boot', level: '85%' },
      { name: 'Spring MVC', level: '80%' },
      { name: 'REST APIs', level: '88%' },
      { name: 'Hibernate', level: '82%' },
      { name: 'JPA (Java Persistence API)', level: '84%' }
    ],
    desc: 'Engineering robust server-side business workflows, request validation, and data mapping schemas.'
  },
  {
    id: 'security',
    label: 'Security & Auth',
    icon: ShieldCheck,
    skills: [
      { name: 'Spring Security', level: '85%' },
      { name: 'JWT Authentication', level: '88%' },
      { name: 'OAuth2 Authorization', level: '80%' },
      { name: 'RBAC (Role-Based Access Control)', level: '86%' },
      { name: 'CORS & CSRF Protections', level: '82%' }
    ],
    desc: 'Enforcing state-of-the-art authentication protocols, request interception, token validation, and endpoint authorization.'
  },
  {
    id: 'architecture',
    label: 'Architecture',
    icon: Layers,
    skills: [
      { name: 'Microservices', level: '84%' },
      { name: 'System Design', level: '80%' },
      { name: 'Design Patterns', level: '82%' },
      { name: 'Clean Architecture', level: '85%' },
      { name: 'SOLID Principles', level: '88%' }
    ],
    desc: 'Designing modular components, decoupled communication patterns, and highly maintainable object structures.'
  },
  {
    id: 'database',
    label: 'Database Engineering',
    icon: Database,
    skills: [
      { name: 'SQL Optimization', level: '85%' },
      { name: 'PostgreSQL', level: '82%' },
      { name: 'MySQL', level: '88%' },
      { name: 'MongoDB', level: '80%' },
      { name: 'Redis (Caching)', level: '84%' },
      { name: 'Database Modeling & ERD', level: '85%' }
    ],
    desc: 'Modeling performant relational schemas, custom indexing, connection pools, and distributed key-value cache lookups.'
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    icon: Cloud,
    skills: [
      { name: 'Docker (Containers)', level: '82%' },
      { name: 'CI/CD Pipelines', level: '80%' },
      { name: 'GitHub Actions', level: '84%' },
      { name: 'AWS (EC2/S3/RDS)', level: '78%' },
      { name: 'Linux System Ops', level: '80%' }
    ],
    desc: 'Packaging applications, setting up continuous build integrations, and provisioning hosting nodes in the cloud.'
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('backend');

  const activeCategory = skillTabs.find(tab => tab.id === activeTab) || skillTabs[0];

  return (
    <section id="skills" className="py-16 md:py-24 bg-[var(--bg-main)]">
      <div className="section-container">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="badge-premium mb-4">Tech Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base font-light leading-relaxed">
            Explore my developer capabilities mapped out across critical segments of modern enterprise software engineering.
          </p>
        </div>

        {/* Responsive Tab headers list */}
        <div className="flex flex-wrap gap-2 border-b border-[var(--border-main)] pb-4 mb-8">
          {skillTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all border ${
                  isActive 
                    ? 'bg-[var(--color-button-blue)] text-white border-[var(--color-button-blue)] shadow-md shadow-blue-500/10' 
                    : 'bg-[var(--surface-card)] text-[var(--text-secondary)] border-[var(--border-main)] hover:border-[var(--brand-accent)]'
                }`}
              >
                <tab.icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab display content */}
        <div className="bg-[var(--surface-card)] border border-[var(--border-main)] rounded-3xl p-6 md:p-10 min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 flex-1"
            >
              <div>
                <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-2 flex items-center gap-2.5">
                  <activeCategory.icon size={20} className="text-[var(--brand-accent)]" /> {activeCategory.label}
                </h3>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] font-light max-w-2xl leading-relaxed">
                  {activeCategory.desc}
                </p>
              </div>

              {/* Progress bars rendering */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeCategory.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-[var(--text-primary)]">{skill.name}</span>
                      <span className="text-[var(--text-secondary)] font-light">{skill.level}</span>
                    </div>
                    <div className="w-full h-1.5 bg-[var(--surface-main)] rounded-full overflow-hidden border border-[var(--border-main)]">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: skill.level }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[var(--color-button-blue)] to-indigo-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
