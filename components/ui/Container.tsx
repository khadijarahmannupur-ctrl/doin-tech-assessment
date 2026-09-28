import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const sizeClasses = {
    narrow: "max-w-[960px]",
    default: "max-w-[1200px]",
    wide: "max-w-[1440px]",
    full: "max-w-full",
  };

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
