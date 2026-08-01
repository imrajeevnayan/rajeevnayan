import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
let globalTheme: Theme = 'dark';
const listeners = new Set<(theme: Theme) => void>();

if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme === 'light' || savedTheme === 'dark') {
    globalTheme = savedTheme;
  } else {
    globalTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(globalTheme);

  useEffect(() => {
    const listener = (newTheme: Theme) => setTheme(newTheme);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = globalTheme === 'dark' ? 'light' : 'dark';
    globalTheme = nextTheme;
    listeners.forEach(listener => listener(nextTheme));
  };

  return { theme, toggleTheme };
};

export default useTheme;
