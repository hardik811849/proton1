"use client";
import { Typewriter } from "react-simple-typewriter";

const textSequence = [
  "Institutional Grade",
  "Interoperable",
  "Multi ATS",
  "8% yield",
  "Multi-Chain Support",
  "Curated Portfolio",
];

const TytpeAnimationLine = () => {
  return (
    <div className="flex justify-center base:text-[30px] md:text-[60px] xl:text-[90px] font-thin base:mt-20 md:mt-0 xl:-mt-20 mb-24">
      <Typewriter
        words={textSequence}
        loop={0} // Set to 0 to repeat indefinitely
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TytpeAnimationLine;
