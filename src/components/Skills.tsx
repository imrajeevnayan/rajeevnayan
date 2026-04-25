import { motion } from 'framer-motion';

const Skills = () => {
    const categories = [
        {
            title: "Frontend Engineering",
            desc: "Architecting responsive, high-performance user interfaces.",
            skills: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / WebGL", "Redux Toolkit", "Zustand"]
        },
        {
            title: "Backend & Ecosystem",
            desc: "Designing resilient microservices and distributed logic.",
            skills: ["Java 17/21", "Spring Boot 3", "Spring Security", "Hibernate / JPA", "Node.js / Express", "JUnit 5 / Mockito", "Maven / Gradle"]
        },
        {
            title: "Infrastructure & Data",
            desc: "Managing high-availability data and cloud deployments.",
            skills: ["PostgreSQL", "MongoDB", "Redis / Memcached", "Apache Kafka", "Docker Engine", "Kubernetes", "AWS (EC2/S3/RDS)", "CI/CD (GitHub Actions)"]
        }
    ];

    return (
        <section id="skills" className="py-24 md:py-32 bg-[var(--bg-main)] border-t border-[var(--border-main)] overflow-hidden">
            <div className="section-container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6 mb-20"
                >
                    <div className="flex items-center gap-3 text-[var(--brand-accent)] font-bold text-xs uppercase tracking-widest">
                        <div className="w-12 h-0.5 bg-[var(--brand-accent)] rounded-full" />
                        Skills & Stack
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl text-[var(--text-primary)] leading-tight">
                        Expertise in building <span className="text-gradient">scalable systems</span>.
                    </h2>
                    <p className="text-[var(--text-secondary)] font-medium max-w-2xl text-lg leading-relaxed">
                        A focused selection of technologies I leverage to deliver enterprise-grade performance and reliability.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {categories.map((category, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="space-y-8 p-8 card-airbnb card-premium-hover border border-[var(--border-main)] transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="space-y-3 relative z-10">
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--brand-accent)] transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed">
                                    {category.desc}
                                </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2.5 relative z-10">
                                {category.skills.map((skill, j) => (
                                    <motion.span
                                        key={j}
                                        whileHover={{ 
                                            scale: 1.1, 
                                            backgroundColor: 'var(--brand-accent)', 
                                            color: '#fff',
                                            boxShadow: '0 0 12px var(--brand-glow)' 
                                        }}
                                        className="px-3.5 py-1.5 rounded-[14px] bg-[var(--palette-light-surface)] border border-transparent text-[11px] font-bold text-[var(--text-secondary)] transition-all cursor-default uppercase tracking-wider"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
