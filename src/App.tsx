import {
  Bank,
  CreditCard,
  Money,
  ShoppingCartSimple,
  Trash,
} from "phosphor-react"
import { useState } from "react"
import { ThemeProvider, useTheme } from "styled-components"
import {
  Button,
  CatalogItem,
  NumberInput,
  SelectableCards,
  TextField,
} from "./components"
import { Test } from "./components/Test/Test"
import { defaultTheme } from "./styles/themes/defaultTheme"

function App() {
  const [value, setValue] = useState<string>("")
  const [number, setNumber] = useState<number>(1)
  const [selectedValue, setSelectedValue] = useState("Credito")

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
          onChange={setValue}
        />

        <h1>Texto: {value}</h1>

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

        <div className="flex w-full gap-10 items-center mt-6">
          <CatalogItem />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
