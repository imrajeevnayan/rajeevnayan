import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useTheme from '../hooks/useTheme';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-[var(--bg-main)]/80 backdrop-blur-lg border-b border-[var(--border-main)] py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link 
            to="hero" 
            smooth={true} 
            className="text-xl font-bold tracking-tight text-[var(--text-main)] cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <Rocket size={16} />
          </div>
          <span>Rajeev <span className="text-indigo-600">Nayan</span></span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-[var(--text-dim)] uppercase tracking-widest">
             {navItems.map((item) => (
               <Link 
                 key={item}
                 to={item.toLowerCase()} 
                 smooth={true} 
                 className="hover:text-indigo-600 transition-colors cursor-pointer"
               >
                 {item}
               </Link>
             ))}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2.5 bg-[var(--surface-main)] border border-[var(--border-main)] rounded-xl text-[var(--text-dim)] hover:text-indigo-600 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2.5 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-500/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <a 
              href="mailto:imrajeevnayan@gmail.com" 
              className="hidden lg:block px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 transition-all active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[72px] bg-[var(--bg-main)] z-[90] md:hidden p-8 flex flex-col space-y-8"
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold text-[var(--text-main)] hover:text-indigo-600 transition-colors uppercase tracking-tighter"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 0.3 }}
               className="pt-8 border-t border-[var(--border-main)]"
            >
               <p className="text-xs font-bold text-[var(--text-dim)] uppercase tracking-[0.3em] mb-4">Availability</p>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-[var(--text-main)]">Looking for new opportunities</span>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;