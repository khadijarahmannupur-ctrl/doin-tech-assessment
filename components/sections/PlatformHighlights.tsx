import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { growthMetrics, creatorFeaturePoints } from "@/data/content";

export const PlatformHighlights: React.FC = () => {
  return (
    <section id="creators" className="py-20 lg:py-32 bg-[#FAFAFA] overflow-hidden">
      <Container>
        {/* ================= PART A: Professional Growth ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 lg:mb-36">
          {/* Left: Course Preview Card */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[480px]">
              {/* Main Course Preview Card */}
              <div className="bg-white rounded-[24px] p-6 shadow-xl border border-[#E5E6E8] relative z-10">
                <div className="relative w-full aspect-[341/196] rounded-[16px] overflow-hidden bg-gray-100 mb-5">
                  <Image
                    src="/assets/course-figma-sketch.png"
                    alt="Learn Figma from Basic"
                    fill
                    className="object-cover"
                  />
                  {/* Frosted Glass Meta Bar */}
                  <div className="absolute inset-x-3 bottom-3 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center justify-between text-[11px] text-white font-sans">
                    <span>17 Lessons</span>
                    <span className="opacity-60">•</span>
                    <span>2 hours 16 mins</span>
                    <span className="opacity-60">•</span>
                    <span>59 Comments</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#82868E] mb-2 font-sans">
                  <span>by purepearl studio</span>
                  <div className="flex items-center gap-1 text-[#242528] font-bold">
                    <span>4.5</span>
                    <span className="text-[#FFB800]">★</span>
                  </div>
                </div>

                <h3 className="font-poppins font-semibold text-xl text-[#242528]">
                  Learn Figma from Basic
                </h3>

                <div className="mt-4 pt-4 border-t border-[#F5F5F6] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F5F5F6] rounded-full text-xs font-medium text-[#4B4C53]">
                    <svg className="w-3.5 h-3.5 text-[#82868E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/assets/course-student-avatars.png"
                      alt="Student avatars"
                      width={128}
                      height={32}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Progress Badge */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-[20px] p-4 sm:p-5 shadow-2xl border border-white/60 z-20 flex items-center gap-4 animate-float-slow">
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
                  <span className="absolute font-poppins font-bold text-xs text-[#242528]">55%</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#242528]">Learning Progress</h4>
                  <p className="text-xs text-[#82868E]">Active modules</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content & Counters */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-sm font-semibold tracking-wider text-[#003BE2] uppercase mb-3">
              Transform Your Skills
            </span>
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] text-[#242528] leading-tight tracking-tight">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-5 font-sans text-base sm:text-lg text-[#4B4C53] leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics Counters */}
            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-[#E5E6E8]">
              {growthMetrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="font-poppins font-semibold text-3xl sm:text-4xl text-[#003BE2]">
                    {metric.value}
                  </div>
                  <div className="font-sans text-sm sm:text-base text-[#4B4C53] mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= PART B: Creator Platform ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content & Bullet points */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
            <span className="text-sm font-semibold tracking-wider text-[#003BE2] uppercase mb-3">
              For Instructors & Creators
            </span>
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] text-[#242528] leading-tight tracking-tight">
              Create & Manage Courses Easily.
            </h2>
            <p className="mt-5 font-sans text-base sm:text-lg text-[#4B4C53] leading-relaxed">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checkpoint list */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {creatorFeaturePoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3.5 rounded-[14px] bg-white border border-[#E5E6E8] shadow-sm hover:border-[#003BE2] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#003BE2]/10 text-[#003BE2] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-sans font-medium text-base text-[#242528]">
                    {point.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Revenue Analytics Preview Card */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative flex items-center justify-center">
            <div className="relative w-full max-w-[480px]">
              {/* Blue Glass Analytics Card */}
              <div className="bg-[#003BE2] rounded-[28px] p-6 sm:p-8 text-white shadow-2xl relative z-10 bg-grid-pattern-subtle">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs text-white/70 font-sans uppercase tracking-wider block">
                      Creator Dashboard
                    </span>
                    <h3 className="font-poppins font-semibold text-xl text-white mt-0.5">
                      Earnings Overview
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-white/15 rounded-full text-xs font-mono text-white">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-[18px] p-4 backdrop-blur-sm border border-white/15">
                    <span className="text-xs text-white/70 block">Total Revenue (July 1-28)</span>
                    <div className="font-poppins font-bold text-2xl text-white mt-1">$120.29</div>
                    <span className="inline-block text-[11px] font-bold text-[#D4FB20] mt-1 bg-black/20 px-2 py-0.5 rounded-full">
                      +12$ today
                    </span>
                  </div>

                  <div className="bg-white/10 rounded-[18px] p-4 backdrop-blur-sm border border-white/15">
                    <span className="text-xs text-white/70 block">Year to Date (2023)</span>
                    <div className="font-poppins font-bold text-2xl text-white mt-1">$1,200.38</div>
                    <span className="inline-block text-[11px] font-bold text-[#D4FB20] mt-1 bg-black/20 px-2 py-0.5 rounded-full">
                      +12$ today
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-[18px] p-4 backdrop-blur-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#D4FB20] text-[#242528] flex items-center justify-center font-bold text-sm">
                      ★
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">4.5 Rating</div>
                      <div className="text-xs text-white/70">From 240 reviews</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#D4FB20] font-bold">2,000+ Enrolled</span>
                  </div>
                </div>
              </div>

              {/* Floating Lime Student Card */}
              <div
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#D4FB20] rounded-[20px] p-4 shadow-xl z-20 flex items-center gap-3 animate-float-slow"
                style={{ animationDelay: "2s" }}
              >
                <div className="w-10 h-10 rounded-full bg-[#242528] text-white flex items-center justify-center font-bold text-xs">
                  2K+
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#242528]">Happy Students</h4>
                  <p className="text-xs text-[#4F4F4F]">Worldwide community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
