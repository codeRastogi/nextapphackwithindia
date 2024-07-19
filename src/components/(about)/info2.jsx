import React from 'react'
import Gallery2 from './gallery2'

function Info2() {
  return (
    <div className="flex flex-col justify-between min-h-screen gap-40 p-5 py-28 lg:py-40 lg:gap-60 via-black bg-gradient-to-tr from-gradient-start to-gradient-middle">
      <div className="flex flex-col items-center justify-center text-white gap-14">
        <div className="flex items-start w-full max-w-7xl">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">About HACKWITHINDIA</h1>
        </div>
        <ul className="space-y-5 max-w-7xl lg:text-lg">
          <li>
            The primary aim of this hackathon would be to inspire young brains
            to develop their technical, and team collaboration skills, and
            encourage them to foster a heightened sense of responsibility
            towards society, instilling them to channel their creative ideas
            towards betterment of the community.
          </li>
          <li>
            There will be 2 rounds in the hackathon. On the first day, Round 1
            will begin with participants giving an abstract and presentation on
            their idea, followed by Round 2 of the mentorship process. Only the
            shortlisted teams will be in round 2 which is prototyping. After the
            results of round 2 finalists will give the presentation to the
            judges on the second day and the winner of the contest will be
            declared.
          </li>
          <li>
            We are expected to gather more than 800 participants from all over
            other universities. We would also be providing them with food and
            basic amenities from the sponsors fund. Additionally, we'd be
            contacting a number of well-known figures in industry and education.
          </li>
        </ul>
      </div>
      <Gallery2 />
    </div>
  )
}

export default Info2