import { Github, Linkedin, Instagram, ArrowUp, Code2, Mail } from 'lucide-react';
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
        <footer className="bg-[var(--bg-main)] py-20 border-t border-[var(--border-main)]">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
                    <div className="max-w-xs space-y-6">
                        <p className="text-2xl font-bold text-[var(--text-main)]">
                            Rajeev <span className="text-indigo-600">Nayan</span>
                        </p>
                        <p className="text-sm text-[var(--text-dim)] leading-relaxed font-medium">
                            Engineering high-performance software and scalable digital systems with a focus on modern architectures.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map(({ Icon, href, label }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-[var(--text-dim)] hover:text-indigo-600 transition-colors"
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-main)]">Navigation</h4>
                            <ul className="space-y-4">
                                {['About', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to={item.toLowerCase()} smooth={true} className="text-sm font-medium text-[var(--text-dim)] hover:text-indigo-600 cursor-pointer transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-main)]">Contact</h4>
                            <ul className="space-y-4">
                                <li className="text-sm font-medium text-[var(--text-dim)]">Bengaluru, India</li>
                                <li className="text-sm font-medium text-indigo-600 hover:underline cursor-pointer">imrajeevnayan@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="mt-20 pt-8 border-t border-[var(--border-main)] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm font-medium text-[var(--text-dim)] opacity-60">
                        © {new Date().getFullYear()} Rajeev Nayan. All rights reserved.
                    </p>
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="flex items-center gap-2 group cursor-pointer text-sm font-bold text-[var(--text-dim)] hover:text-indigo-600 transition-colors"
                    >
                       Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;