import Image from 'next/image'
import React from 'react'

function Event() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen p-3 py-20 lg:p-40 via-black bg-gradient-to-tr from-gradient-middle to-gradient-start">
            <Image src={"/Event2.png"} width={828} height={828} quality={100} loading="lazy" alt="Event" className="w-auto h-auto" />
        </div>
    )
}

export default Event