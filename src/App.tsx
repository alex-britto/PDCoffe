import styled, { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/themes/defaultTheme"
import { ButtonsExample, NumberInputExample, SelectInputExample, TextField } from "./components"

function App() {
  return (
     <ThemeProvider theme={defaultTheme}>
        <Container>
          <ButtonsExample />
        </Container>
        <Container>
          <NumberInputExample />
        </Container>
        <Container>
          <SelectInputExample />
          </Container>
          <Container>
            <TextField placeholder="placeholder" endLabel="label aqui" className="m-4"/>
          </Container>
     </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
`

export default App