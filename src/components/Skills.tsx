import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const SkillCloud3D = lazy(() => import('./common/SkillCloud3D'));

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'JavaScript / TS', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java Spring Boot', level: 85 },
      { name: 'Node.js / Express', level: 75 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'PostgreSQL / MySQL', level: 80 },
      { name: 'Git / GitHub CI', level: 85 },
      { name: 'Docker / AWS', level: 70 },
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="section-container border-t border-slate-200 dark:border-white/5">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* STICKY HEADER */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.3em]">Mastery</div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Technical <br /><span className="text-shimmer">Ecosystem</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm">
              A curated selection of technologies I use to build performant, scalable, and delightful digital experiences.
            </p>
            
            <div className="pt-10 hidden lg:block">
               <Suspense fallback={null}>
                  <SkillCloud3D />
               </Suspense>
            </div>
          </motion.div>
        </div>

        {/* SKILLS GRID */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 glass-panel rounded-[3rem] border-transparent hover:border-blue-500/10"
            >
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                       <span className="text-lg font-bold text-slate-800 dark:text-slate-200">{skill.name}</span>
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Expertise</span>
                    </div>
                    <div className="h-1 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "expo.out" }}
                          className="h-full bg-blue-600 rounded-full"
                       />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
