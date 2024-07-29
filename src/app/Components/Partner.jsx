import React from "react";
import anchoreg from "@/app/assets/partner/anchoreg.png";
import avalanche from "@/app/assets/partner/avalanche.png";
import base from "@/app/assets/partner/base.png";
import binance from "@/app/assets/partner/binance.png";
import metamask from "@/app/assets/partner/metamask.svg";
import polygon from "@/app/assets/partner/polygon.png";
import solana from "@/app/assets/partner/solana.png";
import tron from "@/app/assets/partner/tron.png";
import trustwallet from "@/app/assets/partner/trustwallet.png";
import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";

const Partner = () => {
  return (
    <div className="relative mt-40">
      <h2 className="base:text-[30px] md:text-[50px] font-thin text-center  mt-16 mb-28">
        Partners & Collaboration
      </h2>

      <Grid
        w={"80%"}
        m={"auto"}
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(5,1fr)",
          lg: "repeat(5,1fr)",
          xl: "repeat(5,1fr)",
          "2xl": "repeat(5,1fr)",
        }}
        gap={6}
        alignItems={"center"}
        justifyContent={"center"}
        mt={10}
      >
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid rgba(255,225,255,0.1)"}
          rounded={"xl"}
          p={6}
          transition={"transform 0.3 ease"}
          _hover={{
            transform: "scale(0.8)",
            transition: "transform 0.3 ease",
          }}
        >
          <FaEthereum size={80} />
          {/* <Image src={lastfm} alt="lastfm" width={80} height={80} /> */}
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid rgba(255,225,255,0.1)"}
          rounded={"xl"}
          p={6}
          transition={"transform 0.3 ease"}
          _hover={{
            transform: "scale(0.8)",
            transition: "transform 0.3 ease",
          }}
        >
          <Image src={anchoreg} alt="lastfm" width={80} height={80} />
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid rgba(255,225,255,0.1)"}
          rounded={"xl"}
          p={6}
          transition={"transform 0.3 ease"}
          _hover={{
            transform: "scale(0.8)",
            transition: "transform 0.3 ease",
          }}
        >
          <Image src={avalanche} alt="lastfm" width={80} height={80} />
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid rgba(255,225,255,0.1)"}
          rounded={"xl"}
          p={6}
          transition={"transform 0.3 ease"}
          _hover={{
            transform: "scale(0.8)",
            transition: "transform 0.3 ease",
          }}
        >
          <Image src={base} alt="lastfm" width={80} height={80} />
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid rgba(255,225,255,0.1)"}
          rounded={"xl"}
          p={6}
          transition={"transform 0.3 ease"}
          _hover={{
            transform: "scale(0.8)",
            transition: "transform 0.3 ease",
          }}
        >
          <Image src={binance} alt="lastfm" width={80} height={80} />
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid rgba(255,225,255,0.1)"}
          rounded={"xl"}
          p={6}
          transition={"transform 0.3 ease"}
          _hover={{
            transform: "scale(0.8)",
            transition: "transform 0.3 ease",
          }}
        >
          <Image src={metamask} alt="lastfm" width={80} height={80} />
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid rgba(255,225,255,0.1)"}
          rounded={"xl"}
          p={6}
          transition={"transform 0.3 ease"}
          _hover={{
            transform: "scale(0.8)",
            transition: "transform 0.3 ease",
          }}
        >
          <Image src={polygon} alt="lastfm" width={80} height={80} />
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid rgba(255,225,255,0.1)"}
          rounded={"xl"}
          p={6}
          transition={"transform 0.3 ease"}
          _hover={{
            transform: "scale(0.8)",
            transition: "transform 0.3 ease",
          }}
        >
          <Image src={solana} alt="lastfm" width={80} height={80} />
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid rgba(255,225,255,0.1)"}
          rounded={"xl"}
          p={6}
          transition={"transform 0.3 ease"}
          _hover={{
            transform: "scale(0.8)",
            transition: "transform 0.3 ease",
          }}
        >
          <Image src={tron} alt="lastfm" width={80} height={80} />
        </GridItem>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid rgba(255,225,255,0.1)"}
          rounded={"xl"}
          p={6}
          transition={"transform 0.3 ease"}
          _hover={{
            transform: "scale(0.8)",
            transition: "transform 0.3 ease",
          }}
        >
          <Image src={trustwallet} alt="lastfm" width={80} height={80} />
        </GridItem>
      </Grid>

      {/* <div className="flex items-center mx-auto">
        <button className="bg-[#FF5800] text-[#fff] rounded-full p-2 text-[15px] font-medium w-36 mx-auto mt-10">
          Explore More
        </button>
      </div> */}
    </div>
  );
};

export default Partner;
