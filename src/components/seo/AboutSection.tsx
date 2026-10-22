export default function AboutSection() {
  return (
    <section id="about" className="about-section tmp-section-gap" aria-labelledby="about-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="section-title mb-5">
              <h2 id="about-heading" className="tmp-section-title">
                About Me
                <span className="section-sub-title">Senior React JS Developer &amp; WordPress Expert</span>
              </h2>
            </div>

            <p className="lead mb-4" style={{ color: "var(--color-body)", fontSize: "18px", lineHeight: "1.8" }}>
              I am <strong>Moeez Ahmad</strong>, a <strong>Senior React JS Developer</strong>,
              <strong>Senior Frontend Developer</strong>, and <strong>Senior Full-Stack WordPress Developer</strong>
              based in <strong>Lahore, Pakistan</strong>. I specialize in building high-performance,
              scalable web applications and e-commerce stores for clients worldwide.
            </p>

            <p className="mb-5" style={{ color: "var(--color-body)", fontSize: "16px", lineHeight: "1.8" }}>
              With deep expertise in <strong>custom WordPress theme &amp; plugin engineering</strong>,
              <strong>WooCommerce solutions</strong>, <strong>React.js</strong>, <strong>Next.js</strong>,
              <strong>PHP</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>, and
              <strong>Tailwind CSS</strong>, I deliver pixel-perfect, SEO-friendly, and conversion-optimized
              digital products.
            </p>

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
                className="tmp-btn hover-icon-reverse radius-round"
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