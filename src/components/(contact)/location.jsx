import React from 'react'

function Location() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 pb-20 text-center via-black bg-gradient-to-tl from-gradient-middle to-gradient-start">
            <h1 className="text-4xl font-bold text-white md:text-5xl">Locate Us On Google Maps Also!</h1>
            <div className="w-full h-[60vh] lg:w-[80vw] xl:w-[60vw] xl:h-[60vh]">
                <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112152.9012044765!2d77.05875039977113!3d28.546386875794067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d197beb51967b%3A0xa7071dae502ba78d!2sDLF%20Downtown%20Gurugram!5e0!3m2!1sen!2sin!4v1712231564560!5m2!1sen!2sin" className='w-full h-full lg:rounded-3xl'></iframe>
            </div>
        </div>
    )
}

export default Location