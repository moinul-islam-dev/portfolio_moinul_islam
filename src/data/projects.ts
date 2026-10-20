import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "bazardor",
    number: "01",
    title: "Bazardor — Daily Market Price Tracker",
    subtitle: "Next.js App Router, Better Auth & REST API Integration",
    description:
      "A market-price application designed to track and present daily commodity prices across essential categories. Built with a dedicated focus on exploring Next.js App Router architecture and modern authentication patterns using Better Auth.",
    architectureHighlights: [
      "Session management and authentication implemented with Better Auth and MongoDB backing.",
      "Protected route control with proxy navigation handling for authorized access paths.",
      "Real-time commodity price ticker with percentage changes across categories including rice, lentils, oil, and produce.",
      "Server actions for authentication flows combined with route-level loading UI and custom not-found pages.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Better Auth",
      "Tailwind CSS",
      "HeroUI",
      "REST API",
      "MongoDB",
    ],
    liveUrl: "https://bazardor-app-xi.vercel.app/",
    githubUrl: "https://github.com/moinul-islam-dev/bazardor-assignment-07",
    imageSrc: "/images/projects/bazardor.png",
    imageAlt:
      "Bazardor web application showing commodity price tracking interface with Bengali category navigation and market rates",
    featuredRole: "Full-stack Next.js & Auth Architecture",
  },
  {
    id: "fitlog",
    number: "02",
    title: "FitLog — Interactive Workout Companion",
    subtitle: "Exercise Library, Plan Builder & Local State Persistence",
    description:
      "A structured workout companion that enables athletes and gym-goers to browse exercise libraries, assemble daily workout routines, and track execution metrics including active time and estimated caloric burn.",
    architectureHighlights: [
      "Dynamic data fetching from Cloudflare Workers REST API across dedicated workout categories.",
      "Shared application state management via React Context API powering live navbar counters and active plan updates.",
      "Persistent user sessions via browser localStorage (fitlog-plan, fitlog-savedPlan, fitlog-completed) across refreshes.",
      "Exercise completion workflow with live workout duration (minutes) and calorie totals.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Context API",
      "Tailwind CSS",
      "DaisyUI",
      "Lucide React",
    ],
    liveUrl: "https://my-fit-log.netlify.app/",
    githubUrl: "https://github.com/moinul-islam-dev/Fit-Log",
    imageSrc: "/images/projects/fitlog.png",
    imageAlt:
      "FitLog fitness application interface showing workout library, exercise cards, duration, calories, and planning controls",
    featuredRole: "Next.js App Router & State Management",
  },
  {
    id: "bpl-marketplace",
    number: "03",
    title: "BPL Player Marketplace",
    subtitle: "Interactive Roster Management & Budget Calculation",
    description:
      "An educational cricket squad management interface simulating Bangladesh Premier League player recruitment with virtual budget constraints, roster limits, and dynamic selection state.",
    architectureHighlights: [
      "Interactive squad draft engine with dynamic virtual balance deduction from an initial credit reserve.",
      "State management using React useState with defensive checks against duplicate player picks and budget overdrafts.",
      "Roster management toggle switching between available recruit pool and chosen squad lineup.",
      "Data ingestion using React Suspense boundaries paired with structured JSON player specifications.",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Vite",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    liveUrl: "https://silly-cat-c17295.netlify.app/",
    githubUrl: "https://github.com/moinul-islam-dev/bpl-player-marketplace",
    imageSrc: "/images/projects/bpl.png",
    imageAlt:
      "BPL Player Marketplace web app displaying cricket player cards, bidding controls, and credit balance",
    featuredRole: "React Component & State Architecture",
  },
];
