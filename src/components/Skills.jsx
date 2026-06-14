import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const sectionMotion = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

function Skills() {
  return (
    <section id="skills" className="bg-white py-20 dark:bg-slate-900/30">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tools and technologies I work with.</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionMotion}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-semibold text-slate-700 shadow-sm smooth-lift hover:border-emerald-300 hover:bg-white hover:text-emerald-800 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200 dark:hover:border-emerald-500/60 dark:hover:bg-slate-950 dark:hover:text-emerald-200"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
