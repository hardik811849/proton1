import React from "react";
import bg_about from "@/app/assets/Frame.svg";
import Image from "next/image";
import eclips from "@/app/assets/Ellipse 27.svg";
import spear from "@/app/assets/sphere@4x-8 1.png";
import shld from "@/app/assets/shld@4x-8 1.png";
import blocks from "@/app/assets/blocks.png";
import Partner from "../Components/Partner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import team1 from "@/app/assets/team2.svg";
import team2 from "@/app/assets/team3.svg";
import team3 from "@/app/assets/team4.svg";
import team4 from "@/app/assets/team5.svg";
import Faqs from "../Components/Faqs";

const Aboutus = () => {
  return (
    <>
      <Image
        src={eclips}
        alt="eclips"
        width={500}
        height={500}
        className="absolute sm:top-16 md:top-0 left-96 w-[50%]  z-0"
      />
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
          About Us
        </h1>
        <p className="text-[20px] w-[70%] mx-auto font-thin text-center relative -top-[30rem] ">
          At Proton Perpetual, we are redefining real estate investment through
          innovation and expertise. Leveraging over a century of experience from
          Finix196 Capital Inc., we bring you a platform that not only promises
          growth but also assures security and yields in the evolving world of
          asset-backed securities.
        </p>
      </div>

      <div className="w-[90%] mx-auto flex justify-center">
        <div className="border_about rounded-lg flex flex-col items-center base:py-[10px] px-[10px] md:py-[10px] px-[10px] lg:py-[20px] lg:px-[30px] xl:py-[30px] xl:px-[70px]  2xl:py-[88px] 2xl:px-[160px]  w-fit mx-auto">
          <h2 className="text-[75px] font-thin mb-20">Our Mission</h2>
          <div className="grid grid-cols-2 ">
            <div className="flex items-center justify-center">
              <h1 className="text-[250px] font-thin text-gradient ">01</h1>
            </div>
            <div className="flex flex-col leading-9 opacity-75 font-thin">
              <p className="text-[40px] mb-3">What Sets Proton Apart?</p>

              <div className="mb-3">
                <p className="font-bold">Institutional-Grade Assets: </p>
                <p>
                  We selectively onboard high-value commercial real estate,
                  expanding from the US to a global market, ensuring each
                  property upholds our standards for high capitalization rates
                  and 8% yield.
                </p>
              </div>
              <div className="mb-3">
                <p className="font-bold">Rigorous Compliance: </p>
                <p>
                  Proton adheres to high KYC standards, ensuring all operations
                  comply with the strictest regulatory frameworks, backed by our
                  onshore holding structure.
                </p>
              </div>
              <div className="mb-3">
                <p className="font-bold">Multichain and Multi ATS Liquidity:</p>
                <p>
                  Our tokens are designed for interoperability across multiple
                  blockchains and trading systems, ensuring robust liquidity and
                  easy access for all investors.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center leading-9 opacity-75 font-thin">
              <p className="text-[40px] mb-3">
                Investment with Proton : The Advantage
              </p>
              <div className="mb-3">
                <p className="font-bold">Guaranteed Yield and Liquidity: </p>
                <p>
                  Proton promises a consistent yield payout and liquidity that
                  allows you to access your investments at any time.
                </p>
              </div>
              <div className="mb-3">
                <p className="font-bold">Use as Collateral: </p>
                <p>
                  Beyond yielding returns, your Proton tokens can serve as
                  collateral, providing you with flexible financial options.
                </p>
              </div>
              <div className="mb-3">
                <p className="font-bold">Safe and Secure:</p>
                <p>
                  Invest with confidence in a platform that utilizes immutable
                  technology underpinned by high governance standards, ensuring
                  that your investments are always protected.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-[250px] font-thin  text-gradient">02</h1>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-[250px] font-thin text-gradient ">03</h1>
            </div>
            <div className="flex flex-col  leading-9 opacity-75 font-thin">
              <p className="text-[40px] mb-3">Join the Proton Ecosystem</p>
              <p>
                Whether you&aops;re a property owner looking to tokenize assets
                or an investor seeking reliable returns from high-quality real
                estate, Proton offers tailored solutions that empower you to
                achieve your financial goals. Enjoy benefits like lower
                transaction fees, immediate liquidity options, and the potential
                to grow and manage your asset portfolio more effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#101011] p-10">
        <h2 className="text-[75px] font-thin text-center mb-20">
          Our Technology
        </h2>

        <div className="grid grid-cols-2 gap-10 w-[90%] mx-auto bg-white bg-opacity-5 rounded-3xl p-10">
          <div className="w-[90%] mx-auto flex items-center justify-center">
            <Image
              src={spear}
              alt="spear"
              width={500}
              height={500}
              className="w-[50%]"
            />
          </div>
          <div className="rounded-3xl  base:p-6 md:p-14 ">
            <h2 className="text-[30px] font-light">Innovation</h2>
            <p className="font-thin text-[15px] leading-8">
              At the core of our platform is the innovative use of blockchain
              technology to tokenize real estate assets. This approach
              revolutionizes how properties are bought, sold, and managed,
              making real estate investment more accessible, transparent, and
              efficient.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 w-[90%] mx-auto bg-[#101011] bg-opacity-75 rounded-3xl p-10 mt-10">
          <div className="rounded-3xl  base:p-6 md:p-14 ">
            <h2 className="text-[30px] font-light">Security</h2>
            <p className="font-thin text-[15px] leading-8">
              Security is paramount at Proton. We utilize the ERC 3643 standards
              for our security tokens, ensuring that all transactions are not
              only compliant with the strictest regulations but also protected
              against unauthorized access and fraud.
            </p>
          </div>
          <div className="w-[90%] mx-auto flex items-center justify-center">
            <Image
              src={shld}
              alt="spear"
              width={500}
              height={500}
              className="w-[50%]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 w-[90%] mx-auto bg-white bg-opacity-5 rounded-3xl p-10 mt-10">
          <div className="w-[90%] mx-auto flex items-center justify-center">
            <Image
              src={blocks}
              alt="spear"
              width={500}
              height={500}
              className="w-[50%]"
            />
          </div>
          <div className="rounded-3xl  base:p-6 md:p-14 ">
            <h2 className="text-[30px] font-light">Scalability</h2>
            <p className="font-thin text-[15px] leading-8">
              Our model involves the tokenization of the entire company stock,
              known as a Tokenised Holding Company structure. This strategic
              approach allows for significant scalability and flexibility,
              providing liquidity to investors who can buy or sell shares in the
              company as easily as trading tokens. This structure is ideal for
              adapting to market demands and investor needs, facilitating growth
              without the constraints of traditional real estate investment
              structures.
            </p>
          </div>
        </div>
      </div>

      {/* <div>
        <h2 className="text-[75px] font-thin text-center ">Our Team</h2> */}

      {/* <div>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/3 relative">
                <Image
                  src={team1}
                  alt="team1"
                  width={500}
                  height={500}
                  className="relative"
                />
                <div className="absolute bottom-10 left-10 text-[25px] font-thin">
                  Nishika Shah
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 relative">
                <Image
                  src={team2}
                  alt="team1"
                  width={500}
                  height={500}
                  className="relative"
                />
                <div className="absolute bottom-10 left-10 text-[25px] font-thin">
                  Nishika Shah
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 relative">
                <Image
                  src={team3}
                  alt="team1"
                  width={500}
                  height={500}
                  className="relative"
                />
                <div className="absolute bottom-10 left-10 text-[25px] font-thin">
                  Nishika Shah
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 relative">
                <Image
                  src={team1}
                  alt="team1"
                  width={500}
                  height={500}
                  className="relative"
                />
                <div className="absolute bottom-10 left-10 text-[25px] font-thin">
                  Nishika Shah
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div> */}
      {/* </div> */}

      <Partner />
      <Faqs />
    </>
  );
};

export default Aboutus;
