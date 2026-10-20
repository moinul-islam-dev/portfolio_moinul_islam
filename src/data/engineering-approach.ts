import { EngineeringPrinciple } from "@/types";

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    title: "Component Design & Reusability",
    description:
      "Crafting modular, single-responsibility React components that isolate logic, simplify testing, and adapt smoothly across varying viewport constraints.",
  },
  {
    title: "Routing & Application State",
    description:
      "Evaluating when state should live locally, in shared React Context, or in URL search params—prioritizing predictable data flow and minimal re-renders.",
  },
  {
    title: "API Integration & Data Handling",
    description:
      "Structuring asynchronous fetches with defensive error boundaries, loading skeletons, and strict TypeScript types matching the upstream data contracts.",
  },
  {
    title: "Authentication Fundamentals",
    description:
      "Exploring session lifecycles, route guards, protected API endpoints, and authentication libraries like Better Auth to protect sensitive workflows.",
  },
  {
    title: "Maintainable TypeScript & React",
    description:
      "Employing strict compiler settings, explicit interfaces, and descriptive naming conventions to maintain clarity as project scale expands.",
  },
  {
    title: "Responsive Interface Engineering",
    description:
      "Building mobile-first layouts with flexible CSS grids, fluid typography, touch targets, and accessible focus states without layout shifts.",
  },
];
