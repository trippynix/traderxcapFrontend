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
];

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
  return (
    <div className="h-60vh w-full">
      <ResponsiveContainer
        width={"100%"}
        height={400}
        className="bg-[#212429] border border-gray-600 rounded"
      >
        <BarChart
          data={data}
          margin={{ top: 40, right: 30, left: 20, bottom: 20 }}
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
            tick={{ fontSize: 12, fill: "white" }}
          />
          <YAxis
            stroke="rgba(255, 255, 255, 0.2)"
            tick={{ fontSize: 12, fill: "white" }}
          />
          <Legend
            formatter={(value, entry) => {
              return (
                <span className="text-white">
                  {value === "callChange" ? "Call OI Change" : "Put OI Change"}
                </span>
              );
            }}
          />

          {/* Tooltip */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(255, 255, 255, 0.3)" }}
          />

          {/* Bars for Call and Put OI Change */}
          <Bar
            dataKey="callChange"
            barSize={20}
            fill="#E96667"
            name="callChange"
          />
          <Bar
            dataKey="putChange"
            barSize={20}
            fill="#64CE6B"
            name="putChange"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OIChangeChart;
