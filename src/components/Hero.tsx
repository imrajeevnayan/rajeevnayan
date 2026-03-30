import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Code2, FileText, ArrowDown, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

import Magnetic from './common/Magnetic';
import Tilt3D from './common/Tilt3D';
import profileImage from '../assets/profile.jpg';
import { lazy, Suspense } from 'react';

const GeometricShapes = lazy(() => import('./common/GeometricShapes'));

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      tl.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.2
      })
      .from('.char', {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'back.out(1.7)'
      }, '-=0.8')
      .from(subtitleRef.current, {
        x: -50,
        opacity: 0,
        duration: 1
      }, '-=1')
      .from(descriptionRef.current, {
        y: 20,
        opacity: 0,
        duration: 1
      }, '-=0.8')
      .from('.hero-btn', {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)'
      }, '-=0.8')
      .from('.social-icon', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
      }, '-=0.5')
      .from(imageContainerRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out'
      }, '-=1.5');

      // 2. Scroll Parallax Effects
      gsap.to('.hero-content', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: 150,
        opacity: 0
      });

      gsap.to('.hero-image-parallax', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: 80,
        rotateX: -10,
        rotateY: 5
      });

      gsap.to('.ambient-glow-1', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        x: 100,
        y: -100,
        scale: 1.5
      });

      gsap.to('.ambient-glow-2', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        x: -100,
        y: 100,
        scale: 1.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const name = "RAJEEV";

  return (
    <section 
       ref={containerRef}
       id="home" 
       className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden bg-transparent perspective-1000"
    >
      <Suspense fallback={null}>
         <GeometricShapes />
      </Suspense>

      {/* AMBIENT GLOWS */}
      <div className="ambient-glow-1 absolute -top-40 -left-40 w-[50rem] h-[50rem] bg-indigo-600/20 blur-[180px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="ambient-glow-2 absolute -bottom-40 -right-20 w-[60rem] h-[60rem] bg-fuchsia-600/15 blur-[200px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-600/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* TEXT CONTENT */}
        <div className="hero-content text-center lg:text-left space-y-8">
          <div className="hero-badge inline-flex items-center gap-3 px-6 py-3 glass-panel rounded-full bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400 font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-500/5 hover:bg-blue-500/20 transition-all cursor-default">
             <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
             Available for Global Projects
          </div>
          
          <div className="space-y-4">
             <h1 ref={titleRef} className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter dark:text-white leading-[0.9] drop-shadow-2xl">
               <span className="block overflow-hidden h-[1.1em]">
                  {Array.from("HELLO,").map((char, i) => (
                    <span key={i} className="char inline-block">{char === " " ? "\u00A0" : char}</span>
                  ))}
               </span>
               <span className="text-shimmer block overflow-hidden h-[1.1em] drop-shadow-[0_0_30px_rgba(217,70,239,0.3)]">
                  {Array.from(name).map((char, i) => (
                    <span key={i} className="char inline-block">{char}</span>
                  ))}
               </span>
             </h1>
             <h2 ref={subtitleRef} className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-bold uppercase tracking-widest flex items-center justify-center lg:justify-start gap-4">
                <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full hidden lg:block"></span>
                Software Architect
             </h2>
          </div>

          <p ref={descriptionRef} className="text-lg text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed pt-2">
            Engineering sub-second performance and modular data flows. Specialized in <span className="text-blue-500 font-bold">Java Spring Boot</span> and <span className="text-fuchsia-500 font-bold">React Architecture</span>.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
            <Magnetic>
              <Link
                to="projects"
                smooth={true}
                className="hero-btn px-12 py-6 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/40 hover:bg-blue-700 hover:shadow-blue-600/60 transition-all flex items-center gap-3 group cursor-pointer"
              >
                View Builds <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="contact"
                smooth={true}
                className="hero-btn px-12 py-6 glass-panel rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all cursor-pointer"
              >
                Hire Me
              </Link>
            </Magnetic>
          </div>

          <div ref={socialsRef} className="flex justify-center lg:justify-start gap-6 pt-8">
            {[Github, Linkedin, Instagram, FileText].map((Icon, i) => (
              <Magnetic key={i}>
                <a 
                   href="#" 
                   className="social-icon p-5 glass-panel rounded-2xl text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-fuchsia-400 transition-all shadow-xl"
                >
                   <Icon size={24} />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* IMAGE / VISUAL LAYER */}
        <div 
          ref={imageContainerRef}
          className="hero-image-parallax relative"
        >
           <Tilt3D intensity={15}>
             <div className="relative z-10 p-4 glass-panel rounded-[4rem] border-white/20 shadow-[0_0_100px_rgba(99,102,241,0.2)] dark:shadow-[0_0_150px_rgba(168,85,247,0.2)] transition-transform duration-700">
                <div className="relative rounded-[3.5rem] overflow-hidden bg-slate-900 border border-white/5 aspect-square">
                   <img 
                     src="/rajeev-hero.jpg" 
                     alt="Rajeev Nayan" 
                     className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                     fetchPriority="high"
                     loading="eager"
                   />
                   {/* Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
                </div>

                {/* Overlapping Floating Status Badges */}
                <div className="absolute -top-10 -right-10 p-6 glass-panel rounded-3xl bg-white/20 dark:bg-black/40 shadow-2xl border-white/40 animate-float">
                   <div className="text-3xl font-black text-blue-500 leading-none mb-1">6+</div>
                   <div className="text-[9px] font-black uppercase tracking-widest text-gray-500">Exp Months</div>
                </div>

                <div className="absolute -bottom-10 -left-10 p-6 glass-panel rounded-3xl bg-white/20 dark:bg-black/40 shadow-2xl border-white/40 animate-float delay-700">
                   <Code2 size={24} className="text-fuchsia-500 mb-2" />
                   <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 leading-none">High Perf Code</div>
                </div>
             </div>
           </Tilt3D>

           {/* Decorative Rings around Profile */}
           <div className="absolute inset-0 -z-10 border border-blue-500/10 rounded-full scale-125 animate-pulse" />
           <div className="absolute inset-0 -z-10 border border-fuchsia-500/10 rounded-full scale-150 animate-pulse delay-1000" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-slate-400 hover:text-blue-500 transition-colors animate-bounce">
        <Link to="about" smooth={true}>
          <ArrowDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;