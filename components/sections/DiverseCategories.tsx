import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { diverseCategories } from "@/data/content";

export const DiverseCategories: React.FC = () => {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#FAFAFA] border-t border-[#E5E6E8]">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {diverseCategories.map((category) => (
            <Link
              key={category.id}
              href="#courses"
              className="group bg-white rounded-[20px] p-6 border border-[#E5E6E8] flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#003BE2] hover:-translate-y-1"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative mb-4 flex items-center justify-center">
                {category.icon ? (
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={80}
                    height={80}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-[#003BE2]/10 flex items-center justify-center text-[#003BE2]">
                    <span className="font-bold text-lg">{category.name[0]}</span>
                  </div>
                )}
              </div>

              <h3 className="font-sans font-semibold text-base sm:text-lg text-[#242528] group-hover:text-[#003BE2] transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
