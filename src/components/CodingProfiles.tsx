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
        <section id="coding-profiles" className="py-24 md:py-32 bg-[var(--bg-main)]">
            <div className="section-container">
                <div className="space-y-4 mb-20 text-center lg:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold">Algorithmic Foundation</h2>
                    <p className="text-[var(--text-secondary)] font-medium max-w-2xl text-lg leading-relaxed">
                        I am passionate about problem-solving and algorithmic efficiency. Here are my current metrics from top competitive platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {profiles.map((profile, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div 
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                                        style={{ backgroundColor: `${profile.color}15`, border: `1px solid ${profile.color}20`, color: profile.color }}
                                    >
                                        {profile.name === 'LeetCode' ? <Trophy size={24} /> : <Code2 size={24} />}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{profile.name}</h3>
                                        <span className="text-sm text-[var(--text-secondary)]">@{profile.username}</span>
                                    </div>
                                </div>
                                <a 
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-[var(--bg-main)] hover:text-[var(--brand-accent)] transition-colors"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <div className="mb-8 overflow-hidden rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)]">
                                <img 
                                    src={profile.statsImage} 
                                    alt={`${profile.name} Stats`}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>

                            <p className="text-[var(--text-secondary)] leading-relaxed">
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
