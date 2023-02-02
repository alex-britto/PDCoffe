import { useEffect, useState } from "react"
import styled, { ThemeProvider } from "styled-components"

import {
  ButtonsExample,
  CartListExample,
  CatalogListExample,
  NumberInputExample,
  SelectableCardsExample,
  StatusExample,
  TextFieldExample,
  TypographyExample,
} from "./components/Examples"
import { Test } from "./components/Test/Test"

import { CoffeeProps } from "./components/CatalogItem/CatalogItem"
import { api } from "./services/api"

import { defaultTheme } from "./styles/themes/defaultTheme"

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
      <div className="m-4">
        <Test />

        <Container>
          <ButtonsExample />
        </Container>

        <TextFieldExample />

        <Container>
          <StatusExample />
        </Container>

        <Container>
          <SelectableCardsExample />
        </Container>

        <NumberInputExample />

        <TypographyExample />

        <CartListExample coffeeList={coffeeList} />

        <CatalogListExample coffeeList={coffeeList} isLoading={isLoading} />
      </div>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  width: 100%;
`

export default App
