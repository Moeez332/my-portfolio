type TechStackItem = {
  name: string;
  icon?: string;
  mark: string;
  color: string;
};

export const techStack: TechStackItem[] = [
  { name: "React.js", icon: "fa-brands fa-react", mark: "R", color: "react" },
  { name: "Next.js", mark: "N", color: "next" },
  { name: "TypeScript", mark: "TS", color: "typescript" },
  { name: "JavaScript", icon: "fa-brands fa-js", mark: "JS", color: "javascript" },
  { name: "WordPress", icon: "fa-brands fa-wordpress", mark: "W", color: "wordpress" },
  { name: "WooCommerce", mark: "W", color: "woocommerce" },
  { name: "Shopify", mark: "S", color: "shopify" },
  { name: "PHP", mark: "PHP", color: "php" },
  {
    name: "Node.js",
    icon: "fa-brands fa-node-js",
    mark: "N",
    color: "node",
  },
  { name: "Express.js", mark: "Ex", color: "express" },
  { name: "REST APIs", mark: "API", color: "api" },
  { name: "MySQL", mark: "SQL", color: "mysql" },
  { name: "MongoDB", mark: "M", color: "mongodb" },
  { name: "Tailwind CSS", mark: "TW", color: "tailwind" },
  {
    name: "Elementor",
    icon: "fa-brands fa-elementor",
    mark: "E",
    color: "elementor",
  },
];
