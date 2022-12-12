import styled from "styled-components"
import { AirplaneTakeoff } from "phosphor-react"
import { defaultTheme } from "../../styles/themes/defaultTheme"
import Button from "../Button/Button"
import CartButton from "../Button/CartButton"
import DeleteButton from "../Button/DeleteButton"

export const Test = () => {
  return (
    <>
      <Container className="my-6 ml-auto items-center">
        Test component
        <AirplaneTakeoff size={32} color={defaultTheme.colors.purple.default} />
      </Container>
      <Container className="max-w-sm">
        <Button title="olá" />
      </Container>
      <Container className="max-w-sm">
        <CartButton icon />
      </Container>
      <Container className="max-w-sm">
        <DeleteButton icon title="Remover" />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  height: 50px;
`
