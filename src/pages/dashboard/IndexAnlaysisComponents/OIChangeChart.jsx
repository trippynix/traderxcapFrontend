import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { strike: 17000, callChange: 30, putChange: -15 },
  { strike: 17100, callChange: 50, putChange: -20 },
  { strike: 17200, callChange: -10, putChange: 25 },
  { strike: 17300, callChange: -30, putChange: 40 },
  { strike: 17000, callChange: 30, putChange: -15 },
  { strike: 17100, callChange: 50, putChange: -20 },
  { strike: 17200, callChange: -10, putChange: 25 },
  { strike: 17300, callChange: -30, putChange: 40 },
  { strike: 17000, callChange: 30, putChange: -15 },
  { strike: 17100, callChange: 50, putChange: -20 },
  { strike: 17200, callChange: -10, putChange: 25 },
  { strike: 17300, callChange: -30, putChange: 40 },
  { strike: 17000, callChange: 30, putChange: -15 },
  { strike: 17100, callChange: 50, putChange: -20 },
  { strike: 17200, callChange: -10, putChange: 25 },
  { strike: 17300, callChange: -30, putChange: 40 },
];

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

// Custom Tooltip with SVG Boxes
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div className="bg-[#4C4C84] p-[10px] rounded text-white border border-[#ccc] flex flex-col">
        <p>
          <strong className="font-light">Strike Price:</strong> {data.strike}
        </p>

        {/* Call OI */}
        <div className="flex items-center">
          <svg width="12" height="12" style={{ border: "solid 1px white" }}>
            <rect width="12" height="12" fill="#E96667" />
          </svg>
          <span className="ms-2">
            <strong className="font-light">Call OI Change:</strong>{" "}
            {data.callChange}
          </span>
        </div>

        {/* Put OI */}
        <div className="flex items-center">
          <svg width="12" height="12" style={{ border: "solid 1px white" }}>
            <rect width="12" height="12" fill="#64CE6B" />
          </svg>
          <span className="ms-2">
            <strong className="font-light">Put OI Change:</strong>{" "}
            {data.putChange}
          </span>
        </div>
      </div>
    );
  }
  return null;
};
const OIChangeChart = () => {
  const barSize = useResponsiveBarSize();
  const fontSize = useResponsiveFontSize();
  return (
    <div className="h-35vh sm:h-50vh md:h-55vh w-full">
      <ResponsiveContainer
        width={"100%"}
        height={300}
        className="bg-[#212429] border border-gray-600 rounded"
      >
        <BarChart
          data={data}
          margin={{ top: 40, right: 5, left: -30, bottom: 5 }}
        >
          {/* Grid with faint lines */}
          <CartesianGrid
            stroke="rgba(255, 255, 255, 0.5)"
            strokeDasharray="0"
          />

          {/* X and Y Axes */}
          <XAxis
            dataKey="strike"
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{ fontSize, fill: "white" }}
          />
          <YAxis
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{ fontSize, fill: "white" }}
          />
          <Legend
            verticalAlign="bottom"
            content={({ payload }) => (
              <div className="w-full flex items-center justify-center mt-2 ms-4 md:ms-0 lg:ms-0">
                {payload?.map((entry, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-2 ms-2"
                  >
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    ></span>
                    <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg">
                      {entry.value === "callChange"
                        ? "Call OI Change"
                        : "Put OI Change"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          />

          {/* Tooltip */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(255, 255, 255, 0.3)" }}
          />

          {/* Bars for Call and Put OI Change */}
          <Bar
            dataKey="callChange"
            barSize={barSize}
            fill="#E96667"
            name="callChange"
          />
          <Bar
            dataKey="putChange"
            barSize={barSize}
            fill="#64CE6B"
            name="putChange"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OIChangeChart;
