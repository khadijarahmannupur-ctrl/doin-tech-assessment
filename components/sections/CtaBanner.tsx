import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative bg-[#003BE2] bg-grid-pattern py-24 lg:py-32 overflow-hidden text-center">
      {/* 3D Ornaments matching Screenshot 9 */}
      
      {/* 1. Top-Left: Lime Twist */}
      <div className="absolute top-[10%] left-[-20px] sm:left-[2%] w-[120px] h-[180px] lg:w-[160px] lg:h-[240px] pointer-events-none opacity-90 animate-float-slow hidden sm:block">
        <Image
          src="/assets/3d-cone-lime-twist-large.png"
          alt="3D Lime Ornament"
          width={160}
          height={240}
          className="object-contain"
        />
      </div>

      {/* 2. Top-Left: White Spring */}
      <div className="absolute top-[20%] left-[8%] lg:left-[12%] w-[80px] h-[80px] lg:w-[110px] lg:h-[110px] pointer-events-none opacity-90 animate-float-slow hidden md:block" style={{ animationDelay: "1.5s" }}>
        <Image
          src="/assets/3d-spring-white.png"
          alt="3D White Spring"
          width={110}
          height={110}
          className="object-contain"
        />
      </div>

      {/* 3. Bottom-Left: White Torus / Donut */}
      <div className="absolute bottom-[20px] left-[2%] lg:left-[4%] w-[130px] h-[130px] lg:w-[170px] lg:h-[170px] pointer-events-none opacity-90 animate-float-slow hidden sm:block" style={{ animationDelay: "3s" }}>
        <Image
          src="/assets/3d-donut-white.png"
          alt="3D White Torus"
          width={170}
          height={170}
          className="object-contain"
        />
      </div>

      {/* 4. Top-Right: Yellow/Lime Pyramid */}
      <div className="absolute top-[15%] right-[8%] lg:right-[12%] w-[110px] h-[110px] lg:w-[150px] lg:h-[150px] pointer-events-none opacity-90 animate-float-slow hidden md:block" style={{ animationDelay: "2s" }}>
        <Image
          src="/assets/3d-pyramid-white.png"
          alt="3D Pyramid"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* 5. Bottom-Right: Lime Twist Shape */}
      <div className="absolute bottom-[30px] right-[2%] lg:right-[5%] w-[120px] h-[160px] lg:w-[160px] lg:h-[220px] pointer-events-none opacity-90 animate-float-slow hidden sm:block" style={{ animationDelay: "1s" }}>
        <Image
          src="/assets/3d-cone-lime-right.png"
          alt="3D Lime Cone"
          width={160}
          height={220}
          className="object-contain"
        />
      </div>

      <Container className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center">
        <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[46px] text-white leading-[1.2] tracking-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-6 font-sans text-sm sm:text-base text-white/90 leading-relaxed max-w-[760px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-9">
          <Button
            href="/register"
            variant="primary"
            size="md"
            className="px-8 py-3 rounded-full text-base font-semibold text-[#242528] bg-[#D4FB20] hover:bg-[#c0e815] shadow-lg hover:shadow-xl transition-all"
          >
            Join as Creator
          </Button>
        </div>
      </Container>
    </section>
  );
};
