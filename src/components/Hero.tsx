import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Code2, Cpu, Terminal as TerminalIcon } from 'lucide-react';
import { Link } from 'react-scroll';
import Typewriter from './common/Typewriter';
import StarsBackground from './canvas/StarsBackground';

const Hero = () => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.2
      });
      
      gsap.from('.floating-icon', {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);


  // Animation logic remains...
  return (
    <section 
       ref={containerRef}
       id="hero" 
       className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#020617]"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="radial-glow -top-[10%] -left-[10%] opacity-50" />
      <div className="radial-glow -bottom-[10%] -right-[10%] opacity-30" />
      
      <StarsBackground />
      
      <div className="section-container relative z-10 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Introduction */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-mono text-violet-400 uppercase tracking-[0.2em]"
            >
              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(124,58,237,0.6)]"></span>
              Portfolio_Session: Active
            </motion.div>

            <div className="space-y-2">
              <h1 className="hero-text text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-[var(--text-main)] font-outfit uppercase">
                <span className="block text-zinc-700">ARCHITECTING</span>
                <span className="text-shimmer block text-violet-500 italic">DIGITAL</span>
                <span className="block">UNIVERSE.</span>
              </h1>
              <p className="hero-text text-xl text-zinc-500 font-mono max-w-lg mt-6">
                &gt; <Typewriter text="Engineering high-performance backend systems and immersive digital experiences." delay={1000} speed={30} />
              </p>
            </div>

            <div className="hero-text flex flex-wrap gap-4 pt-4">
              <Link
                to="projects"
                smooth={true}
                className="px-8 py-4 bg-violet-600 text-white rounded-full font-mono font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-violet-600 transition-all cursor-pointer shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                Run projects.exe
              </Link>
              <Link
                to="contact"
                smooth={true}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-mono font-bold uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all cursor-pointer"
              >
                Send Message
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Code Editor */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block lg:ml-auto w-full max-w-xl perspective-1000"
          >
            <div className="relative group">
              {/* Ultra-Premium Ambient Glow */}
              <div className="absolute -inset-20 bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />
              
              <div className="relative glass-window rounded-[2.5rem] border-white/5 shadow-2xl overflow-hidden group-hover:border-violet-500/20 transition-colors duration-700">
                {/* Editor Header: Sleek & Technical */}
                <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/[0.03]">
                   <div className="flex gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.2)]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.2)]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.2)]" />
                   </div>
                   <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">System.initialize()</span>
                      <div className="h-4 w-px bg-white/10" />
                      <span className="text-sm font-mono text-violet-400 font-bold">{progress}%</span>
                   </div>
                </div>

                {/* Editor Content: Syntactically Beautiful */}
                <div className="p-10 font-mono text-[14px] leading-relaxed relative">
                   <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                      <TerminalIcon size={120} />
                   </div>
                   
                   <div className="flex gap-8">
                    <div className="flex flex-col text-zinc-700 select-none text-right w-6 space-y-1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className={i + 1 === 5 ? 'text-violet-500/50' : ''}>{i + 1}</span>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <div className="text-zinc-500">
                        <span className="text-violet-500 italic">public class</span> <span className="text-white font-bold">RajeevNayan</span> {'{'}
                      </div>
                      <div className="pl-8 border-l border-white/5 ml-1">
                        <span className="text-zinc-600 block italic">// Core Identity Protocol</span>
                        <div className="mt-2">
                          <span className="text-[#0ea5e9]">String</span> mission = <span className="text-emerald-400">"Architect_Scale"</span>;
                        </div>
                        <div className="mt-2">
                          <span className="text-violet-400">@Startup</span>
                          <br />
                          <span className="text-violet-500 italic">public void</span> <span className="text-amber-400">initialize</span>() {'{'}
                        </div>
                        <div className="pl-6 border-l border-violet-500/30 mt-2 space-y-1">
                           <div className="text-zinc-500">while(True) {'{'}</div>
                           <div className="pl-6 text-zinc-400">
                             optimize(); <br />
                             scale(); <br />
                             innovate();
                           </div>
                           <div className="text-zinc-500">{'}'}</div>
                        </div>
                        <div className="mt-2">{'}'}</div>
                      </div>
                      <div className="text-white">{'}'}</div>
                    </div>
                   </div>
                </div>
            </div>
            <div className="absolute -top-6 -right-6 floating-icon">
              <div className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl">
                <Code2 className="text-violet-500" size={20} />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 floating-icon">
              <div className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl">
                <Cpu className="text-blue-500" size={20} />
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;