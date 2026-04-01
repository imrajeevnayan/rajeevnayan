import React from 'react';
import { Link } from 'react-scroll';
import { Home, User, Briefcase, Code, Terminal, Send } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'projects', icon: Terminal, label: 'Projects' },
  { id: 'contact', icon: Send, label: 'Contact' },
];

const VerticalNav: React.FC = () => {
  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.id}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active"
          className="group relative flex items-center justify-center w-12 h-12 bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] rounded-full cursor-pointer hover:border-orange-500/50 transition-all duration-300"
        >
          <item.icon size={20} className="text-[var(--text-dim)] group-hover:text-orange-500 transition-colors" />
          <span className="absolute right-14 px-2 py-1 bg-[var(--bg-main)] border border-[var(--glass-border)] rounded text-xs text-[var(--text-main)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">

            {item.label}
          </span>
          <div className="active-indicator absolute -right-1 w-1 h-1 bg-orange-500 rounded-full scale-0 group-[.active]:scale-100 transition-transform" />
        </Link>
      ))}
    </nav>
  );
};

export default VerticalNav;
