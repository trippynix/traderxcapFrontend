import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "./DashboardHeaderLight";
import SortableTableLight from "../sortTableComponent/SortableTableLight";
import { Treemap, ResponsiveContainer, Tooltip, Cell } from "recharts";

export default function MoneyFluxLight() {
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
      <div className="flex flex-col w-full bg-white">
        <DashboardHeaderLight
          title={"Momentum Spike"}
          subTitle={"asdasdasdas"}
        />
        <hr style={{ color: "black", backgroundColor: "black" }} />

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

        {/* Block 1 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Technology Services
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Finance Sector
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Energy Sector
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Healthcare
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Consumer Goods
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Utilities
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 4 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Industrials
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Real Estate
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 5 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Communication Services
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Materials
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 6 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Transportation
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Tech Hardware
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 7 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Financial Tech
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Insurance
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
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
