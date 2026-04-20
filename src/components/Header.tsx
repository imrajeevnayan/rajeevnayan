import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-[var(--bg-main)]/80 backdrop-blur-lg border-b border-[var(--border-main)] py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="hero" smooth={true} className="text-xl font-bold tracking-tight text-[var(--text-main)] cursor-pointer">
          Rajeev <span className="text-indigo-600">Nayan</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-dim)]">
             {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
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

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-[var(--text-dim)] hover:text-indigo-600 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="mailto:imrajeevnayan@gmail.com" 
              className="hidden sm:block px-5 py-2 bg-[var(--surface-main)] border border-[var(--border-main)] text-sm font-semibold rounded-lg hover:border-indigo-500/50 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;