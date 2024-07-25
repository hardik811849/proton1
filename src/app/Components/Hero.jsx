import Image from "next/image";
import React from "react";
import eclips from "@/app/assets/Ellipse 1.svg";
import eclips1 from "@/app/assets/Ellipse 1.svg";
import dot from "@/app/assets/dot.svg";
import dot1 from "@/app/assets/dot1.svg";
import proton_bubble from "@/app/assets/Proton bubble1.svg";
import token1 from "@/app/assets/token-1.svg";
import token2 from "@/app/assets/token-2.svg";
import token3 from "@/app/assets/token-3.svg";
import token4 from "@/app/assets/token-4.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* <Image
        src={eclips}
        alt="eclips"
        width={500}
        height={500}
        className="absolute sm:top-16 md:top-0 left-10 w-[50%]  -z-10"
      /> */}

      <Image
        src={dot}
        alt="dot"
        width={500}
        height={500}
        className="absolute -top-16 sm:left-0 md:left-32 -rotate-6 w-[80%] mix-blend-color-dodge  -z-10"
      />
      <Image
        src={dot1}
        alt="dot"
        width={500}
        height={500}
        className="absolute top-96 left-10 -rotate-6 w-[80%] opacity-25 mix-blend-color-dodge -z-50"
      />
      <div className=""></div>

      <div className="relative  flex justify-center gap-16 items-center p-10 pt-20">
        {/* <Image
          src={token4}
          alt="dot"
          width={500}
          height={500}
          className="w-[2%] hidden lg:block  z-10"
        />
        <Image
          src={token3}
          alt="dot"
          width={500}
          height={500}
          className="w-[4%] hidden xl:block z-10"
        />
        <Image
          src={token2}
          alt="dot"
          width={500}
          height={500}
          className="w-[7%] hidden xl:block z-10"
        />
        <Image
          src={eclips1}
          alt="dot"
          width={500}
          height={500}
          className="w-[10%] hidden lg:block z-10"
        /> */}
        <div className="relative md flex items-center justify-center ">
          <div className="absolute -z-10 lg:-top-10  xl:-top-10  2xl:-top-2 base:w-[50%] h-[100%]  md:w-96 h-96  gradient-opacity animate-scaleUpDown"></div>
          <Image
            draggable={false}
            src={proton_bubble}
            alt="dot"
            width={500}
            height={500}
            className=" mix-blend-color-dodge base:w-[50%] md:w-1/2 lg:w-1/2 xl:w-full  xl:h-full animate-scaleUpDown"
          />
        </div>
        {/* <Image
          src={eclips1}
          alt="dot"
          width={500}
          height={500}
          className="w-[10%] hidden lg:block z-10"
        />
        <Image
          src={token1}
          alt="dot"
          width={500}
          height={500}
          className="w-[7%] hidden xl:block z-10"
        />
        <Image
          src={token2}
          alt="dot"
          width={500}
          height={500}
          className="w-[4%] hidden xl:block z-10"
        />
        <Image
          src={token4}
          alt="dot"
          width={500}
          height={500}
          className="w-[2%] hidden lg:block z-10"
        /> */}
      </div>

      <div className="relative -z-20 md:-top-14 lg:-top-24 xl:-top-40 2xl:-top-52 ">
        <div className="border rounded-lg flex flex-col items-center base:py-[10px] px-[10px] md:py-[10px] px-[10px] lg:py-[20px] lg:px-[30px] xl:py-[30px] xl:px-[70px]  2xl:py-[88px] 2xl:px-[160px] w-fit mx-auto">
          <p className="base:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[90px] text-center font-thin ">
            {/* Reinventing Real Estate Investment */}
            Proton Perpetual Platform
          </p>
          <p className="base:text-[15px] md:text-[20px] text-center font-thin w-[65%] mt-6">
            The single safest, yield bearing, fractionalised
            institituional-grade, interoperable, real world asset backed
            security token designed uniquely as a Token representing a share in
            a Perpetual Platform that would rapidly grow in assetbase and
            trading activity globally.
          </p>
          {/* <Link href={"https://www.finix196.com/site/invest"}>
            <button className="bg-[#FF5800] text-[#FFFFFF] rounded-full p-2 text-[15px] font-medium w-36 mt-6 mx-auto hover:cursor-pointer">
              Invest Now
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
