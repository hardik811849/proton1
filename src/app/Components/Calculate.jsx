"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import {
  checkBalance,
  getProtonCalulate,
  investNow,
} from "../blockchain/commonFunction";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import { ethers } from "ethers";

const Calculate = () => {
  const [usdAmount, setUsdAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState();
  const [protonAmount, setProtonAmount] = useState("");
  //   const protonValue = 10;
  const [endTime, setEndTime] = useState(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

  const [selectedOption, setSelectedOption] = useState("Daily");
  const [dates, setDates] = useState([]);
  const [advance, setAdvance] = useState("false");

  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const datesArray = [];
      if (selectedOption === "Daily") {
        for (let i = 0; i < 7; i++) {
          const date = new Date();
          date.setDate(today.getDate() + i);
          datesArray.push({
            day: date.getDate(),
            month: date.toLocaleString("default", { month: "long" }),
            year: date.getFullYear(),
            isToday: i === 0,
          });
        }
      } else if (selectedOption === "Monthly") {
        for (let i = 0; i < 7; i++) {
          const date = new Date();
          date.setMonth(today.getMonth() + i);
          date.setDate(today.getDate());
          datesArray.push({
            day: date.getDate(),
            month: date.toLocaleString("default", { month: "long" }),
            year: date.getFullYear(),
            isToday: i === 0,
          });
        }
      }
      setDates(datesArray);
    };
    generateDates();
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAdvanced = () => {
    setAdvance(!advance);
  };
  const handleUsdChange = async (event) => {
    const value = event.target.value;
    const protonValue = await getProtonCalulate(value);
    setUsdAmount(value);
    if (value > 1) {
      setProtonAmount(protonValue);
    } else {
      setProtonAmount(value);
    }
    // setProtonAmount(value * protonValue);
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(endTime - Date.now());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [endTime]);

  const handleSubmit = async () => {
    let getInvest = await investNow(usdAmount);
  };

  const getBalance = async () => {
    let check = await checkBalance();
    let val = Number(ethers.formatEther(check)).toFixed(2);
    setTotalAmount(val.toString());
    if (check !== undefined || check !== null) {
      setTotalAmount(val.toString());
    }
  };

  useEffect(() => {
    (async () => {
      getBalance();
    })();
  }, []);

  // useEffect(() => {
  //   console.log("++++>", totalAmount);
  // }, []);

  const formatTimeLeft = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return (
      <div className="text-center w-[] grid base:grid-cols-2 md:grid-cols-7 base:gap-4 md:gap-0 items-center">
        <span className="time-part md:text-[18px] 2xl:text-[23px] font-light bg-white bg-opacity-5 p-3 text-center rounded-xl text-[#FF5800]">
          {days}d
        </span>{" "}
        <span className="base:hidden md:block">:</span>
        <span className="time-part md:text-[18px] 2xl:text-[23px] font-light bg-white bg-opacity-5 p-3 text-center rounded-xl text-[#FF5800]">
          {hours}h
        </span>
        <span className="base:hidden md:block">:</span>
        <span className="time-part md:text-[18px] 2xl:text-[23px] font-light bg-white bg-opacity-5 p-3 text-center rounded-xl text-[#FF5800]">
          {minutes}m
        </span>
        <span className="base:hidden md:block">:</span>
        <span className="time-part md:text-[18px] 2xl:text-[23px] font-light bg-white bg-opacity-5 p-3 text-center rounded-xl text-[#FF5800]">
          {seconds}s
        </span>
      </div>
    );
  };
  return (
    <div className="base:p-[20px] md:p-[50px] xl:p-[100px] 2xl:p-[180px]  bg-white bg-opacity-5">
      <div className="flex base:flex-col xl:flex-row gap-4">
        <div className="grid base:grid-cols-1 md:grid-cols-2 gap-6 xl:w-[60%] 2xl:w-[60%]">
          <div className=" p-[45px] pr-[50px] rounded-3xl bg-white bg-opacity-5">
            <h2 className="opacity-50 text-[25px] font-normal">
              Proton Launch Price
            </h2>
            <h2 className="text-[30px]">$1.00</h2>
          </div>
          <div className=" p-[45px] pr-[50px] rounded-3xl bg-white bg-opacity-5">
            <h2 className="opacity-50 text-[25px] font-normal">
              Current Proton face Value
            </h2>
            <h2 className="text-[30px]">$1.00</h2>
          </div>
          <div className=" p-[45px] pr-[50px] rounded-3xl bg-white bg-opacity-5">
            <h2 className="opacity-50 text-[25px] font-normal">
              Proton ROI Since Launch
            </h2>
            <h2 className="text-[30px]">$0.00</h2>
          </div>
          <div className=" p-[45px] pr-[50px] rounded-3xl bg-white bg-opacity-5">
            <h2 className="opacity-50 text-[25px] font-normal">
              Total Investment to Date
            </h2>
            <h2 className="text-[30px]">
              ${totalAmount < 0 ? 0 : totalAmount}
            </h2>
          </div>
          <div className="flex base:flex-col md:flex-row gap-4 items-center p-[10px]  rounded-3xl base:col-span-1 md:col-span-2 bg-white bg-opacity-5">
            <div className="base:w-[80%] md:w-[20%] xl:w-[20%] bg-white bg-opacity-5 items-center  rounded-xl">
              <p className="p-[15px] text-center">Round 1</p>
              <hr className="text-[#d4d4d4] opacity-35" />
              <p className="p-[15px] text-center">Day 1</p>
            </div>
            <div>
              <h2 className="text-[25px]">Live in :</h2>
              <div className="timer">{formatTimeLeft(timeLeft)}</div>
            </div>
          </div>
        </div>
        <div className=" bg-[#F2F2F2] rounded-3xl p-[40px] xl:w-[40%] 2xl:w-[40%]">
          <div className="mb-5">
            <div className="flex justify-between text-black">
              <p>Send</p>
              <p>USD</p>
            </div>
            <div className="flex">
              {/* <select className=" z-10 p-6 rounded-l-xl w-20 border-t-2 border-l-2 border-b-2 border-[#d4d4d4] bg-white text-black  cursor-pointer focus:outline-none">
                <option>Ethereum</option>
              </select> */}
              <input
                type="number"
                name="amount"
                id="amount"
                inputMode="numeric"
                className="send text-[20px] p-6 border-2 border-[#d4d4d4]  rounded-r-xl w-full focus:outline-none text-right text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="0.0"
                value={usdAmount}
                onChange={handleUsdChange}
                style={{ WebkitTextFillColor: "black" }}
              />
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between text-black">
              <p>Recieve</p>
              <p>Proton</p>
            </div>
            <div className="flex">
              <div className="w-10% border-t-2 border-l-2 border-b-2 rounded-l-xl border-[#d4d4d4] p-1 bg-white">
                <Image
                  src={"/asset-232x8-1@2x.png"}
                  width={100}
                  height={100}
                  alt="eth"
                  className="w-[90%] "
                />
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                inputMode="numeric"
                value={protonAmount}
                readOnly
                className="amount text-[20px] p-4 border-2 border-[#d4d4d4] rounded-r-xl w-full focus:outline-none  text-right text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="0.0"
                style={{ WebkitTextFillColor: "black" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-black">
              <p>Total Supply</p>
            </div>
            <input
              type="number"
              name="amount"
              id="amount"
              inputMode="numeric"
              className="p-4 border-2 border-[#d4d4d4] rounded-xl w-full focus:outline-none  text-right text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="10 Million Proton"
              style={{ WebkitTextFillColor: "black" }}
              readOnly
            />
            <div className="flex justify-between text-[#FF5800]">
              <p>Bonus : 3x on Oversubscription</p>
            </div>
          </div>
          {/* <Link
            // href={"https://www.finix196.com/site/invest"}
            target="_blank"
          > */}
          <button
            onClick={() => handleSubmit()}
            className="bg-[#FF5800] rounded-xl p-7 text-white  text-[20px] mt-10 font-medium w-full"
          >
            Invest Now
          </button>
          {/* </Link> */}
        </div>
      </div>

      <div className="flex w-full items-center mt-[100px]">
        <hr className="flex w-full border-t-[#ff5800] " />
        <button
          onClick={handleAdvanced}
          className="lg:w-[50%] xl:w-[35%] 2xl:w-[30%] flex items-center justify-center gap-4 bg-[#FF5800] rounded-full p-2 ml-4 mr-4"
        >
          Advanced View {advance ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
        <hr className="flex w-full border-t-[#ff5800]  " />
      </div>

      <div className={`${advance ? "hidden" : "block"}`}>
        <div className="bg-white bg-opacity-5 flex base:flex-col lg:flex-row items-center justify-center gap-10 p-[50px] mt-20 rounded-3xl ">
          <div>
            <p className="opacity-50 text-center">Today’s Proton Supply</p>
            <p className="text-[40px] text-[#FF5800] text-center">2.00M</p>
          </div>
          <hr className="border-r-2 border-r-white border-opacity-5  h-10 base:hidden lg:block" />
          <div>
            <p className="opacity-50 text-center">Today’s Total Investment</p>
            <p className="text-[40px] text-[#FF5800] text-center">
              ${totalAmount < 0 ? 0 : totalAmount}
            </p>
          </div>
          <hr className="border-r-2 border-r-white border-opacity-5  h-10 base:hidden lg:block" />
          <div>
            <p className="opacity-50 text-center">Current Auction cost</p>
            <p className="text-[40px] text-[#FF5800] text-center">$0</p>
          </div>
          <hr className="border-r-2 border-r-white border-opacity-5  h-10 base:hidden lg:block" />
          <div>
            <p className="opacity-50 text-center">
              Your total investment Today
            </p>
            <p className="text-[40px] text-[#FF5800] text-center">$0</p>
          </div>
          <hr className="border-r-2 border-r-white border-opacity-5  h-10 base:hidden lg:block" />
          <div>
            <p className="opacity-50 text-center">
              Proton | Your Potential ROI
            </p>
            <p className="text-[40px] text-[#FF5800] text-center">$0</p>
          </div>
        </div>
        <div className="flex  justify-end text-[14px] opacity-50">
          *Every 24c hours data will Update
        </div>

        <div className="bg-white bg-opacity-5 rounded-3xl p-5 mt-10">
          <div className="flex justify-end">
            <select
              className="bg-gray-900 pr-4 pl-4 pt-2 pb-2 rounded-full"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-4">
            {dates.map((date, index) => (
              <div
                key={index}
                className={`rounded-xl text-center p-5 ${
                  date.isToday
                    ? "bg-[#FF5800] text-white"
                    : "bg-white bg-opacity-5"
                }`}
              >
                <h2 className="text-[25px] font-medium">{date.day}</h2>
                <p>{date.month}</p>
                <p>{date.year}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="w-[60%] flex items-center justify-center">
          <div className="bg-[#FF5800] rounded-xl text-center p-5">
            <h2 className="text-[55px] font-medium">22</h2>
            <p>July</p>
            <p>2024</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Calculate;
