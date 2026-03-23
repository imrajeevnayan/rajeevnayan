
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

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
        <section id="experience" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-0 pb-12 last:pb-0"
                        >
                            {/* Hide timeline on very small screens, keep on desktop/tablet */}
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600/30 dark:bg-blue-400/30" />
                            <div className="md:hidden absolute -left-[7px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                            <div className="group relative">
                                {/* Gradient hover effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[28px] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                                
                                <div className="glass-panel p-6 md:p-8 rounded-3xl relative h-full w-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl bg-white/60 dark:bg-black/40">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {exp.position}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-700 dark:text-gray-300 mt-3 gap-2 sm:gap-4 sm:space-x-0 mb-6">
                                        <span className="font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full text-sm">
                                            {exp.company}
                                        </span>
                                        <span className="flex items-center text-sm font-medium">
                                            <Calendar className="w-4 h-4 mr-1.5" />
                                            {exp.period}
                                        </span>
                                        <span className="self-start sm:self-auto px-3 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                                            {exp.type}
                                        </span>
                                    </div>
                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start text-sm md:text-base">
                                                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex-shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
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
