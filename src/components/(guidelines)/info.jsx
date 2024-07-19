import React from 'react'

const InfoData = [
    {
        title: "Rounds",
        desc: [
            {
                subDesc: "The hackathon will consist of two rounds."
            },
            {
                subDesc: "TRound one will be held in online mode, Round two will be held offline at Microsoft Workplace, Gurugram."
            },
            {
                subDesc: "Each round will present unique challenges and opportunities for participants to showcase their skills."
            }
        ]
    },
    {
        title: "Profile Review Form",
        desc: [
            {
                subDesc: "A profile review form will be shared with participants."
            },
            {
                subDesc: "This form will provide an opportunity to present information like your LinkedIn and GitHub profiles."
            },
            {
                subDesc: "Applications will be reviewed on the basis of the above mentioned profiles."
            }
        ]
    },
    {
        title: "Accommodation",
        desc: [
            {
                subDesc: "There will be no accommodation provided for participants."
            },
            {
                subDesc: "Make necessary arrangements if you're traveling from afar."
            }
        ]
    },
    {
        title: "Duration",
        desc: [
            {
                subDesc: "The hackathon will span one day offline."
            },
            {
                subDesc: "Participants are expected to be present for the entire duration of the event."
            }
        ]
    },
    {
        title: "Preparation",
        desc: [
            {
                subDesc: "Prepare your projects, ideas, and skills in advance."
            },
            {
                subDesc: "Familiarise yourself with the technologies, tools, and frameworks commonly used in hackathons."
            }
        ]
    },
    {
        title: "Collaboration",
        desc: [
            {
                subDesc: "Collaboration is encouraged during the hackathon."
            },
            {
                subDesc: "Form teams or join existing ones to leverage diverse skills and perspectives."
            }
        ]
    },
    {
        title: "Code of Conduct",
        desc: [
            {
                subDesc: "Respect the organisers, mentors, judges, and fellow participants."
            },
            {
                subDesc: "Maintain professionalism and integrity throughout the event."
            },
            {
                subDesc: "Any form of harassment, discrimination, or unethical behaviour will not be tolerated."
            }
        ]
    },
    {
        title: "Presentation",
        desc: [
            {
                subDesc: "Prepare a compelling presentation to showcase your project."
            },
            {
                subDesc: "Make sure to follow standard SIH format for the presentation."
            },
            {
                subDesc: "Clearly articulate your ideas, functionalities, and the problem your project solves."
            }
        ]
    },
    {
        title: "Judging Criteria",
        desc: [
            {
                subDesc: "Projects will be evaluated based on creativity, functionality, innovation, scalability, feasibility and presentation."
            },
            {
                subDesc: "Demonstrate the practicality and potential impact of your solution."
            }
        ]
    },
    {
        title: "Networking",
        desc: [
            {
                subDesc: "Take advantage of networking opportunities with fellow participants, mentors, and judges."
            },
            {
                subDesc: "Build connections and learn from others in the tech community."
            }
        ]
    },
]

function Info() {
    return (
        <div className="flex flex-col items-center gap-20 p-5 py-40 text-white">
            <div className="w-full max-w-7xl">
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Our Guidelines</h1>
            </div>
            <div className="w-full space-y-10 max-w-7xl">
                {InfoData.map((data, index) => (
                    <div className="flex flex-col items-start gap-4" key={index}>
                        <h1 className="text-xl font-semibold">{data.title}</h1>
                        <ul className="space-y-5">
                            {data.desc.map((subData, subIndex) => (
                                <li className="list-disc list-inside" key={subIndex}>{subData.subDesc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Info