import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Github, ExternalLink } from 'lucide-react';

const Hero = () => {
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
    hidden: { opacity: 0, y: 20 },
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
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[var(--bg-main)] overflow-hidden">
      {/* Background Subtle Elements (No 3D) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--brand-accent)]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Identity Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="badge-premium">Systems Architect & Engineer</span>
          </motion.div>

          {/* Headline with Mask Reveal */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              variants={maskVariants}
              className="text-5xl sm:text-7xl md:text-8xl leading-[1.1] font-black text-[var(--text-primary)]"
            >
              Architecting the <br />
              <span className="text-gradient">Backbone</span> of Scale
            </motion.h1>
          </motion.div>

          {/* Impactful Tagline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-medium mb-12"
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
            
            <div className="flex items-center gap-4 ml-4 sm:ml-8 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[var(--border-main)] sm:pl-8">
              <a href="https://github.com/imrajeevnayan" target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--brand-accent)] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/imrajeevnayan" target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--brand-accent)] transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[var(--text-secondary)]">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--brand-accent)] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;