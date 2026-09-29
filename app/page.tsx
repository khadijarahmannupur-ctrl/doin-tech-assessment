import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PartnersRibbon } from "@/components/sections/PartnersRibbon";
import { CourseDirectory } from "@/components/sections/CourseDirectory";
import { DiverseCategories } from "@/components/sections/DiverseCategories";
import { PlatformHighlights } from "@/components/sections/PlatformHighlights";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <PartnersRibbon />
        <CourseDirectory />
        <DiverseCategories />
        <PlatformHighlights />
        <CtaBanner />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
