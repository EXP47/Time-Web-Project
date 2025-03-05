import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import DayInterface from "./DayInterface";
import axios from "axios";
import "./App.css";

const theme = createTheme();

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleButtonClick = async () => {
    console.log("Button clicked", inputValue);
    alert("Text Box:" + " " + inputValue);

    try {
      const response = await axios.post("http://localhost:5000/scrapBlogs", {
        username: inputValue,
      });
      const { results, file_content } = response.data;
      console.log("Response data:", results, file_content); // Log the response data
      navigate("/day", { state: { inputValue, results, file_content } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
        <Route path="/day" element={<DayInterface />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
