import { motion } from 'framer-motion';
import SkillCloud3D from './common/SkillCloud3D';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: 'java,js,python,c,cpp,html,css',
    },
    {
      title: 'Frontend',
      skills: 'react,redux,tailwind,bootstrap,vite',
    },
    {
      title: 'Backend & Database',
      skills: 'spring,hibernate,mysql,postgres,mongodb,firebase,nodejs,express',
    },
    {
      title: 'Tools',
      skills: 'aws,docker,git,github,githubactions,jenkins,postman,linux,vscode',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
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
             className="w-full lg:w-1/2 flex items-center justify-center pointer-events-auto"
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
          >
             <SkillCloud3D />
          </motion.div>

          {/* Categorized detailed breakdown */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center sm:text-left">
                  {category.title}
                </h3>
                 <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                  <div className="flex justify-center sm:justify-start w-full">
                    <img
                      src={`https://skillicons.dev/icons?i=${category.skills}&perline=4`}
                      alt={`${category.title} Skills`}
                      loading="lazy"
                      className="max-w-full h-auto cursor-pointer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-500 italic">
            constantly = (learning) =&gt; &#123; return newSkills &#125;;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
