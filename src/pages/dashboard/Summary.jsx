import React from "react";
import useTheme from "../../context/ThemeContext";
import SummaryLight from "./light/SummaryLight";
import SummaryDark from "./dark/SummaryDark";

export default function Summary() {
  const { themeMode } = useTheme();
  return <>{themeMode === "light" ? <SummaryLight /> : <SummaryDark />}</>;
}
