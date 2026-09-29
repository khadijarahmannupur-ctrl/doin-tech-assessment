import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { diverseCategories } from "@/data/content";

export const DiverseCategories: React.FC = () => {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-white border-t border-[#E5E6E8]">
      <Container>
        {/* Section Heading matching Figma Screenshot 6 */}
        <div className="text-center max-w-[860px] mx-auto mb-14 sm:mb-16">
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] text-[#040819] leading-tight tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#82868E] leading-relaxed max-w-[760px] mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid matching Screenshot 6 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {diverseCategories.map((category) => (
            <Link
              key={category.id}
              href="#courses"
              className="group bg-white rounded-[24px] p-6 sm:p-7 border border-[#E5E6E8] flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#003BE2] hover:-translate-y-1.5"
            >
              {/* Lime Circle Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D4FB20] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <Image
                  src={category.icon!}
                  alt={category.name}
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain filter brightness-0"
                />
              </div>

              <h3 className="font-sans font-semibold text-sm sm:text-base text-[#242528] group-hover:text-[#003BE2] transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
