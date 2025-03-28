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
            <strong className="fw-light">Call OI Change:</strong>{" "}
            {data.callChange}
          </span>
        </div>

        {/* Put OI */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="12" height="12" style={{ border: "solid 1px white" }}>
            <rect width="12" height="12" fill="#64CE6B" />
          </svg>
          <span style={{ marginLeft: 5 }}>
            <strong className="fw-light">Put OI Change:</strong>{" "}
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
    <ResponsiveContainer
      className="bg-dark border border-secondary rounded"
      width="100%"
      height={400}
    >
      <BarChart
        data={data}
        margin={{ top: 40, right: 30, left: 20, bottom: 20 }}
      >
        {/* Grid with faint lines */}
        <CartesianGrid stroke="rgba(255, 255, 255, 0.2)" strokeDasharray="0" />

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
              <span style={{ color: "white" }}>
                {value === "callOI" ? "Call OI Change" : "Put OI Change"}
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
          name="Call OI Change"
        />
        <Bar
          dataKey="putChange"
          barSize={20}
          fill="#64CE6B"
          name="Put OI Change"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default OIChangeChart;
