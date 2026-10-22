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
                Senior React JS Developer &amp; WordPress Expert
              </h2>
              <p className="description">
                I am Moeez Ahmad, a Senior React JS Developer based in Lahore, Pakistan.
                I specialize in building high-performance, scalable web applications and
                e-commerce stores for clients worldwide.
              </p>
            </div>

            <div className="about-details mt-5">
              <p className="mb-4" style={{ color: "var(--color-body)", lineHeight: "1.8" }}>
                With deep expertise in <strong>custom WordPress theme &amp; plugin engineering</strong>,
                <strong>WooCommerce solutions</strong>, <strong>React.js</strong>, <strong>Next.js</strong>,
                <strong>PHP</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>, and
                <strong>Tailwind CSS</strong>, I deliver pixel-perfect, SEO-friendly, and
                conversion-optimized digital products.
              </p>

              <div className="tech-list d-flex flex-wrap justify-content-center gap-2 mb-5">
                <span className="badge bg-secondary">React JS</span>
                <span className="badge bg-secondary">Next JS</span>
                <span className="badge bg-secondary">TypeScript</span>
                <span className="badge bg-secondary">JavaScript</span>
                <span className="badge bg-secondary">WordPress</span>
                <span className="badge bg-secondary">WooCommerce</span>
                <span className="badge bg-secondary">Shopify</span>
                <span className="badge bg-secondary">Tailwind CSS</span>
                <span className="badge bg-secondary">PHP</span>
                <span className="badge bg-secondary">Node.js</span>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3">
              <a
                href="#portfolio"
                className="tmp-btn hover-icon-reverse radius-round"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">View Portfolio</span>
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
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <i className="fa-regular fa-file-pdf" />
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