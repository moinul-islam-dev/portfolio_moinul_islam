import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming languages used for application logic, scripting, and algorithmic problem solving.",
    skills: ["JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Frontend Engineering",
    description: "Modern component-based user interface development, responsive layout design, and design system integration.",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Next.js"],
  },
  {
    title: "Backend Fundamentals",
    description: "Server runtime environments, lightweight HTTP servers, and backend routing endpoints.",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Authentication & Data",
    description: "Session workflows, access control patterns, document databases, and external REST API consumption.",
    skills: ["Better Auth", "MongoDB", "REST API Integration"],
  },
  {
    title: "Tools & Workflow",
    description: "Version control systems, code hosting, and daily development environments.",
    skills: ["Git", "GitHub", "Visual Studio Code"],
  },
];
