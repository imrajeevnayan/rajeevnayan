import { motion } from 'framer-motion';
import { Zap, Brain } from 'lucide-react';
import TerminalWindow from './common/Window';

const experiences = [
    {
        company: 'CodeForSuccess Pvt. Ltd.',
        position: 'Software Development Intern',
        period: 'Feb 2025 – Aug 2025',
        type: 'Remote',
        description: [
            'Architected high-performance Microservices using Java 17 and Spring Boot, ensuring sub-second response times across distributed nodes',
            'Engineered secure RESTful APIs with OAuth2/JWT authentication, protecting sensitive cloud-native infrastructure',
            'Implemented advanced data auditing with Hibernate Envers and optimized SQL query execution with Redis caching',
            'Enforced elite code standards through peer reviews and automated CI/CD pipelines, maintaining 95%+ service availability'
        ]

    }
];

const Experience = () => {
    return (
    <section id="experience" className="section-container relative border-t border-[var(--glass-border)]">
        <div className="flex flex-col lg:flex-row gap-20">
            {/* STICKY HEADER */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="text-orange-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Trajectory_Log.bin</div>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[var(--text-main)]">
                        Work <br /><span className="text-shimmer">History</span>
                    </h2>
                    <p className="text-[var(--text-dim)] font-mono text-sm leading-relaxed max-w-sm">
                        &gt; Building scalable systems and human-centric interfaces across diverse engineering environments. 
                        Tracing professional commits...
                    </p>
                </motion.div>
            </div>

            {/* TIMELINE CONTENT */}
            <div className="lg:w-2/3 space-y-12">
                {experiences.map((exp, index) => (
                    <TerminalWindow key={index} title={`Entry: ${exp.company}`} delay={index * 0.1}>
                        <div className="space-y-6">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--text-main)] transition-colors">
                                        {exp.position}
                                    </h3>
                                    <div className="flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--text-dim)] opacity-60">
                                        <span className="text-orange-500">{exp.company}</span>
                                        <span className="w-1 h-1 bg-[var(--text-dim)] rounded-full" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--text-dim)]">
                                    {exp.type}
                                </span>
                            </div>

                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-[var(--text-dim)] text-sm leading-relaxed font-mono">
                                        <span className="mt-2 text-orange-500">&gt;</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[var(--glass-border)]">
                                <div className="p-4 bg-[var(--glass-bg)] rounded-lg border border-[var(--glass-border)]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Zap size={14} className="text-orange-500" />
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--text-dim)]">Performance_Win</span>
                                    </div>
                                    <p className="text-[10px] font-mono text-[var(--text-dim)] opacity-80">
                                        Reduced JVM start-up time by 25% and optimized Heap memory allocation for Dockerized nodes.
                                    </p>
                                </div>
                                <div className="p-4 bg-[var(--glass-bg)] rounded-lg border border-[var(--glass-border)]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Brain size={14} className="text-blue-500" />
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--text-dim)]">Scalability_Impact</span>
                                    </div>
                                    <p className="text-[10px] font-mono text-[var(--text-dim)] opacity-80">
                                        Orchestrated Kafka-based event flows between 5 decoupled services, increasing throughput by 80%.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </TerminalWindow>
                ))}
            </div>
        </div>
    </section>

    );
};

export default Experience;
