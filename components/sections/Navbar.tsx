"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/content";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  activeSection?: string;
  isTransparent?: boolean;
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
          ? "bg-[#003BE2]/90 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
          aria-label="ByteSpace Home"
        >
          <div className="w-[32px] h-[32px] relative flex items-center justify-center">
            <svg
              className="w-7 h-7 text-[#D4FB20] transition-transform duration-300 group-hover:scale-110"
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
          <span className="font-bold text-2xl font-display tracking-tight text-white">
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
                className={`text-base font-medium font-sans transition-all duration-200 py-1 relative hover:text-white ${
                  isActive ? "text-white font-semibold" : "text-white/80"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4FB20] rounded-full animate-pulse-glow" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-base font-medium font-sans text-white/90 hover:text-white px-3 py-2 transition-colors duration-200"
          >
            Sign In
          </Link>
          <Button
            href="/register"
            variant="primary"
            size="sm"
            className="px-5 font-semibold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Join Us
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#D4FB20] focus:outline-none focus:ring-2 focus:ring-white rounded-lg transition-colors"
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#003BE2] border-b border-white/20 shadow-2xl p-6 transition-all animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-lg transition-colors"
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
              <Button
                href="/register"
                variant="primary"
                size="md"
                className="w-full text-center font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
