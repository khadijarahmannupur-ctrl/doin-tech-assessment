import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace — Get Access to Hundreds of Courses",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of curated courses from top creators.",
  keywords: ["online courses", "learning platform", "design courses", "development", "ByteSpace"],
  authors: [{ name: "ByteSpace Team" }],
  openGraph: {
    title: "ByteSpace — Get Access to Hundreds of Courses",
    description: "Unlock your creativity, gain valuable knowledge, and grow your business.",
    type: "website",
    url: "https://bytespace.example.com",
    siteName: "ByteSpace",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteSpace — Online Learning & Creator Platform",
    description: "Unlock your creativity with our wide range of courses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#242528] antialiased">
        {children}
      </body>
    </html>
  );
}
