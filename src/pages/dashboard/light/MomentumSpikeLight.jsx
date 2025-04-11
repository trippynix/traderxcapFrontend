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
      <Sidebar tab={"Momentum Spike"} />
      <div className="flex flex-col w-full bg-white">
        <DashboardHeaderLight
          title={"Momentum Spike"}
          subTitle={"asdasdasdas"}
        />
        <hr className="border-black" />
        <div className="container mx-auto mt-4 p-3">
          {/*----------------------------------------- 5 min Momentum */}
          <h4 className="text-center text-xs md:text-sm lg:text-base mb-3 text-black">
            5 min Momentum Spike
          </h4>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <XAxis
                dataKey="stock"
                tick={{ fontSize: 10, fill: "#000000" }}
                angle={-90}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fontSize: 12, fill: "#000000" }} />
              <Tooltip
                formatter={(value, name, props) => [
                  `${props.payload.change}%`,
                  "% Change",
                ]}
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
            <BarChart data={data}>
              <XAxis
                dataKey="stock"
                tick={{ fontSize: 10, fill: "#000000" }}
                angle={-90}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fontSize: 12, fill: "#000000" }} />
              <Tooltip
                formatter={(value, name, props) => [
                  `${props.payload.change}%`,
                  "% Change",
                ]}
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
        <div className="flex flex-col md:flex-row justify-around px-4">
          <div className="flex flex-col w-full md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Technology Services
            </p>
            {dataLoading ? (
              <p className="text-black text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col w-full md:w-[40%] mt-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Electronic Technology
            </p>
            {dataLoading ? (
              <p className="text-black text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around my-4 md:my-5 lg:my-5 px-4">
          <div className="flex flex-col w-full md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Finance
            </p>
            {dataLoading ? (
              <p className="text-black text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col w-full md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Health Technology
            </p>
            {dataLoading ? (
              <p className="text-black text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
