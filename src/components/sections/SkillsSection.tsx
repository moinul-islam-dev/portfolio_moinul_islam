import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/skills";
import { Check } from "lucide-react";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF] text-[#152238] border-b border-[#D9E2EE]"
    >
      <Container size="wide">
        <SectionHeader
          number="03"
          eyebrow="TECHNICAL TOOLKIT"
          title="Skills & Technologies"
          description="A categorized breakdown of programming languages, libraries, frameworks, and developer workflows I actively work with."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-[#D9E2EE] bg-[#F4F7FB]/50 p-6 hover:bg-[#F4F7FB] hover:border-[#1D4ED8]/40 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D9E2EE]">
                  <h3 className="text-base font-bold text-[#152238] tracking-tight">
                    {category.title}
                  </h3>
                  <span className="font-mono text-xs text-[#526176]">
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-[#526176] mb-5 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skill list with subtle check indicators */}
              <ul className="space-y-2 pt-2 border-t border-[#D9E2EE]/60">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between text-sm font-medium text-[#152238] py-1 px-2 rounded-md hover:bg-[#EAF0F8] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Check
                        className="w-3.5 h-3.5 text-[#1D4ED8]"
                        aria-hidden="true"
                      />
                      <span>{skill}</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#526176] uppercase tracking-wider">
                      Verified
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
