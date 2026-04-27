import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Systems Architect", "Backend Specialist", "Java Engineer", "Cloud Architect"];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  const handleType = () => {
    const i = loopNum % words.length;
    const fullText = words[i];

    setDisplayText(isDeleting 
      ? fullText.substring(0, displayText.length - 1) 
      : fullText.substring(0, displayText.length + 1)
    );

    setTypingSpeed(isDeleting ? 80 : 150);

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const maskVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[var(--bg-main)] overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--brand-accent)]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10 w-full py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 order-2 lg:order-1"
          >
            {/* Identity Badge with Typewriter */}
            <motion.div variants={itemVariants} className="mb-6 h-8">
              <span className="badge-premium inline-flex items-center min-w-[200px]">
                {displayText}
                <span className="ml-1 w-[2px] h-4 bg-[var(--brand-accent)] animate-pulse" />
              </span>
            </motion.div>

            {/* Headline with Mask Reveal */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.h1 
                variants={maskVariants}
                className="text-5xl sm:text-7xl md:text-8xl leading-[1] font-black text-[var(--text-primary)]"
              >
                Architecting the <br />
                <span className="text-gradient">Backbone</span> of Scale
              </motion.h1>
            </motion.div>

            {/* Impactful Tagline */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-medium mb-10"
            >
              I engineer the invisible infrastructure that powers modern digital experiences. 
              Specialized in high-throughput Java backends and performance-critical distributed systems.
            </motion.p>

            {/* CTA Group */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="btn-primary flex items-center gap-2 group">
                View Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center gap-2 group">
                Get in Touch
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform opacity-50" />
              </a>
              
              <div className="flex items-center gap-4 ml-0 sm:ml-8 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[var(--border-main)] sm:pl-8">
                <a href="https://github.com/imrajeevnayan" target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--brand-accent)] transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/imrajeevnayan" target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--brand-accent)] transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Display Picture (DP) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-square w-full max-w-[400px] lg:max-w-none mx-auto">
               {/* Premium Frame */}
               <div className="absolute inset-0 border-2 border-[var(--brand-accent)]/20 rounded-[2.5rem] -rotate-3 transition-transform hover:rotate-0 duration-500" />
               <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)] to-indigo-600 rounded-[2.5rem] rotate-3 opacity-10 transition-transform hover:rotate-0 duration-500" />
               
               {/* Image Container */}
               <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden grayscale-[0.1] hover:grayscale-0 transition-all duration-700 shadow-2xl">
                  <img 
                    src={profileImg} 
                    alt="Rajeev Nayan" 
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                  />
                  
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)]/30 via-transparent to-transparent pointer-events-none" />
               </div>

               {/* Experience Badge */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 1.5, type: "spring" }}
                 className="absolute -bottom-4 -right-4 glass-effect p-5 rounded-2xl shadow-xl hidden sm:block border border-[var(--brand-accent)]/20"
               >
                  <div className="text-3xl font-black text-[var(--brand-accent)]">5+</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-[var(--text-secondary)]">Years of <br />Engineering</div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[var(--text-secondary)]">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--brand-accent)] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;