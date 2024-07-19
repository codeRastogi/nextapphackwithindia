import React from 'react'

const Logo1 = ["/mx.png"]
const Logo2 = ["/Reskill.svg", "/microsoft.png", "/bobble.png", "/QuillAudits.svg", "/Quine.png", "/ola.png", "/flagsmith.png", "/Devfolio.png",]

function Info() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-40 p-5 pt-20 pb-40 text-white via-black bg-gradient-to-tl from-gradient-start to-gradient-middle">
            <div className="flex flex-col items-center justify-center gap-20">
                <h1 className="text-3xl font-bold sm:text-5xl">Meet Our Title Sponsor</h1>
                <div className="grid items-center justify-center grid-cols-1 gap-20">
                    {Logo1.map((data, index) => (
                        <img src={data} key={index} alt={data} loading="lazy" width={500} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-20">
                <h1 className="text-3xl font-bold sm:text-5xl">Meet Our Sponsors</h1>
                <div className="grid items-center justify-center grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Logo2.map((data, index) => (
                        <img src={data} key={index} alt={data} loading="lazy" className="w-32 md:w-40" />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-14 max-w-7xl">
                <h1 className="text-3xl font-bold text-center sm:text-5xl sm:text-start">What is HACKWITHDELHI?</h1>
                <ul className="space-y-5 text-lg">
                    <li>
                        We from HackwithIndia are organising a 12 hour inter-college hackathon, HackwithDelhi, on 20th May 2024. The hackathon will be held at G.L. Bajaj Institute of Technology. This hackathon will be the biggest hackathon in Delhi, and more than 400 students will be participating from all over Delhi-NCR.
                    </li>
                    <li>
                        By harnessing the potential of advanced technologies like artificial intelligence, the Internet of Things, blockchain, and more, our hackathon aims to inspire students to craft innovative solutions that not only contribute to environmental betterment but also address pressing humanitarian challenges.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Info
