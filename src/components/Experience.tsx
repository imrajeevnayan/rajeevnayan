import { motion } from 'framer-motion';
import { Calendar, Zap, Brain } from 'lucide-react';

const experiences = [
    {
        company: 'CodeForSuccess Pvt. Ltd.',
        position: 'Software Development Intern',
        period: 'Feb 2025 – Aug 2025',
        type: 'Remote',
        description: [
            'Contributed to full-stack development projects using Java, Spring Boot, and React.js, delivering production-ready features and improving application performance',
            'Collaborated with cross-functional teams to design and implement scalable RESTful APIs following Agile methodology and industry best practices',
            'Developed and integrated frontend components with backend services, enhancing user experience and system functionality',
            'Demonstrated strong problem-solving skills and commitment to code quality through rigorous code reviews, unit testing, and debugging'
        ]
    }
];

const Experience = () => {
    return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-48 bottom-24 w-px bg-gradient-to-b from-blue-600/0 via-blue-600/50 to-blue-600/0 hidden lg:block" />
        
        {/* Deep Glow backgrounds */}
        <div className="absolute top-1/2 left-0 w-[50rem] h-[50rem] bg-indigo-600/10 blur-[180px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white mb-6 uppercase leading-none">Professional <span className="text-shimmer">Journey</span></h2>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="glass-panel p-8 md:p-12 rounded-[3.5rem] bg-white/10 dark:bg-black/50 border-white/20 dark:border-white/5 shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_120px_rgba(99,102,241,0.25)] relative overflow-hidden group">
                            {index === 0 && (
                                <div className="absolute top-0 right-0 px-8 py-3 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-bl-3xl shadow-xl z-20 animate-pulse">
                                    Latest Engagement
                                </div>
                            )}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                <div>
                                    <div className="flex items-center gap-2 text-blue-500 mb-2">
                                        <Zap size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">Active Role</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors uppercase tracking-tight leading-none">
                                        {exp.position}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4 mt-4">
                                        <span className="text-gray-900 dark:text-white font-black text-sm uppercase tracking-widest bg-blue-600/10 px-3 py-1 rounded-lg border border-blue-600/20">{exp.company}</span>
                                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                                        <span className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest leading-none">
                                            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className="px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full bg-slate-900 text-white border border-white/10 self-start md:self-end">
                                        {exp.type}
                                    </span>
                                </div>
                            </div>
                            
                            <ul className="space-y-6">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start text-sm md:text-lg font-medium leading-relaxed group/li">
                                        <div className="mr-5 mt-2.5 w-2 h-2 bg-gradient-to-r from-blue-500 to-fuchsia-500 rounded-full flex-shrink-0 group-hover/li:scale-150 transition-transform" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                             {/* STORYTELLING: Core Wins */}
                             <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 bg-blue-50/50 dark:bg-white/5 rounded-3xl border border-blue-100 dark:border-white/10 group/win hover:bg-blue-600 transition-all duration-500">
                                   <div className="flex items-center gap-3 mb-2">
                                      <Zap size={18} className="text-blue-600 group-hover/win:text-white transition-colors" />
                                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover/win:text-white transition-colors">Performance Win</span>
                                   </div>
                                   <p className="text-sm font-bold text-gray-800 dark:text-white group-hover/win:text-white transition-colors">
                                      Optimized database query execution by 40% through index redesign and caching logic.
                                   </p>
                                </div>
                                <div className="p-6 bg-fuchsia-50/50 dark:bg-white/5 rounded-3xl border border-fuchsia-100 dark:border-white/10 group/win hover:bg-fuchsia-600 transition-all duration-500">
                                   <div className="flex items-center gap-3 mb-2">
                                      <Brain size={18} className="text-fuchsia-600 group-hover/win:text-white transition-colors" />
                                      <span className="text-[10px] font-black uppercase tracking-widest text-fuchsia-600 group-hover/win:text-white transition-colors">Architecture Insight</span>
                                   </div>
                                   <p className="text-sm font-bold text-gray-800 dark:text-white group-hover/win:text-white transition-colors">
                                      Built scalable backends with Java Spring Boot and reactive React-based interfaces.
                                   </p>
                                </div>
                             </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Experience;
