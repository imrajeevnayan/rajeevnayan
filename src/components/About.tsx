import { motion } from 'framer-motion';
import { GraduationCap, Brain, Sparkles, Server, Zap } from 'lucide-react';
import TerminalWindow from './common/Window';
import profileImage from '../assets/profile.jpg';

const About = () => {
    const stats = [
        { icon: GraduationCap, title: 'Academics', text: 'MCA Systems', detail: 'Focus: Distributed Logic' },
        { icon: Brain, title: 'Philosophy', text: 'JVM First', detail: 'Clean IPC & Memory' },
        { icon: Zap, title: 'Focus', text: 'High-Throughput', detail: 'System Stability' },
        { icon: Sparkles, title: 'Principles', text: 'SOLID Code', detail: 'Design Pattern Master' },
    ];

    return (
    <section id="about" className="section-container relative border-t border-white/5">
        <div className="flex flex-col lg:flex-row gap-20">
            {/* STICKY HEADER */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="text-orange-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Identity_Core.exe</div>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                        The <br /><span className="text-shimmer">Architect</span>
                    </h2>
                    <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-sm">
                        &gt; Engineering elite backend ecosystems with a focus on JVM performance and cloud-native resilience. 
                        Decryption of personality module...
                    </p>
                    
                    <div className="relative group pt-10">
                       <div className="p-3 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-square max-w-[280px]">
                          <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-1000" />
                       </div>
                       <div className="absolute -top-4 -right-4 p-3 bg-zinc-900 border border-orange-500/50 rounded flex items-center gap-2 shadow-xl">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-zinc-100">Status: Active</span>
                       </div>
                    </div>
                </motion.div>
            </div>

            {/* CONTENT SIDE */}
            <div className="lg:w-2/3 space-y-12">
                <TerminalWindow title="~/README.md" className="w-full">
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-white">
                            I build <span className="text-orange-500">robust backend ecosystems</span> that scale with confidence.
                        </h3>
                        <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                            &gt; As a Backend-focused Software Engineer, I specialize in crafting high-performance Java Spring Boot architectures and cloud-native services. My approach prioritizes system stability, JVM optimization, and the uncompromising pursuit of clean, maintainable codebases that solve core business challenges at scale.
                        </p>
                    </div>
                </TerminalWindow>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {stats.map((item, idx) => (
                        <TerminalWindow key={idx} title={`Stat_${idx}.json`} delay={idx * 0.1}>
                           <div className="flex flex-col h-full">
                                <item.icon size={20} className="text-orange-500 mb-4" />
                                <h4 className="text-sm font-mono font-bold uppercase tracking-tight mb-1 text-zinc-200">{item.title}</h4>
                                <p className="text-[10px] font-mono font-bold text-orange-500 uppercase tracking-widest mb-1">{item.text}</p>
                                <p className="text-[11px] font-mono text-zinc-500">{item.detail}</p>
                           </div>
                        </TerminalWindow>
                    ))}
                </div>

                {/* ETHOS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TerminalWindow title="latency_optimization.sh" className="bg-zinc-900 border-zinc-800">
                        <Zap size={24} className="text-orange-500 mb-4" />
                        <h3 className="text-lg font-mono font-black uppercase tracking-tight mb-2 text-white">Execution_Speed</h3>
                        <p className="text-zinc-500 font-mono text-xs leading-relaxed">Obsessed with sub-millisecond response times. Specializing in JVM garbage collection tuning and high-concurrency threading models.</p>
                    </TerminalWindow>
                    <TerminalWindow title="system_blueprint.dwg" className="bg-zinc-900 border-zinc-800">
                        <Server size={24} className="text-blue-500 mb-4" />
                        <h3 className="text-lg font-mono font-black uppercase tracking-tight mb-2 text-white">Distributed_Scale</h3>
                        <p className="text-zinc-500 font-mono text-xs leading-relaxed">Building cloud-native microservices that handle elastic demand. Engineering stateless security and high-availability persistence layers.</p>
                    </TerminalWindow>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;