import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const sectionMotion = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const featuredProjects = projects.slice(0, 2);
  const additionalProjects = projects.slice(2);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Selected work and learning projects.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Focused on useful product flows, reliable backend architecture, and clean interfaces.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionMotion}
          className="mt-10 grid gap-6"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}

          <AnimatePresence initial={false}>
            {showAllProjects && (
              <motion.div
                id="additional-projects"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 overflow-hidden"
              >
                {additionalProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {additionalProjects.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((current) => !current)}
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white smooth-lift hover:bg-emerald-700 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-100"
              aria-expanded={showAllProjects}
              aria-controls="additional-projects"
            >
              {showAllProjects ? 'Show fewer projects' : `View all projects (${projects.length})`}
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
