import { educationExperienceData } from "@/data/education";
import { jobExperience } from "@/data/experiences";

export default function Education() {
  return (
    <section className="education-experience tmp-section-gapTop" id="resume">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Background</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Education &amp; Experience
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            A strong academic foundation in Computer Science, combined with
            5+ years of hands-on experience building products for businesses
            and teams.
          </p>
        </div>
        <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
          Education
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
        <div className="row g-5">
          {educationExperienceData.map((item, index) => (
            <div className="col-lg-6 col-sm-6" key={index}>
              <div
                className={`education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
              >
                <h4 className="edu-sub-title">{item.institute}</h4>
                <h2 className="edu-title">{item.role}</h2>
                <p className="edu-duration">{item.duration}</p>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experiences-wrapper" id="experience">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Professional Experience
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
                {jobExperience.map((item, index) => (
                  <div
                    className={`experience-content tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}
                    key={index}
                  >
                    <p className="ex-subtitle">{item.duration}</p>
                    <h2 className="ex-name">{item.title}</h2>
                    <h3 className="ex-title">
                      {item.company}
                      {item.location && ` – ${item.location}`}
                    </h3>
                    <p className="ex-para">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <img
                  loading="lazy"
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                alt="Moeez Ahmad"
                src="/assets/images/hero.png"
                  width={945}
                  height={719}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
