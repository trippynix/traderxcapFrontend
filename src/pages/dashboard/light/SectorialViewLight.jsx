import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "./DashboardHeaderLight";
import SortableTableLight from "../sortTableComponent/SortableTableLight";
import SectorialViewChart from "../../../components/SectorialViewChart";

export default function SectorialViewLight() {
  const sectorData = [
    { name: "Technology Services", change: 1.23 },
    { name: "Finance", change: -0.48 },
    { name: "Energy", change: 1.58 },
    { name: "Healthcare", change: -0.31 },
    { name: "Consumer Goods", change: 0.84 },
    { name: "Utilities", change: 0.91 },
    { name: "Industrials", change: -0.15 },
    { name: "Real Estate", change: 0.57 },
    { name: "Communication Services", change: 1.09 },
    { name: "Materials", change: -0.75 },
    { name: "Transportation", change: 1.12 },
    { name: "Tech Hardware", change: 1.45 },
    { name: "Financial Tech", change: 1.34 },
    { name: "Insurance", change: -0.22 },
  ];

  // TECH SERVICES DATA *************//
  const techServicesSectorData = [
    {
      symbol: "AAPL",
      exchange: "NASDAQ",
      percentChange: 1.23,
      volume: 65200000,
    },
    {
      symbol: "MSFT",
      exchange: "NASDAQ",
      percentChange: 0.98,
      volume: 48900000,
    },
    {
      symbol: "GOOGL",
      exchange: "NASDAQ",
      percentChange: -0.45,
      volume: 31200000,
    },
    {
      symbol: "CRM",
      exchange: "NYSE",
      percentChange: 2.34,
      volume: 14500000,
    },
    {
      symbol: "ADBE",
      exchange: "NASDAQ",
      percentChange: 0.67,
      volume: 12300000,
    },
    {
      symbol: "ORCL",
      exchange: "NYSE",
      percentChange: -1.12,
      volume: 17600000,
    },
    {
      symbol: "INTU",
      exchange: "NASDAQ",
      percentChange: 1.01,
      volume: 8700000,
    },
    {
      symbol: "SNOW",
      exchange: "NYSE",
      percentChange: 3.89,
      volume: 11200000,
    },
    {
      symbol: "ZS",
      exchange: "NASDAQ",
      percentChange: -0.87,
      volume: 6900000,
    },
    {
      symbol: "DDOG",
      exchange: "NASDAQ",
      percentChange: 2.15,
      volume: 7500000,
    },
  ];

  // FINANCE DATA ****************//
  const financeSectorData = [
    {
      symbol: "JPM",
      exchange: "NYSE",
      percentChange: 1.42,
      volume: 28200000,
    },
    {
      symbol: "BAC",
      exchange: "NYSE",
      percentChange: -0.75,
      volume: 33500000,
    },
    {
      symbol: "WFC",
      exchange: "NYSE",
      percentChange: 0.98,
      volume: 29800000,
    },
    {
      symbol: "GS",
      exchange: "NYSE",
      percentChange: 1.67,
      volume: 8600000,
    },
    {
      symbol: "MS",
      exchange: "NYSE",
      percentChange: 0.51,
      volume: 11200000,
    },
    {
      symbol: "AXP",
      exchange: "NYSE",
      percentChange: -1.23,
      volume: 9400000,
    },
    {
      symbol: "C",
      exchange: "NYSE",
      percentChange: 0.35,
      volume: 22300000,
    },
    {
      symbol: "USB",
      exchange: "NYSE",
      percentChange: -0.88,
      volume: 18800000,
    },
    {
      symbol: "PNC",
      exchange: "NYSE",
      percentChange: 1.05,
      volume: 7700000,
    },
    {
      symbol: "SCHW",
      exchange: "NYSE",
      percentChange: 2.14,
      volume: 19400000,
    },
  ];

  // ENERGY DATA **************//
  const energySectorData = [
    {
      symbol: "XOM",
      exchange: "NYSE",
      percentChange: 1.83,
      volume: 30500000,
    },
    {
      symbol: "CVX",
      exchange: "NYSE",
      percentChange: -0.91,
      volume: 22500000,
    },
    {
      symbol: "COP",
      exchange: "NYSE",
      percentChange: 2.34,
      volume: 17800000,
    },
    {
      symbol: "PSX",
      exchange: "NYSE",
      percentChange: 0.47,
      volume: 9300000,
    },
    {
      symbol: "MPC",
      exchange: "NYSE",
      percentChange: -1.15,
      volume: 8600000,
    },
    {
      symbol: "EOG",
      exchange: "NYSE",
      percentChange: 1.12,
      volume: 11700000,
    },
    {
      symbol: "VLO",
      exchange: "NYSE",
      percentChange: 0.88,
      volume: 10600000,
    },
    {
      symbol: "HES",
      exchange: "NYSE",
      percentChange: -0.34,
      volume: 7200000,
    },
    {
      symbol: "PXD",
      exchange: "NYSE",
      percentChange: 2.75,
      volume: 6900000,
    },
    {
      symbol: "OXY",
      exchange: "NYSE",
      percentChange: 3.21,
      volume: 25200000,
    },
  ];

  // HEALTHCARE DATA *********** //
  const healthcareSectorData = [
    {
      symbol: "JNJ",
      exchange: "NYSE",
      percentChange: 1.25,
      volume: 18200000,
    },
    {
      symbol: "PFE",
      exchange: "NYSE",
      percentChange: -0.74,
      volume: 32100000,
    },
    {
      symbol: "UNH",
      exchange: "NYSE",
      percentChange: 0.62,
      volume: 9400000,
    },
    {
      symbol: "MRK",
      exchange: "NYSE",
      percentChange: 1.02,
      volume: 20700000,
    },
    {
      symbol: "LLY",
      exchange: "NYSE",
      percentChange: 2.95,
      volume: 8900000,
    },
    {
      symbol: "ABT",
      exchange: "NYSE",
      percentChange: -1.18,
      volume: 12200000,
    },
    {
      symbol: "MDT",
      exchange: "NYSE",
      percentChange: 0.43,
      volume: 8700000,
    },
    {
      symbol: "BMY",
      exchange: "NYSE",
      percentChange: -0.65,
      volume: 15700000,
    },
    {
      symbol: "CVS",
      exchange: "NYSE",
      percentChange: 0.85,
      volume: 11100000,
    },
    {
      symbol: "GILD",
      exchange: "NASDAQ",
      percentChange: 1.76,
      volume: 9700000,
    },
  ];

  // CONSUMER GOODS DATA *****************//
  const consumerGoodsData = [
    {
      symbol: "PG",
      exchange: "NYSE",
      percentChange: 0.78,
      volume: 14200000,
    },
    {
      symbol: "KO",
      exchange: "NYSE",
      percentChange: -0.56,
      volume: 18800000,
    },
    {
      symbol: "PEP",
      exchange: "NASDAQ",
      percentChange: 0.43,
      volume: 11200000,
    },
    {
      symbol: "PM",
      exchange: "NYSE",
      percentChange: -1.02,
      volume: 9600000,
    },
    {
      symbol: "UL",
      exchange: "NYSE",
      percentChange: 0.89,
      volume: 8800000,
    },
    {
      symbol: "CL",
      exchange: "NYSE",
      percentChange: 1.34,
      volume: 10300000,
    },
    {
      symbol: "KMB",
      exchange: "NYSE",
      percentChange: -0.21,
      volume: 7600000,
    },
    {
      symbol: "TAP",
      exchange: "NYSE",
      percentChange: 0.67,
      volume: 5400000,
    },
    {
      symbol: "GIS",
      exchange: "NYSE",
      percentChange: -0.78,
      volume: 8100000,
    },
    {
      symbol: "CLX",
      exchange: "NYSE",
      percentChange: 1.59,
      volume: 4900000,
    },
  ];

  // UTILITIES DATA *****************//
  const utilitiesData = [
    {
      symbol: "NEE",
      exchange: "NYSE",
      percentChange: 1.12,
      volume: 10400000,
    },
    {
      symbol: "DUK",
      exchange: "NYSE",
      percentChange: -0.43,
      volume: 8300000,
    },
    {
      symbol: "SO",
      exchange: "NYSE",
      percentChange: 0.67,
      volume: 7200000,
    },
    {
      symbol: "D",
      exchange: "NYSE",
      percentChange: -1.05,
      volume: 6100000,
    },
    {
      symbol: "AEP",
      exchange: "NASDAQ",
      percentChange: 0.89,
      volume: 6800000,
    },
    {
      symbol: "EXC",
      exchange: "NASDAQ",
      percentChange: 0.32,
      volume: 7400000,
    },
    {
      symbol: "PEG",
      exchange: "NYSE",
      percentChange: -0.25,
      volume: 5900000,
    },
    {
      symbol: "ED",
      exchange: "NYSE",
      percentChange: 1.48,
      volume: 5300000,
    },
    {
      symbol: "XEL",
      exchange: "NASDAQ",
      percentChange: 0.14,
      volume: 4700000,
    },
    {
      symbol: "WEC",
      exchange: "NYSE",
      percentChange: -0.61,
      volume: 5100000,
    },
  ];

  // INDUSTRIALS DATA **********//
  const industrialsData = [
    {
      symbol: "HON",
      exchange: "NASDAQ",
      percentChange: 0.75,
      volume: 8100000,
    },
    {
      symbol: "GE",
      exchange: "NYSE",
      percentChange: -0.38,
      volume: 9500000,
    },
    {
      symbol: "UPS",
      exchange: "NYSE",
      percentChange: 1.24,
      volume: 7200000,
    },
    {
      symbol: "CAT",
      exchange: "NYSE",
      percentChange: 0.57,
      volume: 6800000,
    },
    {
      symbol: "MMM",
      exchange: "NYSE",
      percentChange: -1.15,
      volume: 5400000,
    },
    {
      symbol: "RTX",
      exchange: "NASDAQ",
      percentChange: 0.91,
      volume: 7600000,
    },
    {
      symbol: "LMT",
      exchange: "NYSE",
      percentChange: -0.62,
      volume: 4900000,
    },
    {
      symbol: "BA",
      exchange: "NYSE",
      percentChange: 0.39,
      volume: 8700000,
    },
    {
      symbol: "DE",
      exchange: "NYSE",
      percentChange: -0.48,
      volume: 6100000,
    },
    {
      symbol: "GD",
      exchange: "NYSE",
      percentChange: 0.66,
      volume: 5300000,
    },
  ];

  // REAL ESTATE DATA *************//
  const realEstateData = [
    {
      symbol: "AMT",
      exchange: "NYSE",
      percentChange: 0.54,
      volume: 4200000,
    },
    {
      symbol: "PLD",
      exchange: "NYSE",
      percentChange: -0.71,
      volume: 3900000,
    },
    {
      symbol: "CCI",
      exchange: "NYSE",
      percentChange: 0.83,
      volume: 3600000,
    },
    {
      symbol: "EQIX",
      exchange: "NASDAQ",
      percentChange: -1.04,
      volume: 4700000,
    },
    {
      symbol: "SPG",
      exchange: "NYSE",
      percentChange: 0.48,
      volume: 3100000,
    },
    {
      symbol: "WELL",
      exchange: "NYSE",
      percentChange: 0.91,
      volume: 3400000,
    },
    {
      symbol: "AVB",
      exchange: "NYSE",
      percentChange: -0.62,
      volume: 2900000,
    },
    {
      symbol: "DLR",
      exchange: "NYSE",
      percentChange: 1.12,
      volume: 4100000,
    },
    {
      symbol: "VTR",
      exchange: "NYSE",
      percentChange: -0.25,
      volume: 2800000,
    },
    {
      symbol: "EQR",
      exchange: "NYSE",
      percentChange: 0.39,
      volume: 3300000,
    },
  ];

  // COMMUNICATION DATA **********//
  const communicationServicesData = [
    {
      symbol: "GOOGL",
      exchange: "NASDAQ",
      percentChange: 1.25,
      volume: 18200000,
    },
    {
      symbol: "META",
      exchange: "NASDAQ",
      percentChange: -0.48,
      volume: 24500000,
    },
    {
      symbol: "VZ",
      exchange: "NYSE",
      percentChange: 0.31,
      volume: 17200000,
    },
    {
      symbol: "T",
      exchange: "NYSE",
      percentChange: -0.77,
      volume: 20900000,
    },
    {
      symbol: "NFLX",
      exchange: "NASDAQ",
      percentChange: 2.14,
      volume: 16200000,
    },
    {
      symbol: "DIS",
      exchange: "NYSE",
      percentChange: 0.87,
      volume: 19800000,
    },
    {
      symbol: "CHTR",
      exchange: "NASDAQ",
      percentChange: -1.21,
      volume: 5200000,
    },
    {
      symbol: "CMCSA",
      exchange: "NASDAQ",
      percentChange: 0.56,
      volume: 13900000,
    },
    {
      symbol: "TMUS",
      exchange: "NASDAQ",
      percentChange: -0.36,
      volume: 8800000,
    },
    {
      symbol: "ROKU",
      exchange: "NASDAQ",
      percentChange: 1.78,
      volume: 6200000,
    },
  ];

  // MATERIALS DATA **********//
  const materialsSectorData = [
    {
      symbol: "DD",
      exchange: "NYSE",
      percentChange: 0.94,
      volume: 6200000,
    },
    {
      symbol: "LYB",
      exchange: "NYSE",
      percentChange: -0.47,
      volume: 4400000,
    },
    {
      symbol: "APD",
      exchange: "NYSE",
      percentChange: 1.12,
      volume: 5100000,
    },
    {
      symbol: "ECL",
      exchange: "NYSE",
      percentChange: 0.38,
      volume: 2900000,
    },
    {
      symbol: "SHW",
      exchange: "NYSE",
      percentChange: 1.75,
      volume: 4700000,
    },
    {
      symbol: "PPG",
      exchange: "NYSE",
      percentChange: -0.21,
      volume: 4100000,
    },
    {
      symbol: "NUE",
      exchange: "NYSE",
      percentChange: 0.65,
      volume: 7200000,
    },
    {
      symbol: "DOW",
      exchange: "NYSE",
      percentChange: -0.83,
      volume: 8300000,
    },
    {
      symbol: "MLM",
      exchange: "NYSE",
      percentChange: 1.23,
      volume: 3500000,
    },
    {
      symbol: "FCX",
      exchange: "NYSE",
      percentChange: 2.04,
      volume: 14200000,
    },
  ];

  // TRANSPORTATION DATA *********//
  const transportationSectorData = [
    {
      symbol: "UPS",
      exchange: "NYSE",
      percentChange: 0.56,
      volume: 4500000,
    },
    {
      symbol: "DAL",
      exchange: "NYSE",
      percentChange: -1.23,
      volume: 5600000,
    },
    {
      symbol: "FDX",
      exchange: "NYSE",
      percentChange: 2.12,
      volume: 6900000,
    },
    {
      symbol: "UNP",
      exchange: "NYSE",
      percentChange: 1.11,
      volume: 4800000,
    },
    {
      symbol: "CSX",
      exchange: "NYSE",
      percentChange: -0.84,
      volume: 4200000,
    },
    {
      symbol: "LUV",
      exchange: "NYSE",
      percentChange: 1.74,
      volume: 5500000,
    },
    {
      symbol: "KSU",
      exchange: "NYSE",
      percentChange: -0.45,
      volume: 3000000,
    },
    {
      symbol: "AAL",
      exchange: "NYSE",
      percentChange: 0.92,
      volume: 6200000,
    },
    {
      symbol: "RCL",
      exchange: "NYSE",
      percentChange: -1.07,
      volume: 3800000,
    },
    {
      symbol: "NSC",
      exchange: "NYSE",
      percentChange: 1.98,
      volume: 5300000,
    },
  ];

  // TECH HARDWARE DATA ************//
  const techHardwareSectorData = [
    {
      symbol: "AAPL",
      exchange: "NASDAQ",
      percentChange: 1.35,
      volume: 8500000,
    },
    {
      symbol: "MSI",
      exchange: "NYSE",
      percentChange: 0.78,
      volume: 4200000,
    },
    {
      symbol: "INTC",
      exchange: "NASDAQ",
      percentChange: -0.64,
      volume: 9800000,
    },
    {
      symbol: "GOOGL",
      exchange: "NASDAQ",
      percentChange: 2.05,
      volume: 6700000,
    },
    {
      symbol: "NVDA",
      exchange: "NASDAQ",
      percentChange: 3.21,
      volume: 9400000,
    },
    {
      symbol: "AMD",
      exchange: "NASDAQ",
      percentChange: 1.88,
      volume: 8300000,
    },
    {
      symbol: "QCOM",
      exchange: "NASDAQ",
      percentChange: 0.45,
      volume: 5400000,
    },
    {
      symbol: "TXN",
      exchange: "NASDAQ",
      percentChange: -0.32,
      volume: 4600000,
    },
    {
      symbol: "AVGO",
      exchange: "NASDAQ",
      percentChange: 2.5,
      volume: 5000000,
    },
    {
      symbol: "AMAT",
      exchange: "NASDAQ",
      percentChange: 1.1,
      volume: 7200000,
    },
  ];

  // FINTECH DATA **************//
  const fintechSectorData = [
    {
      symbol: "PYPL",
      exchange: "NASDAQ",
      percentChange: 2.78,
      volume: 3200000,
    },
    {
      symbol: "SQ",
      exchange: "NYSE",
      percentChange: 1.45,
      volume: 5500000,
    },
    {
      symbol: "AFRM",
      exchange: "NASDAQ",
      percentChange: 3.02,
      volume: 4500000,
    },
    {
      symbol: "FISV",
      exchange: "NASDAQ",
      percentChange: 1.12,
      volume: 4800000,
    },
    {
      symbol: "V",
      exchange: "NYSE",
      percentChange: 0.93,
      volume: 6700000,
    },
    {
      symbol: "MA",
      exchange: "NYSE",
      percentChange: 2.15,
      volume: 6000000,
    },
    {
      symbol: "GPN",
      exchange: "NYSE",
      percentChange: -0.87,
      volume: 3900000,
    },
    {
      symbol: "AXP",
      exchange: "NYSE",
      percentChange: 1.58,
      volume: 5500000,
    },
    {
      symbol: "COF",
      exchange: "NYSE",
      percentChange: 0.6,
      volume: 4000000,
    },
    {
      symbol: "SPGI",
      exchange: "NYSE",
      percentChange: 1.25,
      volume: 4300000,
    },
  ];

  // INSURANCE DATA *************//
  const insuranceSectorData = [
    {
      symbol: "ALL",
      exchange: "NYSE",
      percentChange: 1.34,
      volume: 2200000,
    },
    {
      symbol: "AIG",
      exchange: "NYSE",
      percentChange: -0.58,
      volume: 3100000,
    },
    {
      symbol: "TRV",
      exchange: "NYSE",
      percentChange: 0.72,
      volume: 3500000,
    },
    {
      symbol: "MET",
      exchange: "NYSE",
      percentChange: 2.09,
      volume: 4200000,
    },
    {
      symbol: "PRU",
      exchange: "NYSE",
      percentChange: 1.97,
      volume: 4600000,
    },
    {
      symbol: "CINF",
      exchange: "NASDAQ",
      percentChange: 0.92,
      volume: 2800000,
    },
    {
      symbol: "HIG",
      exchange: "NYSE",
      percentChange: -0.15,
      volume: 3900000,
    },
    {
      symbol: "LNC",
      exchange: "NYSE",
      percentChange: 1.34,
      volume: 3300000,
    },
    {
      symbol: "UNM",
      exchange: "NYSE",
      percentChange: 0.85,
      volume: 3100000,
    },
    {
      symbol: "AFL",
      exchange: "NYSE",
      percentChange: 1.12,
      volume: 3700000,
    },
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
    { key: "exchange", label: "Exchange" },
    { key: "percentChange", label: "% Change" },
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
      <div className="flex flex-col w-full bg-white">
        <DashboardHeaderLight
          title={"Sectorial View"}
          subTitle={
            "Explore sector performance and key insights to track trends and opportunities."
          }
        />
        <hr className="border-gray-600 my-5 mx-5" />

        <div className="my-10 px-4">
          <SectorialViewChart data={sectorData} />
        </div>
        {/* Block 1 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-2 md:mb-10 lg:mb-10">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Technology Services
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight
                data={techServicesSectorData}
                columns={columns}
              />
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
              <SortableTableLight data={financeSectorData} columns={columns} />
            )}
          </div>
        </div>
        {/* Block 2 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-2 md:mb-10 lg:mb-10">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Energy Sector
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={energySectorData} columns={columns} />
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
              <SortableTableLight
                data={healthcareSectorData}
                columns={columns}
              />
            )}
          </div>
        </div>
        {/* Block 3 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-2 md:mb-10 lg:mb-10">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Consumer Goods
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={consumerGoodsData} columns={columns} />
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
              <SortableTableLight data={utilitiesData} columns={columns} />
            )}
          </div>
        </div>
        {/* Block 4 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-2 md:mb-10 lg:mb-10">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Industrials
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={industrialsData} columns={columns} />
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
              <SortableTableLight data={realEstateData} columns={columns} />
            )}
          </div>
        </div>
        {/* Block 5 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-2 md:mb-10 lg:mb-10">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Communication Services
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight
                data={communicationServicesData}
                columns={columns}
              />
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
              <SortableTableLight
                data={materialsSectorData}
                columns={columns}
              />
            )}
          </div>
        </div>
        {/* Block 6 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-2 md:mb-10 lg:mb-10">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Transportation
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight
                data={transportationSectorData}
                columns={columns}
              />
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
              <SortableTableLight
                data={techHardwareSectorData}
                columns={columns}
              />
            )}
          </div>
        </div>
        {/* Block 7 */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around px-4 mb-25">
          <div className="flex flex-col md:w-[40%] my-4 md:my-0">
            <p className="text-black text-xs md:text-sm lg:text-base mb-1">
              Financial Tech
            </p>
            {dataLoading ? (
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                Loading data...
              </p>
            ) : (
              <SortableTableLight data={fintechSectorData} columns={columns} />
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
              <SortableTableLight
                data={insuranceSectorData}
                columns={columns}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
