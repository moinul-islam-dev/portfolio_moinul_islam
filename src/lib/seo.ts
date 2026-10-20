import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const siteMetadataDefaults = {
  title: "S. M. Moinul Islam | Frontend & Full-stack Developer",
  titleTemplate: "%s | S. M. Moinul Islam",
  description:
    "Explore the portfolio of S. M. Moinul Islam, a developer from Jashore, Bangladesh, building responsive web applications with React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "S. M. Moinul Islam",
    "Moinul Islam",
    "Frontend Developer",
    "Full-stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Bangladesh Developer",
    "Jashore",
    "Junior Web Developer",
    "Software Engineer",
  ],
};

export function constructMetadata({
  title = siteMetadataDefaults.title,
  description = siteMetadataDefaults.description,
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  const ogImageUrl = `${siteConfig.siteUrl}/opengraph-image`;

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title,
    description,
    keywords: siteMetadataDefaults.keywords,
    authors: [{ name: siteConfig.formalName, url: siteConfig.siteUrl }],
    creator: siteConfig.formalName,
    publisher: siteConfig.formalName,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: `${siteConfig.formalName} Portfolio`,
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.formalName} — ${siteConfig.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
      creator: "@moinulislam",
    },
  };
}

export function generateStructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person`,
    name: siteConfig.formalName,
    alternateName: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteMetadataDefaults.description,
    url: siteConfig.siteUrl,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jashore",
      addressCountry: "Bangladesh",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "National University, Bangladesh",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Better Auth",
      "REST APIs",
      "MongoDB",
    ],
    sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: `${siteConfig.formalName} Portfolio`,
    description: siteMetadataDefaults.description,
    inLanguage: "en-US",
    author: {
      "@id": `${siteConfig.siteUrl}/#person`,
    },
  };

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [personSchema, webSiteSchema],
  });
}
