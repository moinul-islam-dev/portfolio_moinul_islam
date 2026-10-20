import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { engineeringPrinciples } from "@/data/engineering-approach";
import { Code, GitPullRequest, ShieldCheck, Cpu, Smartphone, Database } from "lucide-react";

export function EngineeringApproachSection() {
  const icons = [
    Code,
    Cpu,
    Database,
    ShieldCheck,
    GitPullRequest,
    Smartphone,
  ];

  return (
    <section
      id="approach"
      aria-label="Engineering Approach"
      className="py-20 sm:py-28 lg:py-32 bg-[#EAF0F8] text-[#152238] border-b border-[#D9E2EE]"
    >
      <Container size="wide">
        <SectionHeader
          number="04"
          eyebrow="METHODOLOGY & FOCUS"
          title="Engineering Approach & Learning Goals"
          description="How I approach software engineering challenges, maintain code clarity, and prioritize architectural decisions across personal and team projects."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((principle, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={principle.title}
                className="rounded-xl border border-[#D9E2EE] bg-[#FFFFFF] p-6 shadow-2xs hover:shadow-sm hover:border-[#1D4ED8] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF0F8] text-[#1D4ED8]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs text-[#526176]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#152238] tracking-tight mb-2">
                    {principle.title}
                  </h3>
                </div>

                <p className="text-sm text-[#526176] leading-relaxed mt-2">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
