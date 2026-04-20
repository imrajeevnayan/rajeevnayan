import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { Star, GitFork, BookMarked } from 'lucide-react';

const pinnedRepos = [
  { name: 'libstack.java', stars: 24, forks: 8, lang: 'Java', desc: 'Secure Cloud-native Library Microservice' },
  { name: 'event-nexus.kafka', stars: 32, forks: 12, lang: 'Java/Kafka', desc: 'High-throughput event streaming architecture' },
];

const GithubStats = () => {
    return (
        <section id="github" className="py-24 md:py-32 bg-[var(--bg-main)]">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-5/12 space-y-6">
                        <h2 className="text-3xl md:text-5xl">Open Source Contributions</h2>
                        <p className="text-[var(--text-dim)] font-medium text-lg leading-relaxed">
                            I am a regular contributor to the open-source community, focusing on building high-performance Java libraries and system utilities.
                        </p>
                        <div className="flex gap-10 pt-4">
                            <div>
                                <div className="text-3xl font-bold text-[var(--text-main)]">500+</div>
                                <div className="text-xs font-semibold text-[var(--text-dim)]">Commits in 2024</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-indigo-600">1.2k</div>
                                <div className="text-xs font-semibold text-[var(--text-dim)]">GitHub Stars</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-7/12 w-full space-y-12">
                        <div className="p-8 card-base bg-[var(--surface-main)] flex flex-col items-center justify-center overflow-x-auto shadow-sm">
                            <GitHubCalendar 
                                username="imrajeevnayan" 
                                blockSize={12} 
                                blockMargin={4} 
                                fontSize={12} 
                                colorScheme='dark'
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {pinnedRepos.map((repo, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ borderColor: 'rgba(99, 102, 241, 0.3)' }}
                                    className="p-8 card-base bg-[var(--surface-main)] space-y-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600">
                                            <BookMarked size={20} />
                                        </div>
                                        <div className="flex items-center gap-4 text-xs font-bold text-[var(--text-dim)]/60">
                                            <div className="flex items-center gap-1.5"><Star size={14} /> {repo.stars}</div>
                                            <div className="flex items-center gap-1.5"><GitFork size={14} /> {repo.forks}</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-bold">{repo.name}</h4>
                                        <p className="text-sm text-[var(--text-dim)] leading-relaxed">{repo.desc}</p>
                                    </div>
                                    <div className="pt-4 border-t border-[var(--border-main)]">
                                        <span className="text-xs font-bold text-indigo-600">{repo.lang}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubStats;
