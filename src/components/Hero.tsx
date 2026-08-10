import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { trackEvent } from "@/hooks/use-posthog";
import { IdentityCard } from "./IdentityCard";
import { JavaAnimation } from "./JavaAnimation";
import { Magnetic } from "./Magnetic";
import { profile, rotatingTitles } from "@/data/portfolio";
import resumeAsset from "@/assets/rajeev-nayan-resume.pdf.asset.json";


function Typewriter() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(rotatingTitles[0] || "");
  const [isDeleting, setIsDeleting] = useState(false);
  const [animationEnabled, setAnimationEnabled] = useState(true);
  
  // Configurable speeds (ms)
  const TYPING_SPEED = 80;
  const DELETING_SPEED = 40;
  const PAUSE_AFTER_TYPE = 1500;
  const PAUSE_BEFORE_NEXT = 500;

  useEffect(() => {
    // If motion is reduced or animation is disabled, ensure we show the full text
    if (prefersReducedMotion || !animationEnabled) {
      setText(rotatingTitles[index] || "");
      return;
    }

    // Initialize with a slice of the text for the first render to avoid flash if needed,
    // but the effect should handle the typing.
    const fullText = rotatingTitles[index] || "";
    let timer: ReturnType<typeof setTimeout>;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % rotatingTitles.length);
        }
      }, text === "" ? PAUSE_BEFORE_NEXT : DELETING_SPEED);
    } else {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
        if (text.length + 1 >= fullText.length) {
          setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
        }
      }, TYPING_SPEED);
    }
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, prefersReducedMotion, animationEnabled]);

  // Set initial text correctly for non-animated states to avoid empty flashes
  useEffect(() => {
    if (prefersReducedMotion || !animationEnabled) {
      setText(rotatingTitles[index] || "");
    }
  }, [prefersReducedMotion, animationEnabled, index]);

  const shouldAnimate = !prefersReducedMotion && animationEnabled;

  return (
    <div className="flex items-center gap-3 justify-center lg:justify-start">
      <span 
        className="font-mono text-aurora-2 whitespace-nowrap inline-flex items-center min-h-[1.5em]" 
        data-testid="typewriter-text"
        aria-live="polite"
        aria-atomic="true"
      >
        {text}
        {shouldAnimate && (
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block ml-1 w-[2px] h-[1.2em] bg-aurora-1 shadow-[0_0_8px_rgba(var(--aurora-1-rgb),0.5)]"
          />
        )}
      </span>
      
      {!prefersReducedMotion && (
        <button
          onClick={() => setAnimationEnabled(!animationEnabled)}
          className="glass-card flex size-6 items-center justify-center rounded-md border border-border/50 text-[10px] text-muted-foreground transition-all hover:bg-secondary hover:text-aurora-1 active:scale-95"
          aria-label={animationEnabled ? "Disable typing animation" : "Enable typing animation"}
          title={animationEnabled ? "Pause animation" : "Play animation"}
        >
          {animationEnabled ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          )}
        </button>
      )}
    </div>
  );
}

const stats = [
  { value: "69", label: "Public repos" },
  { value: "15+", label: "REST endpoints shipped" },
  { value: "30%", label: "API latency reduced" },
];


const floatingTech = ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "JWT", "Hibernate", "AWS"];

export function Hero({ onOpenTerminal }: { onOpenTerminal?: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Disable heavy calculations and mouse tracking for reduced motion
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section 
      className="relative flex min-h-svh items-center overflow-hidden pt-32 pb-20 md:pt-44 lg:pt-36"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight effect - Disabled for reduced motion */}
      {!prefersReducedMotion && (
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-500 will-change-[background] dark:opacity-40 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(var(--aurora-1-rgb), 0.2), transparent 80%)`
          }}
        />
      )}

      <div className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-chart-5" />
            Available for backend engineering roles · {profile.location}
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-[5rem] lg:leading-[1]"
          >
            Hi, I&apos;m <span className="text-aurora">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-2xl font-medium sm:text-3xl"
          >
            {profile.role}
          </motion.p>

          <div className="mt-3 text-sm text-muted-foreground sm:text-base min-h-[1.5em]">
            {/* '''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                            
                                            Improve the Projects sorting options by adding additional criteria like difficulty level, category, and most recently updated date. */}
            <Typewriter />
          </div>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl leading-relaxed text-muted-foreground"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <Magnetic strength={0.2}>
              <a
                href="#projects"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background transition-all sm:hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="#contact"
                className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:bg-secondary sm:hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => trackEvent("hero_contact_clicked")}
              >

                Get in Touch
                <Mail className="size-4" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href={resumeAsset.url}
                target="_blank"
                rel="noreferrer noopener"
                className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Download className="size-4" />
                Resume
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <button
                onClick={onOpenTerminal}
                className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <span className="font-mono text-aurora-1">&gt;_</span>
                Terminal
              </button>
            </Magnetic>
          </motion.div>

          <motion.dl
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xl font-semibold tracking-tight sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative lg:col-span-5 flex flex-col items-center">
          {/* Glowing Orb - Animated for standard users, static for reduced motion */}
          <motion.div 
            animate={prefersReducedMotion ? { opacity: 0.3, scale: 1 } : { 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              filter: ["blur(40px)", "blur(60px)", "blur(40px)"]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 -z-10 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora-1 will-change-[transform,opacity,filter]"
          />
          
          <div className="w-full max-w-[420px] space-y-4">
            <IdentityCard />
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <JavaAnimation />
              
              {/* Connection Line */}
              <div className="absolute -top-4 left-1/2 -z-10 h-4 w-px bg-gradient-to-b from-aurora-1/20 to-aurora-1/40" />
            </motion.div>
          </div>




          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {floatingTech.map((t, i) => (
              <motion.span
                key={t}
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="rounded-lg border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground hover:border-aurora-1/30 transition-colors"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
