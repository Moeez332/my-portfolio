export default function FAQSection() {
  const faqs = [
    {
      question: "Why should I hire you?",
      answer: "I am a Senior React JS Developer and WordPress Expert with deep experience in building high-performance, scalable web applications and e-commerce stores. I deliver pixel-perfect, SEO-friendly, and conversion-optimized digital products for clients worldwide.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in React JS, Next.js, TypeScript, JavaScript, WordPress, WooCommerce, Shopify, Tailwind CSS, PHP, and Node.js. I build modern, responsive, and performance-optimized websites and web applications.",
    },
    {
      question: "Do you build custom WordPress websites?",
      answer: "Yes, I develop custom WordPress themes and plugins tailored to your business needs. From theme engineering to WooCommerce solutions, I deliver secure, scalable, and SEO-friendly WordPress websites.",
    },
    {
      question: "Can you develop Shopify stores?",
      answer: "Yes, I build and customize Shopify stores with responsive design, performance optimization, and seamless user experience to help you sell more online.",
    },
    {
      question: "Do you build React and Next.js applications?",
      answer: "Absolutely. I build modern React JS and Next.js applications with TypeScript, focusing on performance, responsiveness, and SEO-friendly architecture for a great user experience.",
    },
    {
      question: "Are you available for freelance projects?",
      answer: "Yes, I am available for freelance projects. Feel free to reach out with your requirements, and let's discuss how I can help bring your vision to life.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, I work with clients worldwide. Communication and collaboration are handled remotely through email, video calls, and project management tools.",
    },
    {
      question: "Can you optimize website performance?",
      answer: "Yes, I specialize in performance optimization including Core Web Vitals improvement, code optimization, image compression, and caching strategies to make your website load faster.",
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
                Everything you need to know before hiring me.
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