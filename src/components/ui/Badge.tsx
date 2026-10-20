import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "outline" | "accent";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "light",
  size = "md",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    light: "bg-[#EAF0F8] text-[#152238] border-[#D9E2EE]",
    dark: "bg-[#102A4C] text-[#F4F7FB] border-[#263B55]",
    outline: "bg-transparent text-[#526176] border-[#D9E2EE]",
    accent: "bg-[#1D4ED8]/10 text-[#1D4ED8] border-[#1D4ED8]/30",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-xs sm:text-sm px-3 py-1",
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-md border transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
