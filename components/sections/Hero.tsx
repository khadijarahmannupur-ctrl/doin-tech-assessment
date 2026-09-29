"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[960px] lg:min-h-[1024px] bg-[#003BE2] bg-grid-pattern pt-[130px] sm:pt-[150px] pb-0 flex flex-col justify-between overflow-hidden"
    >
      {/* ================= 3D DECORATIVE SHAPES ================= */}
      {/* 1. Top-Left: Lime twist squiggle */}
      <div className="absolute top-[280px] -left-6 sm:left-[2%] w-[120px] h-[180px] lg:w-[170px] lg:h-[260px] pointer-events-none z-10 animate-float-slow hidden sm:block">
        <Image
          src="/assets/3d-cone-lime-twist-large.png"
          alt="3D Lime Twist Ornament"
          width={170}
          height={260}
          className="object-contain"
          priority
        />
      </div>

      {/* 2. Mid-Left: White spring squiggle */}
      <div className="absolute top-[480px] left-[5%] lg:left-[10%] w-[80px] h-[80px] lg:w-[110px] lg:h-[110px] pointer-events-none z-10 animate-float-slow hidden md:block" style={{ animationDelay: "1.5s" }}>
        <Image
          src="/assets/3d-spring-white.png"
          alt="3D White Spring"
          width={110}
          height={110}
          className="object-contain"
          priority
        />
      </div>

      {/* 3. Bottom-Left: White Donut / Torus */}
      <div className="absolute bottom-[40px] left-[2%] lg:left-[4%] w-[130px] h-[130px] lg:w-[170px] lg:h-[170px] pointer-events-none z-10 animate-float-slow hidden sm:block" style={{ animationDelay: "3s" }}>
        <Image
          src="/assets/3d-donut-white.png"
          alt="3D White Torus"
          width={170}
          height={170}
          className="object-contain"
          priority
        />
      </div>

      {/* 4. Top-Right: White Pyramid / Tetrahedron */}
      <div className="absolute top-[340px] right-[10%] lg:right-[14%] w-[110px] h-[110px] lg:w-[150px] lg:h-[150px] pointer-events-none z-10 animate-float-slow hidden md:block" style={{ animationDelay: "2s" }}>
        <Image
          src="/assets/3d-pyramid-white.png"
          alt="3D White Pyramid"
          width={150}
          height={150}
          className="object-contain"
          priority
        />
      </div>

      {/* 5. Mid/Bottom-Right: White Spring Squiggle */}
      <div className="absolute bottom-[80px] right-[4%] lg:right-[7%] w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] pointer-events-none z-10 animate-float-slow hidden sm:block" style={{ animationDelay: "1s" }}>
        <Image
          src="/assets/3d-spring-white-large.png"
          alt="3D White Spring"
          width={130}
          height={130}
          className="object-contain"
          priority
        />
      </div>

      {/* 6. Far-Right: Lime 3D Cone Shape */}
      <div className="absolute top-[260px] -right-8 sm:right-[1%] w-[130px] h-[180px] lg:w-[170px] lg:h-[240px] pointer-events-none z-10 animate-float-slow hidden sm:block">
        <Image
          src="/assets/3d-cone-lime-right.png"
          alt="3D Lime Cone"
          width={170}
          height={240}
          className="object-contain"
          priority
        />
      </div>

      {/* ================= HERO CONTENT & TYPOGRAPHY ================= */}
      <Container className="relative z-20 flex flex-col items-center text-center">
        {/* Main Headline */}
        <h1 className="max-w-[940px] font-poppins font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.12] tracking-tight text-white">
          Get Access to Hundreds <br className="hidden sm:inline" />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-[760px] font-sans text-sm sm:text-base md:text-lg text-[#E5E6E8] leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-8 sm:mt-9 w-full max-w-[580px] bg-white rounded-full p-2 sm:p-2 flex items-center shadow-xl border border-white/20 transition-all focus-within:ring-4 focus-within:ring-[#D4FB20]/30"
        >
          <div className="pl-4 pr-2 text-[#82868E] flex items-center pointer-events-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Course, topic, creator"
            className="flex-1 bg-transparent border-none outline-none font-sans text-sm sm:text-[15px] text-[#242528] placeholder:text-[#82868E] px-2 min-w-0"
            aria-label="Search courses, topics, or creators"
          />
          <button
            type="submit"
            className="rounded-full px-6 py-2.5 bg-[#D4FB20] hover:bg-[#c0e815] text-[#242528] font-sans font-semibold text-sm transition-all shadow-sm active:scale-95"
          >
            Search
          </button>
        </form>
      </Container>

      {/* ================= HERO PERSON & FLOATING CARDS ================= */}
      <div className="relative w-full max-w-[1240px] mx-auto mt-10 sm:mt-12 flex justify-center items-end px-4 z-20">
        <div className="relative w-full max-w-[760px] flex justify-center">
          
          {/* Lime Ring Background Shape */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] lg:w-[1050px] pointer-events-none z-0">
            <Image
              src="/assets/hero-lime-ring.png"
              alt="Lime Ring Background"
              width={1050}
              height={442}
              className="w-full object-contain"
              priority
            />
          </div>

          {/* Hero Person (Young man with headphones & laptop) */}
          <div className="relative z-10 w-[380px] sm:w-[540px] lg:w-[620px] aspect-[722/515]">
            <Image
              src="/assets/hero-person.png"
              alt="ByteSpace student smiling with laptop and headphones"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Card 1: UI/UX Design (Top-Left of Person) */}
          <div className="absolute top-[28%] sm:top-[26%] left-0 sm:left-[-30px] lg:left-[-60px] z-30 bg-white rounded-[16px] px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xl border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="font-poppins font-semibold text-xs sm:text-sm text-[#242528]">
              UI/UX Design
            </h3>
            <p className="text-[11px] sm:text-xs text-[#82868E] mt-0.5 font-sans whitespace-nowrap">
              200 Courses <span className="mx-1">•</span> 1000+ Students
            </p>
          </div>

          {/* Card 2: Happy Students (Bottom-Left of Person) */}
          <div className="absolute bottom-[25px] sm:bottom-[40px] left-[-10px] sm:left-[-40px] lg:left-[-80px] z-30 bg-white rounded-[16px] p-3.5 sm:p-4 shadow-2xl border border-gray-100 min-w-[200px] sm:min-w-[230px] transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-poppins font-semibold text-xs sm:text-sm text-[#242528]">
                Happy Students
              </h3>
              <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#82868E]">
                <span>4.5 (240)</span>
                <span className="text-[#FFB800]">★</span>
              </div>
            </div>
            {/* Avatars Stack + 2K+ */}
            <div className="flex items-center">
              <Image
                src="/assets/happy-students-avatars.png"
                alt="Student Avatars"
                width={210}
                height={38}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
          </div>

          {/* Card 3: Learning Progress (Right of Person) */}
          <div className="absolute top-[32%] sm:top-[30%] right-[-10px] sm:right-[-30px] lg:right-[-60px] z-30 bg-white rounded-[16px] p-4 sm:p-5 shadow-2xl border border-gray-100 min-w-[190px] sm:min-w-[220px] transition-transform duration-300 hover:-translate-y-1">
            <span className="text-[11px] sm:text-xs text-[#82868E] font-medium block">
              Learning Progress
            </span>
            <div className="font-poppins font-bold text-2xl sm:text-3xl text-[#242528] mt-1 mb-2">
              55%
            </div>
            {/* Horizontal progress bar matching Screenshot 2 */}
            <div className="w-full h-2 rounded-full bg-[#E5E6E8] overflow-hidden">
              <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
