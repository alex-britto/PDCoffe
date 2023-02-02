import styled, { css } from "styled-components"
import { CartItem } from "../CartItem/CartItem"
import { CoffeeProps } from "../CatalogItem/CatalogItem"

interface CartListProps extends React.HTMLAttributes<HTMLDivElement> {
  list: CoffeeProps[]
  minQuantity?: number
  maxQuantity?: number
}

export const CartList = ({
  list,
  minQuantity,
  maxQuantity,
  ...props
}: CartListProps) => {
  return (
    <CoffeesList {...props}>
      {list.map((coffee) => (
        <CartItem
          key={coffee.id}
          coffee={coffee}
          minQuantity={minQuantity}
          maxQuantity={maxQuantity}
        />
      ))}
    </CoffeesList>
  )
}

const CoffeesList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 0 auto;

    & > div + div {
      &:before {
        content: "";
        display: block;
        border-top: 1px solid ${theme.colors.base.button};
        margin-top: 24px;
        margin-bottom: 24px;
      }
    }
  `}
`
