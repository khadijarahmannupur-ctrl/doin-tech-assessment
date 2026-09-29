"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerLinkGroups, footerLegalLinks } from "@/data/content";
import Image from "next/image";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-white border-t border-[#E5E6E8] pt-16 sm:pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Brand Logo & Newsletter */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
                aria-label="ByteSpace Home"
              >
                <Image
                  src="/assets/footer-logo.png"
                  alt=""
                  width={170}
                  height={40}
                  className="transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                {/* <Image
                          src="/assets/byte-space-logo-text.png"
                          alt="ByteSpace"
                          width={110}
                          height={22}
                          className="h-[20px] w-auto mt-2"
                          priority
                        /> */}
              </Link>

              <p className="font-sans text-sm text-[#4B4C53] max-w-[380px] leading-relaxed mb-6">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-[420px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 h-[46px] px-4 rounded-full border border-[#CED0D3] bg-[#FAFAFA] font-sans text-sm text-[#242528] placeholder:text-[#82868E] focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent transition-all"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#D4FB20] hover:bg-[#c0e815] text-[#242528] font-sans font-semibold text-sm transition-colors shadow-sm"
                >
                  Subscribe
                </button>
              </form>

              {subscribed && (
                <p className="mt-2 text-xs text-green-600 font-semibold">
                  ✓ Thank you for subscribing!
                </p>
              )}

              <p className="mt-4 text-xs text-[#82868E] leading-normal max-w-[420px]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns: Exact Featured Categories & Company */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-12">
            {footerLinkGroups.map((group, idx) => (
              <div key={idx}>
                <h3 className="font-sans font-semibold text-sm text-[#242528] uppercase tracking-wider mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="font-sans text-sm text-[#4B4C53] hover:text-[#003BE2] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-16 pt-8 border-t border-[#E5E6E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#82868E]">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {footerLegalLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-[#242528] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
