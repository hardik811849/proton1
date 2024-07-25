import Image from "next/image";
import Hero from "./Components/Hero";
import AboutSection from "./Components/AboutSection";
import KeyFeatures from "./Components/KeyFeatures";
import Benifit from "./Components/Benifit";
import Roadmap from "./Components/Roadmap";
import Partner from "./Components/Partner";
import Testimonials from "./Components/Testimonials";
import Calculate from "./Components/Calculate";
import OurProperties from "./Components/OurProperties";
import Events from "./Components/Events";
import PressUs from "./Components/PressUs";
import Faqs from "./Components/Faqs";
import Graph from "./Components/Graph";
import HowitWorks from "./Components/HowitWorks";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Calculate /> */}
      <AboutSection />
      {/* <Graph /> */}
      <KeyFeatures />
      <OurProperties />
      <Benifit />
      {/* <HowitWorks /> */}
      {/* <Roadmap /> */}
      <Partner />
      <Events />
      <PressUs />
      <Faqs />
      {/* <Testimonials /> */}
    </>
  );
}
