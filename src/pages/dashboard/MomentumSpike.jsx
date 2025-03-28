import React, { useEffect } from "react";
import useTheme from "../../context/ThemeContext";
import MomentumSpikeDark from "./dark/MomentumSpikeDark";
import MomentumSpikeLight from "./light/MomentumSpikeLight";

export default function MomentumSpike() {
  const { themeMode } = useTheme();
  return (
    <>
      {themeMode === "light" ? <MomentumSpikeLight /> : <MomentumSpikeDark />}
    </>
  );
}
