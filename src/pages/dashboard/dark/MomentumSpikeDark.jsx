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
    <div className="d-flex flex-row">
      <Sidebar tab={"Momentum Spike"} />
      <div
        className="container-fluid d-flex flex-column"
        style={{ backgroundColor: "#000000" }}
      >
        <DashboardHeaderDark
          title={"Momentum Spike"}
          subTitle={"asdasdasdas"}
        />
        <hr style={{ color: "white", backgroundColor: "white" }} />
        <div className="container mt-4 p-3">
          {/*----------------------------------------- 5 min Momentum */}
          <h4 className="text-center mb-3 text-light">5 min Momentum Spike</h4>
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
                formatter={(value, name) =>
                  name === "change" ? `${value}%` : value
                }
              />
              <Bar
                dataKey="volume"
                fill="#8884d8"
                barSize={20}
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
          {/*----------------------------------------- 15 min Momentum */}
          <h4 className="text-center mb-3 text-light">15 min Momentum Spike</h4>
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
                formatter={(value, name) =>
                  name === "change" ? `${value}%` : value
                }
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
        <div className="d-flex flex-row justify-content-around">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-white">Technology Services</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-white">Technology Services</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around my-5">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-white">Technology Services</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-white">Technology Services</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableDark data={data} columns={columns} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
