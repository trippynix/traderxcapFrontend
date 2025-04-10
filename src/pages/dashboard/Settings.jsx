import React, { useContext, useEffect, useState } from "react";
import useTheme from "../../context/ThemeContext";
import SettingsLight from "./light/SettingsLight";
import SettingsDark from "./dark/SettingsDark";

export default function Settings() {
  const { themeMode } = useTheme();

  return <>{themeMode === "light" ? <SettingsLight /> : <SettingsDark />}</>;
}
