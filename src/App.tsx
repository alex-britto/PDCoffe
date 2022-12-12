import { ShoppingCartSimple, Trash } from "phosphor-react"
import { ThemeProvider } from "styled-components"
import { Button } from "./components/Button/Button"
import { Test } from "./components/Test/Test"
import { defaultTheme } from "./styles/themes/defaultTheme"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
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
    </ThemeProvider>
  )
}

export default App
