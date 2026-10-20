import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-[#263B55] bg-[#081426] text-[#B4C2D5] py-12 lg:py-16">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-between pb-10 border-b border-[#263B55]">
          {/* Identity column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded border border-[#263B55] bg-[#102A4C] font-mono text-xs font-bold text-[#FFFFFF]">
                MI
              </span>
              <span className="text-base font-bold text-[#FFFFFF]">
                {siteConfig.formalName}
              </span>
            </div>
            <p className="text-sm text-[#B4C2D5]">
              {siteConfig.role}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#7894B8]">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Quick navigation links */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7894B8]">
              Sections
            </span>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#FFFFFF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect profiles */}
          <div className="space-y-3 md:text-right">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7894B8]">
              Verified Profiles
            </span>
            <div className="flex items-center gap-3 md:justify-end">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#263B55] bg-[#102A4C] text-xs font-medium text-[#F4F7FB] hover:text-[#FFFFFF] hover:border-[#1D4ED8] transition-colors"
                aria-label="GitHub Profile (opens in a new tab)"
              >
                <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#263B55] bg-[#102A4C] text-xs font-medium text-[#F4F7FB] hover:text-[#FFFFFF] hover:border-[#1D4ED8] transition-colors"
                aria-label="LinkedIn Profile (opens in a new tab)"
              >
                <LinkedinIcon className="w-3.5 h-3.5" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#263B55] bg-[#102A4C] text-xs font-medium text-[#F4F7FB] hover:text-[#FFFFFF] hover:border-[#1D4ED8] transition-colors"
                aria-label={`Send email to ${siteConfig.email}`}
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7894B8] gap-4">
          <p>
            &copy; {currentYear} {siteConfig.formalName}. All rights reserved.
          </p>
          <p className="font-mono">
            Crafted with Next.js &amp; TypeScript &bull; Monochromatic System
          </p>
        </div>
      </Container>
    </footer>
  );
}
