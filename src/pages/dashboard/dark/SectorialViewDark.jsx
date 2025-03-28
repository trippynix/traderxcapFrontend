import React, { useEffect } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderDark from "./DashboardHeaderDark";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
  Cell,
} from "recharts";

export default function SectorialViewDark() {
  const data = [
    { name: "Stock A", change: 1.2 },
    { name: "Stock B", change: -0.5 },
    { name: "Stock C", change: 2.1 },
    { name: "Stock D", change: -0.8 },
    { name: "Stock E", change: 1.6 },
    { name: "Stock A", change: 1.2 },
    { name: "Stock B", change: -0.5 },
    { name: "Stock C", change: 2.1 },
    { name: "Stock D", change: -0.8 },
    { name: "Stock E", change: 1.6 },
    { name: "Stock A", change: 1.2 },
    { name: "Stock B", change: -0.5 },
    { name: "Stock C", change: 2.1 },
    { name: "Stock D", change: -0.8 },
    { name: "Stock E", change: 1.6 },
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
  return (
    <div className="d-flex flex-row">
      <Sidebar tab={"Sectorial View"} />
      <div
        className="container-fluid d-flex flex-column"
        style={{ backgroundColor: "#000000" }}
      >
        <DashboardHeaderDark
          title={"Sectorial View"}
          subTitle={"asdasdasdas"}
        />
        <hr style={{ color: "white", backgroundColor: "white" }} />
        <ResponsiveContainer
          width="100%"
          height={450}
          stroke="white"
          strokeWidth={1}
        >
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
          >
            <CartesianGrid horizontal={true} vertical={false} stroke="white" />
            <XAxis
              dataKey="name"
              angle={-90}
              textAnchor="end"
              height={80}
              tick={{ fontSize: 12, fill: "#ffffff" }}
            />
            <YAxis
              domain={["auto", "auto"]}
              tickFormatter={(tick) => `${tick}`}
              tick={{ fill: "#ffffff" }}
            />
            <Tooltip />
            <ReferenceLine y={0} stroke="white" strokeWidth={1} />{" "}
            {/* X-axis at 0 */}
            {/* Corrected Bar Implementation */}
            <Bar dataKey="change" barSize={35} radius={[5, 5, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.change < 0 ? "#ED1C1C" : "#8884d8"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
