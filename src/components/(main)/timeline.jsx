"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Timeline() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-5 pt-40 text-white gap-14 md:gap-20 via-black bg-gradient-to-tr from-gradient-middle to-gradient-start">
      <div className="flex items-start w-full max-w-7xl">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Our Timeline</h1>
      </div>
      <div className="py-40 max-h-96">
        <TypeAnimation
          className="text-lg font-bold capitalize md:text-xl lg:text-3xl xl:text-4xl text-amber-300"
          speed={50}
          sequence={[
            '" Timeline Coming Soon... "',
            1000,
            '" टाइमलाइन जल्दी ही आ रही है... "',
            1000,
            ' " টাইমলাইন শীঘ্রই আসছে... "',
            1000,
            ' " టైమ్‌లైన్ త్వరలో రావడం ఉంది... "',
            1000,
            ' " டைம்லைன் விரைவில் வருகிறது... "',
            1000,
            ' " ಟೈಮ್‌ಲೈನ್ ಬೇಗ ಬರುತ್ತಿದೆ... "',
            1000,
            ' " ടൈംലൈൻ വേഗത്തിൽ വരുന്നു... "',
            1000
          ]}
          repeat={Infinity}
        />
      </div>

      {/* <Image src={"/timeline.png"} width={1240} height={620} quality={100} loading="eager" alt='HackWithIndia Timeline' /> */}
    </div >
  )
}

export default Timeline;