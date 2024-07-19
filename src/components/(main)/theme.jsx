import Image from 'next/image'
import React from 'react'

const Images = [
  {
    title: "OPEN INNOVATION",
    imageUrl: "/21.png"
  },
  {
    title: "SMART AGRICULTURE",
    imageUrl: "/22.png"
  },
  {
    title: "HEALTH & FITNESS",
    imageUrl: "/23.png"
  },
  {
    title: "FINTECH",
    imageUrl: "/24.png"
  },
  {
    title: "ENVIRONMENTAL IMPACT",
    imageUrl: "/25.png"
  },
  {
    title: "SMART EDUCATION",
    imageUrl: "/26.png"
  }
]

function Theme() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen text-white via-black bg-gradient-to-bl from-gradient-start to-gradient-middle">
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 p-5 max-w-7xl lg:items-stretch">
        <h1 className="text-4xl font-bold sm:text-6xl">Our Themes</h1>
        <div className="grid items-center justify-center grid-cols-1 gap-20 sm:grid-cols-2 xl:grid-cols-3">
          {Images.map((data, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-10">
              <Image src={data.imageUrl} alt={data.title} quality={100} loading="lazy" width={128} height={128} className="w-20 md:w-32" />
              <h1 className="text-sm font-medium tracking-widest lg:text-lg">{data.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Theme