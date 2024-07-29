import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-[130px] font-thin text-center">Contact us</h1>
      <p className="text-[15px] font-thin w-[60%] mx-auto text-center leading-8">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English. Many desktop publishing packages and web page
      </p>

      <div className="grid grid-cols-2 w-[90%] mx-auto mt-20 items-center">
        <Image
          src={"/Mail3d@4x-8 1.png"}
          alt="mail"
          width={500}
          height={500}
          className="bg-white w-[80%] rounded-3xl p-10 bg-opacity-5"
        />
        <div className="flex flex-col gap-20">
          <div className="flex items-center gap-10">
            <Image
              src={"/Group 1321316079.svg"}
              alt="mail"
              width={500}
              height={500}
              className="w-[10%]"
            />
            <p>+1 - 95956 35625</p>
          </div>
          <div className="flex items-center gap-10">
            <Image
              src={"/Group 1321316080.svg"}
              alt="mail"
              width={500}
              height={500}
              className="w-[10%]"
            />
            <p>contact@realproton.com, </p>
          </div>
          <div className="flex items-center gap-10">
            <Image
              src={"/Group 1321316081.svg"}
              alt="mail"
              width={500}
              height={500}
              className="w-[10%]"
            />
            <p>
              2150 Town Square Pl, <br /> Ste. 200 Sugar Land, Texas 77479
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 ">
        <h1 className="text-[70px] font-thin text-center">Send us a Message</h1>

        <div className="grid grid-cols-2 gap-5 justify-center  items-center w-[60%] mx-auto mt-20">
          <input
            type="text"
            placeholder="Full Name"
            className="col-span-2 bg-transparent border-2 border-[#ff5800] rounded-full border-opacity-25 p-5 mb-5"
          />
          <input
            type="email"
            placeholder="Email"
            className="col-span-1 bg-transparent border-2 border-[#ff5800] rounded-full border-opacity-25 p-5 mb-5"
          />
          <input
            type="number"
            placeholder="Number"
            className="col-span-1 bg-transparent border-2 border-[#ff5800] rounded-full border-opacity-25 p-5 mb-5"
          />
          <textarea
            type="text"
            placeholder="Enter Your Message"
            rows={5}
            className="col-span-2 bg-transparent border-2 border-[#ff5800] rounded-3xl border-opacity-25 p-5 mb-5"
          />
        </div>
        <div className="flex justify-center mb-20">
          <button className="w-[200px] mx-auto mt-10 p-5 text-[15px] font-semibold text-white bg-[#ff5800] hover:bg-[#434343] rounded-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
