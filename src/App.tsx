import { ThemeProvider } from "styled-components";
import { Home } from "./pages";
import { defaultTheme } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
