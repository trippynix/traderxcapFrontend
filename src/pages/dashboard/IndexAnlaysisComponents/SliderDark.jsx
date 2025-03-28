import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./SliderDark.css";

const generateTimeMarks = () => {
  const startMinutes = 9 * 60 + 15; // 9:15 AM in minutes
  const endMinutes = 15 * 60 + 30; // 3:30 PM in minutes
  const step = (endMinutes - startMinutes) / 10; // 11 parts means 10 intervals

  return Array.from({ length: 11 }, (_, i) => {
    let totalMinutes = startMinutes + i * step;
    let hours = Math.floor(totalMinutes / 60);
    let mins = Math.round(totalMinutes % 60);

    if (mins === 60) {
      hours += 1;
      mins = 0;
    }

    return {
      value: (i * 100) / 10,
      label: `${hours}:${mins.toString().padStart(2, "0")}`,
    };
  });
};

const timeMarks = generateTimeMarks();

const convertToTime = (value) => {
  const startMinutes = 9 * 60 + 15;
  const endMinutes = 15 * 60 + 30;
  let minutes = startMinutes + (value * (endMinutes - startMinutes)) / 100;
  let hours = Math.floor(minutes / 60);
  let mins = Math.round(minutes % 60);

  if (mins === 60) {
    hours += 1;
    mins = 0;
  }

  return `${hours}:${mins.toString().padStart(2, "0")}`;
};

export default function SliderDark() {
  const [values, setValues] = useState([0, 100]);

  // Minimum gap in percentage
  const minGapPercentage = (5 / (15 * 60 + 30 - (9 * 60 + 15))) * 100; // ~1.282%

  const handleChange = (_, newValue) => {
    let [min, max] = newValue;

    // Enforce the minimum 5-minute gap both ways
    if (max - min < minGapPercentage) {
      if (min === values[0]) {
        max = min + minGapPercentage;
      } else {
        min = max - minGapPercentage;
      }
    }

    setValues([Math.max(0, min), Math.min(100, max)]);
  };

  const sendDataToBackend = async () => {
    const timeRange = values.map(convertToTime);
    try {
      const response = await fetch("/api/submit-time", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ start: timeRange[0], end: timeRange[1] }),
      });
      const data = await response.json();
      console.log("Response from backend:", data);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  console.log(values.map(convertToTime));
  return (
    <div className="d-flex flex-column align-items-center">
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Slider
          className="text-white"
          value={values}
          sx={{
            height: 10,
            "& .MuiSlider-thumb": {
              width: 40, // Increase thumb width to look like a switch
              height: 20, // Height to make it rectangular
              borderRadius: 10, // Rounded edges like a switch
              backgroundColor: "white",
              border: "2px solid #4c4c84", // Blue border for switch-like look
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#4c4c84", // Blue background on hover
                borderColor: "#4c4c84",
              },
              "&.Mui-focusVisible": {
                boxShadow: "0px 0px 8px #4c4c84",
              },
            },
            "& .MuiSlider-rail": {
              backgroundColor: "#4c4c84", // Light grey rail
            },
            "& .MuiSlider-track": {
              backgroundColor: "#4c4c84", // Blue track
            },
            "& .MuiSlider-markLabel": {
              color: "white", // Change label color
              fontWeight: "bold",
              fontSize: "14px",
            },
          }}
          onChange={handleChange}
          min={0}
          max={100}
          step={1.333333333} // 5-minute steps
          marks={timeMarks}
          disableSwap
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => convertToTime(value)}
        />
      </Box>
      <div></div>
      <button
        type="button"
        className="btn btn-secondary goButton py-0 border border-light text-white"
        style={{ backgroundColor: "#000000", width: "25%" }}
        onClick={sendDataToBackend}
      >
        GO
      </button>
    </div>
  );
}
