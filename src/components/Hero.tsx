import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Typewriter from './common/Typewriter';
import profileImg from '../assets/profile.jpg';
import GeometricShapes from './common/GeometricShapes';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center bg-[var(--bg-main)] pt-12 overflow-hidden">
      {/* Clean Background */}
      
      <div className="section-container w-full py-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-[10px] font-bold tracking-[0.2em] uppercase border border-[var(--brand-accent)]/20 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-accent)]"></span>
              </span>
              Systems Architect & Engineer
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-8xl leading-[0.9] font-black tracking-tighter text-[var(--text-primary)]">
                Hi, I'm <span className="text-[var(--brand-accent)]">Rajeev</span> <br />
                <span className="text-gradient">Backend Systems Engineer</span>
              </h1>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-light"
            >
              Engineering high-performance backend systems and resilient full-stack applications. I specialize in building scalable architectures and performance-critical distributed systems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4"
            >
              <a href="#projects" className="group relative px-8 py-4 bg-[var(--brand-accent)] text-white rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Explore Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
              
              <div className="flex items-center gap-4">
                {[
                  { Icon: Github, href: "https://github.com/imrajeevnayan" },
                  { Icon: Linkedin, href: "https://linkedin.com/in/imrajeevnayan" },
                  { Icon: Mail, href: "mailto:imrajeevnayan@gmail.com" }
                ].map((link, i) => (
                  <motion.a 
                    key={i}
                    href={link.href}
                    target="_blank"
                    whileHover={{ scale: 1.1, y: -2, backgroundColor: 'var(--brand-accent)', color: 'white' }}
                    whileActive={{ scale: 0.9 }}
                    className="p-3.5 bg-[var(--palette-light-surface)] rounded-full text-[var(--text-secondary)] hover:shadow-md transition-all border border-transparent"
                  >
                    <link.Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
               variants={itemVariants}
               className="flex justify-center lg:justify-start gap-10 pt-10 border-t border-[var(--border-main)]"
            >
               {[
                 { label: 'Years Experience', value: '3+' },
                 { label: 'Systems Delivered', value: '20+' },
                 { label: 'Success Rate', value: '100%', accent: true }
               ].map((stat, i) => (
                 <div key={i} className="space-y-1">
                    <div className={`text-2xl font-black ${stat.accent ? 'text-[var(--brand-accent)]' : 'text-[var(--text-primary)]'}`}>{stat.value}</div>
                    <div className="text-[9px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">{stat.label}</div>
                 </div>
               ))}
            </motion.div>
          </motion.div>

          {/* PROFILE PHOTO SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
             <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 border-2 border-[var(--brand-accent)]/10 rounded-[40px] group-hover:border-[var(--brand-accent)]/30 transition-colors duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-tr from-[var(--brand-accent)]/20 to-transparent rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="w-full h-full rounded-[40px] overflow-hidden border border-[var(--border-main)] shadow-xl relative z-10 bg-[var(--surface-main)]">
                   <img 
                    src={profileImg} 
                    alt="Rajeev Nayan" 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Status Badge */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-2xl glass-premium shadow-xl z-20 flex items-center gap-3 border border-white/10"
                >
                   <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                   <span className="text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-widest whitespace-nowrap">Available for projects</span>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;