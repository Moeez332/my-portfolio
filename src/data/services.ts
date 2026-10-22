import { slugify } from "@/utlis/slugify";

export const services = [
  {
    id: 1,
    icon: "fa-light fa-bezier-curve",
    title: "Frontend Development",
    projects: "ReactJS & Tailwind CSS",
    animationOrder: "1",
  },
  {
    id: 2,
    icon: "fa-light fa-pen-ruler",
    title: "WordPress Development",
    projects: "Custom Themes & Plugins",
    animationOrder: "2",
  },
  {
    id: 3,
    icon: "fa-light fa-lightbulb",
    title: "E-Commerce",
    projects: "WooCommerce Stores",
    animationOrder: "3",
  },
  {
    id: 4,
    icon: "fa-light fa-envelope",
    title: "API Integration",
    projects: "REST & Headless CMS",
    animationOrder: "4",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services2 = [
  {
    id: 1,
    num: "01.",
    title: "Frontend Development",
    description:
      "ReactJS, Tailwind CSS, Bootstrap, jQuery, and Material UI for building responsive, modern, and mobile-first user interfaces.",
    animationOrder: "1",
    isLink: true,
    column: 1,
  },
  {
    id: 2,
    num: "02.",
    title: "Backend & API Development",
    description:
      "Node.js, Express.js, RESTful API architecture, JWT/OAuth authentication, and third-party API integrations for secure web applications.",
    animationOrder: "2",
    isLink: true,
    column: 1,
  },
  {
    id: 3,
    num: "03.",
    title: "WordPress Development",
    description:
      "Custom theme development, plugin development, Elementor Pro, WooCommerce, ACF, CPT UI, and Yoast SEO for scalable WordPress websites.",
    animationOrder: "3",
    isLink: true,
    column: 1,
  },
  {
    id: 4,
    num: "04.",
    title: "E-Commerce Solutions",
    description:
      "WooCommerce stores with product configurators, payment gateway integrations, and checkout flow optimisation to maximise conversion rates.",
    animationOrder: "4",
    isLink: false,
    column: 2,
  },
  {
    id: 5,
    num: "05.",
    title: "Performance & SEO",
    description:
      "Core Web Vitals optimisation, caching (WP Rocket, W3 Total Cache), image compression, lazy loading, and Schema Markup implementation.",
    animationOrder: "5",
    isLink: false,
    column: 2,
  },
  {
    id: 6,
    num: "06.",
    title: "Security & Hosting",
    description:
      "WordPress security hardening, SSL/HTTPS, cPanel/WHM management, DNS configuration, malware removal, and live site migrations.",
    animationOrder: "6",
    isLink: false,
    column: 2,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services3 = [
  {
    id: 1,
    icon: "feather-map",
    title: "Frontend Development",
    description:
      "ReactJS, Tailwind CSS, Bootstrap for responsive and modern web interfaces.",
  },
  {
    id: 2,
    icon: "feather-cast",
    title: "WordPress Development",
    description:
      "Custom theme and plugin development with Elementor Pro and WooCommerce.",
  },
  {
    id: 3,
    icon: "feather-phone-call",
    title: "API Integration",
    description:
      "RESTful APIs, WordPress REST API, third-party services, and webhook pipelines.",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const serviceCards = [
  {
    title: "Frontend Development",
    description:
      "ReactJS, Next Js, Tailwind CSS, Bootstrap, jQuery, and Material UI for building responsive, modern user interfaces.",
  },
  {
    title: "Backend & API Development",
    description:
      "Node.js, Express.js, RESTful API architecture, JWT/OAuth authentication, and third-party API integrations.",
  },
  {
    title: "WordPress Development",
    description:
      "Custom theme development, plugin development, Elementor Pro, WooCommerce, ACF, and Yoast SEO for scalable WordPress websites.",
  },
  {
    title: "Shopify Development",
    description:
      "Shopify theme development, Liquid templating, custom app development, Storefront API, payment gateway integration, checkout customization, and headless commerce for scalable online stores.",
  },
];

export const services5 = [
  {
    title: "Frontend Development",
    description:
      "ReactJS, Tailwind CSS, Bootstrap, jQuery, and Material UI for building responsive, modern user interfaces.",
  },
  {
    title: "Backend & API Development",
    description:
      "Node.js, Express.js, RESTful API architecture, JWT/OAuth authentication, and third-party API integrations.",
  },
  {
    title: "WordPress Development",
    description:
      "Custom theme development, plugin development, Elementor Pro, WooCommerce, ACF, and Yoast SEO for scalable WordPress websites.",
  },
];
export const serviceCards2 = [
  {
    number: "01.",
    title: "Frontend Development",
    description:
      "ReactJS, Tailwind CSS, Bootstrap, jQuery, and Material UI for building responsive, modern user interfaces.",
  },
  {
    number: "02.",
    title: "Backend & API Development",
    description:
      "Node.js, Express.js, RESTful API architecture, JWT/OAuth authentication, and third-party API integrations.",
  },
  {
    number: "03.",
    title: "WordPress Development",
    description:
      "Custom theme development, plugin development, Elementor Pro, WooCommerce, ACF, and Yoast SEO for scalable WordPress websites.",
  },
];

export const serviceCards3 = [
  {
    iconClass: "fa-light fa-palette",
    title: "Frontend Development",
    description:
      "ReactJS, Tailwind CSS, Bootstrap for responsive and modern web interfaces.",
    animationOrder: 5,
  },
  {
    iconClass: "fa-light fa-print",
    title: "Backend & API",
    description:
      "Node.js, Express.js, RESTful APIs, and third-party integrations.",
    animationOrder: 4,
  },
  {
    iconClass: "fa-regular fa-code",
    title: "WordPress Development",
    description:
      "Custom theme and plugin development with Elementor Pro and WooCommerce.",
    animationOrder: 4,
  },
  {
    iconClass: "fa-regular fa-handshake",
    title: "E-Commerce & Hosting",
    description:
      "WooCommerce stores, cPanel/WHM management, SSL, and performance optimisation.",
    animationOrder: 5,
  },
];
export const allServices = [
  ...services,
  ...services2,
  ...services3,
];
