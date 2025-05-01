import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "./DashboardHeaderLight";
import SortableTableLight from "../sortTableComponent/SortableTableLight";

export default function SummaryLight() {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthCheck();
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate("/not-auth");
      }
    }
  }, [isAuthenticated, loading, navigate]);

  const topGainAndLoseCol = [
    { key: "symbol", label: "Symbol" },
    { key: "preMarketChangePercent", label: "Pre-Market % Change" },
    { key: "preMarketPrice", label: "Pre-Market Price" },
    { key: "volume", label: "volume" },
  ];

  const mostActiveCol = [
    { key: "symbol", label: "Symbol" },
    { key: "preMarketChangePercent", label: "Pre-Market % Change" },
    { key: "volume", label: "Volume" },
    { key: "lastPrice", label: "Last Price" },
  ];

  const preMarketTopGainers = [
    {
      symbol: "TSLA",
      preMarketChangePercent: 4.82,
      preMarketPrice: 176.34,
      volume: 3200000,
    },
    {
      symbol: "NVDA",
      preMarketChangePercent: 3.65,
      preMarketPrice: 902.5,
      volume: 2900000,
    },
    {
      symbol: "AAPL",
      preMarketChangePercent: 2.91,
      preMarketPrice: 195.22,
      volume: 4700000,
    },
    {
      symbol: "AMC",
      preMarketChangePercent: 7.15,
      preMarketPrice: 4.03,
      volume: 12100000,
    },
    {
      symbol: "NIO",
      preMarketChangePercent: 5.2,
      preMarketPrice: 8.57,
      volume: 9600000,
    },
    {
      symbol: "PLTR",
      preMarketChangePercent: 3.38,
      preMarketPrice: 21.09,
      volume: 5500000,
    },
    {
      symbol: "SOFI",
      preMarketChangePercent: 2.74,
      preMarketPrice: 9.24,
      volume: 6800000,
    },
    {
      symbol: "MRNA",
      preMarketChangePercent: 3.96,
      preMarketPrice: 118.4,
      volume: 1800000,
    },
    {
      symbol: "RIVN",
      preMarketChangePercent: 4.22,
      preMarketPrice: 13.19,
      volume: 4300000,
    },
    {
      symbol: "COIN",
      preMarketChangePercent: 6.09,
      preMarketPrice: 157.67,
      volume: 3100000,
    },
  ];

  const preMarketTopLosers = [
    {
      symbol: "NFLX",
      preMarketChangePercent: -4.21,
      preMarketPrice: 563.78,
      volume: 2800000,
    },
    {
      symbol: "BABA",
      preMarketChangePercent: -3.85,
      preMarketPrice: 76.9,
      volume: 3100000,
    },
    {
      symbol: "PYPL",
      preMarketChangePercent: -3.47,
      preMarketPrice: 61.44,
      volume: 2400000,
    },
    {
      symbol: "UAL",
      preMarketChangePercent: -5.16,
      preMarketPrice: 41.22,
      volume: 1800000,
    },
    {
      symbol: "ZM",
      preMarketChangePercent: -3.33,
      preMarketPrice: 60.12,
      volume: 2200000,
    },
    {
      symbol: "LUV",
      preMarketChangePercent: -2.89,
      preMarketPrice: 26.45,
      volume: 1300000,
    },
    {
      symbol: "DKNG",
      preMarketChangePercent: -4.7,
      preMarketPrice: 34.67,
      volume: 2700000,
    },
    {
      symbol: "JD",
      preMarketChangePercent: -3.12,
      preMarketPrice: 28.78,
      volume: 2000000,
    },
    {
      symbol: "SQ",
      preMarketChangePercent: -2.98,
      preMarketPrice: 65.23,
      volume: 2500000,
    },
    {
      symbol: "PINS",
      preMarketChangePercent: -2.76,
      preMarketPrice: 29.41,
      volume: 1900000,
    },
  ];

  const preMarketMostActive = [
    {
      symbol: "AAPL",
      preMarketChangePercent: 1.23,
      volume: 8200000,
      lastPrice: 178.35,
    },
    {
      symbol: "TSLA",
      preMarketChangePercent: -0.47,
      volume: 7900000,
      lastPrice: 245.8,
    },
    {
      symbol: "AMD",
      preMarketChangePercent: 2.11,
      volume: 7400000,
      lastPrice: 118.2,
    },
    {
      symbol: "NVDA",
      preMarketChangePercent: 0.89,
      volume: 7100000,
      lastPrice: 930.75,
    },
    {
      symbol: "AMZN",
      preMarketChangePercent: -1.15,
      volume: 6800000,
      lastPrice: 134.5,
    },
    {
      symbol: "INTC",
      preMarketChangePercent: 0.56,
      volume: 6600000,
      lastPrice: 33.4,
    },
    {
      symbol: "META",
      preMarketChangePercent: 1.92,
      volume: 6400000,
      lastPrice: 312.7,
    },
    {
      symbol: "MSFT",
      preMarketChangePercent: -0.75,
      volume: 6100000,
      lastPrice: 398.1,
    },
    {
      symbol: "F",
      preMarketChangePercent: 0.33,
      volume: 5900000,
      lastPrice: 12.9,
    },
    {
      symbol: "NIO",
      preMarketChangePercent: -2.05,
      volume: 5700000,
      lastPrice: 9.3,
    },
  ];

  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const apiKey = import.meta.env.VITE_TWELVE_DATA_API;
  // Fetch data from API
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.twelvedata.com/quote?symbol=AAPL&interval=5min&apikey=${apiKey}`
      );
      const result = await res.json();

      if (result && result.symbol) {
        // Wrap the object in an array before setting the state
        setData([result]);
      } else {
        console.error("Unexpected API response:", result);
      }
    } catch (e) {
      console.error("Error fetching data:", e);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-row">
      <Sidebar tab={"Summary"} />
      <div className="flex flex-col w-full bg-white">
        <DashboardHeaderLight
          title={"Summary"}
          subTitle={"Find the Summary of market here."}
        />
        <hr className="border-gray-600 my-5 mx-5" />
        {/* PRE MARKET DATA */}
        <p className="text-sm md:text-lg lg:text-2xl text-center font-bold my-7 text-black">
          Pre Market Data
        </p>
        {/* 1st BLOCK OF TABLE */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-2 md:mb-10 lg:mb-10">
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Top Gainers
            </p>
            {dataLoading ? (
              <p className="text-black">Loading data...</p>
            ) : (
              <SortableTableLight
                data={preMarketTopGainers}
                columns={topGainAndLoseCol}
              />
            )}
          </div>

          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Top Losers
            </p>
            {dataLoading ? (
              <p className="text-black">Loading data...</p>
            ) : (
              <SortableTableLight
                data={preMarketTopLosers}
                columns={topGainAndLoseCol}
              />
            )}
          </div>
        </div>
        {/* 2nd BLOCK OF TABLE */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Most Active
            </p>
            {dataLoading ? (
              <p className="text-black">Loading data...</p>
            ) : (
              <SortableTableLight
                data={preMarketMostActive}
                columns={mostActiveCol}
              />
            )}
          </div>
        </div>

        {/* POST MARKET DATA */}
        <p className="text-black text-sm md:text-lg lg:text-2xl text-center font-bold my-7 mt-30">
          Post Market Data
        </p>
        {/* 1st BLOCK OF TABLE */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-2 md:mb-10 lg:mb-10">
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Top Gainers
            </p>
            {dataLoading ? (
              <p className="text-black">Loading data...</p>
            ) : (
              <SortableTableLight
                data={preMarketTopGainers}
                columns={topGainAndLoseCol}
              />
            )}
          </div>

          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Top Losers
            </p>
            {dataLoading ? (
              <p className="text-black">Loading data...</p>
            ) : (
              <SortableTableLight
                data={preMarketTopLosers}
                columns={topGainAndLoseCol}
              />
            )}
          </div>
        </div>
        {/* 2nd BLOCK OF TABLE */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-25">
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Most Active
            </p>
            {dataLoading ? (
              <p className="text-black">Loading data...</p>
            ) : (
              <SortableTableLight
                data={preMarketMostActive}
                columns={mostActiveCol}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
