import { Github, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:text-left">
        <p>&copy; 2026 Zain Ul Abideen Malik. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Zainmalik3618"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 font-semibold transition-colors hover:bg-slate-200 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label="Visit Zain Malik's GitHub profile"
          >
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/zainmalik3618/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 font-semibold transition-colors hover:bg-slate-200 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label="Visit Zain Malik's LinkedIn profile"
          >
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
