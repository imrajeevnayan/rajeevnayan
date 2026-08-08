import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';
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

  const navItems = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Architecture', target: 'architecture' },
    { label: 'GitHub', target: 'github' },
    { label: 'Contact', target: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-[var(--glass-bg)] border-b border-[var(--glass-border)] py-2' 
        : 'bg-transparent py-3'
    }`}>
      <nav className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-7">
        <Link 
            to="hero" 
            smooth={true} 
            className="flex items-center gap-2 cursor-pointer group"
        >
          <Code2 size={16} className="text-[var(--brand-accent)]" />
          <span className="text-[14px] font-semibold tracking-tight text-[var(--text-primary)]">Rajeev Nayan</span>
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
             {navItems.map((item) => (
                <Link 
                  key={item.target}
                  to={item.target} 
                  smooth={true} 
                  spy={true}
                  offset={-70}
                  activeClass="text-[var(--brand-accent)] font-medium"
                  className="text-[12px] font-normal text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3 py-1 transition-all cursor-pointer"
                >
                  {item.label}
                </Link>
             ))}
          </div>

          <div className="flex items-center gap-4 border-l border-[var(--border-main)] pl-6 h-6">
            <button 
              onClick={toggleTheme}
              className="text-[var(--text-primary)] opacity-60 hover:opacity-100 transition-opacity flex items-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <button 
              className="md:hidden flex items-center text-[var(--text-primary)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>

            <a 
              href="mailto:imrajeevnayan@gmail.com" 
              className="hidden sm:inline-flex text-[12px] font-normal text-[var(--color-link-blue)] hover:underline"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-[var(--bg-main)]/95 backdrop-blur-md border-b border-[var(--border-main)] md:hidden py-6 px-6"
          >
            <div className="flex flex-col gap-4">
               {navItems.map((item) => (
                  <Link 
                    key={item.target}
                    to={item.target} 
                    smooth={true} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[14px] font-medium tracking-normal text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                  >
                    {item.label}
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