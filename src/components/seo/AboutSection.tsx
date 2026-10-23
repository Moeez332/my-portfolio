export default function AboutSection() {
  return (
    <section id="about" className="about-section tmp-section-gap" aria-labelledby="about-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="section-head mb-5">
              <div className="section-sub-title">
                <span className="subtitle">ABOUT ME</span>
              </div>
              <h2 id="about-heading" className="title mb-4">
                Senior React.js Developer &amp; WordPress Specialist
              </h2>
              <p className="description">
                I’m Moeez Ahmad, a senior frontend developer based in Lahore,
                Pakistan, building React.js applications, custom WordPress
                websites, and e-commerce experiences for global teams.
              </p>
            </div>

            <div className="about-details mt-5">
              <p className="mb-4" style={{ color: "var(--color-body)", lineHeight: "1.8" }}>
                With 5+ years in web development, I’ve built production-ready
                experiences across <strong>React.js</strong>,{" "}
                <strong>Next.js</strong>, <strong>TypeScript</strong>,{" "}
                <strong>WordPress</strong>, <strong>WooCommerce</strong>, and{" "}
                <strong>Shopify</strong>. I value maintainable code, thoughtful
                collaboration, responsive interfaces, and performance.
              </p>

              <div className="tech-list d-flex flex-wrap justify-content-center gap-2 mb-5">
                <span className="badge bg-secondary">React.js</span>
                <span className="badge bg-secondary">Next.js</span>
                <span className="badge bg-secondary">TypeScript</span>
                <span className="badge bg-secondary">JavaScript</span>
                <span className="badge bg-secondary">WordPress</span>
                <span className="badge bg-secondary">WooCommerce</span>
                <span className="badge bg-secondary">Shopify</span>
                <span className="badge bg-secondary">Tailwind CSS</span>
                <span className="badge bg-secondary">PHP</span>
                <span className="badge bg-secondary">Node.js</span>
                <span className="badge bg-secondary">REST APIs</span>
                <span className="badge bg-secondary">MySQL</span>
                <span className="badge bg-secondary">MongoDB</span>
              </div>

              <div className="about-achievements" aria-label="Career highlights">
                <div className="about-achievement">
                  <strong>5+</strong>
                  <span>Years of experience</span>
                </div>
                <div className="about-achievement">
                  <strong>50+</strong>
                  <span>Projects shipped</span>
                </div>
                <div className="about-achievement">
                  <strong>4+</strong>
                  <span>Companies served</span>
                </div>
                <div className="about-achievement">
                  <strong>Remote</strong>
                  <span>Working remotely</span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a
                href="#portfolio"
                className="tmp-btn hover-icon-reverse radius-round"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">View My Work</span>
                  <span className="btn-icon">
                    <i className="fa-sharp fa-regular fa-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="fa-sharp fa-regular fa-arrow-right" />
                  </span>
                </span>
              </a>
              <a
                href="/assets/files/Moeez_Ahmad_CV_Updated.pdf"
                className="tmp-btn hover-icon-reverse radius-round download-cv-btn"
                download
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Download Full CV</span>
                  <span className="btn-icon">
                    <i className="fa-regular fa-file-pdf" />
                  </span>
                </span>
              </a>
              <a
                href="https://linkedin.com/in/ch-moeez-ahmad"
                className="tmp-btn hover-icon-reverse radius-round"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Connect on LinkedIn</span>
                  <span className="btn-icon">
                    <i className="fa-brands fa-linkedin-in" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}