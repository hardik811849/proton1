import React from "react";

const Benifit = () => {
  return (
    <div>
      <div className=" text-white w-[90%] mx-auto mt-10">
        <h2 className="text-[50px] font-thin text-center mb-[17px]">Benifit</h2>
        <p className="w-[40%] mx-auto leading-8 opacity-75 font-thin text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 w-[80%] mx-auto mt-10">
        <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222]  p-14 ">
          <h2 className="text-[30px] font-thin">Scalability</h2>
          <p className="font-thin text-[15px]">
            Protect your assets with advanced encryption and robust security
            measures
          </p>
        </div>
        <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-white bg-opacity-10  p-14 ">
          <h2 className="text-[30px] font-thin">Speed</h2>
          <p className="font-thin text-[15px]">
            Complete transactions in mere seconds, ensuring quick and efficient
            transfers.
          </p>
        </div>
        <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-white bg-opacity-10  p-14 ">
          <h2 className="text-[30px] font-thin">Cost-Efficiency</h2>
          <p className="font-thin text-[15px]">
            Save money with low transaction fees, making every transfer
            economical.
          </p>
        </div>
        <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222]  p-14 ">
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
