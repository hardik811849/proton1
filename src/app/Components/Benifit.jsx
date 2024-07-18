import Image from "next/image";
import React from "react";
import benefit_dots from "@/app/assets/benefit_dots.svg";

const Benifit = () => {
  return (
    <div className="relative">
      <Image
        className="absolute base:left-2 lg:-top-48 xl:-top-72 left-20 mix-blend-color-dodge opacity-50 w-[80%]  z-0"
        src={benefit_dots}
        alt="benefit_dots"
        width={500}
        height={500}
      />
      <div className=" text-white w-[90%] mx-auto mt-20">
        <h2 className="text-[50px] font-thin text-center mb-[17px]">
          Benefits
        </h2>
        <p className="lg:w-[70%] xl:w-[40%] mx-auto leading-8 opacity-75 font-thin text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
        </p>
      </div>
      <div className="grid base:grid-cols-1 md:grid-cols-2 gap-6 w-[80%] mx-auto mt-10">
        <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222] base:p-6 md:p-14 ">
          <h2 className="text-[30px] font-thin">Scalability</h2>
          <p className="font-thin text-[15px]">
            Protect your assets with advanced encryption and robust security
            measures
          </p>
        </div>
        <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-white bg-opacity-10 base:p-6 md:p-14 ">
          <h2 className="text-[30px] font-thin">Speed</h2>
          <p className="font-thin text-[15px]">
            Complete transactions in mere seconds, ensuring quick and efficient
            transfers.
          </p>
        </div>
        <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-white bg-opacity-10  base:p-6 md:p-14 ">
          <h2 className="text-[30px] font-thin">Cost-Efficiency</h2>
          <p className="font-thin text-[15px]">
            Save money with low transaction fees, making every transfer
            economical.
          </p>
        </div>
        <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222]  base:p-6 md:p-14 ">
          <h2 className="text-[30px] font-thin">Transparency</h2>
          <p className="font-thin text-[15px]">
            Benefit from a transparent and decentralized network
          </p>
        </div>
      </div>
      <div className="flex items-center mx-auto">
        <button className="bg-[#B6BAFE] text-[#101222] rounded-full p-2 text-[15px] font-medium w-36 mx-auto mt-10">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Benifit;
