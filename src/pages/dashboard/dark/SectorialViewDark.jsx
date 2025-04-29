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
  CartesianGrid,
  ReferenceLine,
  Cell,
} from "recharts";
import SortableTableDark from "../sortTableComponent/SortableTableDark";
import SectorialViewChart from "../../../components/SectorialViewChart";

export default function SectorialViewDark() {
  const stockData = [
    { name: "Stock A", change: 1.2 },
    { name: "Stock B", change: -0.5 },
    { name: "Stock C", change: 2.1 },
    { name: "Stock D", change: -0.8 },
    { name: "Stock E", change: 1.6 },
    { name: "Stock A", change: 1.2 },
    { name: "Stock B", change: -0.5 },
    { name: "Stock C", change: 2.1 },
    { name: "Stock D", change: -0.8 },
    { name: "Stock E", change: 1.6 },
    { name: "Stock A", change: 1.2 },
    { name: "Stock B", change: -0.5 },
    { name: "Stock C", change: 2.1 },
    { name: "Stock D", change: -0.8 },
    { name: "Stock E", change: 1.6 },
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
      <Sidebar tab={"Sectorial View"} />
      <div className="flex flex-col w-full bg-black">
        <DashboardHeaderDark
          title={"Sectorial View"}
          subTitle={"asdasdasdas"}
        />
        <hr className="border-gray-600 my-5 mx-5" />

        <div className="my-10 px-4">
          <SectorialViewChart data={stockData} />
        </div>
        {/* Block 1 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Technology Services
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Finance Sector
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Energy Sector
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Healthcare
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Consumer Goods
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Utilities
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 4 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Industrials
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Real Estate
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 5 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Communication Services
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Materials
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 6 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Transportation
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Tech Hardware
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>

        {/* Block 7 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Financial Tech
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-white text-xs md:text-sm lg:text-base mb-1">
              Insurance
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
