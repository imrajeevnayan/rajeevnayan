import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Code2, CheckCircle2 } from 'lucide-react';

const CodingProfiles = () => {
    const [lcStats, setLcStats] = useState({ solved: 634, easy: 325, medium: 271, hard: 38, ranking: 121847 });
    const [gfgStats, setGfgStats] = useState({ solved: 636, score: 1633, accuracy: '84%' });

    useEffect(() => {
        // Fetch LeetCode stats dynamically
        fetch('https://leetcode-api-faisal.vercel.app/imrajeevnayan')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch LC stats');
                return res.json();
            })
            .then(data => {
                if (data.totalSolved) {
                    setLcStats({
                        solved: data.totalSolved,
                        easy: data.easySolved || 180,
                        medium: data.mediumSolved || 210,
                        hard: data.hardSolved || 40,
                        ranking: data.ranking || 85000
                    });
                }
            })
            .catch(err => console.warn('Using fallback LeetCode metrics:', err));
    }, []);

    const profiles = [
        {
            name: 'LeetCode',
            username: 'imrajeevnayan',
            url: 'https://leetcode.com/u/imrajeevnayan/',
            color: '#FFA116',
            statsImage: 'https://leetcard.jacoblin.cool/imrajeevnayan?theme=dark&font=Outfit&ext=activity',
            desc: 'Competitive Programming - Focus on DSA, design optimization, array/string structures, and recursion mapping.',
            data: [
                { label: 'Total Solved', value: lcStats.solved },
                { label: 'Medium / Hard', value: `${lcStats.medium} / ${lcStats.hard}` },
                { label: 'Ranking', value: lcStats.ranking.toLocaleString() }
            ]
        },
        {
            name: 'GeeksforGeeks',
            username: 'imrajeevnayan',
            url: 'https://www.geeksforgeeks.org/profile/imrajeevnayan?tab=activity',
            color: '#2F8D46',
            statsImage: 'https://gfgstatscard.vercel.app/imrajeevnayan',
            desc: 'Algorithmic Solutions - Focus on graph analysis, binary search, heap queues, and tree traversal algorithms.',
            data: [
                { label: 'Total Solved', value: gfgStats.solved },
                { label: 'Coding Score', value: gfgStats.score },
                { label: 'Accuracy Rate', value: gfgStats.accuracy }
            ]
        }
    ];

    return (
        <section id="coding-profiles" className="py-20 md:py-32 bg-[var(--bg-main)]">
            <div className="section-container">
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="space-y-3 mb-12 text-left"
                >
                    <span className="text-[12px] font-semibold text-[var(--color-ember)] uppercase block mb-3">Algoritmos</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] font-display">
                        Live Performance
                    </h2>
                </motion.div>
 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {profiles.map((profile, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="premium-card p-6 md:p-8 bg-[var(--bg-alternate)] border border-[var(--border-main)] rounded-[28px] group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div 
                                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all group-hover:scale-105"
                                            style={{ backgroundColor: `${profile.color}15`, border: `1px solid ${profile.color}20`, color: profile.color }}
                                        >
                                            {profile.name === 'LeetCode' ? <Trophy size={18} strokeWidth={1.5} /> : <Code2 size={18} strokeWidth={1.5} />}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-[var(--text-primary)] tracking-tight">{profile.name}</h3>
                                            <span className="text-[10px] font-medium text-[var(--text-secondary)] tracking-wider uppercase">@{profile.username}</span>
                                        </div>
                                    </div>
                                    <a 
                                        href={profile.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--surface-card)] border border-[var(--border-main)] text-[var(--text-secondary)] hover:text-[var(--brand-accent)] hover:border-[var(--brand-accent)] transition-all duration-200"
                                    >
                                        <ExternalLink size={14} strokeWidth={1.5} />
                                    </a>
                                </div>

                                {/* Live numerical metrics grids */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    {profile.data.map((stat, idx) => (
                                        <div key={idx} className="p-3 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-[14px] text-center">
                                            <span className="text-base font-bold text-[var(--text-primary)] block">{stat.value}</span>
                                            <span className="text-[9px] text-[var(--text-secondary)] uppercase tracking-wider font-normal">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Live dynamic SVG card */}
                                <div className="mb-6 overflow-hidden rounded-[20px] border border-[var(--border-main)] bg-[var(--surface-main)] group-hover:border-[var(--brand-accent)] transition-all max-w-full sm:max-w-[85%] lg:max-w-[75%] mx-auto">
                                    <img 
                                        src={profile.statsImage} 
                                        alt={`${profile.name} Stats`}
                                        className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                                {profile.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
