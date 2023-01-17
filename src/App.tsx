import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaultTheme"
import SelectGroup from "./components/SelectGroup"
import { paymentOptions } from "./constants/constants"
import { useState } from "react"

function App() {
  const [value, setValue] = useState("")

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="flex gap-4 flex-col justify-center items-center h-[80vh]">
        <SelectGroup
          options={paymentOptions}
          value={value}
          onChange={(value) => setValue(value)}
        />
        {value && <div>Opção selecionada: {value}</div>}
      </div>
    </ThemeProvider>
  )
}

export default App
