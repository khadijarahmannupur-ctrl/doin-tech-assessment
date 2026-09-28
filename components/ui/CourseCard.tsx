import React from "react";
import Image from "next/image";
import { Course } from "@/types";
import { Rating } from "@/components/ui/Rating";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, className = "" }) => {
  return (
    <article
      className={`group bg-white rounded-[24px] border border-[#E5E6E8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${className}`}
    >
      {/* Course Thumbnail */}
      <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#242528] shadow-sm">
            {course.level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-[#82868E] mb-2 font-sans">
            <span>by {course.instructor}</span>
            <div className="flex items-center gap-1 font-semibold text-[#242528]">
              <Rating score={course.rating} showScoreText={true} size="sm" />
            </div>
          </div>

          <h3 className="font-poppins font-semibold text-lg sm:text-xl text-[#000000] group-hover:text-[#003BE2] transition-colors line-clamp-2 leading-snug">
            {course.title}
          </h3>

          {/* Metadata Row */}
          <div className="mt-4 pt-4 border-t border-[#F5F5F6] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#4F4F4F] font-sans">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#82868E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {course.lessonsCount} Lessons
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#82868E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#82868E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {course.commentsCount} Comments
            </span>
          </div>
        </div>

        {/* Footer: Price & Enroll CTA */}
        <div className="mt-5 pt-4 border-t border-[#F5F5F6] flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="font-poppins font-bold text-xl sm:text-2xl text-[#003BE2]">
              {course.price}
            </span>
            {course.pricePeriod && (
              <span className="text-xs text-[#82868E]">{course.pricePeriod}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center -space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#003BE2] text-white text-[10px] font-bold flex items-center justify-center border border-white">
                {course.studentsCount}
              </div>
            </div>
            <button
              type="button"
              className="px-3.5 py-1.5 bg-[#F5F5F6] hover:bg-[#003BE2] hover:text-white text-[#242528] rounded-full text-xs font-semibold transition-colors"
            >
              Enroll
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
