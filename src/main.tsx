import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { ThemeProvider } from "styled-components";
import { styledComponentsTheme } from "./styles/themes/styledComponentsTheme";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <ThemeProvider theme={styledComponentsTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
