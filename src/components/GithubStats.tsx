import { GitHubCalendar } from 'react-github-calendar';

import { motion } from 'framer-motion';
import { Star, GitFork, BookMarked, Terminal as TerminalIcon } from 'lucide-react';

import TerminalWindow from './common/Window';

const pinnedRepos = [
  { name: 'libstack.java', stars: 24, forks: 8, lang: 'Java', desc: 'Secure Cloud-native Library Microservice' },
  { name: 'event-nexus.kafka', stars: 32, forks: 12, lang: 'Java/Kafka', desc: 'High-throughput event streaming architecture' },
  { name: 'hms-v1.springboot', stars: 15, forks: 5, lang: 'Java', desc: 'Enterprise Health Management System' },
  { name: 'cache-master.redis', stars: 18, forks: 6, lang: 'Java/Redis', desc: 'Distributed caching engine' },
];

const GithubStats = () => {
    return (
        <section id="github" className="section-container border-t border-[var(--glass-border)]">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-1/3 space-y-6">
                    <div className="text-orange-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Open_Source_Intelligence</div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[var(--text-main)]">
                        GitHub <br /><span className="text-shimmer">Contribution</span>
                    </h2>
                    <p className="text-[var(--text-dim)] font-mono text-sm leading-relaxed max-w-sm">
                        &gt; Continuously integrating and deploying across the open-source ecosystem. Tracking engineering commits and repository health in real-time.
                    </p>
                    <div className="flex gap-4 pt-6">
                        <div className="flex flex-col">
                            <span className="text-2xl font-black text-[var(--text-main)] uppercase">500+</span>
                            <span className="text-[8px] font-mono text-zinc-500 tracking-widest uppercase">Commits / 2024</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black text-orange-500 uppercase">1.2k</span>
                            <span className="text-[8px] font-mono text-zinc-500 tracking-widest uppercase">Total Stars</span>
                        </div>
                    </div>
                </div>

                <div className="lg:w-2/3 w-full space-y-8">
                    <TerminalWindow title="~/contributions.graph" className="w-full">
                        <div className="p-4 flex flex-col items-center justify-center overflow-x-auto min-h-[160px]">
                            <GitHubCalendar 
                                username="imrajeevnayan" 
                                blockSize={12} 
                                blockMargin={4} 
                                fontSize={10} 
                                theme={{
                                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                }}
                            />
                        </div>
                    </TerminalWindow>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pinnedRepos.map((repo, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-5 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl relative overflow-hidden transition-all hover:border-orange-500/30"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-[var(--glass-border)] flex items-center justify-center text-[var(--text-dim)] group-hover:text-orange-500 transition-colors">
                                        <BookMarked size={16} />
                                    </div>
                                    <div className="flex items-center gap-3 font-mono text-[9px] text-zinc-500">
                                        <div className="flex items-center gap-1"><Star size={10} /> {repo.stars}</div>
                                        <div className="flex items-center gap-1"><GitFork size={10} /> {repo.forks}</div>
                                    </div>
                                </div>
                                <h4 className="text-sm font-bold text-[var(--text-main)] mb-1 uppercase tracking-tight">{repo.name}</h4>
                                <p className="text-[10px] text-zinc-500 font-mono mb-4 leading-relaxed">{repo.desc}</p>
                                <div className="flex items-center justify-between pt-4 border-t border-[var(--glass-border)]">
                                    <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-orange-500">{repo.lang}</span>
                                    <div className="text-[8px] font-mono text-zinc-600 uppercase flex items-center gap-1">
                                        <TerminalIcon size={10} /> REPO_ACTIVE
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubStats;
