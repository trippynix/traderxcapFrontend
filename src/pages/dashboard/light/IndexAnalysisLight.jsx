import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "../light/DashboardHeaderLight";
import { IoIosArrowDown } from "react-icons/io";
import SliderDark from "../IndexAnlaysisComponents/SliderDark";
import OIChart from "../IndexAnlaysisComponents/OIChart";
import OIChangeChart from "../IndexAnlaysisComponents/OIChangeChart";
import OIChangeBarGraph from "../IndexAnlaysisComponents/OIChangeBarGraph";
import OIPieChart from "../IndexAnlaysisComponents/OIPieChart";

export default function IndexAnalysisLight() {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthCheck();
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate("/not-auth");
      }
    }
  }, [isAuthenticated, loading, navigate]);
  const [isEquityOptionsOpen, setIsEquityOptionsOpen] = useState(false);
  const [isETFOptionsOpen, setIsETFOptionsOpen] = useState(false);
  // Refs for scrolling
  const equityOptionsRef = useRef(null);
  const etfOptionsRef = useRef(null);

  // Equity selection
  const [isEquitySelectionOpen, setIsEquitySelectionOpen] = useState(false);
  const [selectedEquity, setSelectedEquity] = useState("NVDA");
  const equities = ["NVDA", "AAPL", "AMZN", "PLTR"];

  const toggleEquityDropdown = () =>
    setIsEquitySelectionOpen(!isEquitySelectionOpen);

  const handleEquitySelect = (eq) => {
    setSelectedEquity(eq);
    setIsEquitySelectionOpen(false);
  };

  // Equity Expiry Selection
  const [isEquityExpirySelectionOpen, setIsEquityExpirySelectionOpen] =
    useState(false);
  const [selectedEquityExpiry, setSelectedEquityExpiry] = useState("April 3rd");
  const equityExpiries = [
    "April 3rd",
    "April 10th",
    "April 14th",
    "April 17th",
  ];

  const toggleEquityExpiryDropdown = () =>
    setIsEquityExpirySelectionOpen(!isEquityExpirySelectionOpen);

  const handleEquityExpirySelect = (eq) => {
    setSelectedEquityExpiry(eq);
    setIsEquityExpirySelectionOpen(false);
  };

  // ETFs Selection
  const [isETFSelectionOpen, setIsETFSelectionOpen] = useState(false);
  const [selectedETF, setSelectedETF] = useState("SPY");
  const etfs = ["SPY", "QQQ"];

  const toggleETFDropdown = () => setIsETFSelectionOpen(!isETFSelectionOpen);

  const handleETFSelect = (eq) => {
    setSelectedETF(eq);
    setIsETFSelectionOpen(false);
  };

  // ETFs expiry select
  const [isETFExpirySelectionOpen, setIsETFExpirySelectionOpen] =
    useState(false);
  const [selectedETFExpiry, setSelectedETFExpiry] = useState("April 3rd");
  const etfExpiries = ["April 3rd", "April 10th", "April 14th", "April 17th"];
  const toggleETFExpiryDropdown = () =>
    setIsETFExpirySelectionOpen(!isETFExpirySelectionOpen);

  const handleETFExpirySelect = (eq) => {
    setSelectedETFExpiry(eq);
    setIsETFExpirySelectionOpen(false);
  };

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <Sidebar tab={"Index Analysis"} />
        <div className="flex flex-col w-full bg-white">
          <DashboardHeaderLight
            title={"Option Analysis"}
            subTitle={
              "Analyze and understand option chain to make better trading decisions."
            }
          />
          <hr className="border-gray-600 my-5 mx-5" />

          {/* Top Dropdown Section */}
          <div className="flex flex-row justify-around items-center mt-[12%] mb-[35%]">
            {/* Equity Options Button */}
            <div
              className="relative"
              onMouseEnter={() => setIsEquityOptionsOpen(true)}
              onMouseLeave={() => setIsEquityOptionsOpen(false)}
            >
              <button
                type="button"
                className="text-black text-[23px] hover:cursor-pointer"
                onClick={() => handleScroll(equityOptionsRef)}
              >
                Equity Options
              </button>
              {isEquityOptionsOpen && (
                <div className="absolute w-full mt-1 bg-[radial-gradient(circle,_rgba(133,119,255,1)_0%,_rgba(76,76,132,1)_100%)] text-white transition-opacity duration-100 ease-in-out z-10">
                  {["NVDA", "AAPL", "AMZN", "PLTR"].map((item) => (
                    <button
                      key={item}
                      href="#"
                      className="block px-4 py-2 font-bold hover:bg-gray-700 w-full"
                      onClick={() => {
                        handleScroll(equityOptionsRef);
                        setSelectedEquity(item);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ETFs Options Button */}
            <div
              className="relative"
              onMouseEnter={() => setIsETFOptionsOpen(true)}
              onMouseLeave={() => setIsETFOptionsOpen(false)}
            >
              <button
                type="button"
                className="text-black text-[23px] hover:cursor-pointer"
                onClick={() => handleScroll(etfOptionsRef)}
              >
                ETFs Options
              </button>
              {isETFOptionsOpen && (
                <div className="absolute w-full mt-1 bg-[radial-gradient(circle,_rgba(133,119,255,1)_0%,_rgba(76,76,132,1)_100%)] text-white transition-opacity duration-100 ease-in-out z-10">
                  {["SPY", "QQQ"].map((item) => (
                    <button
                      key={item}
                      href="#"
                      className="block px-4 py-2 font-bold w-full hover:bg-gray-700"
                      onClick={() => {
                        handleScroll(etfOptionsRef);
                        setSelectedETF(item);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* === Equity Options Section === */}
          <div ref={equityOptionsRef} className="text-black">
            <h4 className="text-center my-10 text-xl font-semibold">
              Equity Options
            </h4>
            <div className="flex flex-row justify-around bg-[#212429] border border-gray-600 p-4 rounded-md mx-4">
              <div className="flex flex-col space-y-10">
                {/* Equity Dropdown */}
                <div className="flex flex-row items-center space-x-4">
                  <p className="mr-5">Equity:</p>
                  <div className="relative inline-block">
                    <button
                      onClick={toggleEquityDropdown}
                      className="py-1 px-3 border border-white text-white bg-black flex items-center rounded hover:cursor-pointer"
                    >
                      {selectedEquity} <IoIosArrowDown className="ml-2" />
                    </button>

                    {isEquitySelectionOpen && (
                      <ul className="absolute mt-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded z-20">
                        {equities.map((eq) => (
                          <li key={eq}>
                            <button
                              href="#"
                              onClick={() => handleEquitySelect(eq)}
                              className="block px-4 py-2 font-bold hover:bg-gray-700"
                            >
                              {eq}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Expiry Dropdown */}
                <div className="flex flex-row items-center space-x-4">
                  <p className="mr-5">Expiry:</p>
                  <div className="relative inline-block">
                    <button
                      onClick={toggleEquityExpiryDropdown}
                      className="py-1 px-3 border border-white text-white bg-black flex items-center rounded hover:cursor-pointer"
                    >
                      {selectedEquityExpiry} <IoIosArrowDown className="ml-2" />
                    </button>

                    {isEquityExpirySelectionOpen && (
                      <ul className="absolute mt-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded z-20">
                        {equityExpiries.map((date, i) => (
                          <li key={i}>
                            <button
                              onClick={() => handleEquityExpirySelect(date)}
                              className="w-full text-left px-4 py-2 font-bold hover:bg-gray-700 text-white"
                            >
                              {date}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Slider */}
              <div className="w-3/4">
                <SliderDark />
              </div>
            </div>
          </div>

          <div className="my-10 px-4">
            <OIChart />
          </div>

          <div className="flex flex-row mb-10 px-4">
            <div className="w-[70%] mr-4">
              <OIPieChart />
            </div>
            <div className="w-[30%]">
              <OIChangeBarGraph />
            </div>
          </div>

          <div className="mb-10 px-4">
            <OIChangeChart />
          </div>

          {/* === ETF Options Section === */}
          <div ref={etfOptionsRef} className="text-black">
            <h4 className="text-center my-10 text-xl font-semibold">
              ETFs Options
            </h4>
            <div className="flex flex-row justify-around bg-[#212429] border border-gray-600 p-4 rounded-md mx-4">
              <div className="flex flex-col space-y-10">
                {/* ETFs Dropdown */}
                <div className="flex flex-row items-center space-x-4">
                  <p className="mr-5">ETFs:</p>
                  <div className="relative inline-block">
                    <button
                      onClick={toggleETFDropdown}
                      className="py-1 px-3 border border-white text-white bg-black flex items-center rounded hover:cursor-pointer"
                    >
                      {selectedETF} <IoIosArrowDown className="ml-2" />
                    </button>

                    {isETFSelectionOpen && (
                      <ul className="absolute mt-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded z-20">
                        {etfs.map((eq) => (
                          <li key={eq}>
                            <button
                              href="#"
                              onClick={() => handleETFSelect(eq)}
                              className="block px-4 py-2 font-bold hover:bg-gray-700"
                            >
                              {eq}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Expiry Dropdown */}
                <div className="flex flex-row items-center space-x-4">
                  <p className="mr-5">Expiry:</p>
                  <div className="relative inline-block">
                    <button
                      onClick={toggleETFExpiryDropdown}
                      className="py-1 px-3 border border-white text-white bg-black flex items-center rounded hover:cursor-pointer"
                    >
                      {selectedETFExpiry} <IoIosArrowDown className="ml-2" />
                    </button>

                    {isETFExpirySelectionOpen && (
                      <ul className="absolute mt-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded z-20">
                        {etfExpiries.map((date, i) => (
                          <li key={i}>
                            <button
                              onClick={() => handleETFExpirySelect(date)}
                              className="w-full text-left px-4 py-2 font-bold hover:bg-gray-700 text-white"
                            >
                              {date}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Slider */}
              <div className="w-3/4">
                <SliderDark />
              </div>
            </div>
          </div>

          <div className="my-10 px-4">
            <OIChart />
          </div>

          <div className="flex flex-row mb-10 px-4">
            <div className="w-[70%] mr-4">
              <OIPieChart />
            </div>
            <div className="w-[30%]">
              <OIChangeBarGraph />
            </div>
          </div>

          <div className="mb-10 px-4">
            <OIChangeChart />
          </div>
        </div>
      </div>
    </>
  );
}
