import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(243,128,16,1)",
      light: "rgba(243,128,16,1)",
      dark: "rgba(243,128,16,1)",
    },
    secondary: {
      main: "rgba(90,90,90,1)",
      dark: "rgba(90,90,90,1)",
      light: "rgba(90,90,90,1)",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "rgba(255,255,255,0.6)",
      disabled: "rgba(0,0,0,0.38)",
    },
    background: { paper: "rgba(90,90,90,1)", default: "rgba(90,90,90,1)" },
    mode: "light",
    error: { main: "rgba(243,128,16,1)" },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
