import { useEffect, useRef, lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

import Magnetic from './common/Magnetic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GeometricShapes = lazy(() => import('./common/GeometricShapes'));

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.5 } });

      tl.from('.hero-badge', { y: 20, opacity: 0, delay: 0.5 })
        .from('.char', {
          y: 60,
          opacity: 0,
          stagger: 0.02,
          ease: 'power4.out',
        }, '-=1')
        .from('.hero-sub', { y: 20, opacity: 0 }, '-=1')
        .from('.hero-cta', { scale: 0.95, opacity: 0, stagger: 0.1 }, '-=0.8')
        .from('.hero-visual', { x: 40, opacity: 0 }, '-=1.5');

      gsap.to('.hero-visual', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          scrub: true,
        },
        y: 100,
        rotate: 5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const name = "RAJEEV";

  return (
    <section 
       ref={containerRef}
       id="home" 
       className="min-h-screen flex items-center relative overflow-hidden bg-transparent"
    >
      <Suspense fallback={null}>
         <GeometricShapes />
      </Suspense>

      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* TEXT CONTENT */}
        <div className="lg:col-span-7 space-y-10">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
             <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
             Open for Innovation
          </div>
          
          <div className="space-y-4">
             <h1 ref={titleRef} className="text-7xl sm:text-8xl lg:text-[10rem] font-black tracking-tighter dark:text-white leading-[0.85]">
                <span className="block overflow-hidden h-[1.1em]">
                   {Array.from("HELLO,").map((char, i) => (
                     <span key={i} className="char inline-block">{char === " " ? "\u00A0" : char}</span>
                   ))}
                </span>
                <span className="text-shimmer block overflow-hidden h-[1.1em]">
                   {Array.from(name).map((char, i) => (
                     <span key={i} className="char inline-block">{char}</span>
                   ))}
                </span>
             </h1>
             <p className="hero-sub text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium tracking-tight max-w-lg">
                Crafting <span className="text-blue-600 dark:text-blue-400 font-bold">high-performance architectures</span> and fluid interfaces. 
                Full Stack Engineer specializing in Java and React.
             </p>
          </div>

          <div className="hero-cta flex flex-wrap gap-4 pt-4">
            <Magnetic>
              <Link
                to="projects"
                smooth={true}
                className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold uppercase text-xs tracking-widest hover:scale-105 transition-all cursor-pointer"
              >
                View Work
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="contact"
                smooth={true}
                className="px-8 py-4 glass-panel rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-white/10 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                Contact
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* IMAGE / VISUAL LAYER */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
           <div className="hero-visual relative group">
              <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 shadow-2xl">
                  <img 
                    src="rajeev-hero.jpg" 
                    alt="Rajeev Nayan" 
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                    fetchpriority="high"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              </div>
              
              {/* Floating Element - Minimal Style */}
              <div className="absolute -bottom-6 -left-6 p-6 glass-panel rounded-2xl z-20 shadow-xl border-white/20">
                 <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Exp.</div>
                 <div className="text-2xl font-black text-slate-900 dark:text-white leading-none">6+ Months</div>
              </div>
           </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 opacity-40 hover:opacity-100 transition-opacity">
        <Link to="about" smooth={true} className="cursor-pointer">
          <ArrowDown size={24} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;