import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "./DashboardHeaderLight";
import SortableTableLight from "../sortTableComponent/SortableTableLight";

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
  return (
    <div className="d-flex flex-row">
      <Sidebar tab={"Money Flux"} />
      <div className="container-fluid d-flex flex-column bg-light">
        <DashboardHeaderLight
          title={"Momentum Spike"}
          subTitle={"asdasdasdas"}
        />
        <hr style={{ color: "black", backgroundColor: "black" }} />
        <div className="d-flex flex-row justify-content-around my-5">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Retail Trade</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Consumer Non-Durables</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around my-5">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Energy Minerals</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Consumer Services</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around my-5">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Producer Manufacturing</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Commercial Services</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around my-5">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Producer Manufacturing</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Commercial Services</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around my-5">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Consumer Durables</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Utilities</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around my-5">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Transportation</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Non-Energy Minerals</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around my-5">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Industrial Services</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Process Industries</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around my-5">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Communications</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <p className="text-dark">Health Services</p>
            {dataLoading ? (
              <p className="text-light">Loading data...</p>
            ) : (
              <SortableTableLight data={data} columns={columns} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
