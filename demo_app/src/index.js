import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "./components";
import theme from "./theme";

ReactDOM.render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
