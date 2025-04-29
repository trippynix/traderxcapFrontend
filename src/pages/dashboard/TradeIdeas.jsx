import React from "react";
import useTheme from "../../context/ThemeContext";
import TradeIdeasLight from "./light/TradeIdeasLight";
import TradeIdeasDark from "./dark/TradeIdeasDark";

export default function TradeIdeas() {
  const { themeMode } = useTheme();
  return (
    <>{themeMode === "light" ? <TradeIdeasLight /> : <TradeIdeasDark />}</>
  );
}
