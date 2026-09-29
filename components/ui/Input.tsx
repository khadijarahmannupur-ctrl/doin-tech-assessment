"use client";

import React, { useState } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      icon,
      rightElement,
      type = "text",
      className = "",
      containerClassName = "",
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    const isPasswordField = type === "password";
    const computedType = isPasswordField ? (showPassword ? "text" : "password") : type;

    return (
      <div className={`w-full flex flex-col gap-1.5 ${containerClassName}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium font-sans text-[#242528] flex items-center justify-between"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center w-full">
          {icon && (
            <div className="absolute left-4 flex items-center pointer-events-none text-[#82868E]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            type={computedType}
            className={`w-full h-[48px] px-4 rounded-[12px] bg-white border font-sans text-base text-[#242528] placeholder:text-[#82868E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent disabled:bg-[#F5F5F6] disabled:cursor-not-allowed ${
              icon ? "pl-11" : "pl-4"
            } ${isPasswordField || rightElement ? "pr-12" : "pr-4"} ${
              error ? "border-red-500 focus:ring-red-500" : "border-[#CED0D3] hover:border-[#82868E]"
            } ${className}`}
            {...props}
          />
          {isPasswordField ? (
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 p-1 text-[#82868E] hover:text-[#242528] transition-colors focus:outline-none"
            >
              {showPassword ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          ) : rightElement ? (
            <div className="absolute right-3.5">{rightElement}</div>
          ) : null}
        </div>
        {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-[#82868E]">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
