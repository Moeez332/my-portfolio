import { techStack } from "@/data/techStack";

export default function TechStackMarquee() {
  return (
    <section className="tech-stack-marquee" aria-label="Technology stack">
      <div className="container">
        <div className="tech-stack-marquee-heading">
          <span>Tools I build with</span>
          <span className="tech-stack-marquee-line" aria-hidden="true" />
        </div>
        <div className="tech-stack-marquee-window">
          <div className="tech-stack-marquee-track">
            {[0, 1].map((copy) => (
              <div
                className="tech-stack-marquee-group"
                key={copy}
                aria-hidden={copy === 1}
              >
                {techStack.map((technology) => (
                  <div
                    className="tech-stack-marquee-item"
                    key={technology.name}
                  >
                    <span
                      className={`tech-stack-logo tech-stack-logo--${technology.color}`}
                      aria-hidden="true"
                    >
                      {technology.icon ? (
                        <i className={technology.icon} />
                      ) : (
                        technology.mark
                      )}
                    </span>
                    <span>{technology.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
