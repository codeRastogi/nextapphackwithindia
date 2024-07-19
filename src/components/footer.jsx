import React from 'react'
import SocialMedia from './social-media'

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-full gap-10 p-5 py-20 text-center bg-white">
            <h1 className="font-semibold">STAY UP TO DATE WITH OUR NEWS AND NOTIFICATIONS</h1>
            <SocialMedia />
            <div className="flex flex-col">
                <p className="text-sm font-medium md:text-base">Copyright © HACKWITHINDIA | All Rights Reserved</p>
                {/* <p className="text-sm font-medium md:text-base">Built By Harshit Ostwal</p> */}
            </div>
        </footer>
    )
}

export default Footer