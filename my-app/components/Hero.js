import Image from "next/image";
import { RiMapPinLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";




const SocialLinks = [
  {
      link: "https://localhost",
      Icon: FaGithub,
  },
  {
      link: "https://localhost",
      Icon: FaTwitter,
  },
  {
      link: "https://localhost",
      Icon: FaFigma,
  },
];



export function Hero() {
  return (
    <div className="flex gap-10 mt-20">
      <div className="flex">
        <div className="flex flex-col gap-5">
            <div className="flex justify-center md:hidden">
                <Image 
                width={320}
                height={280}
                src="/img/Pic.png"
                alt="Pciture of the author"
                ></Image>
            </div>  
          <div className="text-xl md:text-6xl">Hi, I'am Sagar</div>
          <div className="">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.

          </div>
          <div className="">
            <p className="flex flex-row items-center">
              <RiMapPinLine />  Ahmedabad, India
            </p>
            <p className="flex flex-row items-center">
              <GoDotFill color="green" />  Available for new projects
            </p>
          </div>
          <div className="flex gap-5">
            {SocialLinks.map(({ link, Icon }) => (
              <Link key={link} href={link}>
              <Icon className="text-white w-10 h-10" />

              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className=" hidden md:block">
        <Image
          width={800}
          height={280}
          src="/img/Pic.png"
          alt="Pciture of the author"
        />
      </div>
    </div>
  );
}