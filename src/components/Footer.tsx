import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const LeetCodeIcon = ({ size = 18 }: { size?: number }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="currentColor"
    >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-2.636 2.635a1.24 1.24 0 0 0 0 1.756l.004.004a1.24 1.24 0 0 0 1.756 0l2.636-2.636a1.372 1.372 0 0 0 0-1.943l-.004-.004A1.37 1.37 0 0 0 13.483 0zm-3.728 5.76a1.1 1.1 0 0 0-.771.321L2.1 12.965a1.282 1.282 0 0 0 0 1.815l4.936 4.937a1.282 1.282 0 0 0 1.815 0l6.109-6.109a1.1 1.1 0 0 0 0-1.556l-1.414-1.414a1.1 1.1 0 0 0-1.556 0L10.36 12.27l-1.414-1.414L11.756 8a1.102 1.102 0 0 0 0-1.556l-.771-.771a1.1 1.1 0 0 0-.771-.321zM18.8 8.6a1.1 1.1 0 0 0-.771.321l-1.414 1.414a1.1 1.1 0 0 0 0 1.556l1.414 1.414a1.1 1.1 0 0 0 1.556 0l1.414-1.414a1.1 1.1 0 0 0 0-1.556L19.57 8.92a1.1 1.1 0 0 0-.771-.321zM5.937 13.371l1.414 1.414L5.937 16.2l-1.414-1.414 1.414-1.414z"/>
    </svg>
);

const Footer = () => {

    const socialLinks = [
        { Icon: Github, href: "https://github.com/imrajeevnayan" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/imrajeevnayan/" },
        { Icon: Instagram, href: "https://www.instagram.com/imrajeevnayan/" },
        { Icon: LeetCodeIcon, href: "https://leetcode.com/u/imrajeevnayan/" }
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