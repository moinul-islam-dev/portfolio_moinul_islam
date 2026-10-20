"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

export function CopyEmailButton({ email, className = "" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email address copied" : `Copy email address ${email}`}
      className={`inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg border border-[#263B55] bg-[#102A4C] text-[#F4F7FB] hover:bg-[#1D4ED8] hover:border-[#1D4ED8] hover:text-[#FFFFFF] transition-all duration-200 cursor-pointer ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
          <span>Email Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 text-[#7894B8]" aria-hidden="true" />
          <span>Copy Email</span>
        </>
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
