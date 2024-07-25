import React from "react";
import lastfm from "@/app/assets/lastfm.svg";
import delicious from "@/app/assets/delicious.svg";
import gaming from "@/app/assets/gaming.svg";
import soundcloud from "@/app/assets/soundcloud.svg";
import codepen from "@/app/assets/codepen.svg";
import bitbucket from "@/app/assets/butbucket.svg";
import hackernews from "@/app/assets/hacker.svg";
import vk from "@/app/assets/vk.svg";
import laravel from "@/app/assets/laravel.svg";
import vue from "@/app/assets/vue.svg";
import pwa from "@/app/assets/pwa.svg";
import yahoo from "@/app/assets/yahoo.svg";
import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

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
          <Image src={lastfm} alt="lastfm" width={80} height={80} />
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
          <Image src={delicious} alt="lastfm" width={80} height={80} />
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
          <Image src={gaming} alt="lastfm" width={80} height={80} />
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
          <Image src={soundcloud} alt="lastfm" width={80} height={80} />
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
          <Image src={codepen} alt="lastfm" width={80} height={80} />
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
          <Image src={bitbucket} alt="lastfm" width={80} height={80} />
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
          <Image src={hackernews} alt="lastfm" width={80} height={80} />
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
          <Image src={vk} alt="lastfm" width={80} height={80} />
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
          <Image src={vue} alt="lastfm" width={80} height={80} />
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
          <Image src={lastfm} alt="lastfm" width={80} height={80} />
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
