import Features from "@/Components/Features";
import Hero from "@/Components/HeroSection";
import HowItWorks from "@/Components/HowItWorks";
import Homeitems from "@/Components/Homeitems";
import Testimonial from "@/Components/Testimonial";
import PartnersSection from "@/Components/PartnersSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <Homeitems></Homeitems>
      <HowItWorks></HowItWorks>
      <Testimonial></Testimonial>
      <PartnersSection></PartnersSection>
    </div>
  );
}
