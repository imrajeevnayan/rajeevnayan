import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Code2, FileText, ArrowDown, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

import Magnetic from './common/Magnetic';
import Tilt3D from './common/Tilt3D';
import GlitchText from './common/GlitchText';
import profileImage from '../assets/profile.jpg';
import { lazy, Suspense } from 'react';

const GeometricShapes = lazy(() => import('./common/GeometricShapes'));

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
       className="min-h-screen flex items-center justify-center py-12 md:py-20 relative overflow-hidden bg-transparent"
    >
      {/* 3D Moving Shapes / Background Canvas (Lazy Loaded for Perf) */}
      <Suspense fallback={null}>
         <GeometricShapes />
      </Suspense>

      {/* Ultra-Premium Ambient Deep Space Glows (Maximized Intensity) */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-b from-indigo-500/80 to-purple-500/80 blur-[150px] rounded-full pointer-events-none mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -45, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-1/4 w-[45rem] h-[45rem] bg-gradient-to-tr from-fuchsia-500/70 to-blue-500/70 blur-[160px] rounded-[100%] pointer-events-none mix-blend-screen"
      />

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center relative z-10 w-full">
        
        {/* TEXT LAYER WITH PARALLAX */}
        <motion.div
          style={{ y: yTextLayer, opacity: opacityLayer }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-[55%] text-center md:text-left pt-8 md:pt-0 relative"
        >
          {/* Intense focused spotlight immediately behind the glass card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-blue-400/50 blur-[120px] rounded-full pointer-events-none hidden md:block" />
          
          <motion.div 
            className="glass-panel p-8 sm:p-12 md:p-14 rounded-[40px] relative z-10 border-t-2 border-l-2 border-white/60 dark:border-white/40 shadow-[0_0_80px_rgba(59,130,246,0.3)] dark:shadow-[0_0_120px_rgba(168,85,247,0.3)] flex flex-col justify-center"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <div className="inline-block self-center md:self-start px-6 py-2.5 mb-8 text-sm font-bold text-blue-800 bg-blue-100/90 rounded-full dark:bg-blue-900/60 dark:text-blue-200 shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-blue-300/80 dark:border-blue-400/60 backdrop-blur-xl uppercase tracking-wider">
              Available for opportunities <span className="ml-2 animate-pulse inline-block text-lg">🚀</span>
            </div>
          
          {/* 3D FLOATING HERO TEXT WITH MOUSE PERSPECTIVE */}
          <Tilt3D intensity={15} className="mb-6 cursor-default">
            <div className="transform-style-3d py-4 px-2 -mx-2 bg-transparent" style={{ transformStyle: "preserve-3d" }}>
                <h1 
                   className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter dark:text-white leading-tight drop-shadow-2xl translate-z-10"
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
                  className="px-8 py-4 bg-white dark:bg-white text-black dark:text-black rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/10 flex items-center gap-2 cursor-pointer border border-transparent"
                >
                  View My Work <ArrowRight className="w-5 h-5 ml-1 inline-block" />
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
                  className="px-8 py-4 glass-panel text-gray-800 dark:text-gray-200 rounded-full font-medium transition-all duration-300 backdrop-blur-md cursor-pointer border border-gray-300/50 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
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
                    className="absolute -right-4 top-10 glass-panel p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center gap-2"
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
                    className="absolute -left-4 bottom-20 glass-panel p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center gap-2"
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