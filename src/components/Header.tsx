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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'glass-effect py-3 shadow-md' : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link 
            to="hero" 
            smooth={true} 
            className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--brand-accent)] flex items-center justify-center text-white">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-black tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--brand-accent)] transition-colors">Rajeev</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-1">
             {navItems.map((item) => (
                <Link 
                  key={item}
                  to={item.toLowerCase()} 
                  smooth={true} 
                  spy={true}
                  offset={-80}
                  className="text-[11px] font-black uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--brand-accent)] px-4 py-2 rounded-lg transition-all cursor-pointer"
                >
                  {item}
                </Link>
             ))}
          </div>

          <div className="flex items-center gap-4 border-l border-[var(--border-main)] pl-6">
            <button 
              onClick={toggleTheme}
              className="text-[var(--text-primary)] opacity-60 hover:opacity-100 transition-opacity"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <motion.a 
              href="mailto:imrajeevnayan@gmail.com" 
              whileHover={{ scale: 1.05 }}
              whileActive={{ scale: 0.95 }}
              className="hidden sm:inline-flex px-5 py-2 bg-[var(--brand-accent)] text-white text-[11px] font-black uppercase tracking-widest rounded-lg shadow-lg shadow-[var(--brand-accent)]/20"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--bg-main)] border-b border-[var(--border-main)] md:hidden py-8 px-6"
          >
            <div className="flex flex-col gap-6">
               {navItems.map((item) => (
                  <Link 
                    key={item}
                    to={item.toLowerCase()} 
                    smooth={true} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-black uppercase tracking-widest text-[var(--text-secondary)]"
                  >
                    {item}
                  </Link>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;