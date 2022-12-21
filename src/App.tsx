import { ThemeProvider } from "styled-components"
import { Example } from "./components/Example/Example"
import { defaultTheme } from "./styles/themes/defaultTheme"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Example />
    </ThemeProvider>
  )
}

export default App
