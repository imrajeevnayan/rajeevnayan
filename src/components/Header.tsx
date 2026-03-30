import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Magnetic from './common/Magnetic';

const Header = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'Trajectory', to: 'experience' },
    { name: 'Ecosystem', to: 'skills' },
    { name: 'Solutions', to: 'projects' },
    { name: 'Connect', to: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <nav className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          isScrolled ? 'glass-panel bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border-white/20 shadow-2xl' : 'bg-transparent border-transparent'
        }`}>
          <Magnetic>
            <Link to="home" smooth={true} className="text-xl font-black tracking-tighter cursor-pointer dark:text-white uppercase">
              R<span className="text-blue-600">.</span>Nayan
            </Link>
          </Magnetic>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  offset={-100}
                  className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer focus:outline-none focus:text-blue-600"
                  activeClass="text-blue-600 dark:text-white"
                  spy={true}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-8 border-l border-slate-200 dark:border-white/10">
              <button 
                onClick={toggleTheme}
                className="p-2 text-slate-500 hover:text-blue-600 transition-colors"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Magnetic>
                <a 
                  href="https://drive.google.com/file/d/14HzK62uI_0YeoVuKIaG28dhbSvVW-7nA/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-sm hover:shadow-md"
                  aria-label="Download Resume"
                >
                  Resume
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="p-2">{isDark ? <Sun size={20} /> : <Moon size={20} />}</button>
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className="md:hidden fixed inset-x-6 top-24 p-8 glass-panel rounded-[2rem] z-50 border-white/20"
            >
               <div className="flex flex-col gap-6 text-center">
                  {menuItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      smooth={true}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-black uppercase tracking-tighter"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a href="#" className="py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs">Download CV</a>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;