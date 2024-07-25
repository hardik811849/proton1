import Image from "next/image";
import React from "react";

const HowitWorks = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={bg_about}
          alt="bg_about"
          width={500}
          height={500}
          className="mx-auto w-[40%] mix-blend-hard-light object-cover"
        />
        <div className="w-full h-[80%] absolute top-[5%] bg-gradient-to-t from-[#000000] via-[rgba(0,0,0,0.6)] to-[rgba(16,18,34,0)]"></div>
        <h1 className="text-[130px] font-thin text-center relative -top-[30rem]">
          About Proton
        </h1>
      </div>
    </div>
  );
};

export default HowitWorks;
