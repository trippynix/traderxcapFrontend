import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "./DashboardHeaderLight";
import SortableTableLight from "../sortTableComponent/SortableTableLight";

export default function SwingCenterLight() {
  const columns = [
    { key: "symbol", label: "Symbol" },
    { key: "name", label: "Name" },
    { key: "exchange", label: "Exchange" },
    { key: "volume", label: "Volume" },
    { key: "momentum_score", label: "Momentum Spike" },
  ];

  const upsideData = [
    {
      symbol: "AAPL",
      name: "Apple",
      exchange: "NASDAQ",
      volume: 27167,
      momentum_score: 74.08,
    },
    {
      symbol: "GOOG",
      name: "Google",
      exchange: "NASDAQ",
      volume: 31518,
      momentum_score: 95.76,
    },
    {
      symbol: "AMZN",
      name: "Amazon",
      exchange: "NASDAQ",
      volume: 6116,
      momentum_score: 79.7,
    },
    {
      symbol: "TSLA",
      name: "Tesla",
      exchange: "NASDAQ",
      volume: 37253,
      momentum_score: 21.46,
    },
    {
      symbol: "MSFT",
      name: "Microsoft",
      exchange: "NASDAQ",
      volume: 16872,
      momentum_score: 23.44,
    },
    {
      symbol: "NVDA",
      name: "NVIDIA",
      exchange: "NASDAQ",
      volume: 18362,
      momentum_score: 69.88,
    },
    {
      symbol: "SPY",
      name: "SPDR S&P 500 ETF",
      exchange: "NYSE",
      volume: 32251,
      momentum_score: 48.88,
    },
    {
      symbol: "GOOG",
      name: "Google",
      exchange: "NASDAQ",
      volume: 39936,
      momentum_score: 12.19,
    },
    {
      symbol: "AAPL",
      name: "Apple",
      exchange: "NASDAQ",
      volume: 11757,
      momentum_score: 23.84,
    },
    {
      symbol: "AMZN",
      name: "Amazon",
      exchange: "NASDAQ",
      volume: 22972,
      momentum_score: 93.77,
    },
    {
      symbol: "MSFT",
      name: "Microsoft",
      exchange: "NASDAQ",
      volume: 37081,
      momentum_score: 12.11,
    },
    {
      symbol: "GOOG",
      name: "Google",
      exchange: "NASDAQ",
      volume: 43483,
      momentum_score: 14.88,
    },
    {
      symbol: "TSLA",
      name: "Tesla",
      exchange: "NASDAQ",
      volume: 7431,
      momentum_score: 80.78,
    },
    {
      symbol: "AMZN",
      name: "Amazon",
      exchange: "NASDAQ",
      volume: 26862,
      momentum_score: 3.57,
    },
    {
      symbol: "AAPL",
      name: "Apple",
      exchange: "NASDAQ",
      volume: 21207,
      momentum_score: 65.5,
    },
  ];
  const downsideData = [
    {
      symbol: "MSFT",
      name: "Microsoft",
      exchange: "NASDAQ",
      volume: 35761,
      momentum_score: -28.78,
    },
    {
      symbol: "AAPL",
      name: "Apple",
      exchange: "NASDAQ",
      volume: 13590,
      momentum_score: -21.13,
    },
    {
      symbol: "TSLA",
      name: "Tesla",
      exchange: "NASDAQ",
      volume: 44848,
      momentum_score: -18.13,
    },
    {
      symbol: "GOOG",
      name: "Google",
      exchange: "NASDAQ",
      volume: 3105,
      momentum_score: -82.72,
    },
    {
      symbol: "MSFT",
      name: "Microsoft",
      exchange: "NASDAQ",
      volume: 6462,
      momentum_score: -63.24,
    },
    {
      symbol: "AMZN",
      name: "Amazon",
      exchange: "NASDAQ",
      volume: 45595,
      momentum_score: -47.83,
    },
    {
      symbol: "GOOG",
      name: "Google",
      exchange: "NASDAQ",
      volume: 36102,
      momentum_score: -24.25,
    },
    {
      symbol: "TSLA",
      name: "Tesla",
      exchange: "NASDAQ",
      volume: 37557,
      momentum_score: -87.89,
    },
    {
      symbol: "GOOG",
      name: "Google",
      exchange: "NASDAQ",
      volume: 18564,
      momentum_score: -81.73,
    },
    {
      symbol: "MSFT",
      name: "Microsoft",
      exchange: "NASDAQ",
      volume: 34743,
      momentum_score: -97.89,
    },
    {
      symbol: "AAPL",
      name: "Apple",
      exchange: "NASDAQ",
      volume: 30584,
      momentum_score: -86.32,
    },
    {
      symbol: "GOOG",
      name: "Google",
      exchange: "NASDAQ",
      volume: 48445,
      momentum_score: -25.65,
    },
    {
      symbol: "AMZN",
      name: "Amazon",
      exchange: "NASDAQ",
      volume: 36271,
      momentum_score: -15.87,
    },
    {
      symbol: "TSLA",
      name: "Tesla",
      exchange: "NASDAQ",
      volume: 4646,
      momentum_score: -30.68,
    },
    {
      symbol: "MSFT",
      name: "Microsoft",
      exchange: "NASDAQ",
      volume: 6927,
      momentum_score: -12.17,
    },
  ];

  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthCheck();
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate("/not-auth");
      }
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
      <Sidebar tab={"Swing Center"} />
      <div className="flex flex-col w-full bg-white">
        <DashboardHeaderLight
          title={"Swing Center"}
          subTitle={"Potential stocks for swing trading."}
        />
        <hr className="border-gray-600 my-5 mx-5" />

        <div className="flex flex-col md:flex-col lg:flex-row justify-around px-4 items-center min-h-1/2">
          <div className="flex flex-col w-full md:w-[full] lg:w-[40%] mt-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Upside Potential
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableLight data={upsideData} columns={columns} />
            )}
          </div>

          <div className="flex flex-col w-full md:w-[full] lg:w-[40%] mt-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Downside Potential
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableLight data={downsideData} columns={columns} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
