import Image from 'next/image'
import React from 'react'

function Gallery2() {
    return (
        <div className="grid w-full h-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            <Image src={"/4.jpg"} width={800} height={800} loading="lazy" className="rounded-tr-3xl rounded-bl-3xl aspect-video" alt='About' quality={100} />
            <Image src={"/5.jpg"} width={800} height={800} loading="lazy" className="rounded-tr-3xl rounded-bl-3xl aspect-video" alt='About' quality={100} />
            <Image src={"/6.jpg"} width={800} height={800} loading="lazy" className="rounded-tr-3xl rounded-bl-3xl aspect-video" alt='About' quality={100} />
        </div>
    )
}

export default Gallery2