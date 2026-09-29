"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/data/content";

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = "hero" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ["hero", "courses", "creators", "testimonials"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#003BE2]/95 backdrop-blur-md shadow-lg py-3.5 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
          aria-label="ByteSpace Home"
        >
          {/* Exact Logo Icon from Figma */}
          <div className="w-[30px] h-[30px] relative flex items-center justify-center">
            <svg
              className="w-7 h-7 text-[#D4FB20] transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 29 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          <span className="font-bold text-[22px] font-display tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = currentSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-[15px] font-medium font-sans transition-all duration-200 py-1 relative hover:text-white ${
                  isActive ? "text-white font-semibold" : "text-white/85"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Auth Buttons & Cart Icon */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className="text-[15px] font-medium font-sans text-white/90 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-[15px] font-medium font-sans text-white/90 hover:text-white transition-colors"
          >
            Join Us
          </Link>

          {/* Shopping Bag / Cart Icon (from Figma screenshot 1) */}
          <button
            type="button"
            aria-label="Shopping Cart"
            className="text-white/90 hover:text-white transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            aria-label="Shopping Cart"
            className="text-white p-1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white hover:text-[#D4FB20] focus:outline-none focus:ring-2 focus:ring-white rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-[#003BE2] border-b border-white/20 shadow-2xl p-6 transition-all animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/15 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 text-white font-medium hover:bg-white/10 rounded-lg transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 bg-[#D4FB20] text-[#242528] font-bold rounded-full transition-colors"
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
