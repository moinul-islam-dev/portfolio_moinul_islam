import { SiteConfig } from "@/types";

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.startsWith("http")) {
    return envUrl.replace(/\/+$/, "");
  }
  // Default canonical production URL placeholder
  return "https://moinul-islam.vercel.app";
}

export const siteConfig: SiteConfig = {
  name: "Moinul Islam",
  formalName: "S. M. Moinul Islam",
  role: "Junior Frontend / Full-stack Developer",
  tagline: "Building thoughtful web experiences with modern JavaScript.",
  location: "Jashore, Bangladesh",
  email: "mueen9770@gmail.com",
  phone: "+8801977021370",
  githubUrl: "https://github.com/moinul-islam-dev",
  linkedinUrl: "https://linkedin.com/in/devmoinulislam",
  siteUrl: getSiteUrl(),
  bio: "I'm S. M. Moinul Islam, a Computer Science and Engineering undergraduate from Bangladesh focused on building responsive web applications with React and Next.js. I enjoy exploring frontend architecture, API integration, authentication, and practical full-stack development.",
};
