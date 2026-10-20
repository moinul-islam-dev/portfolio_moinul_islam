import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "./MobileNavigation";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Approach", href: "#approach" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Skip to Content for Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1D4ED8] focus:text-[#FFFFFF] focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-30 w-full border-b border-[#263B55] bg-[#081426]/90 backdrop-blur-md transition-colors">
        <Container size="wide">
          <div className="flex h-16 items-center justify-between">
            {/* Brand Logo / Monogram */}
            <Link
              href="/"
              className="group flex items-center gap-3 text-[#FFFFFF] focus-visible:outline-2 focus-visible:outline-[#1D4ED8] rounded-md py-1"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded border border-[#263B55] bg-[#102A4C] font-mono text-xs font-bold text-[#F4F7FB] group-hover:border-[#1D4ED8] group-hover:text-[#FFFFFF] transition-colors">
                MI
              </span>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold tracking-tight text-[#FFFFFF] group-hover:text-[#7894B8] transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7894B8] hidden sm:block">
                  Frontend / Full-stack
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-1 lg:gap-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-xs lg:text-sm font-medium text-[#B4C2D5] hover:text-[#FFFFFF] hover:bg-[#102A4C]/60 rounded-md transition-colors border border-transparent hover:border-[#263B55]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Action CTA & Mobile Navigation */}
            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs lg:text-sm font-semibold rounded-lg bg-[#1D4ED8] hover:bg-[#1e40af] text-[#FFFFFF] transition-all duration-200 border border-transparent shadow-xs hover:shadow-md"
              >
                Get in Touch
              </Link>

              <MobileNavigation navItems={navItems} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
