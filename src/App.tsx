import { NumberInput } from "./components";
import { ThemeProvider } from "styled-components";
import { styledComponentsTheme } from "./styles/themes/styledComponentsTheme";
import { useState } from "react";
function App() {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={styledComponentsTheme}>
      <NumberInput
        value={value}
        onChange={setValue}
        min={0}
        max={9}
      />
    </ThemeProvider>
  );
}

export default App;
