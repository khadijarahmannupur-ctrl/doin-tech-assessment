import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative w-full min-h-[488px] bg-[#003BE2] bg-grid-pattern py-20 lg:py-24 overflow-hidden flex items-center justify-center">
      {/* ================= 3D DECORATIVE SHAPES MATCHING FIGMA ================= */}

      {/* 1. Top-Left: Lime Twist Spring (Node 34:1206) */}
      <div className="absolute -top-10 -left-12 sm:-left-8 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[240px] lg:h-[240px] pointer-events-none z-10 animate-float-slow">
        <Image
          src="/assets/lime-twist-spring.png"
          alt="3D Lime Spring"
          width={240}
          height={240}
          className="object-contain"
          priority
        />
      </div>

      {/* 2. Top-Left Inside: White 3D Spring (Node 34:1236) */}
      <div className="absolute top-[16%] left-[14%] sm:left-[18%] lg:left-[21%] w-[65px] h-[65px] sm:w-[90px] sm:h-[90px] lg:w-[115px] lg:h-[115px] pointer-events-none z-10 animate-float-slow hidden sm:block" style={{ animationDelay: "1.5s" }}>
        <Image
          src="/assets/3d-spring-white.png"
          alt="3D White Spring"
          width={115}
          height={115}
          className="object-contain"
          priority
        />
      </div>

      {/* 3. Mid-Left: White 3D Cone Pointing Up (Node 46:55) */}
      <div className="absolute top-[45%] -left-4 sm:left-[2%] lg:left-[4%] w-[70px] h-[90px] sm:w-[95px] sm:h-[120px] lg:w-[120px] lg:h-[150px] pointer-events-none z-10 animate-float-slow hidden sm:block" style={{ animationDelay: "2.5s" }}>
        <Image
          src="/assets/white-triangle.png"
          alt="3D White Cone"
          width={120}
          height={150}
          className="object-contain"
          priority
        />
      </div>

      {/* 4. Bottom-Left: Lime 3D Donut / Torus Ring (Node 46:67) */}
      <div className="absolute -bottom-12 left-4 sm:left-[7%] lg:left-[9%] w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] pointer-events-none z-10 animate-float-slow">
        <Image
          src="/assets/3d-donut-white.png"
          alt="3D Lime Torus"
          width={220}
          height={220}
          className="object-contain filter hue-rotate-[65deg] saturate-[200%] brightness-110"
          priority
        />
      </div>

      {/* 5. Top-Right: Lime / Yellow 3D Pyramid (Node 46:61) */}
      <div className="absolute top-[10%] right-[14%] sm:right-[18%] lg:right-[20%] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] lg:w-[130px] lg:h-[130px] pointer-events-none z-10 animate-float-slow hidden sm:block" style={{ animationDelay: "2s" }}>
        <Image
          src="/assets/3d-pyramid-white.png"
          alt="3D Lime Pyramid"
          width={130}
          height={130}
          className="object-contain filter hue-rotate-[65deg] saturate-[200%] brightness-110"
          priority
        />
      </div>

      {/* 6. Far-Right: White Cylinder / Pillow (Node 46:73) */}
      <div className="absolute -top-6 -right-12 sm:-right-8 lg:-right-4 w-[140px] h-[180px] sm:w-[200px] sm:h-[250px] lg:w-[240px] lg:h-[300px] pointer-events-none z-10 animate-float-slow hidden md:block">
        <Image
          src="/assets/lime-cone-tapered.png"
          alt="3D White Cylinder"
          width={240}
          height={300}
          className="object-contain filter brightness-125"
          priority
        />
      </div>

      {/* 7. Bottom-Right: Lime Twist Spring (Node 34:1221) */}
      <div className="absolute -bottom-10 -right-8 sm:right-[1%] lg:right-[3%] w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] lg:w-[210px] lg:h-[210px] pointer-events-none z-10 animate-float-slow">
        <Image
          src="/assets/lime-twist-spring.png"
          alt="3D Lime Spring"
          width={210}
          height={210}
          className="object-contain"
          priority
        />
      </div>

      {/* ================= CENTER CONTENT ================= */}
      <div className="relative z-20 max-w-[964px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center">
        {/* Headline */}
        <h2 className="max-w-[710px] font-poppins font-semibold text-2xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-tight text-[#F5F5F6]">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-[964px] font-sans text-xs sm:text-base lg:text-[18px] leading-relaxed sm:leading-[29px] text-[#F5F5F6]/90">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* Pill Button matching Figma (width: 172px, height: 46px, borderRadius: 24px) */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/register"
            className="inline-flex items-center justify-center w-[172px] h-[46px] rounded-[24px] bg-[#D4FB20] hover:bg-[#c0e815] active:scale-95 text-[#242528] font-sans font-medium text-base sm:text-[18px] transition-all shadow-md cursor-pointer"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
};
