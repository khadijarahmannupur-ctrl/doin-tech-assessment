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
      className="relative min-h-fit sm:min-h-[960px] lg:min-h-[1024px] bg-[#003BE2] bg-grid-pattern pt-[110px] sm:pt-[150px] pb-10 sm:pb-0 flex flex-col justify-between overflow-hidden"
    >
      {/* ================= 3D DECORATIVE SHAPES ================= */}
      {/* 1. Top-Left: Lime twist spring */}
      <div className="absolute top-[150px] sm:top-[170px] left-[0%] sm:left-[0%] w-[280px] h-[280px] lg:w-[260px] lg:h-[380px] pointer-events-none z-10 animate-float-slow hidden sm:block">
        <Image
          src="/assets/lime-twist-spring.png"
          alt=""
          width={140}
          height={210}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* 2. Mid-Left: White spring squiggle (small) */}
      <div className="absolute top-[340px] sm:top-[360px] left-[3%] lg:left-[15%] w-[55px] h-[55px] lg:w-[150px] lg:h-[150px] pointer-events-none z-10 animate-float-slow hidden md:block" style={{ animationDelay: "1.5s" }}>
        <Image
          src="/assets/white-spring-small.png"
          alt=""
          width={70}
          height={70}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* 3. Bottom-Left: White Donut / Torus */}
      <div className="absolute bottom-[60px] left-[1%] lg:left-[3%] w-[110px] h-[85px] lg:w-[250px] lg:h-[250px] pointer-events-none z-10 animate-float-slow hidden sm:block" style={{ animationDelay: "3s" }}>
        <Image
          src="/assets/white-donut.png"
          alt=""
          width={140}
          height={105}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* 4. Top-Right: White Pyramid / Triangle */}
      <div className="absolute top-[400px] sm:top-[420px] right-[9%] lg:right-[10%] w-[75px] h-[75px] lg:w-[180px] lg:h-[180px] pointer-events-none z-10 animate-float-slow hidden md:block" style={{ animationDelay: "2s" }}>
        <Image
          src="/assets/white-triangle.png"
          alt=""
          width={180}
          height={180}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* 5. Far Top-Right: Lime tapered cone (partially cropped by edge, like Figma) */}
      <div className="absolute top-[130px] sm:top-[150px] right-0 sm:-right-10 lg:-right-14 w-[70px] h-[110px] lg:w-[200px] lg:h-[200px] pointer-events-none z-10 animate-float-slow hidden sm:block">
        <Image
          src="/assets/lime-cone-tapered.png"
          alt=""
          width={110}
          height={180}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* 6. Bottom-Right: White spring squiggle */}
      <div className="absolute bottom-[70px] right-[3%] lg:right-[6%] w-[60px] h-[60px] lg:w-[200px] lg:h-[200px] pointer-events-none z-10 animate-float-slow hidden sm:block" style={{ animationDelay: "1s" }}>
        <Image
          src="/assets/white-spring-small.png"
          alt=""
          width={80}
          height={80}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* ================= HERO CONTENT & TYPOGRAPHY ================= */}
      <Container className="relative z-20 flex flex-col items-center text-center">
        <h1 className="max-w-[940px] font-poppins font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.12] tracking-tight text-white">
          Get Access to Hundreds <br className="hidden sm:inline" />
          Courses Available
        </h1>

        <p className="mt-5 max-w-[760px] font-sans text-sm sm:text-base md:text-lg text-[#E5E6E8] leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-8 sm:mt-9 w-full max-w-[580px] bg-white rounded-full p-2 sm:p-2 flex items-center shadow-xl border border-white/20 transition-all focus-within:ring-4 focus-within:ring-[#D4FB20]/30"
        >
          <div className="pl-4 pr-2 text-[#82868E] flex items-center pointer-events-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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

      {/* --- MOBILE LAYOUT (below sm): stacked, no overlap --- */}
      <div className="sm:hidden relative w-full mt-8 px-4 z-20">
        <div className="relative w-full flex justify-center">
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[300px] pointer-events-none z-0">
            <Image
              src="/assets/hero-lime-ring.png"
              alt=""
              width={300}
              height={126}
              className="w-full object-contain"
              priority
            />
          </div>
          <div className="relative z-10 w-[240px] aspect-[722/515]">
            <Image
              src="/assets/hero-person.png"
              alt="ByteSpace student smiling with laptop and headphones"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Cards stacked below image, not overlapping */}
        <div className="mt-5 flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex-1 bg-white rounded-[16px] px-4 py-3 shadow-lg border border-gray-100">
              <h3 className="font-poppins font-semibold text-xs text-[#242528]">UI/UX Design</h3>
              <p className="text-[10px] text-[#82868E] mt-0.5 font-sans whitespace-nowrap">
                200 Courses <span className="mx-1">•</span> 1000+ Students
              </p>
            </div>
            <div className="flex-1 bg-white rounded-[16px] p-3 shadow-lg border border-gray-100">
              <span className="text-[10px] text-[#82868E] font-medium block">Learning Progress</span>
              <div className="font-poppins font-bold text-lg text-[#242528] mt-0.5 mb-1.5">55%</div>
              <div className="w-full h-1.5 rounded-full bg-[#E5E6E8] overflow-hidden">
                <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[16px] p-3.5 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-poppins font-semibold text-xs text-[#242528]">Happy Students</h3>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-[#82868E]">
                <span>4.5 (240)</span>
                <span className="text-[#FFB800]">★</span>
              </div>
            </div>
            <Image
              src="/assets/happy-students-avatars.png"
              alt="Student Avatars"
              width={210}
              height={38}
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* --- DESKTOP/TABLET LAYOUT (sm and up): floating cards, unchanged --- */}
      <div className="hidden sm:flex relative w-full max-w-[1240px] mx-auto mt-10 sm:mt-12 justify-center items-end px-4 z-20">
        <div className="relative w-full max-w-[760px] flex justify-center">

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[850px] lg:w-[1050px] pointer-events-none z-0">
            <Image
              src="/assets/hero-lime-ring.png"
              alt=""
              width={1050}
              height={442}
              className="w-full object-contain"
              priority
            />
          </div>

          <div className="relative z-10 w-[540px] lg:w-[620px] aspect-[722/515]">
            <Image
              src="/assets/hero-person.png"
              alt="ByteSpace student smiling with laptop and headphones"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          <div className="absolute top-[26%] left-[-30px] lg:left-[-60px] z-30 bg-white rounded-[16px] px-5 py-3.5 shadow-2xl border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="font-poppins font-semibold text-sm text-[#242528]">UI/UX Design</h3>
            <p className="text-xs text-[#82868E] mt-0.5 font-sans whitespace-nowrap">
              200 Courses <span className="mx-1">•</span> 1000+ Students
            </p>
          </div>

          <div className="absolute bottom-[40px] left-[-40px] lg:left-[-80px] z-30 bg-white rounded-[16px] p-4 shadow-2xl border border-gray-100 min-w-[230px] transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-poppins font-semibold text-sm text-[#242528]">Happy Students</h3>
              <div className="flex items-center gap-1 text-xs font-semibold text-[#82868E]">
                <span>4.5 (240)</span>
                <span className="text-[#FFB800]">★</span>
              </div>
            </div>
            <Image
              src="/assets/happy-students-avatars.png"
              alt="Student Avatars"
              width={210}
              height={38}
              className="h-9 w-auto object-contain"
            />
          </div>

          <div className="absolute top-[30%] right-[-30px] lg:right-[-60px] z-30 bg-white rounded-[16px] p-5 shadow-2xl border border-gray-100 min-w-[220px] transition-transform duration-300 hover:-translate-y-1">
            <span className="text-xs text-[#82868E] font-medium block">Learning Progress</span>
            <div className="font-poppins font-bold text-3xl text-[#242528] mt-1 mb-2">55%</div>
            <div className="w-full h-2 rounded-full bg-[#E5E6E8] overflow-hidden">
              <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};