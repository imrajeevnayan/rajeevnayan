import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[var(--bg-main)]">
      <div className="section-container w-full">
        <div className="max-w-3xl space-y-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold tracking-wide">
              Software Engineer & Architect
            </span>
            
            <h1 className="text-5xl md:text-7xl leading-[1.1]">
              Building scalable <br />
              <span className="text-indigo-600">Digital Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-dim)] leading-relaxed max-w-2xl font-medium">
              I specialize in engineering high-performance backend systems and modern full-stack applications. Dedicated to clean code, scalability, and robust architectures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View My Work <ArrowRight size={18} />
            </a>
            
            <div className="flex items-center gap-4">
              {[
                { Icon: Github, href: "https://github.com/imrajeevnayan" },
                { Icon: Linkedin, href: "https://linkedin.com/in/imrajeevnayan" },
                { Icon: Mail, href: "mailto:imrajeevnayan@gmail.com" }
              ].map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  target="_blank"
                  className="p-2.5 text-[var(--text-dim)] hover:text-indigo-500 transition-colors"
                >
                  <link.Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Proof / Stats in a simple way */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="flex gap-12 pt-12 border-t border-[var(--border-main)]"
          >
             <div>
                <div className="text-2xl font-bold text-[var(--text-main)]">3+</div>
                <div className="text-xs font-medium text-[var(--text-dim)]">Years Experience</div>
             </div>
             <div>
                <div className="text-2xl font-bold text-[var(--text-main)]">50+</div>
                <div className="text-xs font-medium text-[var(--text-dim)]">Open Source Contributions</div>
             </div>
             <div>
                <div className="text-2xl font-bold text-indigo-600">20+</div>
                <div className="text-xs font-medium text-[var(--text-dim)]">Successful Projects</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;