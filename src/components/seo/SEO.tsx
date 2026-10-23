import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Moeez Ahmad | Senior React, Next.js & WordPress Developer",
  description = "Senior frontend developer with 5+ years building React.js, Next.js, and WordPress solutions for global businesses. Open to remote roles and select freelance projects.",
  canonical = "https://portfolio-moeex.vercel.app/",
  image = "https://portfolio-moeex.vercel.app/assets/images/hero.png",
}) => {

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Moeez Ahmad",
    "url": canonical,
    "image": image,
    "jobTitle": "Senior Frontend Developer",
    "description": description,
    "worksFor": {
      "@type": "Organization",
      "name": "Buckingham UK"
    },
    "knowsAbout": [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "WordPress",
      "Custom WordPress Themes",
      "WordPress Plugins",
      "WooCommerce",
      "Shopify",
      "PHP",
      "Node.js",
      "Tailwind CSS",
      "Frontend Development",
      "E-commerce Development"
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Superior University Lahore"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "GC University Faisalabad"
      }
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
      "https://linkedin.com/in/ch-moeez-ahmad",
      canonical
    ],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "url": canonical,
    "name": title,
    "mainEntity": personSchema,
    "about": personSchema,
    "primaryImage": image,
    "inLanguage": "en-PK",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://portfolio-moeex.vercel.app/",
      "name": "Moeez Ahmad Portfolio"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": canonical,
    "name": title,
    "description": description,
    "inLanguage": "en-PK",
    "isFamilyFriendly": true,
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
        "name": "What technologies do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My core stack includes React.js, Next.js, TypeScript, and WordPress. I also work with Node.js, Express.js, PHP, MySQL, MongoDB, Tailwind CSS, WooCommerce, and Shopify."
        }
      },
      {
        "@type": "Question",
        "name": "Are you available for full-time remote roles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I’m open to senior frontend and full-stack remote opportunities, and I’m comfortable collaborating with distributed teams across time zones."
        }
      },
      {
        "@type": "Question",
        "name": "Do you take on freelance or contract projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Selectively, yes. I consider React.js, Next.js, WordPress, and WooCommerce projects that align with my experience and availability."
        }
      },
      {
        "@type": "Question",
        "name": "How do you manage communication and deadlines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I agree on clear milestones, share regular progress updates, and use collaborative workflows to keep work visible and delivery on track."
        }
      },
      {
        "@type": "Question",
        "name": "Can you join an existing codebase or team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. I can contribute to existing React and WordPress projects, follow established Git and review practices, and work closely with your team."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-launch support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I can help with ongoing WordPress maintenance, security and plugin updates, and performance checks, as well as React and Next.js fixes and feature improvements."
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