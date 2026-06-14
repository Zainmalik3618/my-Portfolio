import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Code2, Github, Linkedin, Mail, Send, UserRound } from 'lucide-react';

const PROFILE_IMAGE = '/profile.jpg';
const sectionMotion = { duration: 0.85, ease: [0.22, 1, 0.36, 1] };

function Hero() {
  const [showProfileImage, setShowProfileImage] = useState(true);

  const socialLinks = [
    { label: 'GitHub', href: ' https://github.com/Zainmalik3618', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zainmalik3618/', icon: Linkedin },
    { label: 'Email', href: 'mailto:zainmalik3618@gmail.com', icon: Mail },
  ];

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(15,23,42,0.04),rgba(16,185,129,0.08)_42%,rgba(37,99,235,0.06))] dark:bg-[linear-gradient(135deg,#020617,rgba(15,23,42,0.96)_48%,rgba(6,78,59,0.34))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

      <div className="section-container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={sectionMotion}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200">
            <Code2 size={16} />
            Software Engineering Student
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Zain Ul Abideen Malik
          </h1>
          <p className="mt-5 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl">
            Backend Web Developer | PERN Stack Developer
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            I build clean, scalable, and user-friendly web applications using PostgreSQL, Express.js, React.js, and
            Node.js.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 smooth-lift hover:bg-emerald-700 dark:bg-emerald-500 dark:text-slate-950 dark:shadow-emerald-950/20 dark:hover:bg-emerald-400"
            >
              <ArrowDownToLine size={18} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 smooth-lift hover:border-emerald-300 hover:text-emerald-800 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:hover:border-emerald-500/60 dark:hover:text-emerald-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-5 py-3 text-sm font-semibold text-slate-700 smooth-lift hover:text-emerald-800 dark:text-slate-200 dark:hover:text-emerald-200"
            >
              <Send size={17} />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 smooth-lift hover:border-emerald-300 hover:text-emerald-800 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-emerald-500/60 dark:hover:text-emerald-200"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...sectionMotion, delay: 0.1 }}
          className="panel overflow-hidden p-5 sm:p-6"
        >
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
            <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              {showProfileImage ? (
                <img
                  src={PROFILE_IMAGE}
                  alt="Zain Ul Abideen Malik"
                  className="h-full w-full object-cover object-center"
                  onError={() => setShowProfileImage(false)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/40">
                  <div className="flex h-28 w-28 items-center justify-center rounded-lg border border-emerald-200 bg-white text-emerald-700 shadow-lg dark:border-emerald-500/20 dark:bg-slate-900 dark:text-emerald-300">
                    <UserRound size={56} />
                  </div>
                </div>
              )}
            </div>

            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">Backend / PERN Stack Developer</p>
              <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                Building scalable APIs, dashboards, and full-stack web apps.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
