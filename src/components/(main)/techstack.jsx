import Image from 'next/image'
import React from 'react'

const Images = [
  {
    title: "ARTIFICIAL INTELLIGENCE",
    imageUrl: "/35.png"
  },
  {
    title: "WEB DEVELOPMENT",
    imageUrl: "/36.png"
  },
  {
    title: "APP DEVELOPMENT",
    imageUrl: "/37.png"
  },
  {
    title: "AUGMENTED REALITY (AR)",
    imageUrl: "/38.png"
  },
  {
    title: "BRAIN COMPUTER INTERFACE",
    imageUrl: "/39.png"
  },
  {
    title: "EDGE / CLOUD COMPUTING",
    imageUrl: "/40.png"
  },
  {
    title: "VIRUTAL REALITY (VR)",
    imageUrl: "/41.png"
  },
  {
    title: "INTERNET OF THINGS",
    imageUrl: "/42.png"
  }
]

function TechStack() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-5 pt-40 text-white via-black bg-gradient-to-tl from-gradient-start to-gradient-middle">
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 p-5 max-w-7xl lg:items-stretch">
        <h1 className="text-4xl font-bold sm:text-6xl">Tech Stack</h1>
        <div className="grid items-center justify-center grid-cols-1 gap-20 sm:grid-cols-2 xl:grid-cols-3">
          {Images.map((data, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-10">
              <Image src={data.imageUrl} alt={data.title} quality={100} loading="lazy" width={128} height={128} className="w-20 md:w-32" />
              <h1 className="text-sm font-medium tracking-widest lg:text-lg">{data.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default TechStack