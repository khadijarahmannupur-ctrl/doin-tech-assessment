import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex flex-col justify-center items-center bg-[#003BE2] bg-grid-pattern pt-[140px] pb-24 px-4 text-center text-white relative overflow-hidden">
        {/* Giant 404 Typography Watermark */}
        <div className="font-poppins font-bold text-7xl sm:text-9xl md:text-[160px] lg:text-[200px] text-white/10 select-none tracking-widest pointer-events-none mb-[-40px] sm:mb-[-60px]">
          404
        </div>

        <div className="relative z-10 max-w-[700px] mx-auto flex flex-col items-center">
          <h1 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4">
            The page you are looking for doesn&apos;t exist
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#E5E6E8] max-w-[480px] leading-relaxed mb-8">
            Try to use a correct url or go back to homepage to start again.
          </p>

          <Button
            href="/"
            variant="primary"
            size="lg"
            className="px-8 font-bold shadow-xl hover:shadow-2xl"
          >
            Go to Homepage
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
