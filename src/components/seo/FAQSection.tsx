export default function FAQSection() {
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "My core stack includes React.js, Next.js, TypeScript, and WordPress. I also work with Node.js, Express.js, PHP, MySQL, MongoDB, Tailwind CSS, WooCommerce, and Shopify.",
    },
    {
      question: "Are you available for full-time remote roles?",
      answer: "I’m open to senior frontend and full-stack remote opportunities, and I’m comfortable collaborating with distributed teams across time zones.",
    },
    {
      question: "Do you take on freelance or contract projects?",
      answer: "Selectively, yes. I consider React.js, Next.js, WordPress, and WooCommerce projects that align with my experience and availability.",
    },
    {
      question: "How do you manage communication and deadlines?",
      answer: "I agree on clear milestones, share regular progress updates, and use collaborative workflows to keep work visible and delivery on track.",
    },
    {
      question: "Can you join an existing codebase or team?",
      answer: "Yes. I can contribute to existing React and WordPress projects, follow established Git and review practices, and work closely with your team.",
    },
    {
      question: "Do you provide post-launch support?",
      answer: "I can help with ongoing WordPress maintenance, security and plugin updates, and performance checks, as well as React and Next.js fixes and feature improvements.",
    },
  ];

  return (
    <section id="faq" className="faq-section tmp-section-gap" aria-labelledby="faq-heading">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <div className="section-head">
              <div className="section-sub-title">
                <span className="subtitle">FAQ</span>
              </div>
              <h2 id="faq-heading" className="title mb-4">
                Frequently Asked Questions
              </h2>
              <p className="description">
                Quick answers for clients and recruiters considering a collaboration.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="faq-accordion accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-accordion-item accordion-item">
                  <h2 className="accordion-header" id={`faq-heading-${index}`}>
                    <button
                      className="faq-accordion-button accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-collapse-${index}`}
                      aria-expanded="false"
                      aria-controls={`faq-collapse-${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`faq-collapse-${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                    aria-labelledby={`faq-heading-${index}`}
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}