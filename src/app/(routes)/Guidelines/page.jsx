import Info from '@/components/(guidelines)/info'
import Header from '@/components/header'
import React from 'react'

export const metadata = {
  title: "Guidelines",
  description: "Discover the rules and guidelines that govern HackwithIndia's coding hackathon contests. Our rule book provides detailed instructions on how to participate, what to expect, and how to excel in our live hackathons. Learn about the coding contest format, judging criteria, and prizes. Join us for web development, app development, programming, and technology education contests that challenge and inspire.",
  openGraph: {
    title: "Guidelines | HackwithIndia",
    description: "Discover the rules and guidelines that govern HackwithIndia's coding hackathon contests. Our rule book provides detailed instructions on how to participate, what to expect, and how to excel in our live hackathons. Learn about the coding contest format, judging criteria, and prizes. Join us for web development, app development, programming, and technology education contests that challenge and inspire.",
    url: "https://HackwithIndia.live/Guidelines",
    images:
      "https://res.cloudinary.com/dgw7uwtzg/image/upload/v1714453712/andgjtvunpehjvzvg6vi.png",
    siteName: "HackwithIndia | An Official Coding Hackathons",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Hackathon prizes", "Rewards", "Hackathon", "Coding", "Programming", "Tech",
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
    "hackathon ideas",
    "hackwithdelhi"
  ]
};

function page() {
  return (
    <div className="w-full h-full">
      <div className="via-black bg-gradient-to-tl from-gradient-end to-gradient-middle">
        <Header />
        <Info />
      </div>
    </div>
  )
}

export default page