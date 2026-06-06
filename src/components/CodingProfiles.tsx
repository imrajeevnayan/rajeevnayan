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
            desc: 'Competitive Programming - 400+ problems solved on LeetCode with a focus on DSA, optimization, and system performance.'
        },
        {
            name: 'GeeksforGeeks',
            username: 'imrajeevnayan',
            url: 'https://www.geeksforgeeks.org/profile/imrajeevnayan',
            color: '#2F8D46',
            statsImage: 'https://gfgstatscard.vercel.app/imrajeevnayan',
            desc: 'Open Source Contributor - 350+ problems solved on GeeksforGeeks, contributing to computer science and data structures.'
        }
    ];

    return (
        <section id="coding-profiles" className="py-20 md:py-28 bg-[var(--bg-main)]">
            <div className="section-container">
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="space-y-3 mb-8 md:mb-12"
                >
                    <span className="badge-premium">Algorithmic Foundation</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-appleHeading text-[var(--text-primary)]">Live <span className="text-gradient">Performance</span></h2>
                </motion.div>
 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {profiles.map((profile, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="premium-card p-6 md:p-8 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-lg group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div 
                                            className="w-10 h-10 rounded-md flex items-center justify-center text-white transition-all group-hover:scale-105"
                                            style={{ backgroundColor: `${profile.color}15`, border: `1px solid ${profile.color}20`, color: profile.color }}
                                        >
                                            {profile.name === 'LeetCode' ? <Trophy size={18} strokeWidth={1.5} /> : <Code2 size={18} strokeWidth={1.5} />}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold tracking-appleHeading text-[var(--text-primary)]">{profile.name}</h3>
                                            <span className="text-[10px] font-medium text-[var(--text-secondary)] tracking-wider uppercase">@{profile.username}</span>
                                        </div>
                                    </div>
                                    <a 
                                        href={profile.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--surface-card)] border border-[var(--border-main)] text-[var(--text-secondary)] hover:text-[var(--color-button-blue)] hover:border-[var(--brand-accent)] transition-all duration-200"
                                    >
                                        <ExternalLink size={16} strokeWidth={1.5} />
                                    </a>
                                </div>

                                <div className="mb-6 overflow-hidden rounded-md border border-[var(--border-main)] bg-[var(--surface-card)] group-hover:border-[var(--brand-accent)] transition-all">
                                    <img 
                                        src={profile.statsImage} 
                                        alt={`${profile.name} Stats`}
                                        className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
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
