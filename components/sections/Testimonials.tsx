import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAFAFA] border-t border-[#E5E6E8]">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          title="Discover What Our Community Is Saying"
          subtitle="At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="group bg-white rounded-[24px] p-7 sm:p-8 border border-[#E5E6E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Quote text */}
              <p className="font-sans text-base text-[#4F4F4F] leading-relaxed italic mb-8">
                {test.quote}
              </p>

              {/* Author info with avatar */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#F5F5F6]">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200 border-2 border-white shadow-sm shrink-0">
                  <Image
                    src={test.avatar}
                    alt={test.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-[#000000]">
                    {test.name}
                  </h3>
                  <p className="font-sans text-sm font-medium text-[#003BE2]">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
