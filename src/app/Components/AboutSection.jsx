import Image from "next/image";
import React from "react";
import bg_design from "@/app/assets/about_vecotr.svg";
import about from "@/app/assets/Rectangle 38.svg";

const AboutSection = () => {
  return (
    <>
      <div className="relative md:top-16 lg:-top-24 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bg_design}
            alt="Background Design"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-11">
          <div className="absolute top-24 -left-[65rem] inset-0 -z-10 about-opacity"></div>
          <div className="flex base:flex-col md:flex-row lg:w-full xl:w-[90%] 2xl:w-[70%] mx-auto md:gap-12 lg:gap-24">
            <Image
              src={about}
              alt="about"
              width={500}
              height={500}
              className="p-4  border-2 border-[#2b2f4e] rounded-[40px]"
            />
            <div>
              <h2 className="font-thin text-[60px]">About Proton</h2>
              <p className="font-thin text-[15px] base:leading-8 lg:leading-9 pb-10 lg:w-[90%] xl:w-[70%]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <button className="bg-[#B6BAFE] text-[#101222] rounded-full p-2 text-[15px] font-medium w-36 ">
                About Us
              </button>
            </div>
          </div>
        </div>
        <hr className="w-[90%] opacity-10 h-[20px] mx-auto mt-32" />
      </div>
    </>
  );
};

export default AboutSection;
