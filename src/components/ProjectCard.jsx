import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ project }) {
  const screenshots = project.screenshots || [];
  const [activeSlide, setActiveSlide] = useState(0);

  const actions = [
    { label: 'GitHub', href: project.githubUrl, icon: Github },
    { label: 'Live Demo', href: project.liveUrl, icon: ExternalLink },
  ];

  useEffect(() => {
    if (screenshots.length <= 1) return undefined;

    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % screenshots.length);
    }, 3500);

    return () => window.clearInterval(slideTimer);
  }, [screenshots.length]);

  const currentScreenshot = screenshots[activeSlide];
  const screenshotSrc = typeof currentScreenshot === 'string' ? currentScreenshot : currentScreenshot?.src;
  const screenshotAlt =
    typeof currentScreenshot === 'string'
      ? `${project.title} screenshot ${activeSlide + 1}`
      : currentScreenshot?.alt || `${project.title} screenshot ${activeSlide + 1}`;

  return (
    <article className="panel grid h-full overflow-hidden lg:grid-cols-[0.85fr_1.15fr]">
      <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 lg:col-span-2" />

      <div className="flex flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-4 flex-1 text-base leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {actions.map(({ label, href, icon: Icon }) => {
            const hasLink = Boolean(href);

            return hasLink ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100"
              >
                <Icon size={17} />
                {label}
              </a>
            ) : (
              <button
                key={label}
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-500"
                title={`${label} link coming soon`}
              >
                <Icon size={17} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {screenshots.length > 0 && (
        <div className="border-t border-slate-200 bg-slate-100 p-3 dark:border-white/10 dark:bg-slate-950/80 sm:p-4 lg:border-l lg:border-t-0">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-inner dark:border-white/10 dark:bg-slate-900 lg:h-full lg:min-h-[360px] lg:aspect-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={screenshotSrc}
                src={screenshotSrc}
                alt={screenshotAlt}
                initial={{ opacity: 0, scale: 1.03, x: 24 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -24 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </AnimatePresence>

            {screenshots.length > 1 && (
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-slate-950/60 px-3 py-2 backdrop-blur">
                {screenshots.map((screenshot, index) => {
                  const slideKey = typeof screenshot === 'string' ? screenshot : screenshot.src;

                  return (
                    <button
                      key={slideKey}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        activeSlide === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Show ${project.title} screenshot ${index + 1}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
