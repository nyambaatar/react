
import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";


export default function Home() {
  return (
    <main className="max-w-[1024px] mx-auto p-5">
      <Header/>
      <AboutMe/>
      {/* <Hero /> */}
      {/* <Hero/>
      <Skills/> */}
    </main>
  );
}
