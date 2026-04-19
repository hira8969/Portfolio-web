/**
 * PortfolioData (Model)
 * ─────────────────────
 * Static data for the portfolio: skills, language colors, and fallback repos.
 * This is the single source of truth for all data displayed on the site.
 */

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "REST APIs",
  "Express.js",
  "MongoDB",
  "SQL",
  "Tailwind CSS",
  "Bootstrap",
  "Responsive Design",
  "UI/UX Design",
  "VS Code",
  "ServiceNow",
  "Agile",
  "Problem Solving",
  "Full Stack Development",
  "Web Performance",
  "Accessibility",
  "Webpack",
  "npm",
];

export const langColors = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3572A5",
  Java: "#B07219",
  HTML: "#E34C26",
  CSS: "#563D7C",
  C: "#555555",
  "C++": "#F34B7D",
  "C#": "#178600",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Shell: "#89E051",
  Vue: "#41B883",
  Svelte: "#FF3E00",
  "Jupyter Notebook": "#DA5B0B",
  SCSS: "#C6538C",
  Lua: "#000080",
  Dockerfile: "#384D54",
  Nix: "#7E7EFF",
  Zig: "#EC915C",
  EJS: "#A91E50",
  Makefile: "#427819",
};

export const fallbackRepos = [
  {
    name: "Portfolio Website",
    description:
      "A premium minimal portfolio built from scratch with vanilla HTML, CSS, and JavaScript. Features dark mode, scroll animations, and responsive design.",
    language: "HTML",
    stargazers_count: 5,
    html_url: "https://github.com/hira8969",
  },
  {
    name: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and beautiful data visualizations using modern web APIs.",
    language: "JavaScript",
    stargazers_count: 3,
    html_url: "https://github.com/hira8969",
  },
  {
    name: "Task Manager App",
    description:
      "Full-stack task management application with user authentication, drag-and-drop kanban boards, and real-time updates.",
    language: "TypeScript",
    stargazers_count: 8,
    html_url: "https://github.com/hira8969",
  },
  {
    name: "Chat Application",
    description:
      "Real-time messaging platform built with Node.js and WebSocket. Supports private rooms, message history, and typing indicators.",
    language: "JavaScript",
    stargazers_count: 4,
    html_url: "https://github.com/hira8969",
  },
  {
    name: "E-Commerce Starter",
    description:
      "A production-ready e-commerce template with product catalog, cart functionality, checkout flow, and payment integration.",
    language: "React",
    stargazers_count: 12,
    html_url: "https://github.com/hira8969",
  },
  {
    name: "API Gateway Service",
    description:
      "Lightweight API gateway built with Express.js featuring rate limiting, request logging, and dynamic route configuration.",
    language: "Node.js",
    stargazers_count: 6,
    html_url: "https://github.com/hira8969",
  },
];

/**
 * Returns the dot color for a given programming language.
 * @param {string|null} lang - The language name
 * @returns {string} Hex color code
 */
export function getLangColor(lang) {
  if (!lang) return "#6B7B98";
  return langColors[lang] || "#6B7B98";
}
