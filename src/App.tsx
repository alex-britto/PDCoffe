import { NumberInput, Status } from "./components";
import { useState } from "react";
import { useTheme } from "styled-components";

function App() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  return (
    <div className="m-4 w-full flex wrap">
      <div className="m-4">
        <NumberInput
          value={value}
          onChange={setValue}
          min={0}
          max={9}
        />
      </div>
      <div className="m-4">
        <Status
          text="Tradicional"
          backgroundColor={theme.colors.purple.light}
        />
      </div>
    </div>
  );
}

export default App;
