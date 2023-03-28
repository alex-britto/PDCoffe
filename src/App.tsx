import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { CoffeeProvider } from "./contexts";
import { AppRoutes } from "./routes";
import { defaultTheme } from "./styles/themes";

function App() {
  return (
    <CoffeeProvider>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
        <ToastContainer position="top-center" />
      </ThemeProvider>
    </CoffeeProvider>
  );
}

export default App;
