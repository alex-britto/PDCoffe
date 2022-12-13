import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./styles/index.css";
import { defaultTheme } from "./styles/themes/defaultTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ThemeProvider theme={defaultTheme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>
);
