import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';

const words = ["Java Backend Developer", "Spring Boot Specialist", "MCA Graduate", "AI/RAG Engineer"];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
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

    const timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed, loopNum]);

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
    <section id="hero" className="relative min-h-screen flex items-center bg-[var(--bg-main)] overflow-hidden pt-12">
      {/* Background Canvas */}
      <div className="absolute inset-0 bg-[var(--bg-main)] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 order-2 lg:order-1 text-left lg:text-left"
          >
            {/* Identity Badge */}
            <motion.div variants={itemVariants} className="mb-6 h-8">
              <span className="badge-premium inline-flex items-center">
                {displayText}
                <span className="ml-1 w-[1.5px] h-3 bg-[var(--brand-accent)] animate-pulse" />
              </span>
            </motion.div>

            {/* Headline with Mask Reveal */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.h1 
                variants={maskVariants}
                className="text-4xl sm:text-6xl lg:text-[64px] leading-[1.07] font-bold tracking-appleDisplay text-[var(--text-primary)]"
              >
                Architecting the <br />
                <span className="text-gradient">Backbone</span> of Scale
              </motion.h1>
            </motion.div>

            {/* Impactful Tagline */}
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-[17px] text-[var(--text-secondary)] leading-[1.47] tracking-appleBody font-light max-w-2xl mb-10"
            >
              MCA graduate and Java Backend Developer specializing in production-grade Spring Boot microservices, secure REST APIs, and AI-powered RAG systems.
            </motion.p>

            {/* CTA Group */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="btn-primary flex items-center gap-2 group">
                View Projects 
                <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center gap-2 group">
                Get in Touch
                <ChevronRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform opacity-50" />
              </a>
              
              <div className="flex items-center gap-4 ml-0 sm:ml-6 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[var(--border-main)] sm:pl-6">
                <a href="https://github.com/imrajeevnayan" target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--brand-accent)] transition-colors">
                  <Github size={18} strokeWidth={1.5} />
                </a>
                <a href="https://linkedin.com/in/imrajeevnayan" target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--brand-accent)] transition-colors font-medium text-xs flex items-center gap-1">
                  LinkedIn <ExternalLink size={12} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Display Picture (DP) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-square w-[70%] sm:w-3/4 lg:w-[90%] max-w-[280px] sm:max-w-[340px] mx-auto">
               {/* Border vitrine container */}
               <div className="relative h-full w-full rounded-lg overflow-hidden bg-white border border-[var(--border-main)] transition-all duration-300">
                  <img 
                    src={profileImg} 
                    alt="Rajeev Nayan" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Subtle Light Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-graphite)]/10 via-transparent to-transparent pointer-events-none" />
               </div>

               {/* Experience Badge */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 1.2 }}
                 className="absolute -bottom-4 -right-4 bg-white dark:bg-[var(--surface-card)] px-4 py-3 rounded-lg border border-[var(--border-main)] hidden sm:block"
               >
                  <div className="text-2xl font-bold text-[var(--color-deep-link-blue)]">700+</div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-[var(--text-secondary)]">DSA Problems <br />Solved</div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-medium text-[var(--text-secondary)]">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--brand-accent)] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;