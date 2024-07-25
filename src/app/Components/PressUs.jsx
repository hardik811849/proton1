import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import avion from "@/app/assets/avion.svg";

const PressUs = () => {
  return (
    <div className="mt-40">
      <h2 className="base:text-[30px] md:text-[50px] font-thin text-center  mt-16">
        Press & Media
      </h2>

      <Box
        w={{
          base: "90%",
          sm: "90%",
          md: "90%",
          lg: "80%",
          xl: "80%",
          "2xl": "70%",
        }}
        m={"auto"}
        mt={"50px"}
        display={"flex"}
        gap={4}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Box
          bg={"rgba(255,255,255,0.05)"}
          p={{
            base: "25px",
            sm: "25px",
            md: "45px",
            lg: "45px",
            xl: "45px",
            "2xl": "45px",
          }}
          rounded={"3xl"}
        >
          <Box display={"flex"} alignItems={"center"} gap={4} mb={5}>
            <Image src={avion} alt="" width={50} height={50} />
            <Text fontSize={"35px"}>Avion.com</Text>
          </Box>
          <Text lineHeight={"30px"} fontWeight={"thin"}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </Text>
          <Button
            color={"white"}
            bg={"#ff5800"}
            mt={"30px"}
            variant={"outline"}
            _hover={{ bg: "#ff5800" }}
            border={"none"}
            rounded={"full"}
          >
            Explore More
          </Button>
        </Box>
        <Box
          bg={"rgba(255,255,255,0.05)"}
          p={{
            base: "25px",
            sm: "25px",
            md: "45px",
            lg: "45px",
            xl: "45px",
            "2xl": "45px",
          }}
          rounded={"3xl"}
        >
          <Box display={"flex"} alignItems={"center"} gap={4} mb={5}>
            <Image src={avion} alt="" width={50} height={50} />
            <Text fontSize={"35px"}>Avion.com</Text>
          </Box>
          <Text lineHeight={"30px"} fontWeight={"thin"}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </Text>
          <Button
            color={"white"}
            bg={"#ff5800"}
            mt={"30px"}
            variant={"outline"}
            _hover={{ bg: "#ff5800" }}
            border={"none"}
            rounded={"full"}
          >
            Explore More
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default PressUs;
