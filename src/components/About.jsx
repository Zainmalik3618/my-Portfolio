import { motion } from 'framer-motion';
import { Code2, Database, GraduationCap } from 'lucide-react';

const sectionMotion = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

function About() {
  const highlights = [
    { title: 'BS Software Engineering', icon: GraduationCap },
    { title: 'Backend Development', icon: Database },
    { title: 'Full-Stack Web Apps', icon: Code2 },
  ];

  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={sectionMotion}
          >
            <p className="section-kicker">About</p>
            <h2 className="section-title">Building practical software with a backend-first mindset.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...sectionMotion, delay: 0.05 }}
            className="panel p-6 sm:p-8"
          >
            <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
              I am a BS Software Engineering student focused on backend development, full-stack web applications, and
              clean, scalable systems. I enjoy turning ideas into reliable products with thoughtful APIs, organized data
              models, and user-friendly interfaces.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4 smooth-motion hover:border-emerald-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-emerald-500/50 dark:hover:bg-slate-900"
                >
                  <Icon className="mb-3 text-emerald-700 dark:text-emerald-300" size={22} />
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
