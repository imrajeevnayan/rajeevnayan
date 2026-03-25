
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
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden">
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
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white mb-6 uppercase">Professional <span className="text-gradient">Journey</span></h2>
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
                        <div className="glass-panel p-8 md:p-12 rounded-[3.5rem] bg-white/10 dark:bg-black/50 border-white/20 dark:border-white/5 shadow-2xl transition-all duration-700 hover:scale-[1.05] hover:shadow-[0_0_120px_rgba(99,102,241,0.25)]">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                <div>
                                    <h3 className="text-3xl font-black text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors uppercase tracking-tight">
                                        {exp.position}
                                    </h3>
                                    <div className="flex items-center gap-4 mt-2">
                                        <span className="text-blue-600 dark:text-blue-400 font-black text-sm uppercase tracking-widest">{exp.company}</span>
                                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                                        <span className="flex items-center text-sm font-bold text-gray-500 uppercase tracking-widest leading-none">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>
                                <span className="px-6 py-2 text-xs font-black uppercase tracking-widest rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20 self-start md:self-center">
                                    {exp.type}
                                </span>
                            </div>
                            
                            <ul className="space-y-6">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start text-sm md:text-lg font-medium leading-relaxed group/li">
                                        <div className="mr-5 mt-2.5 w-2 h-2 bg-gradient-to-r from-blue-500 to-fuchsia-500 rounded-full flex-shrink-0 group-hover/li:scale-150 transition-transform" />
                                        <span>{item}</span>
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
