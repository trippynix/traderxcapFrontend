import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import "../../../styles/MarketDepth.css";
import DashboardHeaderDark from "./DashboardHeaderDark";
import SortableTableDark from "../sortTableComponent/SortableTableDark";

export default function MarketDepthDark() {
  const columns = [
    { key: "symbol", label: "Symbol" },
    { key: "name", label: "Name" },
    { key: "exchange", label: "Exchange" },
    { key: "volume", label: "Volume" },
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
      <Sidebar tab={"Market Depth"} />
      <div className="flex flex-col w-full bg-black">
        <DashboardHeaderDark
          title={"Market Depth"}
          subTitle={"Market Stock Data"}
        />
        <hr className="border-gray-600 my-5 mx-5" />

        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Momentum Stocks
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>

          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Volume Spike
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row  justify-around px-4">
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

          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Top Gainers and Losers
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
          {/* ONLY FOR 4 COLUMNS OF PREDEFINED NAME CHANGE COL NAMES IN COMPONENT JSX TOO IF CHANGED HERE */}
        </div>
      </div>
    </div>
  );
}
