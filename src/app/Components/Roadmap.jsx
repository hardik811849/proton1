import React from "react";
import glowline from "@/app/assets/glow_line.png";

const Roadmap = () => {
  return (
    <div className="relative w-full">
      <h2 className="text-[50px] font-thin text-center mb-[17px] mt-16 z-10 relative">
        Roadmap
      </h2>

      <div className="relative w-full">
        <div
          style={{ backgroundImage: `url(${glowline.src})` }}
          className="absolute top-0 left-0 hidden lg:block w-full h-full bg-center bg-no-repeat -z-50"
        ></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-28 gap-y-14 base:w-[90%] md:w-[80%] mx-auto relative z-50">
          <div className="base:order-1">
            <h1 className="text-[200px] text-[#7A7FD5] text-opacity-40 text-center font-thin">
              01
            </h1>
          </div>
          <div className="base:order-2 border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222] base:p-4 md:p-14">
            <h2 className="text-[30px] font-thin">Expansion and Integration</h2>
            <p className="font-thin text-[15px] leading-9">
              Tokenization of Existing Properties
            </p>
            <p className="font-thin text-[15px] leading-9">
              Partnership with Real Estate Leader Group
            </p>
            <p className="font-thin text-[15px] leading-9">Investor Roadshow</p>
            <p className="font-thin text-[15px] leading-9">
              Smart Contract Audit
            </p>
            <p className="font-thin text-[15px] leading-9">
              Marketing Campaign
            </p>
            <p className="font-thin text-[15px] leading-9">
              Proton Proof of Concept (PoC) with Technology, Real Estate, Law
              Firms and ATS Partners
            </p>
          </div>
          <div className="base:order-4 md:order-4 lg:order-3 xl:order-3 border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222]  base:p-4 md:p-14">
            <h2 className="text-[30px] font-thin">
              Technological Advancements and Marketplace Launch
            </h2>
            <p className="font-thin text-[15px] leading-9">
              Launch of Proton Perpetual Marketplace
            </p>
            <p className="font-thin text-[15px] leading-9">
              More Blockchains Integrated
            </p>
            <p className="font-thin text-[15px] leading-9">
              Mobile App Development
            </p>
            <p className="font-thin text-[15px] leading-9">Investor Webinars</p>
            <p className="font-thin text-[15px] leading-9">
              Integration of ATS for Enhanced Liquidity
            </p>
          </div>
          <div className="base:order-3 md:order-3 lg:order-4 xl:order-4">
            <h1 className="text-[200px] text-[#7A7FD5] text-opacity-40 text-center font-thin">
              02
            </h1>
          </div>
          <div className="base:order-5">
            <h1 className="text-[200px] text-[#7A7FD5] text-opacity-40 text-center font-thin">
              03
            </h1>
          </div>
          <div className="base:order-6 border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222] base:p-4 md:p-14">
            <h2 className="text-[30px] font-thin">
              Product and Service Diversification
            </h2>
            <p className="font-thin text-[15px] leading-9">
              Introduction of Tokenization Services
            </p>
            <p className="font-thin text-[15px] leading-9">
              Enhanced Reporting Tools
            </p>
            <p className="font-thin text-[15px] leading-9">
              Sustainability Initiatives
            </p>
            <p className="font-thin text-[15px] leading-9">
              Community Building
            </p>
            <p className="font-thin text-[15px] leading-9">
              Further Integration of ATS to Support New Markets
            </p>
          </div>
          <div className="base:order-8 md:order-8 lg:order-7 xl:order-7 border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222] base:p-4 md:p-14">
            <h2 className="text-[30px] font-thin">Consolidation and Growth</h2>
            <p className="font-thin text-[15px] leading-9">Market Expansion</p>
            <p className="font-thin text-[15px] leading-9">
              Regulatory Compliance
            </p>
            <p className="font-thin text-[15px] leading-9">
              Token Buyback and Burn Program
            </p>
            <p className="font-thin text-[15px] leading-9">
              Annual Review and Future Planning
            </p>
          </div>
          <div className="base:order-7 md:order-7 lg:order-8 xl:order-8">
            <h1 className="text-[200px] text-[#7A7FD5] text-opacity-40 text-center font-thin">
              04
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
