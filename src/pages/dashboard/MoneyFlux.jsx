import React from "react";
import useTheme from "../../context/ThemeContext";
import MoneyFluxLight from "./light/MoneyFluxLight";
import MoneyFluxDark from "./dark/MoneyFluxDark";

export default function MoneyFlux() {
  const { themeMode } = useTheme();
  return <>{themeMode === "light" ? <MoneyFluxLight /> : <MoneyFluxDark />}</>;
}
