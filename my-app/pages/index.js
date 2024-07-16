import { AboutMe } from "@/components/Aboutme";
import { Header } from "@/components/header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";


export default function Home() {
  return (
    <main className="max-w-[1024px] mx-auto mt-4">
      <Header/>
      <AboutMe/>
      <Hero/>
      <Skills/>
    </main>
  );
}
