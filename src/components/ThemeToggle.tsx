import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

function apply(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      apply(stored);
    } else {
      const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      setTheme(systemTheme);
      apply(systemTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!window.localStorage.getItem("theme")) {
        const next = e.matches ? "light" : "dark";
        setTheme(next);
        apply(next);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    apply(next);
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground active:scale-95"
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
