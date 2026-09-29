"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/ui/CourseCard";
import { courseFilterCategories, featuredCourses } from "@/data/content";

export const CourseDirectory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("featured");

  // Row 1 (first 8 categories)
  const row1Categories = courseFilterCategories.slice(0, 8);
  // Row 2 (next 6 categories)
  const row2Categories = courseFilterCategories.slice(8);

  const filteredCourses =
    selectedCategory === "featured"
      ? featuredCourses
      : featuredCourses.filter(
          (c) =>
            c.category === selectedCategory ||
            c.category === "ui-ux" ||
            c.category === "freelance" ||
            c.category === "graphic-design"
        );

  return (
    <section id="courses" className="py-20 lg:py-28 bg-white">
      <Container>
        {/* Section Heading matching Figma Screenshot 3 */}
        <div className="text-center max-w-[860px] mx-auto mb-10 sm:mb-12">
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] text-[#040819] leading-tight tracking-tight">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-[#82868E] leading-relaxed max-w-[760px] mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* 2-Row Category Filter Pills matching Figma Screenshot 3 */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {row1Categories.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium font-sans transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-sm"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8] hover:text-[#242528]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {row2Categories.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium font-sans transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-sm"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8] hover:text-[#242528]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Courses Grid matching Screenshots 4 & 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
};
