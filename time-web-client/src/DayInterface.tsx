import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useLocation } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import "./DayInterface.css";
import { collapseWhiteSpace } from "collapse-white-space";

const theme = createTheme();

interface DataItem {
  text: string;
}

const DayInterface = () => {
  const location = useLocation();
  const {
    inputValue,
    results = [],
    file_content = "",
  } = location.state || {
    inputValue: "",
    results: [],
    file_content: "",
  };

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
            <ul>
              {results.map((item: DataItem, index: number) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>
            <div className="file-content">
              <h3>File Content:</h3>
              <pre>{collapseWhiteSpace(file_content)}</pre>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DayInterface;
