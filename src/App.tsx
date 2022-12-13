import { ThemeProvider } from "styled-components"
import { List } from "./components/Test/Test"
import { defaultTheme } from "./styles/themes/defaultTheme"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <List />
    </ThemeProvider>
  )
}

export default App
