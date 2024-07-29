import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import fintech from "@/app/assets/logo-e1704452038691-2048x366.png";
import trescon from "@/app/assets/Trescon.240.png";
import Link from "next/link";

const PressUs = () => {
  return (
    <div className="mt-40">
      <h2 className="base:text-[30px] md:text-[50px] font-thin text-center  mt-16">
        Media
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
            <Image src={trescon} alt="" width={140} height={140} />
            {/* <Text fontSize={"35px"}>Trescon</Text> */}
          </Box>
          <Text lineHeight={"30px"} fontWeight={"thin"}>
            &apos;While APPRO emerged as the Winner of FWC and secured on the
            spot investment commitment of USD 500,000, other startups like
            Finix196 received commitment of USD 5 million by Dhruv Management,
            Motive Partners committed USD 3 million to Alpha Stream and Validus
            got commitment of USD 750,000 by Aum Ventures.
          </Text>
          <Link
            href={
              "https://www.acnnewswire.com/press-release/english/90788/$9.25-million-in-investments-committed-to-start-ups-during-fintech-world-cup-at-dubai-fintech-summit"
            }
          >
            <Button
              color={"white"}
              bg={"#ff5800"}
              mt={"30px"}
              variant={"outline"}
              _hover={{ bg: "#ff5800", cursor: "pointer" }}
              border={"none"}
              rounded={"full"}
            >
              Explore More
            </Button>
          </Link>
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
            <Image src={fintech} alt="" width={140} height={140} />
            {/* <Text fontSize={"35px"}>Avion.com</Text> */}
          </Box>
          <Text lineHeight={"30px"} fontWeight={"thin"}>
            &apos;Dubai, 10 May 2024: The much-awaited Grand Finale of the
            FinTech World Cup (FWC) hosted by Trescon in partnership with Dubai
            FinTech Summit (DFS ), VISA, Emirates NBD & Amazon Web Services
            (AWS), witnessed committed investments totalling worth over USD
            9,250,000 (9.25 million) by various investors.&apos;
          </Text>
          <Link
            href={
              "https://fintechbloom.com/usd-9-25-million-in-investments-committed-to-start-ups-during-fintech-world-cup-at-dubai-fintech-summit/"
            }
          >
            <Button
              color={"white"}
              bg={"#ff5800"}
              mt={"30px"}
              variant={"outline"}
              _hover={{ bg: "#ff5800", cursor: "pointer" }}
              border={"none"}
              rounded={"full"}
            >
              Explore More
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default PressUs;
