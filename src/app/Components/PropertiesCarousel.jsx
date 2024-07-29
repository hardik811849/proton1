import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import pro1 from "@/app/assets/pro1.svg";
import pro2 from "@/app/assets/pro2.svg";
import pro3 from "@/app/assets/pro3.svg";
import Link from "next/link";

const PropertiesCarousel = () => {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box>
      <Box w={"95%"} m={"auto"} className="slider-container">
        <Slider {...settings}>
          <Box
            bg={"rgba(255, 255, 255, 0.1)"}
            rounded={"2xl"}
            fontSize={"17px"}
            fontWeight={"semibold"}
            p={5}
            mr={2}
          >
            <Text textAlign={"center"} opacity={0.5} mb={2}>
              Rented Since Mar13, 2024
            </Text>
            <Image
              src={pro1}
              alt="pro1"
              width={300}
              height={300}
              className="w-full"
            />
            <Box
              mt={"17px"}
              display={"flex"}
              flexDirection={{ base: "column", lg: "row", "2xl": "row" }}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack textAlign={"center"}>
                <Text fontSize={"20px"} opacity={0.5}>
                  Saffron Apartments
                </Text>
                <Text fontSize={"20px"}>$10,00,000</Text>
              </Stack>
              <Box
                w={{
                  lg: "-webkit-fill-available",
                  xl: "fit-content",
                }}
                fontSize={"15px"}
                bg={"rgba(255, 255, 255, 0.05)"}
                textAlign={"center"}
                p={"20px"}
                rounded={"md"}
              >
                1st of 4 Properties
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} justifyContent={"space-between"} mt={5}>
                <Text fontSize={"26px"} opacity={0.5} fontWeight={"thin"}>
                  Annual Rental Return
                </Text>
                <Text>10%</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} mt={5}>
                <Text fontSize={"26px"} opacity={0.5} fontWeight={"thin"}>
                  Projected Value Growth
                </Text>
                <Text>12%</Text>
              </Box>
            </Box>
          </Box>
          <Box
            bg={"rgba(255, 255, 255, 0.1)"}
            rounded={"2xl"}
            fontSize={"17px"}
            fontWeight={"semibold"}
            p={5}
          >
            <Text textAlign={"center"} opacity={0.5} mb={2}>
              Rented Since Mar13, 2024
            </Text>
            <Image
              src={pro3}
              alt="pro1"
              width={300}
              height={300}
              className="w-full"
            />
            <Box
              mt={"17px"}
              display={"flex"}
              flexDirection={{ base: "column", lg: "row", "2xl": "row" }}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack textAlign={"center"}>
                <Text fontSize={"20px"} opacity={0.5}>
                  Saffron Apartments
                </Text>
                <Text fontSize={"20px"}>$10,00,000</Text>
              </Stack>
              <Box
                w={{
                  lg: "-webkit-fill-available",
                  xl: "fit-content",
                }}
                fontSize={"15px"}
                bg={"rgba(255, 255, 255, 0.05)"}
                textAlign={"center"}
                p={"20px"}
                rounded={"md"}
              >
                2nd of 4 properties
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} justifyContent={"space-between"} mt={5}>
                <Text fontSize={"26px"} opacity={0.5} fontWeight={"thin"}>
                  Annual Rental Return
                </Text>
                <Text>10%</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} mt={5}>
                <Text fontSize={"26px"} opacity={0.5} fontWeight={"thin"}>
                  Projected Value Growth
                </Text>
                <Text>12%</Text>
              </Box>
            </Box>
          </Box>
          <Box
            bg={"rgba(255, 255, 255, 0.1)"}
            rounded={"2xl"}
            fontSize={"17px"}
            fontWeight={"semibold"}
            p={5}
          >
            <Text textAlign={"center"} opacity={0.5} mb={2}>
              Rented Since Mar13, 2024
            </Text>
            <Image
              src={pro1}
              alt="pro1"
              width={300}
              height={300}
              className="w-full"
            />
            <Box
              mt={"17px"}
              display={"flex"}
              alignItems={"center"}
              flexDirection={{ base: "column", lg: "row", "2xl": "row" }}
              justifyContent={"space-between"}
            >
              <Stack textAlign={"center"}>
                <Text fontSize={"20px"} opacity={0.5}>
                  Saffron Apartments
                </Text>
                <Text fontSize={"20px"}>$10,00,000</Text>
              </Stack>
              <Box
                w={{
                  lg: "-webkit-fill-available",
                  xl: "fit-content",
                }}
                fontSize={"15px"}
                bg={"rgba(255, 255, 255, 0.05)"}
                textAlign={"center"}
                p={"20px"}
                rounded={"md"}
              >
                3rd of 4 properties
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} justifyContent={"space-between"} mt={5}>
                <Text fontSize={"26px"} opacity={0.5} fontWeight={"thin"}>
                  Annual Rental Return
                </Text>
                <Text>10%</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} mt={5}>
                <Text fontSize={"26px"} opacity={0.5} fontWeight={"thin"}>
                  Projected Value Growth
                </Text>
                <Text>12%</Text>
              </Box>
            </Box>
          </Box>
          <Box
            bg={"rgba(255, 255, 255, 0.1)"}
            rounded={"2xl"}
            fontSize={"17px"}
            fontWeight={"semibold"}
            p={5}
          >
            <Text textAlign={"center"} opacity={0.5} mb={2}>
              Rented Since Mar13, 2024
            </Text>
            <Image
              src={pro3}
              alt="pro1"
              width={300}
              height={300}
              className="w-full"
            />
            <Box
              mt={"17px"}
              display={"flex"}
              alignItems={"center"}
              flexDirection={{ base: "column", lg: "row", "2xl": "row" }}
              justifyContent={"space-between"}
            >
              <Stack textAlign={"center"}>
                <Text fontSize={"20px"} opacity={0.5}>
                  Saffron Apartments
                </Text>
                <Text fontSize={"20px"}>$10,00,000</Text>
              </Stack>
              <Box
                w={{
                  lg: "-webkit-fill-available",
                  xl: "fit-content",
                }}
                fontSize={"15px"}
                bg={"rgba(255, 255, 255, 0.05)"}
                textAlign={"center"}
                p={"20px"}
                rounded={"md"}
              >
                4th of 4 properties
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} justifyContent={"space-between"} mt={5}>
                <Text fontSize={"26px"} opacity={0.5} fontWeight={"thin"}>
                  Annual Rental Return
                </Text>
                <Text>10%</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} mt={5}>
                <Text fontSize={"26px"} opacity={0.5} fontWeight={"thin"}>
                  Projected Value Growth
                </Text>
                <Text>12%</Text>
              </Box>
            </Box>
          </Box>
        </Slider>
      </Box>
      <Box>
        <Box m={"auto"} textAlign={"center"} mt={"50px"} mb={"50px"}>
          <Link href={"https://www.finix196.com/site/invest"} target={"_blank"}>
            <Button
              color={"white"}
              bg={"#ff5800"}
              mt={"30px"}
              variant={"outline"}
              _hover={{ bg: "#ff5800" }}
              border={"none"}
              rounded={"full"}
            >
              Buy Proton
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertiesCarousel;
