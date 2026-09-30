import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { growthMetrics, creatorFeaturePoints } from "@/data/content";

export const PlatformHighlights: React.FC = () => {
  return (
    <section id="creators" className="relative py-20 lg:py-32 bg-[#FAFAFA] overflow-hidden">
      {/* ================= BACKGROUND GRADIENT GLOW EFFECT ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Top-Right & Top-Center Lime/Green Glow */}
        <div className="absolute -top-[100px] left-[20%] sm:left-[35%] lg:left-[45%] w-[450px] sm:w-[650px] lg:w-[850px] h-[450px] sm:h-[650px] lg:h-[850px] rounded-full bg-[#D4FB20]/35 blur-[90px] sm:blur-[120px]" />

        {/* Center-Left Soft Cyan/Blue Glow */}
        <div className="absolute top-[25%] -left-[150px] sm:-left-[100px] w-[400px] sm:w-[550px] lg:w-[700px] h-[400px] sm:h-[550px] lg:h-[700px] rounded-full bg-[#38BDF8]/25 sm:bg-[#38BDF8]/30 blur-[100px] sm:blur-[130px]" />

        {/* Bottom-Left Lime/Green Glow behind Creators */}
        <div className="absolute bottom-[5%] -left-[100px] sm:left-[2%] w-[400px] sm:w-[550px] lg:w-[700px] h-[400px] sm:h-[550px] lg:h-[700px] rounded-full bg-[#CBFC01]/35 blur-[90px] sm:blur-[120px]" />

        {/* Bottom-Right Soft Blue/Indigo Glow */}
        <div className="absolute -bottom-[80px] -right-[100px] sm:right-[5%] w-[450px] sm:w-[600px] lg:w-[750px] h-[450px] sm:h-[600px] lg:h-[750px] rounded-full bg-[#003BE2]/20 sm:bg-[#003BE2]/25 blur-[100px] sm:blur-[140px]" />
      </div>

      <Container className="relative z-10">
        {/* ================= PART A: Professional Growth (Learners Path) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-28 md:mb-32 lg:mb-40">
          {/* Left: Content & Counters */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-poppins font-semibold text-2xl sm:text-4xl md:text-[40px] lg:text-[44px] text-[#242528] leading-[1.2] tracking-tight">
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h2>
            <p className="mt-5 sm:mt-6 font-sans text-xs sm:text-base md:text-[17px] text-[#4B4C53] leading-relaxed max-w-[520px]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics Counters */}
            <div className="mt-8 sm:mt-10 flex items-center gap-8 sm:gap-12 md:gap-14">
              {growthMetrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="font-poppins font-bold text-2xl sm:text-4xl md:text-[38px] text-[#003BE2]">
                    {metric.value}
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[#242528] mt-1 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Cluster (Learner Person, Course Card, 55% Progress, Lime Twist) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[540px] lg:max-w-[580px] h-[340px] sm:h-[420px] md:h-[480px] lg:h-[500px] mx-auto flex items-center justify-center">

              {/* 1. Lime Twist Shape on the top-right */}
              <div className="absolute top-[2%] sm:top-[4%] md:top-[4%] lg:top-[4%] right-[2%] sm:right-[4%] md:right-[6%] lg:right-[4%] w-[70px] h-[95px] sm:w-[95px] sm:h-[130px] md:w-[110px] md:h-[150px] lg:w-[120px] lg:h-[165px] pointer-events-none z-10 animate-float-slow">
                <Image
                  src="/assets/Frame (13).png"
                  alt="3D Lime Twist"
                  width={120}
                  height={165}
                  className="object-contain"
                  priority
                />
              </div>

              {/* 2. Course Card on Left */}
              <div className="absolute top-[2%] sm:top-[4%] md:top-[4%] lg:top-[2%] left-[0%] sm:left-[1%] md:left-[2%] lg:left-[0%] w-[180px] sm:w-[220px] md:w-[250px] lg:w-[260px] bg-white rounded-[18px] sm:rounded-[22px] md:rounded-[24px] p-2.5 sm:p-3.5 shadow-xl border border-[#CED0D3]/60 z-10 transition-all">
                <div className="relative w-full aspect-[341/196] rounded-[10px] sm:rounded-[12px] overflow-hidden bg-gray-100 mb-2 sm:mb-3">
                  <Image
                    src="/assets/course-figma-sketch.png"
                    alt="Learn Figma from Basic"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 250px, 260px"
                  />
                  <div className="absolute inset-x-1.5 sm:inset-x-2 bottom-1 sm:bottom-1.5 bg-black/40 backdrop-blur-sm rounded-full px-1.5 sm:px-2 py-0.5 flex items-center justify-between text-[7px] sm:text-[8px] text-white font-sans">
                    <span>17 Lessons</span>
                    <span>2 hours 16 mins</span>
                  </div>
                </div>

                <h4 className="font-poppins font-semibold text-[11px] sm:text-xs md:text-[13px] text-[#242528] truncate">
                  Learn Figma from Basic
                </h4>
                <p className="text-[9px] sm:text-[10px] text-[#82868E] mb-1.5 sm:mb-2 font-sans">by purepearl studio</p>

                <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-[#F5F5F6]">
                  <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 bg-[#F5F5F6] rounded-full text-[#4B4C53] font-medium">
                    Beginner
                  </span>
                  <span className="font-poppins font-bold text-[11px] sm:text-xs md:text-[13px] text-[#003BE2]">
                    $25<span className="text-[8px] sm:text-[9px] text-[#82868E] font-normal">/lifetime</span>
                  </span>
                </div>
              </div>

              {/* 3. Person in Center holding Laptop */}
              <div className="relative z-20 w-[240px] sm:w-[310px] md:w-[360px] lg:w-[390px] aspect-[577/540] translate-x-4 sm:translate-x-6 md:translate-x-8 mt-6 sm:mt-8">
                <Image
                  src="/assets/hero-person.png"
                  alt="Professional Growth Student"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 360px, 390px"
                  priority
                />
              </div>

              {/* 4. Learning Progress 55% Badge on Right in front of Person */}
              <div className="absolute bottom-[4%] sm:bottom-[6%] md:bottom-[6%] lg:bottom-[4%] right-[0%] sm:right-[2%] md:right-[3%] lg:right-[2%] z-30 bg-white/95 backdrop-blur-md rounded-[14px] sm:rounded-[16px] p-2.5 sm:p-3.5 md:p-4 shadow-2xl border border-gray-100 min-w-[150px] sm:min-w-[190px] md:min-w-[210px] lg:min-w-[220px]">
                <span className="text-[10px] sm:text-[11px] text-[#82868E] font-medium block">
                  Learning Progress
                </span>
                <div className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl text-[#242528] mt-0.5 sm:mt-1 mb-1.5 sm:mb-2">
                  55%
                </div>
                <div className="w-full h-1.5 sm:h-2 rounded-full bg-[#E5E6E8] overflow-hidden">
                  <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= PART B: Creator Platform ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Visual Cluster (Female Creator, Revenue Cards, Lime Twist, Happy Students) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[540px] lg:max-w-[560px] h-[360px] sm:h-[440px] md:h-[500px] lg:h-[520px] mx-auto flex items-center justify-center">

              {/* 1. Blue Glass Card 1: Total Revenue (Top Left) */}
              <div className="absolute top-[4%] sm:top-[6%] md:top-[6%] lg:top-[4%] left-[0%] sm:left-[1%] md:left-[2%] lg:left-[0%] w-[145px] sm:w-[180px] md:w-[200px] lg:w-[210px] bg-[#003BE2] rounded-[14px] sm:rounded-[18px] p-2.5 sm:p-3.5 md:p-4 text-white shadow-xl z-20 bg-grid-pattern-subtle">
                <span className="text-[9px] sm:text-[10px] text-white/80 block uppercase tracking-wider font-sans">
                  Total Revenue
                </span>
                <span className="text-[8px] sm:text-[9px] text-white/60 block">July 1-28</span>
                <div className="font-poppins font-bold text-base sm:text-lg md:text-xl text-white mt-0.5 sm:mt-1 mb-1.5 sm:mb-2">
                  $120.29
                </div>
                <div className="w-full h-1 sm:h-1.5 rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full bg-[#D4FB20] rounded-full w-[65%]" />
                </div>
              </div>

              {/* 2. Blue Glass Card 2: Year to Date (Mid Left) */}
              <div className="absolute top-[40%] sm:top-[42%] md:top-[43%] lg:top-[42%] left-[0%] sm:left-[1%] md:left-[2%] lg:left-[0%] w-[135px] sm:w-[165px] md:w-[180px] lg:w-[190px] bg-[#003BE2] rounded-[14px] sm:rounded-[18px] p-2.5 sm:p-3.5 md:p-4 text-white shadow-xl z-20 bg-grid-pattern-subtle">
                <span className="text-[9px] sm:text-[10px] text-white/80 block uppercase tracking-wider font-sans">
                  Year to Date
                </span>
                <span className="text-[8px] sm:text-[9px] text-white/60 block">2023</span>
                <div className="font-poppins font-bold text-base sm:text-lg md:text-xl text-white mt-0.5 sm:mt-1 mb-1.5 sm:mb-2">
                  $1,200.38
                </div>
                <span className="inline-block text-[9px] sm:text-[10px] font-bold text-[#242528] bg-[#D4FB20] px-1.5 sm:px-2 py-0.5 rounded-full">
                  +12$
                </span>
              </div>

              {/* 3. Lime Twist Shape on Right */}
              <div className="absolute top-[14%] sm:top-[16%] md:top-[18%] lg:top-[18%] right-[4%] sm:right-[8%] md:right-[10%] lg:right-[8%] w-[65px] h-[90px] sm:w-[90px] sm:h-[125px] md:w-[105px] md:h-[145px] lg:w-[115px] lg:h-[155px] pointer-events-none z-10 animate-float-slow">
                <Image
                  src="/assets/Frame (13).png"
                  alt="3D Lime Twist"
                  width={115}
                  height={155}
                  className="object-contain"
                  priority
                />
              </div>

              {/* 4. Creator Person (Female instructor holding tablet) */}
              <div className="relative z-20 w-[230px] sm:w-[290px] md:w-[335px] lg:w-[360px] aspect-[435/596] translate-x-2 sm:translate-x-4">
                <Image
                  src="/assets/creator-person.png"
                  alt="Creator Instructor with Tablet"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 230px, (max-width: 1024px) 335px, 360px"
                  priority
                />
              </div>

              {/* 5. Happy Students Card (Bottom Right) */}
              <div className="absolute bottom-[2%] sm:bottom-[3%] md:bottom-[4%] lg:bottom-[3%] right-[0%] sm:right-[1%] md:right-[3%] lg:right-[1%] z-30 bg-white/95 backdrop-blur-md rounded-[14px] sm:rounded-[16px] p-2.5 sm:p-3.5 md:p-4 shadow-2xl border border-gray-100 min-w-[170px] sm:min-w-[210px] md:min-w-[235px] lg:min-w-[245px]">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <h3 className="font-poppins font-semibold text-[11px] sm:text-xs md:text-sm text-[#242528]">
                    Happy Students
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] md:text-xs font-semibold text-[#82868E]">
                    <span>4.5 (240)</span>
                    <span className="text-[#FFB800]">★</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/assets/happy-students-avatars.png"
                    alt="Happy student avatars"
                    width={210}
                    height={38}
                    className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right: Heading, Subtitle & 4 Checkpoints with Solid Blue Circle Checkmark */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-poppins font-semibold text-2xl sm:text-4xl md:text-[40px] lg:text-[44px] text-[#242528] leading-[1.2] tracking-tight">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>
            <p className="mt-5 sm:mt-6 font-sans text-xs sm:text-base md:text-[17px] text-[#4B4C53] leading-relaxed max-w-[520px]">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checkpoint list with solid blue checkmarks */}
            <div className="mt-7 sm:mt-8 space-y-3.5 sm:space-y-4">
              {creatorFeaturePoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#003BE2] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-sans font-medium text-sm sm:text-base md:text-[17px] text-[#242528]">
                    {point.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

