import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import CalendarInterface from "./CalendarInterface";

const theme = createTheme();

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("Button clicked", inputValue);
    alert("Text Box:" + " " + inputValue);
    navigate("/calendar"); // Navigate to the CalendarInterface component
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes styles */}
      <div className="App">
        <div className="upper-content">
          <div className="upper-top-text">Time Web</div>
          <img src="/images/globe_anim.gif" alt="Logo" />
        </div>
        <div className="middle-content">
          <div className="input-button-container">
            <TextField
              label="type here"
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
              className="custom-text-field"
            />
            <button className="custom-button" onClick={handleButtonClick}>
              Link MAL
            </button>
          </div>
          <div className="description"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calendar" element={<CalendarInterface />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
