import React from "react";
import Image from "next/image";
import { Course } from "@/types";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, className = "" }) => {
  return (
    <article
      className={`group bg-white rounded-[24px] border border-[#E5E6E8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${className}`}
    >
      {/* Course Thumbnail + Overlaid Metadata Strip */}
      <div className="relative w-full aspect-[341/196] bg-gray-100 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Frosted Glass Meta Bar (bottom of image) matching Screenshot 4 & 5 */}
        <div className="absolute inset-x-3 bottom-3 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center justify-between text-[11px] text-white font-sans">
          <span>{course.lessonsCount} Lessons</span>
          <span className="opacity-60">•</span>
          <span>{course.duration}</span>
          <span className="opacity-60">•</span>
          <span>{course.commentsCount} Comments</span>
        </div>
      </div>

      {/* Course Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Rating Row */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-poppins font-semibold text-lg text-[#000000] group-hover:text-[#003BE2] transition-colors line-clamp-1 leading-snug">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 font-semibold text-sm text-[#4B4C53] shrink-0">
              <span>{course.rating.toFixed(1)}</span>
              <span className="text-[#CED0D3]">★</span>
            </div>
          </div>

          {/* Instructor */}
          <p className="text-xs text-[#82868E] font-sans mb-4">
            by {course.instructor}
          </p>

          {/* Level Badge + Avatar Stack Row */}
          <div className="flex items-center justify-between mb-4">
            {/* Beginner Pill Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F5F5F6] rounded-full text-xs font-medium text-[#4B4C53]">
              {/* Bar chart icon */}
              <svg className="w-3.5 h-3.5 text-[#82868E]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span>{course.level}</span>
            </div>

            {/* Avatar Stack with 26+ */}
            <div className="flex items-center">
              <Image
                src="/assets/course-student-avatars.png"
                alt="Student avatars"
                width={128}
                height={32}
                className="h-6 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Price Row */}
        <div className="pt-3 border-t border-[#F5F5F6] flex items-baseline gap-1">
          <span className="font-poppins font-bold text-xl text-[#003BE2]">
            {course.price}
          </span>
          {course.pricePeriod && (
            <span className="text-xs text-[#82868E] font-sans">{course.pricePeriod}</span>
          )}
        </div>
      </div>
    </article>
  );
};
