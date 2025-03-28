import React from "react";
import billingLogo from "../../assets/images/bill.svg";
import visaLogo from "../../assets/images/visa.svg";
import plusSign from "../../assets/images/add.svg";
import "../../styles/Billing.css";
import useTheme from "../../context/ThemeContext";
import BillingLight from "./BillingLight";
import BillingDark from "./BillingDark";

export default function PersonalInformation() {
  const { themeMode } = useTheme();
  return <>{themeMode === "light" ? <BillingLight /> : <BillingDark />}</>;
}
