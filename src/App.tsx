import {
  Bank,
  CreditCard,
  Money,
  ShoppingCartSimple,
  Trash,
} from "phosphor-react"
import { useEffect, useState } from "react"
import styled, { ThemeProvider, useTheme } from "styled-components"
import {
  Button,
  CatalogItem,
  NumberInput,
  SelectableCards,
  Status,
  TextField,
} from "./components"
import { CoffeeTypes } from "./components/CatalogItem/CatalogItem"
import { Test } from "./components/Test/Test"
import { api } from "./services/api"
import { defaultTheme } from "./styles/themes/defaultTheme"

function App() {
  const [value, setValue] = useState<string>("")
  const [number, setNumber] = useState<number>(1)
  const [selectedValue, setSelectedValue] = useState("Credito")

  const [coffeeList, setCoffeeList] = useState<CoffeeTypes[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const selectableCardsItems = [
    {
      id: "Credito",
      icon: <CreditCard size={16} />,
      title: "Cartão de crédito",
    },
    {
      id: "Debito",
      icon: <Bank size={16} />,
      title: "Cartão de débito",
    },
    {
      id: "Boleto",
      icon: <Money size={16} />,
      title: "Boleto",
    },
  ]

  const handleGetCoffeesFromApi = async () => {
    setIsLoading(true)
    const response = await api.get("/coffees")
    const data = response.data
    setCoffeeList(data)
    setIsLoading(false)
  }

  useEffect(() => {
    handleGetCoffeesFromApi()
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="m-4">
        <Test />

        <div className="flex w-full gap-10 items-center">
          <Button color="primary">Label</Button>
          <Button color="secondary">
            <ShoppingCartSimple size={22} color={defaultTheme.colors.white} />
          </Button>

          <Button color="base">
            <Trash
              size={16}
              color={defaultTheme.colors.purple.dark}
              className="mr-1"
            />
            Remover
          </Button>

          <Button color="light" quantity={2}>
            <ShoppingCartSimple
              size={22}
              color={defaultTheme.colors.yellow.dark}
            />
          </Button>
        </div>

        <TextField
          placeholder="Label"
          endLabel="Opcional"
          width="100%"
          maxWidth={500}
          className="mt-6"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <h1>Texto: {value}</h1>

        <div className="w-auto flex gap-3">
          <Status label="Tradicional" />
          <Status label="Com leite" />
          <Status label="Gelado" />
        </div>

        <div className="flex w-full gap-10 items-center mt-6">
          <SelectableCards
            items={selectableCardsItems}
            selectedDefault={selectedValue}
            onChange={setSelectedValue}
          />

          <p>Opção selecionada: {selectedValue}</p>
        </div>

        <NumberInput className="mt-6" value={number} onChange={setNumber} />
        <h1>Valor: {number}</h1>

        <CoffeesContainer>
          {isLoading ? (
            <p>Carregando...</p>
          ) : (
            coffeeList.map((coffee) => (
              <CatalogItem key={coffee.id} coffee={coffee} />
            ))
          )}
        </CoffeesContainer>
      </div>
    </ThemeProvider>
  )
}

const CoffeesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  width: 100%;
  max-width: 1180px;
  padding: 30px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
`

export default App
