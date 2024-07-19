import React from 'react'
import Gallery from './gallery'

function Info() {
  return (
    <div className="flex flex-col justify-between min-h-screen gap-40 p-5 py-28 lg:py-40 lg:gap-60">
      <div className="flex flex-col items-center justify-center text-white gap-14">
        <div className="flex items-start w-full max-w-7xl">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">About MSIT</h1>
        </div>
        <p className="max-w-7xl lg:text-lg">
          This AICTE approved Institute under GGSIP University is ideally
          located in the Institutional area of Janakpuri, New Delhi. Established
          in 2001, MSIT has a campus spread over eight acres of land with
          beautiful eco-friendly surroundings. The institute has over a short
          span of time acquired and developed impressive infrastructure,
          expertise, and resources for imparting high quality engineering
          education. The institute provides Bachelor of Technology in CSE, IT,
          ECE and EEE streams.
        </p>
      </div>
      <Gallery />
    </div>
  )
}

export default Info