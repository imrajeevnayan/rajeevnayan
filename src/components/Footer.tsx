import { Github, Linkedin, Instagram, ArrowUp, Code2, Mail, Rocket } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    const socialLinks = [
        { Icon: Github, href: "https://github.com/imrajeevnayan", label: 'GitHub' },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/imrajeevnayan/", label: 'LinkedIn' },
        { Icon: Mail, href: "mailto:rajeevnayan709@gmail.com", label: 'Email' },
        { Icon: Code2, href: "https://www.geeksforgeeks.org/profile/imrajeevnayan", label: 'GFG' },
        { Icon: Instagram, href: "https://www.instagram.com/imrajeevnayan/", label: 'Instagram' },
    ];

    return (
        <footer className="bg-[var(--surface-card)] py-20 md:py-24 border-t border-[var(--border-main)] relative overflow-hidden">
            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
                    <div className="max-w-xs space-y-6">
                        <div className="space-y-3">
                            <p className="text-xl font-bold tracking-appleHeading text-[var(--text-primary)] flex items-center gap-2">
                                 <Rocket size={20} className="text-[var(--color-button-blue)]" strokeWidth={1.5} />
                                 Rajeev
                            </p>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                                Engineering high-performance software and scalable digital systems with a focus on modern architectures.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ Icon, href, label }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--surface-card)] border border-[var(--border-main)] text-[var(--text-secondary)] hover:text-[var(--color-button-blue)] hover:border-[var(--brand-accent)] transition-all duration-200"
                                    aria-label={label}
                                >
                                    <Icon size={16} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-16 md:gap-24 relative z-10">
                        <div className="space-y-6">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] opacity-60">Navigation</h4>
                            <ul className="space-y-3">
                                {['About', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link 
                                            to={item.toLowerCase()} 
                                            smooth={true} 
                                            className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--color-deep-link-blue)] cursor-pointer transition-colors inline-block"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] opacity-60">Contact</h4>
                            <ul className="space-y-3">
                                <li className="text-sm font-light text-[var(--text-secondary)]">Bengaluru, India</li>
                                <li className="text-sm font-light text-[var(--color-deep-link-blue)] hover:underline cursor-pointer transition-colors break-all">rajeevnayan709@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 pt-8 border-t border-[var(--border-main)] flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                    <p className="text-xs font-light text-[var(--text-secondary)] opacity-60">
                        © {new Date().getFullYear()} Rajeev Nayan. Designed with passion.
                    </p>
                    <Link
                        to="hero"
                        smooth={true}
                        duration={800}
                        className="flex items-center gap-2 group cursor-pointer text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--color-deep-link-blue)] transition-all uppercase tracking-wider bg-[var(--surface-card)] px-5 py-2.5 rounded-full border border-[var(--border-main)]"
                    >
                       Back to top <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;