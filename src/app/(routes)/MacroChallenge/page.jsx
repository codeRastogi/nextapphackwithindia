import ChallengeCard from '@/components/(macrochallenge)/ChallengeCard';
import ChallengeInfo from '@/components/(macrochallenge)/ChallengeInfo';
import Header from '@/components/header'
import React from 'react'

export const metadata = {
  title: "Macro Challenge",
  description: "Contact HackwithIndia for all your hackathon inquiries. Find our contact number and helpline for assistance with our web development, app development, programming, and technology education contests. Connect with us to learn more about our upcoming events and how you can get involved in the exciting world of coding hackathons.",
  openGraph: {
    title: "Contact | HackwithIndia",
    description: "Contact HackwithIndia for all your hackathon inquiries. Find our contact number and helpline for assistance with our web development, app development, programming, and technology education contests. Connect with us to learn more about our upcoming events and how you can get involved in the exciting world of coding hackathons.",
    url: "https://HackwithIndia.live/Contact",
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
    <div className="w-full h-full ">
      <div className="via-black bg-gradient-to-tl from-gradient-start to-gradient-start">
        <Header/>
        <div className='flex flex-col content-center justify-center item-center mt-15 mb-20'>
        <ChallengeInfo/>
        <ChallengeCard/>
        </div>
      </div >
    </div>
  )
}

export default page