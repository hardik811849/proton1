"use client";
import React, { useEffect, useRef } from "react";
import spear from "@/app/assets/spehear.svg";
import Image from "next/image";
import protonP from "@/app/assets/protopP1.png";
import money from "@/app/assets/money 1.png";
import secure from "@/app/assets/secure 1.png";
import dollar from "@/app/assets/dollar 1.png";
import decentralised from "@/app/assets/decentralised 1.png";
import resize from "@/app/assets/resize 1.png";
import small_talk from "@/app/assets/small-talk 1.png";

const KeyFeatures = () => {
  const spearRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    const spearElement = spearRef.current;
    const gradientElement = gradientRef.current;
    let isClockwise = true;

    const animate = () => {
      isClockwise = !isClockwise;
      spearElement.style.animation = `rotate${
        isClockwise ? "Clockwise" : "Anticlockwise"
      } 5s linear`;
      gradientElement.style.animation = `${
        isClockwise ? "expand" : "shrink"
      } 5s linear`;
    };

    animate();
    const intervalId = setInterval(animate, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="relative" id="keyFeature">
      <div className="grid lg:grid-cols-1 xl:grid-cols-4 items-center  lg:w-[100%] xl:w-[85%] 2xl:w-[90%] mx-auto lg:gap-1 xl:gap-2 2xl:gap-10">
        <div className="lg:col-span-2 base:w-[90%] md:w-[90%] lg:w-[90%] mx-auto p-10">
          <h2 className="font-thin text-[60px]">Proton Token</h2>
          <p className="font-thin text-[15px] base:leading-8 lg:leading-9 pb-10 lg:w-[90%] xl:w-[70%]">
            Proton- A highly secure, transparent, and revenue generating
            security token, unleashing all the erstwhile boundaries of liquidity
            and returns, is launched in the U.S. with one-of-it’s kind features
            and benefits, for both asset owners and investors
          </p>
          <button className="bg-[#FF5800] text-[#101222] rounded-full p-2 text-[15px] font-medium w-36 ">
            About Us
          </button>
        </div>
        <div className="lg:col-span-1 xl:col-span-2 base:w-[90%] md:w-[90%] lg:w-[90%] relative">
          <div className="relative  md:w-[26rem] md:h-[30rem] lg:w-[35rem] lg:h-[35rem] mx-auto ">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="50"
                cy="50"
                rx="45"
                ry="20"
                className="stroke-zinc-700 stroke-[0.2] fill-transparent animate-scale-1"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="45"
                ry="20"
                className="stroke-zinc-700 stroke-[0.2] fill-transparent animate-scale-2"
                transform="rotate(45 50 50)"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="45"
                ry="20"
                className="stroke-zinc-700 stroke-[0.2] fill-transparent animate-scale-3"
                transform="rotate(90 50 50)"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="45"
                ry="20"
                className="stroke-zinc-700 stroke-[0.2] fill-transparent animate-scale-4"
                transform="rotate(135 50 50)"
              />
            </svg>
            <div className="absolute inset-20 flex items-center justify-center ">
              <Image
                draggable="false"
                ref={spearRef}
                className="w-[40%]"
                src={spear}
                alt="spear"
                width={500}
                height={500}
              />
            </div>
            <div className="absolute inset-20  flex items-center justify-center ">
              <Image
                draggable="false"
                className="w-[10%]"
                src={protonP}
                alt="spear"
                width={400}
                height={400}
              />
            </div>
            <div
              ref={gradientRef}
              className="absolute inset-0 base:top-[20%] base:left-20 md:top-[30%] md:left-32 lg:top-36 lg:left-[12rem] xl:top-36 xl:left-[12rem] 2xl:top-44 left-[11rem] flex items-center justify-center base:w-40 md:w-48 h-48 -z-10 key-opacity"
            />

            <div className="hidden md:block ">
              <div className="absolute md:top-14 -left-14 lg:top-14 -left-24 xl:top-14 -left-24 2xl:top-14 -left-24 flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[50%] lg:w-[45%]">
                <Image
                  src={money}
                  alt="spear"
                  width={500}
                  height={500}
                  className="w-[20%] "
                />
                <p className="font-thin text-[15px] w-[100%]">
                  Institutional grade
                </p>
              </div>
              <div className="absolute md:top-14 md:left-[75%] lg:top-14 lg:left-[75%] xl:top-14 xl:left-[75%] 2xl:top-14 left-[75%] flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[50%] lg:w-[45%]">
                <Image
                  src={secure}
                  alt="spear"
                  width={500}
                  height={500}
                  className="w-[20%] "
                />
                <p className="font-thin text-[15px] w-[100%]">Interoperable</p>
              </div>
              <div className="absolute md:top-[45%] md:-left-32 lg:top-[45%] lg:-left-40 xl:top-[45%] xl:-left-48 2xl:top-[45%] -left-48 flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[50%] lg:w-[45%]">
                <Image
                  src={dollar}
                  alt="spear"
                  width={500}
                  height={500}
                  className="w-[20%] "
                />
                <p className="font-thin text-[15px] w-[100%]">Multi ATS</p>
              </div>
              <div className="absolute md:top-[45%] md:left-[22rem] lg:top-[45%] lg:left-[27rem] xl:top-[45%] xl:left-[27rem] 2xl:top-[45%] left-[90%] flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[50%] lg:w-[45%]">
                <Image
                  src={decentralised}
                  alt="spear"
                  width={500}
                  height={500}
                  className="w-[20%] "
                />
                <p className="font-thin text-[15px] w-[100%]">8% yield</p>
              </div>
              <div className="absolute md:top-[75%] md:-left-10 lg:top-[75%] lg:-left-36 top-[75%] -left-36 flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[50%] lg:w-[45%]">
                <Image
                  src={resize}
                  alt="spear"
                  width={500}
                  height={500}
                  className="w-[20%] "
                />
                <p className="font-thin text-[15px] w-[100%]">
                  Multi-Chain Support
                </p>
              </div>
              <div className="absolute md:top-[75%] left-[70%] lg:top-[75%] left-[70%] flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[50%] lg:w-[45%]">
                <Image
                  src={small_talk}
                  alt="spear"
                  width={500}
                  height={500}
                  className="w-[20%] "
                />
                <p className="font-thin text-[15px] w-[100%]">
                  Curated Portfolio
                </p>
              </div>
            </div>
          </div>
          <div className="base:flex flex-col gap-3 w-[80%] mx-auto md:hidden ">
            <div className=" flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[35%] lg:w-[45%]">
              <Image
                src={money}
                alt="spear"
                width={500}
                height={500}
                className="w-[20%] "
              />
              <p className="font-thin text-[15px] w-[100%]">
                Institutional grade
              </p>
            </div>
            <div className=" flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[35%] lg:w-[45%]">
              <Image
                src={secure}
                alt="spear"
                width={500}
                height={500}
                className="w-[20%] "
              />
              <p className="font-thin text-[15px] w-[100%]">Interoperable</p>
            </div>
            <div className=" flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[35%] lg:w-[45%]">
              <Image
                src={dollar}
                alt="spear"
                width={500}
                height={500}
                className="w-[20%] "
              />
              <p className="font-thin text-[15px] w-[100%]">Multi ATS</p>
            </div>
            <div className=" flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[35%] lg:w-[45%]">
              <Image
                src={decentralised}
                alt="spear"
                width={500}
                height={500}
                className="w-[20%] "
              />
              <p className="font-thin text-[15px] w-[100%]">8% yield</p>
            </div>
            <div className=" flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[35%] lg:w-[45%]">
              <Image
                src={resize}
                alt="spear"
                width={500}
                height={500}
                className="w-[20%] "
              />
              <p className="font-thin text-[15px] w-[100%]">
                Multi-Chain Support
              </p>
            </div>
            <div className=" flex items-center gap-4 border-2 border-zinc-700 bg-[#101011] rounded-full p-5 md:w-[35%] lg:w-[45%]">
              <Image
                src={small_talk}
                alt="spear"
                width={500}
                height={500}
                className="w-[20%] "
              />
              <p className="font-thin text-[15px] w-[100%]">
                Curated Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
