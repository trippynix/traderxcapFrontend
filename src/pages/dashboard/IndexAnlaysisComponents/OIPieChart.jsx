import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

function useResponsiveRadius() {
  const [radii, setRadii] = useState({ inner: 60, outer: 100 });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadii({ inner: 40, outer: 70 });
      } else if (width < 768) {
        setRadii({ inner: 60, outer: 90 });
      } else {
        setRadii({ inner: 80, outer: 120 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return radii;
}

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

const OIPieChart = ({ data }) => {
  const { inner, outer } = useResponsiveRadius();
  const [hoveredData, setHoveredData] = useState(null);

  // Calculate Put/Call Ratio (PCR)
  const pcr = (data[1].value / data[0].value).toFixed(2);

  const handleMouseEnter = (entry) => setHoveredData(entry);
  const handleMouseLeave = () => setHoveredData(null);
  return (
    <div className="flex flex-col md:flex-row lg:flex-row bg-[#212429] border border-gray-600 rounded">
      <div className="flex flex-col items-center justify-center text-white w-full md:w-1/2 lg:w-1/2">
        <h2 className="my-2 md:my-4 lg:my-6 text-lg md:text-2xl lg:text-4xl">
          P/C Ratio
        </h2>
        <div className="flex items-center justify-center flex-row md:flex-col lg:flex-col gap-1">
          <h4 className="flex gap-1 mt-1 md:mt-2 lg:mt-3 mb-0 text-sm md:text-lg lg:text-2xl">
            <span className="mt-1 md:mt-0 lg:mt-0 w-3 h-3 md:w-5 md:h-5 lg:w-7 lg:h-7 bg-[#64CE6B] inline-block"></span>
            Total <span className="text-[#64CE6B]">PE</span> OI:{" "}
          </h4>
          <h4 className="flex items-center justify-center rounded-lg bg-[#4C4C84] p-1 md:p-1 lg:p-2 text-sm md:text-lg lg:text-2xl w-full md:w-1/2 lg:w-1/2">
            {data[1].value}
          </h4>
        </div>

        <div className="flex items-center justify-center flex-row md:flex-col lg:flex-col gap-1">
          <h4 className="flex gap-1 mt-5 md:mt-3 lg:mt-3 mb-0 text-sm md:text-lg lg:text-2xl">
            <span className="mt-1 md:mt-0 lg:mt-0 w-3 h-3 md:w-5 md:h-5 lg:w-7 lg:h-7 bg-[#E96667] inline-block"></span>
            Total <span className="text-[#E96667]">CE</span> OI:
          </h4>
          <h4 className="flex items-center justify-center rounded-lg bg-[#4C4C84] mt-4 md:mt-0 lg:mt-0 p-1 md:p-1 lg:p-2 text-sm md:text-lg lg:text-2xl w-full md:w-1/2 lg:w-1/2">
            {data[0].value}
          </h4>
        </div>

        <h4 className="my-4 md:my-4 lg:my-6 text-sm md:text-lg lg:text-2xl font-semibold">
          PCR: {pcr}
        </h4>
      </div>
      <div className="relative w-full sm:w-5/6 md:w-2/3 lg:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={inner}
              outerRadius={outer}
              label={renderCustomizedLabel}
              labelLine={false}
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
