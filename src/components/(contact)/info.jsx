import { HeartPulse, Mail, Phone } from 'lucide-react'
import React from 'react'

const InfoData = [
  {
    infoIcon: <Mail size={40} />,
    infoTitle: "Email Address",
    infoDesc: [
      {
        subDesc: "hackwithindia1@gmail.com",
      },
    ]
  },
  {
    infoIcon: <HeartPulse size={40} />,
    infoTitle: "Coordinator",
    infoDesc: [
      {
        subDesc: "Bhavesh Aggarwal",
      },
      {
        subDesc: "Aviral bhardwaj",
      },
      {
        subDesc: "Guneet Sodhi",
      }
    ]
  },
  {
    infoIcon: <Phone size={40} />,
    infoTitle: "Mobile Number",
    infoDesc: [
      {
        subDesc: "+91 77018 77610",
      },
      {
        subDesc: "+91 98911 81801",
      },
      {
        subDesc: "+91 89208 94182",
      }
    ]
  },
]

function Info() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-20 py-20 justify-evenly">
      <h1 className="text-4xl font-bold text-white md:text-6xl">Contact Us</h1>
      <div className="grid w-full grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3 justify-evenly">
        {InfoData.map((data, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <div className="flex items-center justify-center p-4 rounded-full bg-gradient-to-tr to-white from-amber-400">{data.infoIcon}</div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-xl font-semibold text-white md:text-3xl">{data.infoTitle}</h1>
              {data.infoDesc.map((subData, subIndex) => (
                <p key={subIndex} className="text-gray-400 md:text-xl">{subData.subDesc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Info