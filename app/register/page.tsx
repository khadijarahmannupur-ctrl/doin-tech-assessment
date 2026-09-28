"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    agreeTerms?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const validate = () => {
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      agreeTerms?: string;
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
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = "You must agree to the Terms and Privacy Policy";
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
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-[#003BE2] bg-grid-pattern flex flex-col justify-between p-4 sm:p-6 lg:p-10 relative overflow-hidden">
      {/* Decorative 3D elements */}
      <div className="absolute top-[6%] right-[3%] w-[130px] h-[130px] pointer-events-none opacity-80 animate-float-slow hidden xl:block">
        <Image
          src="/assets/cone-small.png"
          alt="Decorative Cone"
          width={130}
          height={130}
          className="object-contain"
        />
      </div>

      <div
        className="absolute bottom-[8%] left-[25%] w-[150px] h-[150px] pointer-events-none opacity-80 animate-float-slow hidden xl:block"
        style={{ animationDelay: "2.5s" }}
      >
        <Image
          src="/assets/cone-large.png"
          alt="Decorative Cone"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Header with Logo */}
      <header className="max-w-[1320px] w-full mx-auto flex items-center justify-between z-10 mb-8">
        <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <svg
              className="w-7 h-7 text-[#D4FB20] group-hover:scale-110 transition-transform"
              viewBox="0 0 29 32"
              fill="none"
            >
              <path
                d="M14.5 0L28.7894 8.25V24.75L14.5 33L0.210583 24.75V8.25L14.5 0Z"
                fill="currentColor"
              />
              <path
                d="M14.5 7L22.5 11.5V20.5L14.5 25L6.5 20.5V11.5L14.5 7Z"
                fill="#003BE2"
              />
            </svg>
          </div>
          <span className="font-bold text-2xl font-display tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        <Link
          href="/"
          className="text-sm font-medium font-sans text-white/80 hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>
      </header>

      {/* Main Container */}
      <main className="max-w-[1240px] w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10 py-6">
        {/* Left: Info & Visuals */}
        <div className="lg:col-span-6 flex flex-col justify-center text-white pr-0 lg:pr-8">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-[#D4FB20] text-xs font-semibold uppercase tracking-wider w-fit mb-4">
            Start Learning
          </span>
          <h1 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Sign up and come in
          </h1>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#E5E6E8] leading-relaxed max-w-[480px]">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
          </p>

          {/* Mini benefits badge */}
          <div className="mt-8 space-y-3 max-w-[440px]">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-[14px] p-3 border border-white/15">
              <span className="w-6 h-6 rounded-full bg-[#D4FB20] text-[#242528] font-bold text-xs flex items-center justify-center">
                ✓
              </span>
              <span className="text-sm font-medium text-white">
                Unlimited access to beginner courses
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-[14px] p-3 border border-white/15">
              <span className="w-6 h-6 rounded-full bg-[#D4FB20] text-[#242528] font-bold text-xs flex items-center justify-center">
                ✓
              </span>
              <span className="text-sm font-medium text-white">
                Join our 10,000+ creator community
              </span>
            </div>
          </div>
        </div>

        {/* Right: Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[540px] bg-white rounded-[28px] p-7 sm:p-10 shadow-2xl border border-white/20">
            <h2 className="font-poppins font-semibold text-2xl sm:text-3xl text-[#242528] mb-2">
              Create an Account
            </h2>
            <p className="text-sm font-sans text-[#82868E] mb-6">
              Sign up today and start exploring new skills
            </p>

            {registerSuccess ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-[16px] text-center my-6">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-poppins font-semibold text-lg text-green-800">
                  Account created successfully!
                </h3>
                <p className="text-sm text-green-700 mt-1">
                  Welcome to ByteSpace. You are ready to start learning.
                </p>
                <Link
                  href="/login"
                  className="mt-4 inline-block px-5 py-2 rounded-full bg-[#003BE2] text-white text-xs font-semibold hover:bg-[#002db8] transition-colors"
                >
                  Proceed to Sign In
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  error={errors.name}
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  error={errors.email}
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Min 8 chars"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: undefined });
                    }}
                    error={errors.password}
                    required
                  />

                  <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Repeat password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (errors.confirmPassword)
                        setErrors({ ...errors, confirmPassword: undefined });
                    }}
                    error={errors.confirmPassword}
                    required
                  />
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => {
                        setAgreeTerms(e.target.checked);
                        if (errors.agreeTerms)
                          setErrors({ ...errors, agreeTerms: undefined });
                      }}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#003BE2] focus:ring-[#003BE2]"
                    />
                    <span className="text-xs text-[#4B4C53] font-sans leading-relaxed">
                      I agree to the{" "}
                      <a href="#" className="font-semibold text-[#003BE2] hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="font-semibold text-[#003BE2] hover:underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-xs text-red-600 font-medium mt-1">
                      {errors.agreeTerms}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="brand"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full mt-2 font-bold shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? "Creating Account..." : "Sign Up"}
                </Button>

                <p className="text-center text-xs sm:text-sm text-[#4B4C53] pt-4 font-sans">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-bold text-[#003BE2] hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Auth Footer */}
      <footer className="max-w-[1320px] w-full mx-auto text-center text-xs text-white/60 z-10 pt-6">
        © 2023 ByteSpace. All rights reserved.
      </footer>
    </div>
  );
}
