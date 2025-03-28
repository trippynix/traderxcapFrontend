import React from "react";
import useTheme from "../../context/ThemeContext";
import SectorialViewLight from "./light/SectorialViewLight";
import SectorialViewDark from "./dark/SectorialViewDark";

export default function SectorialView() {
  const { themeMode } = useTheme();
  return (
    <>
      {themeMode === "light" ? <SectorialViewLight /> : <SectorialViewDark />}
    </>
  );
}
