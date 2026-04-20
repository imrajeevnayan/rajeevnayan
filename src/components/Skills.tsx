import { motion } from 'framer-motion';

const Skills = () => {
    const categories = [
        {
            title: "Frontend Development",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
            title: "Backend & Systems",
            skills: ["Java 17", "Spring Boot", "REST APIs", "Microservices", "OAuth2 / JWT"]
        },
        {
            title: "Database & Cloud",
            skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "AWS"]
        }
    ];

    return (
        <section id="skills" className="py-24 md:py-32 bg-[var(--bg-main)]">
            <div className="section-container">
                <div className="space-y-4 mb-20 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl">Technical Expertise</h2>
                    <p className="text-[var(--text-dim)] font-medium max-w-2xl text-lg">
                        Modern technologies and tools I use to build robust and scalable software solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {categories.map((category, i) => (
                        <div key={i} className="space-y-8">
                            <h3 className="text-lg font-bold text-indigo-600 border-b border-indigo-500/20 pb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, j) => (
                                    <motion.span
                                        key={j}
                                        whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}
                                        className="px-4 py-2 rounded-xl bg-[var(--surface-main)] border border-[var(--border-main)] text-sm font-semibold text-[var(--text-dim)] transition-colors cursor-default"
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
