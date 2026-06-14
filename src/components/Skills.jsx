import { motion } from 'framer-motion';
import { skills } from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="bg-white py-20 dark:bg-slate-900/40">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tools and technologies I work with.</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:text-blue-700 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:bg-slate-950 dark:hover:text-blue-200"
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
