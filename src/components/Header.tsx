import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Sun, Moon, Clock } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      isScrolled ? 'py-4 translate-y-0' : 'py-8'
    }`}>
      <nav className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-700 ${
          isScrolled ? 'bg-[#030014]/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(3,0,20,0.8)]' : 'bg-transparent border border-transparent'
        }`}>
          <Link to="hero" smooth={true} className="flex items-center gap-4 cursor-pointer group">
            <div className="flex flex-col relative">
              <span className="text-3xl font-black tracking-[-0.05em] text-white group-hover:text-violet-500 transition-all leading-none font-outfit uppercase">
                RAJEEV<span className="text-violet-500">.</span>
              </span>
              <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-violet-500 group-hover:w-full transition-all duration-500" />
            </div>
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
               {['About', 'Projects', 'Contact'].map((item) => (
                 <Link 
                   key={item}
                   to={item.toLowerCase()} 
                   smooth={true} 
                   className="hover:text-violet-500 transition-colors cursor-pointer relative group/link"
                 >
                   {item}
                   <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-violet-500 group-hover/link:w-full transition-all duration-300" />
                 </Link>
               ))}
            </div>
            <div className="hidden md:flex items-center gap-3 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
               <Clock size={10} className="text-[var(--brand-primary)]" />
               <span className="text-zinc-200">{formatDate(time)}</span>
               <span className="text-white/10">|</span>
               <span className="text-[var(--brand-primary)] font-bold">{formatTime(time)}</span>
            </div>

            <button 
              onClick={toggleTheme}
              className="group relative p-2 rounded-full bg-white/5 border border-white/10 text-white hover:border-[var(--brand-primary)]/50 transition-all duration-300 overflow-hidden"
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


            <div className="hidden lg:flex items-center gap-6 border-r border-white/10 pr-6 mr-0">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                 <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest leading-none">
                   System_Stable
                 </span>
               </div>
            </div>

            <a 
              href="https://drive.google.com/file/d/14HzK62uI_0YeoVuKIaG28dhbSvVW-7nA/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex px-8 py-2.5 bg-violet-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-violet-600 transition-all shadow-[0_0_25px_rgba(124,58,237,0.4)]"
            >
              Resume.pdf
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;