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

  const handleAction = (a: any) => {
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl shadow-2xl overflow-hidden relative"
          >
            <div className="flex items-center px-4 border-b border-[var(--glass-border)]">
              <Search size={18} className="text-[var(--text-dim)]" />
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent border-none outline-none py-4 px-3 text-[var(--text-main)] font-mono text-sm"
              />
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[var(--glass-border)] rounded text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-widest leading-none">
                <Command size={10} /> k
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="ml-2 p-1 hover:bg-white/5 rounded transition-colors text-[var(--text-dim)]"
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-[350px] overflow-y-auto p-2">
              <div className="px-3 py-2 text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-widest">
                Available Commands
              </div>
              {filteredActions.length > 0 ? (
                filteredActions.map((a, idx) => (
                  <button
                    key={a.id}
                    onClick={() => handleAction(a)}
                    className="w-full flex items-center gap-3 px-3 py-3 hover:bg-[var(--accent-color)]/10 rounded-lg transition-all group group-hover:pl-4 overflow-hidden"
                  >
                    <div className="w-8 h-8 rounded bg-[var(--glass-border)] flex items-center justify-center text-[var(--text-dim)] group-hover:bg-[var(--accent-color)]/20 group-hover:text-orange-500 transition-all">
                      <a.icon size={16} />
                    </div>
                    <span className="flex-1 text-left text-sm font-mono text-[var(--text-dim)] group-hover:text-[var(--text-main)]">
                      {a.label}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Enter ↵
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-[var(--text-dim)] font-mono text-xs">
                  No matching commands found.
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between px-4 py-3 bg-black/20 border-t border-[var(--glass-border)] font-mono">
                <div className="flex items-center gap-4 text-[9px] text-zinc-500 uppercase tracking-widest">
                   <div className="flex items-center gap-1"><span className="p-1 px-1.5 bg-zinc-800 rounded text-zinc-300">↑↓</span> to navigate</div>
                   <div className="flex items-center gap-1"><span className="p-1 px-1.5 bg-zinc-800 rounded text-zinc-300">↵</span> to select</div>
                   <div className="flex items-center gap-1"><span className="p-1 px-1.5 bg-zinc-800 rounded text-zinc-300">Esc</span> to close</div>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
