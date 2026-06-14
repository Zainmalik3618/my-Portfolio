import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const sectionMotion = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

function Projects() {
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
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
