import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import "../../../styles/MarketDepth.css";
import DashboardHeaderLight from "./DashboardHeaderLight";
import SortableTableLight from "../sortTableComponent/SortableTableLight";

export default function MarketDepthDark() {
  const columns = [
    { key: "symbol", label: "Symbol" },
    { key: "currency", label: "Currency" },
    { key: "exchange", label: "Exchange" },
    { key: "country", label: "Country" },
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
    <div className="d-flex flex-row">
      <Sidebar tab={"Market Depth"} />
      <div className="container-fluid d-flex flex-column">
        <DashboardHeaderLight
          title={"Market Depth"}
          subTitle={"ASdasdasdasd"}
        />
        <hr />
        <div className="d-flex flex-row justify-content-around">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Momentum Stocks</p>
            {dataLoading ? (
              <p className="text-dark">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>

          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Volume Spike</p>
            {dataLoading ? (
              <p className="text-dark">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around my-5">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Volatility</p>
            {dataLoading ? (
              <p className="text-dark">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Top Gainers and Losers</p>
            {dataLoading ? (
              <p className="text-dark">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>{" "}
          {/* ONLY FOR 4 COLUMNS OF PREDEFINED NAME CHANGE COL NAMES IN COMPONENT JSX TOO IF CHANGED HERE */}
        </div>
      </div>
    </div>
  );
}
