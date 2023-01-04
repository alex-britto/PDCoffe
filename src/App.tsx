import styled, { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/themes/defaultTheme"
import { ButtonsExample } from "./components/Button"

function App() {
  return (
     <ThemeProvider theme={defaultTheme}>
        <Container>
          <ButtonsExample />
        </Container>
     </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
`

export default App