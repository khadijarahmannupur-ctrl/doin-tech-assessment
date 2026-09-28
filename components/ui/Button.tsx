import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "brand" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium font-sans transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none";

  const sizeStyles = {
    sm: "text-sm px-4 py-2 rounded-[40px] h-[36px]",
    md: "text-base px-6 py-2.5 rounded-[40px] h-[46px]",
    lg: "text-lg px-8 py-3.5 rounded-[40px] h-[52px]",
  };

  const variantStyles = {
    primary:
      "bg-[#D4FB20] text-[#242528] hover:bg-[#c0e815] active:scale-[0.98] shadow-sm font-semibold focus-visible:ring-[#D4FB20]",
    secondary:
      "bg-white text-[#242528] hover:bg-[#F5F5F6] border border-[#E5E6E8] active:scale-[0.98] focus-visible:ring-[#003BE2]",
    brand:
      "bg-[#003BE2] text-white hover:bg-[#002db8] active:scale-[0.98] shadow-sm focus-visible:ring-[#003BE2]",
    outline:
      "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10 active:scale-[0.98] focus-visible:ring-white",
    ghost:
      "bg-transparent text-[#F5F5F6] hover:text-white hover:bg-white/10 active:scale-[0.98]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
