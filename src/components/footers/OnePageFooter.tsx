const footerSections = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#resume", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contacts", label: "Contact" },
];

export default function OnePageFooter() {
  return (
    <footer className="footer-area footer-style-one-wrapper one-page-footer tmp-section-gap">
      <div className="container">
        <div className="footer-main">
          <div className="row g-5">
            <div className="col-lg-5 col-md-6">
              <div className="single-footer-wrapper border-right mr--20">
                <p className="footer-brand-name">Moeez Ahmad</p>
                <p className="footer-role">
                  Let&apos;s Build Something Great Together
                </p>
                <p className="footer-description">
                  I build fast, scalable, and user-focused web applications
                  using <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
                  <strong>WordPress</strong>, and <strong>Shopify</strong>.
                  Whether you need a modern frontend, a custom website, or an
                  eCommerce solution, I&apos;m here to turn your ideas into
                  reality.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
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
                <div className="social-link footer">
                  <a
                    href="https://linkedin.com/in/ch-moeez-ahmad"
                    aria-label="LinkedIn"
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
            © {new Date().getFullYear()} Moeez Ahmad. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
