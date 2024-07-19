"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

function Intro() {

    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const targetDate = new Date('2024-05-25T23:59:59');
        const timer = setInterval(() => {
            const difference = targetDate - new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: padLeft(Math.floor(difference / (1000 * 60 * 60 * 24))),
                    hours: padLeft(Math.floor((difference / (1000 * 60 * 60)) % 24)),
                    minutes: padLeft(Math.floor((difference / 1000 / 60) % 60)),
                    seconds: padLeft(Math.floor((difference / 1000) % 60)),
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function padLeft(value) {
        return value.toString().padStart(2, '0');
    }

    return (
        <div className="flex flex-col items-center w-full min-h-full gap-20 p-3 py-20 md:p-40 justify-evenly xl:flex-row">
            <div className="flex flex-col items-center justify-center gap-10 xl:items-start">
                <div className="flex flex-col text-center text-white xl:text-start">
                    <p className="text-sm font-medium tracking-widest sm:text-lg">HACKWITHINDIA</p>
                    <p className="text-sm font-medium tracking-widest sm:text-lg">PRESENTS</p>
                    <h1 className="pt-5 text-5xl font-bold tracking-widest sm:text-6xl md:text-7xl 2xl:text-8xl">HACK</h1>
                    <h1 className="pb-5 text-5xl font-bold tracking-widest sm:text-6xl md:text-7xl 2xl:text-8xl">WITH DELHI</h1>
                    <p className="text-sm font-medium tracking-wide sm:text-lg">Delhi's Biggest Hackthon,</p>
                    <p className="text-sm font-medium tracking-wide sm:text-lg">"Cultivating Innovation, Harvesting Tomorrow"</p>
                </div>
                <Link href={"https://hackwithindia.devfolio.co"} target="_blank" className="hidden px-10 py-4 font-semibold text-black lg:block bg-amber-500 rounded-tr-2xl rounded-bl-2xl">Coming Soon</Link>
            </div>
            <div className="relative">
                <Image width={600} height={332} quality={100} loading="lazy" src="/AppleVisionPro.png" alt="AppleVisionPro" />
                <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] flex font-bold text-3xl sm:text-5xl 2xl:text-7xl">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1>{timeLeft.days}</h1>
                        <h1 className="text-xs sm:text-sm lg:text-base">DAYS</h1>
                    </div>
                    <span className="whitespace-pre"> : </span>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1>{timeLeft.hours}</h1>
                        <h1 className="text-xs sm:text-sm lg:text-base">HOURS</h1>
                    </div>
                    <span className="whitespace-pre"> : </span>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1>{timeLeft.minutes}</h1>
                        <h1 className="text-xs sm:text-sm lg:text-base">MINUTES</h1>
                    </div>
                    <span className="whitespace-pre"> : </span>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1>{timeLeft.seconds}</h1>
                        <h1 className="text-xs sm:text-sm lg:text-base">SECONDS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro