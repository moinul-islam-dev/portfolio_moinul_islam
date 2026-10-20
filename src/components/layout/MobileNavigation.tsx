"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavigationProps {
  navItems: NavItem[];
}

export function MobileNavigation({ navItems }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
        className="p-2 text-[#F4F7FB] hover:text-[#FFFFFF] hover:bg-[#102A4C] rounded-lg border border-[#263B55] transition-colors focus-visible:outline-2 focus-visible:outline-[#1D4ED8]"
      >
        {isOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Menu className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#081426]/80 backdrop-blur-xs transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-navigation-menu"
        ref={menuRef}
        aria-hidden={!isOpen}
        className={`fixed top-16 right-0 bottom-0 z-50 w-full max-w-xs bg-[#081426] border-l border-[#263B55] p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            <span className="text-xs font-mono font-semibold text-[#7894B8] uppercase tracking-wider mb-3 px-3">
              Navigation
            </span>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="px-3 py-2.5 text-base font-medium text-[#F4F7FB] hover:text-[#FFFFFF] hover:bg-[#102A4C] rounded-lg transition-colors border border-transparent hover:border-[#263B55]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#263B55] space-y-3">
            <div className="text-xs text-[#B4C2D5]">
              <p className="font-semibold text-[#F4F7FB]">S. M. Moinul Islam</p>
              <p>Jashore, Bangladesh</p>
            </div>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold rounded-lg bg-[#1D4ED8] hover:bg-[#1e40af] text-[#FFFFFF] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
