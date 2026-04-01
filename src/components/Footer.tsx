import { Github, Linkedin, Code2, Instagram, ArrowUp } from 'lucide-react';

import { Link } from 'react-scroll';

const Footer = () => {
    const socialLinks = [
        { Icon: Github, href: "https://github.com/imrajeevnayan" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/imrajeevnayan/" },
        { Icon: Instagram, href: "https://www.instagram.com/imrajeevnayan/" },
        { Icon: Code2, href: "https://leetcode.com/u/imrajeevnayan/" }
    ];

    return (
        <footer className="bg-transparent py-16 border-t border-white/5 mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left space-y-2">
                        <p className="text-xl font-black text-white uppercase tracking-tighter">rajeev@portfolio:~$ exit</p>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                            © {new Date().getFullYear()} System_Log: All Rights Reserved.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-zinc-900 border border-white/5 rounded flex items-center justify-center text-zinc-500 hover:text-orange-500 hover:border-orange-500/50 transition-all"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>

                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="flex items-center gap-2 text-[10px] font-mono font-bold text-orange-500 uppercase tracking-widest cursor-pointer hover:text-white transition-colors group"
                    >
                        <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                        Run_ScrollTop.sh
                    </Link>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
                    <div>Latency: 12ms</div>
                    <div>Status: Deployment_Success</div>
                    <div>Environment: Production_V1.0.2</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;