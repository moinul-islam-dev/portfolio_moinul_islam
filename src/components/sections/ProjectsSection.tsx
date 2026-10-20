import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/data/projects";
import { ExternalLink, CheckCircle2, Layers } from "lucide-react";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="py-20 sm:py-28 lg:py-32 bg-[#F4F7FB] text-[#152238] border-b border-[#D9E2EE]"
    >
      <Container size="wide">
        <SectionHeader
          number="01"
          eyebrow="PORTFOLIO WORK"
          title="Selected Projects & Practical Builds"
          description="A showcase of real, working web applications demonstrating frontend engineering fundamentals, state management, API integration, and modern authentication patterns."
          theme="light"
        />

        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <article
                key={project.id}
                className="rounded-2xl border border-[#D9E2EE] bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                {/* Project Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#D9E2EE]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#1D4ED8] bg-[#EAF0F8] px-2.5 py-1 rounded border border-[#D9E2EE]">
                      PROJECT {project.number}
                    </span>
                    <span className="text-xs font-mono font-medium text-[#526176] uppercase tracking-wide">
                      {project.featuredRole}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg border border-[#D9E2EE] bg-[#F4F7FB] text-[#152238] hover:bg-[#EAF0F8] hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors"
                        aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                      >
                        <GithubIcon className="w-4 h-4" aria-hidden="true" />
                        <span>Source Code</span>
                      </a>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-[#1D4ED8] hover:bg-[#1e40af] text-[#FFFFFF] transition-colors shadow-xs"
                      aria-label={`View live demo of ${project.title} (opens in a new tab)`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* Editorial Split Layout */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Column: Description & Architecture */}
                  <div
                    className={`space-y-6 ${
                      isEven ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"
                    }`}
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#152238] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#1D4ED8]">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#526176] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architecture & Engineering Highlights */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#152238]">
                        <Layers className="w-3.5 h-3.5 text-[#1D4ED8]" aria-hidden="true" />
                        <span>Engineering Implementation</span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#526176]">
                        {project.architectureHighlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="pt-2">
                      <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#526176] mb-2.5">
                        Technologies Used
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="light" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: High-fidelity Browser View */}
                  <div
                    className={`${
                      isEven ? "lg:col-span-7 lg:order-1" : "lg:col-span-7"
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl border border-[#D9E2EE] bg-[#081426] shadow-sm group">
                      {/* Realistic Browser Window Bar */}
                      <div className="flex items-center justify-between border-b border-[#263B55] bg-[#102A4C] px-4 py-2.5">
                        <div className="flex items-center gap-1.5" aria-hidden="true">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#7894B8]/40" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#7894B8]/40" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#7894B8]/40" />
                        </div>
                        <div className="flex items-center justify-center max-w-[260px] truncate px-3 py-0.5 rounded bg-[#081426] text-[11px] font-mono text-[#B4C2D5]">
                          {project.liveUrl.replace("https://", "")}
                        </div>
                        <div className="w-8" aria-hidden="true" />
                      </div>

                      {/* Project Screenshot */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative aspect-16/10 w-full overflow-hidden bg-[#F4F7FB] focus:outline-hidden"
                        tabIndex={-1}
                        aria-label={`Open live preview for ${project.title}`}
                      >
                        <Image
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
