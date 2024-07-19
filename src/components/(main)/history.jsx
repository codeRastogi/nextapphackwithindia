import React from 'react'

function History() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5 pb-40 text-white via-black bg-gradient-to-tl gap-14 md:gap-20 from-gradient-start to-gradient-middle">
            <div className="flex items-start w-full max-w-7xl">
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Our History</h1>
            </div>
            <ul className="space-y-5 max-w-7xl lg:text-lg">
                <li>
                    HackWithIndia emerged as a pioneer in the hackathon scene, hosting two monumental events within a span of six months.
                </li>
                <li>
                    The journey began with "Code4Cause," a groundbreaking hackathon that attracted over 3000 registrations from students across India. Held offline at the esteemed Maharaja Surajmal Institute of Technology, the event saw a remarkable turnout of 2000+ enthusiastic participants. Code4Cause wasn't just about coding; it was a platform where innovation met social impact, sparking solutions to pressing global issues.
                </li>
                <li>
                    Buoyed by the success of Code4Cause, HackWithIndia ventured into uncharted territory with its inaugural edition. This time, the stakes were higher, with over 5000 registrations flooding in. The grand finale was hosted at the prestigious Microsoft Office in Gurugram, setting the stage for intense competition and groundbreaking innovations. The event not only showcased the technical prowess of India's brightest minds but also fostered collaboration and creativity on a national scale.
                </li>
                <li>
                These two landmark hackathons cemented HackWithIndia's reputation as a catalyst for innovation, bringing together the best minds to tackle real-world challenges head-on. With each event, the community grew stronger, setting the stage for even greater accomplishments in the future.
                </li>
            </ul>
        </div>
    )
}

export default History