export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  pricePeriod?: string;
  rating: number;
  reviewCount?: number;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  studentsCount: string;
  category: string;
  image: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  coursesCount?: number;
  studentsCount?: string;
  icon?: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface FeaturePoint {
  title: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}
