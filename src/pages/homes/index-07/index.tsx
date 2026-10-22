import AboutSection from "@/components/seo/AboutSection";
import Contact from "@/components/common/Contact2";
import Education from "@/components/common/Education2";
import FAQSection from "@/components/seo/FAQSection";
import Portfolio from "@/components/common/Portfolio2";
import Services from "@/components/common/Services6";
import Skills from "@/components/common/Skills";
import TechStackMarquee from "@/components/common/TechStackMarquee";
import Header3, {
  type ProfileSocialLink,
} from "@/components/headers/Header3";
import type { OnepageNavItem } from "@/components/headers/OnepageNav2";
import Hero from "@/components/homes/home-7/Hero";

import OnePageFooter from "@/components/footers/OnePageFooter";
import MobileOnePageHeader from "@/components/headers/MobileOnePageHeader";

import MetaComponent from "@/components/common/Metacomponent";

const metadata = {
  title: "Moeez Ahmad | WordPress, React & Full Stack Developer",
  description:
    "Moeez Ahmad builds responsive React and Next.js applications, WordPress solutions, and Shopify storefronts.",
};

const homeNavigation: OnepageNavItem[] = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#features", text: "Services" },
  { id: 3, href: "#portfolio", text: "Portfolio" },
  { id: 4, href: "#experience", text: "Experience" },
  { id: 5, href: "#resume", text: "Education" },
  { id: 6, href: "#skills", text: "Skills" },
  { id: 7, href: "#contacts", text: "Contact" },
];

const socialLinks: ProfileSocialLink[] = [
  {
    href: "https://linkedin.com/in/ch-moeez-ahmad",
    label: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
  },
];

export default function HomePage7() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="index-seven">
        <Header3
          profileImage="/assets/images/dashboard-profile.png"
          sectionIds={homeNavigation}
          socialLinks={socialLinks}
        />
        <MobileOnePageHeader
          brandName="Moeez Ahmad"
          sectionIds={homeNavigation}
        />
        <div className="page-with-left-header">
          <Hero />
          <TechStackMarquee />
          <Services />
          <AboutSection />
          <Portfolio />
          <Education />
          <section id="skills">
            <Skills />
          </section>
          <Contact parentClass="get-in-touch-area tmp-section-gap" />
          <FAQSection />
          <OnePageFooter />
        </div>
      </div>
    </>
  );
}
