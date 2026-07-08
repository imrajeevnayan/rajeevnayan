import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useTheme from '../hooks/useTheme';
import MotionToggle from './motion-toggle';

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
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'glass-effect py-2.5' : 'bg-transparent py-4'
    }`}>
      <nav className="max-w-full mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-7">
        <Link 
            to="hero" 
            smooth={true} 
            className="flex items-center gap-2 cursor-pointer group"
        >
          <Rocket size={18} className="text-[var(--brand-accent)]" />
          <span className="text-[15px] font-semibold tracking-tight text-[var(--text-primary)]">Rajeev Nayan</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
             {navItems.map((item) => (
                <Link 
                  key={item}
                  to={item.toLowerCase()} 
                  smooth={true} 
                  spy={true}
                  offset={-60}
                  className="text-sm font-medium text-[var(--text-primary)] opacity-80 hover:opacity-100 hover:text-[var(--brand-accent)] px-3 py-1 transition-all cursor-pointer"
                >
                  {item}
                </Link>
             ))}
          </div>

          <div className="flex items-center gap-4 border-l border-[var(--border-main)] pl-6 h-7">
            <MotionToggle className="mr-2" />
            <button 
              onClick={toggleTheme}
              className="text-[var(--text-primary)] opacity-60 hover:opacity-100 transition-opacity flex items-center"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button 
              className="md:hidden flex items-center text-[var(--text-primary)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <a 
              href="mailto:imrajeevnayan@gmail.com" 
              className="hidden sm:inline-flex px-4 py-1.5 bg-[var(--color-button-blue)] text-white text-xs font-medium rounded-full transition-all hover:bg-[var(--color-deep-link-blue)]"
            >
              Contact
            </a>
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