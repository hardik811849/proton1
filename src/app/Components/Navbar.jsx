import Image from "next/image";
import React from "react";
import logo from "@/app/assets/navbar/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  return (
    <>
      <header className="relative z-0">
        <nav className="flex justify-between p-6 w-[90%] mx-auto">
          <div>
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="base:w-[50%] md:w-[100%]"
            />
          </div>
          <ul className="hidden lg:flex  gap-7 items-center border-2 border-gray-700 p-2 px-4 rounded-full">
            <li className=" font-thin">
              <Link href="/">Home</Link>
            </li>
            <li className=" font-thin">
              <Link href="/">Features</Link>
            </li>
            <li className=" font-thin">
              <Link href="/">Roadmap</Link>
            </li>
            <li className=" font-thin">
              <Link href="/">Blogs</Link>
            </li>
            <li>
              <button className="bg-[#B6BAFE] text-[#101222] rounded-full p-2 text-[15px]">
                <Link href="/contact-us">Contact us</Link>
              </button>
            </li>
          </ul>
          {/* <Menubar className="relative z-20 lg:hidden border-none ">
            <MenubarMenu>
              <MenubarTrigger>
                <Menu />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="">Home</MenubarItem>
                <MenubarItem className="">Features</MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="">Roadmap</MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="">Blogs </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar> */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
