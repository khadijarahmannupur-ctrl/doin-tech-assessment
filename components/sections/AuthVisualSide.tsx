import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AuthVisualSideProps {
  headline: string;
  subtext: string;
}

export const AuthVisualSide: React.FC<AuthVisualSideProps> = ({ headline, subtext }) => {
  return (
    <div className="flex flex-col justify-between h-full max-w-[560px] py-2 sm:py-4">
      {/* Top Logo */}
      <div>
        <Link href="/" className="inline-flex items-center gap-2 mb-8 group focus:outline-none">
          <div className="w-[30px] h-[30px] relative flex items-center justify-center">
            <svg
              className="w-7 h-7 text-[#D4FB20] transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 29 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 0L28.7894 8.25V24.75L14.5 33L0.210583 24.75V8.25L14.5 0Z"
                fill="currentColor"
              />
              <path
                d="M14.5 7L22.5 11.5V20.5L14.5 25L6.5 20.5V11.5L14.5 7Z"
                fill="#003BE2"
              />
            </svg>
          </div>
          <span className="font-bold text-[22px] font-display tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        {/* Headline & Subtitle */}
        <h1 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-[32px] text-white leading-tight mb-3">
          {headline}
        </h1>
        <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed max-w-[440px]">
          {subtext}
        </p>
      </div>

      {/* Overlapping Course Cards & 3D Shapes Composition matching Screenshots 1 & 2 */}
      <div className="relative w-full max-w-[480px] h-[380px] sm:h-[420px] mt-8 select-none">
        
        {/* Decorative Shape 1: Lime 3D Donut (Top-Left) */}
        <div className="absolute top-[0px] left-[15px] sm:left-[25px] w-[80px] h-[80px] sm:w-[95px] sm:h-[95px] z-30 pointer-events-none animate-float-slow">
          <Image
            src="/assets/3d-donut-white.png"
            alt="3D Donut"
            width={95}
            height={95}
            className="object-contain filter hue-rotate-[65deg] saturate-[200%] brightness-110"
          />
        </div>

        {/* Decorative Shape 2: Lime 3D Pyramid (Bottom-Left) */}
        <div className="absolute bottom-[-10px] left-[-15px] sm:left-[-20px] w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] z-30 pointer-events-none animate-float-slow" style={{ animationDelay: "2s" }}>
          <Image
            src="/assets/3d-pyramid-white.png"
            alt="3D Pyramid"
            width={110}
            height={110}
            className="object-contain filter hue-rotate-[65deg] saturate-[200%] brightness-110"
          />
        </div>

        {/* Decorative Shape 3: White 3D Spring (Right) */}
        <div className="absolute bottom-[80px] right-[10px] sm:right-[20px] w-[75px] h-[75px] sm:w-[90px] sm:h-[90px] z-30 pointer-events-none animate-float-slow" style={{ animationDelay: "1s" }}>
          <Image
            src="/assets/3d-spring-white.png"
            alt="3D White Spring"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>

        {/* Card 1: Build Digital Asset (Background Left) */}
        <div className="absolute top-[40px] left-0 w-[220px] sm:w-[250px] bg-white rounded-[20px] p-3 shadow-xl border border-gray-100 z-10 opacity-90">
          <div className="relative w-full aspect-[341/196] rounded-[12px] overflow-hidden bg-gray-100 mb-2.5">
            <Image
              src="/assets/course-digital-asset.png"
              alt="Build Digital Asset"
              fill
              className="object-cover"
            />
            <div className="absolute left-2 bottom-2 bg-black/40 backdrop-blur-sm rounded-full px-2 py-0.5 text-[8px] text-white font-sans">
              17 Lessons
            </div>
          </div>
          <h4 className="font-poppins font-semibold text-xs text-[#242528] truncate">
            Build Digital Asset
          </h4>
          <p className="text-[10px] text-[#82868E] mb-2 font-sans">by purepearl studio</p>
          <div className="flex items-center justify-between pt-2 border-t border-[#F5F5F6]">
            <span className="text-[9px] px-2 py-0.5 bg-[#F5F5F6] rounded-full text-[#4B4C53] font-medium">
              Beginner
            </span>
            <span className="font-poppins font-bold text-xs text-[#003BE2]">
              $25<span className="text-[8px] text-[#82868E] font-normal">/lifetime</span>
            </span>
          </div>
        </div>

        {/* Card 2: the Power of Big Data (Foreground Right) */}
        <div className="absolute top-[10px] right-[10px] sm:right-[25px] w-[235px] sm:w-[265px] bg-white rounded-[22px] p-3.5 shadow-2xl border border-gray-100 z-20">
          <div className="relative w-full aspect-[341/196] rounded-[14px] overflow-hidden bg-gray-100 mb-3">
            <Image
              src="/assets/course-big-data.png"
              alt="the Power of Big Data"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-2 bottom-1.5 bg-black/40 backdrop-blur-md rounded-full px-2 py-0.5 flex items-center justify-between text-[8px] text-white font-sans">
              <span>17 Lessons</span>
              <span>2 hours 16 mins</span>
              <span>59 Comments</span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-1 mb-1">
            <h4 className="font-poppins font-semibold text-xs sm:text-[13px] text-[#000000] truncate">
              the Power of Big Data
            </h4>
            <div className="flex items-center gap-0.5 text-[10px] font-semibold text-[#82868E] shrink-0">
              <span>4.5</span>
              <span className="text-[#D4FB20] text-xs">★</span>
            </div>
          </div>

          <p className="text-[10px] text-[#82868E] mb-2 font-sans">by purepearl studio</p>

          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] px-2 py-0.5 bg-[#F5F5F6] rounded-full text-[#4B4C53] font-medium">
              Beginner
            </span>
            <Image
              src="/assets/course-student-avatars.png"
              alt="Student avatars"
              width={100}
              height={24}
              className="h-5 w-auto object-contain"
            />
          </div>

          <div className="pt-2 border-t border-[#F5F5F6]">
            <span className="font-poppins font-bold text-sm text-[#003BE2]">
              $25<span className="text-[9px] text-[#82868E] font-normal">/lifetime</span>
            </span>
          </div>
        </div>

        {/* Card 3: Happy Students (Foreground Bottom Lime Card) */}
        <div className="absolute bottom-[20px] left-[70px] sm:left-[90px] w-[180px] sm:w-[200px] bg-[#D4FB20] rounded-[18px] p-3 shadow-2xl z-25">
          <div className="flex items-center justify-between mb-1.5">
            <h5 className="font-poppins font-bold text-[11px] text-[#242528]">
              Happy Students
            </h5>
            <span className="text-[9px] font-semibold text-[#242528]">
              4.5 (240) ★
            </span>
          </div>
          <Image
            src="/assets/happy-students-avatars.png"
            alt="Happy student avatars"
            width={180}
            height={32}
            className="h-6 w-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
};
