import React from 'react';
import { Github, Linkedin, Code2, Instagram } from 'lucide-react';
import Magnetic from './common/Magnetic';

const Footer = () => {
    const socialLinks = [
        { Icon: Github, href: "https://github.com/imrajeevnayan" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/imrajeevnayan/" },
        { Icon: Instagram, href: "https://www.instagram.com/imrajeevnayan/" },
        { Icon: Code2, href: "https://leetcode.com/u/imrajeevnayan/" }
    ];

    return (
        <footer className="bg-transparent py-12 relative overflow-hidden border-t border-gray-100 dark:border-white/5 mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-1">Rajeev Nayan</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            © {new Date().getFullYear()} Build with Passion.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        {socialLinks.map(({ Icon, href }, idx) => (
                            <Magnetic key={idx}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                                >
                                    <Icon size={22} />
                                </a>
                            </Magnetic>
                        ))}
                    </div>

                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest cursor-pointer hover:underline">
                        Back to top ↑
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;