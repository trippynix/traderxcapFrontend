import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import landingPageVideo from "../assets/videos/landingPage.mp4";
import landingPageVideo3 from "../assets/images/landingPage3.png";
import table from "../assets/images/table.png";
import { Link } from "react-router-dom";
import homePageLogo from "../assets/images/logo.svg";
import { FaLocationArrow } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFileSpreadsheet } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bullish from "../assets/images/dashboard/black/bullish.svg";
import dataReport from "../assets/images/dashboard/black/data-report.svg";
import assetManagement from "../assets/images/dashboard/black/asset-management.svg";

export default function Home() {
  return (
    <>
      {/* SECTION 1: Landing Video Section */}
      <Header />
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={landingPageVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full my-3">
          <div className="flex flex-col">
            <p className="text-2xl md:text-2xl lg:text-4xl font-bold">
              Make Smarter Trades
            </p>
            <p className="text-2xl md:text-2xl lg:text-4xl font-bold">
              Every Day
            </p>
          </div>
          <p className="font-extralight text-[10px] md:text-sm lg:text-base my-3 mx-5">
            Unlock real-time insights from Options Data & Momentum Analysis for
            US Stocks and ETFs.
          </p>
          <Link
            to="/pricing"
            className="flex items-center gap-2 bg-white text-black font-semibold py-2 px-4 rounded-[2vw] shadow hover:bg-violet-800 hover:text-white active:bg-violet-800 active:text-white transition-colors duration-200 my-3"
          >
            Start Exploring
            <FaLocationArrow className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </Link>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mt-[60px]">
            <div className="flex">
              <FaChartBar className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 me-2" />
              <p className="font-bold text-[8px] sm:text-sm md:text-base">
                Intraday Picks
              </p>
            </div>
            <div className="flex">
              <AiOutlineFundProjectionScreen className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 me-2" />
              <p className="font-bold text-[8px] sm:text-sm md:text-base">
                Swing Setups
              </p>
            </div>
            <div className="flex">
              <BsFileSpreadsheet className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 me-2" />
              <p className="font-bold text-[8px] sm:text-sm md:text-base">
                OI Visuals
              </p>
            </div>
            <div className="flex">
              <FaMessage className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 me-2" />
              <p className="font-bold text-[8px] sm:text-sm md:text-base">
                Community (Coming Soon)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Another Fullscreen Background Video Section */}
      <div className="relative w-full overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full object-fill z-0"
          src={landingPageVideo3} // <-- Replace with actual path
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-around w-full mb-[20px] md:my-[35px] lg:my-[100px]">
            <div className="flex md:flex-col lg:flex-col my-[20px] md:my-0 lg:my-0 text-left">
              <p className="text-sm md:text-xl lg:text-4xl font-bold">
                Intraday Picks&nbsp;
              </p>
              <p className="text-sm md:text-xl lg:text-4xl font-bold">
                (Market Analysis)
              </p>
            </div>
            <img
              src={table}
              className="w-2xs h-2xs md:w-md md:h-md lg:w-lg lg:h-lg"
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-around w-full gap-6 md:gap-12 ps-4 md:ps-12 lg:ps-24 py-8 mb-[20px] md:mb-[35px] lg:mb-[100px]">
            <img
              src={table}
              className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
            />
            <div className="flex flex-col text-left mb-[20px] md:my-0 lg:my-0">
              <p className="text-sm md:text-xl lg:text-4xl font-bold">
                Swing Setups
              </p>
              <p className="text-sm md:text-xl lg:text-4xl font-bold">
                (EMA Crossover,
              </p>
              <p className="text-sm md:text-xl lg:text-4xl font-bold">
                Upside or Downside momentum)
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-around w-full mb-[20px] md:mb-[35px] lg:mb-[100px]">
            <div className="mb-[20px] md:my-0 lg:my-0 text-left">
              <p className="text-sm md:text-xl lg:text-4xl font-bold">
                OI Visuals
              </p>
            </div>
            <img
              src={table}
              className="w-2xs h-2xs md:w-md md:h-md lg:w-lg lg:h-lg"
            />
          </div>
          <p className="text-sm md:text-xl lg:text-4xl font-bold mb-[20px] md:mb-[35px] lg:mb-[100px]">
            Community Coming Soon!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
