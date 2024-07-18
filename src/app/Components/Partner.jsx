import React from "react";
import partner from "@/app/assets/partner.png";
import Image from "next/image";

const Partner = () => {
  return (
    <div>
      <h2 className="text-[50px] font-thin text-center  mt-16">
        Partners & Collaboration
      </h2>
      {/* <Image src={partner} /> */}

      <div className="flex items-center mx-auto">
        <button className="bg-[#B6BAFE] text-[#101222] rounded-full p-2 text-[15px] font-medium w-36 mx-auto mt-10">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Partner;
