import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileText, Terminal } from 'lucide-react';

const codeLines = [
  '  @Service',
  '  public class BackendEngineer {',
  '  ',
  '      private final String stack =',
  '      "Java + Spring Boot + Microservices";',
  '  ',
  '      @Transactional',
  '      public void buildScalableSystems(){',
  '  ',
  '          design();',
  '          optimize();',
  '          secure();',
  '  ',
  '      }',
  '  }'
];

const IntelliJEditor = () => {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) return;

    const line = codeLines[currentLineIndex];
    let delay = 60; // default typing speed per char

    // Pause on key elements for realism
    if (line.trim().startsWith('@') && currentCharIndex === 0) delay = 400; // Annotation pause
    if (line.trim().startsWith('public') && currentCharIndex === 0) delay = 300;
    if (currentCharIndex === line.length) delay = 500; // Line end pause

    const timer = setTimeout(() => {
      if (currentCharIndex < line.length) {
        setTypedLines(prev => {
          const next = [...prev];
          if (!next[currentLineIndex]) next[currentLineIndex] = '';
          next[currentLineIndex] += line[currentCharIndex];
          return next;
        });
        setCurrentCharIndex(prev => prev + 1);
      } else {
        // Move to next line
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex]);

  // Auto-scroll logic
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [typedLines]);

  // Simple Java syntax highlighter helper
  const highlightJava = (text: string) => {
    if (!text) return <span>&nbsp;</span>;
    
    const parts = text.split(/(\s+)/);
    return parts.map((part, i) => {
      if (part.startsWith('@')) {
        return <span key={i} className="text-yellow-600 font-semibold">{part}</span>;
      }
      if (['public', 'class', 'private', 'final', 'void', 'new'].includes(part.trim())) {
        return <span key={i} className="text-orange-500 font-semibold">{part}</span>;
      }
      if (part.trim().startsWith('"') && part.trim().endsWith('"')) {
        return <span key={i} className="text-green-500">{part}</span>;
      }
      if (['stack', 'buildScalableSystems', 'design', 'optimize', 'secure'].includes(part.trim().replace(/\(\);?/, ''))) {
        return <span key={i} className="text-purple-400">{part}</span>;
      }
      return <span key={i} className="text-gray-300">{part}</span>;
    });
  };

  return (
    <div className="w-full max-w-[500px] bg-black/60 backdrop-blur-md border border-white/10 rounded-lg shadow-[0_0_30px_rgba(99,102,241,0.15)] overflow-hidden font-mono text-[11px] leading-relaxed text-[#a9b7c6]">
      {/* IDE Title Bar */}
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-gray-400 font-sans flex items-center gap-1">
          <Terminal size={10} className="text-orange-400" /> BackendEngineer.java
        </span>
        <div className="w-8" />
      </div>

      {/* Editor Content Area */}
      <div ref={containerRef} className="h-64 p-4 overflow-y-auto bg-transparent">
        {/* Line Numbers and Code Rows */}
        <div className="flex">
          {/* Gutter Line Numbers */}
          <div className="text-right text-gray-600 select-none pr-4 border-r border-white/10 w-8">
            {Array.from({ length: Math.max(14, typedLines.length + 1) }).map((_, idx) => (
              <div key={idx}>{idx + 1}</div>
            ))}
          </div>

          {/* Actual Code Area */}
          <div className="pl-4 flex-1 whitespace-pre">
            {typedLines.map((line, idx) => (
              <div key={idx} className="flex">
                {highlightJava(line)}
                {idx === currentLineIndex && currentCharIndex < codeLines[currentLineIndex].length && (
                  <span className="w-1.5 h-3 bg-orange-400 ml-0.5 animate-pulse" />
                )}
              </div>
            ))}
            {currentLineIndex >= codeLines.length && (
              <div className="flex">
                <span className="w-1.5 h-3 bg-orange-400 animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [stats, setStats] = useState({ repos: 32, followers: 12 });

  useEffect(() => {
    fetch('https://api.github.com/users/imrajeevnayan')
      .then(res => {
        if (!res.ok) throw new Error('API fetch failed');
        return res.json();
      })
      .then(data => {
        setStats({
          repos: data.public_repos || 32,
          followers: data.followers || 12
        });
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[var(--bg-main)] overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 bg-[var(--bg-main)] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Branding details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Identity Badge */}
            <span className="badge-premium inline-flex items-center px-4 py-1.5 rounded-full border border-[var(--border-main)] bg-[var(--surface-card)] text-xs text-[var(--color-button-blue)]">
              Java Backend Engineer
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-[72px] leading-[1.05] font-extrabold tracking-tight text-[var(--text-primary)]">
              Rajeev Nayan
            </h1>

            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light max-w-xl">
              Building scalable backend systems with Java, Spring Boot, Microservices, and Cloud technologies. Enforcing strong design patterns, API isolation, and database optimization workflows.
            </p>

            {/* Live Metrics Showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg border-y border-[var(--border-main)] py-4 my-6">
              <div>
                <span className="text-xl md:text-2xl font-bold block text-[var(--text-primary)]">{stats.repos}</span>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-light">Repositories</span>
              </div>
              <div className="border-l border-[var(--border-main)] pl-4">
                <span className="text-xl md:text-2xl font-bold block text-[var(--text-primary)]">{stats.followers}</span>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-light">Followers</span>
              </div>
              <div className="border-l border-[var(--border-main)] pl-4">
                <span className="text-xl md:text-2xl font-bold block text-[var(--text-primary)]">1,200+</span>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-light">Contributions</span>
              </div>
              <div className="border-l border-[var(--border-main)] pl-4">
                <span className="text-xl md:text-2xl font-bold block text-[var(--text-primary)]">6</span>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-light">Featured Projects</span>
              </div>
            </div>

            {/* Buttons Group */}
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="btn-primary flex items-center gap-2 group">
                View Projects 
                <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://github.com/imrajeevnayan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary flex items-center gap-2"
              >
                <Github size={16} /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/imrajeevnayan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary flex items-center gap-2"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a 
                href="mailto:imrajeevnayan@gmail.com" 
                className="btn-secondary flex items-center gap-2 hover:text-[var(--brand-accent)] transition-colors"
              >
                <FileText size={16} /> Contact Resume
              </a>
            </div>
          </div>

          {/* Right IntelliJ Terminal & Avatar Card */}
          <div className="lg:col-span-5 flex flex-col items-center gap-8 justify-center">
            {/* Circular Profile Avatar */}
            <div className="relative w-44 h-44 rounded-full p-[3px] bg-gradient-to-tr from-violet-600 via-pink-500 to-blue-500 shadow-xl hover:shadow-violet-500/20 hover:scale-[1.05] transition-all duration-500 group">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--surface-card)]">
                <img 
                  src="https://github.com/imrajeevnayan.png" 
                  alt="Rajeev Nayan" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-violet-600/10 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            {/* IntelliJ Code typing card */}
            <IntelliJEditor />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;