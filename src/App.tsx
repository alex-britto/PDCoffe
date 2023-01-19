import styled, { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/themes/defaultTheme"
import { 
  ButtonsExample, 
  NumberInputExample, 
  SelectInputExample, 
  TextField, 
  StatusExample, 
  TypographyExample, 
  CatalogItemExample, 
  CartItemExample, 
  TextFieldExample 
} from "./components"

function App() {
  return (
     <ThemeProvider theme={defaultTheme}>
        {/* <Container>
          <ButtonsExample />
        </Container>
        <Container>
          <NumberInputExample />
        </Container>
        <Container>
          <SelectInputExample />
          </Container> */}
          <Container>
            <TextFieldExample />
          </Container>
          {/* <Container>
            <StatusExample />
          </Container>
          <Container>
            <TypographyExample />
          </Container>
          <Container>
            <CatalogItemExample />
          </Container>
          <Container>
            <CartItemExample />
          </Container> */}
     </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
`
export default App