import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";
import { Terminal, Lightbulb, Compass, GitBranch } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Terminal,
      title: "Frontend Engineering",
      description:
        "Building user interfaces with React, Next.js App Router, modern CSS layouts, and strict TypeScript types.",
    },
    {
      icon: Lightbulb,
      title: "Practical Curiosity",
      description:
        "Learning through continuous project builds, dissecting libraries, and exploring how application subsystems connect.",
    },
    {
      icon: Compass,
      title: "Full-stack Fundamentals",
      description:
        "Experimenting with Node.js and Express servers, MongoDB schemas, and Better Auth authentication architectures.",
    },
    {
      icon: GitBranch,
      title: "Structured Workflow",
      description:
        "Practicing version-controlled development with Git, clean commit conventions, and descriptive pull requests.",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About S. M. Moinul Islam"
      className="py-20 sm:py-28 lg:py-32 bg-[#102A4C] text-[#F4F7FB] border-b border-[#263B55]"
    >
      <Container size="wide">
        <SectionHeader
          number="02"
          eyebrow="BACKGROUND & INTERESTS"
          title="About Me"
          description="A Computer Science and Engineering undergraduate focused on creating clear, dependable, and accessible web experiences."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative text column */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#B4C2D5] leading-relaxed">
            {profile.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-4 border-t border-[#263B55] flex flex-wrap gap-6 text-xs sm:text-sm font-mono text-[#7894B8]">
              <div>
                <span className="block text-[#F4F7FB] font-semibold">Location</span>
                <span>{profile.hometown}</span>
              </div>
              <div>
                <span className="block text-[#F4F7FB] font-semibold">Academic Status</span>
                <span>{profile.currentSemester}, Nu CSE</span>
              </div>
              <div>
                <span className="block text-[#F4F7FB] font-semibold">Seeking</span>
                <span>Junior Frontend &bull; Full-stack Roles</span>
              </div>
            </div>
          </div>

          {/* Pillars grid column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#263B55] bg-[#081426]/70 p-5 space-y-3 hover:border-[#1D4ED8] transition-colors"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#102A4C] border border-[#263B55] text-[#7894B8]">
                    <Icon className="w-4 h-4 text-[#7894B8]" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-[#FFFFFF]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#B4C2D5] leading-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
