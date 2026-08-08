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
    <div className="text-left">
      <span className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] block tracking-tight font-display">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-wider block mt-1 font-sans">{label}</span>
    </div>
  );
};

const Hero = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty('--x', `${x}px`);
    currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] flex items-center bg-[var(--bg-main)] py-20 md:py-32 overflow-hidden group/hero"
    >
      {/* Dynamic mouse-following spotlight highlight */}
      <div className="absolute inset-0 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500 pointer-events-none z-0 spotlight-overlay" />

      <div className="section-container relative z-10 w-full">
        {/* Apple style centering or layout */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          {/* Centered DP (enlarged size) */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto mb-4">
            <img 
              src="https://github.com/imrajeevnayan.png" 
              alt="Rajeev Nayan Profile" 
              className="w-full h-full rounded-full border-2 border-[var(--border-main)] object-cover shadow-sm"
            />
          </div>

          <span className="text-[14px] font-semibold tracking-normal text-[var(--color-ember)] uppercase block">// Full Stack AI & Java Engineer</span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-[-1.44px] text-[var(--text-primary)] leading-[1.05] font-display">
            Full Stack AI & Java Engineer.
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto py-2">
            {['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'SQL', 'System Design', 'Agentic Systems', 'RAG Pipelines', 'LLM API Integrations', 'LangChain'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-[var(--bg-alternate)] text-[var(--text-secondary)] text-[12px] font-medium rounded-full border border-[var(--border-main)]">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto font-sans font-normal pt-2">
            Designing secure, high-performance distributed backend architectures combined with cutting-edge AI capabilities. Focused on p95 latency reduction and autonomous agent execution pipelines.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="mailto:imrajeevnayan@gmail.com" 
              className="btn-primary flex items-center gap-2 cursor-pointer"
            >
              <Activity size={16} /> Book a Call
            </a>
            <a 
              href="/Rajeev_Nayan_Resume.pdf" 
              download
              className="btn-secondary flex items-center gap-2 cursor-pointer"
            >
              <FileText size={16} /> Download Resume
            </a>
          </div>
        </div>

        {/* Two-column comparison showcase card block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-10">
          {/* Left Column: Metrics Card */}
          <div className="lg:col-span-6 bg-[var(--bg-alternate)] rounded-[28px] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[12px] font-medium text-[var(--color-ember)] tracking-normal uppercase block mb-2">Nuevo</span>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--text-primary)] mb-4 font-display">Performance Metrics</h3>
              <p className="text-[17px] text-[var(--text-secondary)] mb-8 font-sans">
                Real-time measurements from live production deployments, prioritizing low latency and high availability.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--border-main)]">
              <StatCounter value={72} label="p95 Latency % Saved" suffix="%" />
              <StatCounter value={5000} label="Peak rps Handled" suffix="+" />
              <StatCounter value={99} label="System Uptime" suffix=".98%" />
            </div>
          </div>

          {/* Right Column: Active Pipeline Visualizer */}
          <div className="lg:col-span-6 bg-[var(--bg-alternate)] rounded-[28px] p-8 md:p-10">
            <div className="flex items-center justify-between border-b border-[var(--border-main)] pb-4 mb-6">
              <span className="text-[12px] font-semibold text-[var(--text-primary)] tracking-wide font-display">Request Pipeline</span>
              <span className="flex items-center gap-1.5 text-[11px] text-[var(--color-ember)] font-medium bg-[var(--color-cool-wash)] px-2.5 py-1 rounded-[36px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ember)] animate-ping" />
                LIVE MONITOR
              </span>
            </div>

            {/* SVG Architecture Nodes */}
            <div className="space-y-5 relative">
              {/* Connector Line with animated flow dot */}
              <div className="absolute left-[19px] top-6 bottom-6 w-[1.5px] bg-[var(--border-main)] z-0">
                <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-[var(--color-electric-blue)] to-transparent animate-[flow-vertical_2.5s_infinite_linear]" />
              </div>

              {/* Node 1: Client */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-[10px] bg-[var(--surface-card)] border border-[var(--border-main)] flex items-center justify-center text-[var(--text-secondary)] shrink-0 shadow-sm">
                  <Globe size={16} />
                </div>
                <div className="text-left">
                  <h4 className="text-[14px] font-semibold text-[var(--text-primary)] font-display">Client Gateway Request</h4>
                  <p className="text-[12px] text-[var(--text-secondary)]">Public HTTP/REST Traffic</p>
                </div>
              </div>

              {/* Node 2: Spring Security Filters */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-[10px] bg-[var(--color-cool-wash)] border border-[var(--border-main)] flex items-center justify-center text-[var(--color-electric-blue)] shrink-0 shadow-sm">
                  <Shield size={16} />
                </div>
                <div className="text-left">
                  <h4 className="text-[14px] font-semibold text-[var(--color-electric-blue)] font-display">Filter Chain Security</h4>
                  <p className="text-[12px] text-[var(--text-secondary)]">JWT Authentication & Rate Limiting</p>
                </div>
              </div>

              {/* Node 3: Spring Boot Microservices */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-[10px] bg-[var(--surface-card)] border border-[var(--border-main)] flex items-center justify-center text-[var(--text-secondary)] shrink-0 shadow-sm">
                  <Server size={16} />
                </div>
                <div className="text-left">
                  <h4 className="text-[14px] font-semibold text-[var(--text-primary)] font-display">Spring Boot Controller</h4>
                  <p className="text-[12px] text-[var(--text-secondary)]">Business Logic & Tx Management</p>
                </div>
              </div>

              {/* Node 4: Persistence Store */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-[10px] bg-[var(--surface-card)] border border-[var(--border-main)] flex items-center justify-center text-[var(--text-secondary)] shrink-0 shadow-sm">
                  <Database size={16} />
                </div>
                <div className="text-left">
                  <h4 className="text-[14px] font-semibold text-[var(--text-primary)] font-display">MySQL DB Persistence</h4>
                  <p className="text-[12px] text-[var(--text-secondary)]">Transaction write & key index lookup</p>
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