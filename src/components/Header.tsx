import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Terminal, Sun, Moon } from 'lucide-react';

import useTheme from '../hooks/useTheme';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <nav className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-xl transition-all duration-500 ${
          isScrolled ? 'bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black dark:bg-zinc-900/80 light:bg-white/80' : 'bg-transparent border border-transparent'
        }`}>
          <Link to="hero" smooth={true} className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              <Terminal size={18} strokeWidth={3} />
            </div>
            <span className="text-sm font-mono font-bold tracking-tighter dark:text-white light:text-zinc-900 uppercase sm:block hidden">
              rajeev@portfolio:~$ <span className="animate-pulse">_</span>
            </span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <button 
              onClick={toggleTheme}
              className="group relative p-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--accent-color)] hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <div className="flex flex-col h-5 w-5 items-center justify-center">
                <motion.div
                  initial={false}
                  animate={{ y: theme === 'dark' ? 0 : -30, opacity: theme === 'dark' ? 1 : 0 }}
                  className="absolute"
                >
                  <Sun size={18} />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ y: theme === 'light' ? 0 : 30, opacity: theme === 'light' ? 1 : 0 }}
                  className="absolute"
                >
                  <Moon size={18} />
                </motion.div>
              </div>
            </button>


            <div className="hidden md:flex items-center gap-6 border-r border-zinc-800 pr-6 mr-0">
               <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                 System Version: 2.0.4
               </span>
            </div>
            <a 
              href="https://drive.google.com/file/d/14HzK62uI_0YeoVuKIaG28dhbSvVW-7nA/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-orange-500 text-black text-[10px] font-mono font-bold uppercase tracking-widest rounded hover:bg-white transition-colors"
            >
              Get_Resume.sh
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
