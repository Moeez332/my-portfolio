import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "profile";
}

const SEO: React.FC<SEOProps> = ({
  title = "Moeez Ahmad | Senior Full-Stack WordPress & Frontend Developer in Lahore, Pakistan",
  description = "Moeez Ahmad is a Senior Full-Stack WordPress Developer, UI/UX Developer, and Senior Frontend Developer based in Lahore, Pakistan. Expert in custom WordPress theme & plugin engineering, WooCommerce solutions, React.js, Next.js, PHP, TypeScript, JavaScript, and Tailwind CSS.",
  canonical = "https://portfolio-moeex.vercel.app/",
  image = "https://portfolio-moeex.vercel.app/assets/images/hero.png",
  type = "profile",
}) => {

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Moeez Ahmad",
    "alternateName": ["Moeez", "Moeez Ahmad Dev"],
    "url": canonical,
    "image": image,
    "jobTitle": [
      "Senior Full-Stack WordPress Developer",
      "Senior Frontend Developer",
      "UI/UX Developer",
      "WordPress Developer in Pakistan",
      "Frontend Developer in Pakistan",
      "Full-Stack Developer Lahore"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Self-Employed",
      "url": "https://portfolio-moeex.vercel.app/",
      "sameAs": [
        "https://linkedin.com/in/moeez-ahmad",
        "https://github.com/Moeez332",
        "https://twitter.com/moeezdev"
      ]
    },
    "knowsAbout": [
      "Custom WordPress Theme Development",
      "Custom WordPress Plugin Engineering",
      "WooCommerce Solutions",
      "React.js Development",
      "Next.js Development",
      "PHP Development",
      "TypeScript Development",
      "JavaScript Development",
      "Tailwind CSS",
      "UI/UX Design",
      "Frontend Development",
      "Full-Stack Development"
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": "Urdu",
        "alternateName": "ur"
      }
    ],
    "location": {
      "@type": "Place",
      "name": "Lahore, Pakistan",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      }
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Lahore, Pakistan"
      },
      {
        "@type": "Place",
        "name": "Pakistan"
      },
      {
        "@type": "Place",
        "name": "Worldwide"
      }
    ],
    "sameAs": [
      "https://linkedin.com/in/moeez-ahmad",
      "https://github.com/Moeez332",
      "https://twitter.com/moeezdev",
      canonical
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Senior Full-Stack WordPress & Frontend Developer"
    },
    "award": "Top Rated Frontend & WordPress Developer in Pakistan",
    "priceRange": "$$",
    "additionalType": type
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "url": canonical,
    "name": title,
    "about": personSchema,
    "primaryImage": image,
    "inLanguage": "en-PK",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://portfolio-moeex.vercel.app/",
      "name": "Moeez Ahmad Portfolio",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://portfolio-moeex.vercel.app/search?q={search_string}",
        "query-input": "required name=search_string"
      }
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": canonical,
    "name": title,
    "alternateName": "Moeez Ahmad Developer",
    "description": description,
    "inLanguage": "en-PK",
    "isFamilyFriendly": true,
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://portfolio-moeex.vercel.app/search?q={search_string}",
        "query-input": "required name=search_string"
    },
    "publisher": {
      "@type": "Person",
      "name": "Moeez Ahmad",
      "url": canonical
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best Frontend Developer in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Moeez Ahmad is a Senior Frontend Developer and Full-Stack WordPress Developer based in Lahore, Pakistan, specializing in React.js, Next.js, and custom WordPress development."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the best WordPress Developer in Lahore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Moeez Ahmad is a Senior WordPress Developer in Lahore, Pakistan, expert in custom theme and plugin engineering, WooCommerce solutions, and full-stack web development."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the best Full-Stack Developer in Lahore, Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Moeez Ahmad is a Senior Full-Stack Developer based in Lahore, Pakistan, with expertise in WordPress, WooCommerce, React.js, Next.js, PHP, TypeScript, JavaScript, and Tailwind CSS."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
};

export default SEO;