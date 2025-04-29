import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Cell,
} from "recharts";

// CUSTOM LEGEND ******************** //
const CustomLegend = () => {
  return (
    <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg flex gap-4 px-4 pb-2 text-sm">
      <div className="flex items-center gap-1">
        <span
          className="w-4 h-4 inline-block"
          style={{ backgroundColor: "#64CE6B" }}
        ></span>
        Positive Change
      </div>
      <div className="flex items-center gap-1">
        <span
          className="w-4 h-4 inline-block"
          style={{ backgroundColor: "#E96667" }}
        ></span>
        Negative Change
      </div>
    </div>
  );
};

// RESPONSIVE BAR SIZE ********************** //
const useResponsiveBarSize = () => {
  const [barSize, setBarSize] = useState(20); // default for large screens

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setBarSize(4); // xs
      else if (width < 768) setBarSize(6); // sm
      else if (width < 1024) setBarSize(10); // md
      else setBarSize(20); // lg+
    };

    handleResize(); // call once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return barSize;
};

// RESPONSIVE AXES FONT SIZE ********************** //
const useResponsiveFontSize = () => {
  const [fontSize, setFontSize] = useState(12); // default

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setFontSize(7); // xs
      else if (width < 768) setFontSize(9); // sm
      else if (width < 1024) setFontSize(9); // md
      else setFontSize(12); // lg+
    };

    handleResize(); // on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return fontSize;
};

// CUSTOM TOOLTIP **************//
// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

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
      <p className="font-bold">{label}</p>
      {payload.map((entry, index) => (
        <span className="font-bold" key={index}>
          {entry.name}:{" "}
          {entry.name === "change" ? `${entry.value}%` : entry.value}
        </span>
      ))}
    </div>
  );
};

const SectorialViewChart = ({ data }) => {
  const fontSize = useResponsiveFontSize();
  const barSize = useResponsiveBarSize();

  return (
    <div className="flex flex-col bg-[#212429] border border-gray-600 rounded items-center justify-center">
      <div className="w-full h-[300px] md:h-[400px] lg:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              stroke="rgba(255, 255, 255, 0.5)"
            />
            <XAxis
              dataKey="name"
              angle={-90}
              textAnchor="end"
              height={80}
              tick={{ fontSize, fill: "white" }}
              stroke="rgba(255, 255, 255, 0.5)"
            />
            <YAxis
              domain={["auto", "auto"]}
              tickFormatter={(tick) => `${tick}`}
              tick={{ fontSize, fill: "white" }}
              stroke="rgba(255, 255, 255, 0.5)"
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(255, 255, 255, 0.3)" }}
            />
            <Bar dataKey="change" barSize={barSize} radius={[5, 5, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.change < 0 ? "#E96667" : "#64CE6B"} // red for negative, green for positive
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <CustomLegend />
    </div>
  );
};

export default SectorialViewChart;
