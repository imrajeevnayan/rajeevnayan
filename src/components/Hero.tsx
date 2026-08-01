import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileText, Activity, Database, Shield, Server, Terminal } from 'lucide-react';

const Hero = () => {
  const [stats, setStats] = useState({ repos: 32, followers: 12 });
  
  // Simulated Live System metrics
  const [latency, setLatency] = useState(4);
  const [requestsPerSec, setRequestsPerSec] = useState(165);

  useEffect(() => {
    fetch('https://api.github.com/users/imrajeevnayan')
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos || 32,
          followers: data.followers || 12
        });
      })
      .catch(err => console.error(err));
  }, []);

  // Fluctuating metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 3) + 4); // 4ms - 6ms
      setRequestsPerSec(Math.floor(Math.random() * 20) + 155); // 155 - 175 rps
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#030014] overflow-hidden pt-24 md:pt-32">
      {/* Background space elements */}
      <div className="absolute inset-0 bg-[#030014] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Systems positioning */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase block">
              // SYSTEMS ARCHITECTURE & DEVELOPMENT
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-[60px] leading-[1.1] font-extrabold tracking-tight text-white font-sans">
              Java Backend Engineer building scalable distributed systems.
            </h1>

            <p className="text-base md:text-lg text-[#86868b] leading-relaxed font-light max-w-xl">
              Designing secure, high-performance backend platforms using Java, Spring Boot, Microservices, and Cloud technologies. Focus on database query normalization and latency reduction.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 items-center">
              <a href="#projects" className="px-5 py-2.5 bg-[#10b981] text-black font-semibold text-xs rounded-lg hover:bg-[#059669] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/10">
                View Projects 
                <ArrowRight size={14} className="text-black" />
              </a>
              <a 
                href="https://github.com/imrajeevnayan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-lg border border-white/10 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Github size={14} /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/imrajeevnayan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-lg border border-white/10 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a 
                href="mailto:imrajeevnayan@gmail.com" 
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-lg border border-white/10 transition-all flex items-center gap-2 cursor-pointer hover:text-[#10b981]"
              >
                <FileText size={14} /> Resume
              </a>
            </div>
          </div>

          {/* Right Column: Systems Status Panel & Request Flow Diagram */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* System Status Dashboard */}
            <div className="p-6 bg-black/75 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_40px_rgba(16,185,129,0.08)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-[#10b981] animate-pulse" />
                  <span className="text-[10px] font-mono text-white uppercase tracking-wider">Infrastructure Status Dashboard</span>
                </div>
                <span className="text-[9px] font-mono text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded">
                  ONLINE
                </span>
              </div>

              {/* Status Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 text-left font-mono">
                <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                  <span className="text-[9px] text-[#86868b] block uppercase">Uptime</span>
                  <span className="text-xs font-bold text-white">99.98%</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                  <span className="text-[9px] text-[#86868b] block uppercase">Avg Latency</span>
                  <span className="text-xs font-bold text-[#10b981]">{latency}ms</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                  <span className="text-[9px] text-[#86868b] block uppercase">Throughput</span>
                  <span className="text-xs font-bold text-white">{requestsPerSec} rps</span>
                </div>
              </div>

              {/* API Request flow pipeline */}
              <div className="mt-5 border-t border-white/5 pt-4">
                <span className="text-[9px] font-mono text-[#86868b] block mb-3 uppercase tracking-wider">// Simulated Request Pipeline</span>
                <div className="flex items-center justify-between text-[9px] font-mono text-center">
                  <div className="px-2 py-1 bg-white/5 border border-white/10 rounded text-white flex flex-col items-center gap-0.5 w-14">
                    <GlobeIcon size={10} className="text-gray-400" />
                    <span>Client</span>
                  </div>
                  <span className="text-[#10b981] animate-pulse">➔</span>
                  <div className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[#10b981] flex flex-col items-center gap-0.5 w-14">
                    <Shield size={10} />
                    <span>Gateway</span>
                  </div>
                  <span className="text-[#10b981] animate-pulse">➔</span>
                  <div className="px-2 py-1 bg-white/5 border border-white/10 rounded text-indigo-400 flex flex-col items-center gap-0.5 w-14">
                    <Server size={10} />
                    <span>Spring</span>
                  </div>
                  <span className="text-[#10b981] animate-pulse">➔</span>
                  <div className="px-2 py-1 bg-white/5 border border-white/10 rounded text-green-400 flex flex-col items-center gap-0.5 w-14">
                    <Database size={10} />
                    <span>MySQL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Identity Card */}
            <div className="p-5 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl flex items-center gap-4">
              <img 
                src="https://github.com/imrajeevnayan.png" 
                alt="Rajeev Nayan" 
                className="w-12 h-12 rounded-full border border-white/10 object-cover"
              />
              <div className="space-y-0.5 font-mono text-left">
                <h4 className="font-bold text-white text-sm">Rajeev Nayan</h4>
                <p className="text-[10px] text-[#86868b]">Java Backend Developer</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[9px] text-[#10b981] font-semibold">Repos: {stats.repos}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[9px] text-[#10b981] font-semibold">Followers: {stats.followers}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

// Simple inline Globe Icon for self-contained component loading
const GlobeIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export default Hero;