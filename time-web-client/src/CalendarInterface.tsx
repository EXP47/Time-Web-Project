import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useLocation } from "react-router-dom";
import { Calendar, CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarInterface.css";

const theme = createTheme();

const CalendarInterface = () => {
  const [selectedDate, setSelectedDate] = useState<Date | [Date, Date] | null>(
    null
  );

  const handleDateChange: CalendarProps["onChange"] = (value, _event) => {
    setSelectedDate(value as Date | [Date, Date] | null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes styles */}
      <div className="CalendarInterface">
        <div className="upper-content">
          <div className="upper-top-text">Time Web</div>
          <img src="/images/globe_anim.gif" alt="Logo" />
        </div>
        <div className="middle-content">
          <Calendar 
          value={selectedDate} 
          onChange={handleDateChange} 
          className={"custom-calendar"}
          />;

        </div>
      </div>
    </ThemeProvider>
  );
};

export default CalendarInterface;
