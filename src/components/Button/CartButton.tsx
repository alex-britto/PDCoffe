import { ShoppingCartSimple } from "phosphor-react"
import styled, { css } from "styled-components"
import { defaultTheme } from "../../styles/themes/defaultTheme"

export interface CartButtonProps {
  icon: any
  //   ver qual a tipagem se encaixaria melhor aqui
}

const CartButton = ({ icon }: CartButtonProps) => {
  return (
    <>
      <StyledCartButton>
        {!!icon && (
          <ShoppingCartSimple
            size={24}
            color={defaultTheme.colors.base.card}
            weight="fill"
            className="flex items-center"
          />
        )}
      </StyledCartButton>
    </>
  )
}

const StyledCartButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple.dark};
    color: ${theme.colors.base.card};
    border: none;
    border-radius: 6px;

    text-transform: uppercase;
    font-family: "Roboto";

    padding: 8px;
    width: 38px;
    height: 38px;
    transition: 0.2s;

    &:hover {
      background-color: ${theme.colors.purple.default};
      transition: 0.2s ease;
    }
  `}
`

export default CartButton
