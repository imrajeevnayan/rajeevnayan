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
        <section id="skills" className="py-24 md:py-32 bg-[var(--bg-main)] border-t border-[var(--border-main)]">
            <div className="section-container">
                <div className="space-y-4 mb-20">
                    <div className="flex items-center gap-3 text-indigo-600 font-bold text-xs uppercase tracking-widest">
                        <div className="w-8 h-px bg-indigo-600" />
                        Skills & Stack
                    </div>
                    <h2 className="text-3xl md:text-5xl max-w-2xl">Expertise in building scalable systems.</h2>
                    <p className="text-[var(--text-dim)] font-medium max-w-xl text-lg leading-relaxed">
                        A focused selection of technologies I leverage to deliver enterprise-grade performance and reliability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {categories.map((category, i) => (
                        <div key={i} className="space-y-8 p-8 card-base bg-[var(--surface-main)] hover:border-indigo-500/30 transition-all duration-500">
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-[var(--text-main)]">
                                    {category.title}
                                </h3>
                                <p className="text-xs text-[var(--text-dim)] font-medium leading-relaxed">
                                    {category.desc}
                                </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, j) => (
                                    <motion.span
                                        key={j}
                                        whileHover={{ scale: 1.05, color: '#6366f1', borderColor: 'rgba(99, 102, 241, 0.4)' }}
                                        className="px-3 py-1.5 rounded-lg bg-[var(--bg-main)] border border-[var(--border-main)] text-[10px] font-bold text-[var(--text-dim)] transition-all cursor-default uppercase tracking-wider"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
