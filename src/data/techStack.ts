type TechStackItem = {
  name: string;
  icon?: string;
  mark: string;
  color: string;
};

export const techStack: TechStackItem[] = [
  { name: "React.js", icon: "fa-brands fa-react", mark: "R", color: "react" },
  { name: "Next.js", mark: "N", color: "next" },
  {
    name: "Node.js",
    icon: "fa-brands fa-node-js",
    mark: "N",
    color: "node",
  },
  { name: "JavaScript", icon: "fa-brands fa-js", mark: "JS", color: "javascript" },
  {
    name: "WordPress",
    icon: "fa-brands fa-wordpress",
    mark: "W",
    color: "wordpress",
  },
  { name: "Express.js", mark: "Ex", color: "express" },
  { name: "MongoDB", mark: "M", color: "mongodb" },
  {
    name: "Elementor",
    icon: "fa-brands fa-elementor",
    mark: "E",
    color: "elementor",
  },
];
