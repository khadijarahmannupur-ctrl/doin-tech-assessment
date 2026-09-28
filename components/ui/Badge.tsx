import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "lime" | "outline" | "subtle";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  size = "sm",
  className = "",
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3.5 py-1.5 text-sm",
  };

  const variantClasses = {
    default: "bg-[#F5F5F6] text-[#4B4C53] font-medium",
    primary: "bg-[#003BE2]/10 text-[#003BE2] font-semibold",
    lime: "bg-[#D4FB20] text-[#242528] font-bold shadow-sm",
    outline: "border border-[#CED0D3] text-[#4B4C53]",
    subtle: "bg-white/80 backdrop-blur-sm text-[#242528] border border-white/40",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
