
import { motion } from 'framer-motion';

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
      skills: 'aws,docker,git,github,jenkins,postman,linux,vscode',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex justify-center w-full">
                  <img
                    src={`https://skillicons.dev/icons?i=${category.skills}&perline=5`}
                    alt={`${category.title} Skills`}
                    loading="lazy"
                    className="hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
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
