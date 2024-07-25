"use client";
import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import PropertiesCarousel from "./PropertiesCarousel";

const categories = [
  { id: 1, title: "Commercial Real estate" },
  { id: 2, title: "Hotels" },
  { id: 3, title: "Multi-Family Apartments" },
];

const OurProperties = () => {
  return (
    <div className="bg-white bg-opacity-5 pt-5">
      <h2 className="base:text-[30px] md:text-[50px] font-thin text-center  mt-16 pb-10">
        Sample Portfolio
      </h2>

      <Box pb={"3rem"}>
        <Tabs
          isFitted
          variant="enclosed"
          w={{
            base: "95%",
            md: "90%",
            lg: "90%",
            xl: "90%",
            "2xl": "80%",
          }}
          m={"auto"}
        >
          <TabList
            m={"auto"}
            overflowY={"hidden"}
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
          {/* <TabIndicator
            mx="auto"
            mt="-1.5px"
            height="2px"
            bg="#FF5800"
            borderRadius="1px"
            overflowY={"hidden"}
            overflowX={{ base: "hidden", md: "hidden" }}
          /> */}
          <TabPanels mt={10}>
            <PropertiesCarousel />
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default OurProperties;
