import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Code2 } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const CodingProfiles = () => {
    const { theme } = useTheme();
    const profiles = [
        {
            name: 'LeetCode',
            username: 'imrajeevnayan',
            url: 'https://leetcode.com/u/imrajeevnayan/',
            color: '#FFA116',
            statsUrl: `https://leetcard.jacoblin.cool/imrajeevnayan?theme=${theme === 'dark' ? 'dark' : 'light'}&font=Inter&ext=activity`,
            desc: 'Consistently solving algorithmic challenges to sharpen data structure and problem-solving skills.'
        },
        {
            name: 'GeeksforGeeks',
            username: 'imrajeevnayan',
            url: 'https://www.geeksforgeeks.org/profile/imrajeevnayan',
            color: '#2F8D46',
            statsUrl: 'https://gfgstatscard.vercel.app/imrajeevnayan',
            desc: 'Actively participating in coding contests and contributing to computer science discussions.'
        }
    ];

    return (
        <section id="coding-profiles" className="py-24 md:py-32 bg-[var(--surface-main)]">
            <div className="section-container">
                <div className="space-y-4 mb-20">
                    <h2 className="text-3xl md:text-5xl">Competitive Programming</h2>
                    <p className="text-[var(--text-dim)] font-medium max-w-2xl text-lg">
                        I am passionate about problem-solving and algorithmic efficiency. Here are my current rankings and metrics from top competitive platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {profiles.map((profile, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 card-base bg-[var(--bg-main)] group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div 
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                                        style={{ backgroundColor: `${profile.color}10`, border: `1px solid ${profile.color}20` }}
                                    >
                                        {profile.name === 'LeetCode' ? <Trophy size={22} style={{ color: profile.color }} /> : <Code2 size={22} style={{ color: profile.color }} />}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{profile.name}</h3>
                                        <span className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider">@{profile.username}</span>
                                    </div>
                                </div>
                                <a 
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-[var(--surface-main)] border border-[var(--border-main)] hover:border-indigo-500/50 transition-all shadow-sm"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            </div>

                            <div className="relative overflow-hidden rounded-xl bg-[var(--surface-main)] border border-[var(--border-main)] p-4">
                                <img 
                                    src={profile.statsUrl} 
                                    alt={`${profile.name} Stats`}
                                    className="w-full h-auto rounded transition-transform duration-500 group-hover:scale-[1.01]"
                                    loading="lazy"
                                />
                            </div>

                            <p className="mt-8 text-sm text-[var(--text-dim)] leading-relaxed italic font-medium">
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
