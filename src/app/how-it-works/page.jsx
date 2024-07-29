"use client";
import Image from "next/image";
import React from "react";
import bg_about from "@/app/assets/Frame.svg";
import eclips from "@/app/assets/Ellipse 27.svg";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import buy from "@/app/assets/buy 1.svg";
import prop from "@/app/assets/prop 1.svg";
import tokennize from "@/app/assets/how.svg";
import Faqs from "../Components/Faqs";
import Askquestion from "../Components/Askquestion";
import { css } from "@emotion/react";

const HowitWorks = () => {
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
            How It Works
          </h1>
          <p className="text-[20px] w-[70%] mx-auto font-thin text-center relative md:-top-[16rem] lg:-top-[33rem] xl:-top-[25rem] 2xl-top-[30rem] ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here,
            content here&apos;, making it look like readable English. Many
            desktop publishing packages and web page
          </p>
        </div>
      </div>

      <Box mb={10}>
        <div className="bg-[#fff] bg-opacity-5 w-[90%] mx-auto p-8 rounded-3xl border-2 border-zinc-700">
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
              lg: "repeat(1,1fr)",
              xl: "repeat(2,1fr)",
            }}
            gap={"2rem"}
          >
            <GridItem>
              <Text
                fontSize={"90px"}
                fontWeight={"light"}
                color={"#ff5800"}
                mb={"14px"}
              >
                01
              </Text>
              <Text
                fontSize={{ base: "18px", md: "35px" }}
                fontWeight={"light"}
                mb={"14px"}
              >
                Getting Started on Proton Perpetual
              </Text>
              <Text
                className="font-thin"
                lineHeight={"32px"}
                fontSize={{
                  base: "16px",
                  md: "16px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": "18px",
                }}
                mb={"20px"}
              >
                Welcome to Proton Perpetual, where investment meets innovation
                through tokenization. Here&apos;s how to engage with our
                tokenized holding company:
              </Text>
            </GridItem>
            <GridItem
              display={"flex"}
              justifyContent={"center"}
              borderRadius={"2xl"}
            >
              <Image
                src={tokennize}
                alt="buy"
                width={500}
                height={500}
                className="w-[100%]"
              />
            </GridItem>

            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>a)&nbsp;</span>Explore and
                Initiate
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Visit Proton Perpetual:&nbsp;
                  </span>
                  Discover the advantages of investing in a tokenized holding
                  company with a robust real estate portfolio.
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>Invest Now:&nbsp;</span>
                  Choose to invest in Proton Perpetual by clicking the
                  &ldquo;Invest Now&ldquo; button.
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>b)&nbsp;</span>Partnered ATS
                Platform
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Seamless Transition:&nbsp;
                  </span>
                  Upon selecting to invest, you&nbsp;ll be seamlessly redirected
                  to our ATS partner, fully licensed by the SEC and FINRA.
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Registration Process:&nbsp;
                  </span>
                  Complete the onboarding steps provided by our ATS partner to
                  set up and activate your account
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>c)&nbsp;</span>Compliance and
                Verification
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    KYC/AML Procedures:&nbsp;
                  </span>
                  Fulfill necessary Know Your Customer (KYC) and Anti-Money
                  Laundering (AML) requirements to authenticate your identity
                  and investment eligibility
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Whitelisting:&nbsp;
                  </span>
                  After verification, you will be whitelisted as an approved
                  investor, enabling you to participate in our offerings
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>d)&nbsp;</span>Investment
                Access
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>Engage:&nbsp;</span>
                  With whitelisting complete, you are set to invest in Proton
                  Perpetual&apos;s tokenized stock through the ATS platform
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>Support:&nbsp;</span>
                  Both Proton Perpetual and our ATS partner are committed to
                  providing ongoing assistance throughout your investment
                  journey
                </ListItem>
              </UnorderedList>
            </GridItem>
          </Grid>
        </div>
      </Box>
      <Box pos={"relative"} mb={10}>
        <div className="bg-[#fff] bg-opacity-5 w-[90%] mx-auto p-8 rounded-3xl border-2 border-zinc-700">
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
              lg: "repeat(1,1fr)",
              xl: "repeat(2,1fr)",
            }}
            gap={"2rem"}
          >
            <GridItem>
              <Text
                fontSize={"90px"}
                fontWeight={"light"}
                color={"#ff5800"}
                mb={"14px"}
              >
                02
              </Text>
              <Text fontSize={"35px"} fontWeight={"light"} mb={"14px"}>
                Portfolio
              </Text>
              {/* <Text
                className="font-thin"
                lineHeight={"32px"}
                fontSize={{
                  base: "16px",
                  md: "16px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": "18px",
                }}
                mb={"20px"}
              >
                Welcome to Proton Perpetual, where investment meets innovation
                through tokenization. Here&apos;s how to engage with our
                tokenized holding company:
              </Text> */}
            </GridItem>
            <GridItem
              display={"flex"}
              justifyContent={"center"}
              borderRadius={"2xl"}
            >
              <Image
                src={tokennize}
                alt="buy"
                width={500}
                height={500}
                className="w-[100%]"
              />
            </GridItem>

            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>a)&nbsp;</span>Proton
                Perpetual Portfolio
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  Proton Perpetual’s portfolio is a strategically curated
                  collection of high-value real estate assets, managed through a
                  structure of tokenized company stock.
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  Each Proton token represents fractional ownership in Proton
                  Perpetual itself, enabling investors to share in the
                  performance and growth of the entire portfolio. Here’s how our
                  portfolio stands out
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>b)&nbsp;</span>Asset
                Diversification
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Commercial Real Estate (CRE):&nbsp;
                  </span>
                  Our commercial investments include premium office buildings,
                  retail outlets, and industrial properties strategically
                  located to maximize occupancy and rental yields
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Multi-Family Residences:&nbsp;
                  </span>
                  The portfolio includes residential complexes that consistently
                  demand high occupancy, contributing to a stable income stream
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>Hotels:&nbsp;</span>
                  Our portfolio includes hotels strategically located in areas
                  with high foot traffic, optimizing revenue from both business
                  and leisure travelers. These locations are chosen for their
                  potential to attract a steady stream of guests, ensuring
                  robust occupancy rates and sustained income generation.
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>c)&nbsp;</span>Geographic
                Diversity
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  Our real estate assets are spread across economically
                  resilient regions, minimizing risk and enhancing potential for
                  capital appreciation. Each property is carefully selected
                  based on thorough market research and growth potential
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>d)&nbsp;</span>
                Value-Enhancing Strategies
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Property Improvement Plans (PIPs):&nbsp;
                  </span>
                  We proactively manage each asset with targeted renovations and
                  upgrades designed to boost property value and attract
                  high-quality “AAA” and “AA” rated tenants
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Operational Efficiencies:&nbsp;
                  </span>
                  Through the adoption of advanced management practices and
                  technology, we aim to reduce costs and enhance the overall
                  performance of each asset
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>e)&nbsp;</span>
                Transparent Asset Management
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Regular Evaluations:&nbsp;
                  </span>
                  All properties undergo periodic independent assessments to
                  ensure that valuations are both transparent and accurate.
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Accessible Performance Data:&nbsp;
                  </span>
                  We provide detailed metrics for each asset, such as occupancy
                  rates and revenue figures, readily available for investor
                  review
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>f)&nbsp;</span>
                Tokenized Investment Opportunity
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Fractional Ownership:&nbsp;
                  </span>
                  Proton tokens grant investors fractional ownership in Proton
                  Perpetual, aligning investor interests with the overall
                  performance of the company
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Enhanced Liquidity:&nbsp;
                  </span>
                  The tokenization of company stock allows for fractional sales
                  and purchases, offering greater liquidity and flexibility for
                  investors to adjust their investment positions as needed
                </ListItem>
              </UnorderedList>
            </GridItem>
          </Grid>
        </div>
      </Box>
      <Box pos={"relative"} mb={10}>
        <div className="bg-[#fff] bg-opacity-5 w-[90%] mx-auto p-8 rounded-3xl border-2 border-zinc-700">
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
              lg: "repeat(1,1fr)",
              xl: "repeat(2,1fr)",
            }}
            gap={"2rem"}
          >
            <GridItem>
              <Text
                fontSize={"90px"}
                fontWeight={"light"}
                color={"#ff5800"}
                mb={"14px"}
              >
                03
              </Text>
              <Text fontSize={"35px"} fontWeight={"light"} mb={"14px"}>
                Tokenisation
              </Text>
              {/* <Text
                className="font-thin"
                lineHeight={"32px"}
                fontSize={{
                  base: "16px",
                  md: "16px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": "18px",
                }}
                mb={"20px"}
              >
                Welcome to Proton Perpetual, where investment meets innovation
                through tokenization. Here&apos;s how to engage with our
                tokenized holding company:
              </Text> */}
            </GridItem>
            <GridItem
              display={"flex"}
              justifyContent={"center"}
              borderRadius={"2xl"}
            >
              <Image
                src={tokennize}
                alt="buy"
                width={500}
                height={500}
                className="w-[100%]"
              />
            </GridItem>

            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>a)&nbsp;</span>The
                Tokenization Process
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  The tokenization process at Finix196 is meticulously designed
                  to ensure a secure and efficient transition of assets onto the
                  blockchain. Here’s an overview of our comprehensive approach
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>b)&nbsp;</span>Asset
                Selection
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Strategic Acquisitions:&nbsp;
                  </span>
                  We focus on assets with robust financial performance and
                  growth potential. Our selection criteria prioritize assets
                  that have shown stability and substantial growth potential,
                  aligning with our high standards for tokenization
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>c)&nbsp;</span>Due Diligence
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Comprehensive Evaluation:&nbsp;
                  </span>
                  We conduct exhaustive due diligence to validate the quality of
                  each asset. This includes in-depth analysis of financial
                  health, market positioning, and potential risks to ensure that
                  only the most viable assets are tokenized
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>d)&nbsp;</span>
                Token Creation
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Minting on Blockchain:&nbsp;
                  </span>
                  Digital Security tokens representing ownership, of Proton
                  tokens, are minted using the ERC 3643 digital security token
                  standards on the blockchain. This process ensures that each
                  token provides a secure and transparent representation of
                  fractional ownership
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>e)&nbsp;</span>
                Listing and Trading
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Multi ATS Integration:&nbsp;
                  </span>
                  Tokens are integrated into multiple Automated Trading Systems
                  (ATS), enhancing their availability across different trading
                  platforms. This setup supports an active secondary market,
                  facilitating the buying, selling, and trading of tokens,
                  ensuring liquidity and accessible market participation
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Proton Listing:&nbsp;
                  </span>
                  Initially, Proton will be listed on three Automated Trading
                  Systems (ATS) during it launch date. The names of these
                  platforms will be announced soon
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>f)&nbsp;</span>
                Proton Portfolio Yield
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  The Proton portfolio generates an 8% yield per annum, paid out
                  monthly. This distribution ensures consistent returns for
                  investors, enhancing the attractiveness of Proton tokens
                  across various investment landscapes.
                </ListItem>
              </UnorderedList>
            </GridItem>
          </Grid>
        </div>
      </Box>
      <Box pos={"relative"} mb={10}>
        <div className="bg-[#fff] bg-opacity-5 w-[90%] mx-auto p-8 rounded-3xl border-2 border-zinc-700">
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
              lg: "repeat(1,1fr)",
              xl: "repeat(2,1fr)",
            }}
            gap={"2rem"}
          >
            <GridItem>
              <Text
                fontSize={"90px"}
                fontWeight={"light"}
                color={"#ff5800"}
                mb={"14px"}
              >
                04
              </Text>
              <Text fontSize={"35px"} fontWeight={"light"} mb={"14px"}>
                Auction sale
              </Text>
              <Text
                className="font-thin"
                lineHeight={"32px"}
                fontSize={{
                  base: "16px",
                  md: "16px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": "18px",
                }}
                mb={"20px"}
              >
                Welcome to the Proton Auction Platform! Here’s a simple
                step-by-step guide to help you start bidding on Proton tokens
              </Text>
            </GridItem>
            <GridItem
              display={"flex"}
              justifyContent={"center"}
              borderRadius={"2xl"}
            >
              <Image
                src={tokennize}
                alt="buy"
                width={500}
                height={500}
                className="w-[100%]"
              />
            </GridItem>

            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>a)&nbsp;</span>Step 1:
                Register and Prepare
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>Sign Up:&nbsp;</span>
                  Create your account on the Proton platform
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Complete KYC:&nbsp;
                  </span>
                  Ensure you complete all necessary KYC (Know Your Customer)
                  requirements to activate your account
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>b)&nbsp;</span>Step 2:
                Understand the Auction Schedule
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Weekly Auctions:&nbsp;
                  </span>
                  Auctions run from Monday to Sunday, including daily auctions
                  on weekdays and special Super Rounds on weekends
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>c)&nbsp;</span>Step 3:
                Bidding Process
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>Daily Bids:&nbsp;</span>
                  Log in and place your bids on available tokens during any
                  weekday
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Monitor Activity:&nbsp;
                  </span>
                  Keep an eye on token availability and oversubscription levels
                  to understand potential bonuses
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>d)&nbsp;</span>
                Step:4 Participate in Super Rounds
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Weekend Activity:&nbsp;
                  </span>
                  Join the Super Rounds on Saturday and Sunday for a chance to
                  bid on protocol token with lucrative bonus.
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Secure Your Tokens:&nbsp;
                  </span>
                  Ensure your bids are finalized before the Sunday auction
                  closes
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>e)&nbsp;</span>
                Auction Rules to Remember
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                  mb={"24px"}
                >
                  <span style={{ fontWeight: "bold" }}>Timeliness:&nbsp;</span>
                  Only bids placed during the scheduled times are valid
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>Bid Limits:&nbsp;</span>
                  Stay within any set minimum and maximum bid limits
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Understand Bonuses:&nbsp;
                  </span>
                  Familiarize yourself with the criteria for earning bonuses, as
                  these can enhance your returns
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              bg={"rgba(0,0,0,0.1)"}
              p={"35px"}
              rounded={"2xl"}
              border={"2px solid rgba(255,255,255,0.1)"}
            >
              <Text fontSize={"35px"} mb={"24px"}>
                <span style={{ color: "#ff5800" }}>f)&nbsp;</span>
                Step 5: Closing and Settlement
              </Text>

              <UnorderedList
                styleType="disc"
                css={css`
                  & > li::marker {
                    color: #ff5800;
                  }
                `}
              >
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Check Results:&nbsp;
                  </span>
                  After the auction ends, results will be posted on the platform
                </ListItem>
                <ListItem
                  fontWeight={"thin"}
                  fontSize={"22px"}
                  lineHeight={"32px"}
                >
                  <span style={{ fontWeight: "bold" }}>
                    Receive Tokens:&nbsp;
                  </span>
                  Tokens will be distributed to your Custody wallet{" "}
                </ListItem>
              </UnorderedList>
            </GridItem>
          </Grid>
        </div>
      </Box>
      <Faqs />
      <Divider opacity={0.2} w={"90%"} m={"auto"} />
      <Askquestion />
    </>
  );
};

export default HowitWorks;
