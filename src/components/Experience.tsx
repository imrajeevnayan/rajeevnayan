
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
    {
        company: 'CodeForSuccess Pvt. Ltd.',
        position: 'Software Development Intern',
        period: 'Feb 2024 – Aug 2024',
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
        <section id="experience" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
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
                            className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 pb-12 last:pb-0"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold">{exp.position}</h3>
                                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 mt-2 gap-2 sm:gap-4 sm:space-x-0">
                                    <span className="font-semibold">{exp.company}</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span className="flex items-center text-sm sm:text-base">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {exp.period}
                                    </span>
                                    <span className="self-start sm:self-auto px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                                        {exp.type}
                                    </span>
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                                        <span className="mr-2 mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
