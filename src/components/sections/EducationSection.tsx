import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { educationHistory } from "@/data/education";
import { GraduationCap, Award, Calendar } from "lucide-react";

export function EducationSection() {
  return (
    <section
      id="education"
      aria-label="Education History"
      className="py-20 sm:py-28 lg:py-32 bg-[#F4F7FB] text-[#152238] border-b border-[#D9E2EE]"
    >
      <Container size="wide">
        <SectionHeader
          number="05"
          eyebrow="ACADEMIC BACKGROUND"
          title="Education"
          description="Formal academic qualifications in Computer Science and Engineering, secondary, and higher secondary education."
          theme="light"
        />

        <div className="relative border-l-2 border-[#D9E2EE] ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-10">
          {educationHistory.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker icon */}
              <div
                className="absolute -left-[33px] sm:-left-[49px] top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D9E2EE] bg-[#FFFFFF] text-[#1D4ED8] group-hover:border-[#1D4ED8] transition-colors"
                aria-hidden="true"
              >
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Education Card */}
              <div className="rounded-xl border border-[#D9E2EE] bg-[#FFFFFF] p-6 sm:p-8 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#D9E2EE]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#152238]">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-[#1D4ED8] mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#EAF0F8] text-[#152238] border border-[#D9E2EE]">
                      <Award className="w-3.5 h-3.5 text-[#1D4ED8]" aria-hidden="true" />
                      <span>{item.statusOrScore}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F4F7FB] text-[#526176] border border-[#D9E2EE]">
                      <Calendar className="w-3.5 h-3.5 text-[#526176]" aria-hidden="true" />
                      <span>{item.yearDetails}</span>
                    </span>
                  </div>
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#526176]">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#1D4ED8] font-bold">&bull;</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
