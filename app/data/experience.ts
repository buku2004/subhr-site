export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  link: string;
  description: string;
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "October 2025",
    role: "Super Contributor",
    company: "Hacktoberfest",
    link: "https://hacktoberfest.com/",
    description:
      "Recognized as a Hacktoberfest Super Contributor for consistent, high-quality open-source contributions, including feature enhancements, bug fixes, and documentation improvements across multiple projects.",
    tech: ["JavaScript", "TypeScript", "React", "GitHub", "Open Source"],
  },
  {
    period: "July 2025",
    role: "Software Engineering Intern",
    company: "labmentix",
    link: "https://upstatement.com",
    description:
      "Designed and built a production-grade, AI-assisted, database-backed system for generating, validating, and monitoring webhooks. Implemented a scalable Node.js/Express backend with Redis for low-latency state management and event processing.",
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redis",
      "MongoDB",
      "Node.js",
    ],
  },
  {
    period: "2018 — 2024",
    role: "Lead Engineer",
    company: "Upstatement",
    link: "https://upstatement.com",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for diverse clients.",
    tech: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
    ],
  }
];
