import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "./DashboardHeaderLight";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SortableTableLight from "../sortTableComponent/SortableTableLight";

export default function MomentumSpikeLight() {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthCheck();
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate("/not-auth");
      }
    }
  }, [isAuthenticated, loading, navigate]);

  const columns = [
    { key: "symbol", label: "Symbol" },
    { key: "name", label: "Name" },
    { key: "exchange", label: "Exchange" },
    { key: "volume", label: "Volume" },
  ];

  // 5 MIN DATA ********************** //
  const fiveMinData = [
    { stock: "AAPL", volume: 500000 },
    { stock: "GOOG", volume: 650000 },
    { stock: "AMZN", volume: 550000 },
    { stock: "TSLA", volume: 700000 },
    { stock: "MSFT", volume: 800000 },
    { stock: "NFLX", volume: 600000 },
    { stock: "NVDA", volume: 750000 },
    { stock: "FB", volume: 620000 },
    { stock: "BA", volume: 500000 },
    { stock: "V", volume: 780000 },
    { stock: "DIS", volume: 650000 },
    { stock: "SPY", volume: 900000 },
    { stock: "AMD", volume: 850000 },
    { stock: "BABA", volume: 600000 },
    { stock: "GS", volume: 700000 },
    { stock: "PYPL", volume: 550000 },
    { stock: "UBER", volume: 670000 },
    { stock: "INTC", volume: 750000 },
    { stock: "SQ", volume: 680000 },
    { stock: "SNAP", volume: 580000 },
  ];
  const sortedFiveMinData = fiveMinData.sort((a, b) => b.volume - a.volume);

  // 15 MIN DATA *************************** //
  const fifteenMinData = [
    {
      stock: "AAPL",
      volume: 550000,
    },
    {
      stock: "TSLA",
      volume: 1200000,
    },
    {
      stock: "GOOG",
      volume: 800000,
    },
    {
      stock: "AMZN",
      volume: 2000000, // Drastic difference
    },
    {
      stock: "MSFT",
      volume: 300000,
    },
    {
      stock: "NFLX",
      volume: 3500000, // Drastic difference
    },
    {
      stock: "NVDA",
      volume: 600000,
    },
    {
      stock: "META",
      volume: 700000,
    },
    {
      stock: "SPY",
      volume: 450000,
    },
    {
      stock: "BA",
      volume: 900000,
    },
    {
      stock: "DIS",
      volume: 450000,
    },
    {
      stock: "TSM",
      volume: 1100000,
    },
    {
      stock: "CSCO",
      volume: 200000,
    },
    {
      stock: "INTC",
      volume: 1800000, // Drastic difference
    },
    {
      stock: "UBER",
      volume: 1000000,
    },
  ];
  const sortedFifteenMinData = fifteenMinData.sort(
    (a, b) => b.volume - a.volume
  );

  // NEAR PREV DAYS HiGH *******************//
  const prevDayHighCol = [
    { key: "symbol", label: "Symbol" },
    { key: "currentPrice", label: "Curr Price" },
    { key: "previousHigh", label: "Prev High" },
    { key: "priceDifference", label: "Price Diff" },
    { key: "volume", label: "Volume" },
  ];
  const prevDayHighData = [
    {
      symbol: "AAPL",
      currentPrice: 179.5,
      previousHigh: 180.0,
      priceDifference: -0.5,
      volume: 12000000,
    },
    {
      symbol: "GOOGL",
      currentPrice: 2915.0,
      previousHigh: 2950.0,
      priceDifference: -35.0,
      volume: 5000000,
    },
    {
      symbol: "AMZN",
      currentPrice: 3350.0,
      previousHigh: 3400.0,
      priceDifference: -50.0,
      volume: 8500000,
    },
    {
      symbol: "TSLA",
      currentPrice: 675.0,
      previousHigh: 680.0,
      priceDifference: -5.0,
      volume: 4200000,
    },
    {
      symbol: "MSFT",
      currentPrice: 305.0,
      previousHigh: 310.0,
      priceDifference: -5.0,
      volume: 7000000,
    },
    {
      symbol: "NVDA",
      currentPrice: 224.5,
      previousHigh: 225.0,
      priceDifference: -0.5,
      volume: 11000000,
    },
    {
      symbol: "META",
      currentPrice: 380.0,
      previousHigh: 385.0,
      priceDifference: -5.0,
      volume: 3500000,
    },
    {
      symbol: "AMD",
      currentPrice: 112.0,
      previousHigh: 115.0,
      priceDifference: -3.0,
      volume: 4800000,
    },
    {
      symbol: "NFLX",
      currentPrice: 545.0,
      previousHigh: 550.0,
      priceDifference: -5.0,
      volume: 7000000,
    },
    {
      symbol: "BABA",
      currentPrice: 130.5,
      previousHigh: 135.0,
      priceDifference: -4.5,
      volume: 9500000,
    },
  ];

  // NEAR PREV DAYS LOW ***********************//
  const prevDayLowCol = [
    { key: "symbol", label: "Symbol" },
    { key: "currentPrice", label: "Curr Price" },
    { key: "previousLow", label: "Prev Low" },
    { key: "priceDifference", label: "Price Diff" },
    { key: "volume", label: "Volume" },
  ];

  const prevDayLowData = [
    {
      symbol: "AAPL",
      currentPrice: 140.0,
      previousLow: 135.0,
      priceDifference: 5.0,
      volume: 13000000,
    },
    {
      symbol: "MSFT",
      currentPrice: 270.0,
      previousLow: 265.0,
      priceDifference: 5.0,
      volume: 9000000,
    },
    {
      symbol: "TSLA",
      currentPrice: 650.0,
      previousLow: 640.0,
      priceDifference: 10.0,
      volume: 8500000,
    },
    {
      symbol: "GOOG",
      currentPrice: 2700.0,
      previousLow: 2675.0,
      priceDifference: 25.0,
      volume: 4000000,
    },
    {
      symbol: "AMZN",
      currentPrice: 3300.0,
      previousLow: 3280.0,
      priceDifference: 20.0,
      volume: 6000000,
    },
    {
      symbol: "FB",
      currentPrice: 380.0,
      previousLow: 375.0,
      priceDifference: 5.0,
      volume: 5000000,
    },
    {
      symbol: "NFLX",
      currentPrice: 500.0,
      previousLow: 495.0,
      priceDifference: 5.0,
      volume: 4200000,
    },
    {
      symbol: "NVDA",
      currentPrice: 205.0,
      previousLow: 202.0,
      priceDifference: 3.0,
      volume: 7200000,
    },
    {
      symbol: "SPY",
      currentPrice: 390.0,
      previousLow: 385.0,
      priceDifference: 5.0,
      volume: 12000000,
    },
    {
      symbol: "BABA",
      currentPrice: 150.0,
      previousLow: 148.0,
      priceDifference: 2.0,
      volume: 11000000,
    },
    {
      symbol: "DIS",
      currentPrice: 120.0,
      previousLow: 118.0,
      priceDifference: 2.0,
      volume: 6500000,
    },
    {
      symbol: "BA",
      currentPrice: 220.0,
      previousLow: 218.0,
      priceDifference: 2.0,
      volume: 4500000,
    },
  ];

  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_TWELVE_DATA_API;

  // Fetch data from API
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.twelvedata.com/quote?symbol=AAPL&interval=5min&apikey=${API_KEY}`
      );
      const result = await res.json();
      console.log("API Response:", result);

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

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || payload.length === 0) return null;

    return (
      <div
        style={{
          background: "#4c4c84",
          padding: "10px",
          borderRadius: "5px",
          color: "#fff",
          border: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "10px",
        }}
      >
        <p>{label}</p>
        {payload.map((entry, index) => (
          <span key={index}>
            {entry.name}:{" "}
            {entry.name === "change" ? `${entry.value}%` : entry.value}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-row">
      <Sidebar tab={"Momentum Spike"} />
      <div className="flex flex-col w-full bg-white">
        <DashboardHeaderLight
          title={"Momentum Spike"}
          subTitle={"asdasdasdas"}
        />
        <hr className="border-gray-600 my-5 mx-5" />
        <div className="container mx-auto mt-4 p-3">
          {/*----------------------------------------- 5 min Momentum */}
          <h4 className="text-center text-xs md:text-sm lg:text-base mb-3 text-black">
            5 min Momentum Spike
          </h4>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={sortedFiveMinData}>
              <XAxis
                dataKey="stock"
                tick={{ fontSize: 10, fill: "#000000" }}
                angle={-90}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fontSize: 12, fill: "#000000" }} />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(45, 44, 44, 0.3)" }}
              />
              <Bar
                dataKey="volume"
                fill="#605E97"
                barSize={20}
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
          {/*----------------------------------------- 15 min Momentum */}
          <h4 className="text-center text-xs md:text-sm lg:text-base mb-3 text-black">
            15 min Momentum Spike
          </h4>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={sortedFifteenMinData}>
              <XAxis
                dataKey="stock"
                tick={{ fontSize: 10, fill: "#000000" }}
                angle={-90}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fontSize: 12, fill: "#000000" }} />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(45, 44, 44, 0.3)" }}
              />
              <Bar
                dataKey="volume"
                fill="#605E97"
                barSize={20}
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row justify-around px-4 md:px-10 lg:px-4 mb-25">
          <div className="flex flex-col w-full md:w-full lg:w-[40%] mb-10">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Near Previous Day's High
            </p>
            {dataLoading ? (
              <p className="text-white text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight
                data={prevDayHighData}
                columns={prevDayHighCol}
              />
            )}
          </div>
          <div className="flex flex-col w-full md:w-full lg:w-[40%] mt-4 md:my-10">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Near Previous Day's Low
            </p>
            {dataLoading ? (
              <p className="text-white text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight
                data={prevDayLowData}
                columns={prevDayLowCol}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
