"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AuthVisualSide } from "@/components/sections/AuthVisualSide";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const validate = () => {
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
    } = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

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
        setRegisterSuccess(true);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-[#003BE2] bg-grid-pattern flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-x-hidden">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Side: Brand & Visuals */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start">
          <AuthVisualSide
            headline="Sign up and come in"
            subtext="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
          />
        </div>

        {/* Right Side: Form Card matching Screenshot 1 */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[500px] bg-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 shadow-2xl">
            
            {/* Top Label & Title */}
            <span className="text-sm font-medium font-sans text-[#003BE2] block mb-1">
              Create an Account
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-[38px] text-[#242528] leading-[1.15] mb-8">
              Welcome to <br />
              ByteSpace
            </h2>

            {registerSuccess ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-[16px] text-center my-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                  ✓
                </div>
                <h3 className="font-poppins font-semibold text-base text-green-800">
                  Account created successfully!
                </h3>
                <Link
                  href="/login"
                  className="mt-3 inline-block px-5 py-2 rounded-full bg-[#003BE2] text-white text-xs font-semibold hover:bg-[#002db8] transition-colors"
                >
                  Proceed to Sign In
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name Field */}
                <div>
                  <label className="block text-xs font-medium text-[#242528] mb-1.5 font-sans">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Jamie Davis"
                    className={`w-full h-[48px] px-4 rounded-[12px] border font-sans text-sm text-[#242528] placeholder:text-[#CED0D3] focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent transition-all ${
                      errors.name ? "border-red-500" : "border-[#E5E6E8]"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.name}</p>
                  )}
                </div>

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

                {/* Right-aligned Lime Continue Pill Button matching Screenshot 1 */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-2.5 rounded-full bg-[#D4FB20] hover:bg-[#c0e815] active:scale-95 text-[#242528] font-sans font-semibold text-sm transition-all shadow-sm cursor-pointer"
                  >
                    {isSubmitting ? "Creating..." : "Continue"}
                  </button>
                </div>

                {/* Bottom Link */}
                <p className="text-center text-xs text-[#4B4C53] pt-8 font-sans">
                  Already have an account?{" "}
                  <Link href="/login" className="font-semibold text-[#003BE2] hover:underline">
                    Login
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
