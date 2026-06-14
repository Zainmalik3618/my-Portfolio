import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Code2, Github, Linkedin, Mail, Send, UserRound } from 'lucide-react';

const PROFILE_IMAGE = '/profile.jpg';

function Hero() {
  const [showProfileImage, setShowProfileImage] = useState(true);

  const socialLinks = [
    { label: 'GitHub', href: ' https://github.com/Zainmalik3618', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zainmalik3618/', icon: Linkedin },
    { label: 'Email', href: 'mailto:zainmalik3618@gmail.com', icon: Mail },
  ];

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.16),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.18),transparent_32%)]" />

      <div className="section-container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
            <Code2 size={16} />
            Software Engineering Student
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Zain Ul Abideen Malik
          </h1>
          <p className="mt-5 text-xl font-semibold text-blue-700 dark:text-blue-300 sm:text-2xl">
            Backend Web Developer | PERN Stack Developer
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            I build clean, scalable, and user-friendly web applications using PostgreSQL, Express.js, React.js, and
            Node.js.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <ArrowDownToLine size={18} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-transparent px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-200"
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
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-200"
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
          transition={{ duration: 0.7, delay: 0.1 }}
          className="panel overflow-hidden p-5 sm:p-6"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
            <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              {showProfileImage ? (
                <img
                  src={PROFILE_IMAGE}
                  alt="Zain Ul Abideen Malik"
                  className="h-full w-full object-cover object-center"
                  onError={() => setShowProfileImage(false)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 shadow-lg dark:border-blue-400/20 dark:bg-slate-900 dark:text-blue-300">
                    <UserRound size={56} />
                  </div>
                </div>
              )}
            </div>

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
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
