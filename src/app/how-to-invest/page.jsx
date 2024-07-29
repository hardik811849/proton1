"use client";
import Image from "next/image";
import React from "react";
import bg_about from "@/app/assets/Frame.svg";
import {
  Box,
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
  useSteps,
  VStack,
} from "@chakra-ui/react";
import phone from "@/app/assets/Phone@2x-8 1.svg";

const steps = [
  { title: "First", description: "Sign up" },
  { title: "Second", description: "Complete KYC & AML" },
  { title: "Third", description: "Add Funds" },
  { title: "Fourth", description: "Invest" },
];

const Howtoinvest = () => {
  return (
    <>
      {/* <div>
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
          <p className="text-[20px] w-[70%] mx-auto font-thin text-center relative -top-[30rem] ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here,
            content here&apos;, making it look like readable English. Many
            desktop publishing packages and web page
          </p>
        </div>
      </div>

      <Box bg={"rgba(255,255,255,0.05)"} display={"flex"}>
        <Box w={"90%"}>
          <Image src={phone} alt="phone" width={500} height={500} />
          <Box>
            <Text className="font-thin" fontSize={"20px"} lineHeight={"37px"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English. Many
              desktop publishing packages and web page.
            </Text>
          </Box>

          <Box pos={"relative"} display={"flex"}>
            <Box
              bg={"rgba(255,255,255,0.05)"}
              w={"fit-content"}
              p={3}
              rounded={"full"}
            >
              <Box
                bg={"#ffff"}
                p={3}
                w={"fit-content"}
                color={"#000"}
                fontSize={"20px"}
                rounded={"full"}
              >
                01
              </Box>
            </Box>
            <Box
              bg={"rgba(255,255,255,0.05)"}
              w={"fit-content"}
              p={3}
              rounded={"full"}
            >
              <Box
                bg={"#ffff"}
                p={3}
                w={"fit-content"}
                color={"#000"}
                fontSize={"20px"}
                rounded={"full"}
              >
                02
              </Box>
            </Box>
            <Box
              bg={"rgba(255,255,255,0.05)"}
              w={"fit-content"}
              p={3}
              rounded={"full"}
            >
              <Box
                bg={"#ffff"}
                p={3}
                w={"fit-content"}
                color={"#000"}
                fontSize={"20px"}
                rounded={"full"}
              >
                03
              </Box>
            </Box>
            <Box
              bg={"rgba(255,255,255,0.05)"}
              w={"fit-content"}
              p={3}
              rounded={"full"}
            >
              <Box
                bg={"#ffff"}
                p={3}
                w={"fit-content"}
                color={"#000"}
                fontSize={"20px"}
                rounded={"full"}
              >
                04
              </Box>
            </Box>
          </Box>
        </Box>
      </Box> */}

      <div className="w-full relative h-[7405px] overflow-hidden text-center text-xl text-white font-made-tommy">
        <div className="absolute top-[5087px] left-[calc(50%_-_44px)] rounded-11xl  w-[416px] h-[641px]" />
        <img
          className="absolute top-[3901px] left-[calc(50%_-_964px)] w-[1928px] h-[926px] object-cover"
          alt=""
          src="/invest/mask-group@2x.png"
        />
        <img
          className="absolute top-[-355px] left-[calc(50%_-_851px)] w-[1502.9px] h-[963.2px] overflow-hidden object-contain opacity-[0.18] mix-blend-screen"
          alt=""
          src="/invest/frame@2x.png"
        />
        <img
          className="absolute top-[112px] left-[450px] w-[1020px] h-[1001px] overflow-hidden object-contain opacity-[0.43] mix-blend-screen"
          alt=""
          src="/invest/frame.svg"
        />
        <div className="absolute top-[537px] left-[0px] [background:linear-gradient(0deg,_#101011,_#101011_50%,_rgba(16,_16,_17,_0.33))] w-[1920px] h-[602px]" />
        <div className="absolute top-[7292.5px] left-[149.5px] box-border w-[1621px] h-px border-t-[1px] border-solid border-gray-500" />
        <div className="absolute h-[10.09%] top-[0.08%] bottom-[89.83%] left-[calc(50%_-_960px)] w-[1920px] text-[130px]">
          <div className="absolute h-[78.58%] top-[21.42%] bottom-[0%] left-[calc(50%_-_637px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.21),_rgba(255,_255,_255,_0))] w-[1274px] opacity-[0.43]" />
          <div className="absolute top-[0px] left-[0px] w-[1920px] h-[662px]" />
          <div className="absolute top-[311px] left-[calc(50%_-_397px)] font-thin">
            How to Invest
          </div>
          <div className="absolute top-[472px] left-[calc(50%_-_714px)] text-xl leading-[37px] font-thin inline-block w-[1428px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here,
            content here&apos;, making it look like readable English. Many
            desktop publishing packages and web page
          </div>
        </div>
        <div className="absolute top-[4950px] left-[calc(50%_-_379px)] text-41xl font-thin">
          {" "}
          Our Platforms Key Numbers
        </div>
        <div className="absolute top-[1573px] left-[calc(50%_-_141px)] text-3xl font-medium text-orangered">
          How Proton Platform Works
        </div>
        <div className="absolute top-[1616px] left-[calc(50%_-_379px)] text-41xl font-thin">
          {" "}
          Our Platforms Key Numbers
        </div>
        <div className="absolute top-[3901px] left-[calc(50%_-_964px)]  w-[1928px] h-[926px]" />
        <div className="absolute top-[4264px] left-[calc(50%_-_505px)] text-[90px]">
          How Our Platform Works
        </div>
        <div className="absolute top-[4402px] left-[calc(50%_-_696px)] leading-[37px] font-thin inline-block w-[1392px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here,
        </div>
        <div className="absolute h-[0.84%] w-[11.93%] top-[60.95%] right-[44.01%] bottom-[38.22%] left-[44.06%] text-[15px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-13xl bg-orangered" />
          <img
            className="absolute top-[16px] left-[39px] w-[30px] h-[30px] overflow-hidden"
            alt=""
            src="/invest/3669296-circle-filled-play-ic-icon-1.svg"
          />
          <div className="absolute top-[33.87%] left-[32.31%] font-medium">
            Watch Full Video
          </div>
        </div>
        <img
          className="absolute top-[4123px] left-[calc(50%_-_63px)] w-[126px] h-[126px] overflow-hidden"
          alt=""
          src="/invest/5305164-play-video-youtube-youtube-logo-icon-1.svg"
        />
        <div className="absolute top-[5087px] left-[191px] rounded-11xl  w-[704px] h-[641px]" />
        <div className="absolute top-[5113px] left-[220px] rounded-xl bg-white bg-opacity-5 box-border w-[646px] h-[589px] border-[1px] border-solid border-gray-700" />
        <div className="absolute top-[5113px] left-[942px] rounded-xl bg-white bg-opacity-5 box-border w-[363px] h-[589px] border-[1px] border-solid border-gray-700" />
        <div className="absolute top-[5113px] left-[1380px] rounded-xl bg-white bg-opacity-5 box-border w-[363px] h-[589px] border-[1px] border-solid border-gray-700" />
        <div className="absolute top-[5087px] left-[calc(50%_+_394px)] rounded-11xl  w-[416px] h-[641px]" />
        <div className="absolute top-[5435px] left-[calc(50%_-_652px)] text-6xl leading-[43px] font-light inline-block w-[469px]">
          It is a long established fact that a reader will be distracted by the
          readable
        </div>
        <div className="absolute top-[5738px] left-[calc(50%_+_559px)] leading-[43px] opacity-[0.26]">
          <span className="font-light">Data Updated on :</span>
          <b> 24.07.24</b>
        </div>
        <div className="absolute top-[5295px] left-[calc(50%_-_661px)] text-[65px] font-light text-orangered">
          $25,60,000
        </div>
        <div className="absolute top-[5311px] left-[calc(50%_+_457px)] text-[65px] font-light text-orangered">
          $10,00,00
        </div>
        <div className="absolute top-[5438px] left-[calc(50%_-_4px)] text-6xl leading-[43px] font-light inline-block w-[337px]">{`It is a long established fact that a reader will `}</div>
        <div className="absolute top-[5438px] left-[calc(50%_+_426px)] text-6xl leading-[43px] font-light inline-block w-[351px]">
          It is a long established fact that a reader will be distracted by the
          readable
        </div>
        <div className="absolute top-[5314px] left-[calc(50%_+_88px)] text-[65px] font-light text-orangered">
          1,205
        </div>
        <div className="absolute top-[814px] left-[0px]  w-[1920px] h-[686px]" />
        <div className="absolute top-[852px] left-[150px] rounded-[22px]  w-[569px] h-[610px]" />
        <img
          className="absolute top-[926px] left-[316px] w-[238px] h-[462px] object-contain"
          alt=""
          src="/invest/phone2x8-1@2x.png"
        />
        <div className="absolute top-[5894px] left-[calc(50%_-_810px)] w-[1620px] h-[1238px] text-3xl">
          <div className="absolute top-[0px] left-[calc(50%_-_810px)] rounded-[40px]  box-border w-[1620px] h-[1238px] border-[1px] border-solid border-gray-900" />
          <div className="absolute top-[146px] left-[calc(50%_-_696px)] text-xl leading-[37px] font-thin inline-block w-[1392px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here,
          </div>
          <img
            className="absolute top-[55.7px] left-[683px] w-[254px] h-[58.3px] opacity-[0.28]"
            alt=""
            src="/invest/group-1321316077.svg"
          />
          <div className="absolute top-[279px] left-[calc(50%_-_720px)] w-[271.2px] h-64 text-xl">
            <div className="absolute top-[0px] left-[calc(50%_-_135.6px)] rounded-3xl  box-border w-[271.2px] h-64 border-[1px] border-solid border-gray-1000" />
            <div className="absolute top-[175.9px] left-[calc(50%_-_121.5px)]">
              Real Estate Leader Groups
            </div>
            <div className="absolute top-[54px] left-[calc(50%_-_48.9px)] rounded-[50%]  box-border w-[97.1px] h-[97.1px] border-[1px] border-solid border-gray-1200" />
          </div>
          <div className="absolute top-[279px] left-[calc(50%_-_428px)] w-[271.2px] h-64">
            <div className="absolute top-[0px] left-[calc(50%_-_135.6px)] rounded-3xl  box-border w-[271.2px] h-64 border-[1px] border-solid border-gray-1000" />
            <div className="absolute top-[175.9px] left-[calc(50%_-_50.5px)]">
              Law Firms
            </div>
            <div className="absolute top-[54px] left-[calc(50%_-_48.9px)] rounded-[50%]  box-border w-[97.1px] h-[97.1px] border-[1px] border-solid border-gray-1200" />
          </div>
          <div className="absolute top-[279px] left-[calc(50%_-_136px)] w-[271.2px] h-64">
            <div className="absolute top-[0px] left-[calc(50%_-_135.6px)] rounded-3xl  box-border w-[271.2px] h-64 border-[1px] border-solid border-gray-1000" />
            <div className="absolute top-[175.9px] left-[calc(50%_-_97.5px)]">
              Finix196 Capital Inc
            </div>
            <div className="absolute top-[54px] left-[calc(50%_-_48.9px)] rounded-[50%]  box-border w-[97.1px] h-[97.1px] border-[1px] border-solid border-gray-1200" />
          </div>
          <div className="absolute top-[279px] left-[calc(50%_+_156px)] w-[271.2px] h-64">
            <div className="absolute top-[0px] left-[calc(50%_-_135.6px)] rounded-3xl  box-border w-[271.2px] h-64 border-[1px] border-solid border-gray-1000" />
            <div className="absolute top-[175.9px] left-[calc(50%_-_77.5px)]">
              ATS Integration
            </div>
            <div className="absolute top-[54px] left-[calc(50%_-_48.9px)] rounded-[50%] bg-gray-200 box-border w-[97.1px] h-[97.1px] border-[1px] border-solid border-gray-1200" />
          </div>
          <div className="absolute top-[279px] left-[calc(50%_+_448px)] w-[271.2px] h-64">
            <div className="absolute top-[0px] left-[calc(50%_-_135.6px)] rounded-3xl bg-gray-1100 box-border w-[271.2px] h-64 border-[1px] border-solid border-gray-1000" />
            <div className="absolute top-[175.9px] left-[calc(50%_-_69.5px)]">
              Auction Sales
            </div>
            <div className="absolute top-[54px] left-[calc(50%_-_48.9px)] rounded-[50%] bg-gray-200 box-border w-[97.1px] h-[97.1px] border-[1px] border-solid border-gray-1200" />
          </div>
          <div className="absolute top-[700px] left-[calc(50%_-_719px)] w-[1438px] h-[432px] text-xl">
            <div className="absolute top-[0px] left-[calc(50%_-_719px)] w-[1438px] h-[432px]">
              <div className="absolute top-[0px] left-[calc(50%_-_719px)] rounded-3xl bg-gray-1400 box-border w-[1438px] h-[432px] border-[1px] border-solid border-gray-1300" />
              <div className="absolute top-[133px] left-[102px] w-[360px] flex flex-col items-start justify-start gap-[18px]">
                <div className="self-stretch relative leading-[37px] font-thin text-left">
                  Deep Liquidity
                </div>
                <div className="relative leading-[37px] font-thin">
                  Valuation-Derived Pricing
                </div>
                <div className="relative leading-[37px] font-thin">
                  Minimum Selling Cost
                </div>
              </div>
              <div className="absolute top-[133px] left-[873px] w-[360px] flex flex-col items-start justify-start gap-[18px]">
                <div className="relative leading-[37px] font-thin">
                  High Vaule Real Estate
                </div>
                <div className="relative leading-[37px] font-thin">
                  Monthly Yield
                </div>
                <div className="relative leading-[37px] font-thin">
                  Flexible Exit
                </div>
                <div className="relative leading-[37px] font-thin">
                  Stable Investment
                </div>
              </div>
              <div className="absolute top-[114px] left-[calc(50%_-_0px)] box-border w-px h-[205px] border-r-[1px] border-solid border-gray-1500" />
              <div className="absolute top-[68px] left-[calc(50%_-_617px)] text-6xl leading-[37px] text-justify">
                What Owners Get
              </div>
              <div className="absolute top-[68px] left-[calc(50%_+_154px)] text-6xl leading-[37px] text-justify">
                What Investor Get
              </div>
              <img
                className="absolute top-[148px] left-[84px] w-2 h-[118px]"
                alt=""
                src="/invest/group-1321316090.svg"
              />
            </div>
            <img
              className="absolute top-[147px] left-[855px] w-2 h-[173px]"
              alt=""
              src="/invest/group-1321316091.svg"
            />
          </div>
          <img
            className="absolute top-[535px] left-[226px] max-w-full overflow-hidden h-[165px] object-contain"
            alt=""
            src="/invest/arrow-3.svg"
          />
          <img
            className="absolute top-[535px] left-[517px] max-w-full overflow-hidden h-[165px] object-contain"
            alt=""
            src="/invest/arrow-3.svg"
          />
          <img
            className="absolute top-[535px] left-[808px] max-w-full overflow-hidden h-[165px] object-contain"
            alt=""
            src="/invest/arrow-3.svg"
          />
          <img
            className="absolute top-[535px] left-[1099px] max-w-full overflow-hidden h-[165px] object-contain"
            alt=""
            src="/invest/arrow-3.svg"
          />
          <img
            className="absolute top-[535px] left-[1390px] max-w-full overflow-hidden h-[165px] object-contain"
            alt=""
            src="/invest/arrow-3.svg"
          />
        </div>
        <div className="absolute top-[922px] left-[calc(50%_-_144px)] w-[972px] h-[429px] text-lgi">
          <div className="absolute top-[0px] left-[calc(50%_-_486px)] w-[972px] h-[429px] text-left text-xl">
            <div className="absolute top-[0px] left-[calc(50%_-_484px)] leading-[37px] font-thin inline-block w-[970px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English. Many
              desktop publishing packages and web page
            </div>
            <div className="absolute top-[231px] left-[37px] box-border w-[654px] h-px border-t-[1px] border-solid border-gray-1600" />
            <img
              className="absolute top-[195px] left-[0px] w-[75px] h-[75px]"
              alt=""
              src="/invest/group-1321316096.svg"
            />
            <img
              className="absolute top-[195px] left-[217.4px] w-[75px] h-[75px]"
              alt=""
              src="/invest/group-1321316097.svg"
            />
            <img
              className="absolute top-[195px] left-[434.8px] w-[75px] h-[75px]"
              alt=""
              src="/invest/group-1321316098.svg"
            />
            <img
              className="absolute top-[195px] left-[652px] w-[75px] h-[75px]"
              alt=""
              src="/invest/group-1321316096.svg"
            />
            <div className="absolute h-[14.45%] w-[23.56%] top-[85.55%] right-[76.23%] bottom-[0%] left-[0.21%] text-center text-mid">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-13xl bg-orangered" />
              <div className="absolute top-[33.87%] left-[39.74%] font-medium">
                Invest
              </div>
            </div>
          </div>
          <div className="absolute top-[51.52%] left-[2.67%] font-medium text-orangered">
            01
          </div>
          <div className="absolute top-[51.52%] left-[25%] font-medium text-orangered">
            02
          </div>
          <div className="absolute top-[51.52%] left-[47.43%] font-medium text-orangered">
            03
          </div>
          <div className="absolute top-[51.52%] left-[69.75%] font-medium text-orangered">
            04
          </div>
          <div className="absolute top-[66.9%] left-[0.82%] text-mid font-medium">
            Sign up
          </div>
          <div className="absolute top-[66.9%] left-[17.49%] text-mid font-medium">{`Complete KYC & AML`}</div>
          <div className="absolute top-[66.9%] left-[44.34%] text-mid font-medium">
            Add Funds
          </div>
          <div className="absolute top-[66.9%] left-[68.62%] text-mid font-medium">
            Invest
          </div>
        </div>
        <div className="absolute top-[2032px] left-[calc(50%_-_811px)] leading-[37px] font-thin text-left inline-block w-[821px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. Many desktop publishing packages
          and web page
        </div>
        <div className="absolute top-[3448px] left-[calc(50%_-_811px)] leading-[37px] font-thin text-left inline-block w-[821px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. Many desktop publishing packages
          and web page
        </div>
        <div className="absolute top-[2758px] left-[calc(50%_-_4px)] leading-[37px] font-thin text-left inline-block w-[821px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. Many desktop publishing packages
          and web page
        </div>
        <div className="absolute top-[1968px] left-[calc(50%_-_811px)] text-11xl">
          Finding and checking a property
        </div>
        <div className="absolute top-[1442px] left-[1047px] w-[1011px] h-[1011px]">
          <img
            className="absolute top-[20%] left-[20%] rounded-63xl w-[60%]  object-contain"
            alt=""
            src="/invest/polygon-1.svg"
          />
          <div className="absolute top-[375px] left-[44px] rounded-9xl bg-black  w-[592px] h-[513px] border-[1px] " />
        </div>
        <div className="absolute top-[3384px] left-[calc(50%_-_811px)] text-11xl">
          Verified experts manage properties
        </div>
        <div className="absolute top-[2696px] left-[calc(50%_-_4px)] text-11xl">
          Property lists to the marketplace
        </div>
        <div className="absolute top-[2858px] left-[1047px] w-[1011px] h-[1011px]">
          <img
            className="absolute top-[20%] left-[20%] rounded-63xl w-[60%] object-contain"
            alt=""
            src="/invest/polygon-1.svg"
          />
          <div className="absolute top-[375px] left-[44px] rounded-9xl box-border bg-black w-[592px] h-[513px] border-[1px] border-solid border-gray-1700" />
        </div>
        <img
          className="absolute top-[2169px] left-[-133px] w-[1011px] h-[1011px] object-contain"
          alt=""
          src="/invest/group-1321316117@2x.png"
        />
      </div>
    </>
  );
};

export default Howtoinvest;
