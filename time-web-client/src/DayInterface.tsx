import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import "./DayInterface.css";

const theme = createTheme();

const DayInterface = () => {
  const location = useLocation();
  const { inputValue } = location.state || { inputValue: "" };
  const [selectedDate, setSelectedDate] = useState<Date | [Date, Date] | null>(
    null
  );


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes styles */}
      <div className="DayInterface">
        <div className="upper-content">
          <div className="upper-top-text">Time Web</div>
          <img src="/images/globe_anim.gif" alt="Logo" />
        </div>
        <div className="middle-content">
          <div className="rounded-rectangle">
            <p>Input Value: {inputValue}</p>

          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DayInterface;
