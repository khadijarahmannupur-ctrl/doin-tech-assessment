import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partnerLogos } from "@/data/content";

export const PartnersRibbon: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F5F6] py-8 sm:py-10 border-b border-[#E5E6E8]">
      <Container>
        <div className="flex flex-wrap items-center justify-between sm:justify-around gap-6 sm:gap-10">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="h-8 sm:h-9 w-auto relative flex items-center justify-center transition-opacity hover:opacity-100 opacity-80"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={160}
                height={38}
                className="h-7 sm:h-8 w-auto object-contain filter grayscale"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
