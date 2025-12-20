
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, FileText, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

import Magnetic from './common/Magnetic';
import Tilt3D from './common/Tilt3D';
import GlitchText from './common/GlitchText';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-12 md:py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated floating shapes - enhanced */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-purple-400/30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, -30, 0], x: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        style={{ translate: '-50% -50%' }}
      />

      {/* Background mesh/grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left pt-8 md:pt-0"
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
            Available for opportunities
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight dark:text-white leading-tight">
            Hi, I'm{' '}
            <br className="hidden md:block" />
            <GlitchText
              text="Rajeev Nayan"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block pb-1"
            />
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
            Full Stack Developer & <span className="font-medium text-gray-800 dark:text-white">Problem Solver</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Crafting scalable web applications with <span className="text-blue-600 dark:text-blue-400 font-medium">Java Spring Boot</span> and <span className="text-blue-600 dark:text-blue-400 font-medium">React.js</span>.
            Turning complex problems into elegant, user-centric solutions.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            <Magnetic>
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
              >
                View My Work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </Magnetic>
          </div>

          <div className="flex justify-center md:justify-start space-x-6">
            {[
              { Icon: Github, href: "https://github.com/imrajeevnayan", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/imrajeevnayan/", label: "LinkedIn" },
              { Icon: Code2, href: "https://leetcode.com/u/imrajeevnayan/", label: "LeetCode" },
              { Icon: FileText, href: "https://drive.google.com/file/d/14HzK62uI_0YeoVuKIaG28dhbSvVW-7nA/view?usp=sharing", label: "Resume" }
            ].map(({ Icon, href, label }, index) => (
              <Magnetic key={index}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              </Magnetic>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:w-1/2 mb-12 md:mb-0 relative"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-[100px] opacity-20"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 5 }}
            />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
              <Tilt3D className="w-full h-full">
                <>
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
                  <motion.img
                    src={profileImage}
                    alt="Rajeev Nayan"
                    className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{ transform: "translateZ(30px)" }}
                  />

                  {/* Floating badges */}
                  <motion.div
                    className="absolute -right-4 top-10 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center gap-2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                    style={{ transform: "translateZ(60px)" }}
                  >
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                      <Code2 size={20} />
                    </div>
                    <div className="text-sm font-bold dark:text-white">Full Stack</div>
                  </motion.div>

                  <motion.div
                    className="absolute -left-4 bottom-20 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center gap-2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 6, delay: 2 }}
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <div className="text-2xl">🚀</div>
                    <div className="text-sm font-bold dark:text-white">Problem Solver</div>
                  </motion.div>
                </>
              </Tilt3D>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link to="about" smooth={true} offset={-80}>
          <ArrowDown size={32} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;