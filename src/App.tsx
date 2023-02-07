import styled, { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/themes/defaultTheme"
import { 
  ButtonsExample, 
  NumberInputExample, 
  SelectInputExample, 
  StatusExample, 
  TypographyExample, 
  CatalogItemExample, 
  CartItemExample, 
  TextFieldExample 
} from "./components"
import { useEffect, useState } from "react"
import { CoffeeProps } from "./components/CatalogItem/CatalogItem"
import { api } from "./services/api"

function App() {
  const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleGetCoffeesFromApi = async () => {
    try {
      setIsLoading(true)
      const response = await api.get("/coffees")
      setCoffeeList(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleGetCoffeesFromApi()
  }, [])

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
            <TextFieldExample />
          </Container>
          <Container>
            <StatusExample />
          </Container> 
          <Container>
            <TypographyExample />
          </Container>
          <Container>
            <CatalogItemExample coffeeList={coffeeList} isLoading={isLoading} />
          </Container>
          <Container>
            <CartItemExample />
          </Container>
     </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
`
export default App