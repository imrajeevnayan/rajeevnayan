import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Code2, FileText, ArrowDown, Instagram } from 'lucide-react';
import { Link } from 'react-scroll';

import Magnetic from './common/Magnetic';
import Tilt3D from './common/Tilt3D';
import GlitchText from './common/GlitchText';
import GeometricShapes from './common/GeometricShapes';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Scroll Parallax logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Layered 3D elements moving at different parallax speeds
  const yTextLayer = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImageLayer = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityLayer = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
       ref={containerRef}
       id="home" 
       className="min-h-screen flex items-center justify-center py-12 md:py-20 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* 3D Moving Shapes / Background Canvas */}
      <GeometricShapes />

      {/* Background mesh/grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center relative z-10 w-full">
        
        {/* TEXT LAYER WITH PARALLAX */}
        <motion.div
          style={{ y: yTextLayer, opacity: opacityLayer }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left pt-8 md:pt-0"
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400 shadow-lg">
            Available for opportunities
          </div>
          
          {/* 3D FLOATING HERO TEXT WITH MOUSE PERSPECTIVE */}
          <Tilt3D intensity={15} className="mb-6 cursor-default">
            <div className="transform-style-3d py-4 px-2 -mx-2 bg-transparent" style={{ transformStyle: "preserve-3d" }}>
                <h1 
                   className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight dark:text-white leading-tight drop-shadow-2xl translate-z-10"
                   style={{ transform: "translateZ(80px)" }}
                >
                  Hi, I'm{' '}
                  <br className="hidden md:block" />
                  <GlitchText
                    text="Rajeev Nayan"
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block pb-1 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                  />
                </h1>
                
                <h2 
                   className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-4 font-light drop-shadow-lg translate-z-10"
                   style={{ transform: "translateZ(40px)" }}
                >
                  Full Stack Developer & <span className="font-medium text-gray-800 dark:text-white shadow-sm">Problem Solver</span>
                </h2>
            </div>
          </Tilt3D>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
            Crafting scalable web applications with <span className="text-blue-600 dark:text-blue-400 font-bold">Java Spring Boot</span> and <span className="text-blue-600 dark:text-blue-400 font-bold">React.js</span>.
            Turning complex problems into elegant, user-centric solutions.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10 relative z-20 pointer-events-auto">
            <Magnetic>
              <div className="inline-block">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-blue-500/40 flex items-center gap-2 cursor-pointer border border-transparent"
                >
                  View My Work
                </Link>
              </div>
            </Magnetic>
            <Magnetic>
              <div className="inline-block">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md cursor-pointer shadow-lg"
                >
                  Contact Me
                </Link>
              </div>
            </Magnetic>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 relative z-20">
            {[
              { Icon: Github, href: "https://github.com/imrajeevnayan", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/imrajeevnayan/", label: "LinkedIn" },
              { Icon: Instagram, href: "https://www.instagram.com/imrajeevnayan/", label: "Instagram" },
              { Icon: Code2, href: "https://leetcode.com/u/imrajeevnayan/", label: "LeetCode" },
              { Icon: FileText, href: "https://drive.google.com/file/d/14HzK62uI_0YeoVuKIaG28dhbSvVW-7nA/view?usp=sharing", label: "Resume" }
            ].map(({ Icon, href, label }, index) => (
              <Magnetic key={index}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={26} />
                </a>
              </Magnetic>
            ))}
          </div>
        </motion.div>

        {/* IMAGE LAYER WITH PARALLAX */}
        <motion.div
          style={{ y: yImageLayer, opacity: opacityLayer }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:w-1/2 mb-12 md:mb-0 relative"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-[100px] opacity-30 dark:opacity-40"
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
              <Tilt3D className="w-full h-full">
                <>
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 animate-spin-slow" style={{ animationDuration: '25s', transform: 'translateZ(10px)' }}></div>
                  <motion.img
                    src={profileImage}
                    alt="Rajeev Nayan"
                    className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{ transform: "translateZ(40px)" }}
                  />

                  {/* Floating badges */}
                  <motion.div
                    className="absolute -right-4 top-10 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center gap-2"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                    style={{ transform: "translateZ(80px)" }}
                  >
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                      <Code2 size={24} />
                    </div>
                    <div className="text-sm font-extrabold dark:text-white">Full Stack</div>
                  </motion.div>

                  <motion.div
                    className="absolute -left-4 bottom-20 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center gap-2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                    style={{ transform: "translateZ(60px)" }}
                  >
                    <div className="text-3xl drop-shadow-md">🚀</div>
                    <div className="text-sm font-extrabold dark:text-white">Problem Solver</div>
                  </motion.div>
                </>
              </Tilt3D>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors z-20 pointer-events-auto"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <ArrowDown size={36} className="drop-shadow-lg" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;