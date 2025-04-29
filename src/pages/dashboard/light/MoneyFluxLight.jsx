import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "./DashboardHeaderLight";
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
  const rawData = [
    { name: "Technology", change: 2.5 },
    { name: "Finance", change: -1.2 },
    { name: "Healthcare", change: 0.8 },
    { name: "Energy", change: -3.4 },
    { name: "Retail", change: 1.1 },
    { name: "Utilities", change: -0.5 },
    { name: "Telecom", change: 0.0 },
    { name: "Real Estate", change: 4.3 },
    { name: "Materials", change: -2.7 },
    { name: "Industrials", change: 1.9 },
    { name: "Automotive", change: -4.8 },
    { name: "Aerospace", change: 3.2 },
    { name: "Food & Beverage", change: -1.9 },
    { name: "Pharmaceuticals", change: 2.3 },
    { name: "Banking", change: -2.2 },
    { name: "Construction", change: 1.7 },
    { name: "Insurance", change: -0.3 },
    { name: "Tourism", change: 0.6 },
    { name: "Media", change: 2.0 },
    { name: "Technology Services", change: -1.0 },
    { name: "Consumer Electronics", change: 3.9 },
    { name: "Metals & Mining", change: -3.1 },
    { name: "Chemicals", change: 1.4 },
    { name: "Shipping", change: -0.7 },
    { name: "Entertainment", change: 2.8 },
    { name: "E-commerce", change: -2.9 },
    { name: "Education", change: 1.5 },
    { name: "Agriculture", change: -1.6 },
    { name: "Defense", change: 2.1 },
    { name: "Biotech", change: -0.9 },
  ];

  // Step 1: Create size based on absolute change
  const formattedData = rawData
    .map((d) => ({ ...d, size: Math.abs(d.change) }))
    .sort((a, b) => {
      if (a.change >= 0 && b.change < 0) return -1;
      if (a.change < 0 && b.change >= 0) return 1;
      return Math.abs(b.change) - Math.abs(a.change); // Sort by magnitude descending
    });

  const greenData = formattedData
    .filter((d) => d.change >= 0)
    .map((d) => ({ ...d, size: Math.abs(d.change) }));

  const redData = formattedData
    .filter((d) => d.change < 0)
    .map((d) => ({ ...d, size: Math.abs(d.change) }));

  const CustomTooltip = ({ active, payload }) => {
    // Debug: log payload to see what's inside
    if (active && payload && payload.length) {
      const { name, change } = payload[0].payload; // Get the correct data (name and value)
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
          <p>
            <strong>{name}</strong>
          </p>
          <p>Change: {change.toFixed(2)}%</p>
        </div>
      );
    }
    return null;
  };
  // Height of treemap
  const getResponsiveHeight = () => {
    const width = window.innerWidth;
    if (width < 768) {
      return 200; // small screen
    }
    return 400; // medium and large screens
  };

  return (
    <div className="flex flex-row">
      <Sidebar tab={"Money Flux"} />
      <div className="flex flex-col w-full bg-white">
        <DashboardHeaderLight
          title={"Money Flux"}
          subTitle={"Sectorial Flow and Where the smart money is going."}
        />
        <hr className="border-gray-600 my-5 mx-5" />
        <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4 px-4">
          <div className="w-full md:w-1/2 lg:w-1/2">
            <ResponsiveContainer width="100%" height={getResponsiveHeight()}>
              <Treemap
                data={greenData}
                dataKey="size"
                stroke="#fff"
                content={({ x, y, width, height, index }) => {
                  const d = greenData[index];
                  const color = "#64CE6B";
                  return (
                    <g key={`green-cell-${index}`}>
                      <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={color}
                      />
                      {width > 40 && height > 20 && (
                        <text
                          x={x + width / 2}
                          y={y + height / 2}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontWeight={2}
                          fontSize={Math.min(width, height) / 15}
                        >
                          {d.name}
                        </text>
                      )}
                    </g>
                  );
                }}
              >
                <Tooltip content={<CustomTooltip />} />
              </Treemap>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <ResponsiveContainer width="100%" height={getResponsiveHeight()}>
              <Treemap
                data={redData}
                dataKey="size"
                stroke="#fff"
                content={({ x, y, width, height, index }) => {
                  const d = redData[index];
                  const color = "#E96667";
                  return (
                    <g key={`red-cell-${index}`}>
                      <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={color}
                      />
                      {width > 40 && height > 20 && (
                        <text
                          x={x + width / 2}
                          y={y + height / 2}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontWeight={2}
                          fontSize={Math.min(width, height) / 15}
                        >
                          {d.name}
                        </text>
                      )}
                    </g>
                  );
                }}
              >
                <Tooltip content={<CustomTooltip />} />
              </Treemap>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
