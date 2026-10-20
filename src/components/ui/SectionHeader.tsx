import React from "react";

interface SectionHeaderProps {
  number?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeader({
  number,
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl"
      } ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        {number && (
          <span
            className={`font-mono text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded border ${
              isDark
                ? "bg-[#102A4C] text-[#7894B8] border-[#263B55]"
                : "bg-[#EAF0F8] text-[#1D4ED8] border-[#D9E2EE]"
            }`}
          >
            {number}
          </span>
        )}
        {eyebrow && (
          <span
            className={`text-xs font-semibold uppercase tracking-widest ${
              isDark ? "text-[#7894B8]" : "text-[#526176]"
            }`}
          >
            {eyebrow}
          </span>
        )}
      </div>

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
          isDark ? "text-[#FFFFFF]" : "text-[#152238]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-[#B4C2D5]" : "text-[#526176]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
