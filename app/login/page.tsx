"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
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
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-[#003BE2] bg-grid-pattern flex flex-col justify-between p-4 sm:p-6 lg:p-10 relative overflow-hidden">
      {/* Decorative 3D elements */}
      <div className="absolute top-[8%] left-[2%] w-[120px] h-[120px] pointer-events-none opacity-80 animate-float-slow hidden xl:block">
        <Image
          src="/assets/cone-small.png"
          alt="Decorative Cone"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <div
        className="absolute bottom-[10%] left-[30%] w-[140px] h-[140px] pointer-events-none opacity-80 animate-float-slow hidden xl:block"
        style={{ animationDelay: "2s" }}
      >
        <Image
          src="/assets/cone-large.png"
          alt="Decorative Cone"
          width={140}
          height={140}
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
            Welcome Back
          </span>
          <h1 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Sign in with ease
          </h1>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#E5E6E8] leading-relaxed max-w-[480px]">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>

          {/* Mini preview card */}
          <div className="mt-8 hidden sm:flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-[20px] p-4 border border-white/20 max-w-[420px]">
            <div className="w-16 h-12 rounded-[12px] bg-white/20 relative overflow-hidden shrink-0">
              <Image src="/assets/course-figma.png" alt="Course" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">Learn Figma from Basic</h4>
              <p className="text-xs text-[#D4FB20] font-medium mt-0.5">Resume where you left off</p>
            </div>
          </div>
        </div>

        {/* Right: Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[520px] bg-white rounded-[28px] p-7 sm:p-10 shadow-2xl border border-white/20">
            <h2 className="font-poppins font-semibold text-2xl sm:text-3xl text-[#242528] mb-2">
              Sign In
            </h2>
            <p className="text-sm font-sans text-[#82868E] mb-6">
              Enter your credentials to access your account
            </p>

            {loginSuccess ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-[16px] text-center my-6">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-poppins font-semibold text-lg text-green-800">
                  Signed in successfully!
                </h3>
                <p className="text-sm text-green-700 mt-1">
                  Redirecting to your course library...
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-block text-xs font-semibold text-[#003BE2] hover:underline"
                >
                  Click here if not redirected automatically
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <Input
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: undefined });
                  }}
                  error={errors.password}
                  required
                />

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-[#003BE2] focus:ring-[#003BE2]"
                    />
                    <span className="text-xs sm:text-sm text-[#4B4C53] font-sans">
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-xs sm:text-sm font-medium text-[#003BE2] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  variant="brand"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full mt-2 font-bold shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </Button>

                <div className="relative my-6 flex items-center justify-center">
                  <div className="border-t border-[#E5E6E8] w-full" />
                  <span className="bg-white px-3 text-xs uppercase tracking-wider text-[#82868E] font-medium absolute">
                    Or continue with
                  </span>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center py-2.5 px-4 rounded-[12px] border border-[#CED0D3] hover:bg-[#F5F5F6] transition-colors font-sans text-xs font-semibold text-[#242528]"
                  >
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-2.5 px-4 rounded-[12px] border border-[#CED0D3] hover:bg-[#F5F5F6] transition-colors font-sans text-xs font-semibold text-[#242528]"
                  >
                    Apple
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-2.5 px-4 rounded-[12px] border border-[#CED0D3] hover:bg-[#F5F5F6] transition-colors font-sans text-xs font-semibold text-[#242528]"
                  >
                    GitHub
                  </button>
                </div>

                <p className="text-center text-xs sm:text-sm text-[#4B4C53] pt-4 font-sans">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="font-bold text-[#003BE2] hover:underline"
                  >
                    Sign up
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
