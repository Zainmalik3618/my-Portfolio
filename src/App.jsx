import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';

const preloadedProjectImages = new Map();

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    projects.forEach((project) => {
      project.screenshots?.forEach((screenshot) => {
        const src = typeof screenshot === 'string' ? screenshot : screenshot?.src;

        if (!src || preloadedProjectImages.has(src)) return;

        const image = new Image();
        image.decoding = 'async';
        image.src = src;
        preloadedProjectImages.set(src, image);
      });
    });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors duration-500 ease-out dark:bg-slate-950 dark:text-slate-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
