import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileText, Activity, Database, Shield, Server, Globe } from 'lucide-react';

const StatCounter = ({ value, label, duration = 1.5 }: { value: number; label: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div>
      <span className="text-xl md:text-2xl font-mono font-bold block text-white">
        {count.toLocaleString()}{label.includes('Contributions') ? '+' : ''}
      </span>
      <span className="text-[10px] font-mono text-[#86868b] uppercase tracking-wider font-light">{label}</span>
    </div>
  );
};

const Hero = () => {
  const [stats, setStats] = useState({ repos: 32, followers: 12 });
  const [latency, setLatency] = useState(4);
  const [throughput, setThroughput] = useState(165);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 3) + 4);
      setThroughput(Math.floor(Math.random() * 20) + 155);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#030014] overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 bg-[#030014] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase block">
              // SYSTEMS ARCHITECTURE & DEVELOPMENT
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-[60px] leading-[1.1] font-extrabold tracking-tight text-white font-sans">
              Java Backend Engineer building scalable distributed systems.
            </h1>

            <p className="text-base md:text-lg text-[#86868b] leading-relaxed font-light max-w-xl font-mono">
              Designing secure, high-performance backend platforms using Java, Spring Boot, Microservices, and Cloud technologies.
              <span className="inline-block w-1.5 h-3 bg-[#10b981] ml-1 animate-pulse" />
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
                href="mailto:imrajeevnayan@gmail.com" 
                className="px-5 py-2.5 bg-[#10b981]/15 hover:bg-[#10b981]/25 text-[#10b981] font-semibold text-xs rounded-lg border border-[#10b981]/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Activity size={14} /> Book a Call
              </a>
              <a 
                href="/Rajeev_Nayan_Resume.pdf" 
                download
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-lg border border-white/10 transition-all flex items-center gap-2 cursor-pointer hover:text-[#10b981]"
              >
                <FileText size={14} /> Download Resume (ATS-Friendly)
              </a>
            </div>
          </div>

          {/* Right Column */}
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

              {/* Status Metrics */}
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
                  <span className="text-xs font-bold text-white">{throughput} rps</span>
                </div>
              </div>

              {/* Request pipeline with packet animation */}
              <div className="mt-5 border-t border-white/5 pt-4 relative">
                <span className="text-[9px] font-mono text-[#86868b] block mb-3 uppercase tracking-wider">// Simulated Request Pipeline</span>
                
                {/* Visual line with traveling dot */}
                <div className="absolute top-[52px] left-8 right-8 h-[1px] bg-white/10 z-0">
                  <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#10b981] rounded-full shadow-[0_0_8px_#10b981] animate-[packet-flow_3s_infinite_linear]" />
                </div>

                <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-center">
                  <div className="px-2 py-1 bg-[#030014] border border-white/10 rounded text-white flex flex-col items-center gap-0.5 w-14">
                    <Globe size={10} className="text-gray-400" />
                    <span>Client</span>
                  </div>
                  <div className="w-6" />
                  <div className="px-2 py-1 bg-[#030014] border border-white/10 rounded text-[#10b981] flex flex-col items-center gap-0.5 w-14">
                    <Shield size={10} />
                    <span>Gateway</span>
                  </div>
                  <div className="w-6" />
                  <div className="px-2 py-1 bg-[#030014] border border-white/10 rounded text-indigo-400 flex flex-col items-center gap-0.5 w-14">
                    <Server size={10} />
                    <span>Spring</span>
                  </div>
                  <div className="w-6" />
                  <div className="px-2 py-1 bg-[#030014] border border-white/10 rounded text-green-400 flex flex-col items-center gap-0.5 w-14">
                    <Database size={10} />
                    <span>MySQL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Identity Card with Blinking Dot */}
            <div className="p-5 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl flex items-center gap-4">
              <img 
                src="https://github.com/imrajeevnayan.png" 
                alt="Rajeev Nayan" 
                className="w-12 h-12 rounded-full border border-white/10 object-cover"
              />
              <div className="space-y-1 font-mono text-left w-full">
                <h4 className="font-bold text-white text-sm">Rajeev Nayan</h4>
                <p className="text-[10px] text-[#86868b]">Java Backend Developer</p>
                <div className="flex items-center gap-3 pt-1 border-t border-white/5">
                  <span className="flex items-center gap-1.5 text-[9px] text-[#10b981] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping shrink-0" />
                    <span>Open to Backend Opportunities</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Animated Live Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/45 border border-white/10 rounded-xl text-center">
                <StatCounter value={72} label="p95 Latency % Saved" />
              </div>
              <div className="p-4 bg-black/45 border border-white/10 rounded-xl text-center">
                <StatCounter value={5000} label="Peak rps Handled" />
              </div>
            </div>

          </div>

        </div>
      </div>
      
      {/* Embedded keyframe styling */}
      <style>{`
        @keyframes packet-flow {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;