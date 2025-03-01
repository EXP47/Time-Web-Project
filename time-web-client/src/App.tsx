import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import TestButton from "./TestButton";


const theme = createTheme();


function App() {
  const [inputValue, setInputValue] = useState("");
  const [backendData, setBackendData] = useState([({})]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()).then(data => setBackendData(data));
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
            <button className="custom-button">Link MAL</button>
          </div>
          <div className="description"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
