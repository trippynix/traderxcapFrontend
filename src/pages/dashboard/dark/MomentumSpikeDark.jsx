import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderDark from "./DashboardHeaderDark";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SortableTableDark from "../sortTableComponent/SortableTableDark";

export default function MomentumSpikeDark() {
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

  const API_KEY = import.meta.env.VITE_TWELVE_DATA_API;
  // Fetch data from API
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.twelvedata.com/quote?symbol=AAPL&interval=5min&apikey=${API_KEY}`
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
    <>
      <div className="flex flex-row">
        <Sidebar tab={"Momentum Spike"} />
        <div className="flex flex-col w-full bg-black">
          <DashboardHeaderDark
            title={"Momentum Spike"}
            subTitle={"asdasdasdas"}
          />
          <hr className="border-gray-600 my-5 mx-5" />

          <div className="container mx-auto mt-4 p-3">
            {/* 5 min Momentum */}
            <h4 className="text-center text-xs md:text-sm lg:text-base mb-3 text-white">
              5 min Momentum Spike
            </h4>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <XAxis
                  dataKey="stock"
                  tick={{ fontSize: 10, fill: "#ffffff" }}
                  angle={-90}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fontSize: 12, fill: "#ffffff" }} />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "rgba(255, 255, 255, 0.3)" }}
                />
                <Bar
                  dataKey="volume"
                  fill="#8884d8"
                  barSize={20}
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

            {/* 15 min Momentum */}
            <h4 className="text-center text-xs md:text-sm lg:text-base mb-3 text-white">
              15 min Momentum Spike
            </h4>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <XAxis
                  dataKey="stock"
                  tick={{ fontSize: 10, fill: "#ffffff" }}
                  angle={-90}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fontSize: 12, fill: "#ffffff" }} />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "rgba(255, 255, 255, 0.3)" }}
                />
                <Bar
                  dataKey="volume"
                  fill="#8884d8"
                  barSize={20}
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Two-column table section */}
          <div className="flex flex-col md:flex-row justify-around px-4 mb-25">
            <div className="flex flex-col w-full md:w-[40%] my-4 md:my-0">
              <p className="text-white text-xs md:text-sm lg:text-base mb-1">
                Near Previous Day's High
              </p>
              {dataLoading ? (
                <p className="text-white text-xs md:text-sm lg:text-base">
                  Loading data...
                </p>
              ) : (
                <SortableTableDark data={data} columns={columns} />
              )}
            </div>
            <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
              <p className="text-white text-xs md:text-sm lg:text-base mb-1">
                Near Previous Day's Low
              </p>
              {dataLoading ? (
                <p className="text-white text-xs md:text-sm lg:text-base">
                  Loading data...
                </p>
              ) : (
                <SortableTableDark data={data} columns={columns} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
