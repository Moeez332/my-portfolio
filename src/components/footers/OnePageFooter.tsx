const footerSections = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Services" },
  { href: "#portfolio", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contacts", label: "Contact" },
];

export default function OnePageFooter() {
  return (
    <footer className="footer-area footer-style-one-wrapper one-page-footer tmp-section-gap">
      <div className="container">
        <div className="footer-main">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="single-footer-wrapper border-right mr--20">
                <p className="footer-brand-name">Moeez Ahmad</p>
                <p className="footer-role">
                  Senior React.js &amp; WordPress Developer
                </p>
                <p className="footer-description">
                  Building web experiences that perform with{" "}
                  <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
                  <strong>WordPress</strong>, and <strong>WooCommerce</strong>{" "}
                  for startups and businesses worldwide.
                </p>
                <p className="footer-availability-badge">
                  <span aria-hidden="true" />
                  Open to remote opportunities and select freelance projects
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="single-footer-wrapper quick-link-wrap">
                <h5 className="ft-title">Explore</h5>
                <ul className="ft-link tmp-link-animation">
                  {footerSections.map((section) => (
                    <li key={section.href}>
                      <a href={section.href}>{section.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-wrapper services-wrap">
                <h5 className="ft-title">Services</h5>
                <ul className="ft-link">
                  <li>React.js &amp; Next.js Development</li>
                  <li>WordPress &amp; WooCommerce</li>
                  <li>Frontend &amp; API Development</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-wrapper contact-wrap">
                <h5 className="ft-title">Contact</h5>
                <ul className="ft-link tmp-link-animation">
                  <li>
                    <a href="mailto:moeezahmed13@gmail.com">
                      moeezahmed13@gmail.com
                    </a>
                  </li>
                  <li>Lahore, Punjab, Pakistan</li>
                  <li>
                    <a href="tel:+923117705070">+92 311 770 5070</a>
                  </li>
                </ul>
                <div className="social-link footer footer-social-links">
                  <a
                    href="https://linkedin.com/in/ch-moeez-ahmad"
                    aria-label="Connect on LinkedIn"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="mailto:moeezahmed13@gmail.com" aria-label="Email">
                    <i className="fa-solid fa-envelope" />
                  </a>
                  <a
                    href="https://wa.me/923117705070"
                    aria-label="WhatsApp"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-whatsapp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area-one mt-5">
          <p className="copy-right-para">
            © {new Date().getFullYear()} Moeez Ahmad. All rights reserved. ·
            Designed &amp; developed by Moeez Ahmad.
          </p>
        </div>
      </div>
    </footer>
  );
}
