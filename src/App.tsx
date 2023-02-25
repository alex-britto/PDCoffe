import "react-toastify/dist/ReactToastify.css";

import { AppRoutes } from "./routes";
import { CoffeeProvider } from "./contexts";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
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
