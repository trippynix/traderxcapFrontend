import React, { useContext, useEffect, useState } from "react";
import "../../styles/Settings.css";
import SideBar from "../../components/SideBar";
import PersonalInformation from "../../components/SettingsDashboardComponents/PersonalInformation";
import Billing from "../../components/SettingsDashboardComponents/Billing";
import ChangePassword from "../../components/SettingsDashboardComponents/ChangePassword";
import { Link, useNavigate } from "react-router-dom";

import Context from "../../context";
import SummaryAPI from "../../common";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../store/userSlice";
import { useAuthCheck } from "../../components/useAuthCheck";
import useTheme from "../../context/ThemeContext";
import SettingsLight from "./light/SettingsLight";
import SettingsDark from "./dark/SettingsDark";

export default function Settings() {
  const { themeMode } = useTheme();

  return <>{themeMode === "light" ? <SettingsLight /> : <SettingsDark />}</>;
}
