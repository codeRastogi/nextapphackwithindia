import Link from 'next/link';
import React from 'react';

function ChallengeCard() {
  return (
    <div className='w-full h-full flex justify-center items-center mb-14 pb-5'>
        <div className="flex flex-col justify-center items-center content-center w-[90vw]  bg-gradient-to-r from-sky-700 to-teal-500 md:w-[40vw] h-auto  rounded-md">
          <div className=" text-white font-bold text-3xl py-5 text-center">Logitech Macro Challenge</div>
          <p className="text-zinc-800 text-center text-wrap text-lg mt-10 mb-10">Enter Logitech's Smart Action Hack challenge: automate tasks with a keystroke using MX Master series and Logi Options+ to win MX Master 3s and MX Keys S!</p>
          <div className="flex mt-4 mb-5 bg-gradient-to-r from-cyan-900 to-neutral-900 rounded-md w-[60vw] md:w-[20vw] items-center justify-center">
          <Link href={"https://forms.gle/tfheT2qDcN5kt7i59"} target="_blank" className="text-zinc-400 font-bold">Submit Your macro Idea ↗️</Link>
          </div>
        </div>
      </div>
  );
}

export default ChallengeCard;
