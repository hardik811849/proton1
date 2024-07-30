"use client";
import Image from "next/image";
import React from "react";
import bg_about from "@/app/assets/Frame.svg";
import {
  Box,
  Button,
  Grid,
  GridItem,
  ListItem,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
  UnorderedList,
  useSteps,
  VStack,
} from "@chakra-ui/react";
import phone from "@/app/assets/Phone@2x-8 1.svg";
import Link from "next/link";
import inv1 from "@/app/assets/inv1.svg";
import poly1 from "@/app/assets/Polygon 1.svg";
// import video_bg from "/video_bg.jpg";
import { BsYoutube } from "react-icons/bs";
import { Play, PlayCircle } from "lucide-react";
import { IoIosArrowRoundDown, IoMdPlayCircle } from "react-icons/io";
import logo from "@/app/assets/navbar/Real proton Png@2x-8.png";
import building from "@/app/assets/8508760_city_buildings_building_construction_estate_icon 1.svg";
import justice from "@/app/assets/2315987_court_justice_law_lawyer_icon 1.svg";
import capital from "@/app/assets/4308025_capital_earnings_make_making_money_icon 1.svg";
import keyboard from "@/app/assets/8678780_keyboard_hardware_technology_icon 1.svg";
import one from "@/app/assets/1 (1).svg";
import { FaArrowDownLong } from "react-icons/fa6";
import arrow from "@/app/assets/Arrow 3.svg";
import { css } from "@emotion/react";
import Askquestion from "../Components/Askquestion";

const Howtoinvest = () => {
  const videoBgUrl = "/videobg.jpg";
  return (
    <>
      <div>
        <div className="relative">
          <Image
            src={bg_about}
            alt="bg_about"
            width={500}
            height={500}
            className="mx-auto lg:w-[70%] xl:w-[40%] mix-blend-screen object-cover"
          />
          <div className="w-full h-[73%] absolute top-[17%] bg-gradient-to-t from-[#000000] via-[rgba(0,0,0,0.6)] to-[rgba(16,18,34,0)]"></div>
          <h1 className="base:text-[30px] md:text-[70px] lg:text-[130px] font-thin text-center relative base:-top-[14rem] md:-top-[20rem] lg:-top-[33rem] xl:-top-[25rem] 2xl:-top-[30rem]">
            How to Invest
          </h1>
          <p className="base:text-[15px] md:text-[20px] w-[70%] mx-auto font-thin text-center relative base:-top-[14rem] md:-top-[15rem] lg:-top-[32rem] xl:-top-[20rem]  2xl:-top-[30rem] ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here,
            content here&apos;, making it look like readable English. Many
            desktop publishing packages and web page
          </p>
        </div>
      </div>

      <Box bg={"rgba(255,255,255,0.05)"} display={"flex"} p={10}>
        <Box
          w={"90%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "column",
            xl: "row",
            "2xl": "row",
          }}
          m={"auto"}
          gap={"2rem"}
        >
          <Box
            p={{ base: "10px", md: "5rem 9rem" }}
            rounded={"3xl"}
            bg={"rgba(255,255,255,0.05)"}
            w={"-webkit-fit-content"}
          >
            <Image
              src={phone}
              alt="phone"
              width={500}
              height={500}
              className="md:w-fit xl:w--webkit-fit-available"
            />
          </Box>
          <Box>
            <Text
              className="font-thin"
              fontSize={"20px"}
              lineHeight={"37px"}
              mb={"50px"}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English. Many
              desktop publishing packages and web page.
            </Text>

            <ol className="items-center sm:flex">
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center text-[#ff5800] text-[20px] w-6 h-6 p-6 bg-white rounded-full ring-0 ring-white ring-opacity-5 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    01
                  </div>
                  <div className="hidden sm:flex w-40 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Sign up
                  </h3>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center text-[#ff5800] text-[20px] w-6 h-6 p-6 bg-white rounded-full ring-0 ring-white ring-opacity-5 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    02
                  </div>
                  <div className="hidden sm:flex w-40 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold  dark:text-white">
                    Complete KYC & AML
                  </h3>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center text-[#ff5800] text-[20px] w-6 h-6 p-6 bg-white rounded-full ring-0 ring-white ring-opacity-5 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    03
                  </div>
                  <div className="hidden sm:flex w-40 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold  dark:text-white">
                    Add Funds
                  </h3>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center text-[#ff5800] text-[20px] w-6 h-6 p-6 bg-white rounded-full ring-0 ring-white ring-opacity-5 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    04
                  </div>
                  {/* <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div> */}
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold  dark:text-white">
                    Invest
                  </h3>
                </div>
              </li>
            </ol>

            <Link
              href={"https://www.finix196.com/site/invest"}
              target={"_blank"}
            >
              <Button
                color={"white"}
                bg={"#ff5800"}
                mt={"30px"}
                variant={"outline"}
                _hover={{ bg: "#ff5800" }}
                border={"none"}
                rounded={"full"}
                w={"10rem"}
              >
                Invest
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box p={10}>
        <Text textAlign={"center"} color={"#ff5800"} fontSize={"22px"}>
          How Proton Platform Works
        </Text>
        <Text
          textAlign={"center"}
          fontSize={{
            base: "40px",
            sm: "60px",
            md: "60px",
            lg: "60px",
            xl: "60px",
          }}
          fontWeight={"thin"}
        >
          Our Platforms Key Numbers
        </Text>

        <Grid
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "90%",
          }}
          m={"auto"}
          mt={"6rem"}
          gap={"4rem"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(1,1fr)",
            xl: "repeat(2,1fr)",
          }}
        >
          <GridItem
            order={{ base: 2, xl: 1 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Text fontSize={"30px"} mb={"30px"}>
              Finding and checking a property
            </Text>
            <Text fontSize={"20px"} fontWeight={"thin"} lineHeight={"37px"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English. Many
              desktop publishing packages and web page
            </Text>
          </GridItem>
          <GridItem
            order={{ base: 1, xl: 2 }}
            className="relative flex justify-center items-center"
          >
            <Image
              src={poly1}
              width={500}
              height={500}
              alt="poly"
              className="relative z-0 base:-top-[40px] base:left-[40px] md:-top-[100px] md:left-[90px]"
            />
            <Image
              src={inv1}
              width={500}
              height={500}
              alt="poly"
              className="absolute z-10 top-0"
            />
          </GridItem>
          <GridItem
            order={{ base: 4, xl: 3 }}
            className="relative flex justify-center items-center"
          >
            <Image
              src={poly1}
              width={500}
              height={500}
              alt="poly"
              className="relative z-0 base:-top-[50px] base:-left-[40px] xl:-top-[100px] -left-[80px] -rotate-90"
            />
            <Image
              src={inv1}
              width={500}
              height={500}
              alt="poly"
              className="absolute z-10 xl:top-0"
            />
          </GridItem>
          <GridItem
            order={{ base: 4, xl: 3 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Text fontSize={"30px"} mb={"30px"}>
              Finding and checking a property
            </Text>
            <Text fontSize={"20px"} fontWeight={"thin"} lineHeight={"37px"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English. Many
              desktop publishing packages and web page
            </Text>
          </GridItem>
          <GridItem
            order={{ base: 6, xl: 5 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Text fontSize={"30px"} mb={"30px"}>
              Finding and checking a property
            </Text>
            <Text fontSize={"20px"} fontWeight={"thin"} lineHeight={"37px"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English. Many
              desktop publishing packages and web page
            </Text>
          </GridItem>
          <GridItem order={{ base: 5, xl: 6 }} className="relative">
            <Image
              src={poly1}
              width={500}
              height={500}
              alt="poly"
              className="relative z-0 base:-top-[40px] base:left-[40px] md:-top-[100px] md:left-[90px]"
            />
            <Image
              src={inv1}
              width={500}
              height={500}
              alt="poly"
              className="absolute z-10 top-0"
            />
          </GridItem>
        </Grid>
      </Box>

      <Box
        backgroundImage={`url(${videoBgUrl})`}
        backgroundSize="cover"
        backgroundPosition="center"
        p={{
          base: "20px",
          sm: "20px",
          md: "5rem",
          lg: "10rem",
          xl: "10rem",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <BsYoutube size={"4rem"} />
        <Text
          fontSize={{
            base: "26px",
            sm: "26px",
            md: "50px",
            lg: "50px",
            xl: "90px",
            "2xl": "90px",
          }}
          textAlign={"center"}
        >
          How Our Platform Works
        </Text>
        <Text
          fontSize={"18px"}
          textAlign={"center"}
          fontWeight={"thin"}
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "70%",
          }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here,
        </Text>
        <Link href={"https://www.finix196.com/site/invest"} target={"_blank"}>
          <Button
            color={"white"}
            bg={"#ff5800"}
            mt={"30px"}
            variant={"outline"}
            _hover={{ bg: "#ff5800" }}
            border={"none"}
            rounded={"full"}
            w={"13rem"}
            p={6}
            display={"flex"}
            gap={3}
          >
            <IoMdPlayCircle size={25} />
            Invest
          </Button>
        </Link>
      </Box>

      <Box>
        <h2 className="base:text-[30px] md:text-[50px] font-thin text-center  mt-16">
          Our Platforms Key Numbers
        </h2>

        <Grid
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(4,1fr)",
          }}
          gap={"20px"}
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "90%",
            "2xl": "80%",
          }}
          mx={"auto"}
          mt={10}
        >
          <GridItem
            bg={"rgba(255,255,255,0.02)"}
            p={4}
            colSpan={{
              base: 1,
              sm: 1,
              md: 1,
              lg: 2,
              xl: 2,
              "2xl": 2,
            }}
            rounded={"2xl"}
          >
            <Box
              border={"1px solid rgba(255,255,255,0.2)"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
              p={{
                base: "40px 20px",
                sm: "40px 20px",
                md: "180px 80px",
                lg: "180px 80px",
                xl: "180px 80px",
              }}
              rounded={"2xl"}
            >
              <Text
                fontWeight={"light"}
                fontSize={{
                  base: "45px",
                  sm: "45px",
                  md: "96px",
                  lg: "96px",
                  xl: "96px",
                }}
                color={"#ff5800"}
              >
                $25,60,000
              </Text>
              <Text
                fontSize={{
                  base: "16px",
                  sm: "16px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                }}
                fontWeight={"thin"}
                textAlign={"center"}
              >
                It is a long established fact that a reader will be distracted
                by the readable
              </Text>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{
              base: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
              "2xl": 1,
            }}
            bg={"rgba(255,255,255,0.02)"}
            p={4}
            rounded={"2xl"}
          >
            <Box
              border={"1px solid rgba(255,255,255,0.2)"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
              p={{
                base: "40px 20px",
                sm: "40px 20px",
                md: "180px 80px",
                lg: "180px 80px",
                xl: "180px 80px",
              }}
              rounded={"2xl"}
            >
              <Text
                fontWeight={"light"}
                fontSize={{
                  base: "35px",
                  sm: "35px",
                  md: "65px",
                  lg: "65px",
                  xl: "65px",
                }}
                color={"#ff5800"}
              >
                1,205
              </Text>
              <Text
                fontSize={{
                  base: "16px",
                  sm: "16px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                }}
                fontWeight={"thin"}
                textAlign={"center"}
              >
                It is a long established fact that a reader will
              </Text>
            </Box>
          </GridItem>
          <GridItem
            bg={"rgba(255,255,255,0.02)"}
            p={4}
            rounded={"2xl"}
            colSpan={{
              base: 1,
              sm: 1,
              md: 1,
              lg: 3,
              xl: 1,
              "2xl": 1,
            }}
          >
            <Box
              border={"1px solid rgba(255,255,255,0.2)"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
              p={{
                base: "20px 10px",
                sm: "20px 10px",
                md: "185px 10px",
                lg: "185px 10px",
                xl: "185px 10px",
              }}
              rounded={"2xl"}
            >
              <Text
                fontWeight={"light"}
                fontSize={{
                  base: "35px",
                  sm: "35px",
                  md: "65px",
                  lg: "65px",
                  xl: "65px",
                }}
                color={"#ff5800"}
              >
                $10,00,00
              </Text>
              <Text
                fontSize={{
                  base: "16px",
                  sm: "16px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                }}
                fontWeight={"thin"}
                textAlign={"center"}
              >
                It is a long established fact that a reader will be distracted
                by the readable
              </Text>
            </Box>
          </GridItem>
        </Grid>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "90%",
            "2xl": "80%",
          }}
          mx={"auto"}
          mt={2}
        >
          <Text opacity={0.2}>Data Updated on : 24.07.24</Text>
        </Box>
      </Box>

      <Box
        border={"1px solid rgba(255,255,255,0.2)"}
        bg={"rgba(255,255,255,0.05)"}
        p={{
          base: 4,
          sm: 4,
          md: 10,
          lg: 10,
          xl: 10,
        }}
        w={"90%"}
        mx={"auto"}
        mt={"5rem"}
        rounded={"3xl"}
      >
        <Box display={"flex"} justifyContent={"center"} opacity={0.2}>
          <Image src={logo} width={500} height={500} alt="logo" />
        </Box>
        <Text
          mt={6}
          w={{
            base: "100%",
            sm: "100%",
            md: "70%",
            lg: "70%",
            xl: "70%",
          }}
          textAlign={"center"}
          mx={"auto"}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here,
        </Text>
        <Grid
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(5,1fr)",
            "2xl": "repeat(5,1fr)",
          }}
          gap={6}
          mt={10}
        >
          <GridItem
            rounded={"3xl"}
            bg={"rgba(255,255,255,0.05)"}
            border={"1px solid rgba(255,255,255,0.2)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={"50px 14px"}
          >
            <Box
              p={6}
              border={"2px solid rgba(255,255,255,0.2)"}
              bg={"#171717"}
              rounded={"full"}
              mb={"25px"}
            >
              <Image src={building} width={50} height={50} alt="building" />
            </Box>
            <Text fontSize={"20px"}>Real Estate Leader Groups</Text>
          </GridItem>
          <GridItem
            rounded={"3xl"}
            bg={"rgba(255,255,255,0.05)"}
            border={"1px solid rgba(255,255,255,0.2)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={"50px 14px"}
          >
            <Box
              p={6}
              border={"2px solid rgba(255,255,255,0.2)"}
              bg={"#171717"}
              rounded={"full"}
              mb={"25px"}
            >
              <Image src={justice} width={50} height={50} alt="building" />
            </Box>
            <Text fontSize={"20px"}>Law Firms</Text>
          </GridItem>
          <GridItem
            rounded={"3xl"}
            bg={"rgba(255,255,255,0.05)"}
            border={"1px solid rgba(255,255,255,0.2)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={"50px 14px"}
          >
            <Box
              p={6}
              border={"2px solid rgba(255,255,255,0.2)"}
              bg={"#171717"}
              rounded={"full"}
              mb={"25px"}
            >
              <Image src={capital} width={50} height={50} alt="building" />
            </Box>
            <Text fontSize={"20px"}>Finix196 Capital Inc</Text>
          </GridItem>
          <GridItem
            rounded={"3xl"}
            bg={"rgba(255,255,255,0.05)"}
            border={"1px solid rgba(255,255,255,0.2)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={"50px 14px"}
          >
            <Box
              p={6}
              border={"2px solid rgba(255,255,255,0.2)"}
              bg={"#171717"}
              rounded={"full"}
              mb={"25px"}
            >
              <Image src={keyboard} width={50} height={50} alt="building" />
            </Box>
            <Text fontSize={"20px"}>ATS Integration</Text>
          </GridItem>
          <GridItem
            rounded={"3xl"}
            bg={"rgba(255,255,255,0.05)"}
            border={"1px solid rgba(255,255,255,0.2)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={"50px 14px"}
          >
            <Box
              p={6}
              border={"2px solid rgba(255,255,255,0.2)"}
              bg={"#171717"}
              rounded={"full"}
              mb={"25px"}
            >
              <Image src={one} width={50} height={50} alt="building" />
            </Box>
            <Text fontSize={"20px"}>Auction Sales</Text>
          </GridItem>
        </Grid>
        <Grid
          display={{
            base: "none",
            xl: "grid",
          }}
          gridTemplateColumns={"repeat(5,1fr)"}
          gap={6}
        >
          <GridItem display={"flex"} justifyContent={"center"}>
            <Image src={arrow} width={10} height={10} alt="arrow" />
          </GridItem>
          <GridItem display={"flex"} justifyContent={"center"}>
            <Image src={arrow} width={10} height={10} alt="arrow" />
          </GridItem>
          <GridItem display={"flex"} justifyContent={"center"}>
            <Image src={arrow} width={10} height={10} alt="arrow" />
          </GridItem>
          <GridItem display={"flex"} justifyContent={"center"}>
            <Image src={arrow} width={10} height={10} alt="arrow" />
          </GridItem>
          <GridItem display={"flex"} justifyContent={"center"}>
            <Image src={arrow} width={10} height={10} alt="arrow" />
          </GridItem>
        </Grid>
        <Box
          bg={"rgba(0,0,0,0.3)"}
          border={"1px solid rgba(255,255,255,0.2)"}
          p={10}
          display={"flex"}
          flexDirection={{
            base: "column",
            md: "row",
          }}
          justifyContent={"space-around"}
          rounded={"3xl"}
          mt={{
            base: 20,
            xl: 0,
          }}
        >
          <Box>
            <Text mb={"30px"} fontSize={"25px"}>
              What Owners Get
            </Text>
            <UnorderedList
              styleType="disc"
              css={css`
                & > li::marker {
                  color: #ff5800;
                }
              `}
            >
              <ListItem>Deep Liquidity</ListItem>
              <ListItem>Valuation-Derived Pricing</ListItem>
              <ListItem>Minimum Selling Cost</ListItem>
            </UnorderedList>
          </Box>
          <Box h={"auto"} borderRight={"2px solid rgba(255,255,255,0.2)"}></Box>
          <Box>
            <Text mb={"30px"} fontSize={"25px"}>
              What Investor Get
            </Text>
            <UnorderedList
              styleType="disc"
              css={css`
                & > li::marker {
                  color: #ff5800;
                }
              `}
            >
              <ListItem>High Vaule Real Estate</ListItem>
              <ListItem>Monthly Yield</ListItem>
              <ListItem>Flexible Exit</ListItem>
              <ListItem>Stable Investment</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>

      <Askquestion />
    </>
  );
};

export default Howtoinvest;
