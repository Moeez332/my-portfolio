import { Link } from "react-router-dom";
import OnepageNav2, { type OnepageNavItem } from "./OnepageNav2";

export type ProfileSocialLink = {
  href: string;
  label: string;
  icon: string;
};

const defaultSocialLinks: ProfileSocialLink[] = [
  { href: "#", label: "Instagram", icon: "fa-brands fa-instagram" },
  { href: "#", label: "LinkedIn", icon: "fa-brands fa-linkedin-in" },
  { href: "#", label: "Twitter", icon: "fa-brands fa-twitter" },
  { href: "#", label: "Facebook", icon: "fa-brands fa-facebook-f" },
];

export default function Header3({
  profileImage = "/assets/images/banner/header-left-user.jpg",
  sectionIds,
  socialLinks = defaultSocialLinks,
}: {
  profileImage?: string;
  sectionIds?: OnepageNavItem[];
  socialLinks?: ProfileSocialLink[];
}) {
  return (
    <div className="d-none d-xl-block header-style-2 header-left">
      <header className="tmp-header-area d-flex align-items-start flex-column header-left-sticky">
        <div className="inner-wrapper">
          <div className="logo-area">
            <Link to={`/`}>
              <img
                loading="lazy"
                alt="Portrait of Moeez Ahmad"
                src={profileImage}
                width={350}
                height={350}
              />
            </Link>
          </div>
          <nav
            id="sideNavs"
            className="mainmenu-nav navbar-example2 onepagenav"
          >
            <ul className="primary-menu nav nav-pills">
              <OnepageNav2 sectionIds={sectionIds} />
            </ul>
          </nav>
          <div className="footer">
            <a
              className="download-cv-btn"
              href="/assets/files/Moeez_Ahmad_CV_Updated.pdf"
              download
            >
              <i className="fa-regular fa-file-pdf" /> Download Full CV
            </a>
            <div className="social-share-style-1 footer-social">
              <span className="title">Connect with me</span>
              <div className="social-link">
                {socialLinks.map((socialLink) => (
                  <a
                    href={socialLink.href}
                    aria-label={socialLink.label}
                    key={socialLink.label}
                  >
                    <i className={socialLink.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
