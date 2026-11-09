import { useEffect, useRef, useState } from "react";
import { portfolioItems2 } from "@/data/portfolio";

const projectsPerPage = 6;

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);
  const portfolioGridRef = useRef<HTMLDivElement>(null);
  const pageCount = Math.ceil(portfolioItems2.length / projectsPerPage);
  const visibleProjects = portfolioItems2.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage,
  );

  useEffect(() => {
    const portfolioElements =
      portfolioGridRef.current?.querySelectorAll<HTMLElement>(
        ".tmp-scroll-trigger",
      );
    if (!portfolioElements?.length) return;

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("tmp-scroll-trigger--offscreen");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px" },
    );

    portfolioElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <div
      className="latest-portfolio-area custom-column-grid tmp-section-gapTop"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Selected Work</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Digital Experiences <br />
            for Ambitious Businesses
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            A curated selection of websites and platforms for commerce,
            business systems, hospitality, and healthcare—built to support
            real business needs.
          </p>
        </div>
        <div
          ref={portfolioGridRef}
          aria-live="polite"
          aria-label="Portfolio projects"
        >
          <div className="row">
            {visibleProjects.map((item) => (
              <div className="col-lg-6 col-sm-6" key={item.id}>
                <div
                  className={`latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-scroll-trigger--offscreen tmp-fade-in animation-order-${item.animationOrder}`}
                >
                  <div className="portfoli-card-img">
                    <div className="img-box v2">
                      <img
                        loading="lazy"
                        decoding="async"
                        className="w-100 tmp-scroll-trigger tmp-scroll-trigger--offscreen tmp-zoom-in animation-order-1"
                        alt={`${item.title}: ${item.description}`}
                        src={item.imageSrc}
                        width={item.width}
                        height={item.height}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {pageCount > 1 && (
          <nav
            className="portfolio-pagination mt-4 tmp-scroll-trigger tmp-fade-in animation-order-1"
            aria-label="Portfolio pages"
          >
            <button
              className="portfolio-page-arrow tmp-scroll-trigger tmp-fade-in animation-order-1"
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(0, page - 1))}
              disabled={currentPage === 0}
              aria-label="Show previous portfolio projects"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 12H5m0 0 7 7m-7-7 7-7" />
              </svg>
            </button>
            <div className="portfolio-page-dots" aria-label="Choose a page">
              {Array.from({ length: pageCount }, (_, page) => (
                <button
                  className="portfolio-page-dot tmp-scroll-trigger tmp-fade-in animation-order-2"
                  type="button"
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Show portfolio page ${page + 1}`}
                  aria-current={currentPage === page ? "page" : undefined}
                />
              ))}
            </div>
            <button
              className="portfolio-page-arrow tmp-scroll-trigger tmp-fade-in animation-order-3"
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(pageCount - 1, page + 1))
              }
              disabled={currentPage === pageCount - 1}
              aria-label="Show next portfolio projects"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m0 0-7-7m7 7-7 7" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
