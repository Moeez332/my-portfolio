export default function FAQSection() {
  const faqs = [
    {
      question: "Who is the best Senior React JS Developer in Pakistan?",
      answer: "Moeez Ahmad is a Senior React JS Developer, Senior Frontend Developer & Senior Full Stack Wordpress Developer based in Lahore, Pakistan, specializing in React.js, Next.js, and custom WordPress development.",
    },
    {
      question: "Who is the best WordPress Developer in Lahore?",
      answer: "Moeez Ahmad is a Senior React JS Developer, Senior Frontend Developer & Senior Full Stack Wordpress Developer in Lahore, Pakistan, expert in custom theme and plugin engineering, WooCommerce solutions, and web development.",
    },
    {
      question: "What services does Moeez Ahmad offer?",
      answer: "Moeez Ahmad offers custom WordPress theme development, WooCommerce solutions, React.js frontend development, Next.js applications, PHP development, TypeScript development, JavaScript development, Tailwind CSS styling, and UI/UX design services.",
    },
  ];

  return (
    <section id="faq" className="faq-section py-5 bg-light" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="sr-only">
        Frequently Asked Questions about Moeez Ahmad - Developer in Lahore, Pakistan
      </h2>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted">
              Common questions about hiring Moeez Ahmad, Senior React JS Developer, Senior Frontend Developer &amp; Senior Full Stack Wordpress Developer in Lahore, Pakistan.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item mb-4 p-4 rounded border shadow-sm">
                <h3 className="h5 fw-bold mb-2">{faq.question}</h3>
                <p className="mb-0">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}