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

const ProgressBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</span>
      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-transparent transition-colors duration-300 overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Technical Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolset developed through professional experience and personal projects.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* 3D Global Tag Cloud */}
          <motion.div 
             className="w-full lg:w-1/2 flex items-center justify-center pointer-events-auto min-h-[400px]"
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
             <Suspense fallback={<div className="animate-pulse w-32 h-32 rounded-full bg-blue-100 dark:bg-gray-800"></div>}>
                 <SkillCloud3D />
             </Suspense>
          </motion.div>

          {/* Animated Progress Bars */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 relative z-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Gradient glow border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                <div className="glass-panel rounded-2xl p-6 relative h-full w-full transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(0,100,255,0.15)] bg-white/70 dark:bg-black/40">
                  <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                  <div className="flex flex-col">
                    {category.skills.map((skill, i) => (
                      <ProgressBar key={i} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
