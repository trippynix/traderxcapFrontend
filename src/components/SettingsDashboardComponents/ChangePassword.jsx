import React from "react";
import useTheme from "../../context/ThemeContext";
import CPDark from "./CPDark";
import CPLight from "./CPLight";

export default function PersonalInformation() {
  const { themeMode } = useTheme();

  return <>{themeMode === "light" ? <CPLight /> : <CPDark />}</>;
}
