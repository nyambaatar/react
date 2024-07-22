import Link from "next/link";
import { TbBrightnessUpFilled } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";




const navigations = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Work",
    link: "https://lann.mn",
  },
  {
    name: "Testimonials",
    link: "/testimonials",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export function Header() {
  return (
    <div>
      <div className="flex justify-between">
      <div className="float-start">Logo</div>
    <div className="WebMenu  hidden md:flex float-end gap-4">
      {navigations.map((nav) => (
        <Link key= {nav.link} href={nav.link} className="">{nav.name}
        </Link>
      ))}
      <button><TbBrightnessUpFilled/></button>
      <span className="opacity-20">|</span>
      <button className="bg-white rounded-xl text-black pl-3 pr-3">Download CV</button>
      </div>
      <button className="MobMenu block md:hidden"><CiMenuBurger />
      </button>
  </div>
  </div>
  );
}

