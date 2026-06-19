import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Code2, Database, GraduationCap } from 'lucide-react';

const sectionMotion = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

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

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  id="about-details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                    <p>
                      My main interest is building the systems behind useful digital products. I like designing APIs,
                      structuring databases, handling authentication, and connecting those pieces to interfaces that feel
                      clear and dependable.
                    </p>
                    <p>
                      Through university work and personal projects, I have been developing with technologies such as
                      React, Node.js, Express, PostgreSQL, and modern API integrations. Projects like CalmConnect AI have
                      helped me think beyond individual features and consider complete user journeys, data flow, and
                      maintainable architecture.
                    </p>
                    <p>
                      I am continually improving my problem-solving skills and learning better ways to write secure,
                      testable, and scalable software. I value curiosity, steady progress, and turning what I learn into
                      practical experiences people can use.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 smooth-lift hover:border-emerald-400 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-emerald-500 dark:hover:text-emerald-300"
              aria-expanded={isExpanded}
              aria-controls="about-details"
            >
              {isExpanded ? 'Show less' : 'More about me'}
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

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
