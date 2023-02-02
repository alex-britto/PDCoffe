import { ShoppingCartSimple, Trash } from "phosphor-react"
import { useTheme } from "styled-components"
import { Button } from "../Button/Button"

export const ButtonsExample = () => {
  const theme = useTheme()

  return (
    <>
      <Button color="primary">Label</Button>
      <Button color="secondary">
        <ShoppingCartSimple size={22} color={theme.colors.white} />
      </Button>

      <Button color="base">
        <Trash size={16} color={theme.colors.purple.dark} className="mr-1" />
        Remover
      </Button>

      <Button color="light" quantity={2}>
        <ShoppingCartSimple size={22} color={theme.colors.yellow.dark} />
      </Button>
    </>
  )
}
