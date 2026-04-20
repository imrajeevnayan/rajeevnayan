import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import TerminalWindow from './common/Window';

const SkillCloud3D = lazy(() => import('./common/SkillCloud3D'));

const skillCategories = [
  {
    title: 'Core_JVM.java',
    skills: [
      { name: 'JVM Internals & GC Tuning', level: 88 },
      { name: 'Spring Boot (Microservices)', level: 92 },
      { name: 'Java Concurrency & Threading', level: 85 },
      { name: 'Hibernate & Query Optimization', level: 85 },
      { name: 'Stream API & Lambda Logic', level: 90 },
    ],
  },
  {
    title: 'Backend_Infra.sh',
    skills: [
      { name: 'Apache Kafka streaming', level: 85 },
      { name: 'PostgreSQL & Redis Cache', level: 85 },
      { name: 'Elasticsearch / ELK Stack', level: 75 },
      { name: 'Docker / Kubernetes (K8s)', level: 80 },
      { name: 'Service Discovery / gRPC', level: 80 },
    ],
  },
];





const Skills = () => {
  return (
    <section id="skills" className="section-container border-t border-[var(--glass-border)]">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        
        <div className="lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-[#a78bfa] text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Knowledge_Base.sh</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9] text-[var(--text-main)] font-outfit">
              Technical <br /><span className="text-[#7c3aed]">Ecosystem.</span>
            </h2>
            <p className="text-[#94a3b8] font-medium text-sm max-w-sm leading-relaxed mt-6">
              &gt; Comprehensive tech stack for building high-performance architectures and fluid interfaces. 
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {skillCategories.map((category, index) => (
                <TerminalWindow key={index} title={category.title} delay={index * 0.1}>
                  <div className="space-y-6">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex justify-between items-end">
                           <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">{skill.name}</span>
                           <span className="text-[10px] font-mono text-[#7c3aed]">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                           <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${skill.level}%` }}
                               transition={{ duration: 1.5, ease: "expo.out" }}
                               className="h-full bg-[#7c3aed] shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                           />
                        </div>
                      </div>
                    ))}
                  </div>
                </TerminalWindow>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center">
           <Suspense fallback={<div className="w-64 h-64 border border-dashed border-zinc-800 rounded-full animate-spin flex items-center justify-center">
             <span className="text-[10px] font-mono text-zinc-600">LOADING_3D_CORE</span>
           </div>}>
              <SkillCloud3D />
           </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Skills;
