import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Typewriter from './common/Typewriter';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-[var(--bg-main)] pt-12 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--brand-accent)]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="section-container w-full py-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="max-w-2xl space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-xs font-bold tracking-wide border border-[var(--brand-accent)]/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-accent)]"></span>
                </span>
                Available for high-impact roles
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl leading-[1.1] font-bold tracking-[-0.44px] text-[var(--text-primary)]">
                Hi, I'm <span className="text-gradient text-glow">Rajeev</span> <br />
                <Typewriter 
                  words={['Software Engineer', 'Java Architect', 'Systems Designer', 'Full-Stack Dev']} 
                  className="text-gradient"
                />
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-medium">
                I engineer high-performance backend systems and modern full-stack applications. Dedicated to clean code, scalability, and robust software architectures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <a href="#projects" className="btn-airbnb-primary flex items-center gap-2 whitespace-nowrap group relative overflow-hidden shadow-[0_0_20px_rgba(255,56,92,0.3)] hover:shadow-[0_0_30px_rgba(255,56,92,0.5)]">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
              
              <div className="flex items-center gap-3 sm:gap-4">
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
                    className="p-3 bg-[var(--palette-light-surface)] rounded-full text-[var(--text-secondary)] hover:shadow-md transition-all border border-transparent"
                  >
                    <link.Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
               initial="hidden"
               animate="visible"
               variants={{
                 hidden: { opacity: 0 },
                 visible: {
                   opacity: 1,
                   transition: {
                     staggerChildren: 0.2,
                     delayChildren: 0.6
                   }
                 }
               }}
               className="flex justify-center lg:justify-start gap-8 sm:gap-12 pt-8 border-t border-[var(--border-main)]"
            >
               {[
                 { label: 'Years Dev', value: '3+' },
                 { label: 'Commits', value: '500+' },
                 { label: 'Delivered', value: '20+', accent: true }
               ].map((stat, i) => (
                 <motion.div 
                   key={i}
                   variants={{
                     hidden: { opacity: 0, y: 20 },
                     visible: { opacity: 1, y: 0 }
                   }}
                 >
                    <div className={`text-xl sm:text-2xl font-bold ${stat.accent ? 'text-[var(--brand-accent)]' : 'text-[var(--text-primary)]'}`}>{stat.value}</div>
                    <div className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-widest">{stat.label}</div>
                 </motion.div>
               ))}
            </motion.div>
          </div>

          {/* PROFILE PHOTO SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
             <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 group">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 border-2 border-[var(--brand-accent)]/10 rounded-[32px] group-hover:border-[var(--brand-accent)]/30 transition-colors duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-tr from-[var(--brand-accent)]/20 to-transparent rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="w-full h-full rounded-[32px] overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl relative z-10">
                   <img 
                    src={profileImg} 
                    alt="Rajeev Nayan" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                   />
                </div>
                
                {/* Status Badge */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 -right-4 p-3 sm:p-4 rounded-[14px] glass-airbnb shadow-xl z-20 flex items-center gap-2 sm:gap-3 border border-[var(--border-main)]"
                >
                   <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-[8px] sm:text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-widest whitespace-nowrap">Online</span>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


export default Hero;