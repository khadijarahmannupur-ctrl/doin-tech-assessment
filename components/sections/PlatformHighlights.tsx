import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { growthMetrics, creatorFeaturePoints } from "@/data/content";

export const PlatformHighlights: React.FC = () => {
  return (
    <section id="creators" className="py-20 lg:py-32 bg-white overflow-hidden">
      <Container>
        {/* ================= PART A: Professional Growth (Screenshot 7) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 lg:mb-40">
          {/* Left: Content & Counters */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[46px] text-[#040819] leading-[1.18] tracking-tight">
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h2>
            <p className="mt-6 font-sans text-sm sm:text-base text-[#82868E] leading-relaxed max-w-[500px]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics Counters */}
            <div className="mt-10 flex items-center gap-10 sm:gap-14">
              {growthMetrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="font-poppins font-bold text-3xl sm:text-4xl text-[#003BE2]">
                    {metric.value}
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[#242528] mt-1 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual with Person, Figma Card, Progress, and Lime Twist */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px] flex items-center justify-center min-h-[400px]">
              
              {/* Lime Twist Squiggle on the right */}
              <div className="absolute top-[10%] right-[-10px] sm:right-[-30px] w-[110px] h-[160px] pointer-events-none z-10 animate-float-slow">
                <Image
                  src="/assets/3d-cone-lime-twist.png"
                  alt="3D Lime Twist"
                  width={110}
                  height={160}
                  className="object-contain"
                />
              </div>

              {/* Course Card on Left */}
              <div className="absolute top-[8%] left-[-10px] sm:left-[-20px] w-[220px] sm:w-[250px] bg-white rounded-[20px] p-3.5 shadow-xl border border-[#E5E6E8] z-10">
                <div className="relative w-full aspect-[341/196] rounded-[12px] overflow-hidden bg-gray-100 mb-3">
                  <Image
                    src="/assets/course-figma-sketch.png"
                    alt="Learn Figma from Basic"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-2 bottom-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center justify-between text-[8px] text-white font-sans">
                    <span>17 Lessons</span>
                    <span>2 hours 16 mins</span>
                  </div>
                </div>

                <h4 className="font-poppins font-semibold text-xs text-[#242528] truncate">
                  Learn Figma from Basic
                </h4>
                <p className="text-[10px] text-[#82868E] mb-2 font-sans">by purepearl studio</p>

                <div className="flex items-center justify-between pt-2 border-t border-[#F5F5F6]">
                  <span className="text-[10px] px-2 py-0.5 bg-[#F5F5F6] rounded-full text-[#4B4C53] font-medium">
                    Beginner
                  </span>
                  <span className="font-poppins font-bold text-xs text-[#003BE2]">
                    $25<span className="text-[9px] text-[#82868E] font-normal">/lifetime</span>
                  </span>
                </div>
              </div>

              {/* Person in Center holding Laptop */}
              <div className="relative z-20 w-[280px] sm:w-[340px] aspect-[722/515] mt-16 ml-14">
                <Image
                  src="/assets/hero-person.png"
                  alt="Professional Growth Student"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Learning Progress 55% Badge on Right in front of Person */}
              <div className="absolute bottom-[20px] right-[-10px] sm:right-[-20px] z-30 bg-white rounded-[16px] p-4 shadow-2xl border border-gray-100 min-w-[190px]">
                <span className="text-[11px] text-[#82868E] font-medium block">
                  Learning Progress
                </span>
                <div className="font-poppins font-bold text-2xl sm:text-3xl text-[#242528] mt-1 mb-2">
                  55%
                </div>
                <div className="w-full h-2 rounded-full bg-[#E5E6E8] overflow-hidden">
                  <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= PART B: Creator Platform (Screenshot 8) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Female Creator Visual with Revenue Cards & Happy Students */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px] flex items-center justify-center min-h-[440px]">
              
              {/* Blue Glass Card 1: Total Revenue (Top Left) */}
              <div className="absolute top-[8%] left-[-10px] sm:left-0 w-[170px] sm:w-[190px] bg-[#003BE2] rounded-[18px] p-4 text-white shadow-xl z-10 bg-grid-pattern-subtle">
                <span className="text-[10px] text-white/80 block uppercase tracking-wider font-sans">
                  Total Revenue
                </span>
                <span className="text-[9px] text-white/60 block">July 1-28</span>
                <div className="font-poppins font-bold text-lg sm:text-xl text-white mt-1 mb-2">
                  $120.29
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full bg-[#D4FB20] rounded-full w-[65%]" />
                </div>
              </div>

              {/* Blue Glass Card 2: Year to Date (Mid Left) */}
              <div className="absolute top-[48%] left-[-10px] sm:left-0 w-[170px] sm:w-[190px] bg-[#003BE2] rounded-[18px] p-4 text-white shadow-xl z-10 bg-grid-pattern-subtle">
                <span className="text-[10px] text-white/80 block uppercase tracking-wider font-sans">
                  Year to Date
                </span>
                <span className="text-[9px] text-white/60 block">2023</span>
                <div className="font-poppins font-bold text-lg sm:text-xl text-white mt-1 mb-2">
                  $1,200.38
                </div>
                <span className="inline-block text-[10px] font-bold text-[#242528] bg-[#D4FB20] px-2 py-0.5 rounded-full">
                  +12$
                </span>
              </div>

              {/* Lime Twist Shape on Right */}
              <div className="absolute top-[20%] right-[10px] sm:right-[30px] w-[100px] h-[150px] pointer-events-none z-10 animate-float-slow">
                <Image
                  src="/assets/3d-cone-lime-twist.png"
                  alt="3D Lime Twist"
                  width={100}
                  height={150}
                  className="object-contain"
                />
              </div>

              {/* Creator Person (Female instructor holding tablet) */}
              <div className="relative z-20 w-[290px] sm:w-[350px] aspect-[579/719]">
                <Image
                  src="/assets/creator-person.png"
                  alt="Creator Instructor with Tablet"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Happy Students Card (Bottom Center/Right) */}
              <div className="absolute bottom-[0px] right-[0px] sm:right-[20px] z-30 bg-white rounded-[16px] p-3.5 sm:p-4 shadow-2xl border border-gray-100 min-w-[200px] sm:min-w-[220px]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-poppins font-semibold text-xs sm:text-sm text-[#242528]">
                    Happy Students
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#82868E]">
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
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right: Heading, Subtitle & 4 Checkpoints with Solid Blue Circle Checkmark */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[46px] text-[#040819] leading-[1.18] tracking-tight">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>
            <p className="mt-6 font-sans text-sm sm:text-base text-[#82868E] leading-relaxed max-w-[500px]">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checkpoint list with solid blue checkmarks matching Screenshot 8 */}
            <div className="mt-8 space-y-4">
              {creatorFeaturePoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#003BE2] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-sans font-medium text-base text-[#242528]">
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
