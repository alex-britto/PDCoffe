import {
  NumberInput,
  Status,
  Typography,
  TypographyV2,
} from "./components";
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
      <div className="m-4">
        <Typography variant="h1">
          h1
        </Typography>
        <Typography variant="h1" fontSize="32px">
          h1 com tamanho alterado
        </Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
        {/* <Typography variant="body">body</Typography> */}
        <Typography variant="text">text</Typography>
      </div>
    </div>
  );
}

export default App;
