import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import "../../../styles/MarketDepth.css";
import DashboardHeaderDark from "./DashboardHeaderDark";
import SortableTableDark from "../sortTableComponent/SortableTableDark";

export default function MarketDepthDark() {
  const volumeSpikeCol = [
    { key: "symbol", label: "Symbol" },
    { key: "interval_volume", label: "Interval Volume" },
    { key: "vol_spike", label: "Volume Spike" },
    { key: "iv_change", label: "IV % Change" },
  ];

  const volumeSpikeData = [
    {
      symbol: "TSLA",
      interval_volume: 820000,
      vol_spike: 2.13,
      iv_change: 8.4,
    },
    {
      symbol: "AAPL",
      interval_volume: 730000,
      vol_spike: 1.76,
      iv_change: 4.1,
    },
    {
      symbol: "NVDA",
      interval_volume: 950000,
      vol_spike: 2.87,
      iv_change: 12.3,
    },
    {
      symbol: "AMZN",
      interval_volume: 610000,
      vol_spike: 1.49,
      iv_change: -2.1,
    },
    {
      symbol: "MSFT",
      interval_volume: 780000,
      vol_spike: 1.93,
      iv_change: 6.2,
    },
    { symbol: "AMD", interval_volume: 860000, vol_spike: 2.31, iv_change: 9.9 },
    {
      symbol: "NFLX",
      interval_volume: 690000,
      vol_spike: 1.62,
      iv_change: 3.8,
    },
    {
      symbol: "META",
      interval_volume: 990000,
      vol_spike: 3.12,
      iv_change: 11.7,
    },
    {
      symbol: "GOOGL",
      interval_volume: 540000,
      vol_spike: 1.21,
      iv_change: -1.4,
    },
    {
      symbol: "INTC",
      interval_volume: 710000,
      vol_spike: 1.88,
      iv_change: 5.0,
    },
    {
      symbol: "BABA",
      interval_volume: 650000,
      vol_spike: 1.55,
      iv_change: 2.9,
    },
    {
      symbol: "SHOP",
      interval_volume: 870000,
      vol_spike: 2.45,
      iv_change: 7.3,
    },
    {
      symbol: "COIN",
      interval_volume: 920000,
      vol_spike: 2.71,
      iv_change: 10.6,
    },
    {
      symbol: "RIVN",
      interval_volume: 480000,
      vol_spike: 1.02,
      iv_change: -3.0,
    },
    {
      symbol: "PLTR",
      interval_volume: 770000,
      vol_spike: 2.05,
      iv_change: 6.8,
    },
  ];
  const columns = [
    { key: "symbol", label: "Symbol" },
    { key: "spike_factor", label: "Spike Factor" },
    { key: "exchange", label: "Exchange" },
    { key: "volume", label: "Volume" },
  ];
  // const columns = [
  //   { key: "symbol", label: "Symbol" },
  //   { key: "spike_factor", label: "Spike Factor" },
  //   { key: "exchange", label: "Exchange" },
  //   { key: "volume", label: "Volume" },
  // ];
  // MOMENTUM SPIKE DATA ****************//
  const momentumSpikeCol = [
    { key: "symbol", label: "Symbol" },
    { key: "spike_factor", label: "Spike Factor" },
    { key: "exchange", label: "Exchange" },
    { key: "volume", label: "Volume" },
  ];
  const momentumSpikeData = [
    {
      symbol: "AAPL",
      spike_factor: 1.52,
      exchange: "NASDAQ",
      volume: 73482123,
    },
    {
      symbol: "GOOG",
      spike_factor: 0.89,
      exchange: "NASDAQ",
      volume: 18344122,
    },
    {
      symbol: "AMZN",
      spike_factor: 1.12,
      exchange: "NASDAQ",
      volume: 25433119,
    },
    {
      symbol: "MSFT",
      spike_factor: 1.34,
      exchange: "NASDAQ",
      volume: 38447123,
    },
    {
      symbol: "TSLA",
      spike_factor: 2.01,
      exchange: "NASDAQ",
      volume: 104887321,
    },
    {
      symbol: "NFLX",
      spike_factor: 0.76,
      exchange: "NASDAQ",
      volume: 13700102,
    },
    {
      symbol: "NVDA",
      spike_factor: 1.85,
      exchange: "NASDAQ",
      volume: 59200344,
    },
    {
      symbol: "META",
      spike_factor: 0.95,
      exchange: "NASDAQ",
      volume: 29774112,
    },
    { symbol: "TWTR", spike_factor: 1.23, exchange: "NYSE", volume: 17422031 },
    { symbol: "BABA", spike_factor: 1.67, exchange: "NYSE", volume: 35100993 },
    { symbol: "ORCL", spike_factor: 0.81, exchange: "NYSE", volume: 11220493 },
    {
      symbol: "INTC",
      spike_factor: 1.48,
      exchange: "NASDAQ",
      volume: 34211888,
    },
    { symbol: "AMD", spike_factor: 2.15, exchange: "NASDAQ", volume: 78144200 },
    { symbol: "CRM", spike_factor: 1.03, exchange: "NYSE", volume: 14239818 },
    { symbol: "UBER", spike_factor: 1.2, exchange: "NYSE", volume: 22344109 },
    {
      symbol: "PYPL",
      spike_factor: 0.92,
      exchange: "NASDAQ",
      volume: 18124400,
    },
    { symbol: "SHOP", spike_factor: 1.69, exchange: "NYSE", volume: 20944310 },
    { symbol: "SQ", spike_factor: 1.56, exchange: "NYSE", volume: 18744190 },
    { symbol: "ZM", spike_factor: 0.88, exchange: "NASDAQ", volume: 13344021 },
    { symbol: "SPOT", spike_factor: 1.42, exchange: "NYSE", volume: 10238813 },
  ];

  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthCheck();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/not-auth");
    }
  }, [isAuthenticated, loading, navigate]);

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
      <Sidebar tab={"Market Analysis"} />
      <div className="flex flex-col w-full bg-black">
        <DashboardHeaderDark
          title={"Market Analysis"}
          subTitle={"Market Stock Data"}
        />
        <hr className="border-gray-600 my-5 mx-5" />

        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-2 md:mb-10 lg:mb-10">
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Momentum Stocks
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark
                data={momentumSpikeData}
                columns={momentumSpikeCol}
              />
            )}
          </div>

          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Volume Spike
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark
                data={volumeSpikeData}
                columns={volumeSpikeCol}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row  justify-around px-4 mb-25">
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Volatility
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>

          {/* <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Top Gainers and Losers
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div> */}
          {/* ONLY FOR 4 COLUMNS OF PREDEFINED NAME CHANGE COL NAMES IN COMPONENT JSX TOO IF CHANGED HERE */}
        </div>
      </div>
    </div>
  );
}
