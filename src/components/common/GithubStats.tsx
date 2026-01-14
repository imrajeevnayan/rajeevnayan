
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';

const GithubStats = ({ isDark }: { isDark: boolean }) => {
    return (
        <section className="py-10 bg-white dark:bg-gray-900 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full max-w-5xl px-6"
            >
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    Days I <span className="text-blue-600 dark:text-blue-400">Code</span>
                </h3>

                <div className="flex justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all overflow-x-auto">
                    <GitHubCalendar
                        username="imrajeevnayan"
                        blockSize={12}
                        blockMargin={5}
                        fontSize={14}
                        colorScheme={isDark ? 'dark' : 'light'}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default GithubStats;
