import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Github, Command, Menu, X, Terminal, FileText, ChevronRight } from "lucide-react";
import { trackEvent } from "@/hooks/use-posthog";
import { ThemeToggle } from "./ThemeToggle";
import { Magnetic } from "./Magnetic";
import { profile } from "@/data/portfolio";
import resumeAsset from "@/assets/rajeev-nayan-resume.pdf.asset.json";


const sections = [
  { id: "about", label: "About" },
  { id: "stack", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "expertise", label: "Expertise" },
  { id: "github", label: "GitHub" },
  { id: "certifications", label: "Certifications" },
];

export function FloatingNav({ 
  onOpenPalette, 
  onOpenTerminal 
}: { 
  onOpenPalette: () => void;
  onOpenTerminal: () => void;
}) {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);


  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="w-full max-w-4xl px-4">
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`relative flex items-center gap-1 rounded-full border border-border/50 bg-background/60 px-3 py-2 shadow-xl shadow-black/5 backdrop-blur-xl transition-all sm:gap-2 ${
            scrolled ? "px-4" : "px-5"
          }`}
        >
          <Link 
            to="/" 
            className="flex items-center gap-2 px-1 sm:px-2 font-mono text-sm font-bold tracking-tighter"
          >
            <div className="flex size-7 items-center justify-center rounded-lg bg-foreground text-background shrink-0">
              rn
            </div>
            <span className="hidden xs:inline-block">
              rajeev<span className="text-aurora-1">.</span>nayan
            </span>
          </Link>

          <div className="h-4 w-px bg-border/50 mx-2 hidden md:block" />

          <ul className="hidden items-center gap-0.5 md:flex">
            {sections.slice(0, 5).map((s) => (
              <li key={s.id} className="relative">
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "true" : undefined}
                  className={`relative z-10 block rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
                    active === s.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 z-[-1] rounded-full bg-secondary"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-1">
            <div className="mr-2 hidden h-4 w-px bg-border/50 lg:block" />
            
            <div className="flex items-center gap-0.5">
              <button
                onClick={onOpenPalette}
                aria-label="Open command palette"
                className="hidden size-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground sm:flex"
                title="Command Palette (Ctrl+K)"
              >
                <Command className="size-4" />
              </button>
              
              <button
                onClick={onOpenTerminal}
                aria-label="Open terminal"
                className="hidden size-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground sm:flex"
                title="Terminal (Ctrl+`)"
              >
                <Terminal className="size-4" />
              </button>

              <div className="mx-1 hidden h-4 w-px bg-border/50 sm:block" />
              
              <ThemeToggle />
            </div>

            <a
              href="#contact"
              className="group ml-1 sm:ml-2 flex items-center gap-1.5 rounded-full bg-foreground px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-bold text-background transition-all hover:scale-105 hover:bg-aurora-1 hover:text-white shrink-0"
            >
              Hire Me
              <ChevronRight className="size-3 sm:size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground md:hidden ml-1"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="glass mt-3 overflow-hidden rounded-3xl border border-border/50 p-2 shadow-2xl md:hidden"
            >
              <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => setMenuOpen(false)}
                      className={`flex h-12 items-center justify-between rounded-2xl px-4 text-sm font-semibold transition-all ${
                        active === s.id 
                          ? "bg-aurora-1 text-white" 
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {s.label}
                      <ChevronRight className={`size-3.5 opacity-40 ${active === s.id ? "text-white" : ""}`} />
                    </a>
                  </li>
                ))}
                <li className="col-span-full mt-2 border-t border-border/50 pt-2">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex gap-1">
                      <Magnetic strength={0.3}>
                        <a href={profile.links.github} target="_blank" className="flex size-10 items-center justify-center rounded-xl bg-secondary text-muted-foreground hover:text-foreground">
                          <Github className="size-5" />
                        </a>
                      </Magnetic>
                      <Magnetic strength={0.3}>
                        <a href={resumeAsset.url} target="_blank" className="flex size-10 items-center justify-center rounded-xl bg-secondary text-muted-foreground hover:text-foreground">
                          <FileText className="size-5" />
                        </a>
                      </Magnetic>
                    </div>
                    <button
                      onClick={() => { onOpenTerminal(); setMenuOpen(false); }}
                      className="flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-xs font-bold text-background"
                    >
                      <Terminal className="size-4" />
                      Terminal
                    </button>
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
