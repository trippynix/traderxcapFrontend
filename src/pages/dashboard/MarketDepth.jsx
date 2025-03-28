import React from "react";
import "../../styles/MarketDepth.css";
import useTheme from "../../context/ThemeContext";
import MarketDepthDark from "./dark/MarketDepthDark";
import MarketDepthLight from "./light/MarketDepthLight";

export default function MarketDepth() {
  const { themeMode } = useTheme();
  return (
    <>{themeMode === "light" ? <MarketDepthLight /> : <MarketDepthDark />}</>
  );
}
