export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  architectureHighlights: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  imageSrc: string;
  imageAlt: string;
  featuredRole: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  statusOrScore: string;
  yearDetails: string;
  highlights?: string[];
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  formalName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  siteUrl: string;
  bio: string;
}
