import { ShoppingCart } from "phosphor-react";
import { ThemeProvider } from "styled-components";
import { Button } from "./components";
import { defaultTheme } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>
        Click here{" "}
        <ShoppingCart size={32} color={defaultTheme.colors.yellow.dark} />
      </Button>
    </ThemeProvider>
  );
}

export default App;
