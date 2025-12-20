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
    period: "2024 — PRESENT",
    role: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    link: "https://www.klaviyo.com",
    description:
      "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
    tech: ["JavaScript", "TypeScript", "React", "Storybook"],
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
