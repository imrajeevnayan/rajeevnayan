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
      if (window.scrollY > 50 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'glass-airbnb py-3 shadow-lg border-b border-[var(--border-main)]' : 'bg-transparent py-5'
    }`}>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute top-0 left-0 h-[2px] bg-[var(--brand-accent)] z-[101]"
        style={{ width: `${Math.min(100, (isScrolled ? 100 : 0))}%` }} // Simplified for now, can use useScroll
      />

      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link 
            to="hero" 
            smooth={true} 
            spy={true}
            className="text-xl font-bold tracking-tight text-[var(--brand-accent)] cursor-pointer flex items-center gap-2 group"
        >
          <Rocket size={28} className="fill-[var(--brand-accent)] group-hover:animate-bounce transition-all" />
          <span className="text-[22px] font-bold tracking-[-0.44px] text-[var(--brand-accent)]">Rajeev</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
             {navItems.map((item) => (
                <Link 
                  key={item}
                  to={item.toLowerCase()} 
                  smooth={true} 
                  spy={true}
                  activeClass="nav-link-active"
                  offset={-80}
                  className="hover:bg-[var(--palette-light-surface)] px-4 py-2 rounded-full transition-all cursor-pointer relative group"
                >
                  {item}
                </Link>
             ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileActive={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-[var(--palette-light-surface)] text-[var(--text-primary)] transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <button 
              className="md:hidden p-2 bg-[var(--bg-main)] border border-[var(--border-main)] rounded-full shadow-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <motion.a 
              href="mailto:imrajeevnayan@gmail.com" 
              whileHover={{ scale: 1.05 }}
              whileActive={{ scale: 0.95 }}
              className="hidden sm:inline-flex px-6 py-2 bg-[var(--brand-accent)] text-white text-sm font-semibold rounded-full hover:bg-[var(--palette-deep-rausch)] transition-all shadow-md hover:shadow-lg"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 w-full bg-[var(--bg-main)] border-b border-[var(--border-main)] shadow-xl md:hidden py-6 px-6"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[18px] font-medium text-[var(--text-primary)] py-3 px-4 hover:bg-[var(--palette-light-surface)] rounded-xl transition-colors"
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