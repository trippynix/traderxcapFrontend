import React, { useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Total Call OI", value: 1200 }, // Example CE OI
  { name: "Total Put OI", value: 900 }, // Example PE OI
];

const COLORS = ["#E96667", "#64CE6B"]; // Green for CE, Red for PE

// Custom label to display inside the ring
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) / 2; // Position at the center of the segment
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="14"
    >
      {(percent * 100).toFixed(1)}%
    </text>
  );
};

const OIPieChart = () => {
  const [hoveredData, setHoveredData] = useState(null);

  // Calculate Put/Call Ratio (PCR)
  const pcr = (data[1].value / data[0].value).toFixed(2);

  const handleMouseEnter = (entry) => setHoveredData(entry);
  const handleMouseLeave = () => setHoveredData(null);
  return (
    <div className="d-flex flex-row bg-dark border border-secondary rounded">
      <div className="d-flex flex-column align-items-center justify-content-center text-white w-50">
        <h2 className="my-3">P/C Ratio</h2>
        <h4 className="d-flex gap-1 mt-3 mb-0">
          <span
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "#64CE6B",
              display: "inline-block",
            }}
          ></span>
          Total <span style={{ color: "#64CE6B" }}>PE</span> OI:{" "}
        </h4>
        <h4
          className="rounded-3"
          style={{ backgroundColor: "#4c4c84", padding: 7 }}
        >
          {data[1].value}
        </h4>
        <h4 className="d-flex gap-1 mt-3 mb-0">
          <span
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "#E96667",
              display: "inline-block",
            }}
          ></span>
          Total <span style={{ color: "#E96667" }}>CE</span> OI:
        </h4>
        <h4
          className="rounded-3"
          style={{ backgroundColor: "#4c4c84", padding: 7 }}
        >
          {data[0].value}
        </h4>
        <h4 className="my-3">PCR: {pcr}</h4>
      </div>
      <div className="w-50" style={{ position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={80} // Creates the hollow effect
              outerRadius={120} // Controls thickness
              label={renderCustomizedLabel} // Uses custom label function
              labelLine={false} // Removes label lines
              stroke="black"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        {/* Center Info */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            fontSize: "15px",
          }}
        >
          {hoveredData
            ? `${hoveredData.name}: ${hoveredData.value}`
            : `PCR: ${pcr}`}
        </div>
      </div>
    </div>
  );
};

export default OIPieChart;
