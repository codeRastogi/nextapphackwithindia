import Image from 'next/image'
import React from 'react'

function Gallery() {
    return (
        <div className="grid w-full h-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            <Image src={"/1.jpg"} width={800} loading="lazy" height={800} className="rounded-tr-3xl rounded-bl-3xl aspect-video" alt='About' quality={100} />
            <Image src={"/2.jpg"} width={800} loading="lazy" height={800} className="rounded-tr-3xl rounded-bl-3xl aspect-video" alt='About' quality={100} />
            <Image src={"/3.jpg"} width={800} loading="lazy" height={800} className="rounded-tr-3xl rounded-bl-3xl aspect-video" alt='About' quality={100} />
        </div>
    )
}

export default Gallery