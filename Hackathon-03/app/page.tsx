

import DontMiss from "@/app/components/DONTMISS";
import Essential from "@/app/components/ESSENTIAL";
import Featured from "@/app/components/FEATURED";
import Footer from "@/app/components/FOOTER";
import GearUp from "@/app/components/GEARUP";
import Nav from "@/app/components/HEADER";
import Hero from "@/app/components/HERO";
import Navigation from "@/app/components/Navbar";
import { CarouselSize } from "@/app/components/BEST"


export default function Home() {
  return (
  <main>
    <Nav/>
    <Hero/>
    <CarouselSize/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
    <Footer/>
  </main>
  )
}
