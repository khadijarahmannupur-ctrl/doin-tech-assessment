"use client";

import React, { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "@/components/ui/CourseCard";
import { courseCategories, featuredCourses } from "@/data/content";

export const CourseDirectory: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses = useMemo(() => {
    if (activeCategory === "all") return featuredCourses;
    return featuredCourses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="courses" className="py-20 lg:py-28 bg-white">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          title="Access a Wealth of Knowledge Through Our Comprehensive Course Directory"
          subtitle="Explore top-rated courses crafted by expert instructors to help you master modern tools and advance your career."
          align="center"
          className="mb-10 sm:mb-12"
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 sm:mb-14 gap-2.5 sm:gap-3 scrollbar-none no-scrollbar">
          {courseCategories.map((category) => {
            const isActive = activeCategory === category.slug;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.slug)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium font-sans whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#003BE2] text-white shadow-md font-semibold"
                    : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8] hover:text-[#242528]"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-[#FAFAFA] rounded-[24px] border border-[#E5E6E8]">
            <p className="text-[#82868E] font-sans text-base">
              No courses found in this category at the moment.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-3 text-[#003BE2] text-sm font-semibold hover:underline"
            >
              View all courses
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};
