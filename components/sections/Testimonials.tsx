import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/content";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-t border-[#E5E6E8]">
      <Container>
        {/* Split Header matching Screenshot 10 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 sm:mb-16">
          <div className="lg:col-span-6">
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] text-[#040819] leading-tight tracking-tight">
              Discover What Our <br className="hidden sm:inline" />
              Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-sm sm:text-base text-[#82868E] leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid matching Screenshot 10 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-[24px] p-7 sm:p-8 border border-[#E5E6E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-start hover:-translate-y-1"
            >
              {/* Avatar on Top */}
              <div className="w-14 h-14 rounded-full overflow-hidden relative mb-5 shrink-0">
                <Image
                  src={test.avatar}
                  alt={test.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-poppins font-semibold text-lg text-[#000000]">
                {test.name}
              </h3>
              <p className="font-sans text-sm font-medium text-[#003BE2] mb-5">
                {test.role}
              </p>

              {/* Quote text */}
              <p className="font-sans text-sm sm:text-[15px] text-[#4F4F4F] leading-relaxed">
                {test.quote}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
