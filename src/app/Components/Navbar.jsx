"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/app/assets/navbar/logo1.svg";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MdOutlineContentCopy } from "react-icons/md";
import { Tooltip } from "@chakra-ui/react";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { getAccountDetails } from "../blockchain/commonFunction";

const Navbar = () => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const [copyStatus, setCopyStatus] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      window.ethereum.on("accountsChanged", async () => {
        window.location.reload();
        await getAccountDetails();
      });
      window.ethereum.on("chainChanged", () => window.location.reload());
    }
  }, [address]);

  const metaMask = () => {
    if (!address) {
      open();
    }
    console.log("Hii");
  };

  const handleMenuItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // const copyAddress = () => {
  //   if (!navigator.clipboard) {
  //     return;
  //   }
  //   setCopyStatus(true);
  //   navigator.clipboard.writeText(address);
  // };

  const copyAddress = () => {
    if (!navigator.clipboard) {
      return;
    }
    setCopyStatus(true);
    navigator.clipboard.writeText(address);
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
          <ul className="xl:w-[75%] 2xl:w-[60%]  hidden lg:flex  gap-9 items-center justify-center border-2 border-gray-700 p-2 px-4 rounded-full">
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

            <li className=" font-thin">
              <Link href="/">Roadmap</Link>
            </li>
            <li>
              <button className="bg-[#ff5800] w-32 text-[#fff] rounded-full p-2 text-[15px]">
                Join Us
              </button>
            </li>
            <>
              {address && (
                <li className=" font-thin flex align-middle cursor-pointer ">
                  <>
                    <h2 className="opacity-50 text-[25px] font-normal">
                      {address && address.substring(0, 4)}
                      ....
                      {address && address.substring(address.length - 4)}
                    </h2>
                    <Tooltip
                      fontSize="lg"
                      label={copyStatus ? "copied" : "copy"}
                    >
                      <div
                        onClick={copyAddress}
                        onMouseMove={() => setCopyStatus(false)}
                        className="p-2"
                      >
                        <MdOutlineContentCopy
                          size={20}
                          className="flex text-[14px] align-middle"
                        />
                      </div>
                    </Tooltip>
                  </>
                </li>
              )}
            </>
            <li>
              <button
                onClick={metaMask}
                className="bg-[#ff5800] w-50 text-[#fff] rounded-full p-2 text-[15px]"
              >
                <p>{address ? "connected" : "Connect"}</p>
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
