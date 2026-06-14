import { Moon, Sun } from 'lucide-react';

function ThemeToggle({ theme, onToggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm smooth-lift focus-ring hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-500/60 dark:hover:text-emerald-300"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggle;
