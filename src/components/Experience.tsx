import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Software Engineer",
    company: "Freelance / Independent",
    location: "Remote",
    period: "2022 - Present",
    desc: "Architecting and implementing full-stack solutions for international clients, specializing in Spring Boot backends and React frontends.",
    points: [
      "Designed and deployed 10+ scalable microservices handling secure data processing.",
      "Optimized database queries in PostgreSQL, reducing load times by 40%.",
      "Collaborated with cross-functional teams to deliver enterprise-grade software products."
    ]
  },
  {
    role: "Backend Intern",
    company: "Tech Solutions Inc.",
    location: "Varanasi, India",
    period: "2021 - 2022",
    desc: "Contributed to the development of a internal CRM system using Java and Spring ecosystem.",
    points: [
      "Integrated third-party APIs for automated data synchronization.",
      "Refactored legacy code to improve system performance and maintainability.",
      "Participated in agile ceremonies and code review processes."
    ]
  }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 bg-[var(--surface-main)]">
            <div className="section-container">
                <div className="space-y-4 mb-20">
                    <h2 className="text-3xl md:text-5xl">Work Experience</h2>
                    <p className="text-[var(--text-dim)] font-medium max-w-2xl text-lg">
                        My professional journey in software engineering, focused on technical excellence and business impact.
                    </p>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 md:p-10 card-base bg-[var(--bg-main)]"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-indigo-600">
                                        <Briefcase size={22} />
                                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[var(--text-dim)]">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[var(--text-main)] italic">{exp.company}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            {exp.location}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            {exp.period}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <p className="text-[var(--text-dim)] font-medium leading-relaxed italic">
                                    "{exp.desc}"
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {exp.points.map((point, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm font-medium text-[var(--text-dim)] leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
