import React from "react";
import Image from "next/image";
import lastfm from "@/app/assets/lastfm.svg";
import delicious from "@/app/assets/delicious.svg";
import gaming from "@/app/assets/gaming.svg";
import soundcloud from "@/app/assets/soundcloud.svg";
import codepen from "@/app/assets/codepen.svg";
import bitbucket from "@/app/assets/butbucket.svg";
import hackernews from "@/app/assets/hacker.svg";
import vk from "@/app/assets/vk.svg";
import laravel from "@/app/assets/laravel.svg";
import vue from "@/app/assets/vue.svg";
import pwa from "@/app/assets/pwa.svg";
import yahoo from "@/app/assets/yahoo.svg";

const Partner = () => {
  return (
    <div className="relative">
      <h2 className="base:text-[30px] md:text-[50px] font-thin text-center  mt-16">
        Partners & Collaboration
      </h2>
      {/* <Image src={partner} /> */}

      {/* <div className=" ">
        <Image
          src={lastfm}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[7%] absolute top-4 left-16 bg-white bg-opacity-5 rounded-full p-10"
        />
        <Image
          src={delicious}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[7%] absolute top-4 right-16 bg-white bg-opacity-5 rounded-full p-10"
        />
        <Image
          src={gaming}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[7%] absolute top-48 right-72 bg-white bg-opacity-5 rounded-full p-10"
        />
        <Image
          src={soundcloud}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[7%] absolute top-24 right-24 bg-white bg-opacity-5 rounded-full p-10"
        />
        <Image
          src={codepen}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[7%] absolute top-24 right-32 bg-white bg-opacity-5 rounded-full p-10"
        />
        <Image
          src={bitbucket}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[10%] absolute top-24 right-28 bg-white bg-opacity-5 rounded-full p-10"
        />
        <Image
          src={hackernews}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[7%] absolute top-24 right-36 bg-white bg-opacity-5 rounded-full p-10"
        />
        <Image
          src={vk}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[10%] absolute top-24 right-40 bg-white bg-opacity-5 rounded-full p-10"
        />
        <Image
          src={laravel}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[7%] absolute top-24 right-48 bg-white bg-opacity-5 rounded-full p-10"
        />
        <Image
          src={vue}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[7%] absolute top-24 right-52 bg-white bg-opacity-5 rounded-full p-10"
        />
        <Image
          src={pwa}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[7%] absolute top-24 right-60 bg-white bg-opacity-5 rounded-full p-10"
        />
        <Image
          src={yahoo}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[7%] absolute top-24 right-68 bg-white bg-opacity-5 rounded-full p-10"
        />
      </div> */}

      <div className="w-full relative h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[751px] base:hidden lg:hidden xl:block overflow-hidden">
        <img
          className="absolute top-[80%] left-[80%] w-[8vw] h-[8vw] max-w-[67px] max-h-[67px] min-w-[30px] min-h-[30px] overflow-hidden lg:left-[70%] xl:left-[48%] 2xl:left-[52%]"
          alt=""
          src="/9034833-logo-amplify-icon-1.svg"
        />
        <img
          className="absolute top-[70%] right-[12%] w-[6vw] h-[6vw] max-w-[48px] max-h-[48px] min-w-[24px] min-h-[24px] overflow-hidden"
          alt=""
          src="/2590496-logo-twitter-twitter-logo-website-icon-1.svg"
        />
        <img
          className="absolute top-[50%] right-[7%] w-[4vw] h-[4vw] max-w-[31px] max-h-[31px] min-w-[20px] min-h-[20px] overflow-hidden"
          alt=""
          src="/1916026-dot-logo-media-net-social-icon-1.svg"
        />
        <div className="absolute top-[50%] left-[40%] rounded-full bg-white bg-opacity-10 w-[15vw] h-[15vw] max-w-[155px] max-h-[155px] min-w-[80px] min-h-[80px]" />
        <div className="absolute top-[15%] left-[10%] rounded-full bg-white bg-opacity-10 w-[15vw] h-[15vw] max-w-[155px] max-h-[155px] min-w-[80px] min-h-[80px]" />
        <div className="absolute top-[50%] right-[20%] rounded-full bg-white bg-opacity-10 w-[15vw] h-[15vw] max-w-[155px] max-h-[155px] min-w-[80px] min-h-[80px]" />
        <div className="absolute top-[70%] left-[15%] rounded-full bg-white bg-opacity-10 w-[12vw] h-[12vw] max-w-[117px] max-h-[117px] min-w-[60px] min-h-[60px]" />
        <div className="absolute top-[35%] left-[25%] rounded-full bg-white bg-opacity-10 w-[16vw] h-[16vw] max-w-[159px] max-h-[159px] min-w-[80px] min-h-[80px]" />
        <div className="absolute top-[55%] left-[2%] rounded-full bg-white bg-opacity-10 w-[16vw] h-[16vw] max-w-[159px] max-h-[159px] min-w-[80px] min-h-[80px]" />
        <img
          className="absolute top-[62%] left-[5%] w-[5vw] h-[5vw] max-w-[44px] max-h-[44px] min-w-[22px] min-h-[22px] overflow-hidden"
          alt=""
          src="/9034748-logo-bitbucket-icon-1.svg"
        />
        <div className="absolute top-[7%] left-[35%] rounded-full bg-white bg-opacity-10 w-[16vw] h-[16vw] max-w-[159px] max-h-[159px] min-w-[80px] min-h-[80px]" />
        <div className="absolute top-[52%] left-[55%] rounded-full bg-white bg-opacity-10 w-[12vw] h-[12vw] max-w-[117px] max-h-[117px] min-w-[60px] min-h-[60px]" />
        <div className="absolute top-[45%] right-[5%] rounded-full bg-white bg-opacity-10 w-[12vw] h-[12vw] max-w-[117px] max-h-[117px] min-w-[60px] min-h-[60px]" />
        <div className="absolute top-[65%] right-[10%] rounded-full bg-white bg-opacity-10 w-[12vw] h-[12vw] max-w-[117px] max-h-[117px] min-w-[60px] min-h-[60px]" />
        <div className="absolute top-[23%] left-[48%] rounded-full bg-white bg-opacity-10 w-[16vw] h-[16vw] max-w-[159px] max-h-[159px] min-w-[80px] min-h-[80px]" />
        <div className="absolute top-[75%] left-[45%] rounded-full bg-white bg-opacity-10 w-[16vw] h-[16vw] max-w-[159px] max-h-[159px] min-w-[80px] min-h-[80px] lg:left-[40%] xl:left-[45%] 2xl:left-[50%]" />
        <div className="absolute top-[8%] left-[63%] rounded-full bg-white bg-opacity-10 w-[16vw] h-[16vw] max-w-[159px] max-h-[159px] min-w-[80px] min-h-[80px]" />
        <div className="absolute top-[5%] right-[5%] rounded-full bg-white bg-opacity-10 w-[16vw] h-[16vw] max-w-[159px] max-h-[159px] min-w-[80px] min-h-[80px]" />
        <div className="absolute top-[23%] right-[15%] rounded-full bg-white bg-opacity-10 w-[16vw] h-[16vw] max-w-[159px] max-h-[159px] min-w-[80px] min-h-[80px]" />
        <img
          className="absolute top-[20%] left-[12%] w-[7vw] h-[7vw] max-w-[69px] max-h-[69px] min-w-[30px] min-h-[30px] overflow-hidden"
          alt=""
          src="/9035144-logo-pwa-icon-1.svg"
        />
        <img
          className="absolute top-[57%] left-[57%] w-[5vw] h-[5vw] max-w-[41px] max-h-[41px] min-w-[20px] min-h-[20px] overflow-hidden"
          alt=""
          src="/9034982-logo-hackernews-icon-1.svg"
        />
        <img
          className="absolute top-[28%] left-[50%] w-[7vw] h-[7vw] max-w-[71px] max-h-[71px] min-w-[30px] min-h-[30px] overflow-hidden"
          alt=""
          src="/9035009-logo-laravel-icon-1.svg"
        />
        <img
          className="absolute top-[55%] left-[42%] w-[6vw] h-[6vw] max-w-[58px] max-h-[58px] min-w-[25px] min-h-[25px] overflow-hidden"
          alt=""
          src="/9034990-logo-vk-icon-1.svg"
        />
        <img
          className="absolute top-[14%] left-[38%] w-[5vw] h-[5vw] max-w-[48px] max-h-[48px] min-w-[24px] min-h-[24px] overflow-hidden object-contain"
          alt=""
          src="/9035168-logo-yahoo-icon-1.svg"
        />
        <img
          className="absolute top-[16%] left-[66%] w-[5vw] h-[5vw] max-w-[48px] max-h-[48px] min-w-[24px] min-h-[24px] overflow-hidden"
          alt=""
          src="/9035136-logo-vue-icon-1.svg"
        />
        <img
          className="absolute top-[56%] right-[22%] w-[6vw] h-[6vw] max-w-[59px] max-h-[59px] min-w-[25px] min-h-[25px] overflow-hidden"
          alt=""
          src="/9023427-codepen-logo-fill-icon-1.svg"
        />
        <img
          className="absolute top-[42%] left-[28%] w-[5vw] h-[5vw] max-w-[51px] max-h-[51px] min-w-[25px] min-h-[25px] overflow-hidden"
          alt=""
          src="/1379458-brand-last-fm-logo-social-social-network-icon-1.svg"
        />
        <img
          className="absolute top-[77%] left-[17%] w-[4vw] h-[4vw] max-w-[36px] max-h-[36px] min-w-[20px] min-h-[20px] overflow-hidden"
          alt=""
          src="/8993398-soundcloud-music-application-logo-brand-icon-1.svg"
        />
        <img
          className="absolute top-[30%] right-[18%] w-[4vw] h-[4vw] max-w-[35px] max-h-[35px] min-w-[20px] min-h-[20px] overflow-hidden"
          alt=""
          src="/1916031-delicious-logo-media-social-icon-1.svg"
        />
        <img
          className="absolute top-[12%] right-[8%] w-[5vw] h-[5vw] max-w-[43px] max-h-[43px] min-w-[22px] min-h-[22px] overflow-hidden"
          alt=""
          src="/8993322-youtube-gaming-gaming-youtube-streaming-logo-icon-1.svg"
        />
      </div>

      <div className="base:grid base:grid-cols-1 md:grid-cols-2 lg:grid lg:grid-cols-4 gap-5 items-center w-[90%] mx-auto  xl:hidden">
        <Image
          src={lastfm}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
        <Image
          src={delicious}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
        <Image
          src={gaming}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
        <Image
          src={soundcloud}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
        <Image
          src={codepen}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
        <Image
          src={bitbucket}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
        <Image
          src={hackernews}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
        <Image
          src={vk}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
        <Image
          src={laravel}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
        <Image
          src={vue}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
        <Image
          src={pwa}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
        <Image
          src={yahoo}
          alt="lastfm"
          width={500}
          height={500}
          className="w-[60%] mx-auto p-10 bg-white bg-opacity-10  rounded-full "
        />
      </div>

      <div className="flex items-center mx-auto">
        <button className="bg-[#B6BAFE] text-[#101222] rounded-full p-2 text-[15px] font-medium w-36 mx-auto mt-10">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Partner;
