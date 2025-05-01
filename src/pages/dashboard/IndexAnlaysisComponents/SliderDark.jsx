import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

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

export default function SliderDark({ onTimeChange, onGoButtonClick }) {
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

    const convertedTimes = [
      convertToTime(Math.max(0, min)),
      convertToTime(Math.min(100, max)),
    ];

    onTimeChange?.(convertedTimes[0], convertedTimes[1]); // call only if prop is passed
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

  // console.log(values.map(convertToTime));
  return (
    <div className="flex flex-col items-center w-full">
      <Box sx={{ width: "100%" }}>
        <Slider
          value={values}
          onChange={handleChange}
          min={0}
          max={100}
          step={1.333333333}
          marks={timeMarks}
          disableSwap
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => convertToTime(value)}
          sx={{
            height: 10,
            "& .MuiSlider-thumb": {
              width: 40,
              height: 20,
              borderRadius: 10,
              backgroundColor: "white",
              border: "2px solid #4c4c84",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#4c4c84",
                borderColor: "#4c4c84",
              },
              "&.Mui-focusVisible": {
                boxShadow: "0px 0px 8px #4c4c84",
              },
            },
            "& .MuiSlider-rail": {
              backgroundColor: "#4c4c84",
            },
            "& .MuiSlider-track": {
              backgroundColor: "#4c4c84",
            },
            "& .MuiSlider-markLabel": {
              color: "white",
              fontWeight: "bold",
              fontSize: {
                xs: "6px", // <600px
                sm: "10px", // 600-900px
                md: "14px", // >900px
              },
            },
          }}
        />
      </Box>

      <div className="mt-0 md:mt-2 lg:mt-4" />

      <button
        type="button"
        className="bg-black text-white text-[10px] md:text-xs lg:text-base border border-white px-1 lg:px-6 py-1 lg:py-2 rounded-md hover:bg-white hover:cursor-pointer hover:text-black active:bg-white active:text-black transition-all duration-300 w-1/4 text-center"
        onClick={onGoButtonClick}
      >
        GO
      </button>
    </div>
  );
}
