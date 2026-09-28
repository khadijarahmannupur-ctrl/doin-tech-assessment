"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const coursesSection = document.getElementById("courses");
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[920px] lg:min-h-[1024px] bg-[#003BE2] bg-grid-pattern pt-[140px] pb-[80px] lg:pb-[120px] flex flex-col justify-between overflow-hidden"
    >
      {/* Decorative 3D background shapes */}
      <div className="absolute top-[180px] left-[5%] w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] pointer-events-none opacity-80 animate-float-slow hidden sm:block">
        <Image
          src="/assets/cone-small.png"
          alt="Decorative Cone 3D"
          width={160}
          height={160}
          className="object-contain filter drop-shadow-2xl"
          priority
        />
      </div>

      <div className="absolute bottom-[100px] right-[4%] w-[140px] h-[140px] lg:w-[190px] lg:h-[190px] pointer-events-none opacity-85 animate-float-slow hidden md:block" style={{ animationDelay: "2.5s" }}>
        <Image
          src="/assets/cone-large.png"
          alt="Decorative Cone Shape"
          width={190}
          height={190}
          className="object-contain filter drop-shadow-2xl"
          priority
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center my-auto">
        {/* Main Headline */}
        <h1 className="max-w-[935px] font-poppins font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.15] tracking-tight text-white drop-shadow-sm">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-[820px] font-sans text-base sm:text-lg md:text-xl text-[#E5E6E8] leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-8 sm:mt-10 w-full max-w-[620px] bg-white rounded-full p-2 sm:p-2.5 flex items-center shadow-2xl border border-white/20 transition-all duration-300 focus-within:ring-4 focus-within:ring-[#D4FB20]/40"
        >
          <div className="pl-4 pr-2 text-[#82868E] flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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
            className="flex-1 bg-transparent border-none outline-none font-sans text-sm sm:text-base text-[#242528] placeholder:text-[#82868E] px-2 min-w-0"
            aria-label="Search courses, topics, or creators"
          />
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="rounded-full px-5 sm:px-8 py-2 font-semibold text-sm sm:text-base shadow-sm hover:shadow-md"
          >
            Search
          </Button>
        </form>

        {/* Interactive Floating Preview Badges Container */}
        <div className="mt-12 sm:mt-16 w-full max-w-[1060px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 text-left">
          
          {/* Card 1: UI/UX Design Category Badge */}
          <div className="bg-white/95 backdrop-blur-md rounded-[20px] p-5 shadow-xl border border-white/40 flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-[14px] bg-[#003BE2]/10 flex items-center justify-center text-[#003BE2] shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-base text-[#242528] font-sans">
                UI/UX Design
              </h3>
              <p className="text-xs sm:text-sm text-[#82868E] mt-0.5 flex items-center gap-1.5 font-sans">
                <span>200 Courses</span>
                <span>•</span>
                <span>1000+ Students</span>
              </p>
            </div>
          </div>

          {/* Card 2: Learning Progress */}
          <div className="bg-white/95 backdrop-blur-md rounded-[20px] p-5 shadow-xl border border-white/40 flex items-center justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
              <span className="text-xs text-[#82868E] font-medium uppercase tracking-wider block">
                Your Status
              </span>
              <h3 className="font-semibold text-base text-[#242528] font-sans mt-0.5">
                Learning Progress
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-[#003BE2]"
                    strokeDasharray="55, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute font-poppins font-bold text-xs text-[#242528]">
                  55%
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Happy Students (Lime Badge) */}
          <div className="bg-[#D4FB20] rounded-[20px] p-5 shadow-xl flex items-center justify-between sm:col-span-2 lg:col-span-1 transition-transform duration-300 hover:-translate-y-1">
            <div>
              <h3 className="font-bold text-base text-[#242528] font-sans">
                Happy Students
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="flex text-amber-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-[#242528]">4.5</span>
                <span className="text-xs text-[#4F4F4F]">(240)</span>
              </div>
            </div>
            
            {/* Student avatar pile */}
            <div className="flex items-center -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-400 overflow-hidden shadow-sm">
                <Image src="/assets/testimonial-1.png" alt="Student" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-green-400 overflow-hidden shadow-sm">
                <Image src="/assets/testimonial-2.png" alt="Student" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-400 overflow-hidden shadow-sm">
                <Image src="/assets/testimonial-3.png" alt="Student" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#242528] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                2K+
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
