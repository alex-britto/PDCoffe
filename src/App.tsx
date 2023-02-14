import { ThemeProvider } from "styled-components";

import { CoffeeProvider } from "./contexts";
import { AppRoutes } from "./routes/AppRoutes";
import { defaultTheme } from "./styles/themes";

function App() {
  return (
    <CoffeeProvider>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
      </ThemeProvider>
    </CoffeeProvider>
  );
}

export default App;
