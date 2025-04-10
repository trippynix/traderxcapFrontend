import React from "react";
import useTheme from "../../context/ThemeContext";
import BillingLight from "./BillingLight";
import BillingDark from "./BillingDark";

export default function PersonalInformation() {
  const { themeMode } = useTheme();
  return <>{themeMode === "light" ? <BillingLight /> : <BillingDark />}</>;
}
