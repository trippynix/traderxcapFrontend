import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { type: "Call Chng", value: -50 }, // Positive CE OI Change (Red)
  { type: "Put Chng", value: 70 }, // Negative PE OI Change (Red)
];

// Calculate Y-axis domain dynamically (50% more than max absolute value)
const maxAbsValue = Math.max(...data.map((d) => Math.abs(d.value)));
const yDomain = [-(maxAbsValue * 1.5), maxAbsValue * 1.5];

const getColor = (entry) => {
  if (entry.type === "Call Chng") {
    return entry.value >= 0 ? "#E96667" : "#64CE6B"; // Red if +, Green if -
  } else {
    return entry.value >= 0 ? "#64CE6B" : "#E96667"; // Green if +, Red if -
  }
};

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { type, value } = payload[0].payload;
    const color = getColor(payload[0].payload);

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
          paddingBottom: 0,
        }}
      >
        <p>{type}</p>
        <p>{`Value: ${value}`}</p>
      </div>
    );
  }

  return null;
};

const OIChangeBarGraph = () => {
  return (
    <div className="bg-dark border border-secondary rounded w-100">
      <ResponsiveContainer className="pe-5" width="100%" height="75%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            stroke="rgba(255, 255, 255, 0.2)"
            strokeDasharray="0"
            vertical={false}
          />
          <XAxis
            dataKey="type"
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{ fontSize: 12, fill: "white" }}
          />
          <YAxis
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{ fontSize: 12, fill: "white" }}
            domain={yDomain} // Set the dynamic domain
            tickCount={7}
          />
          <Tooltip
            content={CustomTooltip}
            cursor={{ fill: "rgba(255, 255, 255, 0.3)" }}
          />

          <Bar barSize={40} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-white d-flex flex-column align-items-center">
        <h5>Change in P/C</h5>
        <small>
          <small style={{ color: "#E96667" }}>Call</small> OI Change:{" "}
          {data[0].value}
        </small>
        <small>
          <small style={{ color: "#64CE6B" }}>Put</small> OI Change:{" "}
          {data[1].value}
        </small>
      </div>
    </div>
  );
};

export default OIChangeBarGraph;
