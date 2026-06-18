import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const getScreenshotSrc = (screenshot) => (typeof screenshot === 'string' ? screenshot : screenshot?.src);

function ProjectCard({ project }) {
  const screenshots = project.screenshots || [];
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStart = useRef(null);

  const actions = [
    { label: 'GitHub', href: project.githubUrl, icon: Github },
    { label: 'Live Demo', href: project.liveUrl, icon: ExternalLink },
  ];

  const showPreviousSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide - 1 + screenshots.length) % screenshots.length);
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % screenshots.length);
  };

  const handleSlideshowKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPreviousSlide();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNextSlide();
    }
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;

    const touch = event.changedTouches[0];
    const distanceX = touch.clientX - touchStart.current.x;
    const distanceY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(distanceX) < 50 || Math.abs(distanceX) <= Math.abs(distanceY)) return;

    if (distanceX > 0) {
      showPreviousSlide();
    } else {
      showNextSlide();
    }
  };

  return (
    <article className="panel grid h-full overflow-hidden lg:grid-cols-[0.85fr_1.15fr]">
      <div className="h-1 bg-gradient-to-r from-slate-900 via-emerald-600 to-sky-700 dark:from-slate-700 dark:via-emerald-400 dark:to-sky-500 lg:col-span-2" />

      <div className="flex flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-4 flex-1 text-base leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200"
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
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white smooth-lift hover:bg-emerald-700 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-100"
              >
                <Icon size={17} />
                {label}
              </a>
            ) : (
              <button
                key={label}
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-500"
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
        <div className="border-t border-slate-200 bg-slate-100 p-3 dark:border-slate-800 dark:bg-slate-950/80 sm:p-4 lg:border-l lg:border-t-0">
          <div
            className="group relative aspect-[16/10] touch-pan-y overflow-hidden rounded-lg border border-slate-200 bg-white shadow-inner outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-900 dark:focus-visible:ring-offset-slate-950 lg:h-full lg:min-h-[360px] lg:aspect-auto"
            onKeyDown={handleSlideshowKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={() => {
              touchStart.current = null;
            }}
            tabIndex={screenshots.length > 1 ? 0 : undefined}
            role={screenshots.length > 1 ? 'region' : undefined}
            aria-label={screenshots.length > 1 ? `${project.title} screenshot gallery` : undefined}
          >
            {screenshots.map((screenshot, index) => {
              const src = getScreenshotSrc(screenshot);
              const alt =
                typeof screenshot === 'string'
                  ? `${project.title} screenshot ${index + 1}`
                  : screenshot?.alt || `${project.title} screenshot ${index + 1}`;
              const isActive = activeSlide === index;

              return (
                <img
                  key={src}
                  src={src}
                  alt={alt}
                  className={`absolute inset-0 h-full w-full object-contain transition-[opacity,transform] duration-200 ease-out ${
                    isActive ? 'z-10 scale-100 opacity-100' : 'pointer-events-none scale-[1.005] opacity-0'
                  }`}
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  loading="eager"
                  aria-hidden={!isActive}
                />
              );
            })}

            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPreviousSlide}
                  className="absolute left-3 top-1/2 z-20 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-slate-950/35 text-white shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-slate-950/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:grid"
                  aria-label={`Show previous ${project.title} screenshot`}
                >
                  <ChevronLeft size={24} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={showNextSlide}
                  className="absolute right-3 top-1/2 z-20 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-slate-950/35 text-white shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-slate-950/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:grid"
                  aria-label={`Show next ${project.title} screenshot`}
                >
                  <ChevronRight size={24} aria-hidden="true" />
                </button>

                <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-lg border border-white/30 bg-slate-950/35 px-3 py-2 shadow-md backdrop-blur-sm">
                  {screenshots.map((screenshot, index) => {
                    const slideKey = typeof screenshot === 'string' ? screenshot : screenshot.src;

                    return (
                      <button
                        key={slideKey}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ease-out ${
                          activeSlide === index ? 'w-6 bg-emerald-300' : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Show ${project.title} screenshot ${index + 1}`}
                        aria-current={activeSlide === index ? 'true' : undefined}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
