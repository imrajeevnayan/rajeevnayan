import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { Star, GitFork, BookMarked } from 'lucide-react';

const pinnedRepos = [
  { name: 'libstack.java', stars: 24, forks: 8, lang: 'Java', desc: 'Secure Cloud-native Library Microservice' },
  { name: 'event-nexus.kafka', stars: 32, forks: 12, lang: 'Java/Kafka', desc: 'High-throughput event streaming architecture' },
];

const GithubStats = () => {
    return (
        <section id="github" className="py-20 md:py-28 bg-[var(--surface-card)] border-y border-[var(--border-main)]">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    <div className="lg:w-5/12 space-y-6">
                        <span className="badge-premium">Open Source</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-appleHeading text-[var(--text-primary)]">Contributions</h2>
                        <p className="text-sm md:text-[15px] text-[var(--text-secondary)] font-light leading-[1.47] pt-2">
                            I am a regular contributor to the open-source community, focusing on building high-performance Java libraries and system utilities.
                        </p>
                        <div className="flex gap-10 pt-4">
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-appleHeading">500+</div>
                                <div className="text-xs font-medium text-[var(--text-secondary)]">Commits in 2024</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-[var(--color-button-blue)] tracking-appleHeading">1.2k</div>
                                <div className="text-xs font-medium text-[var(--text-secondary)]">GitHub Stars</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-7/12 w-full space-y-8">
                        <div className="p-6 md:p-8 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-lg flex flex-col items-center justify-center overflow-x-auto">
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
                                    whileHover={{ borderColor: 'var(--brand-accent)' }}
                                    className="p-6 md:p-8 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-lg space-y-4"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="w-10 h-10 flex items-center justify-center text-[var(--color-button-blue)]">
                                            <BookMarked size={20} strokeWidth={1.5} />
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                                            <div className="flex items-center gap-1"><Star size={13} strokeWidth={1.5} /> {repo.stars}</div>
                                            <div className="flex items-center gap-1"><GitFork size={13} strokeWidth={1.5} /> {repo.forks}</div>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <h4 className="text-base font-bold tracking-appleHeading text-[var(--text-primary)]">{repo.name}</h4>
                                        <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">{repo.desc}</p>
                                    </div>
                                    <div className="pt-3 border-t border-[var(--border-main)]">
                                        <span className="text-xs font-semibold text-[var(--color-button-blue)]">{repo.lang}</span>
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
