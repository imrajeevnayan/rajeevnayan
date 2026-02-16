
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
    {
        title: 'Frontend Developer (React) Certificate',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/cd55b45629f0'
    },
    {
        title: 'Java (Basic) Certificate',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/fba0b12779d0'
    },
    {
        title: 'SQL (Intermediate) Certificate',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/cf9c90c9bd72'
    },
    {
        title: 'JavaScript (Basic) Certificate',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/cb47463f1a7b'
    },
    {
        title: 'Problem Solving (Basic) Certificate',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/0a3f58c7e37f'
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
                        <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 block cursor-pointer"
                        >
                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{cert.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.issuer}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
