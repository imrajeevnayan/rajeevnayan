import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Code2, FileText, ArrowDown, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

import Magnetic from './common/Magnetic';
import Tilt3D from './common/Tilt3D';
import profileImage from '../assets/profile.jpg';
import { lazy, Suspense } from 'react';

const GeometricShapes = lazy(() => import('./common/GeometricShapes'));

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yTextLayer = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yImageLayer = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityLayer = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section 
       ref={containerRef}
       id="home" 
       className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-transparent"
    >
      <Suspense fallback={null}>
         <GeometricShapes />
      </Suspense>

      {/* MASSIVE AMBIENT GLOWS - 800px+ with higher opacity */}
      <motion.div 
        animate={{ 
          x: [-20, 20, -20],
          y: [-20, 20, -20],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[50rem] h-[50rem] bg-indigo-600/20 blur-[180px] rounded-full mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [20, -20, 20],
          y: [20, -20, 20],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -right-20 w-[60rem] h-[60rem] bg-fuchsia-600/15 blur-[200px] rounded-full mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [-50, 50, -50],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"
      />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* TEXT CONTENT */}
        <motion.div
          style={{ y: yTextLayer, opacity: opacityLayer }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left space-y-8"
        >
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center gap-3 px-6 py-3 glass-panel rounded-full bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400 font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-500/5 hover:bg-blue-500/20 transition-all cursor-default"
          >
             <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
             Available for Global Projects
          </motion.div>
          
          <div className="space-y-4">
             <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter dark:text-white leading-[0.9] drop-shadow-2xl">
               HELLO,<br />
               <span className="text-gradient drop-shadow-[0_0_30px_rgba(217,70,239,0.3)]">RAJEEV</span>
             </h1>
             <h2 className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-bold uppercase tracking-widest flex items-center justify-center lg:justify-start gap-4">
                <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full hidden lg:block"></span>
                Software Architect
             </h2>
          </div>

          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed pt-2">
            Engineering sub-second performance and modular data flows. Specialized in <span className="text-blue-500 font-bold">Java Spring Boot</span> and <span className="text-fuchsia-500 font-bold">React Architecture</span>.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
            <Magnetic>
              <Link
                to="projects"
                smooth={true}
                className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/40 hover:bg-blue-700 hover:shadow-blue-600/60 transition-all flex items-center gap-3 group cursor-pointer"
              >
                View Builds <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="contact"
                smooth={true}
                className="px-12 py-6 glass-panel rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all cursor-pointer"
              >
                Hire Me
              </Link>
            </Magnetic>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 pt-8">
            {[Github, Linkedin, Instagram, FileText].map((Icon, i) => (
              <Magnetic key={i}>
                <a 
                   href="#" 
                   className="p-5 glass-panel rounded-2xl text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-fuchsia-400 transition-all shadow-xl"
                >
                   <Icon size={24} />
                </a>
              </Magnetic>
            ))}
          </div>
        </motion.div>

        {/* IMAGE / VISUAL LAYER */}
        <motion.div
          style={{ y: yImageLayer, opacity: opacityLayer }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
           <Tilt3D intensity={20}>
             <div className="relative z-10 p-4 glass-panel rounded-[4rem] border-white/20 shadow-[0_0_100px_rgba(99,102,241,0.2)] dark:shadow-[0_0_150px_rgba(168,85,247,0.2)]">
                <div className="relative rounded-[3.5rem] overflow-hidden bg-slate-900 border border-white/5 aspect-square">
                   <img 
                     src={profileImage} 
                     alt="Rajeev Nayan" 
                     className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                   />
                   {/* Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
                </div>

                {/* Overlapping Floating Status Badges */}
                <motion.div 
                   animate={{ y: [0, -20, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute -top-10 -right-10 p-6 glass-panel rounded-3xl bg-white/20 dark:bg-black/40 shadow-2xl border-white/40"
                >
                   <div className="text-3xl font-black text-blue-500 leading-none mb-1">6+</div>
                   <div className="text-[9px] font-black uppercase tracking-widest text-gray-500">Exp Months</div>
                </motion.div>

                <motion.div 
                   animate={{ y: [0, 20, 0] }}
                   transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                   className="absolute -bottom-10 -left-10 p-6 glass-panel rounded-3xl bg-white/20 dark:bg-black/40 shadow-2xl border-white/40"
                >
                   <Code2 size={24} className="text-fuchsia-500 mb-2" />
                   <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 leading-none">High Perf Code</div>
                </motion.div>
             </div>
           </Tilt3D>

           {/* Decorative Rings around Profile */}
           <div className="absolute inset-0 -z-10 border border-blue-500/10 rounded-full scale-125 animate-pulse" />
           <div className="absolute inset-0 -z-10 border border-fuchsia-500/10 rounded-full scale-150 animate-pulse delay-1000" />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-slate-400 hover:text-blue-500 transition-colors"
      >
        <Link to="about" smooth={true}>
          <ArrowDown size={32} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;