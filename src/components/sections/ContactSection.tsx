import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/site-config";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="py-20 sm:py-28 lg:py-32 bg-[#081426] text-[#FFFFFF] relative overflow-hidden"
    >
      {/* Background architectural fine grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#F4F7FB 1px, transparent 1px), linear-gradient(90deg, #F4F7FB 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <SectionHeader
          number="06"
          eyebrow="COMMUNICATION & INQUIRIES"
          title="Get in Touch"
          description="I am actively seeking entry-level frontend or full-stack software engineering opportunities, internships, and collaborative software projects."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main invitation narrative card */}
          <div className="lg:col-span-7 rounded-2xl border border-[#263B55] bg-[#102A4C]/60 p-6 sm:p-8 lg:p-10 backdrop-blur-xs space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-tight">
              Let&apos;s build something reliable together.
            </h3>
            <p className="text-sm sm:text-base text-[#B4C2D5] leading-relaxed">
              Whether you have an opening for a junior frontend or full-stack developer, want to discuss my project implementations, or need a dedicated developer on your engineering team, feel free to reach out directly.
            </p>

            <div className="pt-4 border-t border-[#263B55] flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${siteConfig.email}?subject=Opportunity%20Discussion%20-%20S.%20M.%20Moinul%20Islam`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1D4ED8] hover:bg-[#1e40af] text-[#FFFFFF] text-sm sm:text-base font-semibold transition-all duration-200 shadow-md"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Send Direct Email</span>
              </a>

              <CopyEmailButton email={siteConfig.email} />
            </div>

            <p className="text-xs text-[#7894B8]">
              Response time: Typically within 24 hours &bull; Direct inbox communication without intermediaries
            </p>
          </div>

          {/* Quick contact details & profiles */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="rounded-xl border border-[#263B55] bg-[#102A4C]/40 p-4 sm:p-5 flex items-start gap-4 hover:border-[#1D4ED8] transition-colors">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#102A4C] border border-[#263B55] text-[#7894B8]">
                <Mail className="w-5 h-5 text-[#7894B8]" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-mono text-[#7894B8] uppercase tracking-wider block">
                  Email Address
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm sm:text-base font-semibold text-[#FFFFFF] hover:text-[#1D4ED8] transition-colors truncate block"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-xl border border-[#263B55] bg-[#102A4C]/40 p-4 sm:p-5 flex items-start gap-4 hover:border-[#1D4ED8] transition-colors">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#102A4C] border border-[#263B55] text-[#7894B8]">
                <Phone className="w-5 h-5 text-[#7894B8]" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-mono text-[#7894B8] uppercase tracking-wider block">
                  Phone / WhatsApp
                </span>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-sm sm:text-base font-semibold text-[#FFFFFF] hover:text-[#1D4ED8] transition-colors truncate block"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-xl border border-[#263B55] bg-[#102A4C]/40 p-4 sm:p-5 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#102A4C] border border-[#263B55] text-[#7894B8]">
                <MapPin className="w-5 h-5 text-[#7894B8]" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-mono text-[#7894B8] uppercase tracking-wider block">
                  Location
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#FFFFFF]">
                  {siteConfig.location}
                </p>
              </div>
            </div>

            {/* Verified External Profiles Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#263B55] bg-[#102A4C]/40 p-4 flex items-center justify-between hover:bg-[#102A4C] hover:border-[#1D4ED8] transition-colors group"
                aria-label="GitHub Profile (opens in a new tab)"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-[#7894B8] group-hover:text-[#FFFFFF]" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold text-[#FFFFFF]">
                    GitHub
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#7894B8] group-hover:text-[#FFFFFF]" aria-hidden="true" />
              </a>

              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#263B55] bg-[#102A4C]/40 p-4 flex items-center justify-between hover:bg-[#102A4C] hover:border-[#1D4ED8] transition-colors group"
                aria-label="LinkedIn Profile (opens in a new tab)"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#7894B8] group-hover:text-[#FFFFFF]" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold text-[#FFFFFF]">
                    LinkedIn
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#7894B8] group-hover:text-[#FFFFFF]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
