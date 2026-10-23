import { services2 } from "@/data/services";

export default function Services({
  parentClass = "latest-service-area tmp-section-gapTop",
}) {
  return (
    <section className={parentClass} id="features">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title">
            <span className="subtitle">What I Do</span>
          </div>
          <h2 className="title">
            End-to-End Web Development
            <br />
            That Moves Businesses Forward
          </h2>
          <p className="description section-sm">
            From React interfaces to complete WordPress and e-commerce
            solutions, I build fast, maintainable experiences designed to grow
            with your business.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            {services2
              .filter((service) => service.column === 1)
              .map((service) =>
                <div
                  className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${service.animationOrder}`}
                  key={service.id}
                >
                  <h2 className="service-card-num">
                    <span>{service.num}</span>
                    {service.title}
                  </h2>
                  <p className="service-para">{service.description}</p>
                </div>
              )}
          </div>

          {/* Second column */}
          <div className="col-lg-6 col-sm-6">
            {services2
              .filter((service) => service.column === 2)
              .map((service) =>
                <div
                  className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${service.animationOrder}`}
                  key={service.id}
                >
                  <h2 className="service-card-num">
                    <span>{service.num}</span>
                    {service.title}
                  </h2>
                  <p className="service-para">{service.description}</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
