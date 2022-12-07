import { ThemeProvider } from "styled-components"
import { Test } from "./components/Test/Test"
import { defaultTheme } from "./styles/themes/defaultTheme"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Test />
    </ThemeProvider>
  )
}

export default App
