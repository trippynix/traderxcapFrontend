import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderDark from "./DashboardHeaderDark";
import { Treemap, ResponsiveContainer, Tooltip, Cell } from "recharts";
import SortableTableDark from "../sortTableComponent/SortableTableDark";

export default function MoneyFluxDark() {
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

  // Calculate % open change
  const formattedData = data.map((stock) => {
    const percentChange =
      ((stock.open - stock.previousClose) / stock.previousClose) * 100;
    return {
      name: stock.symbol,
      size: Math.abs(percentChange), // Block size
      value: percentChange, // Color indicator
    };
  });

  // Color function
  const getColor = (value) => (value >= 0 ? "#4caf50" : "#f44336"); // Green for positive, red for negative

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2.5 border border-gray-300 rounded shadow">
          <p>
            <strong>{payload[0].payload.name}</strong>
          </p>
          <p>% Open Change: {payload[0].payload.value.toFixed(2)}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-row">
      <Sidebar tab={"Money Flux"} />
      <div className="flex flex-col w-full bg-black">
        <DashboardHeaderDark
          title={"Money Flux"}
          subTitle={"Sectorial Flow and Where the smart money is going."}
        />
        <hr className="border-gray-600 my-5 mx-5" />

        {/* <ResponsiveContainer width="100%" height={400}>
          <Treemap data={formattedData} dataKey="size" stroke="#fff">
            {formattedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.value)} />
            ))}
          </Treemap>
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
          />
        </ResponsiveContainer> */}
      </div>
    </div>
  );
}
