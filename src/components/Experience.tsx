import { motion } from 'framer-motion';
import { Zap, Brain } from 'lucide-react';

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
    <section id="experience" className="section-container relative border-t border-slate-200 dark:border-white/5">
        <div className="flex flex-col lg:flex-row gap-20">
            {/* STICKY HEADER */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.3em]">Trajectory</div>
                    <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                        Work <br /><span className="text-shimmer">History</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm">
                        Building scalable systems and human-centric interfaces across diverse engineering environments.
                    </p>
                </motion.div>
            </div>

            {/* TIMELINE CONTENT */}
            <div className="lg:w-2/3 space-y-32">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="space-y-8">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="space-y-2">
                                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                                        {exp.position}
                                    </h3>
                                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                                        <span className="text-blue-600">{exp.company}</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>
                                <span className="px-5 py-2 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    {exp.type}
                                </span>
                            </div>

                            <ul className="space-y-4">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                                        <span className="mt-3 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* CORE WINS - Storytelling */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
                                <div className="p-8 glass-panel rounded-3xl border-transparent hover:border-blue-500/20">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Zap size={18} className="text-blue-600" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Performance focus</span>
                                    </div>
                                    <p className="text-sm font-bold text-slate-700 dark:text-slate-100">
                                        Optimized database query execution by 40% through index redesign and caching logic.
                                    </p>
                                </div>
                                <div className="p-8 glass-panel rounded-3xl border-transparent hover:border-fuchsia-500/20">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Brain size={18} className="text-fuchsia-600" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Scalable architecture</span>
                                    </div>
                                    <p className="text-sm font-bold text-slate-700 dark:text-slate-100">
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
