export default function AboutSection() {
  return (
    <section id="about" className="about-section py-5" aria-labelledby="about-heading">
      <h2 id="about-heading" className="sr-only">
        About Moeez Ahmad - Senior Full-Stack WordPress Developer in Lahore, Pakistan
      </h2>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold mb-4">
              Moeez Ahmad – Senior Full-Stack WordPress &amp; Frontend Developer in Lahore, Pakistan
            </h1>

            <p className="lead mb-4" dangerouslySetInnerHTML={{ __html: `
              I am <strong>Moeez Ahmad</strong>, a <strong>Senior Full-Stack WordPress Developer</strong>,
              <strong>UI/UX Developer</strong>, and <strong>Senior Frontend Developer</strong> based in
              <strong>Lahore, Pakistan</strong>. I specialize in building high-performance, scalable web
              applications and e-commerce stores for clients worldwide.
            `}} />

            <p className="mb-4" dangerouslySetInnerHTML={{ __html: `
              With deep expertise in <strong>custom WordPress theme &amp; plugin engineering</strong>,
              <strong>WooCommerce solutions</strong>, <strong>React.js</strong>, <strong>Next.js</strong>,
              <strong>PHP</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>, and
              <strong>Tailwind CSS</strong>, I deliver pixel-perfect, SEO-friendly, and conversion-optimized
              digital products.
            `}} />

            <p className="mb-5" dangerouslySetInnerHTML={{ __html: `
              Whether you need a custom WordPress theme, a WooCommerce store, a React.js frontend, or a
              full-stack Next.js application, I am the <strong>Frontend Developer in Pakistan</strong> and
              <strong>WordPress Developer in Lahore</strong> you can rely on. Hire a senior full-stack
              developer who understands both design and engineering.
            `}} />
          </div>
        </div>
      </div>
    </section>
  );
}