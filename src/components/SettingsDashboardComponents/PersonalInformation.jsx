import React, { useContext, useState, useEffect } from "react";

import "react-phone-input-2/lib/style.css";
import useTheme from "../../context/ThemeContext";
import PLLIGHT from "./PLLIGHT";
import PLDARK from "./PLDARK";

export default function PersonalInformation() {
  const { themeMode } = useTheme();
  return <>{themeMode === "light" ? <PLLIGHT /> : <PLDARK />}</>;
}
