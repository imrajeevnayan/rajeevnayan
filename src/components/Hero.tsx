import { useState, useEffect } from 'react';
import { ArrowRight, FileText, Activity, Shield, Server, Database, Globe } from 'lucide-react';

const StatCounter = ({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalDuration = 1000; // 1s
    const incrementTime = Math.max(Math.floor(totalDuration / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="font-mono text-left">
      <span className="text-2xl md:text-3xl font-extrabold text-[#10b981] block">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest block mt-1">{label}</span>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-[var(--bg-main)] py-16 md:py-24 border-b border-[var(--border-main)]">
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase block">// SYSTEM ARCHITECT</span>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
              Java Backend Engineer building scalable distributed systems.
            </h1>

            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light max-w-xl font-mono">
              Designing secure, high-performance API platforms using Java, Spring Boot, Microservices, and Cloud infrastructure. Focused on reducing p95 latency.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 items-center">
              <a 
                href="mailto:imrajeevnayan@gmail.com" 
                className="px-5 py-2.5 bg-[#10b981] text-black font-bold text-xs rounded hover:bg-[#059669] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/10"
              >
                <Activity size={14} /> Book a Call
              </a>
              <a 
                href="/Rajeev_Nayan_Resume.pdf" 
                download
                className="px-5 py-2.5 bg-[var(--surface-main)] hover:bg-[var(--border-main)] text-[var(--text-primary)] font-bold text-xs rounded border border-[var(--border-main)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText size={14} /> Download Resume
              </a>
            </div>

            {/* Metric counters */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border-main)] max-w-lg">
              <StatCounter value={72} label="p95 Latency % Saved" suffix="%" />
              <StatCounter value={5000} label="Peak rps Handled" suffix="+" />
              <StatCounter value={99} label="System Uptime" suffix=".98%" />
            </div>
          </div>

          {/* Right Column: Profile Card & Architecture Diagram */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Profile Identity Card */}
            <div className="p-5 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-xl flex items-center gap-4">
              <img 
                src="https://github.com/imrajeevnayan.png" 
                alt="Rajeev Nayan" 
                className="w-44 h-44 rounded-full border border-[var(--border-main)] object-cover shrink-0"
              />
              <div className="space-y-1 font-mono text-left w-full">
                <h4 className="font-bold text-[var(--text-primary)] text-sm">Rajeev Nayan</h4>
                <p className="text-[10px] text-[var(--text-secondary)]">Java Backend Engineer</p>
                <div className="flex items-center gap-2 pt-1 border-t border-[var(--border-main)]">
                  <span className="flex items-center gap-1.5 text-[9px] text-[#10b981] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping shrink-0" />
                    <span>Open to Backend Opportunities</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[var(--border-main)] pb-3 mb-6 font-mono">
                <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">Active Request Pipeline</span>
                <span className="flex items-center gap-1.5 text-[9px] text-[#10b981] font-semibold bg-[#10b981]/10 px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                  LIVE MONITOR
                </span>
              </div>

              {/* SVG Architecture Nodes */}
              <div className="space-y-6 relative">
                {/* Connector Line with animated flow dot */}
                <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-[var(--border-main)] z-0">
                  <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-[#10b981] to-transparent animate-[flow-vertical_2s_infinite_linear]" />
                </div>

                {/* Node 1: Client */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-[var(--surface-main)] border border-[var(--border-main)] flex items-center justify-center text-[var(--text-secondary)] shrink-0">
                    <Globe size={18} />
                  </div>
                  <div className="font-mono text-left">
                    <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase">Client Gateway Request</h4>
                    <p className="text-[9px] text-[var(--text-muted)]">Public HTTP/REST Traffic</p>
                  </div>
                </div>

                {/* Node 2: Spring Security Filters */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0">
                    <Shield size={18} />
                  </div>
                  <div className="font-mono text-left">
                    <h4 className="text-xs font-bold text-[#10b981] uppercase">Filter Chain Security</h4>
                    <p className="text-[9px] text-[var(--text-muted)]">JWT Authentication & Rate Limiting</p>
                  </div>
                </div>

                {/* Node 3: Spring Boot Microservices */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Server size={18} />
                  </div>
                  <div className="font-mono text-left">
                    <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase">Spring Boot Controller</h4>
                    <p className="text-[9px] text-[var(--text-muted)]">Business Logic & Transaction Management</p>
                  </div>
                </div>

                {/* Node 4: Persistence Store */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                    <Database size={18} />
                  </div>
                  <div className="font-mono text-left">
                    <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase">MySQL DB Persistence</h4>
                    <p className="text-[9px] text-[var(--text-muted)]">Transaction write & key index lookup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes flow-vertical {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;