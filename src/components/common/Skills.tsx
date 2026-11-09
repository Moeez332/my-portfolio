import { useEffect, useRef } from "react";
import { skillSections } from "@/data/skills";

export default function Skills({
  parentClass = "tmp-skill-area tmp-section-gapTop",
}) {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = skillsRef.current;
    if (!section) return;

    const progressBars =
      section.querySelectorAll<HTMLDivElement>(".skill-progress-bar");
    let cleanupAnimation = () => {};
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        currentObserver.disconnect();
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        const duration = 1200;

        const updateProgress = (progress: number) => {
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          progressBars.forEach((bar) => {
            const target = Number(bar.dataset.targetPercent);
            const value = Math.round(target * easedProgress);
            const label = bar.querySelector<HTMLElement>(
              "[data-percent-value]",
            );

            bar.style.width = `${target * easedProgress}%`;
            bar.setAttribute("aria-valuenow", String(value));
            if (label) label.textContent = `${value}%`;
          });
        };

        if (prefersReducedMotion) {
          updateProgress(1);
          return;
        }

        let startTime: number | undefined;
        let animationFrame = 0;
        const animate = (time: number) => {
          startTime ??= time;
          const progress = Math.min((time - startTime) / duration, 1);
          updateProgress(progress);

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(animate);
          }
        };
        animationFrame = window.requestAnimationFrame(animate);
        animationFrame = window.requestAnimationFrame(animate);
        cleanupAnimation = () => window.cancelAnimationFrame(animationFrame);
      },
      { rootMargin: "0px 0px -50px 0px" },
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
      cleanupAnimation();
    };
  }, []);

  return (
    <div className={parentClass} ref={skillsRef}>
      <div className="container">
        <div className="row g-5">
          {skillSections.map((section, sectionIndex) => (
            <div className="col-lg-6" key={sectionIndex}>
              <div className="progress-wrapper">
                <div className="content">
                  <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                    {section.title}
                    <span>
                      <img
                        loading="lazy"
                        alt="custom-line"
                        src="/assets/images/custom-line/custom-line.png"
                        width={81}
                        height={6}
                      />
                    </span>
                  </h2>
                  {section.skills.map((skill, skillIndex) => (
                    <div
                      className={`progress-charts tmp-scroll-trigger tmp-fade-in animation-order-${(skillIndex % 4) + 1}`}
                      key={skill.name}
                    >
                      <h6 className="heading heading-h6 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        {skill.name}
                      </h6>
                      <div className="progress">
                        <div
                          className="progress-bar skill-progress-bar"
                          data-target-percent={skill.percent}
                          role="progressbar"
                          style={{
                            width: "0%",
                            visibility: "visible",
                            transition: "none",
                          }}
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="percent-label" data-percent-value>
                            0%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
