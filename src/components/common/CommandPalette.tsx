import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, Moon, Sun, ArrowRight, X } from 'lucide-react';
import useTheme from '../../hooks/useTheme';


import { scroller } from 'react-scroll';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { theme, toggleTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setSearch('');
    }
  }, [isOpen]);

  const actions = [
    { id: 'about', label: 'Go to About', icon: ArrowRight, section: 'about' },
    { id: 'experience', label: 'Go to Experience', icon: ArrowRight, section: 'experience' },
    { id: 'skills', label: 'Go to Skills', icon: ArrowRight, section: 'skills' },
    { id: 'projects', label: 'Go to Projects', icon: ArrowRight, section: 'projects' },
    { id: 'contact', label: 'Go to Contact', icon: ArrowRight, section: 'contact' },
    { id: 'theme', label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`, icon: theme === 'dark' ? Sun : Moon, action: toggleTheme },
  ];

  const filteredActions = actions.filter(a => 
    a.label.toLowerCase().includes(search.toLowerCase())
  );

  interface Action {
    id: string;
    label: string;
    icon: React.ElementType;
    section?: string;
    action?: () => void;
  }

  const handleAction = (a: Action) => {
    if (a.section) {
      scroller.scrollTo(a.section, { smooth: true, duration: 800, offset: -50 });
    }
    if (a.action) a.action();
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-[20vh] px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl bg-[var(--surface-card)] border border-[var(--border-main)] rounded-lg overflow-hidden relative backdrop-blur-md"
          >
            <div className="flex items-center px-4 border-b border-[var(--border-main)]">
              <Search size={16} strokeWidth={1.5} className="text-[var(--text-muted)]" />
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent border-none outline-none py-3.5 px-3 text-[var(--text-primary)] text-sm font-light"
              />
              <div className="flex items-center gap-1 px-2 py-0.5 bg-[var(--bg-main)] border border-[var(--border-main)] rounded text-[9px] font-medium text-[var(--text-secondary)] uppercase tracking-wide leading-none">
                <Command size={9} strokeWidth={1.5} /> k
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="ml-2 p-1.5 hover:bg-[var(--bg-main)] rounded transition-colors text-[var(--text-muted)]"
              >
                <X size={14} strokeWidth={1.5} />
              </button>
            </div>

            <div className="max-h-[300px] overflow-y-auto p-2">
              <div className="px-3 py-1.5 text-[9px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                Available Commands
              </div>
              {filteredActions.length > 0 ? (
                filteredActions.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => handleAction(a)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-[var(--bg-main)] rounded-md transition-all group overflow-hidden"
                  >
                    <div className="w-8 h-8 rounded bg-[var(--bg-main)] flex items-center justify-center text-[var(--text-secondary)] group-hover:bg-[var(--brand-accent)]/10 group-hover:text-[var(--color-button-blue)] transition-all">
                      <a.icon size={14} strokeWidth={1.5} />
                    </div>
                    <span className="flex-1 text-left text-sm font-light text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                      {a.label}
                    </span>
                    <span className="text-[9px] font-medium text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                      Enter ↵
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-[var(--text-muted)] text-xs font-light">
                  No matching commands found.
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-main)] border-t border-[var(--border-main)]">
                <div className="flex flex-wrap items-center gap-4 text-[9px] text-[var(--text-muted)] uppercase tracking-wide">
                   <div className="flex items-center gap-1"><span className="px-1.5 py-0.5 bg-[var(--surface-card)] border border-[var(--border-main)] rounded text-[var(--text-secondary)] font-semibold">↑↓</span> to navigate</div>
                   <div className="flex items-center gap-1"><span className="px-1.5 py-0.5 bg-[var(--surface-card)] border border-[var(--border-main)] rounded text-[var(--text-secondary)] font-semibold">↵</span> to select</div>
                   <div className="flex items-center gap-1"><span className="px-1.5 py-0.5 bg-[var(--surface-card)] border border-[var(--border-main)] rounded text-[var(--text-secondary)] font-semibold">Esc</span> to close</div>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
