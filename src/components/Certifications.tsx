
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
    {
        title: 'JavaScript (Basic) Certificate',
        issuer: 'HackerRank',
    },
    {
        title: 'Problem Solving (Basic) Certificate',
        issuer: 'HackerRank',
    },
    {
        title: 'SQL (Intermediate) Certificate',
        issuer: 'HackerRank',
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
                        >
                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{cert.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
