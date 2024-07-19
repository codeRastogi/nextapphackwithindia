"use client"
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import { useToast } from '../ui/use-toast';

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const { toast } = useToast();

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();

        try {
            const res = await axios.post("/api/Contact", {
                name, email, phoneNo, subject, message
            });

            if (res) {
                toast({
                    variant: "success",
                    title: "HackWithIndia",
                    description: "Contact Form Submitted Successfully!",
                });
                setIsLoading(false);
                const form = e.target;
                form.reset();
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "SS SOFTWARE",
                description: "An Error Occurred While Submitting Contact Form?",
            });
        }
    }

    return (
        <div className="flex items-center justify-center w-full min-h-screen p-3 py-20 bg-gradient-to-tr from-gradient-start via-black to-gradient-end">
            <div className="grid items-center justify-center grid-cols-1 gap-10 xl:grid-cols-2">
                <div className="flex flex-col justify-center w-full h-full gap-14">
                    <div className="flex flex-col items-center justify-center gap-1 text-center text-white">
                        <h1 className="text-4xl font-bold md:text-5xl">Get In Touch With Us</h1>
                        <p className="text-sm md:text-base">We're here to help! Feel free to reach out to us for any inquiries or assistance.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full gap-2">
                        <div className="flex flex-col gap-2 md:flex-row">
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' required className="w-full p-4 text-white transition-colors duration-300 bg-transparent border border-gray-700 hover:border-white focus:border-white focus:outline-none rounded-tr-xl rounded-bl-xl" />
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' required className="w-full p-4 text-white transition-colors duration-300 bg-transparent border border-gray-700 hover:border-white focus:border-white focus:outline-none rounded-tr-xl rounded-bl-xl" />
                        </div>
                        <div className="flex flex-col gap-2 md:flex-row">
                            <input onChange={(e) => setPhoneNo(e.target.value)} type="text" placeholder='Phone Number' required className="w-full p-4 text-white transition-colors duration-300 bg-transparent border border-gray-700 hover:border-white focus:border-white focus:outline-none rounded-tr-xl rounded-bl-xl" />
                            <input onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Subject' required className="w-full p-4 text-white transition-colors duration-300 bg-transparent border border-gray-700 hover:border-white focus:border-white focus:outline-none rounded-tr-xl rounded-bl-xl" />
                        </div>
                        <textarea onChange={(e) => setMessage(e.target.value)} placeholder="Message" required className="h-40 px-4 py-3 text-white transition-colors duration-300 bg-transparent border border-gray-700 hover:border-white focus:border-white focus:outline-none rounded-tr-xl rounded-bl-xl"></textarea>
                        <button type="submit" className="flex items-center justify-center px-6 py-4 mt-10 font-semibold bg-gradient-to-tr from-amber-500 to-white rounded-tr-xl rounded-bl-xl">
                            {isLoading ? <Loader2 className="animate-spin" /> : "Submit"}
                        </button>
                    </form>
                </div>
                <div>
                    <Image src={"/contact.png"} width={800} height={200} loading="lazy" quality={100} alt="Contact Us" className="rounded-3xl bg-blend-multiply" />
                </div>
            </div>
        </div>
    )
}

export default Form