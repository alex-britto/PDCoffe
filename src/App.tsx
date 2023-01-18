import styled, { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/themes/defaultTheme"
import { ButtonsExample, NumberInputExample, SelectInputExample, TextField, StatusExample, TypographyExample, CatalogItemExample } from "./components"

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
            <TextField placeholder="placeholder" endLabel="endlabel aqui" containerProps={{ className: "m-4 w-1/2" }}/>
          </Container>
          <Container>
            <StatusExample />
          </Container>
          <Container>
            <TypographyExample />
          </Container>
          <Container>
            <CatalogItemExample />
          </Container>
     </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
`
export default App