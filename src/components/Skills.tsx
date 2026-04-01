import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import TerminalWindow from './common/Window';

const SkillCloud3D = lazy(() => import('./common/SkillCloud3D'));

const skillCategories = [
  {
    title: 'Frontend_Core.exe',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    title: 'Backend_Service.sh',
    skills: [
      { name: 'Java Spring Boot', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'PostgreSQL', level: 80 },
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
            <div className="text-orange-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Skill_System_Info</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[var(--text-main)]">
              Technical <br /><span className="text-shimmer">Ecosystem</span>
            </h2>
            <p className="text-[var(--text-dim)] font-mono text-sm max-w-sm leading-relaxed">
              &gt; Comprehensive tech stack for building high-performance architectures and fluid interfaces. 
              Initializing skill visualization module...
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {skillCategories.map((category, index) => (
                <TerminalWindow key={index} title={category.title} delay={index * 0.1}>
                  <div className="space-y-6">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-end">
                           <span className="text-[10px] font-mono font-bold text-[var(--text-dim)] uppercase tracking-widest">{skill.name}</span>
                           <span className="text-[10px] font-mono text-orange-500">{skill.level}%</span>
                        </div>
                        <div className="h-1 w-full bg-[var(--glass-bg)] rounded-full overflow-hidden border border-[var(--glass-border)]">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, ease: "expo.out" }}
                              className="h-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)]"
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
