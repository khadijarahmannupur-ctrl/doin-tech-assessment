"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AuthVisualSide } from "@/components/sections/AuthVisualSide";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setLoginSuccess(true);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-[#003BE2] bg-grid-pattern flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-x-hidden">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Side: Brand & Visuals */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start">
          <AuthVisualSide
            headline="Sign in with ease"
            subtext="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
          />
        </div>

        {/* Right Side: Form Card matching Screenshot 2 */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[500px] bg-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 shadow-2xl">
            
            {/* Top Label & Title */}
            <span className="text-sm font-medium font-sans text-[#003BE2] block mb-1">
              Sign In
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-[38px] text-[#242528] leading-tight mb-8">
              Welcome Back
            </h2>

            {loginSuccess ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-[16px] text-center my-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                  ✓
                </div>
                <h3 className="font-poppins font-semibold text-base text-green-800">
                  Signed in successfully!
                </h3>
                <Link
                  href="/"
                  className="mt-3 inline-block text-xs font-semibold text-[#003BE2] hover:underline"
                >
                  Return to homepage
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <div>
                  <label className="block text-xs font-medium text-[#242528] mb-1.5 font-sans">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="designer@example.com"
                    className={`w-full h-[48px] px-4 rounded-[12px] border font-sans text-sm text-[#242528] placeholder:text-[#CED0D3] focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent transition-all ${
                      errors.email ? "border-red-500" : "border-[#E5E6E8]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs font-medium text-[#242528] mb-1.5 font-sans">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: undefined });
                    }}
                    placeholder="********"
                    className={`w-full h-[48px] px-4 rounded-[12px] border font-sans text-sm text-[#242528] placeholder:text-[#CED0D3] focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent transition-all ${
                      errors.password ? "border-red-500" : "border-[#E5E6E8]"
                    }`}
                  />
                  {errors.password && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.password}</p>
                  )}
                </div>

                {/* Right-aligned Lime Sign In Pill Button matching Screenshot 2 */}
                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-2.5 rounded-full bg-[#D4FB20] hover:bg-[#c0e815] active:scale-95 text-[#242528] font-sans font-semibold text-sm transition-all shadow-sm cursor-pointer"
                  >
                    {isSubmitting ? "Signing In..." : "Sign In"}
                  </button>
                </div>

                {/* Divider Line with 'or' */}
                <div className="relative my-7 flex items-center justify-center">
                  <div className="border-t border-[#E5E6E8] w-full" />
                  <span className="bg-white px-3 text-xs text-[#82868E] font-sans absolute">
                    or
                  </span>
                </div>

                {/* Circular Social Buttons (Facebook & Google) matching Screenshot 2 */}
                <div className="flex items-center justify-center gap-4">
                  {/* Facebook */}
                  <button
                    type="button"
                    aria-label="Sign in with Facebook"
                    className="w-12 h-12 rounded-full border border-[#E5E6E8] hover:bg-[#F5F5F6] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>

                  {/* Google */}
                  <button
                    type="button"
                    aria-label="Sign in with Google"
                    className="w-12 h-12 rounded-full border border-[#E5E6E8] hover:bg-[#F5F5F6] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                    </svg>
                  </button>
                </div>

                {/* Bottom Link */}
                <p className="text-center text-xs text-[#4B4C53] pt-6 font-sans">
                  New user?{" "}
                  <Link href="/register" className="font-semibold text-[#003BE2] hover:underline">
                    Create an account
                  </Link>
                </p>
              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
