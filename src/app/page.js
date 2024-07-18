import Image from "next/image";
import Hero from "./Components/Hero";
import AboutSection from "./Components/AboutSection";
import KeyFeatures from "./Components/KeyFeatures";
import Benifit from "./Components/Benifit";
import Roadmap from "./Components/Roadmap";
import Partner from "./Components/Partner";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <KeyFeatures />
      <Benifit />
      <Roadmap />
      <Partner />
      {/* <Testimonials /> */}
    </>
  );
}
