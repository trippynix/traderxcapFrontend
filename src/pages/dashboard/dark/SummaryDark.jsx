import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderDark from "./DashboardHeaderDark";
import SortableTableDark from "../sortTableComponent/SortableTableDark";

export default function SummaryDark() {
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
      <div className="flex flex-col w-full bg-black">
        <DashboardHeaderDark
          title={"Summary"}
          subTitle={"Find the Summary of market here."}
        />
        <hr className="border-gray-600 my-5 mx-5" />

        {/* PRE MARKET DATA */}
        <p className="text-sm md:text-lg lg:text-2xl text-center font-bold my-7">
          Pre Market Data
        </p>
        {/* 1st BLOCK OF TABLE */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-2 md:mb-10 lg:mb-10">
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Top Gainers
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>

          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Top Losers
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>
        {/* 2nd BLOCK OF TABLE */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Most Active
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* POST MARKET DATA */}
        <p className="text-sm md:text-lg lg:text-2xl text-center font-bold my-7 mt-30">
          Post Market Data
        </p>
        {/* 1st BLOCK OF TABLE */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-2 md:mb-10 lg:mb-10">
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Top Gainers
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>

          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Top Losers
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>
        {/* 2nd BLOCK OF TABLE */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-25">
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Most Active
            </p>
            {dataLoading ? (
              <p className="text-gray-300">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
