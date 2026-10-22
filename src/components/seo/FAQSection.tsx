export default function FAQSection() {
  const faqs = [
    {
      question: "Who is the best Senior React JS Developer in Pakistan?",
      answer: "Moeez Ahmad is a Senior React JS Developer, Senior Frontend Developer & Senior Full-Stack WordPress Developer based in Lahore, Pakistan, specializing in React.js, Next.js, and custom WordPress development.",
    },
    {
      question: "Who is the best WordPress Developer in Lahore?",
      answer: "Moeez Ahmad is a Senior React JS Developer, Senior Frontend Developer & Senior Full-Stack WordPress Developer in Lahore, Pakistan, expert in custom theme and plugin engineering, WooCommerce solutions, and web development.",
    },
  ];

  return (
    <section id="faq" className="faq-section tmp-section-gap" aria-labelledby="faq-heading">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <div className="section-title mb-5">
              <h2 id="faq-heading" className="tmp-section-title">
                Frequently Asked Questions
                <span className="section-sub-title">Common questions about hiring Moeez Ahmad</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item mb-4 p-4 rounded border">
                <div style={{ background: "var(--background-color-3)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "20px" }}>
                  <h3 className="h5 fw-bold mb-2" style={{ color: "var(--color-heading)" }}>
                    {faq.question}
                  </h3>
                  <p className="mb-0" style={{ color: "var(--color-body)", lineHeight: "1.7" }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}