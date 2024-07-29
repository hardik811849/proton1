"use client";
// import TypingAnimation from "@/components/magicui/typing-animation";
import { TypeAnimation } from "react-type-animation";

// const lines = [
//   "Institutional grade",
//   "Interoperable",
//   "Multi ATS",
//   "8% yield",
//   "Multi-Chain Support",
//   "Curated Portfolio",
// ];

const TytpeAnimationLine = () => {
  return (
    <div className="flex justify-center base:text-[30px]  md:text-[60px] xl:text-[90px] font-thin base:mt-20 md:mt-0  xl:-mt-20 mb-24">
      <TypeAnimation
        sequence={[
          "Institutional Grade",
          1000,
          "Interoperable",
          1000,
          "Multi ATS",
          1000,
          "8% yield",
          1000,
          "Multi-Chain Support",
          1000,
          "Curated Portfolio",
          1000,
        ]}
        wrapper="span"
        speed={30}
        repeat={Infinity}
        cursor={false}
      />
      {/* <TypingAnimation className="text-4xl font-bold text-white" text={lines} /> */}
    </div>
  );
};

export default TytpeAnimationLine;
