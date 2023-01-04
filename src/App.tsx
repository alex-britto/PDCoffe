import styled, { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/themes/defaultTheme"
import { ButtonsExample, NumberInput, SelectInputExamples } from "./components"

function App() {
  return (
     <ThemeProvider theme={defaultTheme}>
        <Container>
          <ButtonsExample />
        </Container>
        <Container>
          <NumberInput className="m-4"/>
        </Container>
          <SelectInputExamples />
     </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
`

export default App