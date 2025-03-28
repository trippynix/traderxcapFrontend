import React from "react";
import useTheme from "../../context/ThemeContext";
import IndexAnalysisDark from "./dark/IndexAnalysisDark";
import IndexAnalysisLight from "./light/IndexAnalysisLight";

export default function IndexAnalysis() {
  const { themeMode } = useTheme();
  return (
    <>
      {themeMode === "light" ? <IndexAnalysisLight /> : <IndexAnalysisDark />}
    </>
  );
}
