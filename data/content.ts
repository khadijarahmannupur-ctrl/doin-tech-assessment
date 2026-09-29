import { Course, Category, Metric, FeaturePoint, Testimonial, FooterLinkGroup, NavItem } from "@/types";

export const siteConfig = {
  name: "ByteSpace",
  tagline: "Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  url: "https://bytespace.example.com",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export const partnerLogos = [
  { name: "Logoipsum 1", image: "/assets/logoipsum-1.png" },
  { name: "Logoipsum 2", image: "/assets/logoipsum-2.png" },
  { name: "Logoipsum 3", image: "/assets/logoipsum-3.png" },
  { name: "Logoipsum 4", image: "/assets/logoipsum-4.png" },
  { name: "Logoipsum 5", image: "/assets/logoipsum-5.png" },
];

export const courseFilterCategories = [
  // Row 1
  { id: "featured", name: "Featured", slug: "featured" },
  { id: "music", name: "Music", slug: "music" },
  { id: "drawing-painting", name: "Drawing & Painting", slug: "drawing-painting" },
  { id: "marketing", name: "Marketing", slug: "marketing" },
  { id: "animation", name: "Animation", slug: "animation" },
  { id: "social-media", name: "Social Media", slug: "social-media" },
  { id: "ui-ux", name: "UI/UX Design", slug: "ui-ux" },
  { id: "creative-marketing", name: "Creative Marketing", slug: "creative-marketing" },
  // Row 2
  { id: "digital-illustration", name: "Digital Illustration", slug: "digital-illustration" },
  { id: "film-video", name: "Film & Video", slug: "film-video" },
  { id: "crafts", name: "Crafts", slug: "crafts" },
  { id: "freelance", name: "Freelance & Entrepreneurship", slug: "freelance" },
  { id: "graphic-design", name: "Graphic Design", slug: "graphic-design" },
  { id: "photography", name: "Photography", slug: "photography" },
];

export const diverseCategories: Category[] = [
  { id: "cat-design", name: "Design", slug: "design", icon: "/assets/icon-category-design.png" },
  { id: "cat-dev", name: "Development", slug: "development", icon: "/assets/icon-category-dev.png" },
  { id: "cat-it", name: "IT & Software", slug: "it-software", icon: "/assets/icon-category-it.png" },
  { id: "cat-business", name: "Business", slug: "business", icon: "/assets/icon-category-business.png" },
  { id: "cat-marketing", name: "Marketing", slug: "marketing", icon: "/assets/icon-category-marketing.png" },
  { id: "cat-photo", name: "Photography", slug: "photography", icon: "/assets/icon-category-photography.png" },
];

export const featuredCourses: Course[] = [
  {
    id: "course-1",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    studentsCount: "26+",
    category: "ui-ux",
    image: "/assets/course-figma-sketch.png",
  },
  {
    id: "course-2",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    studentsCount: "26+",
    category: "graphic-design",
    image: "/assets/course-digital-asset.png",
  },
  {
    id: "course-3",
    title: "the Power of Big Data",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    studentsCount: "26+",
    category: "freelance",
    image: "/assets/course-big-data.png",
  },
  {
    id: "course-4",
    title: "Balancing Productivity and Self-Care",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    studentsCount: "26+",
    category: "freelance",
    image: "/assets/course-productivity-imac.png",
  },
  {
    id: "course-5",
    title: "Mastering Money Management",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    studentsCount: "26+",
    category: "freelance",
    image: "/assets/course-money-chart.png",
  },
  {
    id: "course-6",
    title: "From Idea to Startup Success",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    studentsCount: "26+",
    category: "freelance",
    image: "/assets/course-startup-team.png",
  },
];

export const growthMetrics: Metric[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorFeaturePoints: FeaturePoint[] = [
  { title: "Share Your Expertise" },
  { title: "Monetize Your Passion" },
  { title: "Flexibility and Autonomy" },
  { title: "Build a Community" },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/avatar-sarah.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: "test-2",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/avatar-james.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: "test-3",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/avatar-alex.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Featured Courses",
    links: [
      { label: "Business", href: "#courses" },
      { label: "IT", href: "#courses" },
      { label: "Design", href: "#courses" },
      { label: "Development", href: "#courses" },
      { label: "Marketing", href: "#courses" },
    ],
  },
  {
    title: "Featured Categories",
    links: [
      { label: "Photography", href: "#categories" },
      { label: "Finance", href: "#categories" },
      { label: "Sport", href: "#categories" },
      { label: "Design", href: "#categories" },
      { label: "Development", href: "#categories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Become a Creator", href: "/register" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];
