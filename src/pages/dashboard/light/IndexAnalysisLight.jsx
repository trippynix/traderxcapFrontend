import React, { useEffect, useMemo, useRef, useState } from "react";
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

// DATA IMPORT
import AAPL15MAY from "../../../assets/aapl_bullish_may15_830_1030.json";
import AAPL30MAY from "../../../assets/aapl_bullish_may30_830_1030.json";
import META15MAY from "../../../assets/meta_bullish_may15_expiry_with_volume_flat.json";
import META30MAY from "../../../assets/meta_bullish_may30_expiry_with_volume_flat.json";
import AMD15MAY from "../../../assets/amd_bullish_may15_expiry_with_volume_flat.json";
import AMD30MAY from "../../../assets/amd_bullish_may30_expiry_with_volume_flat.json";
import AMZN15MAY from "../../../assets/amzn_bearish_may15_expiry_with_volume_flat.json";
import AMZN30MAY from "../../../assets/amzn_bearish_may30_expiry_with_volume_flat.json";
import MSFT15MAY from "../../../assets/msft_bearish_may15_expiry_with_volume_flat.json";
import MSFT30MAY from "../../../assets/msft_bearish_may30_expiry_with_volume_flat.json";
import GOOG15MAY from "../../../assets/goog_may15_expiry_with_volume_flat.json";
import GOOG30MAY from "../../../assets/goog_may30_expiry_with_volume_flat.json";
import BAC15MAY from "../../../assets/bac_bearish_may15_expiry_with_volume_flat.json";
import BAC30MAY from "../../../assets/bac_bearish_may30_expiry_with_volume_flat.json";
import TSLA15MAY from "../../../assets/tsla_spike_bearish_may15_expiry_with_volume_flat.json";
import TSLA30MAY from "../../../assets/tsla_spike_bearish_may30_expiry_with_volume_flat.json";
import NVDA15MAY from "../../../assets/nvda_spike_bullish_may15_expiry_with_volume_flat.json";
import NVDA30MAY from "../../../assets/nvda_spike_bullish_may30_expiry_with_volume_flat.json";

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

  // OPTIONS BAR GRAPH DATA **********//
  // const barData = [
  //   { strike: "17000", callOI: 100, putOI: 80, callChange: -20, putChange: 10 },
  //   { strike: "17100", callOI: 120, putOI: 90, callChange: 30, putChange: -15 },
  //   {
  //     strike: "17200",
  //     callOI: 110,
  //     putOI: 100,
  //     callChange: -10,
  //     putChange: 20,
  //   },
  //   {
  //     strike: "17300",
  //     callOI: 140,
  //     putOI: 120,
  //     callChange: 15,
  //     putChange: -25,
  //   },
  //   { strike: "17000", callOI: 100, putOI: 80, callChange: -20, putChange: 10 },
  //   { strike: "17100", callOI: 120, putOI: 90, callChange: 30, putChange: -15 },
  //   {
  //     strike: "17200",
  //     callOI: 110,
  //     putOI: 100,
  //     callChange: -10,
  //     putChange: 20,
  //   },
  //   {
  //     strike: "17300",
  //     callOI: 140,
  //     putOI: 120,
  //     callChange: 15,
  //     putChange: -25,
  //   },
  //   { strike: "17000", callOI: 100, putOI: 80, callChange: -20, putChange: 10 },
  //   { strike: "17100", callOI: 120, putOI: 90, callChange: 30, putChange: -15 },
  //   {
  //     strike: "17200",
  //     callOI: 110,
  //     putOI: 100,
  //     callChange: -10,
  //     putChange: 20,
  //   },
  //   {
  //     strike: "17300",
  //     callOI: 140,
  //     putOI: 120,
  //     callChange: 15,
  //     putChange: -25,
  //   },
  // ];

  // OPTIONS PIE CHART DATA ***************//
  // const pieData = [
  //   { name: "Total Call OI", value: 1200 }, // Example CE OI
  //   { name: "Total Put OI", value: 900 }, // Example PE OI
  // ];

  // OPTIONS CHANGE COMPARISON BAR GRAPH DATA *****************//
  // const changeBarData = [
  //   { type: "Call Chng", value: -50 }, // Positive CE OI Change (Red)
  //   { type: "Put Chng", value: 70 }, // Negative PE OI Change (Red)
  // ];

  // OPTIONS CHANGE BAR GRAPH DATA ****************//
  const changeBarStrikeData = [
    { strike: 17000, callChange: 30, putChange: -15 },
    { strike: 17100, callChange: 50, putChange: -20 },
    { strike: 17200, callChange: -10, putChange: 25 },
    { strike: 17300, callChange: -30, putChange: 40 },
    { strike: 17000, callChange: 30, putChange: -15 },
    { strike: 17100, callChange: 50, putChange: -20 },
    { strike: 17200, callChange: -10, putChange: 25 },
    { strike: 17300, callChange: -30, putChange: 40 },
    { strike: 17000, callChange: 30, putChange: -15 },
    { strike: 17100, callChange: 50, putChange: -20 },
    { strike: 17200, callChange: -10, putChange: 25 },
    { strike: 17300, callChange: -30, putChange: 40 },
    { strike: 17000, callChange: 30, putChange: -15 },
    { strike: 17100, callChange: 50, putChange: -20 },
    { strike: 17200, callChange: -10, putChange: 25 },
    { strike: 17300, callChange: -30, putChange: 40 },
  ];

  // Equity selection
  const [isEquitySelectionOpen, setIsEquitySelectionOpen] = useState(false);
  const [selectedEquity, setSelectedEquity] = useState("AAPL");
  const equities = [
    "NVDA",
    "AAPL",
    "AMZN",
    "AMD",
    "MSFT",
    "BAC",
    "GOOG",
    "META",
    "TSLA",
  ];

  const toggleEquityDropdown = () =>
    setIsEquitySelectionOpen(!isEquitySelectionOpen);

  const handleEquitySelect = (eq) => {
    setSelectedEquity(eq);
    setIsEquitySelectionOpen(false);
  };

  // Equity Expiry Selection
  const [isEquityExpirySelectionOpen, setIsEquityExpirySelectionOpen] =
    useState(false);
  const [selectedEquityExpiry, setSelectedEquityExpiry] = useState("15MAY");
  const equityExpiries = ["15MAY", "30MAY"];

  const toggleEquityExpiryDropdown = () =>
    setIsEquityExpirySelectionOpen(!isEquityExpirySelectionOpen);

  const handleEquityExpirySelect = (eq) => {
    setSelectedEquityExpiry(eq);
    setIsEquityExpirySelectionOpen(false);
  };

  // SLIDER CONFIGURATION ****************//
  const allStockData = {
    AAPL15MAY: AAPL15MAY,
    AAPL30MAY: AAPL30MAY,
    AMD15MAY: AMD15MAY,
    AMD30MAY: AMD30MAY,
    META15MAY: META15MAY,
    META30MAY: META30MAY,
    AMZN15MAY: AMZN15MAY,
    AMZN30MAY: AMZN30MAY,
    MSFT15MAY: MSFT15MAY,
    MSFT30MAY: MSFT30MAY,
    GOOG15MAY: GOOG15MAY,
    GOOG30MAY: GOOG30MAY,
    BAC15MAY: BAC15MAY,
    BAC30MAY: BAC30MAY,
    TSLA15MAY: TSLA15MAY,
    TSLA30MAY: TSLA30MAY,
    NVDA15MAY: NVDA15MAY,
    NVDA30MAY: NVDA30MAY,
  };

  const [timeRange, setTimeRange] = useState({ start: "09:15", end: "15:30" });
  const [goBtnClicked, setGoBtnClicked] = useState(false);
  const [filterApplied, setFilterApplied] = useState(false);

  // Handle time range changes
  const handleTimeChange = (start, end) => {
    setTimeRange({ start, end });
  };

  // Handle "Go" button click
  const handleGoButtonClick = () => {
    setGoBtnClicked(true); // Set goBtnClicked to true when "Go" is clicked
    setFilterApplied(false); // Reset filterApplied state (filter is not yet applied)
  };

  // Get selected stock data
  const selectedData = `${selectedEquity}${selectedEquityExpiry}`;
  const selectedStockData = allStockData[selectedData];

  // Initialize filteredData as empty array or null
  const [filteredData, setFilteredData] = useState(selectedStockData);

  // Memoized filtered data, only applies filtering after "Go" button click
  useEffect(() => {
    if (goBtnClicked) {
      const toMinutes = (timeStr) => {
        const [h, m] = timeStr.split(":").map(Number);
        return h * 60 + m;
      };

      const startMinutes = toMinutes(timeRange.start);
      const endMinutes = toMinutes(timeRange.end);

      const filtered = selectedStockData.filter((item) => {
        const itemTime = new Date(item.datetime).toTimeString().slice(0, 5);
        const itemMinutes = toMinutes(itemTime);
        return itemMinutes >= startMinutes && itemMinutes <= endMinutes;
      });

      setFilteredData(filtered); // Set filtered data here
      setGoBtnClicked(false); // Reset goBtnClicked after filtering
      setFilterApplied(true); // Set filterApplied to true after filter is applied
    }
  }, [goBtnClicked, selectedStockData, timeRange]);

  console.log(filteredData);

  // *********************** ////

  // BAR GRAPH PLOTTING DATA MANIPULATION ****************//

  const aggregatedData = {};

  filteredData.forEach((item) => {
    const strike = item.strike_price;

    if (!aggregatedData[strike]) {
      aggregatedData[strike] = {
        strike: strike,
        callOI: 0,
        putOI: 0,
        callChange: 0,
        putChange: 0,
      };
    }

    aggregatedData[strike].callOI += item.call_open_interest || 0;
    aggregatedData[strike].putOI += item.put_open_interest || 0;
    aggregatedData[strike].callChange += (item.call_change_in_oi || 0) * 100;
    aggregatedData[strike].putChange += (item.put_change_in_oi || 0) * 100;
  });

  const barData = Object.values(aggregatedData);
  // 🔧 Normalize changes to percentages of OI
  barData.forEach((item) => {
    item.callChangePct =
      item.callOI !== 0 ? (item.callChange / item.callOI) * 10 : 0;
    item.putChangePct =
      item.putOI !== 0 ? (item.putChange / item.putOI) * 10 : 0;
  });

  ////////****************************/////////

  // PIE CHART PLOTTING DATA MANIPULATION ****************//
  const pieData = [
    {
      name: "Total Call OI",
      value: filteredData.reduce(
        (sum, item) => sum + (item.call_open_interest || 0),
        0
      ),
    },
    {
      name: "Total Put OI",
      value: filteredData.reduce(
        (sum, item) => sum + (item.put_open_interest || 0),
        0
      ),
    },
  ];
  //***************************************// */

  // PIE CHART PLOTTING DATA MANIPULATION ****************//
  const changeBarData = [
    {
      type: "Call Chng",
      value: filteredData.reduce(
        (sum, item) => sum + (item.call_change_in_oi || 0) * 100,
        0
      ),
    },
    {
      type: "Put Chng",
      value: filteredData.reduce(
        (sum, item) => sum + (item.put_change_in_oi || 0) * 100,
        0
      ),
    },
  ];
  //***************************************// */

  // BAR GRAPH FOR EACH STRIKE PRICE CHANGES DATA ***************//
  // Calculate sum of call_change_in_oi and put_change_in_oi for each strike price
  const aggregatedChangeOIData = {};

  filteredData.forEach((item) => {
    const strike = item.strike_price;

    if (!aggregatedChangeOIData[strike]) {
      aggregatedChangeOIData[strike] = {
        strike: strike,
        callChange: 0,
        putChange: 0,
      };
    }

    aggregatedChangeOIData[strike].callChange +=
      (item.call_change_in_oi || 0) * 100;
    aggregatedChangeOIData[strike].putChange +=
      (item.put_change_in_oi || 0) * 100;
  });

  const barChangeOIData = Object.values(aggregatedChangeOIData);
  console.log("asdadsa", barChangeOIData);

  //************************ *//
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

  const [selectedOption, setSelectedOption] = useState("Equities");

  return (
    <>
      <div className="flex flex-row">
        <Sidebar tab={"Options Analysis"} />
        <div className="flex flex-col w-full bg-white">
          <DashboardHeaderLight
            title={"Options Analysis"}
            subTitle={
              "Analyze and understand option chain to make better trading decisions."
            }
          />
          <hr className="border-gray-600 my-5 mx-5" />

          {/* Top Dropdown Section */}
          <div className="flex flex-row justify-around items-center">
            {/* Equity Options Button */}
            <div className="relative flex border border-black rounded-full items-center justify-center my-4">
              <div
                className={`absolute w-1/2 h-full rounded-full transition-all duration-300 ${
                  selectedOption === "Equities"
                    ? "left-0 bg-black"
                    : "left-1/2 bg-black"
                }`}
              ></div>
              <input
                type="radio"
                className="sr-only"
                name="options"
                id="option1"
                checked={selectedOption === "Equities"}
                onChange={() => setSelectedOption("Equities")}
              />
              <label
                className={`${
                  selectedOption === "Equities" ? "text-white" : "text-black"
                } px-2 py-2 cursor-pointer z-10`}
                htmlFor="option1"
              >
                Equities
              </label>
              <input
                type="radio"
                className="sr-only"
                name="options"
                id="option2"
                checked={selectedOption === "ETFs"}
                onChange={() => setSelectedOption("ETFs")}
              />
              <label
                className={`${
                  selectedOption === "ETFs" ? "text-white" : "text-black"
                } px-5 py-2 cursor-pointer z-10`}
                htmlFor="option2"
              >
                ETFs
              </label>
            </div>
          </div>

          {/* === Equity Options Section === */}
          {selectedOption === "Equities" && (
            <>
              <div className="text-black">
                <h4 className="text-center my-10 text-xl font-semibold">
                  Equity Options
                </h4>
                <div className="flex flex-col md:flex-col lg:flex-row items-center lg:justify-around bg-[#212429] border border-gray-600 p-4 rounded-md mx-4">
                  <div className="flex flex-row md:flex-row lg:flex-col lg:space-y-10">
                    {/* Equity Dropdown */}
                    <div className="flex flex-row items-center mr-5">
                      <p className="text-[10px] md:text-xs lg:text-base mr-1 md:mr-3 lg:mr-5 text-white">
                        Equity:
                      </p>
                      <div className="relative inline-block">
                        <button
                          onClick={toggleEquityDropdown}
                          className="py-1 px-2 lg:px-3 border border-white text-[10px] md:text-xs lg:text-base text-white bg-black flex items-center rounded hover:cursor-pointer"
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
                                  className="block px-4 py-2 text-[8px] md:text-[10px] lg:text-base font-bold hover:bg-gray-700 active:bg-gray-700"
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
                      <p className="text-[10px] md:text-xs lg:text-base mr-1 md:mr-3 lg:mr-5 text-white">
                        Expiry:
                      </p>
                      <div className="relative inline-block">
                        <button
                          onClick={toggleEquityExpiryDropdown}
                          className="py-1 px-2 lg:px-3 border border-white text-[10px] md:text-xs lg:text-base text-white bg-black flex items-center rounded hover:cursor-pointer"
                        >
                          {selectedEquityExpiry}{" "}
                          <IoIosArrowDown className="ml-2" />
                        </button>

                        {isEquityExpirySelectionOpen && (
                          <ul className="absolute mt-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded z-20">
                            {equityExpiries.map((date, i) => (
                              <li key={i}>
                                <button
                                  onClick={() => handleEquityExpirySelect(date)}
                                  className="w-full text-left text-[8px] md:text-[10px] lg:text-base px-4 py-2 font-bold hover:bg-gray-700 text-white active:bg-gray-700"
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
                  <div className="w-7/8 lg:w-3/4">
                    <SliderDark
                      onTimeChange={handleTimeChange}
                      onGoButtonClick={handleGoButtonClick}
                    />
                  </div>
                </div>
              </div>

              <div className="my-10 px-4">
                <OIChart data={barData} />
              </div>

              <div className="flex flex-col md:flex-row lg:flex-row mb-10 px-4">
                <div className="w-full md:w-[70%] lg:w-[70%] mr-0 md:mr-4 lg:mr-4 mb-10">
                  <OIPieChart data={pieData} />
                </div>
                <div className="w-full md:w-[30%] lg:w-[30%]">
                  <OIChangeBarGraph data={changeBarData} />
                </div>
              </div>

              <div className="mb-10 px-4">
                <OIChangeChart data={barChangeOIData} />
              </div>
            </>
          )}

          {/* === ETF Options Section === */}
          {selectedOption === "ETFs" && (
            <>
              <div className="text-black">
                <h4 className="text-center my-10 text-xl font-semibold">
                  ETFs Options
                </h4>
                <div className="flex flex-col md:flex-col lg:flex-row items-center lg:justify-around bg-[#212429] border border-gray-600 p-4 rounded-md mx-4">
                  <div className="flex flex-row md:flex-row lg:flex-col lg:space-y-10">
                    {/* ETFs Dropdown */}
                    <div className="flex flex-row items-center mr-5">
                      <p className="text-[10px] md:text-xs lg:text-base mr-1 md:mr-3 lg:mr-5 text-white">
                        ETFs:
                      </p>
                      <div className="relative inline-block">
                        <button
                          onClick={toggleETFDropdown}
                          className="py-1 px-2 lg:px-3 border border-white text-[10px] md:text-xs lg:text-base text-white bg-black flex items-center rounded hover:cursor-pointer"
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
                                  className="block px-4 py-2 text-[8px] md:text-[10px] lg:text-base font-bold hover:bg-gray-700 active:bg-gray-700"
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
                      <p className="text-[10px] md:text-xs lg:text-base mr-1 md:mr-3 lg:mr-5 text-white">
                        Expiry:
                      </p>
                      <div className="relative inline-block">
                        <button
                          onClick={toggleETFExpiryDropdown}
                          className="py-1 px-2 lg:px-3 border border-white text-[10px] md:text-xs lg:text-base text-white bg-black flex items-center rounded hover:cursor-pointer"
                        >
                          {selectedETFExpiry}{" "}
                          <IoIosArrowDown className="ml-2" />
                        </button>

                        {isETFExpirySelectionOpen && (
                          <ul className="absolute mt-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded z-20">
                            {etfExpiries.map((date, i) => (
                              <li key={i}>
                                <button
                                  onClick={() => handleETFExpirySelect(date)}
                                  className="w-full text-left text-[8px] md:text-[10px] lg:text-base px-4 py-2 font-bold hover:bg-gray-700 text-white active:bg-gray-700"
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
                  <div className="w-7/8 lg:w-3/4">
                    <SliderDark
                      onTimeChange={handleTimeChange}
                      onGoButtonClick={handleGoButtonClick}
                    />
                  </div>
                </div>
              </div>

              <div className="my-10 px-4">
                <OIChart data={barData} />
              </div>

              <div className="flex flex-col md:flex-row lg:flex-row mb-10 px-4">
                <div className="w-full md:w-[70%] lg:w-[70%] mr-0 md:mr-4 lg:mr-4 mb-10">
                  <OIPieChart data={pieData} />
                </div>
                <div className="w-full md:w-[30%] lg:w-[30%]">
                  <OIChangeBarGraph data={changeBarData} />
                </div>
              </div>

              <div className="mb-10 px-4">
                <OIChangeChart data={changeBarStrikeData} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
