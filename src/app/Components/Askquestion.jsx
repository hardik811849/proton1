"use client";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiSolidFilePdf } from "react-icons/bi";

const Askquestion = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  return (
    <div>
      <h2 className="base:text-[30px] md:text-[50px] font-thin text-center  mt-16 mb-12">
        Ask Quick Question
      </h2>

      <Box
        w={{ base: "90%", md: "80%", lg: "80%", xl: "90%", "2xl": "80%" }}
        m={"auto"}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(3, 1fr)",
          }}
          gap={6}
        >
          <GridItem
            colSpan={2}
            bg={"rgba(255,255,255,0.02)"}
            p={"45px 20px"}
            rounded={"2xl"}
          >
            <Text textAlign={"center"} fontSize={"35px"}>
              Get In Touch
            </Text>

            <form>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                gap={6}
                mt={"32px"}
              >
                <GridItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={input}
                      onChange={handleInputChange}
                      border={"1px solid rgba(255,255,255,0.2)"}
                      bg={"rgba(255,255,255,0.02)"}
                      rounded={"full"}
                      p={"25px"}
                      _placeholder={{ color: "rgba(255,255,255,0.2)" }}
                      _focus={{ outline: "none" }}
                      _hover={{ outline: "none" }}
                    />
                    {!isError ? (
                      <FormHelperText>
                        Enter the email you&apos;d like to receive the
                        newsletter on.
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl>
                    <Input
                      type="email"
                      value={input}
                      placeholder="Your Email"
                      onChange={handleInputChange}
                      border={"1px solid rgba(255,255,255,0.2)"}
                      bg={"rgba(255,255,255,0.02)"}
                      rounded={"full"}
                      p={"25px"}
                      _placeholder={{ color: "rgba(255,255,255,0.2)" }}
                      _focus={{ outline: "none" }}
                      _hover={{ outline: "none" }}
                    />
                    {!isError ? (
                      <FormHelperText>
                        Enter the email you&apos;d like to receive the
                        newsletter on.
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan={{
                    base: 1,
                    md: 2,
                  }}
                >
                  <FormControl>
                    <Textarea
                      type="text"
                      value={input}
                      placeholder="Your Message"
                      onChange={handleInputChange}
                      border={"1px solid rgba(255,255,255,0.2)"}
                      bg={"rgba(255,255,255,0.02)"}
                      rounded={"2xl"}
                      p={"25px"}
                      _placeholder={{ color: "rgba(255,255,255,0.2)" }}
                      _focus={{ outline: "none" }}
                      _hover={{ outline: "none" }}
                      rows={7}
                    />
                    {!isError ? (
                      <FormHelperText>
                        Enter the email you&apos;d like to receive the
                        newsletter on.
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                  </FormControl>
                </GridItem>
              </Grid>

              <Box display={"flex"} justifyContent={"center"}>
                <Input
                  type="submit"
                  value="Send Message"
                  bg={"#ff5800"}
                  rounded={"full"}
                  mt={"30px"}
                  border={"none"}
                  color={"#fff"}
                  _hover={{ bg: "#ff5800" }}
                  cursor={"pointer"}
                  w={"auto"}
                />
              </Box>
            </form>
          </GridItem>
          <GridItem
            bg={"rgba(255,255,255,0.02)"}
            p={{
              base: "15px 50px",
              md: "45px 100px",
              lg: "45px 100px",
              xl: "45px 100px",
              "2xl": "45px 100px",
            }}
            rounded={"2xl"}
            colSpan={{
              base: 1,
              md: 2,
              lg: 2,
              xl: 1,
              "2xl": 1,
            }}
          >
            <Text textAlign={"center"} fontSize={"30px"}>
              Read Documents
            </Text>

            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
                xl: "repeat(2, 1fr)",
                "2xl": "repeat(2, 1fr)",
              }}
              gap={6}
              mt={"32px"}
            >
              <GridItem
                bg={"rgba(255,255,255,0.02)"}
                rounded={"2xl"}
                p={"30px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <BiSolidFilePdf size={40} />
                <Text mt={"12px"}>Whitepaper</Text>
              </GridItem>
              <GridItem
                bg={"rgba(255,255,255,0.02)"}
                rounded={"2xl"}
                p={"30px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <BiSolidFilePdf size={40} />
                <Text mt={"12px"}>Whitepaper</Text>
              </GridItem>
              <GridItem
                bg={"rgba(255,255,255,0.02)"}
                rounded={"2xl"}
                p={"30px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <BiSolidFilePdf size={40} />
                <Text mt={"12px"}>Whitepaper</Text>
              </GridItem>
              <GridItem
                bg={"rgba(255,255,255,0.02)"}
                rounded={"2xl"}
                p={"30px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <BiSolidFilePdf size={40} />
                <Text mt={"12px"}>Whitepaper</Text>
              </GridItem>
            </Grid>
            <Box display={"flex"} justifyContent={"center"}>
              <Button
                w={"auto"}
                bg={"#ff5800"}
                rounded={"full"}
                mt={"30px"}
                border={"none"}
                color={"#fff"}
                _hover={{ bg: "#ff5800" }}
                cursor={"pointer"}
              >
                Download All
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default Askquestion;
