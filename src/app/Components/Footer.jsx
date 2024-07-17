import React from "react";
import logo from "@/app/assets/navbar/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="bg-[#17192C] relative">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center base:p-3 md:p-[86px]">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="base:w-[100%] md:w-[20%]"
        />
        <ul className="flex base:flex-col text-center md:flex-row gap-12 mt-12">
          <li className="opacity-50">
            <Link href="/">Home</Link>
          </li>
          <li className="opacity-50">
            <Link href="/">Features</Link>
          </li>
          <li className="opacity-50">
            <Link href="/">Roadmap</Link>
          </li>
          <li className="opacity-50">
            <Link href="/">Blogs</Link>
          </li>
        </ul>
        <div className="relative base:w-full md:w-[40rem] mt-5 ">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white bg-opacity-20 border-2  border-white border-opacity-20 placeholder-white p-6 rounded-full "
          />
          <button className="absolute right-2 top-2 bg-white rounded-full text-[#17192C] p-5 mr-1">
            Subscribe
          </button>
        </div>
        <hr className="mt-12 text-zinc-600 opacity-10 w-full" />

        <div className="w-full mx-auto mt-12 flex base:flex-col md:flex-col gap-4 lg:flex-col gap-4 xl:flex-row 2xl:flex-row items-center justify-between">
          <p className="opacity-50">
            Copyright © 2024 Proton. | All Rights Reserved.
          </p>
          <ul className="flex base:flex-col md:flex-col lg:flex-row text-center base:flex-col  md:flex-row gap-12 ">
            <li className="opacity-50">
              <Link href="/">Terms of Use</Link>
            </li>
            <li className="opacity-50">
              <Link href="/">Privacy Policy </Link>
            </li>
            <li className="opacity-50">
              <Link href="/">Legal Disclaimer </Link>
            </li>
            <li className="opacity-50">
              <Link href="/">Cookies Policy </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
