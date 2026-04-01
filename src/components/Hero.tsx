import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Code2, Cpu } from 'lucide-react';
import { Link } from 'react-scroll';
import TerminalWindow from './common/Window';

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

  const codeString = `
import { Developer } from './portfolio';

const Rajeev = new Developer({
  name: 'Rajeev Nayan',
  role: 'Full Stack Engineer',
  stack: ['Java', 'React', 'Tailwind', 'Three.js'],
  mission: 'Building high-performance architectures',
  location: 'India'
});

Rajeev.initialize();
  `.trim();

  return (
    <section 
       ref={containerRef}
       id="hero" 
       className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-transparent"
    >
      <div className="section-container relative z-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-3 py-1 rounded bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              System Status: Online
            </motion.div>

            <div className="space-y-4">
              <h1 className="hero-text text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-[var(--text-main)]">
                <span className="block text-[var(--text-dim)]">I AM</span>
                <span className="text-shimmer block">RAJEEV</span>
              </h1>
              <p className="hero-text text-lg text-[var(--text-dim)] font-mono max-w-lg">
                &gt; Full Stack Engineer specializing in <span className="text-orange-500">high-performance architectures</span> and fluid interfaces. 
              </p>
            </div>

            <div className="hero-text space-y-4">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-widest">Initializing_System_Core.sh</span>
                <span className="text-sm font-mono text-orange-500">{progress}%</span>
              </div>
              <div className="h-1 w-full bg-[var(--glass-bg)] rounded-full overflow-hidden border border-[var(--glass-border)]">
                <motion.div 
                  className="h-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="hero-text flex flex-wrap gap-4 pt-4">
              <Link
                to="projects"
                smooth={true}
                className="px-6 py-3 bg-[var(--text-main)] text-[var(--bg-main)] rounded font-mono font-bold uppercase text-[10px] tracking-widest hover:bg-orange-500 transition-colors cursor-pointer"
              >
                Run projects.exe
              </Link>
              <Link
                to="contact"
                smooth={true}
                className="px-6 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-main)] rounded font-mono font-bold uppercase text-[10px] tracking-widest hover:border-orange-500 transition-all cursor-pointer"
              >
                Send Message
              </Link>
            </div>
          </div>

          <div className="relative">
            <TerminalWindow title="~/portfolio/rajeev.tsx" className="w-full aspect-[4/3] lg:aspect-square">
              <div className="font-mono text-xs sm:text-sm leading-relaxed text-[var(--text-dim)]">
                <div className="flex gap-2 mb-4 text-[var(--text-dim)] opacity-50 text-[10px]">
                  <span>Line 1</span>
                  <span>UTF-8</span>
                  <span>TypeScript React</span>
                </div>
                {codeString.split('\n').map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-[var(--text-dim)] opacity-20 w-4 select-none">{i + 1}</span>
                    <pre className="whitespace-pre-wrap">
                      {line.split(/(const|import|from|new|return|export)/).map((part, j) => {
                        if (['const', 'import', 'from', 'new', 'return', 'export'].includes(part)) {
                          return <span key={j} className="text-orange-500">{part}</span>;
                        }
                        if (part.includes("'") || part.includes('"')) {
                          return <span key={j} className="text-green-500">{part}</span>;
                        }
                        return part;
                      })}
                    </pre>
                  </div>
                ))}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-2 h-4 bg-orange-500 mt-2 ml-8"
                />
              </div>
            </TerminalWindow>

            {/* Decor Elements */}
            <div className="absolute -top-6 -right-6 floating-icon">
              <div className="p-3 bg-[var(--bg-main)] border border-[var(--glass-border)] rounded-lg shadow-xl">
                <Code2 className="text-orange-500" size={20} />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 floating-icon">
              <div className="p-3 bg-[var(--bg-main)] border border-[var(--glass-border)] rounded-lg shadow-xl">
                <Cpu className="text-blue-500" size={20} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;