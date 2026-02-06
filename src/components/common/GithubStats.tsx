import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';

const GithubStats = ({ isDark }: { isDark: boolean }) => {
    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                        Coding <span className="text-blue-600 dark:text-blue-400">Activity</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* GitHub Calendar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-16"
                >
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all overflow-x-auto">
                        <GitHubCalendar
                            username="imrajeevnayan"
                            blockSize={12}
                            blockMargin={5}
                            fontSize={14}
                            colorScheme={isDark ? 'dark' : 'light'}
                        />
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {/* GitHub Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-full max-w-[400px]"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=imrajeevnayan&show_icons=true&locale=en&theme=${isDark ? 'tokyonight' : 'default'}&hide_border=true&bg_color=${isDark ? '00000000' : 'ffffff'}`}
                            alt="GitHub Stats"
                            className="w-full h-auto drop-shadow-md"
                        />
                    </motion.div>

                    {/* Top Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full max-w-[400px]"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs?username=imrajeevnayan&layout=compact&langs_count=8&card_width=320&theme=${isDark ? 'tokyonight' : 'default'}&hide_border=true&bg_color=${isDark ? '00000000' : 'ffffff'}`}
                            alt="Top Languages"
                            className="w-full h-auto drop-shadow-md"
                        />
                    </motion.div>

                    {/* LeetCode Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full max-w-[400px]"
                    >
                        <img
                            src={`https://leetcode-stats-six.vercel.app/api?username=imrajeevnayan&theme=${isDark ? 'dark' : 'light'}&hide_border=true`}
                            alt="LeetCode Stats"
                            className="w-full h-auto drop-shadow-md"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GithubStats;
