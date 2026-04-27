import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Code2 } from 'lucide-react';

const CodingProfiles = () => {
    const profiles = [
        {
            name: 'LeetCode',
            username: 'imrajeevnayan',
            url: 'https://leetcode.com/u/imrajeevnayan/',
            color: '#FFA116',
            statsImage: 'https://leetcard.jacoblin.cool/imrajeevnayan?theme=dark&font=Outfit&ext=activity',
            desc: 'Solving complex algorithmic challenges with a focus on optimization and system performance.'
        },
        {
            name: 'GeeksforGeeks',
            username: 'imrajeevnayan',
            url: 'https://www.geeksforgeeks.org/profile/imrajeevnayan',
            color: '#2F8D46',
            statsImage: 'https://gfgstatscard.vercel.app/imrajeevnayan',
            desc: 'Contributing to computer science discussions and participating in global challenges.'
        }
    ];

    return (
        <section id="coding-profiles" className="py-32 md:py-48 bg-[var(--bg-main)]">
            <div className="section-container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4 mb-24"
                >
                    <span className="badge-premium">Algorithmic Foundation</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Live <span className="text-gradient">Performance</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {profiles.map((profile, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="premium-card p-10 group"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-5">
                                    <div 
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all group-hover:scale-110"
                                        style={{ backgroundColor: `${profile.color}15`, border: `1px solid ${profile.color}20`, color: profile.color }}
                                    >
                                        {profile.name === 'LeetCode' ? <Trophy size={22} /> : <Code2 size={22} />}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black tracking-tight">{profile.name}</h3>
                                        <span className="text-xs font-bold text-[var(--text-secondary)] opacity-70 tracking-widest uppercase">@{profile.username}</span>
                                    </div>
                                </div>
                                <a 
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-main)] hover:text-[var(--brand-accent)] hover:border-[var(--brand-accent)]/50 transition-all"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            </div>

                            <div className="mb-10 overflow-hidden rounded-2xl border border-[var(--border-main)] bg-[var(--bg-main)] group-hover:border-[var(--brand-accent)]/20 transition-all">
                                <img 
                                    src={profile.statsImage} 
                                    alt={`${profile.name} Stats`}
                                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                                    loading="lazy"
                                />
                            </div>

                            <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium">
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
