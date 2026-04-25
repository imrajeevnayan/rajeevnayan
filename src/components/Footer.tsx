import { Github, Linkedin, Instagram, ArrowUp, Code2, Mail, Rocket } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {

    const socialLinks = [
        { Icon: Github, href: "https://github.com/imrajeevnayan", label: 'GitHub' },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/imrajeevnayan/", label: 'LinkedIn' },
        { Icon: Mail, href: "mailto:imrajeevnayan@gmail.com", label: 'Email' },
        { Icon: Code2, href: "https://www.geeksforgeeks.org/profile/imrajeevnayan", label: 'GFG' },
        { Icon: Instagram, href: "https://www.instagram.com/imrajeevnayan/", label: 'Instagram' },
    ];


    return (
        <footer className="bg-[var(--bg-main)] py-24 border-t border-[var(--border-main)] relative overflow-hidden">
            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
                    <div className="max-w-xs space-y-8">
                        <div className="space-y-4">
                            <p className="text-3xl font-black text-gradient flex items-center gap-2">
                                 <Rocket size={28} className="text-[var(--brand-accent)]" />
                                 Rajeev
                            </p>
                            <p className="text-base text-[var(--text-secondary)] leading-relaxed font-medium">
                                Engineering high-performance software and scalable digital systems with a focus on modern architectures.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            {socialLinks.map(({ Icon, href, label }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl bg-[var(--surface-main)] border border-[var(--border-main)] text-[var(--text-secondary)] hover:text-white hover:bg-[var(--brand-accent)] hover:border-[var(--brand-accent)] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-16 md:gap-24 relative z-10">
                        <div className="space-y-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-primary)] opacity-50">Navigation</h4>
                            <ul className="space-y-4">
                                {['About', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link 
                                            to={item.toLowerCase()} 
                                            smooth={true} 
                                            className="text-[15px] font-bold text-[var(--text-secondary)] hover:text-[var(--brand-accent)] cursor-pointer transition-all hover:translate-x-1 inline-block"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-primary)] opacity-50">Contact</h4>
                            <ul className="space-y-4">
                                <li className="text-[15px] font-bold text-[var(--text-secondary)]">Bengaluru, India</li>
                                <li className="text-[15px] font-bold text-[var(--brand-accent)] hover:text-[var(--brand-accent)]/80 cursor-pointer transition-colors break-all">imrajeevnayan@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="mt-20 pt-8 border-t border-[var(--border-main)] flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                    <p className="text-sm font-bold text-[var(--text-secondary)] opacity-50">
                        © {new Date().getFullYear()} Rajeev Nayan. Designed with passion.
                    </p>
                    <Link
                        to="hero"
                        smooth={true}
                        duration={800}
                        className="flex items-center gap-3 group cursor-pointer text-sm font-black text-[var(--text-primary)] hover:text-[var(--brand-accent)] transition-all uppercase tracking-widest bg-[var(--surface-main)] px-6 py-3 rounded-full border border-[var(--border-main)] hover:border-[var(--brand-accent)]/30 shadow-sm"
                    >
                       Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;