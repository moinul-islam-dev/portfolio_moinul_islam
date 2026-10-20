import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, ArrowDown, MapPin, GraduationCap, Code2 } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden bg-[#081426] text-[#FFFFFF] pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40 border-b border-[#263B55]"
    >
      {/* Subtle geometric line pattern for editorial feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F4F7FB 1px, transparent 1px), linear-gradient(90deg, #F4F7FB 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Subtle brand radial glow (controlled, non-distracting) */}
      <div
        className="pointer-events-none absolute -top-48 right-0 h-96 w-96 rounded-full bg-[#1D4ED8]/10 blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main content column */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#263B55] bg-[#102A4C]/80">
              <span className="h-2 w-2 rounded-full bg-[#1D4ED8] animate-pulse" />
              <span className="text-xs font-mono font-medium tracking-widest text-[#B4C2D5] uppercase">
                JUNIOR FRONTEND / FULL-STACK DEVELOPER
              </span>
            </div>

            {/* Primary H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
              Building thoughtful web experiences with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#EAF0F8] to-[#7894B8]">
                modern JavaScript.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#B4C2D5] max-w-2xl leading-relaxed font-normal">
              I&apos;m S. M. Moinul Islam, a Computer Science and Engineering undergraduate from Bangladesh focused on building responsive web applications with React and Next.js. I enjoy exploring frontend architecture, API integration, authentication, and practical full-stack development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1D4ED8] hover:bg-[#1e40af] text-[#FFFFFF] text-sm sm:text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#263B55] bg-[#102A4C]/60 hover:bg-[#102A4C] text-[#F4F7FB] hover:text-[#FFFFFF] text-sm sm:text-base font-medium transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#7894B8]" aria-hidden="true" />
              </Link>
            </div>

            {/* Verified Quick Facts Strip */}
            <div className="pt-6 sm:pt-8 border-t border-[#263B55]/70 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7894B8] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs">
                  <span className="block font-medium text-[#FFFFFF]">Based in</span>
                  <span className="text-[#B4C2D5]">{siteConfig.location}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#7894B8] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs">
                  <span className="block font-medium text-[#FFFFFF]">B.Sc. in CSE</span>
                  <span className="text-[#B4C2D5]">National University, BD</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Code2 className="w-4 h-4 text-[#7894B8] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs">
                  <span className="block font-medium text-[#FFFFFF]">Core Stack</span>
                  <span className="text-[#B4C2D5]">React &bull; Next.js &bull; TypeScript</span>
                </div>
              </div>
            </div>
          </div>

          {/* Asymmetric Monogram & Architectural Spec Column */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-[#263B55] bg-[#102A4C]/40 p-6 sm:p-8 backdrop-blur-xs relative space-y-6">
              {/* Corner coordinate indicator */}
              <div className="flex items-center justify-between border-b border-[#263B55] pb-4">
                <span className="text-[11px] font-mono text-[#7894B8] tracking-widest uppercase">
                  SPEC // ENG-PROFILE
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE
                </span>
              </div>

              {/* Typographic Identity Block */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#263B55] bg-[#102A4C] font-mono text-2xl font-black text-[#FFFFFF] shadow-inner">
                  MI
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#FFFFFF]">
                    {siteConfig.formalName}
                  </h2>
                  <p className="text-xs text-[#B4C2D5] mt-0.5">
                    Junior Frontend / Full-stack Developer
                  </p>
                </div>
              </div>

              {/* Focus Pillars */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-[#263B55]/50">
                  <span className="text-[#7894B8]">Primary Library</span>
                  <span className="font-mono text-[#FFFFFF]">React 19 / Next.js 16</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#263B55]/50">
                  <span className="text-[#7894B8]">Type Safety</span>
                  <span className="font-mono text-[#FFFFFF]">Strict TypeScript</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#263B55]/50">
                  <span className="text-[#7894B8]">Styling System</span>
                  <span className="font-mono text-[#FFFFFF]">Tailwind CSS</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[#7894B8]">Opportunity</span>
                  <span className="font-mono text-[#7894B8]">Entry-level &amp; Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
