"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Slant as Hamburger } from 'hamburger-react'

function Header() {

    const [Menu, setMenu] = useState();

    const Toggle = () => {
        setMenu(!Menu);
    }

    return (
        <>
            <div className="flex items-center justify-between w-full p-3 py-5 lg:px-20">
                <div className="flex items-center justify-center gap-3 text-white">
                    <button onClick={Toggle} className={`${Menu ? "fixed top-5 left-5" : "flex"} md:hidden z-[2000]`}>
                        <Hamburger color={Menu ? "#000" : "#fff"} duration={0.8} size={24} rounded toggled={Menu} toggle={setMenu} />
                    </button>
                    <button onClick={Toggle} className={`${Menu ? "flex" : "hidden"} scale-0`}>
                        <Hamburger color={Menu ? "#000" : "#fff"} duration={0.8} size={24} rounded toggled={Menu} toggle={setMenu} />
                    </button>
                    <Link href={"/"} className="flex flex-col leading-none cursor-pointer">
                        <span className="text-3xl font-bold sm:text-4xl">HACK</span>
                        <span className="font-semibold tracking-tight sm:tracking-normal sm:text-lg">WITH INDIA</span>
                    </Link>
                </div>
                <div className="items-center hidden gap-10 md:flex">
                    <Link href={"/Guidelines"} className="font-medium text-white duration-200 hover:text-amber-500">Guidelines</Link>
                    <Link href={"/About"} className="font-medium text-white duration-200 hover:text-amber-500">About</Link>
                    <Link href={"/Gallery"} className="font-medium text-white duration-200 hover:text-amber-500">Gallery</Link>
                    <Link href={"/Contact"} className="font-medium text-white duration-200 hover:text-amber-500">Contact</Link>
                    <Link href={"/MacroChallenge"} className="font-medium text-white duration-200 hover:text-amber-500">Macro Challenge</Link>
                    <Link href={"/"} className="px-8 py-4 font-semibold bg-amber-500 rounded-tr-2xl rounded-bl-2xl">Coming Soon</Link>
                </div>
                <div className="flex md:hidden">
                    <Link href={"/"} className="p-4 text-sm font-semibold sm:py-4 sm:px-8 bg-amber-500 rounded-tr-2xl rounded-bl-2xl">Coming Soon</Link>
                </div>
            </div>

            <div className={`h-screen fixed z-[1600] bg-gradient-to-b from-white via-gray-300 to-sky-300 text-black top-0 transition-all items-center justify-center duration-1000 ease-in-out w-[100%] sm:w-[70%] md:w-[25%] ${Menu ? "left-0" : "-left-[100%]"}`
            }>
                <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-10">
                    <Link href={"/"} onClick={Toggle} className="text-lg font-medium duration-200 hover:text-amber-500">Home</Link>
                    <Link href={"/Guidelines"} onClick={Toggle} className="text-lg font-medium duration-200 hover:text-amber-500">Guidelines</Link>
                    <Link href={"/About"} onClick={Toggle} className="text-lg font-medium duration-200 hover:text-amber-500">About</Link>
                    <Link href={"/Gallery"} onClick={Toggle} className="text-lg font-medium duration-200 hover:text-amber-500">Gallery</Link>
                    <Link href={"/Contact"} onClick={Toggle} className="text-lg font-medium duration-200 hover:text-amber-500">Contact</Link>
                    <Link href={"/MacroChallenge"} onClick={Toggle} className="text-lg font-medium duration-200 hover:text-amber-500">Macro Challenge</Link>
                </div>
            </div>
        </>
    )
}

export default Header