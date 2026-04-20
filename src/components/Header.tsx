import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Terminal, Sun, Moon, Clock } from 'lucide-react';

import useTheme from '../hooks/useTheme';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: '2-digit' 
    }).toUpperCase();
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <nav className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-xl transition-all duration-500 ${
          isScrolled ? 'bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black dark:bg-zinc-900/80 light:bg-white/80' : 'bg-transparent border border-transparent'
        }`}>
          <Link to="hero" smooth={true} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 overflow-hidden border border-orange-500/20 group-hover:scale-105 transition-all shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent animate-pulse" />
              <Terminal size={22} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight dark:text-white light:text-zinc-900 group-hover:text-orange-500 transition-colors leading-none">
                Rajeev<span className="text-orange-500">.Nayan</span>
              </span>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em] mt-1">
                Full-Stack Developer
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex items-center gap-3 px-3 py-1.5 bg-black/20 rounded border border-white/5 font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
               <Clock size={10} className="text-orange-500" />
               <span className="text-zinc-200">{formatDate(time)}</span>
               <span className="text-orange-500/50">|</span>
               <span className="text-orange-500 font-bold">{formatTime(time)}</span>
            </div>

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


            <div className="hidden lg:flex items-center gap-6 border-r border-[var(--glass-border)] pr-6 mr-0">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                 <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest leading-none">
                   System_Stable
                 </span>
               </div>
               <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest leading-none">
                 v2.4.0-STABLE
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