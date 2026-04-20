import { motion } from 'framer-motion';
import TerminalWindow from './common/Window';
import { ExternalLink, Trophy, Code2 } from 'lucide-react';

const CodingProfiles = () => {
    const profiles = [
        {
            name: 'LeetCode',
            username: 'imrajeevnayan',
            url: 'https://leetcode.com/u/imrajeevnayan/',
            color: '#FFA116',
            statsUrl: 'https://leetcard.jacoblin.cool/imrajeevnayan?theme=dark&font=Inter&ext=activity',
            desc: 'Daily problem solver focusing on Data Structures and Algorithms.'
        },
        {
            name: 'GeeksforGeeks',
            username: 'imrajeevnayan',
            url: 'https://www.geeksforgeeks.org/profile/imrajeevnayan',
            color: '#2F8D46',
            statsUrl: 'https://gfgstatscard.vercel.app/imrajeevnayan',
            desc: 'Exploring computer science concepts and competitive programming.'
        }
    ];

    return (
        <section id="coding-profiles" className="section-container border-t border-[var(--glass-border)] bg-transparent">
            <div className="space-y-16">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-6">
                    <div className="space-y-4">
                        <div className="text-orange-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Competitive_Programming_Module</div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none text-[var(--text-main)] font-outfit">
                            Coding <span className="text-shimmer">Profiles</span>
                        </h2>
                    </div>
                    <p className="text-[var(--text-dim)] font-mono text-sm max-w-sm mb-2 opacity-80 backdrop-blur-sm">
                        &gt; Benchmarking technical problem-solving capabilities across leading platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                    {profiles.map((profile, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <TerminalWindow title={`~/profiles/${profile.name.toLowerCase()}.sh`} className="w-full">
                                <div className="p-2 space-y-6">
                                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div 
                                                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform"
                                                style={{ backgroundColor: `${profile.color}20`, border: `1px solid ${profile.color}40` }}
                                            >
                                                {profile.name === 'LeetCode' ? <Trophy size={24} style={{ color: profile.color }} /> : <Code2 size={24} style={{ color: profile.color }} />}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white font-outfit">{profile.name}</h3>
                                                <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">@{profile.username}</span>
                                            </div>
                                        </div>
                                        <a 
                                            href={profile.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-orange-500 hover:text-black transition-all group-hover:border-orange-500/50"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>

                                    <div className="relative overflow-hidden rounded-lg bg-black/40 border border-white/5 p-2">
                                        <img 
                                            src={profile.statsUrl} 
                                            alt={`${profile.name} Stats`}
                                            className="w-full h-auto rounded transition-transform duration-700 group-hover:scale-[1.02]"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>

                                    <p className="text-zinc-500 font-mono text-[11px] leading-relaxed px-2 italic">
                                        // {profile.desc}
                                    </p>
                                </div>
                            </TerminalWindow>
                            
                            {/* Decorative background glow */}
                            <div className="absolute -inset-4 bg-orange-500/5 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
