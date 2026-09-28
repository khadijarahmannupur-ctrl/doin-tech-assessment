import React from "react";
import { Container } from "@/components/ui/Container";

export const PartnersRibbon: React.FC = () => {
  const partners = [
    { name: "HubSpot", icon: "HubSpot" },
    { name: "Loom", icon: "Loom" },
    { name: "GitLab", icon: "GitLab" },
    { name: "LiveChat", icon: "LiveChat" },
    { name: "Monday.com", icon: "monday.com" },
  ];

  return (
    <section className="w-full bg-[#F5F5F6] py-10 sm:py-14 border-y border-[#E5E6E8]">
      <Container>
        <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#82868E] mb-6">
          Trusted by leading companies and modern teams worldwide
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 font-display text-lg sm:text-xl font-bold text-[#4B4C53] hover:text-[#003BE2] transition-colors cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-[#CED0D3]/40 flex items-center justify-center font-mono text-xs font-bold text-[#242528]">
                {partner.name[0]}
              </div>
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
