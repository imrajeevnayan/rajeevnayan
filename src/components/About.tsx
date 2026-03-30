import { motion } from 'framer-motion';
import { GraduationCap, Languages, Brain, Sparkles, Code2, Zap } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const About = () => {
    const stats = [
        { icon: GraduationCap, title: 'Education', text: 'MCA Degree', detail: 'Dr. APJ AKTU' },
        { icon: Languages, title: 'Linguistics', text: 'Professional', detail: 'Hindi & English' },
        { icon: Brain, title: 'Philosophy', text: 'Problem First', detail: 'Modular Logic' },
        { icon: Sparkles, title: 'Focus', text: 'Clean Code', detail: 'Performance Optimization' },
    ];

    return (
    <section id="about" className="section-container relative border-t border-slate-200 dark:border-white/5">
        <div className="flex flex-col lg:flex-row gap-20">
            {/* STICKY HEADER */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.3em]">Identity</div>
                    <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                        The <br /><span className="text-shimmer">Mind</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm">
                        Architecting digital solutions at the intersection of performance and human-centric design.
                    </p>
                    
                    <div className="relative group pt-10">
                       <div className="p-3 glass-panel rounded-[3rem] border-white/20 shadow-2xl overflow-hidden aspect-square max-w-[280px]">
                          <img src={profileImage} className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000" />
                       </div>
                       <div className="absolute -top-4 -right-4 p-4 glass-panel rounded-2xl flex items-center gap-2">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           <span className="text-[8px] font-black uppercase tracking-widest">Available</span>
                       </div>
                    </div>
                </motion.div>
            </div>

            {/* CONTENT SIDE */}
            <div className="lg:w-2/3 space-y-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
                        I build <span className="text-blue-600">scalable architectures</span> that don't just work—they perform under pressure.
                    </h3>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        As a performance-driven Software Engineer, I specialize in bridging the gap between heavy-duty Java Spring Boot backends and fluid, interactive React interfaces. My philosophy is simple: resolve the problem at its core before writing a single line of code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {stats.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 glass-panel rounded-[2.5rem] border-transparent hover:border-blue-500/10 transition-all"
                        >
                            <item.icon size={28} className="text-blue-600 mb-6" />
                            <h4 className="text-lg font-black uppercase tracking-tight mb-1">{item.title}</h4>
                            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{item.text}</p>
                            <p className="text-sm text-slate-500 font-medium">{item.detail}</p>
                        </motion.div>
                    ))}
                </div>

                {/* ETHOS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
                    <div className="p-10 glass-panel rounded-[3rem] bg-slate-900 text-white border-transparent">
                        <Zap size={32} className="text-blue-500 mb-6" />
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Speed First</h3>
                        <p className="text-slate-400 font-medium">Obsessed with sub-second performance and query optimization.</p>
                    </div>
                    <div className="p-10 glass-panel rounded-[3rem] border-blue-500/10">
                        <Code2 size={32} className="text-blue-600 mb-6" />
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Modular DNA</h3>
                        <p className="text-slate-500 font-medium">Designing systems with reusable, scalable, and atomic structures.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;