import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import SmoothScroll from "@/components/SmoothScroll";
import BottomToTop from "@/components/BottomToTop";
import Head from "next/head";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--Outfit",
  preload: true
});

export const metadata = {
  author: "HackwithIndia",
  copyright: "Copyright © HackwithIndia | All Rights Reserved.",
  title: {
    template: '%s | HackwithIndia',
    default: 'HackwithIndia | An Official Coding Hackathons',
  },
  description: "HackwithIndia - your gateway to cutting-edge coding hackathons and contests! Join us for live hackathons that challenge your skills in web development, app development, programming, and technology. As the official website of HackwithIndia, we offer online coding contests that push the boundaries of innovation. Whether you're a seasoned coder or just starting, our contests provide a platform for learning and growth. Don't miss out on the Machine Learning Hackathon, Ai Hackathon, and ML Hackathon events that are sure to inspire. Join us and be part of a community dedicated to education, creativity, and technology advancement.",
  keywords: [
    "HackwithIndia",
    "coding hackathon contest",
    "coding contest",
    "live hackathons",
    "HackwithIndia official website",
    "online coding contest",
    "hackathon",
    "web development",
    "app development",
    "programming",
    "technology",
    "education",
    "contest",
    "Machine Learning Hackathon",
    "Ai Hackathon",
    "ML Hackathon",
    "hackathon event",
    "coding competition",
    "software development",
    "coding challenges",
    "programming contest",
    "hackathon for students",
    "hackathon for developers",
    "innovation contest",
    "tech contest",
    "hackathon registration",
    "hackathon prizes",
    "hackathon rules",
    "hackathon guidelines",
    "hackathon schedule",
    "hackathon projects",
    "hackathon ideas"
  ],
  openGraph: {
    title: "HackwithIndia | An Official Coding Hackathons",
    description:
      "Welcome to HackwithIndia - your gateway to cutting-edge coding hackathons and contests! Join us for live hackathons that challenge your skills in web development, app development, programming, and technology. As the official website of HackwithIndia, we offer online coding contests that push the boundaries of innovation. Whether you're a seasoned coder or just starting, our contests provide a platform for learning and growth. Don't miss out on the Machine Learning Hackathon, Ai Hackathon, and ML Hackathon events that are sure to inspire. Join us and be part of a community dedicated to education, creativity, and technology advancement..",
    url: "https://HackwithIndia.live",
    images:
      "https://res.cloudinary.com/dgw7uwtzg/image/upload/v1714453712/andgjtvunpehjvzvg6vi.png",
    siteName: "HackwithIndia | An Official Coding Hackathons",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body suppressHydrationWarning={true} className={`${outfit.variable} font-Outfit antialiased`}>
        <SmoothScroll>
          <NextTopLoader
            color={"white"}
            zIndex={1600}
            speed={1000}
            height={4}
            crawlSpeed={1000}
            crawl={true}
            easing="ease"
            showSpinner={false}
            initialPosition={0.1} />
          <div className="relative w-full">
            {/* Content */}
            <div>{children}</div>

            {/* Footer */}
            <Footer />
          </div>
          <Toaster />
          <BottomToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
