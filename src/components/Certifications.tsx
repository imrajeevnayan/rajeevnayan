import { Award, Terminal as TerminalIcon, ExternalLink } from 'lucide-react';
import TerminalWindow from './common/Window';

const certifications = [
    {
        title: 'Java Performance Certification',
        issuer: 'HackerRank (Basic)',
        link: 'https://www.hackerrank.com/certificates/fba0b12779d0'
    },
    {
        title: 'Problem Solving (Advanced Logic)',
        issuer: 'HackerRank (Basic)',
        link: 'https://www.hackerrank.com/certificates/0a3f58c7e37f'
    },
    {
        title: 'SQL Data Architecture',
        issuer: 'HackerRank (Intermediate)',
        link: 'https://www.hackerrank.com/certificates/cf9c90c9bd72'
    }
];



const Certifications = () => {
    return (
        <section id="certifications" className="section-container border-t border-[var(--glass-border)]">
             <div className="mb-20 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded flex items-center justify-center text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <TerminalIcon size={20} />
                    </div>
                    <div>
                        <div className="text-blue-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Validation_Tokens.gpg</div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[var(--text-main)]">
                            Verified <span className="text-shimmer">Credentials</span>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <TerminalWindow key={index} title={`Auth_Seal_${index}.crt`} delay={index * 0.1}>
                        <a 
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col justify-between h-full space-y-4"
                        >
                            <div className="space-y-4">
                                <div className="p-3 bg-[var(--glass-border)] rounded-lg w-fit text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                                    <Award size={20} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-white uppercase tracking-tight text-sm leading-tight">{cert.title}</h3>
                                    <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{cert.issuer}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-[var(--glass-border)] opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[8px] font-mono font-bold text-blue-500 uppercase tracking-widest">Verify_Chain.sh</span>
                                <ExternalLink size={12} className="text-zinc-600" />
                            </div>
                        </a>
                    </TerminalWindow>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
