import styled from "styled-components"
import { ShoppingCartSimple, Trash } from "phosphor-react"

import { defaultTheme } from "../../styles/themes/defaultTheme"
import Button from "./Button"

const ButtonsExample = () => {
  return (
    <Container>
        <Button 
          label="Botão simples"
          bgColor={defaultTheme.colors.yellow.default}
          bgHoverColor={defaultTheme.colors.yellow.dark}
          textColor={defaultTheme.colors.white}
          onClick={() => console.log("click botão simples")}
          className="m-4"
        />
        <Button 
          icon={<ShoppingCartSimple size={20} weight="fill" color="white" />}
          bgColor={defaultTheme.colors.purple.default}
          bgHoverColor={defaultTheme.colors.purple.dark}
          textColor={defaultTheme.colors.white}
          onClick={() => console.log("comprei")}
          className="m-4"
        />
          <Button
            variant="small"
            label="remover"
            bgColor={defaultTheme.colors.base.button}
            bgHoverColor={defaultTheme.colors.base.hover}
            textColor={defaultTheme.colors.base.text}
            icon={
              <Trash size={16} color={defaultTheme.colors.purple.default} />
            }
            onClick={() => console.log("test")}
            className="m-4"
          />
          </Container>
  )
}

const Container = styled.div`
  display: flex;
`

export default ButtonsExample