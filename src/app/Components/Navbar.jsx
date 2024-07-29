"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import logo from "@/app/assets/navbar/Logo5.svg";
import Link from "next/link";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  const metaMask = () => {
    if (address === undefined) {
      open();
    }
  };

  const handleMenuItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="relative z-0">
        <nav className="flex justify-between p-6 w-[90%] mx-auto">
          <Link href="/" className="base:w-[45%] md:w-[20%] xl:w-[15%] ">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="w-[100%]"
            />
          </Link>
          <ul className="xl:w-[50%] 2xl:w-[40%]  hidden lg:flex  gap-9 items-center justify-center border-2 border-gray-700 p-2 px-4 rounded-full">
            {/* <li
              className=" font-thin"
              onClick={() => handleMenuItemClick("keyFeature")}
            >
              <Link href="/about-us">About</Link>
            </li> */}
            <li className=" font-medium">
              <Link href="/about-us">Proton Token</Link>
            </li>
            <li
              className=" font-medium hover:cursor-pointer"
              onClick={() => handleMenuItemClick("why_proton")}
            >
              Why Proton
            </li>
            <li
              className=" font-medium hover:cursor-pointer"
              onClick={() => handleMenuItemClick("how_it_works")}
            >
              How it Works
            </li>

            <li>
              <button className="bg-[#ff5800] w-32 text-[#fff] rounded-full p-2 text-[15px]">
                Join Us
              </button>
            </li>
            <li>
              <button
                onClick={() => metaMask()}
                className="bg-[#ff5800] w-32 text-[#fff] rounded-full p-2 text-[15px]"
              >
                <p>Connect</p>
              </button>
            </li>
          </ul>
          <Menu>
            <MenuButton display={{ base: "block", lg: "none" }}>
              <HamburgerIcon boxSize={6} />
            </MenuButton>
            <MenuList bg={"transparent"}>
              <MenuItem bg={"transparent"} color={"#fff"} fontWeight={"thin"}>
                Home
              </MenuItem>
              <MenuItem bg={"transparent"} color={"#fff"} fontWeight={"thin"}>
                <Button variant={"unstyled"} fontWeight={"thin"}>
                  Connect
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
