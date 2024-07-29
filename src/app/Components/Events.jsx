import eve1 from "@/app/assets/eve1.png";
import eve2 from "@/app/assets/eve2.png";
import eve3 from "@/app/assets/eve3.png";
import eve4 from "@/app/assets/eve4.png";
import eve5 from "@/app/assets/eve5.png";
import eve6 from "@/app/assets/eve6.png";
import eve7 from "@/app/assets/eve7.png";
import eve8 from "@/app/assets/eve8.png";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const events = [
  {
    location: "Houston, USA",
    date: "August, 2024",
    img: eve1,
  },
  {
    location: "London, UK",
    date: "Sep 2024",
    img: eve2,
  },
  {
    location: "Dubai, UAE",
    date: "Sep 2024",
    img: eve3,
  },
  {
    location: "Miami, USA",
    date: "Oct 2024",
    img: eve4,
  },
  {
    location: "Singapore",
    date: "Nov 2024",
    img: eve5,
  },
  {
    location: "Hong Kong, China",
    date: "Nov 2024",
    img: eve6,
  },
  {
    location: "San Francisco, USA",
    date: "Dec 2024",
    img: eve7,
  },
  {
    location: "New York, USA",
    date: "Jan 2025",
    img: eve8,
  },
];

const Events = () => {
  return (
    <div className="mt-40">
      <h2 className="base:text-[30px] md:text-[50px] font-thin text-center  mt-16 mb-32">
        Events
      </h2>

      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        w={{
          base: "90%",
          md: "90%",
          lg: "90%",
          xl: "90%",
          "2xl": "80%",
        }}
        m={"auto"}
        gap={6}
        mt={"50px"}
      >
        {events.map((event, index) => (
          <GridItem
            bg={"rgba(255,255,255,0.05)"}
            rounded={"2xl"}
            p={5}
            key={index}
          >
            <Image
              src={event.img}
              alt="event image"
              width={300}
              height={300}
              className="w-[100%]"
            />
            <Text fontSize={"20px"} mt={"12px"}>
              Blockchain summit
            </Text>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              bg={"rgba(255,255,255,0.05)"}
              p={"17px"}
              rounded={"full"}
              mt={"17px"}
            >
              <Box display={"flex"} alignItems={"center"} gap={3}>
                <FaLocationDot color="#ff5800" />
                <Text>{event.location}</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={3}>
                <CalendarDays color="#ff5800" />
                <Text>{event.date}</Text>
              </Box>
            </Box>
            {/* <Button
              bg={"rgba(255,255,255,0.05)"}
              w={"50%"}
              mt={"30px"}
              variant={"unstyled"}
              rounded={"full"}
              color={"#ff5800"}
            >
              Join Event
            </Button> */}
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Events;
