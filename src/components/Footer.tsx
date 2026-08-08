import { Github, Linkedin, Instagram, ArrowUp, Code2, Mail, Rocket, Trophy } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    const socialLinks = [
        { Icon: Github, href: "https://github.com/imrajeevnayan", label: 'GitHub' },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/imrajeevnayan/", label: 'LinkedIn' },
        { Icon: Mail, href: "mailto:imrajeevnayan@gmail.com", label: 'Email' },
        { Icon: Trophy, href: "https://leetcode.com/u/imrajeevnayan/", label: 'LeetCode' },
        { Icon: Code2, href: "https://www.geeksforgeeks.org/profile/imrajeevnayan", label: 'GFG' },
        { Icon: Instagram, href: "https://www.instagram.com/imrajeevnayan/", label: 'Instagram' },
    ];

    return (
        <footer className="bg-[var(--bg-alternate)] py-12 md:py-16 border-t border-[var(--border-main)] relative overflow-hidden">
            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 pb-10 border-b border-[var(--border-main)]">
                    <div className="max-w-xs space-y-6">
                        <div className="space-y-3">
                            <p className="text-xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2 font-display">
                                 <Rocket size={18} className="text-[var(--color-electric-blue)]" strokeWidth={1.5} />
                                 Rajeev Nayan
                            </p>
                            <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed font-normal font-sans">
                                Engineering high-performance software and scalable digital systems with a focus on modern architectures.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            {socialLinks.map(({ Icon, href, label }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--surface-card)] border border-[var(--border-main)] text-[var(--text-secondary)] hover:text-[var(--color-electric-blue)] hover:border-[var(--color-electric-blue)] transition-all duration-200"
                                    aria-label={label}
                                >
                                    <Icon size={14} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-16 md:gap-24 relative z-10">
                        <div className="space-y-4">
                            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-[var(--text-primary)] opacity-80">Navigation</h4>
                            <ul className="space-y-2.5">
                                {['About', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link 
                                            to={item.toLowerCase()} 
                                            smooth={true} 
                                            className="text-[12px] font-normal text-[var(--text-secondary)] hover:text-[var(--color-link-blue)] cursor-pointer transition-colors inline-block"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-[var(--text-primary)] opacity-80">Contact</h4>
                            <ul className="space-y-2.5">
                                <li className="text-[12px] font-normal text-[var(--text-secondary)]">Bengaluru, India</li>
                                <li className="text-[12px] font-normal text-[var(--color-link-blue)] hover:underline cursor-pointer transition-colors break-all">imrajeevnayan@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                    <p className="text-[12px] font-normal text-[var(--text-secondary)] leading-relaxed max-w-2xl text-left">
                        Copyright © {new Date().getFullYear()} Rajeev Nayan. Todos los derechos reservados. El uso de este sitio web constituye la aceptación de los términos de diseño de Apple (España).
                    </p>
                    <Link
                        to="hero"
                        smooth={true}
                        duration={800}
                        className="flex items-center gap-2 group cursor-pointer text-[12px] font-medium text-[var(--text-primary)] hover:text-[var(--color-link-blue)] transition-all uppercase tracking-wider bg-[var(--surface-card)] px-4 py-2 rounded-full border border-[var(--border-main)]"
                    >
                       Back to top <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;