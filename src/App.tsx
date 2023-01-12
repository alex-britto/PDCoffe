import { ShoppingCartSimple, Trash } from "phosphor-react"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Button, NumberInput, SelectInputList, TextField } from "./components"
import { defaultTheme } from "./styles/themes/defaultTheme"

function App() {
  const [numberInputValue, setNumberInputValue] = useState(0)
  const selectInputItems = [
    {
      id: "item1",
      title: "cartão de crédito",
    },
    {
      id: "item2",
      title: "cartão de débito",
    },
  ]
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="m-4">
        <TextField
          placeholder="Label"
          extraMessage="Opcional"
          containerProps={{ className: "w-1/2" }}
        />
      </div>
      <div className="m-4">
        <SelectInputList
          items={selectInputItems}
          onClick={(item) => console.log("clicou no item", item)}
        />
        <NumberInput
          value={numberInputValue}
          onIncreaseClick={() =>
            setNumberInputValue((numberInputValue) => numberInputValue + 1)
          }
          onDecreaseClick={() =>
            setNumberInputValue((numberInputValue) => numberInputValue - 1)
          }
        />
      </div>
      <div className="flex ">
        <div>
          <Button
            label="label"
            bgColor={defaultTheme.colors.yellow.default}
            bgHoverColor={defaultTheme.colors.yellow.dark}
            onClick={() => console.log("test")}
            className="m-4"
          />
          <Button
            label="label"
            bgColor={defaultTheme.colors.purple.dark}
            bgHoverColor={defaultTheme.colors.purple.default}
            icon={<ShoppingCartSimple size={22} color="white" />}
            onClick={() => console.log("test")}
            className="m-4"
          />
          <Button
            bgColor={defaultTheme.colors.purple.dark}
            bgHoverColor={defaultTheme.colors.purple.default}
            icon={<ShoppingCartSimple size={22} color="white" />}
            onClick={() => console.log("test")}
            className="m-4"
          />
          <Button
            bgColor={defaultTheme.colors.yellow.light}
            itemsQuantity={3}
            badgeColor={defaultTheme.colors.yellow.dark}
            icon={
              <ShoppingCartSimple
                size={22}
                color={defaultTheme.colors.yellow.dark}
              />
            }
            onClick={() => console.log("test")}
            className="m-4"
          />
        </div>
        <div>
          <Button
            variant="small"
            label="remover"
            bgColor={defaultTheme.colors.base.button}
            bgHoverColor={defaultTheme.colors.base.hover}
            textColor={defaultTheme.colors.base.subtitle}
            icon={
              <Trash size={16} color={defaultTheme.colors.purple.default} />
            }
            onClick={() => console.log("test")}
            className="m-4"
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
