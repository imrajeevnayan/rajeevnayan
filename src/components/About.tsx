
import { motion } from 'framer-motion';
import { GraduationCap, Languages, Brain } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              Motivated Full Stack Developer with professional internship experience in building scalable web applications. Proficient in Java, Spring Boot, and React.js, I have a proven track record of delivering production-ready features in Agile environments. I combine strong problem-solving abilities with a commitment to writing clean, maintainable code.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold">Education</h3>
                  <p>Master of Computer Applications (MCA)</p>
                  <p className="text-gray-600 dark:text-gray-400">Dr. A.P.J. Abdul Kalam Technical University (2022-2024)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Languages className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold">Languages</h3>
                  <p>Hindi (Native), English (Professional),</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold">Core Competencies</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Strong problem-solving and analytical skills</li>
                    <li>Ability to learn and adapt to new technologies</li>
                    <li>Clean code practices and development methodologies</li>
                    <li>Understanding of high-availability systems</li>
                    <li>Experience with modern cloud platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center space-y-8"
          >
            <div className="relative w-64 h-64 overflow-hidden rounded-3xl border-4 border-white/20 dark:border-white/10 shadow-2xl group mx-auto">
               <img 
                 src={profileImage} 
                 alt="Rajeev Nayan" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl transform rotate-6 scale-105 opacity-10 blur-md pointer-events-none"></div>
            <div className="relative glass-panel text-gray-800 dark:text-gray-100 p-6 md:p-8 rounded-2xl shadow-xl w-full">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="p-4 glass-panel rounded-2xl">
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">6 Months Internship</p>
                </div>
                <div className="p-4 glass-panel rounded-2xl">
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Bangalore, India</p>
                </div>
                <div className="p-4 glass-panel rounded-2xl">
                  <h4 className="font-semibold">Interests</h4>
                  <p className="text-gray-600 dark:text-gray-400">Web Development, Cloud Computing, AI/ML</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;