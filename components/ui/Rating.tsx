import React from "react";

interface RatingProps {
  score: number;
  maxScore?: number;
  count?: number | string;
  size?: "sm" | "md" | "lg";
  className?: string;
  showScoreText?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
  score,
  maxScore = 5,
  count,
  size = "md",
  className = "",
  showScoreText = true,
}) => {
  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      {showScoreText && (
        <span className={`font-semibold font-sans text-[#242528] ${textSizes[size]}`}>
          {score.toFixed(1)}
        </span>
      )}
      <div className="flex items-center text-[#FFB800]">
        {[...Array(maxScore)].map((_, i) => (
          <svg
            key={i}
            className={`${iconSizes[size]} ${
              i < Math.floor(score)
                ? "fill-current text-[#FFB800]"
                : i < score
                ? "fill-current text-[#FFB800]/70"
                : "text-gray-300 fill-current"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      {count && (
        <span className={`text-[#82868E] font-sans ${textSizes[size]}`}>
          ({count})
        </span>
      )}
    </div>
  );
};
