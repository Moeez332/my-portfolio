import { useEffect, useState } from "react";
import type { OnepageNavItem } from "./OnepageNav2";

export default function MobileOnePageHeader({
  brandName,
  sectionIds,
}: {
  brandName: string;
  sectionIds: OnepageNavItem[];
}) {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`tmp-responsive-header-style d-block d-xl-none header-onepage-mobile header--sticky ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="mobile-onepage-header-inner">
        <a className="mobile-onepage-header-brand" href="#home">
          {brandName}
        </a>
        <button
          type="button"
          className="tmp-menu-bars"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <i
            className={`fa-regular ${isOpen ? "fa-xmark" : "fa-bars-staggered"}`}
          />
        </button>
      </div>
      {isOpen && (
        <nav
          aria-label="Page sections"
          className="mt-3 p-3"
          style={{
            background: "var(--color-gray-2)",
            borderRadius: "8px",
          }}
        >
          <ul className="list-unstyled mb-0">
            {sectionIds.map((section) => (
              <li key={section.id}>
                <a
                  className="d-block py-2"
                  href={section.href}
                  onClick={() => setIsOpen(false)}
                >
                  {section.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
