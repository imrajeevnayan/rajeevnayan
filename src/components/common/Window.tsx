import React from 'react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  delay?: number;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ children, title, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`glass-window ${className}`}
    >
      <div className="traffic-light flex justify-between items-center whitespace-nowrap">
        <div className="flex gap-2">
          <div className="dot dot-red" />
          <div className="dot dot-yellow" />
          <div className="dot dot-green" />
        </div>
        {title && (
          <div className="absolute left-1/2 -translate-x-1/2 text-[10px] font-mono text-[var(--text-dim)] hidden sm:block uppercase tracking-widest opacity-60">
            {title}
          </div>
        )}
      </div>
      <div className="p-4 md:p-6 overflow-auto bg-transparent">
        {children}
      </div>
    </motion.div>
  );
};


export default TerminalWindow;

