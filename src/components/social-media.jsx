import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const SocialMediaIcons = [
  {
    iconName: <Youtube />,
    iconHref: "https://www.youtube.com/@HackwithIndia"
  },
  {
    iconName: <Instagram />,
    iconHref: "https://instagram.com/hackwithindia"
  },
  {
    iconName: <Image src={"/x.svg"} width={24} height={24} alt="Twitter" quality={100} loading="lazy" />,
    iconHref: "https://twitter.com/Hackwithindia1"
  },
  {
    iconName: <Linkedin />,
    iconHref: "https://www.linkedin.com/company/hackwithindia"
  },
  {
    iconName: <Github />,
    iconHref: "https://github.com/Hackwithindia"
  }
]

function SocialMedia() {
  return (
    <div className="flex items-center gap-2">
      {SocialMediaIcons.map((data, index) => (
        <Link key={index} href={data.iconHref} target="_blank" className="p-3 text-black transition-all duration-200 rounded-full bg-gradient-end hover:scale-110">
          {data.iconName}
        </Link>
      ))}
    </div>


  )
}

export default SocialMedia