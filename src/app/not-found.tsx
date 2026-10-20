import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#081426] text-[#FFFFFF]">
      <Header />
      <main id="main-content" className="flex-1 flex items-center justify-center py-24 sm:py-32">
        <Container size="narrow" className="text-center space-y-6">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl border border-[#263B55] bg-[#102A4C] text-[#7894B8]">
            <Compass className="w-8 h-8 text-[#1D4ED8]" aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold text-[#7894B8] tracking-widest uppercase block">
              ERROR 404 &bull; ROUTE NOT FOUND
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FFFFFF]">
              Page Not Found
            </h1>
          </div>

          <p className="text-base text-[#B4C2D5] max-w-md mx-auto leading-relaxed">
            The page you requested does not exist or may have been relocated. You can return to the portfolio overview to explore projects, technical skills, and experience.
          </p>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1D4ED8] hover:bg-[#1e40af] text-[#FFFFFF] font-semibold text-sm transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Portfolio Homepage</span>
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
