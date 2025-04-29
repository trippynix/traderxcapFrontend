import React from "react";
import useTheme from "../../context/ThemeContext";
import CommunityLight from "./light/CommunityLight";
import CommunityDark from "./dark/CommunityDark";

export default function Community() {
  const { themeMode } = useTheme();
  return <>{themeMode === "light" ? <CommunityLight /> : <CommunityDark />}</>;
}
