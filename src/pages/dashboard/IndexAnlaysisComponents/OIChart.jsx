import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Layer,
  Rectangle,
} from "recharts";

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

const data = [
  { strike: "17000", callOI: 100, putOI: 80, callChange: -20, putChange: 10 },
  { strike: "17100", callOI: 120, putOI: 90, callChange: 30, putChange: -15 },
  { strike: "17200", callOI: 110, putOI: 100, callChange: -10, putChange: 20 },
  { strike: "17300", callOI: 140, putOI: 120, callChange: 15, putChange: -25 },
  { strike: "17000", callOI: 100, putOI: 80, callChange: -20, putChange: 10 },
  { strike: "17100", callOI: 120, putOI: 90, callChange: 30, putChange: -15 },
  { strike: "17200", callOI: 110, putOI: 100, callChange: -10, putChange: 20 },
  { strike: "17300", callOI: 140, putOI: 120, callChange: 15, putChange: -25 },
  { strike: "17000", callOI: 100, putOI: 80, callChange: -20, putChange: 10 },
  { strike: "17100", callOI: 120, putOI: 90, callChange: 30, putChange: -15 },
  { strike: "17200", callOI: 110, putOI: 100, callChange: -10, putChange: 20 },
  { strike: "17300", callOI: 140, putOI: 120, callChange: 15, putChange: -25 },
];

const ZigzagPattern = ({ id, color }) => (
  <defs>
    <pattern id={id} width="10" height="10" patternUnits="userSpaceOnUse">
      <line x1="0" y1="10" x2="10" y2="0" stroke={color} strokeWidth="2" />
    </pattern>
  </defs>
);

const renderCustomBar = (props, type) => {
  const { x, y, width, height, payload } = props;
  const oiValue = type === "call" ? payload.callOI : payload.putOI;
  const changeValue = type === "call" ? payload.callChange : payload.putChange;
  const color = type === "call" ? "#E96667" : "#64CE6B";
  const colorPattern = type === "call" ? "red" : "green";

  // Define a unique pattern ID
  const patternId = `zigzag-${type}-${x}-${y}`;
  return (
    <Layer>
      <ZigzagPattern id={patternId} color={colorPattern} />
      {/* Main Bar */}
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color}
        stroke={color}
        strokeWidth={1}
      />
      {/* Hollow or Dashed Part at Top */}
      {changeValue < 0 ? (
        <Rectangle
          x={x}
          y={y}
          width={width}
          height={Math.abs(changeValue) * 2}
          fill="#212529"
          stroke={color}
          strokeWidth={1}
        />
      ) : (
        <Rectangle
          x={x}
          y={y}
          width={width}
          height={Math.abs(changeValue) * 2}
          fill={`url(#${patternId})`}
          stroke={color}
          strokeWidth={1}
        />
      )}
    </Layer>
  );
};

// Custom Tooltip with SVG Boxes
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

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
        }}
      >
        <p>
          <strong className="fw-light">Strike Price:</strong> {data.strike}
        </p>

        {/* Call OI */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="12" height="12" style={{ border: "solid 1px white" }}>
            <rect width="12" height="12" fill="#E96667" />
          </svg>
          <span style={{ marginLeft: 5 }}>
            <strong className="fw-light">Call OI:</strong> {data.callOI}
          </span>
        </div>

        {/* Call Change */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="12" height="12" style={{ border: "solid 1px white" }}>
            {data.callChange < 0 ? (
              <rect width="12" height="12" fill="#212529" />
            ) : (
              <>
                <ZigzagPattern id={`zigzag-call-${data.strike}`} color="red" />
                <svg width="12" height="12">
                  {/* Solid Green Background */}
                  <rect width="12" height="12" fill="#E96667" />

                  {/* Zigzag Pattern Overlay */}
                  <rect
                    width="12"
                    height="12"
                    fill={`url(#zigzag-call-${data.strike})`}
                  />
                </svg>
              </>
            )}
          </svg>
          <span style={{ marginLeft: 5 }}>
            <strong className="fw-light">Call Change:</strong> {data.callChange}
          </span>
        </div>

        {/* Put OI */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="12" height="12" style={{ border: "solid 1px white" }}>
            <rect width="12" height="12" fill="#64CE6B" />
          </svg>
          <span style={{ marginLeft: 5 }}>
            <strong className="fw-light">Put OI:</strong> {data.putOI}
          </span>
        </div>

        {/* Put Change */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="12" height="12" style={{ border: "solid 1px white" }}>
            {data.putChange < 0 ? (
              <rect width="12" height="12" fill="#212529" />
            ) : (
              <>
                <ZigzagPattern id={`zigzag-put-${data.strike}`} color="green" />
                <svg width="12" height="12">
                  <rect width="12" height="12" fill="#64CE6B" />

                  <rect
                    width="12"
                    height="12"
                    fill={`url(#zigzag-put-${data.strike})`}
                  />
                </svg>
              </>
            )}
          </svg>
          <span style={{ marginLeft: 5 }}>
            <strong className="fw-light">Put Change:</strong> {data.putChange}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const OIChart = () => {
  const barSize = useResponsiveBarSize();
  const fontSize = useResponsiveFontSize();

  return (
    <div className="w-full h-[35vh] sm:h-[50vh] md:h-[55vh]">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="bg-[#212429] border border-gray-600 rounded"
      >
        <BarChart
          data={data}
          margin={{ top: 40, right: 5, left: -30, bottom: 5 }}
        >
          <CartesianGrid
            stroke="rgba(255, 255, 255, 0.2)"
            strokeDasharray="0"
          />
          <XAxis
            dataKey="strike"
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{ fontSize, fill: "white" }}
          />
          <YAxis
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{ fontSize, fill: "white" }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(255, 255, 255, 0.3)" }}
          />
          <Legend
            verticalAlign="bottom"
            content={({ payload }) => (
              <div className="w-full flex justify-center mt-2 space-x-4 ms-4 md:ms-0 lg:ms-0">
                {payload?.map((entry, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    ></span>
                    <span className="text-white text-xs md:text-sm lg:text-lg">
                      {entry.value === "callOI" ? "Call OI" : "Put OI"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          />

          {/* Call OI Bars */}
          <Bar
            dataKey="callOI"
            barSize={barSize}
            fill="#E96667"
            shape={(props) => renderCustomBar(props, "call")}
          />

          {/* Put OI Bars */}
          <Bar
            dataKey="putOI"
            barSize={barSize}
            fill="#64CE6B"
            shape={(props) => renderCustomBar(props, "put")}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OIChart;
