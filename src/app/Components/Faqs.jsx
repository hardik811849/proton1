"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  useTabs,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const categories = [
  { id: 1, title: "General Questions", key: "GeneralQuestions" },
  { id: 2, title: "Legal", key: "LegalQuestions" },
  // {
  //   id: 3,
  //   title: "Proton Perpetual Marketplace",
  //   key: "ProtonPerpetualMarketplace",
  // },
  { id: 4, title: "Troubleshooting", key: "Troubleshooting" },
];

const faqData = {
  GeneralQuestions: {
    1: {
      question: "What is Proton Token?",
      answer:
        "Proton Token is a digital security token on the blockchain that represents fractional ownership in a portfolio of revenue-generating real estate, managed by Proton Perpetual, a Delaware-based company.",
    },
    2: {
      question: "How can I purchase Proton Tokens?",
      answer:
        "Proton Tokens can be purchased directly on the Proton Perpetual platform or through various Alternative Trading Systems (ATS) where they are listed, after completing a KYC verification process.",
    },
    3: {
      question: "What makes Proton Token unique?",
      answer:
        "Proton Token offers multi-blockchain support, compliance with multiple ERC standards, high liquidity through ATS platforms, and adherence to strict regulatory standards, making it a secure and versatile investment in real estate.",
    },
    4: {
      question:
        "How can I monitor the performance of my investment in Proton Tokens?",
      answer:
        "Investors can track their investments using the Proton Perpetual dashboard, which provides real-time data on property performance, token valuation, and dividends.",
    },
  },
  LegalQuestions: {
    1: {
      question: "What regulatory standards does Proton Token comply with?",
      answer:
        "Proton Token adheres to all applicable securities and blockchain regulations, ensuring a secure and legally compliant investment environment.",
    },
    2: {
      question: "Can I tokenize my real estate property with Proton Token?",
      answer:
        "While current tokens are linked to properties already in the Proton Perpetual portfolio, future offerings may include options for investors to tokenize their own properties.",
    },
    3: {
      question: "Are there any legal restrictions on selling Proton Tokens?",
      answer:
        "Selling Proton Tokens is subject to securities and tax laws applicable in the jurisdiction of the seller and buyer. We recommend consulting with a legal advisor for specific guidance.",
    },
    4: {
      question: "What happens if regulatory changes affect Proton Tokens?",
      answer:
        "Proton Perpetual actively monitors regulatory landscapes and will update investors on any changes that could impact their investments and the tradability of Proton Tokens.",
    },
  },
  // ProtonPerpetualMarketplace: {
  //   1: {
  //     question: "What is Proton Perpetual Marketplace?",
  //     answer:
  //       "Proton Perpetual Marketplace is an online trading platform where Proton Tokens can be bought and sold. It provides a secure, user-friendly environment for real estate token transactions.",
  //   },
  //   2: {
  //     question: "How do I list Proton Tokens on Proton Perpetual Marketplace?",
  //     answer:
  //       "To list Proton Tokens on Proton Perpetual Marketplace, users must first register an account, complete KYC verification, and follow the listing guidelines provided on the platform.",
  //   },
  //   3: {
  //     question:
  //       "Can I trade other cryptocurrencies on Proton Perpetual Marketplace?",
  //     answer:
  //       "No, Proton Perpetual Marketplace supports trading of Proton Tokens with stablecoins, allowing for liquidity.",
  //   },
  //   4: {
  //     question:
  //       "What are the fees associated with using Proton Perpetual Marketplace?",
  //     answer:
  //       "Fees for trading on Proton Perpetual Marketplace vary depending on the type of transaction and the volume traded. Detailed fee schedules are available on the marketplace website.",
  //   },
  // },
  Troubleshooting: {
    1: {
      question: "What should I do if I encounter an issue with a transaction?",
      answer:
        "If you experience a problem with a transaction on the Proton Perpetual platform or Proton Perpetual Marketplace, contact customer support immediately with details of the transaction for assistance.",
    },
    2: {
      question: "How can I recover my account if I lose access?",
      answer:
        "To recover your account, use the password recovery tools provided on the platform. If further assistance is needed, contact customer support with your account details and identification.",
    },
    3: {
      question: "Why isn't my transaction appearing in my dashboard?",
      answer:
        "If a transaction isn't showing up in your dashboard, it may be due to a delay in blockchain confirmation. Wait a few minutes, and if the issue persists, contact support.",
    },
    4: {
      question: "How do I update my KYC information on the platform?",
      answer:
        "To update your KYC information, log in to your account on the platform, navigate to account settings, and follow the prompts for KYC update. Ensure you have all required documents handy.",
    },
  },
};

const Faqs = () => {
  return (
    <div>
      <h2 className="base:text-[30px] md:text-[50px] font-thin text-center  mt-32 mb-16">
        Frequently Asked Questions
      </h2>

      <Box pb={"5rem"} mt={"5rem"}>
        <Tabs
          isFitted
          variant="enclosed"
          w={{
            base: "95%",
            md: "90%",
            lg: "90%",
            xl: "90%",
            "2xl": "50%",
          }}
          m={"auto"}
        >
          <TabList
            m="auto"
            overflowY="hidden"
            overflowX={{ base: "auto", md: "hidden" }}
          >
            {categories.map((category) => (
              <Tab
                _selected={{
                  color: "#FF5800",
                  backgroundColor: "rgba(255, 243, 237, 0.1)",
                }}
                fontWeight={"semibold"}
                key={category.id}
                _hover={{
                  backgroundColor: "rgba(255, 243, 237, 0.1)",
                }}
                fontSize={{
                  base: "14px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                  xl: "18px",
                  "2xl": "18px",
                }}
                borderTopRadius={"10px"}
                mr={10}
              >
                {category.title}
              </Tab>
            ))}
          </TabList>

          <TabPanels mt={10}>
            {categories.map((category) => (
              <TabPanel key={category.id}>
                <Accordion allowToggle>
                  {Object.values(faqData[category.key]).map((faq, index) => (
                    <AccordionItem
                      key={index}
                      bg={"rgba(255,255,255,0.05)"}
                      rounded={"2xl"}
                      border={"none"}
                      p={5}
                      w={"80%"}
                      m={"auto"}
                      mb={2}
                    >
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            {faq.question}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default Faqs;
