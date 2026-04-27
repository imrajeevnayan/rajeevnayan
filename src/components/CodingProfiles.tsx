import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Code2, Star, Zap, Activity } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const CodingProfiles = () => {
    const { theme } = useTheme();
    
    const profiles = [
        {
            name: 'LeetCode',
            username: 'imrajeevnayan',
            url: 'https://leetcode.com/u/imrajeevnayan/',
            color: '#FFA116',
            stats: [
                { label: 'Solved', value: '450+', icon: Activity },
                { label: 'Rank', value: 'Top 15%', icon: Trophy },
                { label: 'Contests', value: '30+', icon: Zap }
            ],
            desc: 'Consistently solving algorithmic challenges to sharpen data structure and problem-solving skills.'
        },
        {
            name: 'GeeksforGeeks',
            username: 'imrajeevnayan',
            url: 'https://www.geeksforgeeks.org/profile/imrajeevnayan',
            color: '#2F8D46',
            stats: [
                { label: 'Score', value: '1200+', icon: Star },
                { label: 'Solved', value: '300+', icon: Code2 },
                { label: 'Articles', value: '5+', icon: Trophy }
            ],
            desc: 'Deep diving into advanced computer science fundamentals and participating in global coding challenges.'
        }
    ];

    return (
        <section id="coding-profiles" className="py-24 md:py-32 bg-[var(--surface-main)] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[var(--brand-accent)]/5 to-transparent opacity-50" />

            <div className="section-container relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4 mb-20 text-center"
                >
                    <div className="text-[var(--brand-accent)] font-bold text-xs uppercase tracking-[0.3em] mb-4">
                        Competitive Edge
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Algorithmic <span className="text-gradient">Prowess</span></h2>
                    <p className="text-[var(--text-secondary)] font-medium max-w-2xl text-xl leading-relaxed mx-auto pt-4">
                        I am passionate about problem-solving and algorithmic efficiency, maintaining an active presence on top competitive platforms.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {profiles.map((profile, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-10 card-airbnb card-premium-hover bg-[var(--bg-main)] border border-[var(--border-main)] group relative overflow-hidden"
                        >
                            {/* Inner Glow */}
                            <div 
                                className="absolute -right-20 -top-20 w-64 h-64 blur-[100px] opacity-10 transition-opacity group-hover:opacity-20"
                                style={{ backgroundColor: profile.color }}
                            />

                            <div className="flex items-start justify-between mb-12">
                                <div className="flex items-center gap-6">
                                    <div 
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-500"
                                        style={{ 
                                            background: `linear-gradient(135deg, ${profile.color}20, ${profile.color}40)`,
                                            border: `1px solid ${profile.color}40` 
                                        }}
                                    >
                                        {profile.name === 'LeetCode' ? 
                                            <Trophy size={28} style={{ color: profile.color }} /> : 
                                            <Code2 size={28} style={{ color: profile.color }} />
                                        }
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-bold tracking-tight">{profile.name}</h3>
                                        <div className="px-2.5 py-0.5 bg-[var(--surface-main)] rounded-full text-[10px] font-bold text-[var(--brand-accent)] uppercase tracking-widest inline-block border border-[var(--border-main)]">
                                            @{profile.username}
                                        </div>
                                    </div>
                                </div>
                                <a 
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl bg-[var(--surface-main)] border border-[var(--border-main)] hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] transition-all shadow-sm group/btn"
                                >
                                    <ExternalLink size={20} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-6 mb-10">
                                {profile.stats.map((stat, index) => (
                                    <div key={index} className="space-y-2 p-4 rounded-2xl bg-[var(--surface-main)] border border-[var(--border-main)] hover:border-[var(--brand-accent)]/30 transition-colors">
                                        <div className="flex items-center gap-2 text-[var(--text-dim)] font-bold text-[10px] uppercase tracking-wider">
                                            <stat.icon size={12} style={{ color: profile.color }} />
                                            {stat.label}
                                        </div>
                                        <div className="text-xl font-bold tracking-tight">{stat.value}</div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-[var(--text-secondary)] font-medium leading-relaxed italic border-l-2 border-[var(--brand-accent)]/30 pl-4">
                                "{profile.desc}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
