import React from "react";

interface SectionHeadingProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  tag?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  tag,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const titleColor = theme === "dark" ? "text-white" : "text-[#040819]";
  const subtitleColor = theme === "dark" ? "text-[#E5E6E8]" : "text-[#82868E]";

  return (
    <div className={`flex flex-col max-w-[917px] ${alignClasses[align]} ${className}`}>
      {tag && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#003BE2]/10 text-[#003BE2]">
          {tag}
        </span>
      )}
      <h2
        className={`font-semibold font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight tracking-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed font-sans max-w-[820px] ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
