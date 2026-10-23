import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Contact({
  parentClass = "get-in-touch-area tmp-section-gapTop",
}) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sandMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(form.current!);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Simple client-side validation
    if (!name || !email || !subject || !message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!");
        form.current?.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={parentClass} id="contacts">
      <div className="container">
        <div className="contact-get-in-touch-wrap">
          <div className="get-in-touch-wrapper tmponhover">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="section-head text-align-left">
                  <div className="section-sub-title contact-section-subtitle tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle">GET IN TOUCH</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Let’s Build Something Great Together
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Whether you’re hiring for a senior frontend role, launching
                    a product, or looking for a dependable developer, I’d love
                    to hear what you’re building.
                  </p>
                  <div className="contact-details">
                    <a href="mailto:moeezahmed13@gmail.com">
                      <i className="fa-regular fa-envelope" aria-hidden="true" />
                      moeezahmed13@gmail.com
                    </a>
                    <a
                      href="https://linkedin.com/in/ch-moeez-ahmad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                      Connect on LinkedIn
                    </a>
                    <span>
                      <i className="fa-regular fa-location-dot" aria-hidden="true" />
                      Lahore, Pakistan · Working remotely worldwide
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-inner">
                  <div className="contact-form">
                    <div id="form-messages" className="error" />
                    <form
                      className="tmp-dynamic-form"
                      id="contact-form"
                      ref={form}
                      onSubmit={sandMail}
                    >
                      <div className="contact-form-wrapper row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              name="name"
                              id="contact-name"
                              placeholder="What should I call you?"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              id="contact-phone"
                              name="phone"
                              placeholder="Phone number"
                              type="number"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              id="contact-email"
                              name="email"
                              placeholder="Where should I reply?"
                              type="email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              type="text"
                              id="subject"
                              required
                              name="subject"
                              placeholder="What’s this about?"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              className="input-field"
                              placeholder="Tell me about your project or role"
                              name="message"
                              id="contact-message"
                              required
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="tmp-button-here">
                            <button
                              className="tmp-btn hover-icon-reverse radius-round w-100"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">
                                  {isSubmitting
                                    ? "Sending..."
                                    : "Send Message"}
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-sharp fa-regular fa-arrow-right" />
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-sharp fa-regular fa-arrow-right" />
                                </span>
                              </span>
                            </button>
                          </div>
                          <p className="contact-trust-note">
                            No spam—just a direct conversation about your
                            project or role.
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
