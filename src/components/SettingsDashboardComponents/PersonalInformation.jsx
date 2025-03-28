import React, { useContext, useState, useEffect } from "react";
import profileLogo from "../../assets/images/profile.svg";
import Context from "../../context";
import "../../styles/PersonalInformation.css";
import SummaryAPI from "../../common";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useTheme from "../../context/ThemeContext";
import PLLIGHT from "./PLLIGHT";
import PLDARK from "./PLDARK";

export default function PersonalInformation() {
  const { themeMode } = useTheme();
  return <>{themeMode === "light" ? <PLLIGHT /> : <PLDARK />}</>;
}
