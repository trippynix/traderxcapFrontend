import React from "react";
import useTheme from "../../context/ThemeContext";
import SwingCenterLight from "./light/SwingCenterLight";
import SwingCenterDark from "./dark/SwingCenterDark";

export default function SwingCenter() {
  const { themeMode } = useTheme();
  return (
    <>{themeMode === "light" ? <SwingCenterLight /> : <SwingCenterDark />}</>
  );
}
