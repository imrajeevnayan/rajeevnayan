import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Typewriter from './common/Typewriter';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[var(--bg-main)] pt-20 overflow-hidden">
      <div className="section-container w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="max-w-2xl space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 text-xs font-bold tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for high-impact roles
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl leading-[1.1] font-extrabold uppercase tracking-tighter">
                Hi, I'm Rajeev <br />
                <Typewriter 
                  words={['Software Engineer', 'Java Architect', 'Systems Designer', 'Full-Stack Dev']} 
                  className="text-indigo-600"
                />
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-[var(--text-dim)] leading-relaxed max-w-2xl font-medium">
                I engineer high-performance backend systems and modern full-stack applications. Dedicated to clean code, scalability, and robust software architectures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <a href="#projects" className="btn-primary flex items-center gap-2 whitespace-nowrap">
                Explore Projects <ArrowRight size={18} />
              </a>
              
              <div className="flex items-center gap-3 sm:gap-4">
                {[
                  { Icon: Github, href: "https://github.com/imrajeevnayan" },
                  { Icon: Linkedin, href: "https://linkedin.com/in/imrajeevnayan" },
                  { Icon: Mail, href: "mailto:imrajeevnayan@gmail.com" }
                ].map((link, i) => (
                  <a 
                    key={i}
                    href={link.href}
                    target="_blank"
                    className="p-3 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-xl text-[var(--text-dim)] hover:text-indigo-600 hover:border-indigo-500/50 transition-all shadow-sm"
                  >
                    <link.Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="flex justify-center lg:justify-start gap-8 sm:gap-12 pt-8 border-t border-[var(--border-main)]"
            >
               <div>
                  <div className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">3+</div>
                  <div className="text-[10px] font-medium text-[var(--text-dim)] uppercase tracking-widest">Years Dev</div>
               </div>
               <div>
                  <div className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">500+</div>
                  <div className="text-[10px] font-medium text-[var(--text-dim)] uppercase tracking-widest">Commits</div>
               </div>
               <div>
                  <div className="text-xl sm:text-2xl font-bold text-indigo-600">20+</div>
                  <div className="text-[10px] font-medium text-[var(--text-dim)] uppercase tracking-widest">Delivered</div>
               </div>
            </motion.div>
          </div>

          {/* PROFILE PHOTO SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
             <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 border-2 border-indigo-500/20 rounded-[2.5rem] animate-[spin_20s_linear_infinite]" />
                <div className="absolute -inset-4 border-2 border-indigo-500/10 rounded-[3rem] animate-[spin_30s_linear_infinite_reverse]" />
                
                <div className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-white dark:border-[var(--surface-main)] shadow-2xl relative z-10">
                   <img 
                    src={profileImg} 
                    alt="Rajeev Nayan" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   />
                </div>
                
                {/* Status Badge */}
                <div className="absolute -bottom-4 -right-4 p-3 sm:p-4 card-base bg-[var(--bg-main)] shadow-xl z-20 flex items-center gap-2 sm:gap-3">
                   <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-[8px] sm:text-[10px] font-bold text-[var(--text-main)] uppercase tracking-widest whitespace-nowrap">Online</span>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;