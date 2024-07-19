import React from "react";

function Info3() {
  return (
    <div className="flex flex-col justify-center min-h-screen p-5 pb-40 pt-28 lg:pt-0 via-black bg-gradient-to-br from-gradient-start to-gradient-end">
      <div className="flex flex-col items-center justify-center text-white gap-14">
        <div className="flex items-start w-full max-w-7xl">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            About INAUGRAL EDITION
          </h1>
        </div>
        <ul className="space-y-5 max-w-7xl lg:text-lg">
          <li>
            Exciting news! Our first inauguration hackathon by HackWithIndia, a student-run community, is set to take place at Microsoft Office Gurgaon. This event promises to be the biggest hackathon in terms of participation numbers, featuring two rounds of intense competition. With a theme-based approach, the problem statements are yours to tackle. Get ready to showcase your skills and creativity at this groundbreaking event!
          </li>

          <li className="text-xl font-semibold">
            Advantages of participating:
          </li>

          <li className="list-disc list-inside">
            <span className="font-medium">Networking Opportunities</span> - Connect with like-minded individuals, industry experts, and potential collaborators.
          </li>
          <li className="list-disc list-inside">
            <span className="font-medium">Skill Development</span> - Sharpen your technical skills, problem-solving abilities, and teamwork through real-world challenges.
          </li>
          <li className="list-disc list-inside">
            <span className="font-medium">Career Growth</span> - Impress potential employers with your achievements and stand out in the competitive tech landscape.
          </li>
          <li className="list-disc list-inside">
            <span className="font-medium">Prizes and Recognition</span> - Win exciting prizes, gain recognition for your accomplishments, and boost your portfolio.
          </li>

          <li>
            Don't miss out on this incredible opportunity to be part of something big!
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info3;
