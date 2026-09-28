import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative bg-[#003BE2] bg-grid-pattern py-20 lg:py-28 overflow-hidden text-center">
      {/* Decorative 3D ornaments */}
      <div className="absolute -top-12 -left-12 w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] pointer-events-none opacity-80 animate-float-slow hidden sm:block">
        <Image
          src="/assets/cone-large.png"
          alt="3D Decorative Asset"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

      <div
        className="absolute -bottom-10 -right-10 w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] pointer-events-none opacity-80 animate-float-slow hidden sm:block"
        style={{ animationDelay: "3s" }}
      >
        <Image
          src="/assets/cone-small.png"
          alt="3D Decorative Asset"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <Container className="relative z-10 max-w-[960px] mx-auto flex flex-col items-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-5">
          Join 10,000+ Creators
        </span>

        <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight tracking-tight">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="mt-6 font-sans text-base sm:text-lg text-[#F5F5F6]/90 leading-relaxed max-w-[820px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-10">
          <Button
            href="/register"
            variant="primary"
            size="lg"
            className="px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl"
          >
            Join as Creator
          </Button>
        </div>
      </Container>
    </section>
  );
};
