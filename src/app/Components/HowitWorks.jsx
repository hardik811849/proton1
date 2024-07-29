import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";

const categories = [
  { id: 1, title: "Getting Started", key: "GettingStarted" },
  { id: 2, title: "Offerings", key: "Offerings" },
  { id: 4, title: "Portfolio", key: "Portfolio" },
  { id: 4, title: "Tokenizatiion", key: "Tokenizatiion" },
  { id: 4, title: "Auctions Rules", key: "AuctionsRules" },
];

const HowitWorks = () => {
  return (
    <div id="how_it_works">
      <h2 className="base:text-[30px] md:text-[50px] font-thin text-center  mt-16 mb-32">
        How it Works
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
            "2xl": "70%",
          }}
          m={"auto"}
        >
          <TabList
            m="auto"
            overflowY="hidden"
            overflowX={{ base: "auto", md: "hidden" }}
            position="relative"
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
            {/* {categories.map((category) => ( */}
            <TabPanel bg={"rgba(255,255,255,0.05)"} rounded={"xl"} p={10}>
              <Text mb={6} fontWeight={"thin"}>
                Proton Perpetual is a tokenized holding company with a robust
                real estate portfolio, offering investors an opportunity to
                explore and initiate an investment. By visiting the Proton
                Perpetual website, investors can discover the advantages of this
                unique investment opportunity. To invest, simply click the
                Invest Now button, which will seamlessly redirect you to Proton
                Perpetuals ATS (Alternative Trading System) partner, a SEC and
                FINRA-licensed platform.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                The registration process involves completing the onboarding
                steps provided by the ATS partner, allowing you to set up and
                activate your account. As part of the compliance and
                verification procedures, you will need to fulfill the necessary
                Know Your Customer (KYC) and Anti-Money Laundering (AML)
                requirements to authenticate your identity and investment
                eligibility. Once the verification process is complete, you will
                be whitelisted as an approved investor, enabling you to
                participate in Proton Perpetuals offerings through the ATS
                platform.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                With the whitelisting process finalized, you are now ready to
                engage in the investment opportunity. Both Proton Perpetual and
                the ATS partner are committed to providing ongoing assistance
                throughout your investment journey, ensuring a seamless and
                secure experience.
              </Text>
            </TabPanel>
            <TabPanel bg={"rgba(255,255,255,0.05)"} rounded={"xl"} p={10}>
              <Text mb={6} fontWeight={"thin"}>
                Proton Perpetual is a tokenized holding company with a robust
                real estate portfolio, offering investors an opportunity to
                explore and initiate an investment. By visiting the Proton
                Perpetual website, investors can discover the advantages of this
                unique investment opportunity. To invest, simply click the
                Invest Now button, which will seamlessly redirect you to Proton
                Perpetuals ATS (Alternative Trading System) partner, a SEC and
                FINRA-licensed platform.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                The registration process involves completing the onboarding
                steps provided by the ATS partner, allowing you to set up and
                activate your account. As part of the compliance and
                verification procedures, you will need to fulfill the necessary
                Know Your Customer (KYC) and Anti-Money Laundering (AML)
                requirements to authenticate your identity and investment
                eligibility. Once the verification process is complete, you will
                be whitelisted as an approved investor, enabling you to
                participate in Proton Perpetuals offerings through the ATS
                platform.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                With the whitelisting process finalized, you are now ready to
                engage in the investment opportunity. Both Proton Perpetual and
                the ATS partner are committed to providing ongoing assistance
                throughout your investment journey, ensuring a seamless and
                secure experience.
              </Text>
            </TabPanel>
            <TabPanel bg={"rgba(255,255,255,0.05)"} rounded={"xl"} p={10}>
              <Text mb={6} fontWeight={"thin"}>
                Proton Perpetuals portfolio is a strategically curated
                collection of high-value real estate assets, structured as
                tokenized company stock. Each Proton token represents a
                fractional ownership stake in the entire Proton Perpetual
                portfolio, enabling investors to share in the performance and
                growth of the assets.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                The portfolio is diversified across various real estate sectors,
                including commercial properties, multi-family residences, and
                strategically located hotels. The commercial investments include
                premium office buildings, retail outlets, and industrial
                properties selected to maximize occupancy and rental yields. The
                multi-family residences and hotels are chosen for their ability
                to consistently demand high occupancy and generate stable income
                streams.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                Geographically, the real estate assets are spread across
                economically resilient regions, minimizing risk and enhancing
                the potential for capital appreciation. Proton Perpetual employs
                value-enhancing strategies, such as targeted property
                improvements and the adoption of advanced management practices,
                to boost asset performance and attract high-quality tenants.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                Transparency is a key focus, with regular independent property
                assessments and readily available performance data, including
                occupancy rates and revenue figures. The tokenization of the
                company stock allows for fractional sales and purchases,
                offering investors greater liquidity and flexibility to adjust
                their investment positions as needed.
              </Text>
            </TabPanel>

            <TabPanel bg={"rgba(255,255,255,0.05)"} rounded={"xl"} p={10}>
              <Text mb={6} fontWeight={"thin"}>
                Protons tokenization process is meticulously designed to ensure
                a secure and efficient transition of assets onto the blockchain.
                The process begins with the strategic acquisition of assets that
                have demonstrated robust financial performance and substantial
                growth potential, aligning with Protons high standards for
                tokenization.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                Next, a comprehensive due diligence process is conducted to
                validate the quality of each asset. This includes an in-depth
                analysis of financial health, market positioning, and potential
                risks to ensure that only the most viable assets are selected
                for tokenization.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                The digital security tokens representing fractional ownership
                are then minted using the ERC 3643 digital security token
                standards on the blockchain. This process ensures that each
                token provides a secure and transparent representation of
                ownership.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                To enhance the availability and liquidity of the tokens, they
                are integrated into multiple Automated Trading Systems (ATS).
                This setup supports an active secondary market, facilitating the
                buying, selling, and trading of tokens across different trading
                platforms. Initially, the Proton tokens will be listed on three
                ATS platforms, the names of which will be announced soon.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                The Proton portfolio is designed to generate an 8% yield per
                annum, paid out monthly, ensuring consistent returns for
                investors and increasing the attractiveness of the Proton
                tokens.
              </Text>
            </TabPanel>
            <TabPanel bg={"rgba(255,255,255,0.05)"} rounded={"xl"} p={10}>
              <Text mb={6} fontWeight={"thin"}>
                The Proton Auction Platform offers a straightforward process for
                bidding on Proton tokens. To get started, you will need to first
                register and complete the necessary KYC (Know Your Customer)
                requirements to activate your account.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                The auctions run on a weekly schedule, with daily auctions on
                weekdays and special Super Rounds on weekends. To participate,
                simply log in and place your bids on the available tokens during
                the weekday auctions. Keep an eye on token availability and
                oversubscription levels, as these can impact potential bonuses.
                The Super Rounds on weekends provide an opportunity to bid on
                protocol tokens with lucrative bonus incentives, so be sure to
                participate in these as well.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                When placing your bids, remember to adhere to the auction rules.
                Bids must be submitted during the scheduled auction times, and
                you will need to stay within any set minimum and maximum bid
                limits. Additionally, familiarize yourself with the criteria for
                earning bonuses, as these can enhance your returns.
              </Text>
              <Text mb={6} fontWeight={"thin"}>
                After the auction ends, the results will be posted on the
                platform, and your successfully acquired tokens will be
                distributed to your Custody wallet. By following this
                step-by-step guide, you will be well on your way to
                participating in the Proton token auctions.
              </Text>
            </TabPanel>
            {/* ))} */}
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default HowitWorks;
