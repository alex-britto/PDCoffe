import { ThemeProvider } from "styled-components";

import { AppRoutes } from "./routes/AppRoutes";
import { defaultTheme } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
