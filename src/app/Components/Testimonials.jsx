import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
// import Autoplay from "embla-carousel-autoplay";

// export function Example() {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 2000,
//         }),
//       ]}
//     ></Carousel>
//   );
// }

const Testimonials = () => {
  return (
    <div>
      <h2 className="text-[50px] font-thin text-center mb-[17px] mt-16">
        Testimonials
      </h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222]   p-14 ">
              <h2 className="text-[30px] font-thin">Varun Sharma</h2>
              <p className="font-thin text-[15px] leading-9">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222]  bg-white bg-opacity-10  p-14 ">
              <h2 className="text-[30px] font-thin">Nidhi M</h2>
              <p className="font-thin text-[15px] leading-9">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222]   p-14 ">
              <h2 className="text-[30px] font-thin">Varun Sharma</h2>
              <p className="font-thin text-[15px] leading-9">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="border-2 border-[#B6BAFE] rounded-3xl border-opacity-25 bg-[#101222]  bg-white bg-opacity-10  p-14 ">
              <h2 className="text-[30px] font-thin">Nidhi M</h2>
              <p className="font-thin text-[15px] leading-9">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonials;
